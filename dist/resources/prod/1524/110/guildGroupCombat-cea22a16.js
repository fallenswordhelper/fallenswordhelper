import{ae as s,x as a,p as e,bU as t,aU as o,a4 as n,j as r,k as i,aF as c,v as m,bZ as l,i as f,l as d,cq as u}from"./calfSystem-929ac228.js"
import{c as p}from"./closestTable-53e346f6.js"
import{d as g}from"./dataRows-65a2024d.js"
import{g as h}from"./getPlayerId-eb8178c0.js"
import{c as b}from"./closestTr-3ee5784f.js"
import{g as j}from"./getId-e4d83057.js"
import{g as y}from"./getCombat-a219dc2f.js"
const L=()=>a("td",e()).find(t("Message")),$=s=>h(s.href)
function v(s){s.className=""}function M(s){(function(s){const a=r(i,s).map($).map(Number)
return a.length&&!a.some((s=>s===c()))})(s)&&(o(s.cells).forEach(v),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),n(s.cells[2]).includes("requested")&&function(s){const a=$(s.children[0])
m(s,` [ <a href="${l}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${l}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`)}(s.cells[2])}function G(){s("hideNonPlayerGuildLogMessages")&&function(){const s=L()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',g(a,3,0).forEach(M)}()}async function T(s){const a=b(s),e=await y(a,j(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){f(s.cells[2],d({innerHTML:`${u(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function E(){if(!s("groupCombatItems"))return
r('a[href*="&combat_id="]').filter((s=>n(s.previousSibling).includes("victorious"))).forEach(T)}export{G as a,E as g}
//# sourceMappingURL=guildGroupCombat-cea22a16.js.map
