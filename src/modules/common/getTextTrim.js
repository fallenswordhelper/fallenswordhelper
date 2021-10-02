import getText from './getText';
import isString from './isString';

export default function getTextTrim(node) {
  const text = getText(node);
  if (isString(text)) {
    return text.trim();
  }
}
