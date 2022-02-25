<script>
import addCommas from '../system/addCommas';
import { slide } from 'svelte/transition';

export let balance;
export let deposits;
export let maxDeposits;
export let wallet;
export let bankFunction;
export let updateWallet;

let maxDeposit = Math.ceil(wallet / 4);

let depositAmount = maxDeposit;
let withdrawAmount = 1;
let errorMessage = '';

let buttonsDisabled = false;

function updateFromDeposit(amount) {
  wallet -= amount;
  balance += amount;
  deposits -= 1;
}

function updateFromWithdraw(amount) {
  wallet += amount;
  balance -= amount;
}

function updateValues(mode, amount) {
  if (mode === 'deposit') {
    updateFromDeposit(amount);
  } else {
    updateFromWithdraw(amount);
  }
  updateWallet(wallet);
  maxDeposit = Math.ceil(wallet / 4);
  depositAmount = Math.min(depositAmount, maxDeposit);
  withdrawAmount = Math.min(withdrawAmount, balance);
}

async function submitRequest(mode, amount) {
  buttonsDisabled = true;
  errorMessage = '';
  const response = await bankFunction(mode, amount);
  buttonsDisabled = false;
  if (response.s) {
    updateValues(mode, amount);
    return true;
  }
  errorMessage = response.e.message;
  return false;
}

function withdraw() {
  submitRequest('withdraw', withdrawAmount);
}

function deposit() {
  submitRequest('deposit', depositAmount);
}
</script>
{#if errorMessage}
<div id="fshErrorMessage" transition:slide|local>
  <div id="fshErrorHeader">INFORMATION</div>
  <div>{errorMessage}</div>
</div>
{/if}
<div id="fshBankContainer">
  <div id="fshBankHeader">Bank Details</div>
  <table id="fshBankDetails"><tbody>
    <tr>
      <th>Balance:</th>
      <td>{addCommas(balance)}</td>
    </tr>
    <tr>
      <th>Deposits Available:</th>
      <td>{deposits} / {maxDeposits}</td>
    <tr>
      <th>
	Current Max Deposit:
      </th>
      <td>{addCommas(maxDeposit)}</td>
    </tr>
  </tbody></table>
  <hr/>
  <form on:submit|preventDefault={deposit}>
    <span>
      <label for="fshDepositAmount">Deposit:</label>
    </span>
    <input
        bind:value={depositAmount}
        id="fshDepositAmount"
        type="number"
	min="1" 
	max={maxDeposit} />
    <input
        type="submit"
	id="fshDepositButton"
	disabled={buttonsDisabled}
	class="custombutton"
        value="Deposit" />
    <input
        bind:value={depositAmount}
        type="range"
	min="1"
	max={maxDeposit} />
  </form>
  <form on:submit|preventDefault={withdraw}>
    <span>
      <label for="fshWithdrawAmount">Withdraw:</label>
    </span>
    <input
        bind:value={withdrawAmount}
        id="fshWithdrawAmount"
        type="number"
	min="1" 
	max={balance} />
    <input
        id="fshWithdrawButton"
        type="submit"
	disabled={buttonsDisabled}
	class="custombutton"
        value="Withdraw" />
    <input
        bind:value={withdrawAmount}
        type="range"
	min="1"
	max={balance} />
  </form>
</div>
<style>
#fshBankContainer {
  border: 1px solid #000;
  margin: 12px auto;
  padding: 2px;
  width: 550px;
}
#fshBankHeader {
  background-color: #CD9E4B;
  padding: 5px;
  text-align: center;
}
#fshBankDetails td {
 font-weight: bold;
 padding-bottom: 4px;
}
#fshBankDetails th {
  vertical-align: text-top;
}
.custombutton {
  width: 100px;
}
label {
  display: inline-block;
  padding: 5px;
  width: 103px;
}
form {
  margin-bottom: 8px;
}
#fshErrorMessage {
  background: #D3CFC1;
  border: 2px solid #FFF;
  margin: 10px auto;
  text-align: center !important;
  width: 80%;
}
#fshErrorHeader {
  background: #8E8668;
  color: #FFF;
  font-size: smaller;
}
</style>
