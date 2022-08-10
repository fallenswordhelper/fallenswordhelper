import buffInfoDiv from './buffInfoDiv';
import doCa from './doCa';
import doDbl from './doDbl';
import doDeathDealer from './doDeathDealer';
import doKs from './doKs';
import getBuff from './getBuff';
import impIconColour from './impIconColour';
import impWarning from './impWarning';
import titanKs from './titanKs';

let dd = 0;
let dbl = 0;
let ca = 0;
let imp = 0;
let titanActive = 0;
let ks = 0;

function initVars() {
  dd = getBuff('Death Dealer');
  dbl = getBuff('Doubler');
  ca = getBuff('Counter Attack');
  imp = getBuff('Summon Shield Imp');
  titanActive = titanKs();
  ks = GameData.player().killStreak;
}

export default function updateBuffInfo() {
  impIconColour();
  initVars();
  const containerDiv = buffInfoDiv([dd, dbl, ca, imp, titanActive]);
  if (containerDiv) {
    impWarning(containerDiv, imp, dd);
    doKs(containerDiv, dd, titanActive, ks);
    doDeathDealer(containerDiv, dd, ks);
    doCa(containerDiv, ca);
    doDbl(containerDiv, dbl);
  }
}
