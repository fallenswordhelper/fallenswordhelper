import allthen from '../../common/allthen';
import { cdn } from '../../system/system';
import chunk from '../../common/chunk';
import { componentList } from './prepareComponentList';
import daDestroyComponent from '../../_dataAccess/daDestroyComponent';
import deleteVisible from './deleteVisible';
import isArray from '../../common/isArray';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import updateUsedCount from './updateUsedCount';

function doSpinner(td) {
  setInnerHtml('', td);
  // eslint-disable-next-line no-param-reassign
  td.className = 'guildTagSpinner';
  // eslint-disable-next-line no-param-reassign
  td.style.backgroundImage = `url('${cdn}ui/misc/spinner.gif')`;
}

function destroyed(data) {
  console.log('destroyed', data); // eslint-disable-line no-console
  if (data.s && isArray(data.r)) {
    deleteVisible(data.r);
    updateUsedCount(data.r.length);
  }
}

function removeSpinner(td) { td.parentNode.remove(); }

function destroy(el) {
  return daDestroyComponent(el).then(destroyed);
}

export default function delCompType(target) { // jQuery.min
  const toDelete = componentList[target.dataset.compid].del;
  const td = target.parentNode;
  doSpinner(td);
  const prm = chunk(30, toDelete).map(destroy);
  allthen(prm, partial(removeSpinner, td));
}
