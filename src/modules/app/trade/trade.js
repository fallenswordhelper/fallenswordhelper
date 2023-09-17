import getApp from '../getApp';

export default function trade(data) {
  return getApp({ cmd: 'trade', ...data });
}
