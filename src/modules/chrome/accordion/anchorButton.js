import createAnchor from '../../common/cElement/createAnchor';
import createLi from '../../common/cElement/createLi';
import insertAfterParent from './insertAfterParent';
import insertElement from '../../common/insertElement';
import insertElementAfter from '../../common/insertElementAfter';
import jQueryDialog from '../jQueryDialog/jQueryDialog';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import sendEvent from '../../analytics/sendEvent';

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
