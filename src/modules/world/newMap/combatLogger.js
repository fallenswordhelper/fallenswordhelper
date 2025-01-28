import fromEntries from '../../common/fromEntries';
import { defPvE } from '../../support/constants';
import getValue from '../../system/getValue';
import { combatLogAdd } from '../../system/idbLogger';

function processCombatResponse(data) {
  combatLogAdd({
    combat: data.response.data,
    player: {
      buffs: fromEntries(
        data.player.buffs
          // only need to keep CA and Doubler 54 = ca, 26 = doubler
          .filter(({ id }) => [26, 54].includes(id))
          .map(({ id, level }) => [id, level]),
      ),
    },
    time: data.time,
  });
}

function combatResponse(_e, data) {
  // If bad response do nothing.
  if (data.response.response === 0) processCombatResponse(data);
}

export default async function combatLogger() {
  if (getValue('keepLogs')) $.subscribe(defPvE, combatResponse);
}
