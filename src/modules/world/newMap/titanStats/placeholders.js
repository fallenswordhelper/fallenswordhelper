import createSpan from '../../../common/cElement/createSpan';
import setInnerHtml from '../../../dom/setInnerHtml';
import setText from '../../../dom/setText';

let titanName = 0;
let titanLocation = 0;
let currentHp = 0;
let maxHp = 0;
let guildKills = 0;
let currentPct = 0;
let totalPct = 0;
let statusText = 0;
let cooldownText = 0;

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
