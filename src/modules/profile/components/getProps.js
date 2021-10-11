import { itemRE } from '../../support/constants';

export default function getProps(target) {
  const matches = target.dataset.tipped.match(itemRE);
  return [Number(matches[1]), Number(matches[2])];
}
