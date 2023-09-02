import{j as s,g as t,k as a,w as e,p as i,bR as n,o as r,af as o,ax as l,ag as c,aL as m,G as f,as as u}from"./calfSystem-2fff342b.js"
import{a as d}from"./all-414e0607.js"
import{c as p}from"./createSpan-6e19e4f0.js"
import{c as h}from"./closestTr-03cebe69.js"
import{i as j}from"./insertHtmlAfterBegin-dd3e6f88.js"
import{d as g}from"./doStatTotal-94a01fa9.js"
import{r as w}from"./relatePlayer-d14a103c.js"
import"./myStats-8a5ad298.js"
import"./profile-3c9458c7.js"
import"./now-6f22aec9.js"
import"./idb-0ebea50c.js"
import"./getMembrList-09da0fac.js"
import"./guildMembers-0c31d405.js"
const y=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),b=async s=>(await d(s.map(w))).filter((([,s])=>s)),x={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function L(){const s=y()
if(!s.length)return
const t=await b(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(x[t])}))}function S(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,f({cmd:"auctionhouse",subcmd:"cancel",auction_id:u(t.dataset.tipped,"inv_id")})}async function C(){const s=c("auctionCancel",t("resultRows"))
0!==s.length&&(await d(s.map(S)),l(t("refresh")))}function M(){!e()&&i()&&(function(){const s=h(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=p({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),j(s,"]"),n(s,a),j(s,"["),r(a,C)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),g(),async function(){await L(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&L()}))}())}export{M as default}
//# sourceMappingURL=injectAuctionHouse-f974fd6a.js.map
