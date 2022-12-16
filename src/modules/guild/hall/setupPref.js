import './setupPref.css';
import createDiv from '../../common/cElement/createDiv';
import insertElement from '../../common/insertElement';
import { simpleCheckboxHtml } from '../../settings/simpleCheckbox';

export default function setupPref(prefName, injector) {
  const flDiv = createDiv({
    className: 'fshPref',
    innerHTML: simpleCheckboxHtml(prefName),
  });
  injector.classList.add('fshRelative');
  insertElement(injector, flDiv);
}
