import{a as t}from"./allthen-34d3fc07.js"
import{y as e,p as a,z as n,aa as s,o as i,I as r,R as o,az as c,u as l}from"./calfSystem-d3f0a380.js"
import{c as f}from"./createSpan-6440fa04.js"
import{d as m}from"./doStatTotal-af8f07c1.js"
import{g as d}from"./getArrayByClassName-aab7cb65.js"
import{i as u}from"./insertElementAfterBegin-7b87afd6.js"
import"./all-3768003b.js"
import"./insertElementBefore-c2bb9234.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function g(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,b)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-9a03f588.js.map
