import calf from '../../../support/calf';
import {
  defPlayerBuffs,
  defPlayerUpdate,
  defTeleport,
} from '../../../support/constants';
import setValue from '../../../system/setValue';
import buffInfoDiv from './buffInfoDiv';
import doCa from './doCa';
import doDbl from './doDbl';
import doDeathDealer from './doDeathDealer';
import doKs from './doKs';
import getBuff from './getBuff';
import getCooldown from './getCooldown';
import impIconColour from './impIconColour';
import impWarning from './impWarning';
import titanKs from './titanKs';
import { doCountdown, tpCooldown } from './tpCooldown';

let dd = 0;
let dbl = 0;
let ca = 0;
let imp = 0;
let cd = 0;
let titanActive = 0;
let ks = 0;

function initVars() {
  dd = getBuff('Death Dealer');
  dbl = getBuff('Doubler');
  ca = getBuff('Counter Attack');
  imp = getBuff('Summon Shield Imp');
  cd = getCooldown();
  titanActive = titanKs();
  ks = GameData.player().killStreak;
}

function updateBuffInfo() {
  impIconColour();
  initVars();
  const containerDiv = buffInfoDiv([dd, dbl, ca, imp, cd, titanActive]);
  if (containerDiv) {
    impWarning(containerDiv, imp, dd);
    doKs(containerDiv, dd, titanActive, ks);
    doDeathDealer(containerDiv, dd, ks);
    doCa(containerDiv, ca);
    doDbl(containerDiv, dbl);
    tpCooldown(containerDiv, cd);
  }
}

function teleportEvent(_e, data) {
  doCountdown(data.player.teleportCooldown);
}

export function buffInfo() {
  updateBuffInfo();
  $.subscribe(`${defPlayerBuffs} ${defPlayerUpdate}`, updateBuffInfo);
  $.subscribe(defTeleport, teleportEvent);
}

export function toggleBuffInfo() {
  calf.showBuffInfo = !calf.showBuffInfo;
  setValue('showBuffInfo', calf.showBuffInfo);
  updateBuffInfo();
}
