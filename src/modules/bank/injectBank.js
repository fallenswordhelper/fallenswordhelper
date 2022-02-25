import daBankTransaction from '../_dataAccess/daBankTransaction';
import startBankApp from './startBankApp';

export default function injectBank() {
  startBankApp(daBankTransaction);
}
