import { n as numberIsNaN } from './numberIsNaN-c7db67d0.js';

function round(number, precision) {
  let factor = 10 ** precision;
  if (numberIsNaN(factor)) { factor = 1; }
  return Math.round(number * factor) / factor;
}

function roundToString(number, precision) {
  return round(number, precision).toString();
}

export { round as a, roundToString as r };
//# sourceMappingURL=roundToString-0b0f4906.js.map
