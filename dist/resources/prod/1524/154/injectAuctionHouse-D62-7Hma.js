import{U as a,$ as t,ae as s,h as n,_ as e,g as i,X as c,a2 as r,p as l,j as o,aP as u,cw as f,o as d,az as m,bh as h,s as p,aA as g,bi as j,a_ as w}from"./calfSystem-KFszEm2S.js"
import{i as y}from"./insertHtmlAfterBegin-CPPceD69.js"
import{d as b}from"./doStatTotal-C_eoXAtI.js"
import{r as A}from"./relatePlayer-CPmhyYQP.js"
import"./getMembrList-BsfKb1mz.js"
function x(t){return s={subcmd:"cancel",auction_id:t},a({cmd:"auctionhouse",...s})
var s}function H(a){return s({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function _(){const a=n(c,i("resultRows")).filter(a=>!a.href.endsWith("=null"))
if(!a.length)return
const t=await(async a=>(await e(a.map(A))).filter(([,a])=>a))(a)
t.length&&t.forEach(([a,t])=>{a.classList.add(L[t])})}function C(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${j}ui/misc/spinner.gif" width="14" height="14">`,n=w(s.dataset.tipped,"inv_id"),t(x,H,n)
var n}async function S(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(C)),h(i("refresh")))}function v(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),y(a,"]"),f(a,t),y(a,"["),d(t,S)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),b(),async function(){await _(),$(document).ajaxSuccess((a,t,s)=>{s.url.endsWith("=ajaxsearch")&&_()})}())}export{v as default}
//# sourceMappingURL=injectAuctionHouse-D62-7Hma.js.map
