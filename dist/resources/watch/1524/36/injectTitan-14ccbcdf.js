import { f as insertHtmlBeforeEnd, W as scouttowerUrl, p as pCC } from './calfSystem-c08399e5.js';

function injectTitan() {
  const titanTable = pCC.children[0];
  let newRow = titanTable.insertRow(2);
  insertHtmlBeforeEnd(newRow, '<br>');
  newRow = titanTable.insertRow(3);
  insertHtmlBeforeEnd(newRow,
    `<td class="fshCenter fshBold">[ <a href="${
      scouttowerUrl}">Scout Tower</a> ]</td>`);
}

export default injectTitan;
//# sourceMappingURL=injectTitan-14ccbcdf.js.map
