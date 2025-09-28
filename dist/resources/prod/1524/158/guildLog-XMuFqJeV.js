import{az as s,a4 as a,aY as o,p as t,cH as e,bw as i,h as n,Y as r,aU as c,bh as m,l as f,j as l,b2 as p,i as u,u as d,cN as g}from"./calfSystem-CIuUjh4H.js"
import{c as h}from"./closestTable-CAaKFM8t.js"
import{a as b}from"./addLogColoring-Cl_8Twpy.js"
import{g as L}from"./getId-CEBzpjjo.js"
import{g as j}from"./getLogTime-CZGXW1gy.js"
import"./createStyle-Co3Q_8M9.js"
import"./doBuffLinkClick-9cS80RCX.js"
import"./parseDateAsTimestamp-hdeGukFZ.js"
const y=s=>c(s.href)
function G(s){s.className=""}function T(s){(function(s){const a=n(r,s).map(y).map(Number)
return a.length&&!a.some(s=>s===m())})(s)&&(i(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function k(){const s=a("td",t()).find(e("Message"))
if(!s)return
const i=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',o(i,3,0).forEach(T)}async function v(s){const a=l(s),o=await p(j(a),L(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){b("GuildLog",1,3),s("hideNonPlayerGuildLogMessages")&&k(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter(s=>f(s.previousSibling).includes("victorious")).forEach(v)}()}export{C as default}
//# sourceMappingURL=guildLog-XMuFqJeV.js.map
