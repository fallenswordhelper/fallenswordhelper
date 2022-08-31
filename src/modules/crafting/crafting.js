import './crafting.css';
import getInventoryById from '../ajax/getInventoryById';
import batch from '../common/batch';
import createDiv from '../common/cElement/createDiv';
import closestTable from '../common/closestTable';
import closestTr from '../common/closestTr';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import jQueryPresent from '../common/jQueryPresent';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import calf from '../support/calf';
import { pcc } from '../support/layout';
import task from '../support/task';
import Crafting from './Crafting.svelte';

let inv = 0;
let itemGrid = 0;
let prm = null;
let thisItemTable = 0;
let warehouse = 0;

const getAnchors = () => querySelectorArray(`a[href*="=${calf.cmd}&"]`, pcc());
const invId = (a) => a.href.split('=')[2];
const getInvItem = (a) => [a, inv.items[invId(a)]];
const getItemTable = () => closestTable(querySelector('img[src*="/items/"]', pcc()));
const emptyRow = () => closestTr(thisItemTable).previousElementSibling.children[0];
const showFolder = (item, currentFolder) => currentFolder === -2
    || (currentFolder === -3 && item.equipped)
    || (item.folder_id === currentFolder && !item.equipped);

function getWarehouse() {
  if (!warehouse) warehouse = getAnchors().map(getInvItem);
  return warehouse;
}

function startCrafting() {
  return new Crafting({
    props: { prm },
    target: emptyRow(),
  });
}

function insertItem(currentFolder, [a, item]) {
  const itemDiv = createDiv();
  if (showFolder(item, currentFolder)) itemDiv.classList.add('fshCraftForgeShow');
  insertElement(itemDiv, a);
  insertElement(itemGrid, itemDiv);
}

function updateVisibility(wh, currentFolder) {
  wh.forEach(([a, item]) => {
    const myDiv = a.parentNode;
    myDiv.classList.toggle('fshCraftForgeShow', showFolder(item, currentFolder));
  });
}

function doFilter({ detail: currentFolder }) {
  const wh = getWarehouse();
  if (!itemGrid) {
    itemGrid = createDiv({ className: 'fshCraftForgeGrid' });
    insertElementAfterBegin(thisItemTable.parentNode, itemGrid);
    hideElement(thisItemTable);
    task(3, batch, [[3, wh, 0, partial(insertItem, currentFolder)]]);
  } else {
    updateVisibility(wh, currentFolder);
  }
}

export default async function crafting() {
  if (jQueryPresent() && pcc()) {
    thisItemTable = getItemTable();
    if (!thisItemTable) return;
    prm = getInventoryById();
    const thisCrafting = startCrafting();
    thisCrafting.$on('doFilter', doFilter);
    inv = await prm;
  }
}
