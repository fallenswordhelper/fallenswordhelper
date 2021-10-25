import addRows from './addRows';
import createSpan from '../../../common/cElement/createSpan';
import createTable from '../../../common/cElement/createTable';
import insertElement from '../../../common/insertElement';
import insertTextBeforeEnd from '../../../common/insertTextBeforeEnd';
import {
  buildAssets,
  current,
  kills,
  member,
  pctTotal,
  status,
  titanHp,
  total,
  yourGuild,
} from './assets';
import {
  cooldownText,
  currentHp,
  currentPct,
  guildKills,
  maxHp,
  statusText,
  titanLocation,
  titanName,
  totalPct,
} from './placeholders';

export let titanTbl;

export function clearMemberRows() {
  while (titanTbl.rows.length > 8) {
    titanTbl.deleteRow(8);
  }
}

function makeTitanHpWrapper() {
  const titanHpWrapper = createSpan();
  insertElement(titanHpWrapper, currentHp);
  insertTextBeforeEnd(titanHpWrapper, '/');
  insertElement(titanHpWrapper, maxHp);
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
    [[[5, titanName, true], [1, titanLocation, true]]],
    [[[2, titanHp, true], [4, yourGuild, true]]],
    [[[2, makeTitanHpWrapper()], [4, guildKills]]],
    [[[2, current, true], [4, makePctWrapper(currentPct)]], true],
    [[[2, total, true], [4, makePctWrapper(totalPct)]], true],
    [[[2, status, true], [4, statusText]], true],
    [[[6, cooldownText]]],
    [[[2, member, true], [2, kills, true],
      [2, pctTotal, true]]],
  ]);
}
