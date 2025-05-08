import indexAjaxDoc from '../ajax/indexAjaxDoc';
import advisorView from '../app/guild/advisorView';
import arrayFrom from '../common/arrayFrom';
import getTextTrim from '../common/getTextTrim';
import querySelector from '../common/querySelector';
import intValue from '../system/intValue';
import $dataAccess from './$dataAccess';

const getInt = (cell) => intValue(getTextTrim(cell));

function formatData(row) {
  return {
    player: { level: 0, name: getTextTrim(row.cells[0]) },
    stats: [3, 4, 5, 6, 7, 9, 1, 2, 8].map((i) => getInt(row.cells[i])),
  };
}

function parseReport(doc) {
  if (!doc) return { s: false };
  const advisorTable = querySelector('#pCC table table', doc);
  const advisorRows = arrayFrom(advisorTable.rows).slice(1, -1);
  const advisorData = advisorRows.map(formatData);
  return { r: advisorData, s: true };
}

// Incomplete
async function viewAdvisor(period) {
  return parseReport(
    await indexAjaxDoc({
      cmd: 'guild',
      subcmd: 'advisor',
      subcmd2: 'view',
      period,
    }),
  );
}

export default function daAdvisor(period) {
  return $dataAccess(advisorView, viewAdvisor, period);
}
