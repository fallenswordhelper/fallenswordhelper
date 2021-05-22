import{a as t}from"./allthen-c5cfa8a4.js"
import{y as e,p as a,z as n,aa as s,o as i,I as r,R as o,ay as c,u as l}from"./calfSystem-f7cf24f6.js"
import{c as f}from"./createSpan-0636b0fd.js"
import{d}from"./doStatTotal-df5d1ab9.js"
import{g as m}from"./getArrayByClassName-f4491c81.js"
import{i as u}from"./insertElementAfterBegin-b6d22612.js"
import"./all-8d04560c.js"
import"./insertElementBefore-7c440c87.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=m("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=f({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-583b140d.js.map
