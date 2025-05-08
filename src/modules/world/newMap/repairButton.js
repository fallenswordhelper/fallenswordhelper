import {
  defControlsKeydown,
  defFetchPlayerBackpackCount,
  defFetchPlayerBuffs,
  defFetchWorldRealmActions,
  defFetchWorldRealmDynamic,
} from '../../support/constants';

function doRepair(_e, key) {
  if (key === 'ACT_REPAIR') {
    GameData.fetch(
      defFetchPlayerBackpackCount
      + defFetchPlayerBuffs
      + defFetchWorldRealmDynamic
      + defFetchWorldRealmActions,
    );
  }
}

export default function repairButton() {
  $.subscribe(defControlsKeydown, doRepair);
}
