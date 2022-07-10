import { lvlTest, playerLvlTest } from '../../common/lvlTests';
import numberIsNaN from '../../common/numberIsNaN';
import partial from '../../common/partial';
import fallback from '../../system/fallback';
import getValue from '../../system/getValue';
import intValue from '../../system/intValue';
import setValue from '../../system/setValue';

function getVal(el, context) {
  return parseInt($(el, context).val(), 10);
}

function saveVal(key, val) {
  if (!numberIsNaN(val)) { setValue(key, val); }
}

function dataTableSearch(context, _settings, data) { // jQuery
  const min = getVal('#fshMinLvl', context);
  const max = getVal('#fshMaxLvl', context);
  saveVal('onlinePlayerMinLvl', min);
  saveVal('onlinePlayerMaxLvl', max);
  const level = fallback(intValue(data[2]), 0);
  return lvlTest(playerLvlTest, level, min, max);
}

export default function filterHeaderOnlinePlayers(context) { // jQuery
  $.fn.dataTable.ext.search.push(partial(dataTableSearch, context));
  $('#fshOutput', context).html(
    `<div align=right>Min lvl:<input value="${
      getValue('onlinePlayerMinLvl')}" class="fshNumberInput" type="number" id="fshMinLvl" /> `
    + `Max lvl:<input value="${
      getValue('onlinePlayerMaxLvl')}" class="fshNumberInput" type="number" id="fshMaxLvl" /> `
    + '<input id="fshReset" type="button" value="Reset"/>'
    + '</div><table id="fshInv" class="allow stripe hover"></table>',
  );
}
