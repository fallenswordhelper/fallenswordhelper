import indexAjaxData from '../../ajax/indexAjaxData';

export default function arenaPickMove(moveId, slotId) {
  const newMoveId = moveId === 0 ? 'x' : moveId - 1;
  return indexAjaxData({
    cmd: 'arena',
    subcmd: 'dopickmove',
    move_id: newMoveId,
    slot_id: slotId,
  });
}
