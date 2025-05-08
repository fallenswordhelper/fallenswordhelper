import bountyPage from './bountyPage';
import getElementById from '../../common/getElementById';
import querySelector from '../../common/querySelector';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import calf from '../../support/calf';
import createDocument from '../../system/createDocument';
import findTarget from './findTarget';
import { injectBountyList } from './injectBountyList';
import { injectWantedList } from './injectWantedList';
import { getActiveBountyList, getActiveBountyListPosted } from './lists';

let curPage = 0;
let maxPage = 0;

function getWantedBountyList(doc) {
  const page = querySelector('#pCC input[name="page"]', doc);
  if (!page) {
    return;
  }
  curPage = Number(page.value);
  maxPage = Number(
    regExpFirstCapture(/of&nbsp;(?<of>\d*)/, page.parentNode.innerHTML),
  );
  const activeTable = getElementById('bounty-info', doc).parentNode.parentNode
    .nextElementSibling.children[0].children[0];
  if (activeTable) {
    findTarget(activeTable);
  }
}

function hazActiveBountyList(doc) {
  if (calf.enableActiveBountyList && !getActiveBountyListPosted()) {
    getActiveBountyList(doc);
    injectBountyList();
  }
}

export default async function parseBountyPageForWorld(details) {
  const doc = createDocument(details);
  hazActiveBountyList(doc);
  if (calf.enableWantedList) {
    getWantedBountyList(doc);
    if (curPage < maxPage) {
      const bountyList = await bountyPage(curPage + 1);
      parseBountyPageForWorld(bountyList);
    } else {
      injectWantedList();
    }
  }
}
