import callApp from '../app/callApp';

export default async function ladderStatus() {
  const settings = await callApp({ cmd: 'settings' });
  if (settings !== undefined || settings.s === true) {
    return settings.r.flags[0];
  }
  return null;
}
