import createBr from '../common/cElement/createBr';
import createForm from '../common/cElement/createForm';
import createInput from '../common/cElement/createInput';
import createOl from '../common/cElement/createOl';
import createSpan from '../common/cElement/createSpan';
import daDoInvent from '../_dataAccess/daDoInvent';
import insertElement from '../common/insertElement';
import insertTextBeforeEnd from '../common/insertTextBeforeEnd';
import jsonFail from '../common/jsonFail';
import onsubmit from '../common/onsubmit';
import outputResult from '../common/outputResult';
import { pCC } from '../support/layout';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';

let invAmount;
let invResultHeader;
let invResults;

function processResult(r) {
  if (r.item) {
    return `<span class="fshGreen">You successfully invented the item [${
      r.item.n}].</span>`;
  }
  return '<span class="fshRed">You have failed to invent the item.</span>';
}

function quickInventDone(json) {
  if (jsonFail(json, invResults)) { return; }
  outputResult(processResult(json.r), invResults);
}

function initResults(str) {
  setInnerHtml(str, invResultHeader);
  setInnerHtml('', invResults);
}

function quickInvent(e) {
  e.preventDefault();
  const amountToInvent = Number(invAmount.value);
  if (!amountToInvent) {
    initResults('');
    return;
  }
  const recipeID = querySelector('input[name="recipe_id"]').value;
  initResults(`Inventing ${String(amountToInvent)} Items`);
  for (let i = 0; i < amountToInvent; i += 1) {
    daDoInvent(recipeID).then(quickInventDone);
  }
}

function makeCell(injector) {
  const myRow = injector.insertRow(-1);
  const myCell = myRow.insertCell(-1);
  myCell.className = 'fshCenter';
  return myCell;
}

function makeInvAmount(myCell) {
  insertTextBeforeEnd(myCell, 'Select how many to quick invent');
  invAmount = createInput({
    className: 'custominput fshNumberInput',
    min: 0,
    type: 'number',
    value: 1,
  });
  insertElement(myCell, invAmount);
}

function makeQuickInv(myCell) {
  const quickInv = createInput({
    className: 'custombutton',
    type: 'submit',
    value: 'Quick invent items',
  });
  insertElement(myCell, quickInv);
}

function makeInvForm(myCell) {
  const invForm = createForm({
    action: '#',
  });
  onsubmit(invForm, quickInvent);
  makeInvAmount(invForm);
  insertElement(createBr(), invForm);
  makeQuickInv(invForm);
  insertElement(myCell, invForm);
}

function makeInvResultHeader(myCell) {
  invResultHeader = createSpan();
  insertElement(myCell, invResultHeader);
}

function makeInvResults(myCell) {
  invResults = createOl();
  insertElement(myCell, invResults);
}

function resultContainer(myCell) {
  makeInvResultHeader(myCell);
  makeInvResults(myCell);
}

function makeLayout(injector) {
  makeInvForm(makeCell(injector));
  resultContainer(makeCell(injector));
}

export default function injectInvent() {
  makeLayout(pCC.lastElementChild);
}
