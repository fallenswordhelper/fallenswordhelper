import getArrayByClassName from '../../common/getArrayByClassName';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import getValue from '../../system/getValue';
import hideElement from '../../common/hideElement';
import setValue from '../../system/setValue';
import {
  defAfterUpdateActionlist,
  defFetchWorldRealmActions,
} from '../../support/constants';

let hidePlayerActions;

export function toggleHidePlayerActions() {
  hidePlayerActions = !hidePlayerActions;
  setValue('hidePlayerActions', hidePlayerActions);
  GameData.fetch(defFetchWorldRealmActions);
}

function hideActions(el) {
  const verbs = getElementsByClassName('verbs', el);
  if (verbs.length === 1) {
    hideElement(verbs[0]);
  }
}

function doHidePlayerActions() {
  if (!hidePlayerActions) { return; }
  const act = getElementById('actionList');
  getArrayByClassName('player', act).forEach(hideActions);
}

export function prepareHidePlayerActions() {
  hidePlayerActions = getValue('hidePlayerActions');
  $.subscribe(defAfterUpdateActionlist, doHidePlayerActions);
  doHidePlayerActions();
}
