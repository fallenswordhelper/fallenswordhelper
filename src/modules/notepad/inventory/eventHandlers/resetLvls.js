import { defaultOptions } from '../assets';
import { getOptions } from '../options';
import saveOptions from '../saveOptions';

function updateControls(fshInv) {
  $('#fshMinLvl').val(getOptions().fshMinLvl);
  $('#fshMaxLvl').val(getOptions().fshMaxLvl);
  $(fshInv).DataTable().draw(false);
}

export default function resetLvls(fshInv) { // jQuery
  getOptions().fshMinLvl = defaultOptions.fshMinLvl;
  getOptions().fshMaxLvl = defaultOptions.fshMaxLvl;
  saveOptions(getOptions());
  updateControls(fshInv);
}
