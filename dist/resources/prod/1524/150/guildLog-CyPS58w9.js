import{ao as s,B as a,aN as t,p as o,cy as e,bk as i,n,t as r,aJ as c,b3 as m,aa as f,ai as l,aT as p,i as u,u as d,cF as g}from"./calfSystem-BGOTz8de.js"
import{c as h}from"./closestTable-DjvmqHiL.js"
import{a as b}from"./addLogColoring-DSat2nGC.js"
import{g as L}from"./getId-CEBzpjjo.js"
import{g as j}from"./getLogTime-BOe2ASPR.js"
import"./createStyle-dPu6vqqt.js"
import"./doBuffLinkClick-BhjFCunt.js"
import"./parseDateAsTimestamp-DRgS21SE.js"
import"./dateUtc-DrUNGodL.js"
const y=()=>a("td",o()).find(e("Message")),T=s=>c(s.href)
function G(s){s.className=""}function k(s){(function(s){const a=n(r,s).map(T).map(Number)
return a.length&&!a.some((s=>s===m()))})(s)&&(i(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function v(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',t(a,3,0).forEach(k)}()}async function M(s){const a=l(s),t=await p(j(a),L(s)),o=t?.r?.combat?.items?.[0]?.n
o&&function(s,a,t){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${t}</span>'`}))}(a,t.r.combat.attacker.group.players[0],o)}function N(){b("GuildLog",1,3),v(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>f(s.previousSibling).includes("victorious"))).forEach(M)}()}export{N as default}
//# sourceMappingURL=guildLog-CyPS58w9.js.map
