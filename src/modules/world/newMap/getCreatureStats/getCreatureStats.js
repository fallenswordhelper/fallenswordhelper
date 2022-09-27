import fetchdata from '../../../ajax/fetchdata';
import partial from '../../../common/partial';
import task from '../../../support/task';
import badData from '../badData';

const creatureCache = [];

function cacheResult(json) {
  if (!badData(json)) {
    creatureCache.push(json);
  }
  return json;
}

function thisMob(id, el) {
  return id === Number(el.response.data.id);
}

function nextTick(resolve, cached) { resolve(cached); }

function fromCache(cached) {
  return new Promise(((resolve) => {
    task(3, nextTick, [resolve, cached]);
  }));
}

export default function getCreatureStats(id, passback) {
  const cached = creatureCache.find(partial(thisMob, id));
  if (cached) {
    return fromCache(cached);
  }
  return fetchdata({
    a: 1,
    d: 0,
    id,
    passback,
  }).then(cacheResult);
}
