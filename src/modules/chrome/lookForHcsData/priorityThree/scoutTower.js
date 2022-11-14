import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function scoutTower() {
  if (getValue('addScoutTowerLink')) runDefault(import('../../scoutTowerLink'));
}
