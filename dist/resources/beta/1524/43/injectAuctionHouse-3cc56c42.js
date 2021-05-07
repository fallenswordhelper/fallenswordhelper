import{a as e}from"./allthen-0f84efe6.js"
import{y as t,p as a,z as n,aa as s,o as i,I as r,R as o,aw as c,u as l}from"./calfSystem-1d588248.js"
import{c as f}from"./createSpan-256b26cd.js"
import{d as m}from"./doStatTotal-60aece13.js"
import{g as d}from"./getArrayByClassName-8fef58fe.js"
import{i as u}from"./insertElementAfterBegin-38e30afe.js"
import"./all-0d44a747.js"
import"./insertElementBefore-23d4e956.js"
function p(){o(n("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function g(){const t=d("auctionCancel",n("resultRows"))
if(0===t.length)return
const a=t.map(h)
e(a,p)}function j(){!t()&&a&&(!function(){const e=n("fill")
if(!e)return
const t=f({className:"smallLink",textContent:"Cancel All"}),a=e.parentNode.parentNode.nextElementSibling.children[0]
a.classList.add("fshCenter"),s(a,"]"),u(a,t),s(a,"["),i(t,g)}(),r("autoFillMinBidPrice")&&o(n("auto-fill")),m())}export default j
//# sourceMappingURL=injectAuctionHouse-3cc56c42.js.map
