import entries from '../common/entries';
import fromEntries from '../common/fromEntries';
import isUndefined from '../common/isUndefined';
import api from './api';

let hud = {};

const listItemToEntry = ({ k, v }) => [k, v];
const entryToListItem = ([k, v]) => ({ k, v });
const listToObject = (list) => fromEntries(list?.map(listItemToEntry));
const objectToList = (obj) => entries(obj).map(entryToListItem);

function updateList(oldList, newList) {
  return objectToList({
    ...listToObject(oldList),
    ...listToObject(newList),
  });
}

function updateHud(json) {
  // hud error
  // missing hud - no error
  hud = {
    g: updateList(hud?.g, json.h?.g),
    mc: json.h?.mc,
    p: updateList(hud?.p, json.h?.p),
  };
}

function callWithHudCount(data, options) {
  const hudCount = hud?.mc?.find(({ k }) => k === 0)?.v;
  return api({
    ...data,
    ...!isUndefined(hudCount) && { hc: hudCount },
  }, options);
}

export default async function hudApi(data, options) {
  // needs to be serialised
  const json = await callWithHudCount(data, options);
  updateHud(json);
  return json;
}
