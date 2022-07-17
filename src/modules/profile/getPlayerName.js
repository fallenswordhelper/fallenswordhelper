import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import { pcc } from '../support/layout';

let playerName = 0;

export default function getPlayerName() {
  if (!playerName) {
    playerName = getText(getElementsByTagName('h1', pcc())[0]);
  }
  return playerName;
}
