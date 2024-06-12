import arena from './arena';

export default function setCombatMove(moveId, slotId) {
  const newMoveId = moveId === 'x' ? 0 : Number(moveId) + 1;
  return arena({
    subcmd: 'dopickmove',
    move_id: newMoveId,
    slot_id: slotId,
  });
}
