import{e as n,ai as e,E as a,aj as t,ak as s,F as r,i as o,al as c,H as i,x as l,u as f,t as u,v as m,z as d,C as p,S as h,$ as g,U as w,am as b,D as y,an as _,a9 as v,h as $,m as C,A as P,I as k,a5 as j,ao as L,Z as T,y as G}from"./calfSystem-e1e858cd.js"
import{i as S}from"./insertHtmlAfterEnd-340cd3a2.js"
import{c as A}from"./currentGuildId-6f6caa9a.js"
import{g as E}from"./getMembrList-26ee9025.js"
import{c as x}from"./closestTr-1393a128.js"
import{a as I}from"./addCommas-c0fbc0a2.js"
import{p as R}from"./parseDateAsTimestamp-c6154f90.js"
import{g as z,s as B}from"./idb-ef443609.js"
import{c as Y}from"./createStyle-d08244a4.js"
import{m as H}from"./myStats-a8dc19ff.js"
import{g as M}from"./addLogColoring-343c9db5.js"
let N
async function D(a){return A()&&!N&&(N=async function(){return n(await E(!1)).filter((([,n])=>e(n))).map((([n])=>n))}()),(await N).includes(a)}const U=n=>[n,t(n.href,"target_username")],Z=async([n,e])=>[n,e,await D(e)]
function F(n,[e,a]){o(a.cells[1],`<font size="1"><br>[ ${((n,e)=>`<a${(n=>n?' class="pmIgnoreUrl"':"")(n)} href="${c}${i(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(n,e)} ]</font>`)}function W(n){return l({cmd:"combat",subcmd:"view",combat_id:n})}function X(n){return Number(n.getAttribute("background").match(/\/(\d+)/)[1])}function q(n,e){const a=new RegExp(`${e} = (\\d+)`)
return Number(n.match(a)[1])}const J=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function K(n){const e=J.map((([e,a])=>[e,n.match(a)])).find((([,n])=>n))
return e?{id:e[0],params:[e[1][1],e[1][2]]}:(h("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function O(n){return a("#specialsDiv",n).map(i).filter((n=>["leeched","Spell"].some((e=>n.includes(e))))).map(K)}function Q(n){return{id:X(n.rows[1].cells[0]),name:i(n.rows[0].cells[0])}}function V(n){return{id:X(n.rows[1].cells[2]),name:i(n.rows[0].cells[2])}}function nn(n,e){const a=e.children[0].rows[5].cells[0].children[0]
return{attacker:Q(a),defender:V(a),id:Number(n),specials:O(e)}}function en(n){const e=p(n.children[1])
return{gold_gain:q(e,"goldGain"),gold_stolen:q(e,"goldStolen"),pvp_prestige_gain:q(e,"prestigeGain"),pvp_rating_change:q(e,"pvpRatingChange"),winner:q(e,"winner"),xp_gain:q(e,"xpGain")}}function an(n,e){return{...nn(n,e),...en(e)}}function tn(n,e){const a=m(e)
return{r:an(n,d("pCC",a)),s:!0}}function sn(n){return function(n){return f({cmd:"combat",subcmd:"view",combat_id:n})}(n).then(u(tn,n))}let rn,on
function cn(n,[e,a]){return"lastCheck"===e||a.logTime&&a.logTime>n}async function ln(){const e=await z("fsh_pvpCombat")
if(!e)return{lastCheck:w}
const a=w-86400
return!e.lastCheck||e.lastCheck<a?function(e){const a=w-604800,t=n(e).filter(u(cn,a)),s={...b(t),lastCheck:w}
return B("fsh_pvpCombat",s),s}(e):e}async function fn(n,e,a){const t=await(s=e,g(W,sn,s))
var s
if(t&&t.s)return on||(on={...a}),on[e]={...t,logTime:R(i(n.cells[1]))/1e3},B("fsh_pvpCombat",on),t}async function un(n,e){rn||(rn=ln())
const a=await rn
return a[e]&&a[e].logTime?a[e]:fn(n,e,a)}const mn=n=>y(_,n),dn=([,n])=>!/\(Guild Conflict\)/.test(n),pn=async([n,e])=>[n,e,await un(n,/combat_id=(\d+)/.exec(e)[1])]
function hn(n,e,a){return 0!==n?`${e}:<span class="${a}">${I(n)}</span> `:""}function gn(n,e){return 18===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:21===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`:n}function wn([n,e,a]){const[t,s]=function(n,e){return/You were victorious over/.test(e)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(e)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",p(n.cells[2].firstChild)]}(n,e),r=function(n,e){return hn(n.r.xp_gain,"XP stolen",e)+hn(n.r.gold_gain,"Gold lost",e)+hn(n.r.gold_stolen,"Gold stolen",e)+hn(n.r.pvp_prestige_gain,"Prestige gain",e)+hn(n.r.pvp_rating_change,"PvP change",e)+n.r.specials.reduce(gn,"")}(a,t)
n.cells[2].firstChild.remove(),v(n.cells[2],s),$(n.cells[2],C({innerHTML:r}))}const bn=([,,n])=>n&&n.s
const yn=n=>n.username
let _n
async function vn(){const n=await H(!1)
return{_allies:n._allies.map(yn),_enemies:n._enemies.map(yn)}}async function $n(n){return _n||(_n=vn()),(await _n)._allies.includes(n)}async function Cn(n){return _n||(_n=vn()),(await _n)._enemies.includes(n)}async function Pn(n){let e=""
const a=i(n),[t,s,r]=await Promise.all([D(a),$n(a),Cn(a)])
return t?e="guild":s?e="ally":r&&(e="enemy"),[`.fshPlayerColoring tr:nth-of-type(${x(n).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function kn(n,[e,a]){return n[a]?n[a].push(e):n[a]=[e],n}const jn={guild:"green",ally:"blue",enemy:"red"}
function Ln([n,e]){return`${e.join(", ")} { color: ${jn[n]}; }`}const Tn=([,n])=>n
function Gn(e,a,t){const s=function(e){return n(e.filter(Tn).reduce(kn,{})).map(Ln)}(a)
s.length&&(!function(n,e){const a=n.rows[0].cells[2]
a&&!e&&o(a,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e,t),e.classList.add("fshPlayerColoring"),$(document.body,Y(s.join("\n"))))}let Sn
const An=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function En(n){return An.test(p(n.cells[2]))}function xn(n){const e=R(i(n.cells[1]))
e>Sn&&(T(j,e),Sn=e)}const In=[["addIgnoreLink",function(n,e){const t=a(r,n)
if(0===t.length)return
t.map((n=>[n,x(n)])).forEach((n=>F(e,n)))}],["colorPlayerNames",async function(n,e){const t=a(r,n)
if(!t.length)return
Gn(n,await Promise.all(t.map(Pn)),e)}],["addAttackLinkToLog",async function(n,e){const t=a('a[href*="=createsecure&"]',n)
if(!t.length)return
const r=t.map(U);(await Promise.all(r.map(Z))).filter((([,,n])=>!n)).forEach((n=>function(n,[e,a]){S(e,` | <a${(n=>n?' class="pmAttackUrl"':"")(n)} href="${s}${a}">Attack</a>`)}(e,n)))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).forEach((n=>P("Trade",n))),a('a[href*="=createsecure&"]',n).forEach((n=>P("ST",n)))}],["trackLadderReset",function(n){Sn=k(j),a(L,n).map(x).filter(En).forEach(xn)}],["showPvPSummaryInLog",async function(n){const e=a('a[href*="&combat_id="]',n)
if(0===e.length)return;(await Promise.all(function(n){return n.map(x).filter(mn).map((n=>[n,n.cells[2].innerHTML])).filter(dn).map(pn)}(e))).filter(bn).forEach(wn)}]]
function Rn(n,e,a){k(a[0])&&a[1](n,e)}function zn(n){if(G())return
const e=M()
e&&function(n,e){In.forEach(u(Rn,n,e))}(e,n)}export{zn as a}
//# sourceMappingURL=addLogWidgets-0722ef43.js.map
