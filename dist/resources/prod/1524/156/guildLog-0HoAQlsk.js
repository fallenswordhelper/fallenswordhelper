import{aA as s,a4 as a,aY as o,p as e,cE as t,bv as i,h as n,Y as r,aU as c,be as m,l as f,j as l,b2 as p,i as u,u as d,cK as g}from"./calfSystem-79LsojAC.js"
import{c as h}from"./closestTable-BuyyntoH.js"
import{a as b}from"./addLogColoring-iTmZgx_R.js"
import{g as L}from"./getId-CEBzpjjo.js"
import{g as j}from"./getLogTime-C2qvq69p.js"
import"./createStyle-BdMrx8ah.js"
import"./doBuffLinkClick-BwOlpk8H.js"
import"./parseDateAsTimestamp-CfPUfnnR.js"
const y=s=>c(s.href)
function v(s){s.className=""}function E(s){(function(s){const a=n(r,s).map(y).map(Number)
return a.length&&!a.some(s=>s===m())})(s)&&(i(s.cells).forEach(v),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function G(){const s=a("td",e()).find(t("Message"))
if(!s)return
const i=h(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',o(i,3,0).forEach(E)}async function T(s){const a=l(s),o=await p(j(a),L(s)),e=o?.r?.combat?.items?.[0]?.n
e&&function(s,a,o){u(s.cells[2],d({innerHTML:`${g(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],e)}function k(){b("GuildLog",1,3),s("hideNonPlayerGuildLogMessages")&&G(),function(){if(!s("groupCombatItems"))return
n('a[href*="&combat_id="]').filter(s=>f(s.previousSibling).includes("victorious")).forEach(T)}()}export{k as default}
//# sourceMappingURL=guildLog-0HoAQlsk.js.map
