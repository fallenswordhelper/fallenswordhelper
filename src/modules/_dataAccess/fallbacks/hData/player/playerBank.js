import querySelector from '../../../../common/querySelector';
import getText from '../../../../common/getText';
import { hDataPlayerFields } from '../../../../support/constants';
import intValue from '../../../../system/intValue';

export default function playerBank(doc) {
  const bankBalanceElement = querySelector('.stat-bank + dd', doc);
  const bankBalance = intValue(getText(bankBalanceElement));
  return { k: hDataPlayerFields.bank, v: bankBalance };
}
