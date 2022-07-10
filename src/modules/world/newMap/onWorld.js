import {
  defRefreshActionList,
  defStairway,
} from '../../support/constants';
import { titanStats } from './titanStats/titanStats';

function hazRealm(data) {
  return data.realm && data.realm.name;
}

function injectWorldNewMap(e, data) {
  if (hazRealm(data)) {
    titanStats(data.realm);
  }
}

export default function onWorld() {
  if (window.initialGameData) { // HCS initial data
    injectWorldNewMap(null, window.initialGameData);
  }
  $.subscribe(
    `${defRefreshActionList} ${defStairway}`,
    injectWorldNewMap, // change of information
  );
}
