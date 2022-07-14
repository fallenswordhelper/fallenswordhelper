import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import closestTr from '../../common/closestTr';
import querySelectorArray from '../../common/querySelectorArray';
import trim from '../../common/trim';
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
const parseReport = (doc) => ({ r: getResults(doc), s: true });

// Incomplete
export default async function viewGroups() {
  return parseReport(await indexAjaxDoc({ cmd: 'guild', subcmd: 'groups' }));
}
