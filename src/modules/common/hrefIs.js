import hrefWithoutFst from './hrefWithoutFst';

export default function hrefIs(target) {
  return (anchor) => hrefWithoutFst(anchor) === target;
}
