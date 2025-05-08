import getElementById from '../common/getElementById';
import getUrlParameter from '../system/getUrlParameter';

function tickBuff(id) {
  const thisBuff = getElementById(`skill-${id}`);
  if (thisBuff) {
    thisBuff.checked = true;
  }
}

function tickBuffs(passThru) {
  passThru.split(';').forEach(tickBuff);
}

export default function passThruBuffs() {
  const passThru = getUrlParameter('blist');
  if (passThru) { tickBuffs(passThru); }
}
