import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function bank(mode, amount) {
  const response = await indexAjaxData({
    cmd: 'bank',
    subcmd: 'transaction',
    mode,
    amount,
  });
  const message = infoBoxFrom(response);
  if (message === 'You successfully withdrew gold!' || message === 'You successfully deposited gold!') {
    return { s: true };
  }
  return { s: false, e: { message } };
}
