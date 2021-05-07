import{a as e}from"./allthen-0f84efe6.js"
import{y as t,p as n,z as a,ab as s,o as i,I as r,S as o,ax as c,u as l}from"./calfSystem-3cb2f93e.js"
import{c as d}from"./createSpan-95e4d2e5.js"
import{d as m}from"./doStatTotal-2c8b26e5.js"
import{g as f}from"./getArrayByClassName-b128b43c.js"
import{i as u}from"./insertElementAfterBegin-1d9bd581.js"
import"./all-0d44a747.js"
import"./insertElementBefore-23d4e956.js"
function p(){o(a("refresh"))}function h(e){const t=e.parentNode.parentNode.children[0].children[0]
return e.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,l({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function b(){const t=f("auctionCancel",a("resultRows"))
if(0===t.length)return
const n=t.map(h)
e(n,p)}function g(){!t()&&n&&(!function(){const e=a("fill")
if(!e)return
const t=d({className:"smallLink",textContent:"Cancel All"}),n=e.parentNode.parentNode.nextElementSibling.children[0]
n.classList.add("fshCenter"),s(n,"]"),u(n,t),s(n,"["),i(t,b)}(),r("autoFillMinBidPrice")&&o(a("auto-fill")),m())}export default g
//# sourceMappingURL=injectAuctionHouse-4f8adb09.js.map
