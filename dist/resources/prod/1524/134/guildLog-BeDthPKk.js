import{ai as s,x as a,p as o,c3 as t,b0 as e,k as i,l as r,aL as n,a8 as m,i as c,m as f}from"./calfSystem-CyLCrHqa.js"
import{c as p}from"./closestTable-DUYDcoD9.js"
import{d as l}from"./dataRows-DUhbhXmo.js"
import{g as d}from"./getPlayerId-HyP308MI.js"
import{a as u}from"./addLogColoring-SgMFu7ED.js"
import{c as g}from"./closestTr-BHr42g8T.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-B18Hve4w.js"
import{g as b}from"./getCombat-BLFNeo0i.js"
import{g as L}from"./getLogTime-DzZU0W-t.js"
import"./createStyle-pyEHBlBg.js"
import"./doBuffLinkClick-D63PR5zj.js"
import"./openQuickBuffById-DWItz6gs.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-CUlScXmd.js"
import"./dateUtc-DyJ0gqjr.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function T(s){s.className=""}function G(s){(function(s){const a=i(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(T),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(G)}()}async function v(s){const a=g(s),o=await b(L(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){u("GuildLog",1,3),I(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(v)}()}export{C as default}
//# sourceMappingURL=guildLog-BeDthPKk.js.map
