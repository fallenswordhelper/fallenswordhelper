import createSpan from '../../../common/cElement/createSpan';
import createTable from '../../../common/cElement/createTable';
import insertElement from '../../../common/insertElement';
import insertTextBeforeEnd from '../../../common/insertTextBeforeEnd';
import partial from '../../../common/partial';
import addRows from './addRows';
import {
  buildAssets,
  getCurrent,
  getKills,
  getMember,
  getPctTotal,
  getStatus,
  getTitanHp,
  getTotal,
  getYourGuild,
} from './assets';
import {
  getCooldownText,
  getCurrentHp,
  getCurrentPct,
  getGuildKills,
  getMaxHp,
  getStatusText,
  getTitanLocation,
  getTitanName,
  getTotalPct,
} from './placeholders';

let titanTbl = 0;

export const getTitanTbl = () => titanTbl;

export function clearMemberRows() {
  while (titanTbl.rows.length > 8) {
    titanTbl.deleteRow(8);
  }
}

function makeTitanHpWrapper() {
  const titanHpWrapper = createSpan();
  insertElement(titanHpWrapper, getCurrentHp());
  insertTextBeforeEnd(titanHpWrapper, '/');
  insertElement(titanHpWrapper, getMaxHp());
  return titanHpWrapper;
}

function makePctWrapper(pct) {
  const pctWrapper = createSpan();
  insertElement(pctWrapper, pct);
  insertTextBeforeEnd(pctWrapper, '%');
  return pctWrapper;
}

export function buildTitanInfoTable() {
  titanTbl = createTable({ className: 'fshCenter' });
  buildAssets();
  addRows(titanTbl, [
    [[[5, getTitanName, true], [1, getTitanLocation, true]]],
    [[[2, getTitanHp, true], [4, getYourGuild, true]]],
    [[[2, makeTitanHpWrapper], [4, getGuildKills]]],
    [[[2, getCurrent, true], [4, partial(makePctWrapper, getCurrentPct())]], true],
    [[[2, getTotal, true], [4, partial(makePctWrapper, getTotalPct())]], true],
    [[[2, getStatus, true], [4, getStatusText]], true],
    [[[6, getCooldownText]]],
    [[[2, getMember, true], [2, getKills, true],
      [2, getPctTotal, true]]],
  ]);
}
