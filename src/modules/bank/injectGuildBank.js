import daGuildBankTransaction from '../_dataAccess/daGuildBankTransaction';
import startBankApp from './startBankApp';

export default function injectGuildBank() {
  startBankApp(daGuildBankTransaction);
}
