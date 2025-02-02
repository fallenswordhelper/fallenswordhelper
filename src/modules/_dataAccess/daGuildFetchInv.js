import indexAjaxJson from '../ajax/indexAjaxJson';
import appFetchinv from '../app/guild/fetchinv';
import isArray from '../common/isArray';
import $dataAccess from './$dataAccess';

function updateType(item) {
  const updates = {
    a: Number(item.a),
    b: Number(item.b),
    l: Number(item.l),
    n: item.extra ? item.extra.name : item.n,
    t: Number(item.t),
  };
  return { ...item, ...updates };
}

function formatResponse(json) {
  if (isArray(json)) return { r: json.map(updateType), s: true };
  return { e: { code: 0, message: 'Server Error' }, s: false };
}

async function guildFetchInv() {
  const json = await indexAjaxJson({
    cmd: 'guild',
    subcmd: 'fetchinv',
  });
  return formatResponse(json);
}

export default function daGuildFetchInv() {
  return $dataAccess(appFetchinv, guildFetchInv);
}
