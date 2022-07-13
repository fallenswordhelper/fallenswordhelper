import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import makeLabelRow from './makeLabelRow';
import {
  justCheckbox,
  simpleCheckbox,
} from './simpleCheckbox';

function recipeHiding() {
  return makeLabelRow(
    'hideRecipes',
    `${justCheckbox('hideRecipes')}&nbsp;`
      + `<input name="hideRecipeNames" class="fshSettingsText" value="${
        getValue('hideRecipeNames')}">`,
  );
}

function groupJoinSize() {
  return makeLabelRow(
    'enableMaxGroupSizeToJoin',
    `${justCheckbox('enableMaxGroupSizeToJoin')}&nbsp;&nbsp;Max Size: `
      + `<input name="maxGroupSizeToJoin" class="fshSettingsNumber" type="number" value="${
        getValue('maxGroupSizeToJoin')}">`,
  );
}

export default function otherPrefs() {
  // Other prefs
  return `<tr><td class="header" colspan="2">Other preferences</td></tr>${
    simpleCheckbox('autoFillMinBidPrice')}${
    recipeHiding()}${
    bunchOfSimple([
      'hideRelicOffline',
      'enterForSendMessage',
      'enableMessageTemplates',
      'joinAllLink',
    ])}${
    groupJoinSize()}${
    bunchOfSimple([
      'moveComposingButtons',
      'pageTwoLinks',
      'addUfsgLinks',
      'trackLadderReset',
      'optInOnLadderPage',
      'storeLastScavPage',
      'betaOptIn',
    ])}`;
}
