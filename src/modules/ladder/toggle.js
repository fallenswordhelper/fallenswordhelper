import callApp from '../app/callApp';

export default async function toggle(ladderStatus) {
  const settings = await callApp({ cmd: 'settings' });
  if (settings === undefined || settings.s === false) {
    return settings;
  }

  const flags = settings.r.flags.map((e) => (e ? 1 : 0));
  flags[0] = ladderStatus ? 1 : 0;
  const response = await callApp({
    cmd: 'settings',
    subcmd: 'flags',
    flags,
  });

  return response;
}
