import indexAjaxData from '../ajax/indexAjaxData';
import appUseCombatSet from '../app/profile/usecombatset';
import $dataAccess from './$dataAccess';
import htmlResult from './fallbacks/htmlResult';

async function useCombatSet(combatSetId) {
  const html = await indexAjaxData({
    cmd: 'profile',
    subcmd: 'managecombatset',
    submit: 'Use',
    combatSetId,
  });
  return htmlResult(html);
}

export default function daUseCombatSet(combatSetId) {
  return $dataAccess(appUseCombatSet, useCombatSet, combatSetId);
}
