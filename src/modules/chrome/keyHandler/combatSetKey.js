import daViewCombatSet from '../../_dataAccess/daViewCombatSet';
import navigateTo from '../../common/navigateTo';
import { defSubcmd, profileUrl } from '../../support/constants';
import expandMenu from './expandMenu';
import keyHandlerEvent from './keyHandlerEvent';

const jsonTests = [
  (json) => json?.s,
  (json, itemIndex) => json.r?.length > itemIndex,
];

const goodData = (itemIndex, json) => jsonTests.every((fn) => fn(json, itemIndex));

export default async function combatSetKey(itemIndex) {
  const json = await daViewCombatSet();
  if (goodData(itemIndex, json)) {
    keyHandlerEvent('changeCombatSet');
    const cbsIndex = json.r[itemIndex].id;
    expandMenu('2');
    navigateTo(`${profileUrl + defSubcmd}managecombatset&submit=Use&combatSetId=${cbsIndex}`);
  }
}
