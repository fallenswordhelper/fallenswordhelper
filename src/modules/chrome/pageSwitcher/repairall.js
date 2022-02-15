import getUrlParameter from '../../system/getUrlParameter';
import injectWorld from '../../world/injectWorld';

export default function repairall() {
  if (getUrlParameter('fromworld')) injectWorld();
}
