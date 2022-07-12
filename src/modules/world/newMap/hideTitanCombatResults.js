import querySelectorArray from '../../common/querySelectorArray';
import {
  defFetchWorldRealmActions,
  defFetchWorldRealmDynamic,
  defPvE,
} from '../../support/constants';

function didNotExist(data) {
  return data.response && data.response.msg
    && data.response.msg.startsWith('Creature did not exist at that location');
}

function removeAction(data) {
  if (didNotExist(data)) {
    GameData.fetch(
      defFetchWorldRealmDynamic
      + defFetchWorldRealmActions,
    );
  }
}

function removeElement(el) { el.remove(); }

function hideTitanViewCombat(_e, data) {
  removeAction(data);
  querySelectorArray('.creature-4 > .quickCombat > .verbs')
    .forEach(removeElement);
}

export default function hideTitanCombatResults() {
  $.subscribe(defPvE, hideTitanViewCombat); // Pref
}
