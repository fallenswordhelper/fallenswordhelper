import QuickSelect from './QuickSelect.svelte';
import asyncFilter from '../common/asyncFilter';
import asyncSome from '../common/asyncSome';
import clickThis from '../common/clickThis';
import getCustomUrlParameter from '../system/getCustomUrlParameter';
import getInv from '../guild/inventory/storeitems/getInv';
import getInvId from './getInvId';
import highlightSts from './highlightSts';
import numberIsNaN from '../common/numberIsNaN';
import { pCC } from '../support/layout';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import sendEvent from '../analytics/sendEvent';

function injectQuickSelect() {
  return new QuickSelect({
    target: pCC,
  });
}

const getTipped = (el) => el.parentNode.parentNode.dataset.tipped;
const getSearch = (el) => getTipped(el).split('?')[1];
const getItemId = (el) => getCustomUrlParameter(getSearch(el), 'item_id');
const toSlice = (howMany) => (numberIsNaN(Number(howMany)) ? Infinity : Number(howMany));
const getItemType = async (el) => (await getInv()).items[getInvId(el)].type;
const isResource = async (el) => (await getItemType(el)) === 12;
const getItemCraft = async (el) => (await getInv()).items[getInvId(el)].craft;
const isPerfect = async (el) => (await getItemCraft(el)) === 'Perfect';

const typeTests = [
  (selectId) => selectId === '-1',
  (selectId, el) => getItemId(el) === selectId,
  (selectId, el) => selectId === '-2' && isResource(el),
];

const runTest = async (selectId, el, fn) => Boolean(await fn(selectId, el));
const someTest = (selectId, el) => asyncSome(typeTests, partial(runTest, selectId, el));
const doTests = async (selectId, el) => Boolean(await someTest(selectId, el));
const filterItems = (id, items) => asyncFilter(items, partial(doTests, id));
const notInSt = async (el) => !(await getInv()).items[getInvId(el)].is_in_st;
const checkForSt = (inSt, items) => (inSt ? items : asyncFilter(items, notInSt));

async function selectItems([selectId, howMany, inSt], auctionItems) {
  (await filterItems(selectId, await checkForSt(inSt, auctionItems)))
    .slice(0, toSlice(howMany))
    .forEach(clickThis);
}

function selectType(e, fn) {
  const auctionItems = querySelectorArray('#auction-items .selectable-item');
  if (auctionItems.length) {
    querySelectorArray('#auction-items .auction-create-selected div').forEach(clickThis);
    fn(e.detail, auctionItems);
  }
}

function handleSelect(e) {
  sendEvent('ahQuickCreate', 'Select Filter');
  selectType(e, selectItems);
}

async function perfItems([howMany, inSt], auctionItems) {
  (await asyncFilter(await checkForSt(inSt, auctionItems), isPerfect))
    .slice(0, toSlice(howMany))
    .forEach(clickThis);
}

function handlePerf(e) {
  sendEvent('ahQuickCreate', 'Perfect Filter');
  selectType(e, perfItems);
}

export default async function quickCreate() {
  const inv = await getInv();
  const quickSelect = injectQuickSelect();
  quickSelect.$on('select', handleSelect);
  quickSelect.$on('perf', handlePerf);
  if (inv.items.fshHasST) highlightSts(inv);
}
