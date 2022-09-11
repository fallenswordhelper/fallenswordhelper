import closestTable from '../common/closestTable';
import querySelectorArray from '../common/querySelectorArray';
import intValue from '../system/intValue';
import Bazaar from './Bazaar.svelte';

function startApp(potions, target) {
  return new Bazaar({
    target: target.parentElement,
    anchor: target,
    props: { potions },
  });
}

export default function bazaar() {
  const origPots = querySelectorArray('a[href*="cmd=buyitem"]');
  const potTable = origPots[0].closest('table')
    .parentElement
    .parentElement
    .parentElement
    .parentElement;
  const potions = origPots.map((p) => ({
    id: p.href.substr(Number(p.href.search(/\d+$/))),
    img: p.firstChild.src,
    fetch: p.firstChild.dataset.tipped,
    price: intValue(closestTable(p).parentNode
      .querySelector('img[oldtitle=Gold]')
      .closest('table').querySelector('td').textContent),
  }));

  startApp(potions, potTable);
  potTable.remove();
}
