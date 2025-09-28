import{V as a,$ as t,ae as s,h as n,a0 as e,g as i,Y as c,a3 as r,p as l,j as o,aQ as u,cA as d,o as f,az as m,bj as h,s as p,aA as g,bk as j,a$ as y}from"./calfSystem-CIuUjh4H.js"
import{i as w}from"./insertHtmlAfterBegin-DCUmpZPb.js"
import{d as A}from"./doStatTotal-CiVM0LYo.js"
import{r as b}from"./relatePlayer-XZTYuRJp.js"
import"./getMembrList-DhTWubx9.js"
function x(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function H(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function C(){const a=n(c,i("resultRows")).filter(a=>!a.href.endsWith("=null"))
if(!a.length)return
const t=await(async a=>(await e(a.map(b))).filter(([,a])=>a))(a)
t.length&&t.forEach(([a,t])=>{a.classList.add(L[t])})}function S(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${j}ui/misc/spinner.gif" width="14" height="14">`,n=y(s.dataset.tipped,"inv_id"),t(x,H,n)
var n}async function v(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(S)),h(i("refresh")))}function B(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),w(a,"]"),d(a,t),w(a,"["),f(t,v)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),A(),async function(){await C(),$(document).ajaxSuccess((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&C()})}())}export{B as default}
//# sourceMappingURL=injectAuctionHouse-D_2x1VFX.js.map
