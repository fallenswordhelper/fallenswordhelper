import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function guildBank(mode, amount) {
  const response = await indexAjaxData({
    cmd: 'guild',
    subcmd: 'bank',
    subcmd2: 'transaction',
    mode,
    amount,
  });
  const message = infoBoxFrom(response);
  if (message === 'You successfully withdrew gold from the guild!' || message === 'You successfully deposited gold to the guild!') {
    return { s: true };
  }
  return { s: false, e: { message } };
}
