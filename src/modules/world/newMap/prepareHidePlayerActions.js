import getArrayByClassName from '../../common/getArrayByClassName';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import hideElement from '../../common/hideElement';
import {
  defAfterUpdateActionlist,
  defFetchWorldRealmActions,
} from '../../support/constants';
import getValue from '../../system/getValue';
import setValue from '../../system/setValue';

let hidePlayerActions = 0;

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
