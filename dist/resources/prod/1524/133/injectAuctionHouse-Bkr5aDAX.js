import{k as s,g as t,l as a,w as e,p as i,b_ as n,o as r,ai as o,aC as l,s as c,aj as m,aP as f,G as u,ax as d}from"./calfSystem-DKih1pr1.js"
import{a as p}from"./all-YfMtr2SN.js"
import{c as h}from"./createSpan-CQ7ABMtY.js"
import{c as j}from"./closestTr-DKMGvQT_.js"
import{i as g}from"./insertHtmlAfterBegin-DHhuR2v9.js"
import{d as y}from"./doStatTotal-BesuVsPp.js"
import{r as w}from"./relatePlayer-QkAcajOy.js"
import"./myStats-z3bRVVYp.js"
import"./profile-_cnrhSN8.js"
import"./getMembrList-CJGDG-W0.js"
import"./guildMembers-D9oNe4zZ.js"
import"./isArray-eVldfhw1.js"
const x=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),A=async s=>(await p(s.map(w))).filter((([,s])=>s)),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function b(){const s=x()
if(!s.length)return
const t=await A(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(S[t])}))}function C(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${f}ui/misc/spinner.gif" width="14" height="14">`,u({cmd:"auctionhouse",subcmd:"cancel",auction_id:d(t.dataset.tipped,"inv_id")})}async function L(){c("AH","cancelAllAH")
const s=m("auctionCancel",t("resultRows"))
0!==s.length&&(await p(s.map(C)),l(t("refresh")))}function H(){!e()&&i()&&(function(){const s=j(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=h({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),g(s,"]"),n(s,a),g(s,"["),r(a,L)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),y(),async function(){await b(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&b()}))}())}export{H as default}
//# sourceMappingURL=injectAuctionHouse-Bkr5aDAX.js.map