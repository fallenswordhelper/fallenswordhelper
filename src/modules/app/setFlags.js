import callApp from './callApp';

export default function setFlags(flags) {
  return callApp({
    cmd: 'settings',
    subcmd: 'flags',
    flags,
  });
}
