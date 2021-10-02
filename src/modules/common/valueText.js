import getTextTrim from './getTextTrim';

export default function valueText(collection) {
  if (collection && collection.length) {
    return getTextTrim(collection[0].nextElementSibling);
  }
}
