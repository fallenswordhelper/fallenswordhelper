import{k as s,g as t,l as a,w as e,p as i,b_ as n,o as r,ai as o,aO as l,s as c,aj as m,aP as f,G as u,ax as d}from"./calfSystem-DZGU7L1H.js"
import{a as p}from"./all-YfMtr2SN.js"
import{c as h}from"./createSpan-DcQ00sL_.js"
import{c as j}from"./closestTr-DSuc1sz5.js"
import{i as g}from"./insertHtmlAfterBegin-DorDFB-h.js"
import{d as y}from"./doStatTotal-BQCP8rxV.js"
import{r as w}from"./relatePlayer-BVBGJi9A.js"
import"./myStats-zlyqooKe.js"
import"./profile-BoYBOZ74.js"
import"./getMembrList-CjIn3-9v.js"
import"./guildMembers-BaGXgi7Q.js"
import"./isArray-eVldfhw1.js"
const S=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),x=async s=>(await p(s.map(w))).filter((([,s])=>s)),A={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function b(){const s=S()
if(!s.length)return
const t=await x(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(A[t])}))}function L(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${f}ui/misc/spinner.gif" width="14" height="14">`,u({cmd:"auctionhouse",subcmd:"cancel",auction_id:d(t.dataset.tipped,"inv_id")})}async function C(){c("AH","cancelAllAH")
const s=m("auctionCancel",t("resultRows"))
0!==s.length&&(await p(s.map(L)),l(t("refresh")))}function H(){!e()&&i()&&(function(){const s=j(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=h({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),g(s,"]"),n(s,a),g(s,"["),r(a,C)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),y(),async function(){await b(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&b()}))}())}export{H as default}
//# sourceMappingURL=injectAuctionHouse-LgVTnY4B.js.map
