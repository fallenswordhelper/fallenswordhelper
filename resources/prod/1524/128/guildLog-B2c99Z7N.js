import{ai as s,x as a,p as o,bZ as t,a_ as e,k as i,l as r,aJ as n,a8 as m,i as c,m as f}from"./calfSystem-C2EM0fGB.js"
import{c as p}from"./closestTable-CmguVBqK.js"
import{d as l}from"./dataRows-Dn_WGyu8.js"
import{g as d}from"./getPlayerId-BsPNW-SE.js"
import{a as u}from"./addLogColoring-YmmGf3x-.js"
import{c as g}from"./closestTr-BTaj8Hzz.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-Daxc_pSj.js"
import{g as b}from"./getCombat-BxBKp6j6.js"
import{g as L}from"./getLogTime-xGM0trz0.js"
import"./createStyle-DT0fjAAy.js"
import"./doBuffLinkClick-BmQ-6QF7.js"
import"./openQuickBuffById-DZV2jzRU.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-DhxIXYhV.js"
import"./dateUtc-D-4KL9SN.js"
import"./now-Cx4PsKjI.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function T(s){s.className=""}function G(s){(function(s){const a=i(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(T),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(G)}()}async function v(s){const a=g(s),o=await b(L(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){u("GuildLog",1,3),I(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(v)}()}export{C as default}
//# sourceMappingURL=guildLog-B2c99Z7N.js.map
