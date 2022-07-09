import arrayFrom from '../../common/arrayFrom';
import chunk from '../../common/chunk';
import createDocument from '../../system/createDocument';
import dataRows from '../../common/dataRows';
import { getNow } from '../../support/now';
import getTextTrim from '../../common/getTextTrim';
import indexAjaxData from '../../ajax/indexAjaxData';
import { months } from '../../support/constants';
import querySelector from '../../common/querySelector';

function parseDateAsTimestamp(textDate) {
  const dateAry = textDate.split(/[: /[]/);
  return new Date(
    Number(dateAry[4]),
    months.indexOf(dateAry[3]),
    Number(dateAry[2]),
    Number(dateAry[0]),
    Number(dateAry[1]),
  );
}

function calcCd(e) {
  const cdText = getTextTrim(e[1]);
  if (cdText === 'No active cooldown') { return 0; }
  return Math.ceil(
    (parseDateAsTimestamp(cdText.slice(16)) - getNow()) / 1000,
  );
}

function creature(e) {
  const [mobImg] = e[0].cells[0].children;
  return {
    base_id: Number(mobImg.src.split('/').slice(-1)[0].slice(0, -36)),
    name: mobImg.title,
  };
}

function common(e) {
  return {
    cooldown: calcCd(e),
    creature: creature(e),
    kills: Number(getTextTrim(e[0].cells[3])),
  };
}

function location(e) {
  const loc = getTextTrim(e[0].cells[1]);
  if (loc !== 'n/a') {
    const kills = getTextTrim(e[0].cells[2]).split('/');
    return {
      realm: loc,
      current_hp: Number(kills[0]),
      max_hp: Number(kills[1]),
    };
  }
}

function contributors(e) {
  const contribs = e[2].cells[0].children;
  if (contribs.length === 1) {
    const thisRows = dataRows(contribs[0], 3, 0);
    return {
      contributors: thisRows.map((r) => ({
        kills: Number(getTextTrim(r.cells[1])),
        player: { name: getTextTrim(r.cells[0]) },
      })),
    };
  }
}

function testTitan(e) {
  return { ...common(e), ...location(e), ...contributors(e) };
}

function parseReport(html) {
  const doc = createDocument(html);
  const titanTable = querySelector('table[width="500"]', doc);
  if (!titanTable) { return { s: false }; }
  const thisRows = arrayFrom(titanTable.rows)
    .filter((e, i, a) => i !== 0 && i < a.length - 1 && (i - 1) % 6 < 3);
  const titans = chunk(3, thisRows);
  return { r: titans.map(testTitan), s: true };
}

// Incomplete
export default function scouttower() {
  return indexAjaxData({ cmd: 'guild', subcmd: 'scouttower' }).then(parseReport);
}
