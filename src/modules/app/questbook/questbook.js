import getApp from '../getApp';

export default function questbook(data) {
  return getApp({ cmd: 'questbook', ...data });
}
