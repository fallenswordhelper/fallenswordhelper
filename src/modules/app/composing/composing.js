import getApp from '../getApp';

export default function composing(data) {
  return getApp({ cmd: 'composing', ...data });
}
