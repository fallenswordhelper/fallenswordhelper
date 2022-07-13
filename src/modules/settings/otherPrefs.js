import getValue from '../system/getValue';
import bunchOfSimple from './bunchOfSimple';
import {
  justCheckbox,
  justLabel,
  simpleCheckbox,
} from './simpleCheckbox';

function recipeHiding() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('hideRecipes')}</td>`
    + '<td>'
    + `${justCheckbox('hideRecipes')}`
    + '&nbsp;'
    + `<input name="hideRecipeNames" class="fshSettingsText" value="${getValue('hideRecipeNames')}">`
    + '</td>'
    + '</tr>';
}

function groupJoinSize() {
  return '<tr>'
    + `<td class="fshRight">${justLabel('enableMaxGroupSizeToJoin')}</td>`
    + '<td>'
    + `${justCheckbox('enableMaxGroupSizeToJoin')}`
    + '&nbsp;&nbsp;Max Size: '
    + `<input name="maxGroupSizeToJoin" class="fshSettingsNumber" type="number" value="${getValue('maxGroupSizeToJoin')}">`
    + '</td>'
    + '</tr>';
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
