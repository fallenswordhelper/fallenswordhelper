import{j as s,g as t,k as a,w as i,p as e,bP as r,o as n,ae as o,aw as l,af as c,aJ as m,F as f,ar as u}from"./calfSystem-929ac228.js"
import{a as d}from"./all-414e0607.js"
import{c as p}from"./createSpan-6761e587.js"
import{c as h}from"./closestTr-3ee5784f.js"
import{i as j}from"./insertHtmlAfterBegin-6347b1ce.js"
import{d as g}from"./doStatTotal-aca339cc.js"
import{r as w}from"./relatePlayer-b132acd9.js"
import"./myStats-439c5e74.js"
import"./profile-ceb86d3e.js"
import"./now-6f22aec9.js"
import"./idb-8fd6b5d1.js"
import"./getMembrList-d370ab65.js"
import"./guildMembers-ec6b013f.js"
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
//# sourceMappingURL=injectAuctionHouse-a3a64723.js.map
