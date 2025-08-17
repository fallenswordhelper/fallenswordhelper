import{az as s,a3 as a,aX as t,p as o,cB as e,bu as i,h as n,X as r,aT as c,bd as m,l as f,j as l,b1 as p,i as u,u as d,cH as g}from"./calfSystem-CT1aM4VG.js"
import{c as h}from"./closestTable-C24mp168.js"
import{a as b}from"./addLogColoring-lIHtJWbW.js"
import{g as j}from"./getId-CEBzpjjo.js"
import{g as L}from"./getLogTime-BmI9d81c.js"
import"./createStyle-BtTqlvMl.js"
import"./doBuffLinkClick-DAfdDNPF.js"
import"./parseDateAsTimestamp-B5Csql9l.js"
import"./dateUtc-Bgvvwji4.js"
const y=()=>a("td",o()).find(e("Message")),T=s=>c(s.href)
function G(s){s.className=""}function k(s){(function(s){const a=n(r,s).map(T).map(Number)
return a.length&&!a.some((s=>s===m()))})(s)&&(i(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function v(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',t(a,3,0).forEach(k)}()}async function H(s){const a=l(s),t=await p(L(a),j(s)),o=t?.r?.combat?.items?.[0]?.n
o&&function(s,a,t){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${t}</span>'`}))}(a,t.r.combat.attacker.group.players[0],o)}function M(){b("GuildLog",1,3),v(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter((s=>f(s.previousSibling).includes("victorious"))).forEach(H)}()}export{M as default}
//# sourceMappingURL=guildLog-QMoILKft.js.map
