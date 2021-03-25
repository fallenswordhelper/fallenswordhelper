import { f as fshOpen } from './fshOpen-6a6a1b65.js';
import { M as quickbuffUrl } from './calfSystem-c08399e5.js';

function openQuickBuffByName(aPlayerName, buffList) {
  let passthru = '';
  if (buffList) { passthru = `&blist=${buffList}`; }
  fshOpen(`${quickbuffUrl}&players=${aPlayerName}${passthru}`,
    'fsQuickBuff', 618, 1000, ',scrollbars');
}

export { openQuickBuffByName as o };
//# sourceMappingURL=openQuickBuffByName-2ba6a39d.js.map
