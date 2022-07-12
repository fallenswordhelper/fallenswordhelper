import createTBody from '../../common/cElement/createTBody';
import createTr from '../../common/cElement/createTr';
import { playerIdUrl } from '../../support/constants';

function rowHtml(obj) {
  return `<td>${obj.slot}</td>`
    + `<td><a href="${playerIdUrl}${obj.id}">${obj.name}</a></td>`
    + `<td>${obj.level}</td>`
    + `<td>${obj.rank_name}</td>`
    + `<td>${obj.gxp}</td>`
    + `<td>${obj.activity}</td>`
    + `<td>${obj.pack}</td>`
    + `<td>${obj.stam}</td>`;
}

function rowFactory(aRow) {
  if (!aRow.dom) {
    // eslint-disable-next-line no-param-reassign
    aRow.dom = createTr(
      { innerHTML: rowHtml(aRow) },
    );
  }
  return aRow.dom;
}

export default function displayChange(domTable, _table, displayed) {
  const domTBody = domTable.tBodies[0];
  const thisTBody = createTBody();
  for (const r of displayed) {
    thisTBody.appendChild(rowFactory(r.value));
  }
  domTable.replaceChild(thisTBody, domTBody);
}
