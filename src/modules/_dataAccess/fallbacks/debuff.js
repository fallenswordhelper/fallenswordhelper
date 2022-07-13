import aGenericFallback from './aGenericFallback';

export default function debuff(buffId) {
  return aGenericFallback({
    cmd: 'profile',
    subcmd: 'removeskill',
    skill_id: buffId,
  }, 'Skill de-activated successfully.');
}
