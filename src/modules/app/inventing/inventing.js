import getApp from '../getApp';

export default function inventing(data) {
  return getApp({ cmd: 'inventing', ...data });
}
