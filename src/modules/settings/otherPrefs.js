import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import isValueChecked from './isValueChecked';
import { helpLink, simpleCheckbox } from './simpleCheckbox';

function recipeHiding() {
  return `<tr><td class="fshRight">Hide Specific Recipes${
    helpLink(
      'Hide Specific Recipes',
      'If enabled, this hides recipes whose name matches the list '
      + '(separated by commas). This works on Recipe Manager',
    )
  }:</td><td><input name="hideRecipes" `
    + `type="checkbox" value="on"${
      isValueChecked('hideRecipes')}>`
    + `&nbsp;<input name="hideRecipeNames" class="fshSettingsText" value="${
      getValue('hideRecipeNames')}"></td></tr>`;
}

function groupJoinSize() {
  return `<tr><td align= "right">Max Group Size to Join${
    helpLink(
      'Max Group Size to Join',
      'This will disable HCSs Join All functionality and will only join '
      + 'groups less than a set size. ',
    )
  }:</td><td><input name="enableMaxGroupSizeToJoin" `
    + `type = "checkbox" value = "on"${
      isValueChecked('enableMaxGroupSizeToJoin')
    }>&nbsp;&nbsp;Max Size: `
    + `<input name="maxGroupSizeToJoin" class="fshSettingsNumber" type="number" value="${
      getValue('maxGroupSizeToJoin')}"></td></tr>`;
}

export default function otherPrefs() {
  // Other prefs
  return `<tr><th colspan="2"><b>Other preferences</b></th></tr>${
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
