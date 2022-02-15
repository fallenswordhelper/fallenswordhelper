import callApp from './callApp';

export default function bank(mode, amount) {
  return callApp({
    cmd: 'bank',
    subcmd: 'transaction',
    mode,
    amount,
  });
}
