import{aA as s,a4 as a,aZ as o,p as t,cI as e,bx as i,h as n,Y as r,aV as c,bi as m,l as f,j as l,b3 as p,i as u,u as d,cO as g}from"./calfSystem-CQOGdqPv.js"
import{c as h}from"./closestTable-Cs7gyt8-.js"
import{a as b}from"./addLogColoring-QpVgl179.js"
import{g as L}from"./getId-CEBzpjjo.js"
import{g as j}from"./getLogTime-6htlC-jz.js"
import"./createStyle--h4yDzB1.js"
import"./doBuffLinkClick-Di-YJRzu.js"
import"./parseDateAsTimestamp-D__SFnGT.js"
const y=s=>c(s.href)
function G(s){s.className=""}function T(s){(function(s){const a=n(r,s).map(y).map(Number)
return a.length&&!a.some(s=>s===m())})(s)&&(i(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function k(){const s=a("td",t()).find(e("Message"))
if(!s)return
const i=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',o(i,3,0).forEach(T)}async function v(s){const a=l(s),o=await p(j(a),L(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function M(){b("GuildLog",1,3),s("hideNonPlayerGuildLogMessages")&&k(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter(s=>f(s.previousSibling).includes("victorious")).forEach(v)}()}export{M as default}
//# sourceMappingURL=guildLog-BCIeGQOc.js.map
