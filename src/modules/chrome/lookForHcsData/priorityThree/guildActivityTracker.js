import { defEnableGuildActivityTracker } from '../../../support/constants';
import getValue from '../../../system/getValue';
import jQueryPresent from '../../../common/jQueryPresent';
import runDefault from '../../../common/runDefault';

export default function guildActivityTracker() {
  if (jQueryPresent() && getValue(defEnableGuildActivityTracker)) {
    runDefault(import('./guildActivity'));
  }
}
