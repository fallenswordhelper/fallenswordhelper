import getApp from '../getApp';

export default function senditems(user, invIdAry) {
  return getApp({
    cmd: 'trade',
    subcmd: 'senditems',
    xc: window.ajaxXC,
    target_username: user,
    items: invIdAry,
  });
}
