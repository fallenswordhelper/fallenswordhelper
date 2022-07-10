import './injectStoreItems.css';
import jQueryNotPresent from '../../../common/jQueryNotPresent';
import onclick from '../../../common/onclick';
import doStatTotal from '../../../profile/doStatTotal';
import { getPcc } from '../../../support/layout';
import getValue from '../../../system/getValue';
import buttonPress from './buttonPress';
import { prefTypes } from './constants';
import doToggleButtons from './doToggleButtons';
import getCheckboxes from './getCheckboxes';
import updateDomItems from './updateDomItems';

export default function injectStoreItems() {
  if (jQueryNotPresent()) { return; }
  const checkboxes = getCheckboxes();
  if (!checkboxes) { return; }
  const prefs = prefTypes.map((p) => getValue(p));
  doStatTotal();
  doToggleButtons(prefs);
  if (prefs.some((v) => v)) {
    updateDomItems(prefs);
  }
  onclick(getPcc(), buttonPress);
}
