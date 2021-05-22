import{a as t}from"./allthen-c5cfa8a4.js"
import{y as e,p as a,z as n,a9 as s,o as i,I as r,Q as o,av as c,u as l}from"./calfSystem-6ad077b7.js"
import{c as m}from"./createSpan-b08aa35e.js"
import{d}from"./doStatTotal-0d5f4ea7.js"
import{g as f}from"./getArrayByClassName-a6fe264a.js"
import{i as u}from"./insertElementAfterBegin-28d006b9.js"
import"./all-8d04560c.js"
import"./insertElementBefore-7c440c87.js"
function p(){o(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=f("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,p)}function j(){!e()&&a&&(!function(){const t=n("fill")
if(!t)return
const e=m({className:"smallLink",textContent:"Cancel All"}),a=t.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,e),s(a,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-c3a91ded.js.map
