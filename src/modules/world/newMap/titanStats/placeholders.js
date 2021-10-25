import createSpan from '../../../common/cElement/createSpan';
import setInnerHtml from '../../../dom/setInnerHtml';
import setText from '../../../dom/setText';

export let titanName;
export let titanLocation;
export let currentHp;
export let maxHp;
export let guildKills;
export let currentPct;
export let totalPct;
export let statusText;
export let cooldownText;

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
