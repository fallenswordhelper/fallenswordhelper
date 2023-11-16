import{cF as t,E as e,g as s,c as i,cG as n,w as o,d as a,p as d,o as c,x as r,ad as l,s as h,a4 as f,F as u,q as p,aM as m,v as g,b$ as b,a3 as y,al as k}from"./calfSystem-dEoRVG2S.js"
import{a as w}from"./all-TTLWag-d.js"
import{c as j}from"./createTable-qmSwOKxD.js"
import{e as L,s as R}from"./selfIdIs-VfmAbLBT.js"
import{f as G}from"./functionPasses-EKTPXVtw.js"
import{h as N}from"./hideElement-RABq1RME.js"
import{r as v}from"./remainingPages-B8w0PByy.js"
import{t as T}from"./toggleForce-4Mg38a6N.js"
import{a as x,g as I}from"./guildGroupCombat-MkRjzT8r.js"
import{a as H}from"./addLogColoring-3rSWndpd.js"
import{g as P,s as S}from"./idb-ZfKvo_GP.js"
import{p as A}from"./parseDateAsTimestamp-lUxO2oUp.js"
import"./closestTable-XAvmC3jQ.js"
import"./dataRows-dUyoNosq.js"
import"./getPlayerId-vBbMBjik.js"
import"./playerId-GaX4qisZ.js"
import"./closestTr-gWCg9Nqr.js"
import"./getId-f4M3YrQR.js"
import"./getCombat-0t9TxIHr.js"
import"./now-pQzGw6vd.js"
import"./createStyle-wQDy0s8x.js"
import"./doBuffLinkClick-8gvw49uK.js"
import"./openQuickBuffById-i2DqxNd9.js"
import"./fshOpen-16hNCxKt.js"
import"./dateUtc-CUh9sCzN.js"
const C=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${t}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,E='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',F=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],M=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
function O(t){return e({cmd:"guild",subcmd:"log",page:t})}const D=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function $(t,e){return n(e)?t.includes(e):e.test(t)}function B(t,e){return e.some(i($,t))}function U(t){const e=D.findIndex(i(B,t))
return-1===e?0:e}let _={},q=0,X=0,z=0,J=0,K=0,Q=0,V=0,Y=[],W=!0,Z=0
function tt(t){K=u(t)
const e=p('input[name="page"]',K)
e&&function(t){Q=Number(t.value)
const[e]=b(/\d+/,y(t.parentNode))
V=Number(e),1===Q&&(J=Math.min(V,z)),f(`Loading ${Q} of ${J}...`,X)}(e)}function et(t,e){return[()=>1===Q,()=>t===_?.log?.[0]?.[0],()=>e===_?.log?.[0]?.[2]].every(G)}function st(){const t=m("width_full",K)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=k(s.cells[1]),n=A(i),o=s.cells[2].innerHTML
if(et(n,o)){W=!1
break}Y.push([100*Q+t,n,i,o,U(o)])}}(t)}function it(t){tt(t),st()}function nt(t){Y.push([0].concat(t))}function ot(){S("fsh_guildLog",_)}const at=(t,e)=>e[1]!==t,dt=t=>t.slice(1,5)
function ct(t,e){const s=t.insertCell(-1)
a(e,s),s.className="row"}function rt(t){!function(t){const e=Z.insertRow(-1)
t.push(e),_.checks[t[4]]||(e.className="fshHide"),ct(e,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),ct(e,`<nobr>${t[2]}</nobr>`),ct(e,t[3])}(t),function(t){const e=Z.insertRow(-1)
t.push(e),_.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function lt(t){t.checked=_.checks[t.getAttribute("item")]}function ht(){r("input",q).forEach(lt),ot()}const ft=(t,e)=>t[0]-e[0]
function ut(){W&&Y.sort(ft),f("Loading complete.",X),_.log=Y.filter(i(at,(new Date).setSeconds(0,0))).map(dt),ot(),d()&&function(){Z=j({id:"fshInjectHere",className:"width_full"}),g(Z,E),Y.forEach(rt)
const t=s("fshInjectHere")
d().replaceChild(Z,t),H("myGuildLog",1,3),x(),I()}()}async function pt(t){it(t),await function(){let t=[]
return W?t=v(J,O).map((async t=>it(await t))):_.log.forEach(nt),w(t)}(),ut()}function mt(t,e,s){s[4]===t&&(T(s[5],e),T(s[6],e))}function gt(t){h("newGuildLog","toggleItem")
const e=Number(t.getAttribute("item"))
_.checks[e]=!_.checks[e],ot(),Y.forEach(i(mt,e,!_.checks[e]))}function bt(t){t?.classList?.remove("fshHide")}function yt(t){bt(t[5]),bt(t[6])}function kt(t,e,s){h("newGuildLog",t),_.checks=e.slice(0),ht(),Y.forEach(s)}function wt(){kt("selectAll",F,yt)}function jt(t){N(t[5]),N(t[6])}function Lt(){kt("selectNone",M,jt)}async function Rt(){h("newGuildLog","refresh"),_.log=!1,ot(),f("Loading Page 1 ...",X),Y=[],W=!0,a("",s("fshInjectHere"))
pt(await O(1))}function Gt(t){!function(t){_=t||_,_.checks=_.checks||F.slice(0)}(t),a(C,d()),q=s("fshNewGuildLog"),X=s("fshOutput"),c(q,L([[t=>"INPUT"===t.tagName,gt],[R("fshAll"),wt],[R("fshNone"),Lt],[R("rfsh"),Rt]])),ht(),z=Number(l("newGuildLogHistoryPages")),J=z,async function(){pt(await O(1))}()}async function Nt(){if(o())return
const t=P("fsh_guildLog")
!function(){const t=s("notification-guild-log")
N(t)}(),Gt(await t)}export{Nt as default}
//# sourceMappingURL=newGuildLog-CeM4Xd62.js.map
