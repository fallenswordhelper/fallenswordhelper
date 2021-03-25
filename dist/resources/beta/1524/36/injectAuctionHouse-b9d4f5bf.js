import{a as t}from"./allthen-a8900f54.js"
import{y as e,p as a,z as n,aa as s,o as i,I as o,R as r,am as c,u as l}from"./calfSystem-4a40365f.js"
import{c as m}from"./createSpan-3ab35394.js"
import{d as f}from"./doStatTotal-9b76c02c.js"
import{g as d}from"./getArrayByClassName-22f3bd68.js"
import{i as p}from"./insertElementAfterBegin-b3eb6927.js"
import"./all-778b38b7.js"
import"./insertElementBefore-42a90ba9.js"
function u(){r(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function b(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,u)}function g(){!e()&&a&&(!function(){const t=m({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-b9d4f5bf.js.map
