import{a as t}from"./allthen-259c1952.js"
import{x as e,p as a,y as n,a8 as s,o as i,H as o,Q as r,ak as c,u as l}from"./calfSystem-c91a5c89.js"
import{c as f}from"./createSpan-1ad5cfdb.js"
import{d as m}from"./doStatTotal-424f589d.js"
import{g as d}from"./getArrayByClassName-23f3f49c.js"
import{i as p}from"./insertElementAfterBegin-602fd288.js"
import"./all-978030c9.js"
import"./insertElementBefore-0a7f2602.js"
function u(){r(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,u)}function j(){!e()&&a&&(!function(){const t=f({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-4b1b150b.js.map
