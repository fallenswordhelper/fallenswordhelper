import createSpan from '../common/cElement/createSpan';
import on from '../common/on';
import setValue from '../system/setValue';
import { simpleCheckboxHtml } from './simpleCheckbox';

// A labelled checkbox for a pref in simple.json that saves when changed.
export default function prefCheckbox(pref) {
  const wrapper = createSpan({
    className: 'fshNoWrap',
    innerHTML: simpleCheckboxHtml(pref),
  });
  on(wrapper, 'change', (e) => setValue(pref, e.target.checked));
  return wrapper;
}
