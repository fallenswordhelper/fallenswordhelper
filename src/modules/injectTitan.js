import insertHtmlBeforeEnd from './common/insertHtmlBeforeEnd';
import { scouttowerUrl } from './support/constants';
import { pcc } from './support/layout';

export default function injectTitan() {
  const titanTable = pcc().children[0];
  let newRow = titanTable.insertRow(2);
  insertHtmlBeforeEnd(newRow, '<br>');
  newRow = titanTable.insertRow(3);
  insertHtmlBeforeEnd(
    newRow,
    `<td class="fshCenter fshBold">[ <a href="${scouttowerUrl}">Scout Tower</a> ]</td>`,
  );
}
