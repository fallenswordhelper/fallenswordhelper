import './manage.css';
import cElement from '../common/cElement/cElement';
import createDiv from '../common/cElement/createDiv';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import daToggleBuffPackage from '../_dataAccess/daToggleBuffPackage';
import getText from '../common/getText';
import daFeatureBuffPackage from '../_dataAccess/daFeatureBuffPackage';
import daDeleteBuffPackage from '../_dataAccess/daDeleteBuffPackage';
import { pcc } from '../support/layout';
import closestTr from '../common/closestTr';
import closestTd from '../common/closestTd';
import setText from '../dom/setText';
import dynamicAlert from '../alert/dynamicAlert';

import { mount } from 'svelte';
import ModalConfirm from '../modal/ModalConfirm.svelte';

const getPackageId = (button) =>
  button.getAttribute('onclick').match(/id=(\d+)/)[1];

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
    setText(
      getText(statusTd) === 'Yes' ? 'No' : 'Yes',
      statusTd,
    );
    dynamicAlert('Buff Package toggled!');
  } else {
    dynamicAlert(response?.e?.message ?? 'Server Error');
  }
}

function deleteBuffPackage(event) {
  mount(ModalConfirm, { target: pcc(), props: {
    msg: 'Are you sure you want to delete this package?',
    visible: true,
    resolve: async (doDelete) => {
      if (!doDelete) { return; }
      const response =  await doDaAction(event, daDeleteBuffPackage);
      if (response?.s === true) {
        const tr = closestTr(event.target);
        tr.nextElementSibling.remove();
        tr.remove();
        dynamicAlert('Buff Package deleted!');
      } else {
        dynamicAlert(response?.e?.message ?? 'Server Error');
      }
    },
  }});
}

async function featureBuffPackage(event) {
  const response = await doDaAction(event, daFeatureBuffPackage);
  if (response?.s === true) {
    setText(
      'Yes',
      closestTr(event.target).children[4],
    );
    dynamicAlert('Buff Package featured for 24 hours!');
  } else {
    dynamicAlert(response?.e?.message ?? 'Server Error');
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
