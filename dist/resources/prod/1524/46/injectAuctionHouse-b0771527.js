import{a as t}from"./allthen-34d3fc07.js"
import{y as e,p as n,z as a,a9 as s,o as i,I as r,Q as o,aw as c,u as l}from"./calfSystem-7991d843.js"
import{c as d}from"./createSpan-462a14d2.js"
import{d as m}from"./doStatTotal-2b4372d2.js"
import{g as f}from"./getArrayByClassName-7f937df4.js"
import{i as u}from"./insertElementAfterBegin-4cb03648.js"
import"./all-3768003b.js"
import"./insertElementBefore-c2bb9234.js"
function p(){o(a("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=f("auctionCancel",a("resultRows"))
if(0===e.length)return
const n=e.map(h)
t(n,p)}function j(){!e()&&n&&(!function(){const t=a("fill")
if(!t)return
const e=d({className:"smallLink",textContent:"Cancel All"}),n=t.parentNode.parentNode.nextElementSibling.children[0]
n.classList.add("fshCenter"),s(n,"]"),u(n,e),s(n,"["),i(e,g)}(),r("autoFillMinBidPrice")&&o(a("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-b0771527.js.map
