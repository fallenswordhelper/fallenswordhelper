import Bank from './Bank.svelte';
import addCommas from '../system/addCommas';
import getElementById from '../common/getElementById';
import getText from '../common/getText';
import intValue from '../system/intValue';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import setText from '../dom/setText';

function getBankTable() {
  return querySelector('td.header')
    .parentNode
    .parentNode
    .parentNode;
}

function updateWallet(amount) {
  const walletNode = getElementById('statbar-gold');
  setText(addCommas(amount), walletNode);
}

function getBankDetails() {
  const fields = querySelectorArray('#pCC td:first-child table b')
    .map((f) => getText(f));
  const walletNode = getElementById('statbar-gold');
  return {
    balance: intValue(fields[0]),
    deposits: Number(fields[1]),
    maxDeposits: Number(fields[2]),
    wallet: intValue(getText(walletNode)),
  };
}

export default function startBankApp(bankFunction) {
  const props = {
    ...getBankDetails(),
    updateWallet,
    bankFunction,
  };
  const bankTable = getBankTable();
  const app = new Bank({
    props,
    target: bankTable.parentElement,
    anchor: bankTable,
  });
  bankTable.remove();
  return app;
}
