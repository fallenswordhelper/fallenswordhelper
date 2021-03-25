import { C as getText, g as getElementsByTagName, p as pCC, K as getElementsByClassName, L as defStatLevel, z as getElementById, bE as defStatVl, X as setValue, J as defCharacterVirtualLevel, I as getValue, as as runDefault, y as jQueryNotPresent, a as add } from './calfSystem-6840a38e.js';
import { c as colouredDots } from './colouredDots-a62752e1.js';
import { d as doStatTotal } from './doStatTotal-d40c4f8b.js';
import { e as executeAll } from './executeAll-30ce254f.js';
import { p as playerName$1 } from './playerName-2d72a4c8.js';
import { i as intValue } from './intValue-0e97c9b9.js';
import { v as valueText } from './valueText-6241396f.js';
import { i as interceptSubmit } from './interceptSubmit-7a9128a3.js';

let playerName;

function getPlayerName() {
  if (!playerName) {
    playerName = getText(getElementsByTagName('h1', pCC)[0]);
  }
  return playerName;
}

let haveSelf;
let isSelf;

function getIsSelf() {
  if (!haveSelf) {
    isSelf = getPlayerName() === playerName$1();
    haveSelf = true;
  }
  return isSelf;
}

function sameAsLevel(virtualLevel) {
  return intValue(valueText(
    getElementsByClassName(defStatLevel),
  )) === virtualLevel;
}

function storeVL() {
  // store the VL of the player
  const virtualLevel = Number(getText(getElementById(defStatVl)));
  if (sameAsLevel(virtualLevel)) {
    setValue(defCharacterVirtualLevel, ''); // ?
  } else {
    setValue(defCharacterVirtualLevel, virtualLevel);
  }
}

async function doFastDebuff() {
  const fastDebuff = getValue('fastDebuff');
  const disableDeactivatePrompts = getValue('disableDeactivatePrompts');
  if (fastDebuff || disableDeactivatePrompts) {
    const m = await import('./debuff-c433ef4a.js');
    m.default(fastDebuff, disableDeactivatePrompts);
  }
}

function doAllyEnemy() {
  if (getValue('countAllyEnemy')) { runDefault(import('./profileAllyEnemy-9a0a238a.js')); }
}

function doFastWear() {
  if (getValue('enableQuickDrink')) {
    runDefault(import('./fastWear-f5985505.js'));
  }
}

function doFixFolders() {
  if (getValue('fixFolderImages')) {
    runDefault(import('./fixFolders-5466dbfb.js'));
  }
}

function doComponents() {
  if (getValue('componentWidgets')) {
    runDefault(import('./components-61c74f10.js'));
  }
}

function doQuickWearLink() {
  if (getValue('quickWearLink')) { runDefault(import('./quickWearLink-e19a06ac.js')); }
}

function doSelectAllLink() {
  if (getValue('selectAllLink')) { runDefault(import('./selectAllLink-75ef0132.js')); }
}

function doNekidBtn() {
  if (getValue('nekidButton')) { runDefault(import('./nekidBtn-fe64cd61.js')); }
}

function doAjaxifySections() {
  if (getValue('ajaxifyProfileSections')) {
    runDefault(import('./ajaxifyProfileSections-be7facd4.js'));
  }
}

function ifSelf() {
  if (getIsSelf()) {
    // self inventory
    executeAll([
      doFastDebuff,
      doAllyEnemy,
      doFastWear,
      doFixFolders,
      doComponents,
      doQuickWearLink,
      doSelectAllLink,
      storeVL,
      doNekidBtn,
      doAjaxifySections,
    ]);
  }
}

function selfRender(isSelf) {
  return isSelf && getValue('renderSelfBio');
}

function otherRender(isSelf) {
  return !isSelf && getValue('renderOtherBios');
}

function shouldRender() {
  const isSelf = getIsSelf();
  return selfRender(isSelf) || otherRender(isSelf);
}

function doGuildRelationship() {
  if (getValue('showGuildRelationship')) {
    runDefault(import('./profileInjectGuildRel-e8e5208a.js'));
  }
}

function doQuickButtons() {
  if (getValue('showQuickButtons')) {
    runDefault(import('./profileInjectQuickButton-9e641ac1.js'));
  }
}

function doUpdateBuffs() {
  if (getValue('injectBuffGuide')) { runDefault(import('./updateBuffs-62a8cab1.js')); }
}

function doUpdateStatistics() {
  if (getValue('statisticsWrap')) { runDefault(import('./updateStatistics-bb026148.js')); }
}

function doHighlightPvPProt() {
  if (getValue('highlightPvpProtection')) {
    runDefault(import('./highlightPvpProtection-4702374b.js'));
  }
}

function doRenderBio() {
  if (shouldRender()) { runDefault(import('./bio-7c7155b1.js')); }
}

function doCompressBio() {
  if (getValue('enableBioCompressor')) {
    runDefault(import('./compressBio-ea981b71.js'));
  }
}

function doBuffLevels() {
  if (getValue('showBuffLevel')) { runDefault(import('./buffLevelDisplay-f4abffa4.js')); }
}

function updateDom() {
  executeAll([
    ifSelf,
    doGuildRelationship,
    doQuickButtons,
    doUpdateBuffs,
    doUpdateStatistics,
    doHighlightPvPProt,
    doRenderBio,
    doCompressBio,
    doStatTotal,
    doBuffLevels,
  ]);
  add(3, colouredDots);
}

function allowBack() {
  if (!getIsSelf()) { interceptSubmit(); }
}

function injectProfile() {
  if (jQueryNotPresent()) { return; }
  updateDom();
  allowBack();
}

var profile = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': injectProfile
});

export { getPlayerName as a, getIsSelf as g, profile as p };
//# sourceMappingURL=profile-cb28acde.js.map
