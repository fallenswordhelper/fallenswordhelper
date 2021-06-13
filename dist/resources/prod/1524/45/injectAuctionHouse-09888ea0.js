import{a as e}from"./allthen-b379c12a.js"
import{y as t,p as a,z as n,a9 as s,o as i,I as r,Q as o,aw as c,u as l}from"./calfSystem-e1e858cd.js"
import{c as d}from"./createSpan-b6d1f34b.js"
import{d as m}from"./doStatTotal-dbe867ed.js"
import{g as f}from"./getArrayByClassName-2d2ea79b.js"
import{i as u}from"./insertElementAfterBegin-4f7e454a.js"
import"./all-47be5400.js"
import"./insertElementBefore-c442a2a7.js"
function p(){o(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,p)}function g(){!t()&&a&&(!function(){const e=n("fill")
if(!e)return
const t=d({className:"smallLink",textContent:"Cancel All"}),a=e.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,t),s(a,"["),i(t,b)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-09888ea0.js.map
