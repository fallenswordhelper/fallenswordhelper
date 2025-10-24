import{W as a,$ as s,af as t,h as n,a1 as e,g as i,Z as c,a4 as r,p as l,k as o,aR as u,cB as f,o as d,aA as m,bl as h,s as p,aB as g,bm as b,b0 as j}from"./calfSystem-CIdPz3EO.js"
import{i as y}from"./insertHtmlAfterBegin-CywIqRwb.js"
import{d as w}from"./doStatTotal-C_bkt6VX.js"
import{r as A}from"./relatePlayer-BrjxZhKo.js"
import"./getMembrList-DRRIgIBb.js"
import"./guildMembers-BxoIaGju.js"
function x(s){return t={subcmd:"cancel",auction_id:s},a({cmd:"auctionhouse",...t})
var t}function B(a){return t({cmd:"auctionhouse",subcmd:"cancel",auction_id:a})}const L={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function C(){const a=n(c,i("resultRows")).filter(a=>!a.href.endsWith("=null"))
if(!a.length)return
const s=await(async a=>(await e(a.map(A))).filter(([,a])=>a))(a)
s.length&&s.forEach(([a,s])=>{a.classList.add(L[s])})}function H(a){const[t]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${b}ui/misc/spinner.gif" width="14" height="14">`,n=j(t.dataset.tipped,"inv_id"),s(x,B,n)
var n}async function M(){p("AH","cancelAllAH")
const a=g("auctionCancel",i("resultRows"))
0!==a.length&&(await e(a.map(H)),h(i("refresh")))}function R(){!r()&&l()&&(function(){const a=o(i("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const s=u({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),y(a,"]"),f(a,s),y(a,"["),d(s,M)}(),m("autoFillMinBidPrice")&&h(i("auto-fill")),w(),async function(){await C(),$(document).ajaxSuccess((a,s,t)=>{t.url.endsWith("=ajaxsearch")&&C()})}())}export{R as default}
//# sourceMappingURL=injectAuctionHouse-DI7YRyPc.js.map
