import sendEvent from '../../../analytics/sendEvent';
import potReport from '../../../chrome/pageSwitcher/loader/potReport';
import batch from '../../../common/batch';
import createButton from '../../../common/cElement/createButton';
import createSpan from '../../../common/cElement/createSpan';
import closestTable from '../../../common/closestTable';
import insertElement from '../../../common/insertElement';
import insertElementAfterBegin from '../../../common/insertElementAfterBegin';
import onclick from '../../../common/onclick';
import querySelector from '../../../common/querySelector';
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

function makeBtn() {
  const btn = createButton({
    className: 'fshBl pot-report-button',
    textContent: 'Pot Report',
  });
  onclick(btn, () => {
    sendEvent('GuildReport', 'Pot Report Moved');
    potReport();
  });
  return btn;
}

function potReportNote() {
  const taggedItemReport = closestTable(
    querySelector('#pCC table table').parentNode,
  );
  const top = taggedItemReport.children?.[0]?.rows?.[0]?.cells?.[0];
  if (top) {
    top.classList.add('fshRelative');
    const btn = makeBtn();
    const spn = createSpan({
      className: 'pot-report-moved',
      textContent: ' moved to Helper Menu',
    });
    insertElementAfterBegin(spn, btn);
    insertElement(top, spn);
  }
}

function finishSpan() {
  batch([3, nodeArray, 0, doPaintChild, potReportNote]);
}

export default function prepareChildRows() {
  if (!pcc()) {
    return;
  }
  nodeList = querySelectorAll(
    '#pCC table table tr:not(.fshHide) td:nth-of-type(3n)',
  );
  nodeArray = [];
  batch([3, nodeList, 0, doSpan, finishSpan]);
}
