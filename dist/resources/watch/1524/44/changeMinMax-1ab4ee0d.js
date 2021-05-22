import { n as numberIsNaN } from './numberIsNaN-11f99b26.js';

function getIntVal(selector) {
  return parseInt($(selector).val(), 10);
}

function changeMinMax(newOpts, redraw) {
  const minLvl = getIntVal('#fshMinLvl');
  const maxLvl = getIntVal('#fshMaxLvl');
  if (numberIsNaN(minLvl) || numberIsNaN(maxLvl)) { return; }
  newOpts(minLvl, maxLvl);
  redraw();
}

export { changeMinMax as c };
//# sourceMappingURL=changeMinMax-1ab4ee0d.js.map
