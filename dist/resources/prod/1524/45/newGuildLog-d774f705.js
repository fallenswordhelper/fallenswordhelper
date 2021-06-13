import{a as t}from"./addGuildLogWidgets-6b940cf2.js"
import{a as e}from"./addLogColoring-343c9db5.js"
import{a as s}from"./all-47be5400.js"
import{u as i,t as n,bt as o,bu as a,y as d,B as c,p as r,o as h,g as l,A as f,z as u,I as p,v as m,D as g,C as b,M as k,i as y,H as w}from"./calfSystem-e1e858cd.js"
import{c as j}from"./createTable-b620f5da.js"
import{e as L}from"./eventHandler5-1ed2bff5.js"
import{f as R}from"./functionPasses-f44e4b46.js"
import{h as N}from"./hideElement-53ec58d4.js"
import{p as v}from"./parseDateAsTimestamp-c6154f90.js"
import{s as G}from"./selfIdIs-31e8bf4e.js"
import{t as x}from"./toggleForce-537064ea.js"
import{g as H,s as T}from"./idb-ef443609.js"
import"./dataRows-9acbc944.js"
import"./playerName-26e59290.js"
import"./searchPlayerHref-b138b5fd.js"
import"./createStyle-d08244a4.js"
import"./doBuffLinkClick-39dfc3dc.js"
import"./openQuickBuffByName-b48f21dd.js"
import"./fshOpen-d0a5bbc1.js"
function I(t){return i({cmd:"guild",subcmd:"log",page:t})}const P=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited ([,0-9]+) gold into the guild bank/,/deposited ([,0-9]+) Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled"],[/resulted in (.*) with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against the guild"],["bought the Titan Reward item","from your guild's contribution to the defeat of the titan","a 7 day cooldown has been activated on your guild for this titan"]]
function S(t,e){return o(e)?t.includes(e):e.test(t)}function A(t,e){return e.some(n(S,t))}function C(t){const e=P.findIndex(n(A,t))
return-1===e?0:e}const E=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${a}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,D=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],M=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
let O,B,F,$,_,z,U,q,Q={},V=[],W=!0
function Y(t,e){return[()=>1===z,()=>Q.log,()=>Q.log[0],()=>Q.log[0][0],()=>t===Q.log[0][0],()=>e===Q.log[0][2]].every(R)}function J(){const t=k("width_full",_)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=w(s.cells[1]),n=v(i),o=s.cells[2].innerHTML
if(Y(n,o)){W=!1
break}V.push([100*z+t,n,i,o,C(o)])}}(t)}function K(t){!function(t){_=m(t)
const e=g('input[name="page"]',_)
e&&(z=Number(e.value),U=Number(/\d+/.exec(b(e.parentNode))[0]),1===z&&($=Math.min(U,F)),f(`Loading ${z} of ${$}...`,B))}(t),J()}function X(t){V.push([0].concat(t))}function Z(){T("fsh_guildLog",Q)}function tt(t,e){return e[1]!==t}function et(t){return t.slice(1,5)}function st(t,e){const s=t.insertCell(-1)
c(e,s),s.className="row"}function it(t){!function(t){const e=q.insertRow(-1)
t.push(e),Q.checks[t[4]]||(e.className="fshHide"),st(e,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),st(e,`<nobr>${t[2]}</nobr>`),st(e,t[3])}(t),function(t){const e=q.insertRow(-1)
t.push(e),Q.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function nt(t){t.checked=Q.checks[t.getAttribute("item")]}function ot(){l("input",O).forEach(nt),Z()}function at(t,e){return t[0]-e[0]}function dt(){W&&V.sort(at),f("Loading complete.",B),Q.log=V.filter(n(tt,(new Date).setSeconds(0,0))).map(et),Z(),function(){q=j({id:"fshInjectHere",className:"width_full"}),y(q,'<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>'),V.forEach(it)
const s=u("fshInjectHere")
r.replaceChild(q,s),e("myGuildLog",1,3),t()}()}function ct(t){K(t),function(){const t=[]
if(W)for(let e=2;e<=$;e+=1)t.push(I(e).then(K))
else Q.log.forEach(X)
return s(t)}().then(dt)}function rt(t,e,s){s[4]===t&&(x(s[5],e),x(s[6],e))}function ht(t){const e=Number(t.getAttribute("item"))
Q.checks[e]=!Q.checks[e],Z(),V.forEach(n(rt,e,!Q.checks[e]))}function lt(t){t&&t.classList&&t.classList.remove("fshHide")}function ft(t){lt(t[5]),lt(t[6])}function ut(){Q.checks=D.slice(0),ot(),V.forEach(ft)}function pt(t){N(t[5]),N(t[6])}function mt(){Q.checks=M.slice(0),ot(),V.forEach(pt)}function gt(){Q.log=!1,Z(),f("Loading Page 1 ...",B),V=[],W=!0,c("",u("fshInjectHere")),I(1).then(ct)}function bt(t){!function(t){Q=t||Q,Q.checks=Q.checks||D.slice(0)}(t),c(E,r),O=u("fshNewGuildLog"),B=u("fshOutput"),h(O,L([[t=>"INPUT"===t.tagName,ht],[G("fshAll"),ut],[G("fshNone"),mt],[G("rfsh"),gt]])),ot(),F=Number(p("newGuildLogHistoryPages")),$=F,I(1).then(ct)}function kt(){d()||H("fsh_guildLog").then(bt)}export default kt
//# sourceMappingURL=newGuildLog-d774f705.js.map
