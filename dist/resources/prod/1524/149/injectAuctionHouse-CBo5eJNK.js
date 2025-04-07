import{a,$ as t,M as s,n,x as e,g as i,t as c,A as r,p as o,ai as l,aF as u,cr as f,o as d,ao as m,b7 as h,s as p,ap as g,b8 as w,aQ as y}from"./calfSystem-BGW9cdWN.js"
import{i as j}from"./insertHtmlAfterBegin-DtSVBFQz.js"
import{d as x}from"./doStatTotal-BqmXubRh.js"
import{r as b}from"./relatePlayer-C0yYYoMm.js"
import"./getMembrList-CKfpQ-Zy.js"
function A(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function L(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const C=()=>n(c,i("resultRows")).filter((a=>!a.href.endsWith("=null"))),H=async a=>(await e(a.map(b))).filter((([,a])=>a)),M={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function S(){const a=C()
if(!a.length)return
const t=await H(a)
t.length&&t.forEach((([a,t])=>{a.classList.add(M[t])}))}function v(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${w}ui/misc/spinner.gif" width="14" height="14">`,n=y(s.dataset.tipped,"inv_id"),t(A,L,n)
var n}async function B(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(v)),h(i("refresh")))}function N(){!r()&&o()&&(function(){const a=l(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),j(a,"]"),f(a,t),j(a,"["),d(t,B)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),x(),async function(){await S(),$(document).ajaxSuccess(((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&S()}))}())}export{N as default}
//# sourceMappingURL=injectAuctionHouse-CBo5eJNK.js.map
