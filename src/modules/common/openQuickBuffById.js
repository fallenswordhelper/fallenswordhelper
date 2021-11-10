import fshOpen from '../chrome/fshOpen';
import { quickbuffUrl } from '../support/constants';

export default function openQuickBuffById(aPlayerId, buffList) {
  let passthru = '';
  if (buffList) { passthru = `&blist=${buffList}`; }
  fshOpen(`${quickbuffUrl}&t=${aPlayerId}${passthru}`,
    'fsQuickBuff', 618, 1000, ',scrollbars');
}
