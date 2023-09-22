import{j as s,g as t,k as a,w as i,p as e,bO as n,o as r,ad as o,av as l,ae as c,aI as m,E as f,aq as d}from"./calfSystem-4830a18d.js"
import{a as u}from"./all-414e0607.js"
import{c as p}from"./createSpan-0da7a190.js"
import{c as h}from"./closestTr-a662daf2.js"
import{i as j}from"./insertHtmlAfterBegin-32e03ae0.js"
import{d as g}from"./doStatTotal-331c56c0.js"
import{r as y}from"./relatePlayer-78a9d53c.js"
import"./myStats-e8c505b6.js"
import"./profile-3abe08ab.js"
import"./now-6f22aec9.js"
import"./idb-7e56faaa.js"
import"./getMembrList-d2aebe41.js"
import"./guildMembers-7edbe4e6.js"
import"./isArray-09a53da7.js"
const w=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),b=async s=>(await u(s.map(y))).filter((([,s])=>s)),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function x(){const s=w()
if(!s.length)return
const t=await b(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(S[t])}))}function L(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,f({cmd:"auctionhouse",subcmd:"cancel",auction_id:d(t.dataset.tipped,"inv_id")})}async function C(){const s=c("auctionCancel",t("resultRows"))
0!==s.length&&(await u(s.map(L)),l(t("refresh")))}function M(){!i()&&e()&&(function(){const s=h(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=p({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),j(s,"]"),n(s,a),j(s,"["),r(a,C)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),g(),async function(){await x(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&x()}))}())}export{M as default}
//# sourceMappingURL=injectAuctionHouse-4779e5bd.js.map
