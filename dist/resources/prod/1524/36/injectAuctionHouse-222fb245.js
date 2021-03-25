import{a as t}from"./allthen-a8900f54.js"
import{y as e,p as a,z as n,aa as s,o as i,I as o,R as r,ak as l,u as c}from"./calfSystem-e7bde0c3.js"
import{c as m}from"./createSpan-47082f19.js"
import{d}from"./doStatTotal-bda8a776.js"
import{g as f}from"./getArrayByClassName-7d00a4d5.js"
import{i as p}from"./insertElementAfterBegin-9b535417.js"
import"./all-778b38b7.js"
import"./insertElementBefore-42a90ba9.js"
function u(){r(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${l}ui/misc/spinner.gif" width="14" height="14">`,c({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=f("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,u)}function g(){!e()&&a&&(!function(){const t=m({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default g
//# sourceMappingURL=injectAuctionHouse-222fb245.js.map
