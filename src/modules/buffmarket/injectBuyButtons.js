import BuyButton from './BuyButton.svelte';
import querySelectorArray from '../common/querySelectorArray';
import setInnerHtml from '../dom/setInnerHtml';

export default function injectBuyButtons() {
  const re = /id=([0-9]+)/;
  querySelectorArray('input[type=button][value=Buy]').map((input) => {
    const td = input.parentNode;
    td.style.height = '23px';
    const packageId = td.innerHTML.match(re)[1];
    setInnerHtml('', td);

    return new BuyButton({
      target: td,
      props: { packageId },
    });
  });
}
