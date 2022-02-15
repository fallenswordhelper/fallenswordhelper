import getApp from '../getApp';

export default function takeitems(invIdAry) {
  return getApp({
    cmd: 'tempinv',
    subcmd: 'takeitems',
    item: invIdAry,
  });
}
