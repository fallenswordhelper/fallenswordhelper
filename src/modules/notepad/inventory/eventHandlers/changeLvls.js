import changeMinMax from '../../../common/changeMinMax';
import { getOptions } from '../options';
import partial from '../../../common/partial';
import saveOptions from '../saveOptions';

function newOpts(newMin, newMax) {
  getOptions().fshMinLvl = newMin;
  getOptions().fshMaxLvl = newMax;
  saveOptions(getOptions());
}

function redrawTable(fshInv) {
  $(fshInv).DataTable().draw(false);
}

export default function changeLvls(fshInv) { // jQuery
  changeMinMax(newOpts, partial(redrawTable, fshInv));
}
