import getApp from './getApp';

export default function bank(mode, amount) {
  return getApp({
    cmd: 'bank',
    subcmd: 'transaction',
    mode,
    amount,
  });
}
