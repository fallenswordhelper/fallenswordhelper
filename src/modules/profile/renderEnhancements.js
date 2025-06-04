import cElement from '../common/cElement/cElement';
import createSpan from '../common/cElement/createSpan';
import createTable from '../common/cElement/createTable';
import setTipped from '../common/setTipped';
import querySelector from '../common/querySelector';
import isString from '../common/isString';
import insertElement from '../common/insertElement';
import { cdn } from '../system/system';

function turducken(...elements) {
  return elements.reduce((outer, inner) => {
    if(isString(inner)) {
      const element = cElement(inner);
      return insertElement(outer, element);
    }
    return insertElement(outer, inner);
  });
}

function enhancementLabelTd(enhancement) {
  const labelSpan = createSpan({
    className: 'tip-static',
    innerText: enhancement.name,
  });
  labelSpan.style.cssText = `
    color: #000;
    text-wrap: nowrap;
    cursor: pointer;
    text-decoration: underline;
  `;
  setTipped(
    `<center><b>${enhancement.name}</b></center><br>${enhancement.tooltip}`,
    labelSpan,
  );
  const labelTd = cElement('td');
  labelTd.append(labelSpan, ':');
  return labelTd;
}

function enhancementValueBarTd(enhancement) {
  const table = createTable({ className: 'tip-static' });
  table.style.cssText = `
    border: 1px solid #333;
    border-spacing: 0px;
    width: 162px;
  `;
  setTipped(
    `<center>Skill Level<br>${enhancement.value}%</center>`,
    table,
  );
  const barColor = enhancement.value > 100 ? 'blue' : 'purple';
  const img = cElement('img', {
    src: `${cdn}ui/misc/progress_${barColor}.png`,
    height: 10,
    width: Math.min(160, 160 * enhancement.value / 100),
  });

  const outerTd = cElement('td', { align: 'right' });
  turducken(outerTd, table, 'tbody', 'tr', 'td', img);
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
