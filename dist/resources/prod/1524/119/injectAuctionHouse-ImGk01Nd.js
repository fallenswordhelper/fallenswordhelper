import{k as s,g as t,l as a,w as e,p as i,bV as n,o as r,ai as o,aA as l,s as c,aj as m,aN as f,G as u,av as d}from"./calfSystem-Bit7wh4p.js"
import{a as p}from"./all-YfMtr2SN.js"
import{c as h}from"./createSpan-Ctesn2Q0.js"
import{c as j}from"./closestTr-7PFr_dNI.js"
import{i as g}from"./insertHtmlAfterBegin-GLMn5C2Y.js"
import{d as y}from"./doStatTotal-BMszkFli.js"
import{r as w}from"./relatePlayer-CdCTWY4p.js"
import"./myStats-BF2M0N-_.js"
import"./profile-DqDi87Jh.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-Bk73Mxcv.js"
import"./guildMembers-DVol-0Bs.js"
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
//# sourceMappingURL=injectAuctionHouse-ImGk01Nd.js.map