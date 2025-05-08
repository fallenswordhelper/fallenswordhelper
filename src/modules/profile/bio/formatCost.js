import partial from '../../common/partial';
import roundToString from '../../common/roundToString';

const costFormatter = [
  [
    (total) => total.fsp > 0,
    (total) => `${roundToString(total.fsp, 2)} FSP`,
  ],
  [
    (total) => total.fsp > 0 && total.k > 0,
    () => ' and ',
  ],
  [
    (total) => total.k > 0,
    (total) => `${total.k} k`,
  ],
  [
    (total) => total.stam > 0 && (total.fsp > 0 || total.k > 0),
    () => ' and ',
  ],
  [
    (total) => total.stam > 0,
    (total) => `${total.stam} Stam(${roundToString(total.stam / 25, 1)}fsp)`,
  ],
  [
    (total) => total.unknown > 0,
    (total) => ` (${total.unknown} buff(s) with unknown cost)`,
  ],
];

function costElement(total, el) {
  if (el[0](total)) {
    return el[1](total);
  }
  return '';
}

export default function formatCost(total) {
  return costFormatter.map(partial(costElement, total)).join('');
}
