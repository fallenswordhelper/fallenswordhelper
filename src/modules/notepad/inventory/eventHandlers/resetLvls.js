import { defaultOptions } from '../assets';
import { getOptions } from '../options';
import saveOptions from '../saveOptions';

export default function resetLvls(fshInv) { // jQuery
  getOptions().fshMinLvl = defaultOptions.fshMinLvl;
  getOptions().fshMaxLvl = defaultOptions.fshMaxLvl;
  saveOptions(getOptions());
  $('#fshMinLvl').val(getOptions().fshMinLvl);
  $('#fshMaxLvl').val(getOptions().fshMaxLvl);
  $(fshInv).DataTable().draw(false);
}
