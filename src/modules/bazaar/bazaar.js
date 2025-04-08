import { mount } from 'svelte';
import closestTable from '../common/closestTable';
import getId from '../common/getId';
import getTextTrim from '../common/getTextTrim';
import jQueryNotPresent from '../common/jQueryNotPresent';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import { pcc } from '../support/layout';
import intValue from '../system/intValue';
import Bazaar from './Bazaar.svelte';

const getCcy = (p) => ({
  p,
  ccy: querySelector(
    'img[src*="/currency/"]',
    closestTable(p).nextElementSibling,
  ),
});

const preparePotions = ({ p, ccy }) => ({
  id: Number(getId(p)),
  img: p.children[0].src,
  fetch: p.firstChild.dataset.tipped,
  price: intValue(getTextTrim(ccy.parentElement.previousElementSibling)),
  count: 1,
  promise: Promise.resolve(),
});

function havePots(origPots) {
  const withCcy = origPots.map(getCcy);
  if (withCcy.some(({ ccy }) => !ccy)) return;
  const potions = withCcy.map(preparePotions);
  mount(Bazaar, { target: pcc(), props: { potions } });
  closestTable(closestTable(origPots[0]).parentElement).remove();
}

export default function bazaar() {
  if (!pcc() || jQueryNotPresent()) return;
  const origPots = querySelectorArray(
    'a[href*="&subcmd=buyitem&"][onclick]',
    pcc(),
  );
  if (origPots.length) havePots(origPots);
}
