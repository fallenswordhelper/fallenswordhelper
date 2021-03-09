import{a as e}from"./allthen-9dd15411.js"
import{x as t,p as a,y as n,a8 as s,o as i,H as o,Q as r,ai as c,u as l}from"./calfSystem-793da633.js"
import{c as d}from"./createSpan-2b6fe10e.js"
import{d as m}from"./doStatTotal-7689fdcc.js"
import{g as f}from"./getArrayByClassName-ea5b14c8.js"
import{i as p}from"./insertElementAfterBegin-eac20cdb.js"
import"./all-3246a95f.js"
import"./insertElementBefore-9e5d02cd.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-7f203a95.js.map
