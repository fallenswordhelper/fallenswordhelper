import colouredDots from '../common/colouredDots';
import executeAll from '../common/executeAll';
import interceptSubmit from '../common/interceptSubmit';
import jQueryNotPresent from '../common/jQueryNotPresent';
import runDefault from '../common/runDefault';
import task from '../support/task';
import getValue from '../system/getValue';
import shouldRender from './bio/shouldRender';
import doStatTotal from './doStatTotal';
import ifSelf from './ifSelf/ifSelf';

function doGuildRelationship() {
  if (getValue('showGuildRelationship')) {
    runDefault(import('./profileInjectGuildRel'));
  }
}

function doQuickButtons() {
  if (getValue('showQuickButtons')) {
    runDefault(import('./profileInjectQuickButton/profileInjectQuickButton'));
  }
}

function doUpdateBuffs() {
  if (getValue('injectBuffGuide')) { runDefault(import('./updateBuffs')); }
}

function doUpdateStatistics() {
  if (getValue('statisticsWrap')) { runDefault(import('./updateStatistics')); }
}

function doHighlightPvPProt() {
  if (getValue('highlightPvpProtection')) {
    runDefault(import('./highlightPvpProtection'));
  }
}

function doRenderBio() {
  if (shouldRender()) { runDefault(import('./bio/bio')); }
}

function doCompressBio() {
  if (getValue('enableBioCompressor')) {
    runDefault(import('./bio/compressBio'));
  }
}

function doBuffLevels() {
  if (getValue('showBuffLevel')) { runDefault(import('./buffLevelDisplay')); }
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
  task(3, colouredDots);
}

export default function profile() {
  if (jQueryNotPresent()) { return; }
  updateDom();
  interceptSubmit();
}
