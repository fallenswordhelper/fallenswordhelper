import querySelector from '../../../../common/querySelector';
import getText from '../../../../common/getText';
import { hDataPlayerFields } from '../../../../support/constants';
import intValue from '../../../../system/intValue';

export default function gold(doc) {
  return { k: hDataPlayerFields.gold, v: intValue(getText(querySelector('#statbar-gold', doc))) };
};
