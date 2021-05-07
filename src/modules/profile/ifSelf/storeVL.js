import asInt from '../../chrome/calcs/asInt';
import getElementById from '../../common/getElement';
import getText from '../../common/getText';
import setValue from '../../system/setValue';
import {
  defCharacterVirtualLevel,
  defStatLevel,
  defStatVl,
} from '../../support/constants';

const sameAsLevel = (virtualLevel) => asInt(defStatLevel) === virtualLevel;

export default function storeVL() {
  // store the VL of the player
  const virtualLevel = Number(getText(getElementById(defStatVl)));
  if (sameAsLevel(virtualLevel)) {
    setValue(defCharacterVirtualLevel, ''); // ?
  } else {
    setValue(defCharacterVirtualLevel, virtualLevel);
  }
}
