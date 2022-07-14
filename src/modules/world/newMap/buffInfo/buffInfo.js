import {
  defPlayerBuffs,
  defPlayerUpdate,
  defTeleport,
} from '../../../support/constants';
import { doCountdown } from './tpCooldown';
import updateBuffInfo from './updateBuffInfo';

function teleportEvent(_e, data) {
  doCountdown(data.player.teleportCooldown);
}

export default function buffInfo() {
  updateBuffInfo();
  $.subscribe(`${defPlayerBuffs} ${defPlayerUpdate}`, updateBuffInfo);
  $.subscribe(defTeleport, teleportEvent);
}
