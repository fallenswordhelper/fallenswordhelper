import{a as e}from"./allthen-a8900f54.js"
import{y as t,p as a,z as n,ab as s,o as i,I as o,S as r,an as c,u as l}from"./calfSystem-eeb1d862.js"
import{c as d}from"./createSpan-c8cd4d0e.js"
import{d as m}from"./doStatTotal-677e42df.js"
import{g as f}from"./getArrayByClassName-23419047.js"
import{i as p}from"./insertElementAfterBegin-f3c5ddc0.js"
import"./all-778b38b7.js"
import"./insertElementBefore-42a90ba9.js"
function u(){r(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=f("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,u)}function j(){!t()&&a&&(!function(){const e=d({className:"smallLink",textContent:"Cancel All"}),t=n("fill").parentNode.parentNode.nextElementSibling.children[0]
t.classList.add("fshCenter"),s(t,"]"),p(t,e),s(t,"["),i(e,g)}(),o("autoFillMinBidPrice")&&r(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-6d88791a.js.map
