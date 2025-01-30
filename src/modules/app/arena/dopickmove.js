import arena from './arena';

export default function dopickmove(moveId, slotId) {
  return arena({
    subcmd: 'dopickmove',
    move_id: moveId,
    slot_id: slotId,
  });
}
