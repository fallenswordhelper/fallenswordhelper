import { getOptions } from './options';

export default function setLvls() { // jQuery
  $('#fshMinLvl').val(getOptions().fshMinLvl);
  $('#fshMaxLvl').val(getOptions().fshMaxLvl);
}
