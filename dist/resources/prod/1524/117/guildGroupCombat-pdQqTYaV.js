import{ai as s,x as a,p as e,b_ as t,a_ as o,a8 as i,k as n,l as r,aJ as c,v as m,c3 as l,o as d,s as f,i as p,m as u}from"./calfSystem-G1dN925O.js"
import{c as g}from"./closestTable-Ggcgditt.js"
import{d as h}from"./dataRows-o1cWPBFh.js"
import{g as b}from"./getPlayerId-E_vX5Gmd.js"
import{c as y}from"./closestTr-ewZQ2axu.js"
import{g as j}from"./getId-f4M3YrQR.js"
import{p as L}from"./playerLink-5A3I_32p.js"
import{g as G}from"./getCombat-fqq7tGyf.js"
const $=()=>a("td",e()).find(t("Message")),v=s=>b(s.href)
function M(s){s.className=""}function k(s){(function(s){const a=n(r,s).map(v).map(Number)
return a.length&&!a.some((s=>s===c()))})(s)&&(o(s.cells).forEach(M),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),i(s.cells[2]).includes("requested")&&function(s){const a=v(s.children[0])
m(s,` [ <a href="${l}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${l}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`),d(s,(s=>{"Accept"===i(s.target)&&f("addGuildLogWidgets","Accept"),"Deny"===i(s.target)&&f("addGuildLogWidgets","Deny")}))}(s.cells[2])}function T(){s("hideNonPlayerGuildLogMessages")&&function(){const s=$()
if(!s)return
const a=g(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',h(a,3,0).forEach(k)}()}async function _(s){const a=y(s),e=await G(a,j(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){p(s.cells[2],u({innerHTML:`${L(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function A(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>i(s.previousSibling).includes("victorious"))).forEach(_)}export{T as a,A as g}
//# sourceMappingURL=guildGroupCombat-pdQqTYaV.js.map
