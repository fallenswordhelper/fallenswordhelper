import{U as a,$ as t,ae as s,h as n,_ as e,g as i,X as c,a2 as r,p as l,j as o,aP as u,cu as f,o as d,az as m,bh as h,s as p,aA as g,bi as j,a_ as y}from"./calfSystem-CT1aM4VG.js"
import{i as w}from"./insertHtmlAfterBegin-DfEq9-0f.js"
import{d as b}from"./doStatTotal--TaVGr_k.js"
import{r as A}from"./relatePlayer-BP_NoLF9.js"
import"./getMembrList-Ctbnv9ny.js"
function x(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function L(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const _=()=>n(c,i("resultRows")).filter((a=>!a.href.endsWith("=null"))),C=async a=>(await e(a.map(A))).filter((([,a])=>a)),H={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function S(){const a=_()
if(!a.length)return
const t=await C(a)
t.length&&t.forEach((([a,t])=>{a.classList.add(H[t])}))}function v(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${j}ui/misc/spinner.gif" width="14" height="14">`,n=y(s.dataset.tipped,"inv_id"),t(x,L,n)
var n}async function B(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(v)),h(i("refresh")))}function E(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),w(a,"]"),f(a,t),w(a,"["),d(t,B)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),b(),async function(){await S(),$(document).ajaxSuccess(((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&S()}))}())}export{E as default}
//# sourceMappingURL=injectAuctionHouse-DuiaWaHy.js.map
