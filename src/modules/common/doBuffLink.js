import insertHtmlBeforeEnd from './insertHtmlBeforeEnd';

export default function doBuffLink(playerLink) {
  insertHtmlBeforeEnd(playerLink.parentNode, ' <button class="fshBl fshBls">[b]</button>');
}
