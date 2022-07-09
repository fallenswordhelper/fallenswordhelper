import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import { huntingBuffsHtml } from '../../../settings/huntingBuffs';
import insertElement from '../../../common/insertElement';
import insertElementBefore from '../../../common/insertElementBefore';
import isFunction from '../../../common/isFunction';
import on from '../../../common/on';
import onclick from '../../../common/onclick';
import { simpleCheckboxHtml } from '../../../settings/simpleCheckbox';
import { toggleBuffInfo } from '../buffInfo/buffInfo';
import toggleEnabledHuntingMode from './huntingBuffs/toggleEnabledHuntingMode';
import { toggleHidePlayerActions } from '../prepareHidePlayerActions';
import toggleShowCreatureInfo from './toggleShowCreatureInfo';
import toggleShowHuntingBuffs from './toggleShowHuntingBuffs';
import toggleShowMonsterLog from './toggleShowMonsterLog';
import { toggleShowTitanInfo } from '../titanStats/titanStats';
import toggleSubLvlCreature from './toggleSubLvlCreature';

function buildPrefsDiv() {
  return createDiv({
    id: 'fshWorldPrefs',
    innerHTML: `${simpleCheckboxHtml('showCreatureInfo')}&nbsp;&nbsp;${
      simpleCheckboxHtml('showMonsterLog')}&nbsp;&nbsp;${
      simpleCheckboxHtml('showTitanInfo')}&nbsp;&nbsp;${
      simpleCheckboxHtml('showBuffInfo')
    }<br>${
      simpleCheckboxHtml('hideSubLvlCreature')}&nbsp;&nbsp;${
      simpleCheckboxHtml('hidePlayerActions')}&nbsp;&nbsp;${
      huntingBuffsHtml()}`,
  });
}

const fshEvents = {
  hideSubLvlCreature: toggleSubLvlCreature,
  hidePlayerActions: toggleHidePlayerActions,
  showCreatureInfo: toggleShowCreatureInfo,
  showHuntingBuffs: toggleShowHuntingBuffs,
  showMonsterLog: toggleShowMonsterLog,
  showTitanInfo: toggleShowTitanInfo,
  showBuffInfo: toggleBuffInfo,
};

function prefsClickEvent(e) {
  const tmpFn = fshEvents[e.target.name];
  if (isFunction(tmpFn)) {
    e.target.blur();
    tmpFn(e);
  }
}

export default function buildFshDivs() {
  const fshDiv = createDiv({ className: 'fshCenter fshFten' });
  const prefsDiv = buildPrefsDiv();
  onclick(prefsDiv, prefsClickEvent);
  on(prefsDiv, 'change', toggleEnabledHuntingMode);
  insertElement(fshDiv, prefsDiv);
  const missingBuffsDiv = createDiv();
  insertElement(fshDiv, missingBuffsDiv);
  const tempWorldButtons = getElementById('worldContainerBelow').children[0];
  insertElementBefore(fshDiv, tempWorldButtons);
  return missingBuffsDiv;
}
