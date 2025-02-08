import{a,$ as t,K as s,l as n,v as e,g as i,m as c,y as r,p as l,ak as o,aF as u,ct as f,o as d,aq as m,b7 as h,s as p,ar as g,b8 as y,aQ as j}from"./calfSystem-BldO1y8X.js"
import{i as w}from"./insertHtmlAfterBegin-Bsjm51tM.js"
import{d as b}from"./doStatTotal-B7XAt0we.js"
import{r as x}from"./relatePlayer-BeFP1UEi.js"
import"./getMembrList-CBcI_RNr.js"
function A(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function H(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L=()=>n(c,i("resultRows")).filter((a=>!a.href.endsWith("=null"))),v=async a=>(await e(a.map(x))).filter((([,a])=>a)),C={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function S(){const a=L()
if(!a.length)return
const t=await v(a)
t.length&&t.forEach((([a,t])=>{a.classList.add(C[t])}))}function B(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${y}ui/misc/spinner.gif" width="14" height="14">`,n=j(s.dataset.tipped,"inv_id"),t(A,H,n)
var n}async function E(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(B)),h(i("refresh")))}function F(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),w(a,"]"),f(a,t),w(a,"["),d(t,E)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),b(),async function(){await S(),$(document).ajaxSuccess(((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&S()}))}())}export{F as default}
//# sourceMappingURL=injectAuctionHouse-BbufPGkW.js.map
