import runDefault from '../../../common/runDefault';
import getValue from '../../../system/getValue';

export default function joinAll() {
  if (getValue('joinAllLink')) {
    runDefault(import('../../notification/injectJoinAllLink'));
  }
}
