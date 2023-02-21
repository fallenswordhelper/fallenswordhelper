import indexAjaxJson from '../../ajax/indexAjaxJson';

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
  return { r: json.map(updateType), s: true };
}

export default async function guildFetchInv() {
  const json = await indexAjaxJson({
    cmd: 'guild',
    subcmd: 'fetchinv',
  });
  return formatResponse(json);
}
