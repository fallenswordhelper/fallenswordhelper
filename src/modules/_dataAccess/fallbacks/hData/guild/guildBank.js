import querySelector from '../../../../common/querySelector';
import getText from '../../../../common/getText';
import closestTable from '../../../../common/closestTable';
import { hDataGuildFields } from '../../../../support/constants';
import intValue from '../../../../system/intValue';

export default function guildBank(doc) {
  const bankTable = closestTable(querySelector('#deposit_amount', doc));
  const balanceElement = querySelector('tr b', bankTable);
  const balance = intValue(getText(balanceElement));
  return { k: hDataGuildFields.bank, v: balance };
}
