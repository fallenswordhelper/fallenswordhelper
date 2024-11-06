import{ai as s,x as a,p as o,c3 as t,b0 as e,k as i,l as r,aK as n,a8 as m,i as c,m as f}from"./calfSystem-BhNMi9iJ.js"
import{c as p}from"./closestTable-CoKDvQ84.js"
import{d as l}from"./dataRows-Cr2TCDiw.js"
import{g as d}from"./getPlayerId-rgootfiD.js"
import{a as u}from"./addLogColoring-B3XCwTBW.js"
import{c as g}from"./closestTr-BZl8N8NR.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-Cy0nLaUT.js"
import{g as L}from"./getCombat-BE-NV2co.js"
import{g as b}from"./getLogTime-BHr1JU38.js"
import"./createStyle-Ddqbo82m.js"
import"./doBuffLinkClick-BbM6dFpD.js"
import"./openQuickBuffById-C0zbMYTE.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-n12WVTZQ.js"
import"./dateUtc-FxFYRMRZ.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function G(s){s.className=""}function T(s){(function(s){const a=i(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(T)}()}async function M(s){const a=g(s),o=await L(b(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function v(){u("GuildLog",1,3),I(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(M)}()}export{v as default}
//# sourceMappingURL=guildLog-BnjT3_r-.js.map
