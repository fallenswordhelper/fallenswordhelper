import{k as s,g as t,l as a,w as e,p as i,bN as n,o as r,ad as o,av as l,s as c,ae as m,aH as f,E as d,aq as u}from"./calfSystem-rn9Rc_nF.js"
import{a as p}from"./all-TTLWag-d.js"
import{c as h}from"./createSpan-Q4CQr4i_.js"
import{c as j}from"./closestTr-Vv3gA4eP.js"
import{i as g}from"./insertHtmlAfterBegin-thBu0XU7.js"
import{d as y}from"./doStatTotal-5BSd8atf.js"
import{r as w}from"./relatePlayer-ptYMbHvS.js"
import"./myStats-xDAqOwWp.js"
import"./profile-chrQWu8y.js"
import"./now-pQzGw6vd.js"
import"./idb-1b6_RJN1.js"
import"./getMembrList-IydSS5c4.js"
import"./guildMembers-q4YutUVF.js"
import"./isArray-bNviZzJA.js"
const b=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),A=async s=>(await p(s.map(w))).filter((([,s])=>s)),S={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function x(){const s=b()
if(!s.length)return
const t=await A(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(S[t])}))}function H(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${f}ui/misc/spinner.gif" width="14" height="14">`,d({cmd:"auctionhouse",subcmd:"cancel",auction_id:u(t.dataset.tipped,"inv_id")})}async function L(){c("AH","cancelAllAH")
const s=m("auctionCancel",t("resultRows"))
0!==s.length&&(await p(s.map(H)),l(t("refresh")))}function C(){!e()&&i()&&(function(){const s=j(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=h({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),g(s,"]"),n(s,a),g(s,"["),r(a,L)}(),o("autoFillMinBidPrice")&&l(t("auto-fill")),y(),async function(){await x(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&x()}))}())}export{C as default}
//# sourceMappingURL=injectAuctionHouse-E93hGKnZ.js.map
