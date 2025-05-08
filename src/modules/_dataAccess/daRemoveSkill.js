import removeskill from '../app/profile/removeskill';
import $dataAccess from './$dataAccess';
import aGenericFallback from './fallbacks/aGenericFallback';

function debuff(buffId) {
  return aGenericFallback(
    {
      cmd: 'profile',
      subcmd: 'removeskill',
      skill_id: buffId,
    },
    'Skill de-activated successfully.',
  );
}

export default function daRemoveSkill(buffId) {
  return $dataAccess(removeskill, debuff, buffId);
}
