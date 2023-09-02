import{af as s,x as a,p as e,bW as t,aW as o,a5 as n,j as r,k as c,aH as i,v as m,c0 as f,i as l,l as d,ct as u}from"./calfSystem-2fff342b.js"
import{c as p}from"./closestTable-2060ed27.js"
import{d as g}from"./dataRows-1cc13a27.js"
import{g as h}from"./getPlayerId-1e376753.js"
import{c as b}from"./closestTr-03cebe69.js"
import{g as j}from"./getId-e4d83057.js"
import{g as y}from"./getCombat-faf84f1f.js"
const L=()=>a("td",e()).find(t("Message")),$=s=>h(s.href)
function v(s){s.className=""}function G(s){(function(s){const a=r(c,s).map($).map(Number)
return a.length&&!a.some((s=>s===i()))})(s)&&(o(s.cells).forEach(v),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),n(s.cells[2]).includes("requested")&&function(s){const a=$(s.children[0])
m(s,` [ <a href="${f}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${f}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`)}(s.cells[2])}function I(){s("hideNonPlayerGuildLogMessages")&&function(){const s=L()
if(!s)return
const a=p(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',g(a,3,0).forEach(G)}()}async function M(s){const a=b(s),e=await y(a,j(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){l(s.cells[2],d({innerHTML:`${u(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function N(){if(!s("groupCombatItems"))return
r('a[href*="&combat_id="]').filter((s=>n(s.previousSibling).includes("victorious"))).forEach(M)}export{I as a,N as g}
//# sourceMappingURL=guildGroupCombat-419856e0.js.map
