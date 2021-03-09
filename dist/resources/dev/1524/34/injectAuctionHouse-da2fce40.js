import{a as e}from"./allthen-9dd15411.js"
import{x as t,p as a,y as n,a9 as s,o as i,H as o,R as r,al as l,u as c}from"./calfSystem-c07e3259.js"
import{c as d}from"./createSpan-9738bb01.js"
import{d as m}from"./doStatTotal-f7d22e98.js"
import{g as f}from"./getArrayByClassName-abf6bba3.js"
import{i as p}from"./insertElementAfterBegin-80b20d28.js"
import"./all-3246a95f.js"
import"./insertElementBefore-9e5d02cd.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,c({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function g(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-da2fce40.js.map
