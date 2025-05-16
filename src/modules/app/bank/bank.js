import getApp from '../getApp';

export default function bank(data) {
  return getApp({ cmd: 'bank', subcmd: 'transaction', ...data });
}
