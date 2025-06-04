import cElement from '../common/cElement/cElement';
import createSpan from '../common/cElement/createSpan';
import createTable from '../common/cElement/createTable';
import setTipped from '../common/setTipped';
import querySelector from '../common/querySelector';

function enhancementLabelTd(enhancement) {
  const labelSpan = createSpan({
    className: 'tip-static',
    innerText: enhancement.name,
  });
  labelSpan.style.cssText = `
    color: #333;
    text-wrap: nowrap;
    cursor: pointer;
    text-decoration: underline;
  `;
  setTipped(
    `<center><b>${enhancement.name}</b></center><br>${enhancement.tooltip}`,
    labelSpan,
  );
  const labelTd = cElement('td', { colspan: 2 });
  labelTd.append(labelSpan, ':');
  return labelTd;
}

function enhancementValueBarTd(enhancement) {
  const table = createTable({ className: 'tip-static' });
  table.style.cssText = `
    border: 1px solid #333;
    border-spacing: 0px;
    width: 162px;
    height: 12px;
  `;
  setTipped(
    `<center>Skill Level<br>${enhancement.value}%</center>`,
    table,
  );
  const tbody = cElement('tbody');
  const tr = cElement('tr');
  const td = cElement('td', { align: 'left' });
  const src = enhancement.value > 100
    ? 'https://cdn2.fallensword.com/ui/misc/progress_blue.png'
    : 'https://cdn2.fallensword.com/ui/misc/progress_purple.png';
  const img = cElement('img', {
    src,
    height: 10,
    width: Math.min(160, 160 * enhancement.value / 100),
  });

  const outerTd = cElement('td', { colspan: 2, align: 'right' });
  [table, tbody, tr, td, img].reduce(
    (prev, e) => {
      prev.append(e);
      return e;
    },
    outerTd,
  );
  return outerTd;
}

function enhancementTr(enhancement) {
  const tr = cElement('tr');
  tr.append(
    enhancementLabelTd(enhancement),
    enhancementValueBarTd(enhancement),
  );
  return tr;
}

export default function renderEnhancements(enhancements) {
  querySelector('#profileLeftColumn > div:nth-child(11) > table:nth-child(1) tbody')
    .replaceChildren(...enhancements.map(enhancementTr));
}
