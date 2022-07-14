import hideQTip from '../../../common/hideQTip';
import partial from '../../../common/partial';
import { cdn } from '../../../system/system';

function removeClass(target) {
  target.closest('tr')
    .find('.takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem')
    .removeClass();
}

function clear(td, i) { td.eq(i).empty(); } // jQuery

function clearButtons(td) {
  [
    2, // Where
    12, // BP - GS
    13, // GS - W/U
    14, // W/U - Tag
    15, // Tag - Drop
    16, // ? - Send
  ].forEach(partial(clear, td));
}

function killRow(target, data) { // jQuery
  if (data.r === 1) { return; }
  const tr = target.closest('tr');
  const td = $('td', tr);
  clearButtons(td);
  tr.css('text-decoration', 'line-through');
}

function anotherSpinner(target) { // jQuery
  target.empty().append(`<img src="${cdn
  }ui/misc/spinner.gif" width="11" height="11">`);
}

export default function doAction(fn, target) { // jQuery
  hideQTip(target);
  removeClass(target);
  fn().then(partial(killRow, target));
  anotherSpinner(target);
}
