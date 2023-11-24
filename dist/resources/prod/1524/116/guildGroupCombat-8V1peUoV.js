import{ad as s,x as a,p as e,bS as t,aS as o,a3 as r,k as n,l as i,v as c,bX as m,o as d,s as l,i as f,m as p,cq as u}from"./calfSystem-ZGMc097r.js"
import{c as g}from"./closestTable-ell7c3Dx.js"
import{d as h}from"./dataRows-GJKEuNfe.js"
import{g as b}from"./getPlayerId-VyYlcjgL.js"
import{p as y}from"./playerId-le9PCq79.js"
import{c as j}from"./closestTr-7-El51TS.js"
import{g as L}from"./getId-f4M3YrQR.js"
import{g as G}from"./getCombat-9tt0EYUM.js"
const $=()=>a("td",e()).find(t("Message")),v=s=>b(s.href)
function M(s){s.className=""}function S(s){(function(s){const a=n(i,s).map(v).map(Number)
return a.length&&!a.some((s=>s===y()))})(s)&&(o(s.cells).forEach(M),s.classList.add("fshGrey"),s.classList.add("fshXSmall")),r(s.cells[2]).includes("requested")&&function(s){const a=v(s.children[0])
c(s,` [ <a href="${m}recruit&subcmd2=acceptjoin&id=${a}">Accept</a> | <a href="${m}recruit&subcmd2=denyjoin&id=${a}">Deny</a> ]`),d(s,(s=>{"Accept"===r(s.target)&&l("addGuildLogWidgets","Accept"),"Deny"===r(s.target)&&l("addGuildLogWidgets","Deny")}))}(s.cells[2])}function H(){s("hideNonPlayerGuildLogMessages")&&function(){const s=$()
if(!s)return
const a=g(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',h(a,3,0).forEach(S)}()}async function I(s){const a=j(s),e=await G(a,L(s)),t=e?.r?.combat?.items?.[0]?.n
t&&function(s,a,e){f(s.cells[2],p({innerHTML:`${u(a.id,a.name)}'s group looted the item '<span class="fshGreen">${e}</span>'`}))}(a,e.r.combat.attacker.group.players[0],t)}function T(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>r(s.previousSibling).includes("victorious"))).forEach(I)}export{H as a,T as g}
//# sourceMappingURL=guildGroupCombat-8V1peUoV.js.map
