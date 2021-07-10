import './fastWear.css';
import fastEvent from './fastEvent';
import fastWearLinks from './fastWearLinks';
import getBackpack from './getBackpack';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import monkeyBp from './monkeyBp';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import restyleBackpack from './restyleBackpack';
import task from '../../support/task';

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
