import{aA as s,a5 as a,aZ as o,p as t,cI as e,by as i,h as n,Z as r,aV as c,bj as m,m as f,k as l,b3 as p,i as u,v as d,cN as g}from"./calfSystem-CIdPz3EO.js"
import{c as h}from"./closestTable-CLMP9U5y.js"
import{a as b}from"./addLogColoring-CxlvoQcB.js"
import{g as L}from"./getId-CEBzpjjo.js"
import{g as j}from"./getLogTime-B0BO4ris.js"
import"./createStyle-C-OOcRjs.js"
import"./doBuffLinkClick-BdS404my.js"
import"./parseDateAsTimestamp-ImOh-yob.js"
const y=s=>c(s.href)
function k(s){s.className=""}function v(s){(function(s){const a=n(r,s).map(y).map(Number)
return a.length&&!a.some(s=>s===m())})(s)&&(i(s.cells).forEach(k),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function G(){const s=a("td",t()).find(e("Message"))
if(!s)return
const i=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',o(i,3,0).forEach(v)}async function T(s){const a=l(s),o=await p(j(a),L(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){b("GuildLog",1,3),s("hideNonPlayerGuildLogMessages")&&G(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter(s=>f(s.previousSibling).includes("victorious")).forEach(T)}()}export{C as default}
//# sourceMappingURL=guildLog-C2zDot3b.js.map
