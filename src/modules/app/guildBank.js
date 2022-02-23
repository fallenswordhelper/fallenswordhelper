import getApp from './getApp';

export default function guildBank(mode, amount) {
  return getApp({
    cmd: 'guild',
    subcmd: 'bank',
    subcmd2: 'transaction',
    mode,
    amount,
  });
}
