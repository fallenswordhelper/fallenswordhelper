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

export default function anchorButton(navLvl, text, fn, target) {
  const tgt = getElementById(target);
  if (!(tgt instanceof Node)) return;
  const li = createLi({ className: `nav-level-${navLvl}` });
  const al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text,
  });
  insertElement(li, al);
  insertElementAfter(li, tgt.parentNode);
  if (isFunction(fn)) {
    onclick(al, partial(openDialog, text, fn));
  } else {
    al.href = fn;
    onclick(al, () => sendEvent('accordion', text));
  }
}
