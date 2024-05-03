import{ai as s,x as a,p as o,b$ as t,a_ as e,k as i,l as r,aJ as n,a8 as m,i as c,m as f}from"./calfSystem-C4gAE-9q.js"
import{c as p}from"./closestTable-C3mvinmA.js"
import{d as l}from"./dataRows-OKsoGxGk.js"
import{g as d}from"./getPlayerId-DSuOXqiI.js"
import{a as u}from"./addLogColoring-DQGq89ZY.js"
import{c as g}from"./closestTr-DcbdgdML.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-CkpKR2df.js"
import{g as b}from"./getCombat-DwS4PzoC.js"
import{g as L}from"./getLogTime-BOGXsQW8.js"
import"./createStyle-CNv7Gpcu.js"
import"./doBuffLinkClick-YALl5k0W.js"
import"./openQuickBuffById-BD5VkF0F.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-okB8qF1K.js"
import"./dateUtc-DEW1oPl_.js"
import"./now-Cx4PsKjI.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function T(s){s.className=""}function G(s){(function(s){const a=i(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(T),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(G)}()}async function v(s){const a=g(s),o=await b(L(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){u("GuildLog",1,3),I(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(v)}()}export{C as default}
//# sourceMappingURL=guildLog-fBdcoMYB.js.map
