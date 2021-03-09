import{a as t}from"./addGuildLogWidgets-cc07328a.js"
import{a as e}from"./addLogColoring-d9dc5ea6.js"
import{a as s}from"./all-3246a95f.js"
import{u as i,t as n,bq as o,br as a,x as d,A as c,p as r,o as h,g as l,z as f,y as u,H as p,v as m,C as g,B as b,J as k,i as y,G as w}from"./calfSystem-c07e3259.js"
import{c as j}from"./createTable-b1dbea45.js"
import{e as L}from"./eventHandler5-b1b2b9da.js"
import{f as R}from"./functionPasses-055e6e36.js"
import{h as N}from"./hideElement-7b9c883f.js"
import{p as G}from"./parseDateAsTimestamp-63b9246e.js"
import{s as v}from"./selfIdIs-fb0a27a7.js"
import{t as x}from"./toggleForce-f376374b.js"
import{g as H,s as T}from"./idb-dd65ea6c.js"
import"./dataRows-fa734565.js"
import"./playerName-54b31a1f.js"
import"./searchPlayerHref-436e0355.js"
import"./createStyle-7a0bcb4f.js"
import"./doBuffLinkClick-6309bcd0.js"
import"./openQuickBuffByName-e650cf6c.js"
import"./fshOpen-49538a62.js"
function P(t){return i({cmd:"guild",subcmd:"log",page:t})}const I=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited ([,0-9]+) gold into the guild bank/,/deposited ([,0-9]+) Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled"],[/resulted in (.*) with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against the guild"],["bought the Titan Reward item","from your guild's contribution to the defeat of the titan","a 7 day cooldown has been activated on your guild for this titan"]]
function S(t,e){return o(e)?t.includes(e):e.test(t)}function A(t,e){return e.some(n(S,t))}function C(t){const e=I.findIndex(n(A,t))
return-1===e?0:e}const E=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${a}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,O=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],B=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
let D,M,F,$,_,q,z,U,J={},Q=[],V=!0
function W(t,e){return[()=>1===q,()=>J.log,()=>J.log[0],()=>J.log[0][0],()=>t===J.log[0][0],()=>e===J.log[0][2]].every(R)}function Y(){const t=k("width_full",_)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=w(s.cells[1]),n=G(i),o=s.cells[2].innerHTML
if(W(n,o)){V=!1
break}Q.push([100*q+t,n,i,o,C(o)])}}(t)}function K(t){!function(t){_=m(t)
const e=g('input[name="page"]',_)
e&&(q=Number(e.value),z=Number(/\d+/.exec(b(e.parentNode))[0]),1===q&&($=Math.min(z,F)),f(`Loading ${q} of ${$}...`,M))}(t),Y()}function X(t){Q.push([0].concat(t))}function Z(){T("fsh_guildLog",J)}function tt(t,e){return e[1]!==t}function et(t){return t.slice(1,5)}function st(t,e){const s=t.insertCell(-1)
c(e,s),s.className="row"}function it(t){!function(t){const e=U.insertRow(-1)
t.push(e),J.checks[t[4]]||(e.className="fshHide"),st(e,'<span class="newGuildLog"></span>'),st(e,`<nobr>${t[2]}</nobr>`),st(e,t[3])}(t),function(t){const e=U.insertRow(-1)
t.push(e),J.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function nt(t){t.checked=J.checks[t.getAttribute("item")]}function ot(){l("input",D).forEach(nt),Z()}function at(t,e){return t[0]-e[0]}function dt(){V&&Q.sort(at),f("Loading complete.",M),J.log=Q.filter(n(tt,(new Date).setSeconds(0,0))).map(et),Z(),function(){U=j({id:"fshInjectHere",className:"width_full"}),y(U,'<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>'),Q.forEach(it)
const s=u("fshInjectHere")
r.replaceChild(U,s),e("myGuildLog",1),t()}()}function ct(t){K(t),function(){const t=[]
if(V)for(let e=2;e<=$;e+=1)t.push(P(e).then(K))
else J.log.forEach(X)
return s(t)}().then(dt)}function rt(t,e,s){s[4]===t&&(x(s[5],e),x(s[6],e))}function ht(t){const e=Number(t.getAttribute("item"))
J.checks[e]=!J.checks[e],Z(),Q.forEach(n(rt,e,!J.checks[e]))}function lt(t){t&&t.classList&&t.classList.remove("fshHide")}function ft(t){lt(t[5]),lt(t[6])}function ut(){J.checks=O.slice(0),ot(),Q.forEach(ft)}function pt(t){N(t[5]),N(t[6])}function mt(){J.checks=B.slice(0),ot(),Q.forEach(pt)}function gt(){J.log=!1,Z(),f("Loading Page 1 ...",M),Q=[],V=!0,c("",u("fshInjectHere")),P(1).then(ct)}function bt(t){!function(t){J=t||J,J.checks=J.checks||O.slice(0)}(t),c(E,r),D=u("fshNewGuildLog"),M=u("fshOutput"),h(D,L([[t=>"INPUT"===t.tagName,ht],[v("fshAll"),ut],[v("fshNone"),mt],[v("rfsh"),gt]])),ot(),F=Number(p("newGuildLogHistoryPages")),$=F,P(1).then(ct)}function kt(){d()||H("fsh_guildLog").then(bt)}export default kt
//# sourceMappingURL=newGuildLog-65f84fb0.js.map
