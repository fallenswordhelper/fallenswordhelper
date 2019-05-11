import batch from '../../common/batch';
import insertElement from '../../common/insertElement';
import makeFastRecall from './makeFastRecall';
import partial from '../../common/partial';
import potReport from './potReport/potReport';
import querySelectorAll from '../../common/querySelectorAll';

var nodeArray;
var nodeList;
var potObj;

function doPaintChild(inject, localCounter) {
  var el = nodeList[localCounter];
  insertElement(el, inject);
}

function addPotObj(item) {
  if (item.endsWith(' (Potion)')) {
    var itemName = item.slice(0, -9);
    potObj[itemName] = (potObj[itemName] || 0) + 1;
  }
}

function doSpan(el) {
  nodeArray.push(makeFastRecall(el));
  addPotObj(el.previousElementSibling.innerHTML);
}

function finishSpan() {
  batch(3, nodeArray, 0, doPaintChild, partial(potReport, potObj));
}

export default function prepareChildRows() {
  nodeList = querySelectorAll('#pCC table table ' +
    'tr:not(.fshHide) td:nth-of-type(3n)');
  potObj = {};
  nodeArray = [];
  batch(3, nodeList, 0, doSpan, finishSpan);
}