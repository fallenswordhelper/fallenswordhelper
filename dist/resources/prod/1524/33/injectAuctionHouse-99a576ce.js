import{a as t}from"./allthen-259c1952.js"
import{x as e,p as a,y as n,a8 as s,o as i,H as o,Q as r,ai as c,u as l}from"./calfSystem-0708a9bb.js"
import{c as m}from"./createSpan-3083d966.js"
import{d}from"./doStatTotal-16d23c05.js"
import{g as f}from"./getArrayByClassName-a297542c.js"
import{i as p}from"./insertElementAfterBegin-20400e4d.js"
import"./all-978030c9.js"
import"./insertElementBefore-0a7f2602.js"
function u(){r(n("refresh"))}function h(t){const e=t.parentNode.parentNode.children[0].children[0]
return t.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(e.dataset.tipped)[1]})}function g(){const e=f("auctionCancel",n("resultRows"))
if(0===e.length)return
const a=e.map(h)
t(a,u)}function j(){!e()&&a&&(!function(){const t=m({className:"smallLink",textContent:"Cancel All"}),e=n("fill").parentNode.parentNode.nextElementSibling.children[0]
e.classList.add("fshCenter"),s(e,"]"),p(e,t),s(e,"["),i(t,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-99a576ce.js.map
