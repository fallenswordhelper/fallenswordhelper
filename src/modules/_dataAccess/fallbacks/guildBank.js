import querySelector from '../../common/querySelector';
import getText from '../../common/getText';
import closestTable from '../../common/closestTable';

export default function guildBank(doc) {
  const bankTable = closestTable(querySelector('#deposit_amount', doc));
  const balanceElement = querySelector('tr b', bankTable);
  const balance = Number(getText(balanceElement).replace(/,/g, ''));
  return { k: 10, v: balance };
}
