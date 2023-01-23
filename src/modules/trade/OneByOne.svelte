<script>
import daSendItems from '../_dataAccess/daSendItems';
import dynamicAlert from '../alert/dynamicAlert';
import sendEvent from '../analytics/sendEvent';
import createDiv from '../common/cElement/createDiv';
import clickThis from '../common/clickThis';
import getArrayByClassName from '../common/getArrayByClassName';
import LinkButton from '../common/LinkButton.svelte';
import partial from '../common/partial';

let disabled = 0;

const spinner = createDiv({
  className: 'fshSpinner fshRelative',
  style: { height: '90px' },
});
const click = (item) => clickThis(item.children[0]);
const id = (item) => item.id.split('-').at(-1);
const resolvedPromise = () => Promise.resolve({ s: 1 });
const selectedItems = () => getArrayByClassName('trade-create-selected');
const target = () => document.forms.sendItemForm.elements.target_username.value;

function handleJson(item, json) {
  if (json.s) {
    jQuery(spinner.parentElement).qtip('disable');
    spinner.parentElement.removeAttribute('class');
    spinner.remove();
  } else {
    spinner.replaceWith(item);
    click(item);
  }
}

async function sendThem(targetPlayer, prm, item) {
  const data = await prm;
  if (data.s) {
    click(item);
    item.replaceWith(spinner);
    const json = await daSendItems(targetPlayer, [id(item)]);
    handleJson(item, json);
    return json;
  }
  return data;
}

const sendToTarget = () => partial(sendThem, target());
const seqSend = (items) => items.reduce(sendToTarget(), resolvedPromise());

function handleFinalResult(finalResult) {
  if (finalResult.s) {
    dynamicAlert('Items sent successfully!');
  } else {
    dynamicAlert(finalResult.e.message);
  }
}

async function onclick() {
  const items = selectedItems();
  if (!items.length) return;
  sendEvent('Trade', 'oneByOne');
  disabled = 1;
  const finalResult = await seqSend(items);
  handleFinalResult(finalResult);
  disabled = 0;
}
</script>

<span>
  <LinkButton {disabled} on:click={onclick}>OneByOne</LinkButton>
</span>

<style>
span {
  --button-margin: auto auto auto 10px;
}
</style>
