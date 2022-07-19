import daMercsView from '../../_dataAccess/daMercsView';
import groupViewStats from '../../common/groupViewStats';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import setInnerHtml from '../../dom/setInnerHtml';
import addCommas from '../../system/addCommas';
import mercEffect from './mercEffect';

function displayStat(el, groupStat, mercStat) {
  setInnerHtml(`<span class="fshBlue">${addCommas(groupStat)}</span> ( ${
    addCommas(groupStat - mercStat)} )`, el);
}

function updateDom(groupStats, thisMercEffect) {
  displayStat(groupStats.attackElement, groupStats.attack, thisMercEffect?.[0]);
  displayStat(groupStats.defenseElement, groupStats.defense, thisMercEffect?.[1]);
  displayStat(groupStats.armorElement, groupStats.armor, thisMercEffect?.[2]);
  displayStat(groupStats.hpElement, groupStats.hp, thisMercEffect?.[3]);
  displayStat(groupStats.damageElement, groupStats.damage, thisMercEffect?.[4]);
}

export default async function injectGroupStats() { // jQuery
  if (jQueryNotPresent()) { return; }
  const groupStats = groupViewStats(document);
  if (groupStats.attackElement) {
    const mercs = await daMercsView();
    const thisMercEffect = mercEffect(mercs);
    updateDom(groupStats, thisMercEffect);
  }
}
