import sendEvent from '../../analytics/sendEvent';
import querySelector from '../../common/querySelector';

function sectionClosed(id) {
  return id !== -1
    && querySelector(`#nav li.nav-level-0:nth-child(${id + 1}) ul`)
      .offsetHeight === 0;
}

let signalSent = false;

function validateId(id) {
  if (sectionClosed(id)) {
    if (!signalSent) {
      sendEvent('accordion', 'collapse');
      signalSent = true;
    }
    return -1;
  }
  return id;
}

export default function navMenu(myNav) {
  const oldSave = myNav._saveState;
  // eslint-disable-next-line no-param-reassign
  myNav._saveState = function _saveState(id) {
    oldSave.call(myNav, validateId(id));
  };
}
