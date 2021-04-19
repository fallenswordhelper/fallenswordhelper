import { a as addLogColoring } from './addLogColoring-341a007c.js';
import { T as getUrlParameter } from './calfSystem-d5c49dc8.js';
import './createStyle-868451d5.js';
import './dataRows-08660e1c.js';
import './doBuffLinkClick-14e52b6a.js';
import './openQuickBuffByName-cf6100f7.js';
import './fshOpen-bc09bf81.js';
import './parseDateAsTimestamp-03130772.js';

function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

export default privateMsg;
//# sourceMappingURL=privateMsg-3117f23b.js.map
