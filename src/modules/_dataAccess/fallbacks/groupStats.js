import groupViewStats from '../../ajax/groupViewStats';
import indexAjaxDoc from '../../ajax/indexAjaxDoc';

function parseReport(doc) {
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
export default async function groupStats(groupId) {
  return parseReport(await indexAjaxDoc({
    cmd: 'guild',
    subcmd: 'groups',
    subcmd2: 'viewstats',
    group_id: groupId,
  }));
}
