import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import createLi from '../../common/cElement/createLi';
import insertElement from '../../common/insertElement';
import insertElementAfter from '../../common/insertElementAfter';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import insertAfterParent from './insertAfterParent';

function openDialog(text, fn) {
  sendEvent('accordion', text);
  jQueryDialog(fn);
}

function insertAdjElement(parent, listItem) {
  insertElementAfter(listItem, parent);
}

export default function anchorButton(navLvl, text, fn, target) {
  const li = createLi({ className: `nav-level-${navLvl}` });
  const al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text,
  });
  onclick(al, partial(openDialog, text, fn));
  insertElement(li, al);
  insertAfterParent(target, insertAdjElement, li);
}
