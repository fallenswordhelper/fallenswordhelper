import getApp from './getApp';

export default function quickbuff(userAry, buffAry) {
  return getApp({
    cmd: 'quickbuff',
    subcmd: 'activate',
    username: userAry,
    skill: buffAry,
  });
}
