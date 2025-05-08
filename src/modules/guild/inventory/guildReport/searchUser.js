import batch from '../../../common/batch';
import contains from '../../../common/contains';
import containsText from '../../../common/containsText';
import querySelectorAll from '../../../common/querySelectorAll';
import querySelectorArray from '../../../common/querySelectorArray';
import getUrlParameter from '../../../system/getUrlParameter';

let findUser = 0;
let foundUser = 0;

function hideOther(el) {
  if (el.children[0].hasAttribute('bgcolor')) {
    foundUser = containsText(findUser, el.children[0].children[0]);
  }
  if (!foundUser) {
    // eslint-disable-next-line no-param-reassign
    el.className = 'fshHide';
  }
}

export default function searchUser() {
  findUser = getUrlParameter('user');
  if (!findUser) { return; }
  const userNodes = querySelectorArray(
    '#pCC table table td[bgcolor="#DAA534"] b',
  );
  const userNode = userNodes.some(contains(findUser));
  if (!userNode) { return; }
  const nodeList = querySelectorAll('#pCC table table tr');
  batch([2, nodeList, 0, hideOther]);
}
