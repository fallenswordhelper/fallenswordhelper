import clickHandler from './clickHandler';
import createInput from '../../../common/cElement/createInput';
import getElementById from '../../../common/getElementById';
import getElementsByTagName from '../../../common/getElementsByTagName';
import { getPcc } from '../../../support/layout';
import injectGuild from '../../../chrome/pageSwitcher/loader/injectGuild';
import insertElement from '../../../common/insertElement';
import insertHtmlBeforeEnd from '../../../common/insertHtmlBeforeEnd';
import interceptSubmit from './interceptSubmit';
import onclick from '../../../common/onclick';
import querySelectorArray from '../../../common/querySelectorArray';

function doItemTable(checkbox) {
  insertHtmlBeforeEnd(checkbox.parentNode.nextElementSibling
    .nextElementSibling, '&nbsp;<span class="sendLink">Fast BP</span>');
}

function paintTable() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(doItemTable);
}

function checkAllBtn() {
  const checkAll = createInput({ type: 'button', value: 'Check All' });
  const formTags = getElementsByTagName('form', getPcc());
  if (formTags.length === 1) {
    insertElement(formTags[0].previousElementSibling.cells[0], checkAll);
  }
}

function doItemTagging() {
  onclick(getPcc(), clickHandler);
  paintTable();
  checkAllBtn();
  interceptSubmit();
}

export default function addRemoveTags() {
  if (getElementById('tagging_cost')) {
    doItemTagging();
  } else {
    injectGuild();
  }
}
