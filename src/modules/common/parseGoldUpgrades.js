import dataRows from './dataRows';
import getTextTrim from './getTextTrim';
import numberIsNaN from './numberIsNaN';
import querySelector from './querySelector';

function processRow(row, id) {
  const limit = Number(getTextTrim(row.cells[2]).split(' / ')[0]);
  const resets = getTextTrim(row.cells[3]);
  return {
    id,
    ...(!['-', 'n/a'].includes(resets) && {
      reset_time: Date.parse(`${resets} GMT`) / 1000,
    }),
    current: numberIsNaN(limit) ? 0 : limit,
  };
}

export default function parseGoldUpgrades(doc) {
  if (!doc) return { s: false };
  const tbl = querySelector('#pCC > table', doc);
  if (!tbl) return { s: false };
  return { s: true, r: dataRows(tbl, 5, 0).map(processRow) };
}
