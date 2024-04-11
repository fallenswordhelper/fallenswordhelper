import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import createLi from '../../common/cElement/createLi';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import insertElementAfter from '../../common/insertElementAfter';
import isFunction from '../../common/isFunction';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import sendException from '../../exceptions/sendException';
import jQueryDialog from '../jQueryDialog/jQueryDialog';

function openDialog(text, fn) {
  sendEvent('accordion', text);
  if ([
    'Buff Log',
    'Combat Logs',
    'Creature Logs',
    'Quick Links',
    'Recipe Manager',
    'New Guild Log',
  ].includes(text)) fn();
  else jQueryDialog(fn);
}

function insertAfterParent(target, listItem) {
  const tgt = getElementById(target);
  if (tgt instanceof Node) {
    const parent = tgt.parentNode;
    insertElementAfter(listItem, parent);
  } else { sendException(`#${target} is not a Node`); }
}

export default function anchorButton(navLvl, text, fn, target) {
  const li = createLi({ className: `nav-level-${navLvl}` });
  const al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text,
  });
  insertElement(li, al);
  insertAfterParent(target, li);
  if (isFunction(fn)) {
    onclick(al, partial(openDialog, text, fn));
  } else {
    al.href = fn;
    onclick(al, () => sendEvent('accordion', text));
  }
}
