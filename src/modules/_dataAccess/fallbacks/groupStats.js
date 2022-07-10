import groupViewStats from '../../ajax/groupViewStats';
import indexAjaxData from '../../ajax/indexAjaxData';
import createDocument from '../../system/createDocument';

function parseReport(html) {
  const doc = createDocument(html);
  const stats = groupViewStats(doc);
  return {
    r: {
      attributes: [
        { value: stats.attack },
        { value: stats.defense },
        { value: stats.armor },
        { value: stats.damage },
        { value: stats.hp },
      ],
    },
  };
}

// Incomplete
export default function groupStats(groupId) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'groups',
    subcmd2: 'viewstats',
    group_id: groupId,
  }).then(parseReport);
}
