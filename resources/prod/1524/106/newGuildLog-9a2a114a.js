import{a as t}from"./all-414e0607.js"
import{c as e}from"./createTable-462c7a16.js"
import{e as s,s as i}from"./selfIdIs-d4f625f7.js"
import{f as n}from"./functionPasses-d78c6fe2.js"
import{cG as o,G as a,g as c,c as d,cH as r,w as l,s as h,p as f,o as u,x as p,af as m,a6 as g,H as b,q as k,aQ as y,v as w,c4 as j,a5 as R,an as L}from"./calfSystem-076d7a01.js"
import{h as v}from"./hideElement-baffa60f.js"
import{r as G}from"./remainingPages-9b4c19bf.js"
import{t as N}from"./toggleForce-6124e333.js"
import{a as T,g as x}from"./guildGroupCombat-61130708.js"
import{a as I}from"./addLogColoring-7b865162.js"
import{g as P,s as H}from"./idb-807cd422.js"
import{p as S}from"./parseDateAsTimestamp-950daf66.js"
import"./closestTable-3ad39b1c.js"
import"./dataRows-85549af1.js"
import"./getPlayerId-118cd313.js"
import"./closestTr-efa2e666.js"
import"./getId-e4d83057.js"
import"./getCombat-ae9b05b4.js"
import"./now-6f22aec9.js"
import"./createStyle-817f1cf1.js"
import"./doBuffLinkClick-b25be848.js"
import"./openQuickBuffById-6facec14.js"
import"./fshOpen-c0e91392.js"
import"./dateUtc-ef343dff.js"
const C=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${o}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,A='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',E=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],O=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
function D(t){return a({cmd:"guild",subcmd:"log",page:t})}const F=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function M(t,e){return r(e)?t.includes(e):e.test(t)}function B(t,e){return e.some(d(M,t))}function U(t){const e=F.findIndex(d(B,t))
return-1===e?0:e}let $={},_=0,q=0,Q=0,z=0,J=0,K=0,V=0,W=[],X=!0,Y=0
function Z(t){J=b(t)
const e=k('input[name="page"]',J)
e&&function(t){K=Number(t.value)
const[e]=j(/\d+/,R(t.parentNode))
V=Number(e),1===K&&(z=Math.min(V,Q)),g(`Loading ${K} of ${z}...`,q)}(e)}function tt(t,e){return[()=>1===K,()=>$.log,()=>$.log[0],()=>$.log[0][0],()=>t===$.log[0][0],()=>e===$.log[0][2]].every(n)}function et(){const t=y("width_full",J)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=L(s.cells[1]),n=S(i),o=s.cells[2].innerHTML
if(tt(n,o)){X=!1
break}W.push([100*K+t,n,i,o,U(o)])}}(t)}function st(t){Z(t),et()}function it(t){W.push([0].concat(t))}function nt(){H("fsh_guildLog",$)}const ot=(t,e)=>e[1]!==t,at=t=>t.slice(1,5)
function ct(t,e){const s=t.insertCell(-1)
h(e,s),s.className="row"}function dt(t){!function(t){const e=Y.insertRow(-1)
t.push(e),$.checks[t[4]]||(e.className="fshHide"),ct(e,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),ct(e,`<nobr>${t[2]}</nobr>`),ct(e,t[3])}(t),function(t){const e=Y.insertRow(-1)
t.push(e),$.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function rt(t){t.checked=$.checks[t.getAttribute("item")]}function lt(){p("input",_).forEach(rt),nt()}const ht=(t,e)=>t[0]-e[0]
function ft(){X&&W.sort(ht),g("Loading complete.",q),$.log=W.filter(d(ot,(new Date).setSeconds(0,0))).map(at),nt(),f()&&function(){Y=e({id:"fshInjectHere",className:"width_full"}),w(Y,A),W.forEach(dt)
const t=c("fshInjectHere")
f().replaceChild(Y,t),I("myGuildLog",1,3),T(),x()}()}async function ut(e){st(e),await function(){let e=[]
return X?e=G(z,D).map((async t=>st(await t))):$.log.forEach(it),t(e)}(),ft()}function pt(t,e,s){s[4]===t&&(N(s[5],e),N(s[6],e))}function mt(t){const e=Number(t.getAttribute("item"))
$.checks[e]=!$.checks[e],nt(),W.forEach(d(pt,e,!$.checks[e]))}function gt(t){t?.classList?.remove("fshHide")}function bt(t){gt(t[5]),gt(t[6])}function kt(){$.checks=E.slice(0),lt(),W.forEach(bt)}function yt(t){v(t[5]),v(t[6])}function wt(){$.checks=O.slice(0),lt(),W.forEach(yt)}async function jt(){$.log=!1,nt(),g("Loading Page 1 ...",q),W=[],X=!0,h("",c("fshInjectHere"))
ut(await D(1))}function Rt(t){!function(t){$=t||$,$.checks=$.checks||E.slice(0)}(t),h(C,f()),_=c("fshNewGuildLog"),q=c("fshOutput"),u(_,s([[t=>"INPUT"===t.tagName,mt],[i("fshAll"),kt],[i("fshNone"),wt],[i("rfsh"),jt]])),lt(),Q=Number(m("newGuildLogHistoryPages")),z=Q,async function(){ut(await D(1))}()}async function Lt(){if(l())return
const t=P("fsh_guildLog")
!function(){const t=c("notification-guild-log")
v(t)}(),Rt(await t)}export{Lt as default}
//# sourceMappingURL=newGuildLog-9a2a114a.js.map
