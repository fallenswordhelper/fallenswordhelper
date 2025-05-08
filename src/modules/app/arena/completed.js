import arena from './arena';

export default function completed() {
  return arena({
    subcmd: 'completed',
    arena_id: -1,
    latest: false,
    limit: 9999,
  });
}
