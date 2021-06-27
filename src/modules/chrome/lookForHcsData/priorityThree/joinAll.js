import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function joinAll() {
  if (getValue('joinAllLink')) {
    runDefault(import('../../notification/injectJoinAllLink'));
  }
}
