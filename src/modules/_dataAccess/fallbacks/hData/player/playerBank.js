import querySelector from '../../../../common/querySelector';
import getText from '../../../../common/getText';

export default function playerBank(doc) {
  const bankBalanceElement = querySelector('.stat-bank + dd', doc);
  const bankBalance = Number(getText(bankBalanceElement).replace(/,/g, ''));
  return { k: 2, v: bankBalance };
}
