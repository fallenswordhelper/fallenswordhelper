import{a as t}from"./allthen-c5cfa8a4.js"
import{y as e,p as a,z as n,a9 as s,o as i,I as r,Q as o,ax as c,u as l}from"./calfSystem-a8d582b6.js"
import{c as f}from"./createSpan-f56cc9ef.js"
import{d as m}from"./doStatTotal-11c05b30.js"
import{g as d}from"./getArrayByClassName-fd115cb0.js"
import{i as u}from"./insertElementAfterBegin-f2f74df6.js"
import"./all-8d04560c.js"
import"./insertElementBefore-7c440c87.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-df793416.js.map
