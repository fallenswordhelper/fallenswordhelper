import getText from './getText';

export default function valueText(collection) {
  if (collection?.length) {
    return getText(collection[0].nextElementSibling);
  }
}
