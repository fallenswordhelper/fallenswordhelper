import{a as e}from"./allthen-e710674d.js"
import{y as t,p as a,z as n,aa as s,o as i,I as o,R as r,ak as c,u as l}from"./calfSystem-60c20ae9.js"
import{c as m}from"./createSpan-2b0536e4.js"
import{d}from"./doStatTotal-0ecb9853.js"
import{g as f}from"./getArrayByClassName-0e6e45d9.js"
import{i as p}from"./insertElementAfterBegin-9ee6638a.js"
import"./all-d206e4b9.js"
import"./insertElementBefore-656c48d5.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=m({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),d())}export default j
//# sourceMappingURL=injectAuctionHouse-b17ab4ad.js.map
