import jQueryPresent from '../../../common/jQueryPresent';
import runDefault from '../../../common/runDefault';
import { defEnableGuildActivityTracker } from '../../../support/constants';
import getValue from '../../../system/getValue';

export default function guildActivityTracker() {
  if (jQueryPresent() && getValue(defEnableGuildActivityTracker)) {
    runDefault(import('./guildActivity'));
  }
}
