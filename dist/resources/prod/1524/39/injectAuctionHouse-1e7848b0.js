import{a as t}from"./allthen-b65a93f3.js"
import{y as e,p as a,z as n,aa as s,o as i,I as o,R as r,at as c,u as l}from"./calfSystem-fe534823.js"
import{c as m}from"./createSpan-9895a3a7.js"
import{d as f}from"./doStatTotal-444189bc.js"
import{g as d}from"./getArrayByClassName-ab8b7067.js"
import{i as p}from"./insertElementAfterBegin-ff7e04b7.js"
import"./all-2b32eb82.js"
import"./insertElementBefore-68b894c4.js"
function u(){r(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,u)}function g(){!e()&&a&&(!function(){const t=m({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-1e7848b0.js.map
