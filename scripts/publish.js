// Publish the release built by `npm run patch` (or `minor`) to gh-pages.
//
// Run from a clean master checkout once `npm run patch` has pushed:
//   npm run publish:gh-pages              check CI, then ask before pushing
//   npm run publish:gh-pages -- --dry-run do everything except push
//   npm run publish:gh-pages -- --yes     push without asking
//
// It stops unless CI has passed on the build commit, then commits dist/ to
// gh-pages in a temporary worktree. The previous patch folder is kept for
// players still on the old version.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { cp, mkdtemp, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { calfVer, core, version } from '../vite/version.js';

const USERSCRIPT = 'Releases/Current/fallenswordhelper.user.js';

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const yes = args.has('--yes');

class PublishError extends Error {}

function fail(message) {
  throw new PublishError(message);
}

function git(gitArgs, cwd = process.cwd()) {
  return execFileSync('git', gitArgs, { cwd, encoding: 'utf8' }).trim();
}

function repoSlug() {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  const match = /github\.com\/([^/]+\/[^/]+?)(?:\.git)?$/.exec(
    pkg.repository?.url ?? '',
  );
  if (!match) fail('package.json has no GitHub repository url');
  return match[1];
}

function upstreamRemote() {
  try {
    return git(['rev-parse', '--abbrev-ref', 'master@{upstream}']).split(
      '/',
    )[0];
  } catch {
    return fail('master has no upstream branch.');
  }
}

function checkCheckout(slug) {
  if (git(['status', '--porcelain'])) {
    fail('Working tree is not clean. Commit or stash changes first.');
  }
  if (git(['rev-parse', '--abbrev-ref', 'HEAD']) !== 'master') {
    fail('Not on master.');
  }
  if (!git(['tag', '--points-at', 'HEAD']).split('\n').includes(version)) {
    fail(`HEAD is not tagged ${version}. Run npm run patch first.`);
  }
  const remote = upstreamRemote();
  const url = git(['remote', 'get-url', remote]);
  if (!new RegExp(String.raw`${slug}(\.git)?/?$`).test(url)) {
    fail(`master tracks ${remote} (${url}), not ${slug}.`);
  }
  git(['fetch', '--quiet', remote, 'master', 'gh-pages']);
  const sha = git(['rev-parse', 'HEAD']);
  if (git(['rev-parse', `${remote}/master`]) !== sha) {
    fail(`HEAD is not the same commit as ${remote}/master.`);
  }
  const build = `dist/resources/prod/${core}`;
  if (!existsSync(join(build, calfVer))) {
    fail(`${build}/${calfVer} is missing. Was the build committed?`);
  }
  const published = `${remote}/gh-pages:resources/prod/${core}/${calfVer}`;
  try {
    execFileSync('git', ['cat-file', '-e', published], { stdio: 'ignore' });
    fail(`gh-pages already has ${core}/${calfVer}.`);
  } catch (err) {
    if (err instanceof PublishError) throw err;
  }
  return { remote, sha, build };
}

async function checkCi(slug, sha) {
  const res = await fetch(
    `https://api.github.com/repos/${slug}/actions/runs?head_sha=${sha}&event=push`,
    { headers: { Accept: 'application/vnd.github+json' } },
  );
  if (!res.ok) fail(`GitHub API returned ${res.status} ${res.statusText}`);
  const runs = (await res.json()).workflow_runs;
  const failed = runs.find(
    (r) => r.status === 'completed' && r.conclusion !== 'success',
  );
  if (failed) {
    fail(`CI "${failed.name}" ended ${failed.conclusion}: ${failed.html_url}`);
  }
  if (!runs.length || runs.some((r) => r.status !== 'completed')) {
    fail('CI has not finished yet. Try again in a minute.');
  }
  console.log('CI passed.');
}

// Highest patch folder below this release, or undefined if there is none.
async function previousPatch(target) {
  const entries = existsSync(target) ? await readdir(target) : [];
  return entries
    .filter((name) => /^\d+$/.test(name) && Number(name) < Number(calfVer))
    .map(Number)
    .sort((a, b) => b - a)
    .map(String)[0];
}

async function clearExcept(worktree, target, keep) {
  const entries = existsSync(target) ? await readdir(target) : [];
  const remove = entries.filter((name) => name !== keep);
  if (remove.length) {
    git(
      ['rm', '-r', '-q', '--', ...remove.map((n) => join(target, n))],
      worktree,
    );
  }
}

async function confirm(question) {
  if (yes) return true;
  const rl = createInterface({ input: stdin, output: stdout });
  const answer = await rl.question(`${question} [y/N] `);
  rl.close();
  return answer.trim().toLowerCase() === 'y';
}

async function publish({ remote, build }) {
  const worktree = await mkdtemp(join(tmpdir(), 'fsh-gh-pages-'));
  git([
    'worktree',
    'add',
    '--quiet',
    '--detach',
    worktree,
    `${remote}/gh-pages`,
  ]);
  try {
    const target = join(worktree, 'resources/prod', core);
    const keep = await previousPatch(target);
    await clearExcept(worktree, target, keep);
    await cp(build, target, { recursive: true });
    await cp(join('dist', USERSCRIPT), join(worktree, USERSCRIPT));
    git(['add', '-A'], worktree);
    // Skip hooks: the repo's pre-commit runs npm test, which can't run here.
    git(
      ['commit', '--quiet', '--no-verify', '-m', `Build ${version}`],
      worktree,
    );
    console.log(
      `Committed Build ${version} on gh-pages, keeping ${keep ?? 'no older folder'}:`,
      git(['diff', '--shortstat', 'HEAD~1', 'HEAD'], worktree),
    );
    if (dryRun) {
      console.log('Dry run: not pushed.');
    } else if (await confirm(`Push Build ${version} to ${remote}/gh-pages?`)) {
      execFileSync('git', ['push', remote, 'HEAD:gh-pages'], {
        cwd: worktree,
        stdio: 'inherit',
      });
      console.log('Pushed. GitHub Pages updates in about a minute.');
    } else {
      console.log('Not pushed.');
    }
  } finally {
    git(['worktree', 'remove', '--force', worktree]);
    await rm(worktree, { recursive: true, force: true });
  }
}

try {
  const slug = repoSlug();
  const checkout = checkCheckout(slug);
  console.log(`Publishing ${version} (${core}/${calfVer}) to ${slug}.`);
  await checkCi(slug, checkout.sha);
  await publish(checkout);
} catch (err) {
  if (!(err instanceof PublishError)) throw err;
  console.error(`publish: ${err.message}`);
  process.exitCode = 1;
}
