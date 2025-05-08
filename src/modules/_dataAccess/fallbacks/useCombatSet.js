import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

// Incomplete
export default async function useCombatSet(combatSetId) {
  const html = await indexAjaxData({
    cmd: 'profile',
    subcmd: 'managecombatset',
    submit: 'Use',
    combatSetId,
  });
  return htmlResult(html);
}
