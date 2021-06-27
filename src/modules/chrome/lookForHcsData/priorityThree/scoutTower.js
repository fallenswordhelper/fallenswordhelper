import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function scoutTower() {
  if (getValue('addScoutTowerLink')) {
    runDefault(import('../../scoutTowerLink'));
  }
}
