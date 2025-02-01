import indexAjaxDoc from '../ajax/indexAjaxDoc';
import goldupgrades from '../app/points/goldupgrades';
import parseGoldUpgrades from '../common/parseGoldUpgrades';
import $dataAccess from './$dataAccess';

async function pointsGold() {
  const doc = await indexAjaxDoc({ cmd: 'points', type: 1 });
  return parseGoldUpgrades(doc);
}

export default function daUpgradesGold() {
  return $dataAccess(goldupgrades, pointsGold);
}
