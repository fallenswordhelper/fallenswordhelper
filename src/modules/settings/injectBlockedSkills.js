import BlockedSkills from './BlockedSkills.svelte';

export function startApp(target) {
  return new BlockedSkills({
    props: {},
    target,
  });
}

export default function injectBlockedSkills() {
  startApp(document.getElementById('settingsTabs-4'));
}
