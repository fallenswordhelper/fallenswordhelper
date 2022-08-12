import './craftForge.css';
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
import CraftForge from './CraftForge.svelte';

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
    || item.folder_id === currentFolder;
const showPerf = (item, wantsPerfect) => !wantsPerfect || item.craft === 'Perfect';
const showItem = (item, currentFolder, wantsPerfect) => showFolder(item, currentFolder)
  && showPerf(item, wantsPerfect);

function getWarehouse() {
  if (!warehouse) warehouse = getAnchors().map(getInvItem);
  return warehouse;
}

function startCraftForge() {
  return new CraftForge({
    props: { prm },
    target: emptyRow(),
  });
}

function insertItem(currentFolder, wantsPerfect, [a, item]) {
  const itemDiv = createDiv();
  if (showItem(item, currentFolder, wantsPerfect)) itemDiv.classList.add('fshCraftForgeShow');
  insertElement(itemDiv, a);
  insertElement(itemGrid, itemDiv);
}

function updateVisibility(wh, currentFolder, wantsPerfect) {
  wh.forEach(([a, item]) => {
    const myDiv = a.parentNode;
    myDiv.classList.toggle('fshCraftForgeShow', showItem(item, currentFolder, wantsPerfect));
  });
}

function doFilter({ detail: [currentFolder, wantsPerfect] }) {
  const wh = getWarehouse();
  if (!itemGrid) {
    itemGrid = createDiv({ className: 'fshCraftForgeGrid' });
    insertElementAfterBegin(thisItemTable.parentNode, itemGrid);
    hideElement(thisItemTable);
    task(3, batch, [[3, wh, 0, partial(insertItem, currentFolder, wantsPerfect)]]);
  } else {
    updateVisibility(wh, currentFolder, wantsPerfect);
  }
}

export default async function craftForge() {
  if (jQueryPresent() && pcc()) {
    prm = getInventoryById();
    thisItemTable = getItemTable();
    const cf = startCraftForge();
    cf.$on('doFilter', doFilter);
    inv = await prm;
  }
}
