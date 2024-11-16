import{ai as s,x as a,p as o,c3 as t,n as e,t as i,aI as r,b0 as n,a8 as m,i as c,k as f}from"./calfSystem-Blt4DbaE.js"
import{c as p}from"./closestTable-Ddgm5m0P.js"
import{d as l}from"./dataRows-B6_VtVvQ.js"
import{g as d}from"./getPlayerId-Ck17Fcst.js"
import{a as u}from"./addLogColoring-iZi4QL__.js"
import{c as g}from"./closestTr-BGA5O97h.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-Wzb2L39d.js"
import{g as L}from"./getCombat-T6Z6qD0Y.js"
import{g as b}from"./getLogTime-jtr1-498.js"
import"./createStyle-C5mK_M_l.js"
import"./doBuffLinkClick-CcIlwlsz.js"
import"./openQuickBuffById-AG7prqnJ.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-CKw0dWec.js"
import"./dateUtc-Cc3l2wc4.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function G(s){s.className=""}function I(s){(function(s){const a=e(i,s).map(k).map(Number)
return a.length&&!a.some((s=>s===r()))})(s)&&(n(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function T(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(I)}()}async function M(s){const a=g(s),o=await L(b(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function v(){u("GuildLog",1,3),T(),function(){if(!s("groupCombatItems"))return
e('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(M)}()}export{v as default}
//# sourceMappingURL=guildLog-Bnq5-Jmr.js.map
