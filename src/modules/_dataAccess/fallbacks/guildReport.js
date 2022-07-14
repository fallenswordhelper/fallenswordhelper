import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import getTextTrim from '../../common/getTextTrim';
import querySelectorArray from '../../common/querySelectorArray';
import itemId from '../../guild/inventory/guildReport/itemId';

function details(td) {
  if (!td.children[0].href) { return { a: -1, n: '-1', t: -1 }; }
  const thisId = Number(itemId(td.children[0].href));
  const thisName = getTextTrim(td.previousElementSibling);
  const ret = { a: thisId };
  if (thisName.endsWith(' (Potion)')) {
    ret.n = thisName.slice(0, -9);
    ret.t = 15;
  } else {
    ret.n = thisName;
    ret.t = -1;
  }
  return ret;
}

function parseReport(doc) {
  const nodeList = querySelectorArray('#pCC table table td:nth-of-type(3n)', doc);
  return { r: nodeList.map(details), s: true };
}

// Incomplete
export default async function guildReport() {
  return parseReport(await indexAjaxDoc({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'report',
  }));
}
