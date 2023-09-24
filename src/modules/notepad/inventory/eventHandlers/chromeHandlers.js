import getElementById from '../../../common/getElementById';
import onclick from '../../../common/onclick';

export default function chromeHandlers(fshInv, evtHdl, evt) { // jQuery
  $(`#${fshInv.id}_length select`).on('change', evtHdl('dataTables_length'));
  $(`#${fshInv.id}_filter input`).on('keyup', evtHdl('dataTables_filter'));
  // something is preventing jQuery bubbling
  onclick(getElementById(`${fshInv.id}_paginate`), (e) => {
    if (e.target.classList.contains('paginate_button')) evt('paginate_button');
  });
}
