import htmlResult from './htmlResult';
import indexAjaxData from '../../ajax/indexAjaxData';

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
