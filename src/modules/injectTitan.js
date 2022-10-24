import insertHtmlBeforeEnd from './common/insertHtmlBeforeEnd';
import { scouttowerUrl } from './support/constants';
import { pcc } from './support/layout';

export default function injectTitan() {
  insertHtmlBeforeEnd(
    pcc().children[0].rows[2].cells[0],
    `<div class="fshBold fshCenter">[ <a href="${scouttowerUrl}">Scout Tower</a> ]</div>`,
  );
}
