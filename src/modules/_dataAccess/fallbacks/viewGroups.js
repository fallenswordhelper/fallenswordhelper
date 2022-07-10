import indexAjaxData from '../../ajax/indexAjaxData';
import closestTr from '../../common/closestTr';
import querySelectorArray from '../../common/querySelectorArray';
import trim from '../../common/trim';
import createDocument from '../../system/createDocument';
import getCustomUrlParameter from '../../system/getCustomUrlParameter';

const viewGrp = (doc) => querySelectorArray('#pCC img[src$="/icon_action_view.png"]', doc);
const getGroupId = (i) => Number(getCustomUrlParameter(i.parentElement.href, 'group_id'));
const getLead = (i) => closestTr(i).cells[0].children[0].textContent;
const toArray = (list) => list.split(',').map(trim).filter(Boolean);
const memberList = (i) => closestTr(i).cells[1].firstChild.textContent;
const remainingMembers = (i) => toArray(memberList(i)).map((name) => ({ name }));
const getMembers = (i) => [{ name: getLead(i) }, ...remainingMembers(i)];
const formatGrp = (i) => ({ id: getGroupId(i), members: getMembers(i) });
const getResults = (doc) => viewGrp(doc).map(formatGrp);

function parseReport(html) {
  const doc = createDocument(html);
  return { r: getResults(doc), s: true };
}

// Incomplete
export default async function viewGroups() {
  const html = await indexAjaxData({ cmd: 'guild', subcmd: 'groups' });
  return parseReport(html);
}
