import { a as addLogColoring } from './addLogColoring-9d467e78.js';
import { T as getUrlParameter } from './calfSystem-476ab75d.js';
import './createStyle-669163ac.js';
import './dataRows-af1deb3a.js';
import './doBuffLinkClick-a77a2af2.js';
import './openQuickBuffByName-6e48651f.js';
import './fshOpen-72d27290.js';
import './parseDateAsTimestamp-b583d4e1.js';

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-ccf5ef69.js.map
