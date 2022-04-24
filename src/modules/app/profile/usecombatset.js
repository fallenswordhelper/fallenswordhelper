import profile from './profile';

export default function usecombatset(combatSetId) {
  return profile({
    subcmd: 'usecombatset',
    combatSetId,
  });
}
