import{n as s,g as t,t as a,w as e,p as i,b_ as n,e as r,s as o,aj as l,aO as c,G as m,ax as f,aP as u,ai as d}from"./calfSystem-Blt4DbaE.js"
import{a as p}from"./all-YfMtr2SN.js"
import{c as h}from"./createSpan-qOSQqjTl.js"
import{c as j}from"./closestTr-BGA5O97h.js"
import{i as g}from"./insertHtmlAfterBegin-COYhMrPt.js"
import{d as y}from"./doStatTotal-CybaE_J0.js"
import{r as w}from"./relatePlayer-DeUQmyIo.js"
import"./myStats-CJTu9lO4.js"
import"./profile-BPaCJRNe.js"
import"./getMembrList-BJkT4B-E.js"
import"./guildMembers-B5MxM4J7.js"
import"./isArray-eVldfhw1.js"
const S=()=>s(a,t("resultRows")).filter((s=>!s.href.endsWith("=null"))),x=async s=>(await p(s.map(w))).filter((([,s])=>s)),A={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function b(){const s=S()
if(!s.length)return
const t=await x(s)
t.length&&t.forEach((([s,t])=>{s.classList.add(A[t])}))}function L(s){const[t]=s.parentNode.parentNode.children[0].children
return s.outerHTML=`<img src="${c}ui/misc/spinner.gif" width="14" height="14">`,m({cmd:"auctionhouse",subcmd:"cancel",auction_id:f(t.dataset.tipped,"inv_id")})}async function C(){o("AH","cancelAllAH")
const s=l("auctionCancel",t("resultRows"))
0!==s.length&&(await p(s.map(L)),u(t("refresh")))}function H(){!e()&&i()&&(function(){const s=j(t("fill"))?.nextElementSibling?.children?.[0]
if(!s)return
const a=h({className:"smallLink",textContent:"Cancel All"})
s.classList.add("fshCenter"),g(s,"]"),n(s,a),g(s,"["),r(a,C)}(),d("autoFillMinBidPrice")&&u(t("auto-fill")),y(),async function(){await b(),$(document).ajaxSuccess(((s,t,a)=>{a.url.endsWith("=ajaxsearch")&&b()}))}())}export{H as default}
//# sourceMappingURL=injectAuctionHouse-htpVGXDd.js.map
