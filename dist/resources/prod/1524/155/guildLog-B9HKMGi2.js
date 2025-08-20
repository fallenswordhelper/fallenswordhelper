import{az as s,a3 as a,aX as t,p as o,cD as e,bu as i,h as n,X as r,aT as c,bd as m,l,j as f,b1 as p,i as u,u as d,cJ as g}from"./calfSystem-UyQ_FKFu.js"
import{c as h}from"./closestTable-DwwUFwTi.js"
import{a as b}from"./addLogColoring-B20bmBIe.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{g as L}from"./getLogTime-BkXR0j6y.js"
import"./createStyle-BGl-LDQE.js"
import"./doBuffLinkClick-CrNehDqU.js"
import"./parseDateAsTimestamp-uKlPe52O.js"
import"./dateUtc-DP8sjtiR.js"
const y=s=>c(s.href)
function G(s){s.className=""}function T(s){(function(s){const a=n(r,s).map(y).map(Number)
return a.length&&!a.some(s=>s===m())})(s)&&(i(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function v(){const s=a("td",o()).find(e("Message"))
if(!s)return
const i=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',t(i,3,0).forEach(T)}async function C(s){const a=f(s),t=await p(L(a),j(s)),o=t?.r?.combat?.items?.[0]?.n
o&&function(s,a,t){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${t}</span>'`}))}(a,t.r.combat.attacker.group.players[0],o)}function M(){b("GuildLog",1,3),s("hideNonPlayerGuildLogMessages")&&v(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter(s=>l(s.previousSibling).includes("victorious")).forEach(C)}()}export{M as default}
//# sourceMappingURL=guildLog-B9HKMGi2.js.map
