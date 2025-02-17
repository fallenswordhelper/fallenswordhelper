import batch from '../../../common/batch';
import insertElement from '../../../common/insertElement';
import querySelectorAll from '../../../common/querySelectorAll';
import { pcc } from '../../../support/layout';
import makeFastRecall from './makeFastRecall';

let nodeList = null;
let nodeArray = [];

function doPaintChild(inject, localCounter) {
  const el = nodeList[localCounter];
  insertElement(el, inject);
}

function doSpan(el) {
  nodeArray.push(makeFastRecall(el));
}

function finishSpan() {
  batch([3, nodeArray, 0, doPaintChild]);
}

export default function prepareChildRows() {
  if (!pcc()) return;
  nodeList = querySelectorAll(
    '#pCC table table tr:not(.fshHide) td:nth-of-type(3n)',
  );
  nodeArray = [];
  batch([3, nodeList, 0, doSpan, finishSpan]);
}
