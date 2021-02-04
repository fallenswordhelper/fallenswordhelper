import{a as t}from"./allthen-259c1952.js"
import{x as e,p as a,y as n,a9 as s,o as i,H as o,R as r,al as c,u as l}from"./calfSystem-37f70deb.js"
import{c as d}from"./createSpan-821c0562.js"
import{d as m}from"./doStatTotal-a3b3e660.js"
import{g as f}from"./getArrayByClassName-6d0c056d.js"
import{i as p}from"./insertElementAfterBegin-98d25c7d.js"
import"./all-978030c9.js"
import"./insertElementBefore-0a7f2602.js"
function u(){r(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=f("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,u)}function j(){!e()&&a&&(!function(){const t=d({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-4ab1d7cb.js.map
