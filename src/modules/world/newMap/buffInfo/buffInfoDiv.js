import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import insertElementAfter from '../../../common/insertElementAfter';
import toggleForce from '../../../common/toggleForce';
import calf from '../../../support/calf';

let containerDiv = 0;

function value(e) { return e; }

function wantsBuffInfo(ary) {
  return calf.showBuffInfo && ary.some(value);
}

function drawBuffInfo() {
  if (containerDiv) {
    toggleForce(containerDiv, false);
  } else {
    containerDiv = createDiv({
      className: 'fshActionBox',
      innerHTML: '<div></div><div></div><div></div><div></div><div></div>',
    });
    const actCont = getElementById('actionContainer');
    insertElementAfter(containerDiv, actCont.children[2]);
  }
  return containerDiv;
}

function hideBuffInfo() {
  if (containerDiv) {
    toggleForce(containerDiv, true);
  }
}

export default function buffInfoDiv(ary) {
  if (wantsBuffInfo(ary)) {
    return drawBuffInfo();
  }
  hideBuffInfo();
}
