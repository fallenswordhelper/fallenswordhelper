import{k as s,g as t,l as a,w as e,p as i,bW as n,o as r,ai as o,aA as l,s as c,aj as m,aN as f,G as u,av as d}from"./calfSystem-BtgQSp8m.js"
import{a as p}from"./all-YfMtr2SN.js"
import{c as h}from"./createSpan-BNuEMmn6.js"
import{c as j}from"./closestTr-D53dAuOz.js"
import{i as g}from"./insertHtmlAfterBegin-fU2gx9hU.js"
import{d as y}from"./doStatTotal-C-BP9n92.js"
import{r as w}from"./relatePlayer-SVp6Enet.js"
import"./myStats-V6s3HT5k.js"
import"./profile-W3yGNvES.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-BlkqWvC9.js"
import"./guildMembers-CFZ5CYds.js"
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
//# sourceMappingURL=injectAuctionHouse-CKk0L0YQ.js.map
