import closestTable from '../common/closestTable';
import getId from '../common/getId';
import getTextTrim from '../common/getTextTrim';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import intValue from '../system/intValue';
import Bazaar from './Bazaar.svelte';

function startApp(potions, target) {
  return new Bazaar({
    target: target.parentElement,
    props: { potions },
  });
}

export default function bazaar() {
  const origPots = querySelectorArray('a[href*="cmd=buyitem"]');
  const potTable = closestTable(closestTable(origPots[0]).parentElement);
  const potions = origPots.map((p) => ({
    id: Number(getId(p)),
    img: p.children[0].src,
    fetch: p.firstChild.dataset.tipped,
    price: intValue(getTextTrim(
      querySelector('img[src*="/currency/"]', closestTable(p).parentElement)
        .parentElement
        .previousElementSibling,
    )),
    count: 1,
    promise: Promise.resolve(),
  }));

  startApp(potions, potTable);
  potTable.remove();
}
