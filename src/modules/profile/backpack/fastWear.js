import './fastWear.css';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import task from '../../support/task';
import fastEvent from './fastEvent';
import fastWearLinks from './fastWearLinks';
import getBackpack from './getBackpack';
import monkeyBp from './monkeyBp';
import restyleBackpack from './restyleBackpack';

function foundBackpack(theBackpack) {
  restyleBackpack();
  monkeyBp(theBackpack, fastWearLinks);
  if (getText(getElementById('backpack_current')).length !== 0) {
    task(3, fastWearLinks, [theBackpack]);
  }
  onclick(getElementById('backpackContainer'), partial(fastEvent, theBackpack));
}

export default function fastWear() {
  const theBackpack = getBackpack();
  if (theBackpack) { foundBackpack(theBackpack); }
}
