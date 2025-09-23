import './hasTitan.css';
import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import hasClass from '../../../common/hasClass';
import insertElement from '../../../common/insertElement';
import toggleForce from '../../../common/toggleForce';
import trimTitanName from '../../../common/trimTitanName';
import {
  buildTitanInfoTable,
  clearMemberRows,
  getTitanTbl,
} from './buildTitanInfoTable';
import { clearTitanDiv, initVars } from './placeholders';

let titanDiv = 0;
let titanId = 0;
let titanLoc = '';
let titanNm = '';

export const getTitanId = () => titanId;
export const getTitanLoc = () => titanLoc;
export const getTitanNm = () => titanNm;

export function hideTitanDiv() {
  titanId = null;
  if (titanDiv && !hasClass('fshHide', titanDiv)) {
    toggleForce(titanDiv, true);
    clearTitanDiv();
    clearMemberRows();
  }
}

export function hasTitan(el) {
  if (el.type === 0) {
    titanId = el.base_creature_id;
    titanLoc = `(${el.x},${el.y})`;
    titanNm = trimTitanName(el.name);
    return true;
  }
  return false;
}

export function setupTitanDiv() {
  if (titanDiv) {
    toggleForce(titanDiv, false);
  } else {
    const actCont = getElementById('actionContainer');
    titanDiv = createDiv({ className: 'fshActionBox titanInfo' });
    initVars();
    buildTitanInfoTable();
    insertElement(titanDiv, getTitanTbl());
    insertElement(actCont, titanDiv);
  }
}
