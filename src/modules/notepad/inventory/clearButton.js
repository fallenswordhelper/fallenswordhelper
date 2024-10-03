import partial from '../../common/partial';
import { invEvent } from './eventHandlers/telemetry';

function clearSearch(fshInv, input) {
  invEvent('clearSearch');
  input.val('');
  $(fshInv).DataTable().search('').draw();
}

export default function clearButton(fshInv) {
  // jQuery
  const input = $(`#${fshInv.id}_filter input`);
  input.prop('type', 'text');
  const clear = $('<span>&times;</span>');
  input.wrap($('<span class="text-input-wrapper"/>'));
  input.after(clear);
  clear.on('click', partial(clearSearch, fshInv, input));
}
