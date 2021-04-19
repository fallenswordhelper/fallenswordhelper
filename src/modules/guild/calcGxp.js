import addCommas from '../system/addCommas';
import closestTr from '../common/closestTr';
import getPlayers from '../common/getPlayers';
import getTextTrim from '../common/getTextTrim';
import intValue from '../system/intValue';
import sum from '../common/sum';

const getGxp = (playerName) => intValue(getTextTrim(closestTr(playerName).cells[4]));

export default function calcGxp() {
  // eslint-disable-next-line no-console
  console.log(addCommas(getPlayers().map(getGxp).reduce(sum, 0)));
}
