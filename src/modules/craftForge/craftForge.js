import './craftForge.css';
import CraftForge from './CraftForge.svelte';
import calf from '../support/calf';
import closestTable from '../common/closestTable';
import closestTr from '../common/closestTr';
import createDiv from '../common/cElement/createDiv';
import getCustomUrlParameter from '../system/getCustomUrlParameter';
import getInventoryById from '../ajax/getInventoryById';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import jQueryPresent from '../common/jQueryPresent';
import { pCC } from '../support/layout';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

let inv = 0;
let itemGrid = 0;
let prm = 0;
let thisItemTable = 0;
let warehouse = 0;

const getAnchors = () => querySelectorArray(`a[href*="=${calf.cmd}&"]`, pCC);
const invId = (a) => getCustomUrlParameter(a.href, 'inv_id');
const getInvItem = (a) => [a, inv.items[invId(a)]];
const getItemTable = () => closestTable(querySelector('img[src*="/items/"]', pCC));
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

function insertItem([a]) {
  const itemDiv = createDiv();
  insertElement(itemDiv, a);
  insertElement(itemGrid, itemDiv);
}

function drawingNewItemTable(wh) {
  if (!itemGrid) {
    itemGrid = createDiv({ className: 'fshCraftForgeGrid' });
    wh.forEach(insertItem);
    insertElementAfterBegin(thisItemTable.parentNode, itemGrid);
    hideElement(thisItemTable);
  }
}

function doFilter({ detail: [currentFolder, wantsPerfect] }) {
  const wh = getWarehouse();
  drawingNewItemTable(wh);
  wh.forEach(([a, item]) => {
    const myDiv = a.parentNode;
    myDiv.classList.toggle('fshCraftForgeShow', showItem(item, currentFolder, wantsPerfect));
  });
}

export default async function craftForge() {
  if (jQueryPresent() && pCC) {
    prm = getInventoryById();
    thisItemTable = getItemTable();
    const cf = startCraftForge();
    cf.$on('doFilter', doFilter);
    inv = await prm;
  }
}
