import{cQ as t,G as e,g as s,c as i,cR as n,w as o,aO as a,d,p as c,o as r,x as l,ai as h,aQ as f,s as u,a9 as p,H as m,q as g,aU as b,v as k,c7 as y,a8 as w,aq as j}from"./calfSystem-G1dN925O.js"
import{a as L}from"./all-TTLWag-d.js"
import{c as R}from"./createTable-pGvXv4Gy.js"
import{e as G,s as N}from"./selfIdIs-htpkhmDE.js"
import{f as v}from"./functionPasses-EKTPXVtw.js"
import{h as T}from"./hideElement-RABq1RME.js"
import{r as x}from"./remainingPages-B8w0PByy.js"
import{t as I}from"./toggleForce-4Mg38a6N.js"
import{a as P,g as H}from"./guildGroupCombat-pdQqTYaV.js"
import{a as S}from"./addLogColoring-B-h0naQa.js"
import{p as A}from"./parseDateAsTimestamp-XLvjzemG.js"
import"./closestTable-Ggcgditt.js"
import"./dataRows-o1cWPBFh.js"
import"./getPlayerId-E_vX5Gmd.js"
import"./closestTr-ewZQ2axu.js"
import"./getId-f4M3YrQR.js"
import"./playerLink-5A3I_32p.js"
import"./getCombat-fqq7tGyf.js"
import"./now-pQzGw6vd.js"
import"./createStyle-kdSx2xlE.js"
import"./doBuffLinkClick-6tcvCVMK.js"
import"./openQuickBuffById-thDk1sOL.js"
import"./fshOpen-16hNCxKt.js"
import"./dateUtc-7iQbgp_T.js"
const C=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${t}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,O='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',E=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],M=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
function B(t){return e({cmd:"guild",subcmd:"log",page:t})}const D=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function F(t,e){return n(e)?t.includes(e):e.test(t)}function U(t,e){return e.some(i(F,t))}function $(t){const e=D.findIndex(i(U,t))
return-1===e?0:e}let _={},q=0,Q=0,z=0,J=0,V=0,Y=0,K=0,W=[],X=!0,Z=0
function tt(t){V=m(t)
const e=g('input[name="page"]',V)
e&&function(t){Y=Number(t.value)
const[e]=y(/\d+/,w(t.parentNode))
K=Number(e),1===Y&&(J=Math.min(K,z)),p(`Loading ${Y} of ${J}...`,Q)}(e)}function et(t,e){return[()=>1===Y,()=>t===_?.log?.[0]?.[0],()=>e===_?.log?.[0]?.[2]].every(v)}function st(){const t=b("width_full",V)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=j(s.cells[1]),n=A(i),o=s.cells[2].innerHTML
if(et(n,o)){X=!1
break}W.push([100*Y+t,n,i,o,$(o)])}}(t)}function it(t){tt(t),st()}function nt(t){W.push([0].concat(t))}function ot(){f("fsh_guildLog",_)}const at=(t,e)=>e[1]!==t,dt=t=>t.slice(1,5)
function ct(t,e){const s=t.insertCell(-1)
d(e,s),s.className="row"}function rt(t){!function(t){const e=Z.insertRow(-1)
t.push(e),_.checks[t[4]]||(e.className="fshHide"),ct(e,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),ct(e,`<nobr>${t[2]}</nobr>`),ct(e,t[3])}(t),function(t){const e=Z.insertRow(-1)
t.push(e),_.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function lt(t){t.checked=_.checks[t.getAttribute("item")]}function ht(){l("input",q).forEach(lt),ot()}const ft=(t,e)=>t[0]-e[0]
function ut(){X&&W.sort(ft),p("Loading complete.",Q),_.log=W.filter(i(at,(new Date).setSeconds(0,0))).map(dt),ot(),c()&&function(){Z=R({id:"fshInjectHere",className:"width_full"}),k(Z,O),W.forEach(rt)
const t=s("fshInjectHere")
c().replaceChild(Z,t),S("myGuildLog",1,3),P(),H()}()}async function pt(t){it(t),await function(){let t=[]
return X?t=x(J,B).map((async t=>it(await t))):_.log.forEach(nt),L(t)}(),ut()}function mt(t,e,s){s[4]===t&&(I(s[5],e),I(s[6],e))}function gt(t){u("newGuildLog","toggleItem")
const e=Number(t.getAttribute("item"))
_.checks[e]=!_.checks[e],ot(),W.forEach(i(mt,e,!_.checks[e]))}function bt(t){t?.classList?.remove("fshHide")}function kt(t){bt(t[5]),bt(t[6])}function yt(t,e,s){u("newGuildLog",t),_.checks=e.slice(0),ht(),W.forEach(s)}function wt(){yt("selectAll",E,kt)}function jt(t){T(t[5]),T(t[6])}function Lt(){yt("selectNone",M,jt)}async function Rt(){u("newGuildLog","refresh"),_.log=!1,ot(),p("Loading Page 1 ...",Q),W=[],X=!0,d("",s("fshInjectHere"))
pt(await B(1))}function Gt(t){!function(t){_=t||_,_.checks=_.checks||E.slice(0)}(t),d(C,c()),q=s("fshNewGuildLog"),Q=s("fshOutput"),r(q,G([[t=>"INPUT"===t.tagName,gt],[N("fshAll"),wt],[N("fshNone"),Lt],[N("rfsh"),Rt]])),ht(),z=Number(h("newGuildLogHistoryPages")),J=z,async function(){pt(await B(1))}()}async function Nt(){if(o())return
const t=a("fsh_guildLog")
!function(){const t=s("notification-guild-log")
T(t)}(),Gt(await t)}export{Nt as default}
//# sourceMappingURL=newGuildLog-pmyMRvO5.js.map
