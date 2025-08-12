import{W as a,$ as t,ag as s,k as n,a1 as e,g as i,Z as c,a4 as r,p as l,l as o,b2 as u,cy as f,o as d,aB as m,bg as h,s as p,aC as g,bh as y,aY as b}from"./calfSystem-BlPuMQGT.js"
import{i as j}from"./insertHtmlAfterBegin-CRP0nRuH.js"
import{d as w}from"./doStatTotal-B-MyqY5z.js"
import{r as C}from"./relatePlayer-YlJnTDXX.js"
import"./getMembrList-B8VblWQd.js"
function x(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function A(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L=()=>n(c,i("resultRows")).filter((a=>!a.href.endsWith("=null"))),B=async a=>(await e(a.map(C))).filter((([,a])=>a)),H={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function S(){const a=L()
if(!a.length)return
const t=await B(a)
t.length&&t.forEach((([a,t])=>{a.classList.add(H[t])}))}function v(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${y}ui/misc/spinner.gif" width="14" height="14">`,n=b(s.dataset.tipped,"inv_id"),t(x,A,n)
var n}async function M(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(v)),h(i("refresh")))}function N(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),j(a,"]"),f(a,t),j(a,"["),d(t,M)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),w(),async function(){await S(),$(document).ajaxSuccess(((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&S()}))}())}export{N as default}
//# sourceMappingURL=injectAuctionHouse-6_sMIDAU.js.map
