import{ai as s,x as a,p as o,c3 as t,b0 as e,k as i,l as r,aK as n,a8 as m,i as c,m as f}from"./calfSystem-BjarbvkO.js"
import{c as p}from"./closestTable-QYAgm0UB.js"
import{d as l}from"./dataRows-DT_fO1in.js"
import{g as d}from"./getPlayerId-CzqY3CZe.js"
import{a as u}from"./addLogColoring-DCGmXh-z.js"
import{c as g}from"./closestTr-BDCF6M_H.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-B3fvfroG.js"
import{g as L}from"./getCombat-DWkD58OE.js"
import{g as b}from"./getLogTime-yfyR7WGU.js"
import"./createStyle-CfvDzb4b.js"
import"./doBuffLinkClick-DBS6jRGO.js"
import"./openQuickBuffById-BQUusfkO.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-4-aelaqN.js"
import"./dateUtc-CU2Nl9AM.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function G(s){s.className=""}function T(s){(function(s){const a=i(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(T)}()}async function M(s){const a=g(s),o=await L(b(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function v(){u("GuildLog",1,3),I(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(M)}()}export{v as default}
//# sourceMappingURL=guildLog-CdSsiiu3.js.map
