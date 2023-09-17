import trade from './trade';

export default function senditems(user, invIdAry) {
  return trade({
    subcmd: 'senditems',
    xc: window.ajaxXC,
    target_username: user,
    items: invIdAry,
  });
}
