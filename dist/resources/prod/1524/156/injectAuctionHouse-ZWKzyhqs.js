import{V as a,$ as t,af as s,h as n,a0 as e,g as i,Y as c,a3 as r,p as l,j as o,aQ as u,cx as f,o as d,aA as m,bi as h,s as p,aB as g,bj as j,a$ as y}from"./calfSystem-79LsojAC.js"
import{i as w}from"./insertHtmlAfterBegin-BEWmbMGu.js"
import{d as A}from"./doStatTotal-tBEj9xvS.js"
import{r as b}from"./relatePlayer-B8EeiZCZ.js"
import"./getMembrList-ClmDoIN3.js"
function x(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function B(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function C(){const a=n(c,i("resultRows")).filter(a=>!a.href.endsWith("=null"))
if(!a.length)return
const t=await(async a=>(await e(a.map(b))).filter(([,a])=>a))(a)
t.length&&t.forEach(([a,t])=>{a.classList.add(L[t])})}function H(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${j}ui/misc/spinner.gif" width="14" height="14">`,n=y(s.dataset.tipped,"inv_id"),t(x,B,n)
var n}async function S(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(H)),h(i("refresh")))}function v(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),w(a,"]"),f(a,t),w(a,"["),d(t,S)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),A(),async function(){await C(),$(document).ajaxSuccess((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&C()})}())}export{v as default}
//# sourceMappingURL=injectAuctionHouse-ZWKzyhqs.js.map
