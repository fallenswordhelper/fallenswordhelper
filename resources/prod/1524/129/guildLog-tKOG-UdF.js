import{ai as s,x as a,p as o,bZ as t,a_ as e,k as i,l as r,aJ as n,a8 as m,i as c,m as f}from"./calfSystem-B3Rc3sVt.js"
import{c as p}from"./closestTable-B05V59ae.js"
import{d as l}from"./dataRows-C8bVqiN8.js"
import{g as d}from"./getPlayerId-eaIUoNVO.js"
import{a as u}from"./addLogColoring-Bgehuhzf.js"
import{c as g}from"./closestTr-HZXloQc6.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as h}from"./playerLink-rEhmOm3b.js"
import{g as b}from"./getCombat-OkXvB-2_.js"
import{g as L}from"./getLogTime-De4u9DRT.js"
import"./createStyle-CVX4cKSa.js"
import"./doBuffLinkClick-BKTGTeRl.js"
import"./openQuickBuffById-DvUp3MEg.js"
import"./fshOpen-AuKioUPF.js"
import"./parseDateAsTimestamp-Dt6GV947.js"
import"./dateUtc-BtXSDG9Y.js"
import"./now-Cx4PsKjI.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>d(s.href)
function T(s){s.className=""}function G(s){(function(s){const a=i(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(T),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',l(a,3,0).forEach(G)}()}async function v(s){const a=g(s),o=await b(L(a),j(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){c(s.cells[2],f({innerHTML:`${h(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){u("GuildLog",1,3),I(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>m(s.previousSibling).includes("victorious"))).forEach(v)}()}export{C as default}
//# sourceMappingURL=guildLog-tKOG-UdF.js.map
