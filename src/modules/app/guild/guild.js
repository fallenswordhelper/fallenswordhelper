import getApp from '../getApp';

export default function guild(data) {
  return getApp({ cmd: 'guild', ...data });
}
