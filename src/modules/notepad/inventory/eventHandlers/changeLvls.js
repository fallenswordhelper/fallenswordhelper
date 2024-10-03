import changeMinMax from '../../../common/changeMinMax';
import partial from '../../../common/partial';
import { getOptions } from '../options';
import saveOptions from '../saveOptions';
import { headerEvent } from './telemetry';

function newOpts(newMin, newMax) {
  getOptions().fshMinLvl = newMin;
  getOptions().fshMaxLvl = newMax;
  saveOptions(getOptions());
}

function redrawTable(fshInv) {
  $(fshInv).DataTable().draw(false);
}

export default function changeLvls(fshInv) {
  // jQuery
  headerEvent('changeLvls');
  changeMinMax(newOpts, partial(redrawTable, fshInv));
}
