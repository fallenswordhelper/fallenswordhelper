import indexAjaxData from '../ajax/indexAjaxData';
import joinall from '../app/guild/groups/joinall';
import all from '../common/all';
import $dataAccess from './$dataAccess';

function joinGroup(grpId) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'groups',
    subcmd2: 'join',
    group_id: grpId,
  });
}

function groupJoin(group) {
  return all(group.map(joinGroup));
}

export default function daJoinAll(group) {
  return $dataAccess(joinall, groupJoin, group);
}
