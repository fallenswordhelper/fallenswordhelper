import { f as fshOpen } from './fshOpen-d0a5bbc1.js';
import { L as quickbuffUrl } from './calfSystem-02fd040d.js';

function openQuickBuffByName(aPlayerName, buffList) {
  let passthru = '';
  if (buffList) { passthru = `&blist=${buffList}`; }
  fshOpen(`${quickbuffUrl}&players=${aPlayerName}${passthru}`,
    'fsQuickBuff', 618, 1000, ',scrollbars');
}

export { openQuickBuffByName as o };
//# sourceMappingURL=openQuickBuffByName-2e9d4b7d.js.map
