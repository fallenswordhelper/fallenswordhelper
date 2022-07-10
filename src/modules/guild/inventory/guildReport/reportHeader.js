import batch from '../../../common/batch';
import closestTd from '../../../common/closestTd';
import getText from '../../../common/getText';
import onlineDot from '../../../common/onlineDot';
import querySelectorAll from '../../../common/querySelectorAll';
import setInnerHtml from '../../../dom/setInnerHtml';
import calf from '../../../support/calf';
import { playerIdUrl } from '../../../support/constants';

function memberHeader(oldhtml) {
  return `${onlineDot({ last_login: calf.membrList[oldhtml].last_login })
  }<a href="${playerIdUrl}${calf.membrList[oldhtml].id
  }">${oldhtml}</a> [ <span class="a-reply fshLink" target_player=${
    oldhtml}>m</span> ]`;
}

function updateMemberHeader(el) {
  const oldhtml = getText(el);
  if (calf.membrList[oldhtml]) {
    setInnerHtml(memberHeader(oldhtml), el);
  }
  setInnerHtml(
    '<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',
    closestTd(el).nextElementSibling,
  );
}

export default function reportHeader() {
  const headers = querySelectorAll('#pCC table table '
    + 'tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b');
  batch([3, headers, 0, updateMemberHeader]);
}
