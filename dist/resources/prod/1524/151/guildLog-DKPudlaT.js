import{aB as s,a5 as a,aZ as t,p as o,cH as e,bw as i,k as n,Z as r,aV as c,bf as m,n as f,l,b3 as p,i as u,w as d,cN as g}from"./calfSystem-C1X5YxJZ.js"
import{c as h}from"./closestTable-STrxtv_E.js"
import{a as b}from"./addLogColoring-4-tQOwDT.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{g as L}from"./getLogTime-VKlNOnp1.js"
import"./createStyle-B0zF0e_c.js"
import"./doBuffLinkClick-BI7P2cNU.js"
import"./parseDateAsTimestamp-D6JycNAq.js"
import"./dateUtc-BAc__vAC.js"
const y=()=>a("td",o()).find(e("Message")),G=s=>c(s.href)
function T(s){s.className=""}function k(s){(function(s){const a=n(r,s).map(G).map(Number)
return a.length&&!a.some((s=>s===m()))})(s)&&(i(s.cells).forEach(T),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function v(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',t(a,3,0).forEach(k)}()}async function E(s){const a=l(s),t=await p(L(a),j(s)),o=t?.r?.combat?.items?.[0]?.n
o&&function(s,a,t){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${t}</span>'`}))}(a,t.r.combat.attacker.group.players[0],o)}function M(){b("GuildLog",1,3),v(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>f(s.previousSibling).includes("victorious"))).forEach(E)}()}export{M as default}
//# sourceMappingURL=guildLog-DKPudlaT.js.map
