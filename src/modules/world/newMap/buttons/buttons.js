import createButton from '../../../common/cElement/createButton';
import createDiv from '../../../common/cElement/createDiv';
import textSpan from '../../../common/cElement/textSpan';
import getElementById from '../../../common/getElementById';
import hideQTip from '../../../common/hideQTip';
import insertElement from '../../../common/insertElement';
import insertElementBefore from '../../../common/insertElementBefore';
import on from '../../../common/on';
import onclick from '../../../common/onclick';
import openQuickBuffById from '../../../common/openQuickBuffById';
import partial from '../../../common/partial';
import playerId from '../../../common/playerId';
import setText from '../../../dom/setText';
import calf from '../../../support/calf';
import {
  defPlayerLevel,
  defRealmUpdate,
  defSubcmd,
  guideUrl,
  worldUrl,
} from '../../../support/constants';
import getValue from '../../../system/getValue';
import setValue from '../../../system/setValue';
import fixTeleport from './fixTeleport';
import makeToggleBtn from './makeToggleBtn';

let buttonContainer = 0;
let realmLvl = 0;
let yourLvl = 0;
let formGroup = 0;
let quickBuff = 0;
let realmMap = 0;
let ufsgMap = 0;
let soundCheck = 0;
let huntCheck = 0;

function doFormGroup(target) {
  hideQTip(target);
  GameData.doAction(12, 401, {}, 0);
}

function openQuickBuff() {
  openQuickBuffById(playerId());
}

function openRealmMap() {
  window.open(`${worldUrl + defSubcmd}map`, 'fsMap');
}

function openUfsgMap() {
  const gameRealm = GameData.realm();
  window.open(
    `${guideUrl}realms${defSubcmd}view&realm_id=${gameRealm.id}`,
    'mapUfsg',
  );
}

function toggleSound() {
  // Doesn't actually work in New World...
  setValue('playNewMessageSound', !getValue('playNewMessageSound'));
}

function toggleHuntMode() {
  calf.huntingMode = !calf.huntingMode;
  setValue('huntingMode', calf.huntingMode);
}

function makeButtonContainer() {
  return createDiv({
    className: 'fshCurveContainer',
    id: 'fshWorldButtonContainer',
  });
}

const exists = (val) => textSpan(val ? val.toString() : '?');

function levelBox(lvlDiv, prefix, aSpan) {
  const aDiv = createDiv({ textContent: `${prefix} Lvl: ` });
  insertElement(aDiv, aSpan);
  insertElement(lvlDiv, aDiv);
}

function doLevels(worldName) {
  const lvlDiv = createDiv({ className: 'fshFsty' });
  realmLvl = exists(GameData.realm().minlevel);
  levelBox(lvlDiv, 'Min', realmLvl);
  yourLvl = exists(GameData.player().level);
  levelBox(lvlDiv, 'Your', yourLvl);
  insertElement(worldName, lvlDiv);
}

function doBtn(className, tip, worldName) {
  const btn = createButton({
    className: `fshCurveEle fshCurveBtn fshPoint tip-static ${className}`,
    dataset: { tipped: tip },
  });
  insertElement(worldName, btn);
  return btn;
}

function showQuickLinks(worldName) {
  doLevels(worldName);
  formGroup = doBtn('fshFormGroup', 'Quick Create Attack Group', worldName);
  quickBuff = doBtn('fshQuickBuff', 'Open Quick Buff Popup', worldName);
  realmMap = doBtn('fshRealmMap', 'Open Realm Map', worldName);
  ufsgMap = doBtn('fshTempleOne', 'Search map in Ultimate FSG', worldName);
}

function showSpeakerOnWorld(worldName) {
  if (getValue('showSpeakerOnWorld')) {
    const msgSounds = getValue('playNewMessageSound');
    soundCheck = makeToggleBtn({
      prefVal: msgSounds,
      checkId: 'fshSoundCheck',
      onClass: 'soundOn',
      onTip: 'Turn Off Sound when you have a new log message',
      offClass: 'soundOff',
      offTip: 'Turn On Sound when you have a new log message',
      worldName,
    });
  }
}

function showHuntMode(worldName) {
  const inHuntMode = calf.huntingMode;
  huntCheck = makeToggleBtn({
    prefVal: inHuntMode,
    checkId: 'fshHuntCheck',
    onClass: 'huntOn',
    onTip: 'Hunting mode is ON',
    offClass: 'huntOff',
    offTip: 'Hunting mode is OFF',
    worldName,
  });
}

function addButtons() {
  showQuickLinks(buttonContainer);
  showSpeakerOnWorld(buttonContainer);
  showHuntMode(buttonContainer);
}

const changeHdl = [
  [() => soundCheck, toggleSound],
  [() => huntCheck, toggleHuntMode],
];

const clickHdl = [
  [() => formGroup, doFormGroup],
  [() => quickBuff, openQuickBuff],
  [() => realmMap, openRealmMap],
  [() => ufsgMap, openUfsgMap],
];

function handleEvent(evtAry, evt) {
  const { target } = evt;
  const [, fn] = evtAry.find(([f]) => f() === target) ?? [];
  if (fn) {
    target.blur();
    fn(target);
  }
}

function genericHandler(evtAry) {
  return partial(handleEvent, evtAry);
}

function setupHandlers() {
  onclick(buttonContainer, genericHandler(clickHdl));
  on(buttonContainer, 'change', genericHandler(changeHdl));
}

function injectButtons() {
  if (!buttonContainer) {
    buttonContainer = makeButtonContainer();
    addButtons();
    setupHandlers();
    insertElementBefore(buttonContainer, getElementById('worldCoord'));
  }
}

function realmUpdate(_e, data) {
  if (realmLvl && data.b.minlevel) {
    fixTeleport();
    setText(data.b.minlevel, realmLvl);
  }
}

function levelStats(_e, data) {
  if (yourLvl) {
    setText(data.b, yourLvl);
  }
}

export default function buttons() {
  injectButtons();
  $.subscribe(defRealmUpdate, realmUpdate);
  $.subscribe(defPlayerLevel, levelStats);
}
