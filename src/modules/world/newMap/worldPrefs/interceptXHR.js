import bitwiseAnd from '../../../common/bitwiseAnd';
import jsonParse from '../../../common/jsonParse';
import jsonStringify from '../../../common/jsonStringify';
import partial from '../../../common/partial';
import calf from '../../../support/calf';
import { defFetchWorldRealmActions } from '../../../support/constants';

function subLvlMobs(realmLevel, el) {
  if (el.type === 6) {
    return el.data.creature_type !== 0 || el.data.level >= realmLevel;
  }
  return true;
}

function getLvlToTest(myData) {
  return myData.realm?.minlevel || GameData.realm().minlevel;
}

function xhrDataFilter(data) {
  const myData = jsonParse(data);
  if (!myData?.actions?.length) {
    return data;
  }
  myData.actions = myData.actions.filter(
    partial(subLvlMobs, getLvlToTest(myData)),
  );
  return jsonStringify(myData);
}

function isActionList(originalOptions) {
  return (
    originalOptions.data?.d &&
    bitwiseAnd(originalOptions.data.d, defFetchWorldRealmActions)
  );
}

function xhrPreFilter(options, originalOptions) {
  if (calf.hideSubLvlCreature && isActionList(originalOptions)) {
    options.dataFilter = xhrDataFilter;
  }
}

export default function interceptXHR() {
  // jQuery.min
  $.ajaxPrefilter('JSON', xhrPreFilter);
  if (calf.hideSubLvlCreature) {
    GameData.fetch(defFetchWorldRealmActions);
  }
}
