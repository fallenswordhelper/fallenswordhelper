import calf from '../../support/calf';
import createDiv from '../../common/cElement/createDiv';
import insertElement from '../../common/insertElement';
import { pCL } from '../../support/layout';

export let bountyListDiv;
export let wantedListDiv;

function createMiniBox() {
  return createDiv({ className: 'minibox' });
}

export function createDivs() {
  if (calf.enableActiveBountyList) {
    bountyListDiv = createMiniBox();
    insertElement(pCL, bountyListDiv);
  }
  if (calf.enableWantedList) {
    wantedListDiv = createMiniBox();
    insertElement(pCL, wantedListDiv);
  }
}
