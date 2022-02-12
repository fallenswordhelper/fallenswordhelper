import getApp from '../getApp';

export default function settings(data) {
  return getApp({ cmd: 'settings', ...data });
}
