import{a as t}from"./allthen-b65a93f3.js"
import{y as e,p as a,z as n,ab as s,o as i,I as o,S as r,aw as c,u as l}from"./calfSystem-b31aba65.js"
import{c as m}from"./createSpan-1160b622.js"
import{d as f}from"./doStatTotal-b22ced68.js"
import{g as d}from"./getArrayByClassName-17a8a2fa.js"
import{i as p}from"./insertElementAfterBegin-1439c9a9.js"
import"./all-2b32eb82.js"
import"./insertElementBefore-68b894c4.js"
function u(){r(n("refresh"))}function b(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function h(){const e=d("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(b)
t(a,u)}function g(){!e()&&a&&(!function(){const t=m({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,h)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-88cb8efe.js.map
