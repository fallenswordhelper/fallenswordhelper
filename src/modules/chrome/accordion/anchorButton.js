import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import createLi from '../../common/cElement/createLi';
import getElementById from '../../common/getElementById';
import insertElement from '../../common/insertElement';
import insertElementAfter from '../../common/insertElementAfter';
import isFunction from '../../common/isFunction';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import jQueryDialog from '../jQueryDialog/jQueryDialog';

const modals = [
  'Buff Log',
  'Combat Logs',
  'Creature Logs',
  'Quick Links',
  'Recipe Manager',
  'New Guild Log',
];

function openDialog(text, fn) {
  sendEvent('accordion', text);
  if (modals.includes(text)) {
    fn();
  } else {
    jQueryDialog(fn);
  }
}

function buildAnchor(navLvl, text, tgt) {
  const li = createLi({ className: `nav-level-${navLvl}` });
  const al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text,
  });
  insertElement(li, al);
  insertElementAfter(li, tgt.parentNode);
  return al;
}

function injectAnchor(navLvl, text, fn, tgt) {
  const al = buildAnchor(navLvl, text, tgt);
  if (isFunction(fn)) {
    onclick(al, partial(openDialog, text, fn));
  } else {
    al.href = fn;
    onclick(al, () => sendEvent('accordion', text));
  }
}

export default function anchorButton(navLvl, text, fn, target) {
  const tgt = getElementById(target);
  if (tgt instanceof Node) injectAnchor(navLvl, text, fn, tgt);
}
