import insertHtmlBeforeEnd from './common/insertHtmlBeforeEnd';
import { pCC } from './support/layout';
import { scouttowerUrl } from './support/constants';

export default function injectTitan() {
  const titanTable = pCC.children[0];
  let newRow = titanTable.insertRow(2);
  insertHtmlBeforeEnd(newRow, '<br>');
  newRow = titanTable.insertRow(3);
  insertHtmlBeforeEnd(
    newRow,
    `<td class="fshCenter fshBold">[ <a href="${scouttowerUrl}">Scout Tower</a> ]</td>`,
  );
}
