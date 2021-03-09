import { x as jQueryNotPresent } from './calfSystem-d1de1997.js';

function injectNotepad() { // jQuery
  if (jQueryNotPresent()) { return; }
  $('#notepad_notes')
    .attr('cols', '90')
    .attr('rows', '30')
    .css('resize', 'none');
}

export default injectNotepad;
//# sourceMappingURL=injectNotepad-88ccd160.js.map
