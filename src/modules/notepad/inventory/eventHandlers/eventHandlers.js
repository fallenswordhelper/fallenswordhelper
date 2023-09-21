import moveItem from '../../../ajax/moveItem';
import getElementById from '../../../common/getElementById';
import onclick from '../../../common/onclick';
import partial from '../../../common/partial';
import allChecks from './allChecks';
import changeLvls from './changeLvls';
import clearChecks from './clearChecks';
import getChecks from './getChecks';
import resetChecks from './resetChecks';
import resetLvls from './resetLvls';
import spanClickHandlers from './spanClickHandlers';
import { invEvent } from './telemetry';

function doMoveItem(e) { // jQuery
  invEvent('doMoveItem');
  const target = $(e.target);
  moveItem([target.data('inv')], target.val());
}

function elClick(fshInv, el) { // jQuery
  $(el[0]).on('click', partial(el[1], fshInv));
}

function elementClickHandlers(fshInv) {
  [
    ['#fshReset', resetLvls],
    ['#fshAll', allChecks],
    ['#fshNone', clearChecks],
    ['#fshDefault', resetChecks],
  ].forEach(partial(elClick, fshInv));
}

const classClick = (type) => () => { invEvent(type); };

function classClickHandlers(fshInv) { // jQuery
  [
    'fshInvItem',
    'fshMaroon',
    'sorting',
  ].forEach((className) => {
    $(fshInv).on('click', `.${className}`, classClick(className));
  });
}

function setupClickHandlers(fshInv) { // jQuery
  elementClickHandlers(fshInv);
  $('table.fshInvFilter').on('click', 'input[type="checkbox"]', partial(getChecks, fshInv));
  spanClickHandlers(fshInv);
  classClickHandlers(fshInv);
}

function chromeHandlers(fshInv) { // jQuery
  $(`#${fshInv.id}_length select`).on('change', classClick('dataTables_length'));
  $(`#${fshInv.id}_filter input`).on('keyup', classClick('dataTables_filter'));
  // something is preventing jQuery bubbling
  onclick(getElementById(`${fshInv.id}_paginate`), (e) => {
    if (e.target.classList.contains('paginate_button')) invEvent('paginate_button');
  });
}

export default function eventHandlers(fshInv) { // jQuery
  $('#fshMinLvl, #fshMaxLvl').on('keyup', partial(changeLvls, fshInv));
  $(fshInv).on('change', 'select.fshMoveItem', doMoveItem);
  setupClickHandlers(fshInv);
  chromeHandlers(fshInv);
}
