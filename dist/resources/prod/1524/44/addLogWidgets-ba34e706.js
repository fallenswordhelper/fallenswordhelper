import{e,ah as n,E as a,ai as t,aj as s,F as r,i as o,ak as i,H as c,x as l,u,t as f,v as m,z as d,C as p,S as h,$ as g,U as b,al as w,D as y,am as _,a9 as v,h as $,m as C,A as P,I as k,a5 as j,an as L,Z as T,y as G}from"./calfSystem-6ad077b7.js"
import{i as S}from"./insertHtmlAfterEnd-0792ac6e.js"
import{c as A}from"./currentGuildId-e0011880.js"
import{g as E}from"./getMembrList-c96ccda8.js"
import{c as x}from"./closestTr-49841bb4.js"
import{a as I}from"./addCommas-aab57e5e.js"
import{p as R}from"./parseDateAsTimestamp-512975e0.js"
import{g as z,s as B}from"./idb-9caca870.js"
import{c as Y}from"./createStyle-ed624664.js"
import{m as H}from"./myStats-1aebe4bb.js"
import{g as M}from"./addLogColoring-a20fbe88.js"
let N
async function D(a){return A()&&!N&&(N=async function(){return e(await E(!1)).filter((([,e])=>n(e))).map((([e])=>e))}()),(await N).includes(a)}const U=e=>[e,t(e.href,"target_username")],Z=async([e,n])=>[e,n,await D(n)]
function F(e,[n,a]){o(a.cells[1],`<font size="1"><br>[ ${((e,n)=>`<a${(e=>e?' class="pmIgnoreUrl"':"")(e)} href="${i}${c(n)}" data-tooltip="Add to Ignore List">Ignore</a>`)(e,n)} ]</font>`)}function W(e){return l({cmd:"combat",subcmd:"view",combat_id:e})}function X(e){return Number(e.getAttribute("background").match(/\/(\d+)/)[1])}function q(e,n){const a=new RegExp(`${n} = (\\d+)`)
return Number(e.match(a)[1])}const J=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function K(e){const n=J.map((([n,a])=>[n,e.match(a)])).find((([,e])=>e))
return n?{id:n[0],params:[n[1][1],n[1][2]]}:(h("Logs","Missing PvP Special",e),{id:-1,params:["-1","-1"]})}function O(e){return a("#specialsDiv",e).map(c).filter((e=>["leeched","Spell"].some((n=>e.includes(n))))).map(K)}function Q(e){return{id:X(e.rows[1].cells[0]),name:c(e.rows[0].cells[0])}}function V(e){return{id:X(e.rows[1].cells[2]),name:c(e.rows[0].cells[2])}}function ee(e,n){const a=n.children[0].rows[5].cells[0].children[0]
return{attacker:Q(a),defender:V(a),id:Number(e),specials:O(n)}}function ne(e){const n=p(e.children[1])
return{gold_gain:q(n,"goldGain"),gold_stolen:q(n,"goldStolen"),pvp_prestige_gain:q(n,"prestigeGain"),pvp_rating_change:q(n,"pvpRatingChange"),winner:q(n,"winner"),xp_gain:q(n,"xpGain")}}function ae(e,n){return{...ee(e,n),...ne(n)}}function te(e,n){const a=m(n)
return{r:ae(e,d("pCC",a)),s:!0}}function se(e){return function(e){return u({cmd:"combat",subcmd:"view",combat_id:e})}(e).then(f(te,e))}let re,oe
function ie(e,[n,a]){return"lastCheck"===n||a.logTime&&a.logTime>e}async function ce(){const n=await z("fsh_pvpCombat")
if(!n)return{lastCheck:b}
const a=b-86400
return!n.lastCheck||n.lastCheck<a?function(n){const a=b-604800,t=e(n).filter(f(ie,a)),s={...w(t),lastCheck:b}
return B("fsh_pvpCombat",s),s}(n):n}async function le(e,n,a){const t=await(s=n,g(W,se,s))
var s
if(t&&t.s)return oe||(oe={...a}),oe[n]={...t,logTime:R(c(e.cells[1]))/1e3},B("fsh_pvpCombat",oe),t}async function ue(e,n){re||(re=ce())
const a=await re
return a[n]&&a[n].logTime?a[n]:le(e,n,a)}const fe=e=>y(_,e),me=([,e])=>!/\(Guild Conflict\)/.test(e),de=async([e,n])=>[e,n,await ue(e,/combat_id=(\d+)/.exec(n)[1])]
function pe(e,n,a){return 0!==e?`${n}:<span class="${a}">${I(e)}</span> `:""}function he(e,n){return 18===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} leeched the buff '${n.params[1]}'.</span>`:21===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} was mesmerized by Spell Breaker, losing the '${n.params[1]}' buff.</span>`:e}function ge([e,n,a]){const[t,s]=function(e,n){return/You were victorious over/.test(n)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(n)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",p(e.cells[2].firstChild)]}(e,n),r=function(e,n){return pe(e.r.xp_gain,"XP stolen",n)+pe(e.r.gold_gain,"Gold lost",n)+pe(e.r.gold_stolen,"Gold stolen",n)+pe(e.r.pvp_prestige_gain,"Prestige gain",n)+pe(e.r.pvp_rating_change,"PvP change",n)+e.r.specials.reduce(he,"")}(a,t)
e.cells[2].firstChild.remove(),v(e.cells[2],s),$(e.cells[2],C({innerHTML:r}))}const be=([,,e])=>e&&e.s
const we=e=>e.username
let ye
async function _e(){const e=await H(!1)
return{_allies:e._allies.map(we),_enemies:e._enemies.map(we)}}async function ve(e){return ye||(ye=_e()),(await ye)._allies.includes(e)}async function $e(e){return ye||(ye=_e()),(await ye)._enemies.includes(e)}async function Ce(e){let n=""
const a=c(e),[t,s,r]=await Promise.all([D(a),ve(a),$e(a)])
return t?n="guild":s?n="ally":r&&(n="enemy"),[`.fshPlayerColoring tr:nth-of-type(${x(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function Pe(e,[n,a]){return e[a]?e[a].push(n):e[a]=[n],e}const ke={guild:"green",ally:"blue",enemy:"red"}
function je([e,n]){return`${n.join(", ")} { color: ${ke[e]}; }`}const Le=([,e])=>e
function Te(n,a,t){const s=function(n){return e(n.filter(Le).reduce(Pe,{})).map(je)}(a)
s.length&&(!function(e,n){const a=e.rows[0].cells[2]
a&&!n&&o(a,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(n,t),n.classList.add("fshPlayerColoring"),$(document.body,Y(s.join("\n"))))}let Ge
const Se=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Ae(e){return Se.test(p(e.cells[2]))}function Ee(e){const n=R(c(e.cells[1]))
n>Ge&&(T(j,n),Ge=n)}const xe=[["addIgnoreLink",function(e,n){const t=a(r,e)
if(0===t.length)return
t.map((e=>[e,x(e)])).forEach((e=>F(n,e)))}],["colorPlayerNames",async function(e,n){const t=a(r,e)
if(!t.length)return
Te(e,await Promise.all(t.map(Ce)),n)}],["addAttackLinkToLog",async function(e,n){const t=a('a[href*="=createsecure&"]',e)
if(!t.length)return
const r=t.map(U);(await Promise.all(r.map(Z))).filter((([,,e])=>!e)).forEach((e=>function(e,[n,a]){S(n,` | <a${(e=>e?' class="pmAttackUrl"':"")(e)} href="${s}${a}">Attack</a>`)}(n,e)))}],["changeButtonLabels",function(e){a('a[href*="=trade&"]',e).forEach((e=>P("Trade",e))),a('a[href*="=createsecure&"]',e).forEach((e=>P("ST",e)))}],["trackLadderReset",function(e){Ge=k(j),a(L,e).map(x).filter(Ae).forEach(Ee)}],["showPvPSummaryInLog",async function(e){const n=a('a[href*="&combat_id="]',e)
if(0===n.length)return;(await Promise.all(function(e){return e.map(x).filter(fe).map((e=>[e,e.cells[2].innerHTML])).filter(me).map(de)}(n))).filter(be).forEach(ge)}]]
function Ie(e,n,a){k(a[0])&&a[1](e,n)}function Re(e){if(G())return
const n=M()
n&&function(e,n){xe.forEach(f(Ie,e,n))}(n,e)}export{Re as a}
//# sourceMappingURL=addLogWidgets-ba34e706.js.map
