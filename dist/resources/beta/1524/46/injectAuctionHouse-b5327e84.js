import{a as t}from"./allthen-34d3fc07.js"
import{y as e,p as n,z as a,a9 as s,o as i,I as r,Q as o,ay as c,u as l}from"./calfSystem-cbf77dd7.js"
import{c as f}from"./createSpan-14225166.js"
import{d as m}from"./doStatTotal-94b8b51b.js"
import{g as d}from"./getArrayByClassName-f5e2f789.js"
import{i as u}from"./insertElementAfterBegin-7e75dc58.js"
import"./all-3768003b.js"
import"./insertElementBefore-c2bb9234.js"
function p(){o(a("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",a("resultRows"))
if(0===e.length)return
const n=e.map(h)
t(n,p)}function g(){!e()&&n&&(!function(){const t=a("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),n=t.parentNode.parentNode.nextElementSibling.children[0]
n.classList.add("fshCenter"),s(n,"]"),u(n,e),s(n,"["),i(e,b)}(),r("autoFillMinBidPrice")&&o(a("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-b5327e84.js.map
