import getApp from '../getApp';

export default function globalquests(data) {
  return getApp({ cmd: 'globalquests', ...data });
}
