import colouredDots from '../common/colouredDots';
import doStatTotal from './doStatTotal';
import executeAll from '../common/executeAll';
import getIsSelf from './getIsSelf';
import getValue from '../system/getValue';
import ifSelf from './ifSelf/ifSelf';
import interceptSubmit from '../common/interceptSubmit';
import jQueryNotPresent from '../common/jQueryNotPresent';
import runDefault from '../common/runDefault';
import shouldRender from './bio/shouldRender';
import task from '../support/task';

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

function allowBack() {
  if (!getIsSelf()) { interceptSubmit(); }
}

export default function profile() {
  if (jQueryNotPresent()) { return; }
  updateDom();
  allowBack();
}
