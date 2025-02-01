import getApp from '../getApp';

export default function points(data) {
  return getApp({ cmd: 'points', ...data });
}
