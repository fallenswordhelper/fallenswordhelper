import querySelector from '../../../common/querySelector';
import updateEquipment from './updateEquipment';
import updateStatistics from './updateStatistics';
import daEquipItem from '../../../_dataAccess/daEquipItem';
import daUseItem from '../../../_dataAccess/daUseItem';
import dynamicAlert from '../../../alert/dynamicAlert';
import createDiv from '../../../common/cElement/createDiv';

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
  updateEquipment();
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

export default function override() {
  widget = $('#backpackContainer').data('hcsBackpack');
  querySelector('#backpackContainer').style.position = 'relative';
  querySelector('#backpackContainer').append(spinnerContainer);
  widget._equipItem = equipItem;
  widget._useItem = useItem;
}
