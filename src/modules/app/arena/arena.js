import getApp from '../getApp';

export default function arena(data) {
  return getApp({ cmd: 'arena', ...data });
}
