import{W as a,$ as t,ag as s,k as n,a1 as e,g as i,Z as c,a4 as r,p as l,l as o,aR as u,cA as f,o as d,aB as m,bj as h,s as p,aC as g,bk as j,b0 as y}from"./calfSystem-C1X5YxJZ.js"
import{i as b}from"./insertHtmlAfterBegin-UHwjB-kO.js"
import{d as w}from"./doStatTotal-DtCeT0Ju.js"
import{r as A}from"./relatePlayer-BeHhOt8G.js"
import"./getMembrList-DJNIR1Ub.js"
function C(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function x(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L=()=>n(c,i("resultRows")).filter((a=>!a.href.endsWith("=null"))),B=async a=>(await e(a.map(A))).filter((([,a])=>a)),H={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function R(){const a=L()
if(!a.length)return
const t=await B(a)
t.length&&t.forEach((([a,t])=>{a.classList.add(H[t])}))}function S(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${j}ui/misc/spinner.gif" width="14" height="14">`,n=y(s.dataset.tipped,"inv_id"),t(C,x,n)
var n}async function k(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(S)),h(i("refresh")))}function v(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),b(a,"]"),f(a,t),b(a,"["),d(t,k)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),w(),async function(){await R(),$(document).ajaxSuccess(((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&R()}))}())}export{v as default}
//# sourceMappingURL=injectAuctionHouse-D6vO2wDJ.js.map
