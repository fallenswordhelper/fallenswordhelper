import getText from './getText';
import isString from './isString';
import trim from './trim';

export default function getTextTrim(node) {
  const text = getText(node);
  if (isString(text)) {
    return trim(text);
  }
}
