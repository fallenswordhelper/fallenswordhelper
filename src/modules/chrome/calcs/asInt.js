import getElementsByClassName from '../../common/getElementsByClassName';
import valueText from '../../common/valueText';
import intValue from '../../system/intValue';

export default function asInt(className) {
  return intValue(valueText(getElementsByClassName(className)));
}
