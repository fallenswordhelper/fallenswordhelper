import getApp from './getApp';

// Can't use this yet, there's no VL
export default function toprated(subcmd) {
  return getApp({ cmd: 'toprated', subcmd });
}
