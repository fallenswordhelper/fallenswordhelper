import {
  defRefreshActionList,
  defStairway,
} from '../../support/constants';
import titanStats from './titanStats/titanStats';

function injectWorldNewMap(_e, data) {
  if (data.realm?.name) titanStats(data.realm);
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
