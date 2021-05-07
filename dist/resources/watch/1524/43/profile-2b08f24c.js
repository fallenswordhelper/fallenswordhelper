import { C as getText, g as getElementsByTagName, p as pCC, K as defStatLevel, z as getElementById, bE as defStatVl, Y as setValue, J as defCharacterVirtualLevel, I as getValue, aA as runDefault, y as jQueryNotPresent, a as add } from './calfSystem-476ab75d.js';
import { c as colouredDots } from './colouredDots-b88d775e.js';
import { d as doStatTotal } from './doStatTotal-f1ef5f3d.js';
import { e as executeAll } from './executeAll-f002e740.js';
import { p as playerName$1 } from './playerName-f6639bfd.js';
import { a as asInt } from './asInt-7509a7c4.js';
import { i as interceptSubmit } from './interceptSubmit-1cc9bbe8.js';

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

const sameAsLevel = (virtualLevel) => asInt(defStatLevel) === virtualLevel;

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
    const m = await import('./debuff-78f25075.js');
    m.default(fastDebuff, disableDeactivatePrompts);
  }
}

function doAllyEnemy() {
  if (getValue('countAllyEnemy')) { runDefault(import('./profileAllyEnemy-4134225f.js')); }
}

function doFastWear() {
  if (getValue('enableQuickDrink')) {
    runDefault(import('./fastWear-feb3aa35.js'));
  }
}

function doFixFolders() {
  if (getValue('fixFolderImages')) {
    runDefault(import('./fixFolders-f027328d.js'));
  }
}

function doComponents() {
  if (getValue('componentWidgets')) {
    runDefault(import('./components-d97cb371.js'));
  }
}

function doQuickWearLink() {
  if (getValue('quickWearLink')) { runDefault(import('./quickWearLink-1e307744.js')); }
}

function doSelectAllLink() {
  if (getValue('selectAllLink')) { runDefault(import('./selectAllLink-dfe0341a.js')); }
}

function doNekidBtn() {
  if (getValue('nekidButton')) { runDefault(import('./nekidBtn-9e16930c.js')); }
}

function doAjaxifySections() {
  if (getValue('ajaxifyProfileSections')) {
    runDefault(import('./ajaxifyProfileSections-7487f30f.js'));
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
    runDefault(import('./profileInjectGuildRel-e3a6fce8.js'));
  }
}

function doQuickButtons() {
  if (getValue('showQuickButtons')) {
    runDefault(import('./profileInjectQuickButton-c26073fd.js'));
  }
}

function doUpdateBuffs() {
  if (getValue('injectBuffGuide')) { runDefault(import('./updateBuffs-882fadc6.js')); }
}

function doUpdateStatistics() {
  if (getValue('statisticsWrap')) { runDefault(import('./updateStatistics-cea0eb5f.js')); }
}

function doHighlightPvPProt() {
  if (getValue('highlightPvpProtection')) {
    runDefault(import('./highlightPvpProtection-8d5feaa2.js'));
  }
}

function doRenderBio() {
  if (shouldRender()) { runDefault(import('./bio-0c2ce9b0.js')); }
}

function doCompressBio() {
  if (getValue('enableBioCompressor')) {
    runDefault(import('./compressBio-82e66f91.js'));
  }
}

function doBuffLevels() {
  if (getValue('showBuffLevel')) { runDefault(import('./buffLevelDisplay-6d4ccdfa.js')); }
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
//# sourceMappingURL=profile-2b08f24c.js.map
