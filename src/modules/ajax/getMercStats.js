import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { defenderMultiplier, mercRE } from '../support/constants';
import indexAjaxDoc from './indexAjaxDoc';

function addMercStat(mouseover, stat, i) {
  return stat
    + Math.ceil(Number(regExpFirstCapture(mercRE[i], mouseover)) * defenderMultiplier);
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

function parseMercStats(doc) {
  const mercElements = querySelectorArray('#pCC img[src*="/mercs/"]', doc);
  const mercTotal = addAllMercStats(mercElements);
  return transform(mercTotal);
}

export default async function getMercStats() {
  return parseMercStats(await indexAjaxDoc({
    cmd: 'guild',
    subcmd: 'mercs',
  }));
}
