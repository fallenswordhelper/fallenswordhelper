import './oneByOne.css';
import createButton from '../common/cElement/createButton';
import daSendItems from '../_dataAccess/daSendItems';
import insertElementAfter from '../common/insertElementAfter';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

async function sendThem(prm, options) {
  const data = await prm;
  // eslint-disable-next-line no-console
  console.log('promise data', data);
  if (data === null || data.s) { return daSendItems(options[0], options[1]); }
  return data;
}

async function onBtnClick() {
  const user = querySelector('form[name="sendItemForm"] [name="target_username"]');
  const items = querySelectorArray('[name="sendItemList[]"]:checked')
    .map((el) => [user.value, [el.value]]);
  const finalResult = await items.reduce(sendThem, Promise.resolve(null));
  // eslint-disable-next-line no-console
  console.log('finalResult', finalResult);
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
