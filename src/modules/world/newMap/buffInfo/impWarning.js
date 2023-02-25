import './impWarning.css';
import daQuickbuff from '../../../_dataAccess/daQuickbuff';
import createButton from '../../../common/cElement/createButton';
import createSpan from '../../../common/cElement/createSpan';
import insertElement from '../../../common/insertElement';
import insertHtmlBeforeEnd from '../../../common/insertHtmlBeforeEnd';
import onclick from '../../../common/onclick';
import playerName from '../../../common/playerName';
import quickbuffSuccess from '../../../common/quickbuffSuccess';
import toggleForce from '../../../common/toggleForce';
import setText from '../../../dom/setText';
import { defFetchPlayerBuffs } from '../../../support/constants';
import getBuff from './getBuff';

let impDiv = 0;
let impRemainingSpan = 0;

function refreshBuffs(json) {
  if (quickbuffSuccess(json)) {
    GameData.fetch(defFetchPlayerBuffs);
  }
}

async function recastClick() {
  if (getBuff('Summon Shield Imp')) { return; }
  const json = await daQuickbuff([playerName()], [55]);
  refreshBuffs(json);
}

function getImpsRemaining(imp) {
  if (imp) {
    return Number(imp.stack);
  }
  return 0;
}

const impStyles = [
  'imp-0',
  'imp-1',
  'imp-1',
];

function getImpWarningStyle(impsRem) {
  return impStyles[impsRem] || 'fshGreen';
}

function initImpDiv(containerDiv) {
  [impDiv] = containerDiv.children;
  setText('Shield Imps Remaining: ', impDiv);
  impRemainingSpan = createSpan();
  insertElement(impDiv, impRemainingSpan);
  insertHtmlBeforeEnd(impDiv, '&nbsp;');
  const recast = createButton({ className: 'xSmallLink', textContent: 'Recast' });
  insertElement(impDiv, recast);
  onclick(recast, recastClick);
}

function hasImp(containerDiv, imp) {
  if (impDiv) {
    toggleForce(impDiv, false);
  } else {
    initImpDiv(containerDiv);
  }
  const impsRem = getImpsRemaining(imp);
  impDiv.className = getImpWarningStyle(impsRem);
  setText(impsRem, impRemainingSpan);
}

function hideImpWarning() {
  if (impDiv) {
    toggleForce(impDiv, true);
  }
}

export default function impWarning(containerDiv, imp, dd) {
  if (imp || dd) {
    hasImp(containerDiv, imp);
  } else {
    hideImpWarning();
  }
}
