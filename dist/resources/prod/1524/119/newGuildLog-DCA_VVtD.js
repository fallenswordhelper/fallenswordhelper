import{cQ as t,G as e,g as s,c as i,cR as n,w as o,p as a,aO as d,d as c,o as r,x as l,ai as h,aQ as f,s as u,a9 as p,H as m,q as g,aU as b,v as k,c7 as y,a8 as w,aq as j}from"./calfSystem-Bit7wh4p.js"
import{a as L}from"./all-YfMtr2SN.js"
import{c as R}from"./createTable-BIZt1kav.js"
import{e as G,s as N}from"./selfIdIs-b2PKHhPf.js"
import{f as v}from"./functionPasses-BXOT6NCP.js"
import{h as T}from"./hideElement--vKgDzDU.js"
import{r as x}from"./remainingPages-BzskAxSU.js"
import{t as I}from"./toggleForce-br4z9gGd.js"
import{a as P,g as H}from"./guildGroupCombat-DDzEmWBv.js"
import{a as C}from"./addLogColoring-OgdERuhn.js"
import{p as S}from"./parseDateAsTimestamp-kUurZoP3.js"
import"./closestTable-CmNjL45D.js"
import"./dataRows-B3xlTlPD.js"
import"./getPlayerId-kZSkwpWB.js"
import"./closestTr-7PFr_dNI.js"
import"./getId-CEBzpjjo.js"
import"./playerLink-D65DtSiY.js"
import"./getCombat-BU1mK6YL.js"
import"./now-Cx4PsKjI.js"
import"./createStyle-DpQOQW1V.js"
import"./doBuffLinkClick-CtY8mtYc.js"
import"./openQuickBuffById-CejqyxyX.js"
import"./fshOpen-AuKioUPF.js"
import"./dateUtc-9OoIRwDB.js"
const A=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${t}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,O='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',E=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],D=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
function F(t){return e({cmd:"guild",subcmd:"log",page:t})}const M=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function U(t,e){return n(e)?t.includes(e):e.test(t)}function $(t,e){return e.some(i(U,t))}function B(t){const e=M.findIndex(i($,t))
return-1===e?0:e}let Q={},_=0,q=0,z=0,K=0,V=0,W=0,Y=0,J=[],X=!0,Z=0
function tt(t){V=m(t)
const e=g('input[name="page"]',V)
e&&function(t){W=Number(t.value)
const[e]=y(/\d+/,w(t.parentNode))
Y=Number(e),1===W&&(K=Math.min(Y,z)),p(`Loading ${W} of ${K}...`,q)}(e)}function et(t,e){return[()=>1===W,()=>t===Q?.log?.[0]?.[0],()=>e===Q?.log?.[0]?.[2]].every(v)}function st(){const t=b("width_full",V)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=j(s.cells[1]),n=S(i),o=s.cells[2].innerHTML
if(et(n,o)){X=!1
break}J.push([100*W+t,n,i,o,B(o)])}}(t)}function it(t){tt(t),st()}function nt(t){J.push([0].concat(t))}function ot(){f("fsh_guildLog",Q)}const at=(t,e)=>e[1]!==t,dt=t=>t.slice(1,5)
function ct(t,e){const s=t.insertCell(-1)
c(e,s),s.className="row"}function rt(t){!function(t){const e=Z.insertRow(-1)
t.push(e),Q.checks[t[4]]||(e.className="fshHide"),ct(e,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),ct(e,`<nobr>${t[2]}</nobr>`),ct(e,t[3])}(t),function(t){const e=Z.insertRow(-1)
t.push(e),Q.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function lt(t){t.checked=Q.checks[t.getAttribute("item")]}function ht(){l("input",_).forEach(lt),ot()}const ft=(t,e)=>t[0]-e[0]
function ut(){X&&J.sort(ft),p("Loading complete.",q),Q.log=J.filter(i(at,(new Date).setSeconds(0,0))).map(dt),ot(),function(){Z=R({id:"fshInjectHere",className:"width_full"}),k(Z,O),J.forEach(rt)
const t=s("fshInjectHere")
t&&(a().replaceChild(Z,t),C("myGuildLog",1,3),P(),H())}()}async function pt(t){it(t),await function(){let t=[]
return X?t=x(K,F).map((async t=>it(await t))):Q.log.forEach(nt),L(t)}(),ut()}function mt(t,e,s){s[4]===t&&(I(s[5],e),I(s[6],e))}function gt(t){u("newGuildLog","toggleItem")
const e=Number(t.getAttribute("item"))
Q.checks[e]=!Q.checks[e],ot(),J.forEach(i(mt,e,!Q.checks[e]))}function bt(t){t?.classList?.remove("fshHide")}function kt(t){bt(t[5]),bt(t[6])}function yt(t,e,s){u("newGuildLog",t),Q.checks=e.slice(0),ht(),J.forEach(s)}function wt(){yt("selectAll",E,kt)}function jt(t){T(t[5]),T(t[6])}function Lt(){yt("selectNone",D,jt)}async function Rt(){u("newGuildLog","refresh"),Q.log=!1,ot(),p("Loading Page 1 ...",q),J=[],X=!0,c("",s("fshInjectHere"))
pt(await F(1))}function Gt(t){!function(t){Q=t||Q,Q.checks=Q.checks||E.slice(0)}(t),c(A,a()),_=s("fshNewGuildLog"),q=s("fshOutput"),r(_,G([[t=>"INPUT"===t.tagName,gt],[N("fshAll"),wt],[N("fshNone"),Lt],[N("rfsh"),Rt]])),ht(),z=Number(h("newGuildLogHistoryPages")),K=z,async function(){pt(await F(1))}()}async function Nt(){if(o()||!a())return
const t=d("fsh_guildLog")
!function(){const t=s("notification-guild-log")
T(t)}(),Gt(await t)}export{Nt as default}
//# sourceMappingURL=newGuildLog-DCA_VVtD.js.map
