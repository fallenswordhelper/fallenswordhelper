import './addRemoveTags.css';
import injectGuild from '../../../chrome/pageSwitcher/loader/injectGuild';
import closestTable from '../../../common/closestTable';
import closestTr from '../../../common/closestTr';
import getElementById from '../../../common/getElementById';
import getTextTrim from '../../../common/getTextTrim';
import insertHtmlBeforeEnd from '../../../common/insertHtmlBeforeEnd';
import querySelector from '../../../common/querySelector';
import querySelectorArray from '../../../common/querySelectorArray';
import toLowerCase from '../../../common/toLowerCase';
import calf from '../../../support/calf';
import { pcc } from '../../../support/layout';
import clickHandler from './clickHandler';
import interceptSubmit from './interceptSubmit';

const isAdd = () => calf.subcmd2 === 'addtags';
const getItemId = (cb) => querySelector('img', closestTr(cb)).src.split('/').at(-1).split('.')[0];
const getItemName = (cb) => getTextTrim(closestTr(cb).cells[2]);
const btn = (className, text) => `<button class="${className}" type="button">${text}</button>`;
const toClass = (text) => toLowerCase(text).split(' ').at(-1);
const btnClass = (text) => `tag-${toClass(text)}-btn`;
const tagbtn = (text) => `[${btn(btnClass(text), text)}]`;
const checkAll = (count) => (count > 1 ? `${tagbtn('Check All')}&nbsp;` : '');
const action = () => (isAdd() ? 'Add' : 'Remove');
const actBtn = () => tagbtn(`Fast ${action()}`);
const bpBtn = () => tagbtn('Fast BP');
const btnDiv = (invId, html) => `<div class="btn-div" data-inv-id="${invId}">${html}</div>`;
const render = (id, count) => btnDiv(id, `&nbsp;${checkAll(count)}${actBtn()}&nbsp;${bpBtn()}`);

function doItemTable([cb, invId, , , count]) {
  const target = closestTr(cb).cells[2];
  insertHtmlBeforeEnd(target, render(invId, count));
}

function getExtra(cb) {
  return [
    cb,
    cb.value,
    getItemId(cb),
    getItemName(cb),
  ];
}

function getCounts(extra) {
  return extra.map((ary) => [
    ...ary,
    extra.filter(([, , cid, cname]) => cid === ary[2] && cname === ary[3]).length,
  ]);
}

function getTaggable() {
  const cbs = querySelectorArray('input[name="tagIndex[]"]', pcc());
  const extra = cbs.map(getExtra);
  return getCounts(extra);
}

function checkAllBtn(subBtn) {
  let target = subBtn.parentNode;
  if (isAdd()) target = closestTr(subBtn).insertCell(-1);
  insertHtmlBeforeEnd(target, btn('tag-all-custom custombutton', 'Check&nbsp;All'));
}

function fixupTable(subBtn) {
  if (!isAdd()) return;
  const thisTable = closestTable(subBtn);
  thisTable.className = 'add-remove-tags';
}

function doItemTagging() {
  const taggable = getTaggable();
  if (!taggable.length) return;
  const subBtn = getElementById('tagging_cost');
  fixupTable(subBtn);
  checkAllBtn(subBtn);
  taggable.forEach(doItemTable);
  clickHandler(taggable);
  interceptSubmit();
}

export default function addRemoveTags() {
  if (getElementById('tagging_cost')) {
    doItemTagging();
  } else {
    injectGuild();
  }
}
