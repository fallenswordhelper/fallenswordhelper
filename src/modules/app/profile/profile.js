import getApp from '../getApp';

export default function profile(data) {
  return getApp({ cmd: 'profile', ...data });
}
