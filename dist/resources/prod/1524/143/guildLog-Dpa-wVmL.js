import{ao as s,y as a,p as o,cw as t,bj as e,k as i,l as n,b0 as r,aH as m,ac as c,ai as f,i as l,m as p}from"./calfSystem-ChzN4Q-P.js"
import{c as d}from"./closestTable-DvVVJKGM.js"
import{d as u}from"./dataRows-wal17PRE.js"
import{a as g}from"./addLogColoring-D5BTISWt.js"
import{g as h}from"./getId-CEBzpjjo.js"
import{p as j}from"./playerLink-BbHjs098.js"
import{g as b}from"./getCombat-BhXjhpJK.js"
import{g as L}from"./getLogTime-D0I35t98.js"
import"./createStyle-DDJmETKK.js"
import"./doBuffLinkClick-DSYIGj9V.js"
import"./parseDateAsTimestamp-iO7Ig_Pa.js"
import"./dateUtc-BYrZxQ0M.js"
const y=()=>a("td",o()).find(t("Message")),k=s=>m(s.href)
function G(s){s.className=""}function M(s){(function(s){const a=i(n,s).map(k).map(Number)
return a.length&&!a.some((s=>s===r()))})(s)&&(e(s.cells).forEach(G),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function T(){s("hideNonPlayerGuildLogMessages")&&function(){const s=y()
if(!s)return
const a=d(s)
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',u(a,3,0).forEach(M)}()}async function v(s){const a=f(s),o=await b(L(a),h(s)),t=o?.r?.combat?.items?.[0]?.n
t&&function(s,a,o){l(s.cells[2],p({innerHTML:`${j(a.id,a.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}(a,o.r.combat.attacker.group.players[0],t)}function C(){g("GuildLog",1,3),T(),function(){if(!s("groupCombatItems"))return
i('a[href*="&combat_id="]').filter((s=>c(s.previousSibling).includes("victorious"))).forEach(v)}()}export{C as default}
//# sourceMappingURL=guildLog-Dpa-wVmL.js.map
