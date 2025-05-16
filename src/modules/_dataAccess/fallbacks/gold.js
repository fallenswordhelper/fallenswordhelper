import querySelector from '../../common/querySelector';
import getText from '../../common/getText';

export default function gold(doc) {
  return { k: 0, v: getText(querySelector('#statbar-gold', doc)) };
};
