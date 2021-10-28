import allthen from '../../common/allthen';
import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';

const rankPerms = (rankId) => indexAjaxData({
  cmd: 'guild',
  subcmd: 'ranks',
  subcmd2: 'add',
  rank_id: rankId,
});

const rankFromInput = (input) => rankPerms(input.getAttribute('onclick').match(/[=](\d+)/)[1]);

const permFlags = (doc) => querySelectorArray('input[name^="permission"]:checked', doc)
  .reduce((a, b) => a + 2 ** Number(b.name.match(/\[(\d+)\]/)[1]), 0);

function parsePerms(doc) {
  return {
    id: Number(querySelector('input[name="rank_id"]', doc).value),
    name: querySelector('input[name="rank_name"]', doc).value,
    permissions: permFlags(doc),
    tax: Number(querySelector('input[name="rank_tax"]', doc).value),
  };
}

function formatPerms(ary) {
  const docs = ary.map(createDocument);
  const ranks = docs.map(parsePerms);
  return { r: { 0: ranks[0], ranks: ranks.slice(1) }, s: true };
}

function processRanks(html) {
  const doc = createDocument(html);
  const editButton = querySelectorArray('input[value="Edit"]', doc);
  return allthen(editButton.map(rankFromInput), formatPerms);
}

// TODO - this is no good, only works for leaders
// start with guild/manage and handle error on rankPerms
export default function ranksView() {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'ranks',
  }).then(processRanks);
}
