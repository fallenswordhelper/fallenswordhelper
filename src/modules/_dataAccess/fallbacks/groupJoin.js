import all from '../../common/all';
import indexAjaxData from '../../ajax/indexAjaxData';

function joinGroup(grpId) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'groups',
    subcmd2: 'join',
    group_id: grpId,
  });
}

export default function groupJoin(group) {
  return all(group.map(joinGroup));
}
