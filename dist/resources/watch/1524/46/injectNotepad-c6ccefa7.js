import { y as jQueryNotPresent } from './calfSystem-86663d02.js';

function injectNotepad() { // jQuery
  if (jQueryNotPresent()) { return; }
  $('#notepad_notes')
    .attr('cols', '90')
    .attr('rows', '30')
    .css('resize', 'none');
}

export default injectNotepad;
//# sourceMappingURL=injectNotepad-c6ccefa7.js.map
