import{e,ai as n,E as t,aj as a,ak as s,F as r,i as o,al as i,H as c,x as l,u as f,t as u,v as m,z as d,C as p,S as h,$ as g,U as b,am as w,D as y,an as _,a9 as v,h as $,m as C,A as P,I as k,a5 as j,ao as L,Z as T,y as G}from"./calfSystem-ae2e69af.js"
import{i as S}from"./insertHtmlAfterEnd-f90eb1fc.js"
import{c as A}from"./currentGuildId-85358166.js"
import{g as E}from"./getMembrList-7af564d9.js"
import{c as x}from"./closestTr-eb55d944.js"
import{a as I}from"./addCommas-c0fbc0a2.js"
import{p as R}from"./parseDateAsTimestamp-b35c4088.js"
import{g as z,s as B}from"./idb-225659e6.js"
import{c as Y}from"./createStyle-0ae8d30d.js"
import{m as H}from"./myStats-76b40e27.js"
import{g as M}from"./addLogColoring-7fd58d60.js"
let N
async function D(t){return A()&&!N&&(N=async function(){return e(await E(!1)).filter((([,e])=>n(e))).map((([e])=>e))}()),(await N).includes(t)}const U=e=>[e,a(e.href,"target_username")],Z=async([e,n])=>[e,n,await D(n)]
function F(e,[n,t]){o(t.cells[1],`<font size="1"><br>[ ${((e,n)=>`<a${(e=>e?' class="pmIgnoreUrl"':"")(e)} href="${i}${c(n)}" data-tooltip="Add to Ignore List">Ignore</a>`)(e,n)} ]</font>`)}function W(e){return l({cmd:"combat",subcmd:"view",combat_id:e})}function X(e){return Number(e.getAttribute("background").match(/\/(\d+)/)[1])}function q(e,n){const t=new RegExp(`${n} = (\\d+)`)
return Number(e.match(t)[1])}const J=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function K(e){const n=J.map((([n,t])=>[n,e.match(t)])).find((([,e])=>e))
return n?{id:n[0],params:[n[1][1],n[1][2]]}:(h("Logs","Missing PvP Special",e),{id:-1,params:["-1","-1"]})}function O(e){return t("#specialsDiv",e).map(c).filter((e=>["leeched","Spell"].some((n=>e.includes(n))))).map(K)}function Q(e){return{id:X(e.rows[1].cells[0]),name:c(e.rows[0].cells[0])}}function V(e){return{id:X(e.rows[1].cells[2]),name:c(e.rows[0].cells[2])}}function ee(e,n){const t=n.children[0].rows[5].cells[0].children[0]
return{attacker:Q(t),defender:V(t),id:Number(e),specials:O(n)}}function ne(e){const n=p(e.children[1])
return{gold_gain:q(n,"goldGain"),gold_stolen:q(n,"goldStolen"),pvp_prestige_gain:q(n,"prestigeGain"),pvp_rating_change:q(n,"pvpRatingChange"),winner:q(n,"winner"),xp_gain:q(n,"xpGain")}}function te(e,n){return{...ee(e,n),...ne(n)}}function ae(e,n){const t=m(n)
return{r:te(e,d("pCC",t)),s:!0}}function se(e){return function(e){return f({cmd:"combat",subcmd:"view",combat_id:e})}(e).then(u(ae,e))}let re,oe
function ie(e,[n,t]){return"lastCheck"===n||t.logTime&&t.logTime>e}async function ce(){const n=await z("fsh_pvpCombat")
if(!n)return{lastCheck:b}
const t=b-86400
return!n.lastCheck||n.lastCheck<t?function(n){const t=b-604800,a=e(n).filter(u(ie,t)),s={...w(a),lastCheck:b}
return B("fsh_pvpCombat",s),s}(n):n}async function le(e,n,t){const a=await(s=n,g(W,se,s))
var s
if(a&&a.s)return oe||(oe={...t}),oe[n]={...a,logTime:R(c(e.cells[1]))/1e3},B("fsh_pvpCombat",oe),a}async function fe(e,n){re||(re=ce())
const t=await re
return t[n]&&t[n].logTime?t[n]:le(e,n,t)}const ue=e=>y(_,e),me=([,e])=>!/\(Guild Conflict\)/.test(e),de=async([e,n])=>[e,n,await fe(e,/combat_id=(\d+)/.exec(n)[1])]
function pe(e,n,t){return 0!==e?`${n}:<span class="${t}">${I(e)}</span> `:""}function he(e,n){return 18===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} leeched the buff '${n.params[1]}'.</span>`:21===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} was mesmerized by Spell Breaker, losing the '${n.params[1]}' buff.</span>`:e}function ge([e,n,t]){const[a,s]=function(e,n){return/You were victorious over/.test(n)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(n)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",p(e.cells[2].firstChild)]}(e,n),r=function(e,n){return pe(e.r.xp_gain,"XP stolen",n)+pe(e.r.gold_gain,"Gold lost",n)+pe(e.r.gold_stolen,"Gold stolen",n)+pe(e.r.pvp_prestige_gain,"Prestige gain",n)+pe(e.r.pvp_rating_change,"PvP change",n)+e.r.specials.reduce(he,"")}(t,a)
e.cells[2].firstChild.remove(),v(e.cells[2],s),$(e.cells[2],C({innerHTML:r}))}const be=([,,e])=>e&&e.s
const we=e=>e.username
let ye
async function _e(){const e=await H(!1)
return{_allies:e._allies.map(we),_enemies:e._enemies.map(we)}}async function ve(e){return ye||(ye=_e()),(await ye)._allies.includes(e)}async function $e(e){return ye||(ye=_e()),(await ye)._enemies.includes(e)}async function Ce(e){let n=""
const t=c(e),[a,s,r]=await Promise.all([D(t),ve(t),$e(t)])
return a?n="guild":s?n="ally":r&&(n="enemy"),[`.fshPlayerColoring tr:nth-of-type(${x(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function Pe(e,[n,t]){return e[t]?e[t].push(n):e[t]=[n],e}const ke={guild:"green",ally:"blue",enemy:"red"}
function je([e,n]){return`${n.join(", ")} { color: ${ke[e]}; }`}const Le=([,e])=>e
function Te(n,t,a){const s=function(n){return e(n.filter(Le).reduce(Pe,{})).map(je)}(t)
s.length&&(!function(e,n){const t=e.rows[0].cells[2]
t&&!n&&o(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(n,a),n.classList.add("fshPlayerColoring"),$(document.body,Y(s.join("\n"))))}let Ge
const Se=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Ae(e){return Se.test(p(e.cells[2]))}function Ee(e){const n=R(c(e.cells[1]))
n>Ge&&(T(j,n),Ge=n)}const xe=[["addIgnoreLink",function(e,n){const a=t(r,e)
if(0===a.length)return
a.map((e=>[e,x(e)])).forEach((e=>F(n,e)))}],["colorPlayerNames",async function(e,n){const a=t(r,e)
if(!a.length)return
Te(e,await Promise.all(a.map(Ce)),n)}],["addAttackLinkToLog",async function(e,n){const a=t('a[href*="=createsecure&"]',e)
if(!a.length)return
const r=a.map(U);(await Promise.all(r.map(Z))).filter((([,,e])=>!e)).forEach((e=>function(e,[n,t]){S(n,` | <a${(e=>e?' class="pmAttackUrl"':"")(e)} href="${s}${t}">Attack</a>`)}(n,e)))}],["changeButtonLabels",function(e){t('a[href*="=trade&"]',e).forEach((e=>P("Trade",e))),t('a[href*="=createsecure&"]',e).forEach((e=>P("ST",e)))}],["trackLadderReset",function(e){Ge=k(j),t(L,e).map(x).filter(Ae).forEach(Ee)}],["showPvPSummaryInLog",async function(e){const n=t('a[href*="&combat_id="]',e)
if(0===n.length)return;(await Promise.all(function(e){return e.map(x).filter(ue).map((e=>[e,e.cells[2].innerHTML])).filter(me).map(de)}(n))).filter(be).forEach(ge)}]]
function Ie(e,n,t){k(t[0])&&t[1](e,n)}function Re(e){if(G())return
const n=M()
n&&function(e,n){xe.forEach(u(Ie,e,n))}(n,e)}export{Re as a}
//# sourceMappingURL=addLogWidgets-ec8feea4.js.map
