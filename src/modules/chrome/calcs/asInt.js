import getElementsByClassName from '../../common/getElementsByClassName';
import intValue from '../../system/intValue';
import valueText from '../../common/valueText';

export default function asInt(className) {
  return intValue(valueText(getElementsByClassName(className)));
}
