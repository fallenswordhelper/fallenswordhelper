import createDiv from './cElement/createDiv';
import insertElement from './insertElement';
import insertElementAfterBegin from './insertElementAfterBegin';
import { pcc } from '../support/layout';

export default function createInfoBox() {
  const wrapper = createDiv();
  wrapper.style.cssText = `
    width: 80%;
    background: #D3CFC1;
    text-align: center;
    border: 2px solid white;
    margin: 10px auto 0px auto;
  `;
  const header = createDiv({ innerText: 'INFORMATION' });
  header.style.cssText = `
    background: #8E8668;
    color: white;
    font-size: 10px;
    margin: 2px;
  `;
  const message = createDiv({ id: 'info-msg' });
  message.style.cssText = `
    font-size: 13px;
    padding-bottom: 2px;
  `
  insertElement(wrapper, header);
  insertElement(wrapper, message);
  insertElementAfterBegin(pcc(), wrapper);
  return wrapper;
}
