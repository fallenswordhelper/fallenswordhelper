import './buildFshDivs.css';
import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import isFunction from '../../../common/isFunction';
import on from '../../../common/on';
import onclick from '../../../common/onclick';
import { huntingBuffsHtml } from '../../../settings/huntingBuffs';
import { simpleCheckboxHtml } from '../../../settings/simpleCheckbox';
import { defFetchPlayerBuffs, defFetchWorldRealmActions } from '../../../support/constants';
import updateBuffInfo from '../buffInfo/updateBuffInfo';
import { toggleHidePlayerActions } from '../prepareHidePlayerActions';
import testDynamics from '../titanStats/testDynamics';
import toggleEnabledHuntingMode from './huntingBuffs/toggleEnabledHuntingMode';
import togglePref from './togglePref';

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

function toggleShowHuntingBuffs() {
  togglePref('showHuntingBuffs');
  GameData.fetch(defFetchPlayerBuffs);
}

function toggleSubLvlCreature() {
  togglePref('hideSubLvlCreature');
  GameData.fetch(defFetchWorldRealmActions);
}

function toggleShowTitanInfo() {
  togglePref('showTitanInfo');
  testDynamics(GameData.realm().dynamic);
}

function toggleBuffInfo() {
  togglePref('showBuffInfo');
  updateBuffInfo();
}

const fshEvents = {
  hideSubLvlCreature: toggleSubLvlCreature,
  hidePlayerActions: toggleHidePlayerActions,
  showCreatureInfo: () => togglePref('showCreatureInfo'),
  showHuntingBuffs: toggleShowHuntingBuffs,
  showMonsterLog: () => togglePref('showMonsterLog'),
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
  const worldPage = getElementById('worldPage');
  if (!worldPage) return;
  const fshDiv = createDiv({ className: 'fshCenter fshFten' });
  const prefsDiv = buildPrefsDiv();
  onclick(prefsDiv, prefsClickEvent);
  on(prefsDiv, 'change', toggleEnabledHuntingMode);
  insertElement(fshDiv, prefsDiv);
  const missingBuffsDiv = createDiv();
  insertElement(fshDiv, missingBuffsDiv);
  insertElement(worldPage, fshDiv);
  return missingBuffsDiv;
}
