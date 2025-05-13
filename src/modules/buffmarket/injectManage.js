import './manage.css';
import cElement from '../common/cElement/cElement';
import createDiv from '../common/cElement/createDiv';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import daToggleBuffPackage from '../_dataAccess/daToggleBuffPackage';
import getText from '../common/getText';
import daFeatureBuffPackage from '../_dataAccess/daFeatureBuffPackage';
import daDeleteBuffPackage from '../_dataAccess/daDeleteBuffPackage';
import { pcc } from '../support/layout';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import closestTr from '../common/closestTr';
import closestTd from '../common/closestTd';

const getPackageId = (button) =>
  button.getAttribute('onclick').match(/id=(\d+)/)[1];


function createInfoBox() {
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
  wrapper.append(header, message);
  insertElementAfterBegin(pcc(), wrapper);
}


function doInfoBox(msg) {
  let infoBox = querySelector('#info-msg');
  if (!infoBox) {
    createInfoBox();
    infoBox = querySelector('#info-msg');
  }
  infoBox.innerText = msg;
}

function replaceOnClick(target, fn) {
  const packageId = getPackageId(target);
  target.setAttribute('onclick', '');
  target.setAttribute('data-packageId', packageId)
  onclick(target, fn)
}

function makeSpinnerCell() {
  const wrapper = cElement('td');
  const spinner = createDiv({ className: 'fshBuffmarketSpinner' });
  wrapper.append(spinner);
  return wrapper;
}

async function doDaAction(event, daFunction) {
  const packageId = event.target.getAttribute('data-packageId');
  const spinner = makeSpinnerCell();
  const originalInputs = closestTd(event.target);
  originalInputs.replaceWith(spinner);
  const response = await daFunction(packageId);
  spinner.replaceWith(originalInputs);
  return response;
}

async function toggleBuffPackage(event) {
  const response = await doDaAction(event, daToggleBuffPackage);
  if (response?.s === true) {
    const statusTd = closestTr(event.target).children[3];
    statusTd.innerText = getText(statusTd) == 'Yes' ? 'No' : 'Yes';
    doInfoBox('Buff Package toggled!');
  } else {
    doInfoBox(response?.e?.message ?? 'Server Error');
  }
}

async function deleteBuffPackage(event) {
  if (confirm('Are you sure you want to delete this package?')) {
    const response = await doDaAction(event, daDeleteBuffPackage);
    if (response?.s === true) {
      const tr = closestTr(event.target);
      tr.nextElementSibling.remove();
      tr.remove();
      doInfoBox('Buff Package deleted!');
    } else {
      doInfoBox(response?.e?.message ?? 'Server Error');
    }
  }
}

async function featureBuffPackage(event) {
  const response = await doDaAction(event, daFeatureBuffPackage);
  if (response?.s === true) {
    closestTr(event.target).children[4].innerText = 'Yes';
    doInfoBox('Buff Package featured for 24 hours!');
  } else {
    doInfoBox(response?.e?.message ?? 'Server Error');
  }
}

export default function injectManage() {
  querySelectorArray('#pCC input[value=Toggle]')
    .forEach((button) => replaceOnClick(button, toggleBuffPackage));
  querySelectorArray('#pCC input[value=Delete]')
    .forEach((button) => replaceOnClick(button, deleteBuffPackage));
  querySelectorArray('#pCC input[value=Feature]')
    .forEach((button) => replaceOnClick(button, featureBuffPackage));
}
