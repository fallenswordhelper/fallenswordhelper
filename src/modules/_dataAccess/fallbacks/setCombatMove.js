import indexAjaxData from '../../ajax/indexAjaxData';

export default function setCombatMove(moveId, slotId) {
  return indexAjaxData({
    cmd: 'arena',
    subcmd: 'dopickmove',
    move_id: moveId,
    slot_id: slotId,
  });
}
