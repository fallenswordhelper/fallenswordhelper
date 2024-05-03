import{k as s,g as t,l as a,w as e,p as i,bW as n,o as r,ai as o,aA as l,s as c,aj as m,aN as f,G as u,av as d}from"./calfSystem-BpHkrDYD.js"
import{a as p}from"./all-YfMtr2SN.js"
import{c as h}from"./createSpan-CbTDLDpZ.js"
import{c as j}from"./closestTr-BwzFUWhN.js"
import{i as g}from"./insertHtmlAfterBegin-Zh7kMr6w.js"
import{d as y}from"./doStatTotal-ZdcJ2KWg.js"
import{r as w}from"./relatePlayer-CtIUA1Sw.js"
import"./myStats-m7ki7d5o.js"
import"./profile-Cr3-9Q7w.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-BJ_5X84W.js"
import"./guildMembers-366dgoht.js"
import"./isArray-eVldfhw1.js"
const A=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),S=async s=>(await p(s.map(w))).filter((([,s])=>s)),b={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function x(){const s=A()
if(!s.length)return
const t=await S(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(b[t])}))}function L(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${f}ui/misc/spinner.gif" width="14" height="14">`,u({cmd:"auctionhouse",subcmd:"cancel",auction_id:d(t.dataset.tipped,"inv_id")})}async function C(){c("AH","cancelAllAH")
const s=m("auctionCancel",t("resultRows"))
0!==s.length&&(await p(s.map(L)),l(t("refresh")))}function H(){!e()&&i()&&(function(){const s=j(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=h({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),g(s,"]"),n(s,a),g(s,"["),r(a,C)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),y(),async function(){await x(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&x()}))}())}export{H as default}
//# sourceMappingURL=injectAuctionHouse-Dn6ueWZW.js.map
