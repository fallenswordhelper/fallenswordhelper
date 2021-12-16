import $dataAccess from './$dataAccess';
import updateBlockedSkills from './fallbacks/updateBlockedSkills';

export default function daBuffMarketBuy(skills) {
  return $dataAccess(updateBlockedSkills, updateBlockedSkills, skills);
}
