import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function statbar() {
  if (getValue('statBarLinks')) {
    runDefault(import('../../statBar'));
  }
}
