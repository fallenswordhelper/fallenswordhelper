import daViewCombatSet from '../../_dataAccess/daViewCombatSet';
import navigateTo from '../../common/navigateTo';
import partial from '../../common/partial';
import { defSubcmd, profileUrl } from '../../support/constants';
import expandMenu from './expandMenu';
import keyHandlerEvent from './keyHandlerEvent';

const jsonTests = [
  (itemIndex, json) => json,
  (itemIndex, json) => json.s,
  (itemIndex, json) => json.r,
  (itemIndex, json) => json.r.length > itemIndex,
];

const funcPasses = (itemIndex, json, fn) => fn(itemIndex, json);

const goodData = (itemIndex, json) => jsonTests.every(partial(funcPasses, itemIndex, json));

export default async function combatSetKey(itemIndex) {
  const json = await daViewCombatSet();
  if (goodData(itemIndex, json)) {
    keyHandlerEvent('changeCombatSet');
    const cbsIndex = json.r[itemIndex].id;
    expandMenu('2');
    navigateTo(`${profileUrl + defSubcmd}managecombatset&submit=Use&combatSetId=${cbsIndex}`);
  }
}
