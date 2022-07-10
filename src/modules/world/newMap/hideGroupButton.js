import partial from '../../common/partial';
import { defAfterUpdateActionlist } from '../../support/constants';
import getValue from '../../system/getValue';

function hideGroupByType(type) { // jQuery
  $(`#actionList li.creature-${type.toString()} a.create-group`).hide();
}

function hideGroupSubscribe(type) { // jQuery.min
  $.subscribe(defAfterUpdateActionlist, partial(hideGroupByType, type));
}

const hideGroupTypes = [
  'hideChampionsGroup',
  'hideElitesGroup',
  'hideSEGroup',
  'hideTitanGroup',
  'hideLegendaryGroup',
];

function groupType(el, i) {
  if (getValue(el)) {
    hideGroupSubscribe(i + 1);
    hideGroupByType(i + 1);
  }
}

export default function hideGroupButton() {
  hideGroupTypes.forEach(groupType);
}
