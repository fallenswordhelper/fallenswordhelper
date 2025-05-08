import indexAjaxData from '../ajax/indexAjaxData';
import dopickmove from '../app/arena/dopickmove';
import $dataAccess from './$dataAccess';

function arenaPickMove(moveId, slotId) {
  const newMoveId = moveId === 0 ? 'x' : moveId - 1;
  return indexAjaxData({
    cmd: 'arena',
    subcmd: 'dopickmove',
    move_id: newMoveId,
    slot_id: slotId,
  });
}

export default function daArenaPickMove(moveId, slotId) {
  return $dataAccess(dopickmove, arenaPickMove, moveId, slotId);
}
