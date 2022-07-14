import jQueryNotPresent from '../../common/jQueryNotPresent';
import partial from '../../common/partial';
import getValue from '../../system/getValue';
import addAttackLink from './addAttackLink';
import addIgnoreLinks from './addIgnoreLinks';
import addPvPSummary from './addPvPSummary';
import changeLabels from './changeLabels';
import colorPlayers from './colorPlayers';
import getLastTable from './getLastTable';
import processLadder from './processLadder';

const conditionalArray = [
  ['addIgnoreLink', addIgnoreLinks],
  ['colorPlayerNames', colorPlayers],
  ['addAttackLinkToLog', addAttackLink],
  ['changeButtonLabels', changeLabels],
  ['trackLadderReset', processLadder],
  ['showPvPSummaryInLog', addPvPSummary],
];

function processConditionals(logTable, privMsg, [pref, fn]) {
  if (getValue(pref)) {
    fn(logTable, privMsg);
  }
}

function foundLogTable(logTable, privMsg) {
  conditionalArray.forEach(partial(processConditionals, logTable, privMsg));
}

export default function addLogWidgets(privMsg) {
  if (jQueryNotPresent()) { return; }
  const logTable = getLastTable();
  if (logTable) { foundLogTable(logTable, privMsg); }
}
