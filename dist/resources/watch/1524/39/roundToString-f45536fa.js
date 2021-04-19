import { n as numberIsNaN } from './numberIsNaN-d0e4b349.js';

function round(number, precision) {
  let factor = 10 ** precision;
  if (numberIsNaN(factor)) { factor = 1; }
  return Math.round(number * factor) / factor;
}

function roundToString(number, precision) {
  return round(number, precision).toString();
}

export { round as a, roundToString as r };
//# sourceMappingURL=roundToString-f45536fa.js.map
