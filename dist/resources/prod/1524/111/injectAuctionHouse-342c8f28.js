import{j as s,g as t,k as a,w as i,p as e,bP as r,o as n,ae as o,aw as l,af as c,aJ as m,F as f,ar as u}from"./calfSystem-abb16b0d.js"
import{a as d}from"./all-414e0607.js"
import{c as p}from"./createSpan-b6e6b8c0.js"
import{c as h}from"./closestTr-d0dbc351.js"
import{i as j}from"./insertHtmlAfterBegin-eba23bd5.js"
import{d as g}from"./doStatTotal-7ecf6088.js"
import{r as w}from"./relatePlayer-e39602a6.js"
import"./myStats-0c66109a.js"
import"./profile-f1cc6452.js"
import"./now-6f22aec9.js"
import"./idb-e719862a.js"
import"./getMembrList-c23778b8.js"
import"./guildMembers-d914b75d.js"
import"./isArray-09a53da7.js"
const y=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),b=async s=>(await d(s.map(w))).filter((([,s])=>s)),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function x(){const s=y()
if(!s.length)return
const t=await b(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(S[t])}))}function L(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,f({cmd:"auctionhouse",subcmd:"cancel",auction_id:u(t.dataset.tipped,"inv_id")})}async function C(){const s=c("auctionCancel",t("resultRows"))
0!==s.length&&(await d(s.map(L)),l(t("refresh")))}function M(){!i()&&e()&&(function(){const s=h(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=p({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),j(s,"]"),r(s,a),j(s,"["),n(a,C)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),g(),async function(){await x(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&x()}))}())}export{M as default}
//# sourceMappingURL=injectAuctionHouse-342c8f28.js.map
