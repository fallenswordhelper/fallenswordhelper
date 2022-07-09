import getElementsByTagName from '../common/getElementsByTagName';
import { getPcc } from '../support/layout';
import getText from '../common/getText';

let playerName = 0;

export default function getPlayerName() {
  if (!playerName) {
    playerName = getText(getElementsByTagName('h1', getPcc())[0]);
  }
  return playerName;
}
