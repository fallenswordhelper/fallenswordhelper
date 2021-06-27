import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callAllyEnemy() {
  if (calf.enableAllyOnlineList
      || calf.enableEnemyOnlineList) {
    runDefault(import('../../allyEnemy/allyEnemy'));
  }
}
