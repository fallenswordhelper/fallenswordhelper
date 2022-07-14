import asInt from '../../chrome/calcs/asInt';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import {
  defCharacterVirtualLevel,
  defStatLevel,
  defStatVl,
} from '../../support/constants';
import setValue from '../../system/setValue';

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
