import calf from '../../support/calf';
import createDiv from '../../common/cElement/createDiv';
import { getPcl } from '../../support/layout';
import insertElement from '../../common/insertElement';

let bountyListDiv = 0;
let wantedListDiv = 0;

export const getBountyListDiv = () => bountyListDiv;
export const getWantedListDiv = () => wantedListDiv;

function createMiniBox() {
  return createDiv({ className: 'minibox' });
}

export function createDivs() {
  if (calf.enableActiveBountyList) {
    bountyListDiv = createMiniBox();
    insertElement(getPcl(), bountyListDiv);
  }
  if (calf.enableWantedList) {
    wantedListDiv = createMiniBox();
    insertElement(getPcl(), wantedListDiv);
  }
}
