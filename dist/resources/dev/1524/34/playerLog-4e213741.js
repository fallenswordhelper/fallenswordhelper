import{a as e}from"./addLogColoring-d9dc5ea6.js"
import{e as t,ae as n,D as s,bc as a,bd as o,E as r,C as i,z as c,be as f,G as l,i as u,w as m,U as p,t as d,aB as h,bf as b,a9 as g,h as y,m as j,B as w,o as C,bg as _,H as P,M as v,a5 as $,bh as k,_ as L,x as T}from"./calfSystem-c07e3259.js"
import{i as B}from"./insertHtmlAfterEnd-3b1fe1ac.js"
import{c as E}from"./currentGuildId-0e53e6a7.js"
import{g as x}from"./getMembrList-1b7939f3.js"
import{c as G}from"./closestTr-51c4677a.js"
import{a as R}from"./addCommas-4b913655.js"
import{p as S}from"./parseDateAsTimestamp-63b9246e.js"
import{g as A,s as I}from"./idb-dd65ea6c.js"
import{c as M}from"./createStyle-7a0bcb4f.js"
import{m as Y}from"./myStats-ea8ed6db.js"
import{b as D}from"./buffObj-3703b564.js"
import{c as H}from"./closestTd-61af6bb5.js"
import{c as N}from"./csvSplit-5e072bd9.js"
import{o as z}from"./openQuickBuffByName-e650cf6c.js"
import{t as O}from"./toLowerCase-82b2a5d7.js"
import"./dataRows-fa734565.js"
import"./doBuffLinkClick-6309bcd0.js"
import"./cmdExport-73f6ff02.js"
import"./indexAjaxJson-18a12ea8.js"
import"./closest-f906514d.js"
import"./getProfile-c197091b.js"
import"./playerName-54b31a1f.js"
import"./fshOpen-49538a62.js"
let Q
async function J(e){return E()&&!Q&&(Q=async function(){return t(await x(!1)).filter((([,e])=>n(e))).map((([e])=>e))}()),(await Q).includes(e)}const U=e=>[e,a(e.href,"target_username")],W=async([e,t])=>[e,t,await J(t)]
function X([e,t]){B(e,` | <a href="${o}${t}">Attack</a>`)}function q(e){return`<a href="${f}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`}function F([e,,t]){c("Report",t),B(t,` | ${q(e)}`)}function K([e,t]){u(t.cells[1].children[0],`<font size="1"><br>[ ${q(e)} ]</font>`)}function V(e){return function(e){return m({cmd:"combat",subcmd:"view",combat_id:e})}(e)}let Z,ee
function te(e,[t,n]){return"lastCheck"===t||n.logTime&&n.logTime>e}async function ne(){const e=await A("fsh_pvpCombat")
if(!e)return{lastCheck:p}
const n=p-86400
return!e.lastCheck||e.lastCheck<n?function(e){const n=p-604800,s=t(e).filter(d(te,n)),a={...h(s),lastCheck:p}
return I("fsh_pvpCombat",a),a}(e):e}async function se(e,t){Z||(Z=ne())
const n=await Z
return n[t]&&n[t].logTime?n[t]:async function(e,t,n){const s=await V(t)
if(s&&s.s)return ee||(ee={...n}),ee[t]={...s,logTime:S(l(e.cells[1]))/1e3},I("fsh_pvpCombat",ee),s}(e,t,n)}const ae=e=>i(b,e),oe=([,e])=>!/\(Guild Conflict\)/.test(e),re=async([e,t])=>[e,t,await se(e,/combat_id=(\d+)/.exec(t)[1])]
function ie(e,t,n){return 0!==e?`${t}:<span class="${n}">${R(e)}</span> `:""}function ce(e,t){return 18===t.id?`${e}<br><span class="fshRed fshBold">${t.params[0]} leeched the buff '${t.params[1]}'.</span>`:21===t.id?`${e}<br><span class="fshRed fshBold">${t.params[0]} was mesmerized by Spell Breaker, losing the '${t.params[1]}' buff.</span>`:e}function fe([e,t,n]){const[s,a]=function(e,t){return/You were victorious over/.test(t)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(t)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",w(e.cells[2].firstChild)]}(e,t),o=function(e,t){return ie(e.r.xp_gain,"XP stolen",t)+ie(e.r.gold_gain,"Gold lost",t)+ie(e.r.gold_stolen,"Gold stolen",t)+ie(e.r.pvp_prestige_gain,"Prestige gain",t)+ie(e.r.pvp_rating_change,"PvP change",t)+e.r.specials.reduce(ce,"")}(n,s)
e.cells[2].firstChild.remove(),g(e.cells[2],a),y(e.cells[2],j({innerHTML:o}))}const le=([,,e])=>e&&e.s
const ue=e=>e.username
let me
async function pe(){const e=await Y(!1)
return{_allies:e._allies.map(ue),_enemies:e._enemies.map(ue)}}async function de(e){return me||(me=pe()),(await me)._allies.includes(e)}async function he(e){return me||(me=pe()),(await me)._enemies.includes(e)}async function be(e){let t=""
const n=l(e),[s,a,o]=await Promise.all([J(n),de(n),he(n)])
return s?t="guild":a?t="ally":o&&(t="enemy"),[`.fshPlayerColoring tr:nth-of-type(${G(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,t]}function ge(e,[t,n]){return e[n]?e[n].push(t):e[n]=[t],e}const ye={guild:"green",ally:"blue",enemy:"red"}
function je([e,t]){return`${t.join(", ")} { color: ${ye[e]}; }`}const we=([,e])=>e
function Ce(e,n){const s=function(e){return t(e.filter(we).reduce(ge,{})).map(je)}(n)
s.length&&(!function(e){const t=e.rows[0].cells[2]
t&&u(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e),e.classList.add("fshPlayerColoring"),y(document.body,M(s.join("\n"))))}const _e=e=>(e=>v(H(e).childNodes))(e).map(l)
function Pe(e,t){return(e=>i(_,G(e)))(e)&&("Buff"===t||"Reply"===t&&P("enableChatParsing"))}function ve(e){const t=D.find((t=>((e,t)=>N(t.nicks).includes(O(e)))(e,t)))
if(t)return t.id}function $e(e){const{target:t}=e,n=l(t)
Pe(t,n)&&("Reply"===n&&(!function(e){const t=_e(e).slice(0,2),n=t.join(" ")
let s=n
n.length>140&&(s=`${n.substring(0,140)}...`),window.openQuickMsgDialog(t[0],"",s)}(t),e.preventDefault()),"Buff"===n&&function(e,t){const[n,s]=_e(t),a=/`~(.*)~`/.exec(s)
if(a){const t=N(a[1]).map(ve).filter((e=>e)).join(";")
z(n,t),e.preventDefault()}}(e,t))}let ke
const Le=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Te(e){return Le.test(w(e.cells[2]))}function Be(e){const t=S(l(e.cells[1]))
t>ke&&(L($,t),ke=t)}const Ee=[["addIgnoreLink",function(e){const t=s(r,e)
if(0===t.length)return
const n=t.map((e=>[e,G(e)])).map((([e,t])=>[e,t,i('a[href*="reportMsg"]',t)]))
n.filter((([,,e])=>e)).forEach(F),n.filter((([,,e])=>!e)).forEach(K)}],["colorPlayerNames",async function(e){const t=s(r,e)
if(!t.length)return
Ce(e,await Promise.all(t.map(be)))}],["addAttackLinkToLog",async function(e){const t=s('a[href*="=createsecure&"]',e)
if(!t.length)return
const n=t.map(U);(await Promise.all(n.map(W))).filter((([,,e])=>!e)).forEach(X)}],["changeButtonLabels",function(e){s('a[href*="=trade&"]',e).forEach((e=>c("Trade",e))),s('a[href*="=createsecure&"]',e).forEach((e=>c("ST",e)))}],["trackLadderReset",function(e){ke=P($),s(k,e).map(G).filter(Te).forEach(Be)}],["showPvPSummaryInLog",async function(e){const t=s('a[href*="&combat_id="]',e)
if(0===t.length)return;(await Promise.all(function(e){return e.map(G).filter(ae).map((e=>[e,e.cells[2].innerHTML])).filter(oe).map(re)}(t))).filter(le).forEach(fe)}]]
function xe(e,t){P(t[0])&&t[1](e)}function Ge(e){!function(e){C(e,$e)}(e),Ee.forEach(d(xe,e))}function Re(){e("PlayerLog",1),function(){if(T())return
const e=i("#pCC > table:last-of-type")
e&&Ge(e)}()}export default Re
//# sourceMappingURL=playerLog-4e213741.js.map
