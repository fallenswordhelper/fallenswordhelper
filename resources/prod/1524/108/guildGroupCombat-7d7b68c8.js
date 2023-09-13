import{af as s,x as a,p as e,bW as t,aW as o,a5 as n,j as r,k as i,aH as c,v as m,b$ as f,i as l,l as d,ct as u}from"./calfSystem-34913441.js"
import{c as p}from"./closestTable-c0c63085.js"
import{d as g}from"./dataRows-380aff49.js"
import{g as h}from"./getPlayerId-dc3d799c.js"
import{c as b}from"./closestTr-316dea29.js"
import{g as j}from"./getId-e4d83057.js"
import{g as y}from"./getCombat-eae4a1fa.js"
const $=()=>a("td",e()).find(t("Message")),L=s=>h(s.href)
function v(s){s.className=""}function M(s){(function(s){const a=r(i,s).map(L).map(Number)
return a.length&&!a.some((s=>s===c()))})(s)&&(o(s.cells).forEach(v),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),n(s.cells[2]).includes("requested")&&function(s){const a=L(s.children[0])
m(s,` [ <a href="${f}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${f}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`)}(s.cells[2])}function G(){s("hideNonPlayerGuildLogMessages")&&function(){const s=$()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',g(a,3,0).forEach(M)}()}async function H(s){const a=b(s),e=await y(a,j(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){l(s.cells[2],d({innerHTML:`${u(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function T(){if(!s("groupCombatItems"))return
r('a[href*="&combat_id="]').filter((s=>n(s.previousSibling).includes("victorious"))).forEach(H)}export{G as a,T as g}
//# sourceMappingURL=guildGroupCombat-7d7b68c8.js.map
