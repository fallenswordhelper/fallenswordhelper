import{ad as s,x as a,p as e,bT as t,aT as o,a3 as n,j as r,k as i,aE as c,v as m,bY as l,i as f,l as d,cq as u}from"./calfSystem-4830a18d.js"
import{c as p}from"./closestTable-082cc634.js"
import{d as g}from"./dataRows-ab26c2ce.js"
import{g as h}from"./getPlayerId-283e8a7a.js"
import{c as b}from"./closestTr-a662daf2.js"
import{g as j}from"./getId-e4d83057.js"
import{g as y}from"./getCombat-dce41474.js"
const L=()=>a("td",e()).find(t("Message")),T=s=>h(s.href)
function $(s){s.className=""}function v(s){(function(s){const a=r(i,s).map(T).map(Number)
return a.length&&!a.some((s=>s===c()))})(s)&&(o(s.cells).forEach($),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),n(s.cells[2]).includes("requested")&&function(s){const a=T(s.children[0])
m(s,` [ <a href="${l}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${l}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`)}(s.cells[2])}function M(){s("hideNonPlayerGuildLogMessages")&&function(){const s=L()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',g(a,3,0).forEach(v)}()}async function E(s){const a=b(s),e=await y(a,j(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){f(s.cells[2],d({innerHTML:`${u(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function G(){if(!s("groupCombatItems"))return
r('a[href*="&combat_id="]').filter((s=>n(s.previousSibling).includes("victorious"))).forEach(E)}export{M as a,G as g}
//# sourceMappingURL=guildGroupCombat-39e9a530.js.map
