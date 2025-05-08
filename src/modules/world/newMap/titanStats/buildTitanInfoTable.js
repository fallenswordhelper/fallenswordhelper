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

const row1 = [
  [
    [5, getTitanName, true],
    [1, getTitanLocation, true],
  ],
];
const row2 = [
  [
    [2, getTitanHp, true],
    [4, getYourGuild, true],
  ],
];
const row3 = [
  [
    [2, makeTitanHpWrapper],
    [4, getGuildKills],
  ],
];
const row4 = () => [
  [
    [2, getCurrent, true],
    [4, partial(makePctWrapper, getCurrentPct())],
  ],
  true,
];
const row5 = () => [
  [
    [2, getTotal, true],
    [4, partial(makePctWrapper, getTotalPct())],
  ],
  true,
];
const row6 = [
  [
    [2, getStatus, true],
    [4, getStatusText],
  ],
  true,
];
const row8 = [
  [
    [2, getMember, true],
    [2, getKills, true],
    [2, getPctTotal, true],
  ],
];

export function buildTitanInfoTable() {
  titanTbl = createTable({ className: 'fshCenter' });
  buildAssets();
  addRows(titanTbl, [
    row1,
    row2,
    row3,
    row4(),
    row5(),
    row6,
    [[[6, getCooldownText]]],
    row8,
  ]);
}
