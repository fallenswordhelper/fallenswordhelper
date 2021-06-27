import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function statbar() {
  if (getValue('statBarLinks')) {
    runDefault(import('../../statBar'));
  }
}
