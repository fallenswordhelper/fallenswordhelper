import{ai as s,x as a,p as e,b_ as t,a_ as o,a8 as n,k as i,l as r,aJ as c,v as l,c3 as m,o as d,s as f,i as p,m as u}from"./calfSystem-Bit7wh4p.js"
import{c as g}from"./closestTable-CmNjL45D.js"
import{d as h}from"./dataRows-B3xlTlPD.js"
import{g as b}from"./getPlayerId-kZSkwpWB.js"
import{c as y}from"./closestTr-7PFr_dNI.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{p as L}from"./playerLink-D65DtSiY.js"
import{g as $}from"./getCombat-BU1mK6YL.js"
const G=()=>a("td",e()).find(t("Message")),v=s=>b(s.href)
function I(s){s.className=""}function M(s){(function(s){const a=i(r,s).map(v).map(Number)
return a.length&&!a.some((s=>s===c()))})(s)&&(o(s.cells).forEach(I),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),n(s.cells[2]).includes("requested")&&function(s){const a=v(s.children[0])
l(s,` [ <a href="${m}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${m}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`),d(s,(s=>{"Accept"===n(s.target)&&f("addGuildLogWidgets","Accept"),"Deny"===n(s.target)&&f("addGuildLogWidgets","Deny")}))}(s.cells[2])}function N(){s("hideNonPlayerGuildLogMessages")&&function(){const s=G()
if(!s)return
const a=g(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',h(a,3,0).forEach(M)}()}async function T(s){const a=y(s),e=await $(a,j(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){p(s.cells[2],u({innerHTML:`${L(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function k(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>n(s.previousSibling).includes("victorious"))).forEach(T)}export{N as a,k as g}
//# sourceMappingURL=guildGroupCombat-DDzEmWBv.js.map
