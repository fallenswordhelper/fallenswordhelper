import getApp from '../getApp';

export default function buffmarket(data) {
  return getApp({ cmd: 'buffmarket', ...data });
}
