import contains from '../../common/contains';
import querySelectorArray from '../../common/querySelectorArray';
import setInnerHtml from '../../dom/setInnerHtml';
import { cmdUrl } from '../../support/constants';

function toSettings(el) {
  setInnerHtml(`<a href="${cmdUrl}settings">Game Help</a>`, el);
}

export default function gameHelpLink() {
  querySelectorArray('#pCR h3').filter(contains('Game Help'))
    .forEach(toSettings);
}
