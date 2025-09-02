import{V as a,$ as t,af as s,h as n,a0 as e,g as i,Y as c,a3 as r,p as l,j as o,aR as u,cB as f,o as d,aA as m,bk as h,s as p,aB as g,bl as j,b0 as y}from"./calfSystem-CQOGdqPv.js"
import{i as b}from"./insertHtmlAfterBegin-DTotz0_m.js"
import{d as w}from"./doStatTotal-C5V1waCr.js"
import{r as A}from"./relatePlayer-BS8bzyiv.js"
import"./getMembrList-Zu5hjTzC.js"
function x(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function B(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function C(){const a=n(c,i("resultRows")).filter(a=>!a.href.endsWith("=null"))
if(!a.length)return
const t=await(async a=>(await e(a.map(A))).filter(([,a])=>a))(a)
t.length&&t.forEach(([a,t])=>{a.classList.add(L[t])})}function H(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${j}ui/misc/spinner.gif" width="14" height="14">`,n=y(s.dataset.tipped,"inv_id"),t(x,B,n)
var n}async function R(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(H)),h(i("refresh")))}function S(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),b(a,"]"),f(a,t),b(a,"["),d(t,R)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),w(),async function(){await C(),$(document).ajaxSuccess((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&C()})}())}export{S as default}
//# sourceMappingURL=injectAuctionHouse-BRn0MrvZ.js.map
