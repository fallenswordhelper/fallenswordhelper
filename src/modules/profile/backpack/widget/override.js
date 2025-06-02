import querySelector from '../../../common/querySelector';
import updateEquipment from './updateEquipment';
import updateStatistics from './updateStatistics';
import daEquipItem from '../../../_dataAccess/daEquipItem';
import daUseItem from '../../../_dataAccess/daUseItem';
import dynamicAlert from '../../../alert/dynamicAlert';
import createDiv from '../../../common/cElement/createDiv';
import daLoadInventory from '../../../_dataAccess/daLoadInventory';
import awaitWidget from '../../../common/awaitWidget';

let widget = 0;

const spinnerContainer = createDiv();
spinnerContainer.style.cssText = `
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const spinner = createDiv();
spinner.style.cssText = `
  border: 10px solid #ccc;
  border-right-color: transparent;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 50% auto;
  animation: fshSpinner 0.6s linear infinite;
`;
spinnerContainer.append(spinner);

function refresh() {
  widget.page = Number(
    querySelector('.hcsPaginate_pageLink.hcsPaginate_selected')
       .dataset.page);
  widget._loadData();
  updateStatistics();
}

async function equipItem(invId) {
  spinnerContainer.style.display = 'block';
  const response = await daEquipItem(invId);
  if (response?.s) {
    dynamicAlert('Item equipped');
    refresh();
  } else {
    dynamicAlert(response?.e?.m ?? 'Server Error');
  }
  spinnerContainer.style.display = 'none';
}

async function useItem(invId) {
  spinnerContainer.style.display = 'block';
  const response = await daUseItem(invId);
  if (response?.s) {
    dynamicAlert('Item consumed');
    refresh();
  } else {
    dynamicAlert(response?.e?.m ?? 'Server Error');
  }
  spinnerContainer.style.display = 'none';
}

function defaultSortFn(item1, item2) {
  return item1.o - item2.o;
}

function compareItemNames(item1, item2) {
  const lower1 = item1.n.toLowerCase();
  const lower2 = item2.n.toLowerCase();
  return lower1.localeCompare(lower2);
}

function ascLevelSortFn(item1, item2) {
  if (item1.l !== item2.l) return item1.l - item2.l;
  return compareItemNames(item1, item2);
}

function descLevelSortFn(item1, item2) {
  if (item1.l !== item2.l) return item2.l - item1.l;
  return compareItemNames(item1, item2);
}

// need to set f
async function loadData() {
  const response = await daLoadInventory();
  widget.srcData = response.r.inventories
    .map((folder) => folder.items.map((item) => ({
      f: folder.id,
      u: item.t !== 9,
      ...item,
    })))
    .flat();
  if (widget.ordering === 1) {
    widget.srcData.sort(ascLevelSortFn);
  } else if (widget.ordering === 2) {
    widget.srcData.sort(descLevelSortFn);
  } else {
    widget.srcData.sort(defaultSortFn);
  }

  widget._applyFilter();
  widget._updateItemCount();
  widget._updateFolders(response.r.inventories.map((folder) => ({a: folder.id, n: folder.name})));
  updateEquipment(response.r.equipment);
}

export default async function override() {
  const backpackContainer = querySelector('#backpackContainer');
  widget = await awaitWidget(
    backpackContainer,
    'Backpack',
    'hcs',
  );
  backpackContainer.style.position = 'relative';
  backpackContainer.append(spinnerContainer);
  widget._equipItem = equipItem;
  widget._useItem = useItem;
  widget._loadData = loadData;
}
