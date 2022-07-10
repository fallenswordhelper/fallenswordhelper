import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callAllyEnemy() {
  if (calf.enableAllyOnlineList
      || calf.enableEnemyOnlineList) {
    runDefault(import('../../allyEnemy/allyEnemy'));
  }
}
