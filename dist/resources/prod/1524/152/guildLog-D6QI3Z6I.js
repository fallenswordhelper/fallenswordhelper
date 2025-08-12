import{aB as s,a5 as a,aV as t,p as o,cF as e,bt as i,k as n,Z as r,aR as c,bc as m,n as f,l,a$ as p,i as u,w as d,cL as g}from"./calfSystem-BlPuMQGT.js"
import{c as h}from"./closestTable-gY6pXvyq.js"
import{a as b}from"./addLogColoring-atkRL2SG.js"
import{g as L}from"./getId-CEBzpjjo.js"
import{g as j}from"./getLogTime-G8OzHQ7f.js"
import"./createStyle-Bc_hQFau.js"
import"./doBuffLinkClick-JOmJeMPh.js"
import"./parseDateAsTimestamp-DDAzvT6k.js"
import"./dateUtc-CCrQ3NXB.js"
const y=()=>a("td",o()).find(e("Message")),G=s=>c(s.href)
function T(s){s.className=""}function k(s){(function(s){const a=n(r,s).map(G).map(Number)
return a.length&&!a.some((s=>s===m()))})(s)&&(i(s.cells).forEach(T),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function v(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',t(a,3,0).forEach(k)}()}async function E(s){const a=l(s),t=await p(j(a),L(s)),o=t?.r?.combat?.items?.[0]?.n
o&&function(s,a,t){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${t}</span>'`}))}(a,t.r.combat.attacker.group.players[0],o)}function M(){b("GuildLog",1,3),v(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>f(s.previousSibling).includes("victorious"))).forEach(E)}()}export{M as default}
//# sourceMappingURL=guildLog-D6QI3Z6I.js.map
