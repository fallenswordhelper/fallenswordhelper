import createSpan from '../../../common/cElement/createSpan';
import setInnerHtml from '../../../dom/setInnerHtml';
import setText from '../../../dom/setText';

let titanName;
let titanLocation;
let currentHp;
let maxHp;
let guildKills;
let currentPct;
let totalPct;
let statusText;
let cooldownText;

export const getTitanName = () => titanName;
export const getTitanLocation = () => titanLocation;
export const getCurrentHp = () => currentHp;
export const getMaxHp = () => maxHp;
export const getGuildKills = () => guildKills;
export const getCurrentPct = () => currentPct;
export const getTotalPct = () => totalPct;
export const getStatusText = () => statusText;
export const getCooldownText = () => cooldownText;

function part1() {
  titanName = createSpan({ innerHTML: '&nbsp;' });
  titanLocation = createSpan({ innerHTML: '&nbsp;' });
  currentHp = createSpan();
  maxHp = createSpan();
}

function part2() {
  guildKills = createSpan();
  currentPct = createSpan();
  totalPct = createSpan();
  statusText = createSpan();
  cooldownText = createSpan();
}

export function initVars() {
  part1();
  part2();
}

export function clearTitanDiv() {
  setInnerHtml('&nbsp;', titanName);
  setInnerHtml('&nbsp;', titanLocation);
  setText('', currentHp);
  setText('', maxHp);
  setText('', guildKills);
  setText('', currentPct);
  setText('', totalPct);
  setInnerHtml('', statusText);
  setInnerHtml('', cooldownText);
}
