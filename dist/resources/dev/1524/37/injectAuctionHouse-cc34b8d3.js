import{a as e}from"./allthen-e710674d.js"
import{y as t,p as a,z as n,ab as s,o as i,I as o,S as r,an as c,u as l}from"./calfSystem-5d0c721b.js"
import{c as d}from"./createSpan-6854a1c4.js"
import{d as m}from"./doStatTotal-ef38bd0b.js"
import{g as f}from"./getArrayByClassName-b9fdeb7c.js"
import{i as p}from"./insertElementAfterBegin-57f0e737.js"
import"./all-d206e4b9.js"
import"./insertElementBefore-656c48d5.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function g(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,b)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-cc34b8d3.js.map
