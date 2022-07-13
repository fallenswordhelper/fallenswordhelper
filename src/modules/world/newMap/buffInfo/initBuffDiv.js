import createSpan from '../../../common/cElement/createSpan';
import insertElement from '../../../common/insertElement';
import insertTextBeforeEnd from '../../../common/insertTextBeforeEnd';
import setText from '../../../dom/setText';

export default function initBuffDiv(buffDiv, className, prefix, suffix) {
  // eslint-disable-next-line no-param-reassign
  if (className) buffDiv.className = className;
  setText(prefix, buffDiv);
  const buffSpan = createSpan();
  insertElement(buffDiv, buffSpan);
  insertTextBeforeEnd(buffDiv, suffix);
}
