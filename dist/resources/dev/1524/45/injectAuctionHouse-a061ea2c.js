import{a as t}from"./allthen-b379c12a.js"
import{y as e,p as a,z as n,aa as s,o as i,I as r,R as o,az as c,u as l}from"./calfSystem-6a3c85e0.js"
import{c as m}from"./createSpan-a6b61f47.js"
import{d as f}from"./doStatTotal-dc259649.js"
import{g as d}from"./getArrayByClassName-039bb6c6.js"
import{i as u}from"./insertElementAfterBegin-808a95bf.js"
import"./all-47be5400.js"
import"./insertElementBefore-c442a2a7.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function g(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=m({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,b)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-a061ea2c.js.map
