import{aq as s,z as a,aN as o,p as t,cz as e,bk as i,l as n,m as r,aJ as m,b3 as c,ad as f,ak as l,i as p,n as u}from"./calfSystem-BAeDn21M.js"
import{c as d}from"./closestTable-MoRx7kRV.js"
import{a as g}from"./addLogColoring-Kt9F9taW.js"
import{g as h}from"./getId-CEBzpjjo.js"
import{p as b}from"./playerLink-CoWq8U0k.js"
import{g as j}from"./getCombat-R0g80w8M.js"
import{g as L}from"./getLogTime-wICzy5KY.js"
import"./createStyle-BAUgBTdZ.js"
import"./doBuffLinkClick-CjF82H2k.js"
import"./parseDateAsTimestamp-CGAhktCc.js"
import"./dateUtc-D0IGtXy8.js"
const y=()=>a("td",t()).find(e("Message")),k=s=>m(s.href)
function G(s){s.className=""}function C(s){(function(s){const a=n(r,s).map(k).map(Number)
return a.length&&!a.some((s=>s===c()))})(s)&&(i(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function T(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=d(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',o(a,3,0).forEach(C)}()}async function v(s){const a=l(s),o=await j(L(a),h(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){p(s.cells[2],u({innerHTML:`${b(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function M(){g("GuildLog",1,3),T(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>f(s.previousSibling).includes("victorious"))).forEach(v)}()}export{M as default}
//# sourceMappingURL=guildLog-Dg4BJ0mr.js.map
