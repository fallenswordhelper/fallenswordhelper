import{a as e}from"./allthen-b65a93f3.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,av as c,u as l}from"./calfSystem-26fbeaeb.js"
import{c as m}from"./createSpan-2c557b8b.js"
import{d as f}from"./doStatTotal-e1ab27c9.js"
import{g as d}from"./getArrayByClassName-ccc42006.js"
import{i as p}from"./insertElementAfterBegin-959856fa.js"
import"./all-2b32eb82.js"
import"./insertElementBefore-68b894c4.js"
function u(){r(n("refresh"))}function b(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function h(){const t=d("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(b)
e(a,u)}function g(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,h)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),f())}export default g
//# sourceMappingURL=injectAuctionHouse-4ab3d75d.js.map
