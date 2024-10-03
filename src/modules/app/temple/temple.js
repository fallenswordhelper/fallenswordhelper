import getApp from '../getApp';

export default function temple(data) {
  return getApp({ cmd: 'temple', ...data });
}
