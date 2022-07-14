import './oneByOne.css';
import daSendItems from '../_dataAccess/daSendItems';
import dynamicAlert from '../alert/dynamicAlert';
import sendEvent from '../analytics/sendEvent';
import createButton from '../common/cElement/createButton';
import createDiv from '../common/cElement/createDiv';
import createSpan from '../common/cElement/createSpan';
import closestTr from '../common/closestTr';
import insertElementAfter from '../common/insertElementAfter';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

const findItem = (s) => closestTr(s).previousElementSibling.children[0].children[0].children[0];
const removeItem = (s) => findItem(s).remove();

function handleJson(spinner, cb, json) {
  if (json.s) {
    removeItem(spinner);
    spinner.classList.remove('fshSpinner');
  } else {
    spinner.replaceWith(cb);
  }
}

async function sendThem(prm, options) {
  const data = await prm;
  if (data.s) {
    const spinner = createDiv({
      className: 'fshSpinner fshSpinner12 fshRelative',
      style: { height: '16px' },
    });
    const [cb] = options;
    cb.replaceWith(spinner);
    const json = await daSendItems(options[1], options[2]);
    handleJson(spinner, cb, json);
    return json;
  }
  return data;
}

function handleFinalResult(finalResult) {
  if (finalResult.s) {
    dynamicAlert('Items sent successfully!');
  } else {
    dynamicAlert(finalResult.e.message);
  }
}

const checkedItems = () => querySelectorArray('[name="sendItemList[]"]:checked');
const getUser = () => querySelector('form[name="sendItemForm"] [name="target_username"]').value;
const getItems = (user) => checkedItems().map((el) => [el, user, [el.value]]);
const syncSend = (items) => items.reduce(sendThem, Promise.resolve({ s: 1 }));

async function doSend(e, items) {
  sendEvent('Trade', 'oneByOne');
  const spinner = createSpan({
    className: 'fshSpinner fshRelative',
    style: { marginLeft: '40px' },
  });
  const myBtn = e.target;
  myBtn.replaceWith(spinner);
  const finalResult = await syncSend(items);
  handleFinalResult(finalResult);
  spinner.replaceWith(myBtn);
}

function onBtnClick(e) {
  const items = getItems(getUser());
  if (items.length) { doSend(e, items); }
}

export default function oneByOne() {
  const sendItemBtn = querySelector('form[name="sendItemForm"] input[value="Send"]');
  const myBtn = createButton({
    className: 'fshBl',
    id: 'oneByOneBtn',
    textContent: 'OneByOne',
    type: 'button',
  });
  insertElementAfter(myBtn, sendItemBtn);
  onclick(myBtn, onBtnClick);
}
