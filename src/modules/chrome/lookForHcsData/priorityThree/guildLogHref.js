import getValue from '../../../system/getValue';
import runDefault from '../../../common/runDefault';

export default function guildLogHref() {
  if (getValue('useNewGuildLog')) {
    runDefault(import('../../useNewGuildLog'));
  }
}
