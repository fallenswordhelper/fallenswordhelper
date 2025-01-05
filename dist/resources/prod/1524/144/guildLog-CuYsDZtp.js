import{ao as s,y as a,p as o,cw as t,bj as e,k as i,l as r,b0 as n,aH as m,ac as c,ai as f,i as l,m as p}from"./calfSystem-fMW-YMyF.js"
import{c as d}from"./closestTable-aoGd549m.js"
import{d as u}from"./dataRows-Bbhddtaj.js"
import{a as g}from"./addLogColoring-JH2-zi1t.js"
import{g as h}from"./getId-CEBzpjjo.js"
import{p as j}from"./playerLink-CepUpldK.js"
import{g as b}from"./getCombat-DJj4xxB_.js"
import{g as L}from"./getLogTime-BaC-FqWK.js"
import"./createStyle-2f8g7MV4.js"
import"./doBuffLinkClick-Boqps0wL.js"
import"./parseDateAsTimestamp-BT8FMLy_.js"
import"./dateUtc-B9VMjZ4H.js"
const y=()=>a("td",o()).find(t("Message")),G=s=>m(s.href)
function k(s){s.className=""}function C(s){(function(s){const a=i(r,s).map(G).map(Number)
return a.length&&!a.some((s=>s===n()))})(s)&&(e(s.cells).forEach(k),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function M(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=d(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',u(a,3,0).forEach(C)}()}async function T(s){const a=f(s),o=await b(L(a),h(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){l(s.cells[2],p({innerHTML:`${j(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function v(){g("GuildLog",1,3),M(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>c(s.previousSibling).includes("victorious"))).forEach(T)}()}export{v as default}
//# sourceMappingURL=guildLog-CuYsDZtp.js.map
