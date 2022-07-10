import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { defenderMultiplier, mercRE } from '../support/constants';
import createDocument from '../system/createDocument';
import indexAjaxData from './indexAjaxData';

function addMercStat(mouseover, stat, i) {
  return stat
    + Math.round(Number(regExpFirstCapture(mercRE[i], mouseover)) * defenderMultiplier);
}

function addMercStats(acc, merc) {
  return acc.map(partial(addMercStat, merc.dataset.tipped));
}

function addAllMercStats(mercElements) {
  return mercElements.reduce(addMercStats, [0, 0, 0, 0, 0]);
}

function transform(mercTotal) {
  return {
    attack: mercTotal[0],
    defense: mercTotal[1],
    armor: mercTotal[2],
    damage: mercTotal[3],
    hp: mercTotal[4],
  };
}

function parseMercStats(html) {
  const doc = createDocument(html);
  const mercElements = querySelectorArray('#pCC img[src*="/merc/"]', doc);
  const mercTotal = addAllMercStats(mercElements);
  return transform(mercTotal);
}

export default function getMercStats() {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'mercs',
  }).then(parseMercStats);
}
