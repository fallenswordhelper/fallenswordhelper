import callApp from '../callApp';

export default function takeitems(invIdAry) {
  return callApp({
    cmd: 'tempinv',
    subcmd: 'takeitems',
    item: invIdAry,
  });
}
