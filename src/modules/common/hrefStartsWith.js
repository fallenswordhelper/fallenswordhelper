import hrefWithoutFst from './hrefWithoutFst';

export default function hrefStartsWith(prefix) {
  return (anchor) => hrefWithoutFst(anchor).startsWith(prefix);
}
