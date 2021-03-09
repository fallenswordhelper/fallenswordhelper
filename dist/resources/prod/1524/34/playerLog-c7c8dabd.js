import{a as t}from"./addLogColoring-38762563.js"
import{e,ad as n,D as s,b9 as a,ba as o,E as r,C as i,z as c,bb as f,G as l,i as u,w as m,T as p,t as d,ay as h,bc as b,a8 as g,h as y,m as j,B as w,o as C,bd as P,H as _,M as v,a4 as $,be as k,Z as L,x as T}from"./calfSystem-793da633.js"
import{i as B}from"./insertHtmlAfterEnd-7508c2c1.js"
import{c as E}from"./currentGuildId-1aba3c9c.js"
import{g as x}from"./getMembrList-b3463327.js"
import{c as G}from"./closestTr-5dabd71f.js"
import{a as R}from"./addCommas-4b913655.js"
import{p as S}from"./parseDateAsTimestamp-b0577af9.js"
import{g as A,s as I}from"./idb-e7344221.js"
import{c as M}from"./createStyle-ebbd2c27.js"
import{m as Y}from"./myStats-613f3819.js"
import{b as D}from"./buffObj-3703b564.js"
import{c as H}from"./closestTd-8c09bafc.js"
import{c as N}from"./csvSplit-5e072bd9.js"
import{o as z}from"./openQuickBuffByName-074c8760.js"
import{t as O}from"./toLowerCase-82b2a5d7.js"
import"./dataRows-806eb955.js"
import"./doBuffLinkClick-6271554c.js"
import"./cmdExport-6a61d44d.js"
import"./indexAjaxJson-bfa28533.js"
import"./closest-f906514d.js"
import"./getProfile-b68e9095.js"
import"./playerName-5c267470.js"
import"./fshOpen-49538a62.js"
let Q
async function J(t){return E()&&!Q&&(Q=async function(){return e(await x(!1)).filter((([,t])=>n(t))).map((([t])=>t))}()),(await Q).includes(t)}const W=t=>[t,a(t.href,"target_username")],X=async([t,e])=>[t,e,await J(e)]
function Z([t,e]){B(t,` | <a href="${o}${e}">Attack</a>`)}function q(t){return`<a href="${f}${l(t)}" data-tooltip="Add to Ignore List">Ignore</a>`}function F([t,,e]){c("Report",e),B(e,` | ${q(t)}`)}function K([t,e]){u(e.cells[1].children[0],`<font size="1"><br>[ ${q(t)} ]</font>`)}function U(t){return function(t){return m({cmd:"combat",subcmd:"view",combat_id:t})}(t)}let V,tt
function et(t,[e,n]){return"lastCheck"===e||n.logTime&&n.logTime>t}async function nt(){const t=await A("fsh_pvpCombat")
if(!t)return{lastCheck:p}
const n=p-86400
return!t.lastCheck||t.lastCheck<n?function(t){const n=p-604800,s=e(t).filter(d(et,n)),a={...h(s),lastCheck:p}
return I("fsh_pvpCombat",a),a}(t):t}async function st(t,e){V||(V=nt())
const n=await V
return n[e]&&n[e].logTime?n[e]:async function(t,e,n){const s=await U(e)
if(s&&s.s)return tt||(tt={...n}),tt[e]={...s,logTime:S(l(t.cells[1]))/1e3},I("fsh_pvpCombat",tt),s}(t,e,n)}const at=t=>i(b,t),ot=([,t])=>!/\(Guild Conflict\)/.test(t),rt=async([t,e])=>[t,e,await st(t,/combat_id=(\d+)/.exec(e)[1])]
function it(t,e,n){return 0!==t?`${e}:<span class="${n}">${R(t)}</span> `:""}function ct(t,e){return 18===e.id?`${t}<br><span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:21===e.id?`${t}<br><span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`:t}function ft([t,e,n]){const[s,a]=function(t,e){return/You were victorious over/.test(e)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(e)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",w(t.cells[2].firstChild)]}(t,e),o=function(t,e){return it(t.r.xp_gain,"XP stolen",e)+it(t.r.gold_gain,"Gold lost",e)+it(t.r.gold_stolen,"Gold stolen",e)+it(t.r.pvp_prestige_gain,"Prestige gain",e)+it(t.r.pvp_rating_change,"PvP change",e)+t.r.specials.reduce(ct,"")}(n,s)
t.cells[2].firstChild.remove(),g(t.cells[2],a),y(t.cells[2],j({innerHTML:o}))}const lt=([,,t])=>t&&t.s
const ut=t=>t.username
let mt
async function pt(){const t=await Y(!1)
return{_allies:t._allies.map(ut),_enemies:t._enemies.map(ut)}}async function dt(t){return mt||(mt=pt()),(await mt)._allies.includes(t)}async function ht(t){return mt||(mt=pt()),(await mt)._enemies.includes(t)}async function bt(t){let e=""
const n=l(t),[s,a,o]=await Promise.all([J(n),dt(n),ht(n)])
return s?e="guild":a?e="ally":o&&(e="enemy"),[`.fshPlayerColoring tr:nth-of-type(${G(t).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function gt(t,[e,n]){return t[n]?t[n].push(e):t[n]=[e],t}const yt={guild:"green",ally:"blue",enemy:"red"}
function jt([t,e]){return`${e.join(", ")} { color: ${yt[t]}; }`}const wt=([,t])=>t
function Ct(t,n){const s=function(t){return e(t.filter(wt).reduce(gt,{})).map(jt)}(n)
s.length&&(!function(t){const e=t.rows[0].cells[2]
e&&u(e,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(t),t.classList.add("fshPlayerColoring"),y(document.body,M(s.join("\n"))))}const Pt=t=>(t=>v(H(t).childNodes))(t).map(l)
function _t(t,e){return(t=>i(P,G(t)))(t)&&("Buff"===e||"Reply"===e&&_("enableChatParsing"))}function vt(t){const e=D.find((e=>((t,e)=>N(e.nicks).includes(O(t)))(t,e)))
if(e)return e.id}function $t(t){const{target:e}=t,n=l(e)
_t(e,n)&&("Reply"===n&&(!function(t){const e=Pt(t).slice(0,2),n=e.join(" ")
let s=n
n.length>140&&(s=`${n.substring(0,140)}...`),window.openQuickMsgDialog(e[0],"",s)}(e),t.preventDefault()),"Buff"===n&&function(t,e){const[n,s]=Pt(e),a=/`~(.*)~`/.exec(s)
if(a){const e=N(a[1]).map(vt).filter((t=>t)).join(";")
z(n,e),t.preventDefault()}}(t,e))}let kt
const Lt=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Tt(t){return Lt.test(w(t.cells[2]))}function Bt(t){const e=S(l(t.cells[1]))
e>kt&&(L($,e),kt=e)}const Et=[["addIgnoreLink",function(t){const e=s(r,t)
if(0===e.length)return
const n=e.map((t=>[t,G(t)])).map((([t,e])=>[t,e,i('a[href*="reportMsg"]',e)]))
n.filter((([,,t])=>t)).forEach(F),n.filter((([,,t])=>!t)).forEach(K)}],["colorPlayerNames",async function(t){const e=s(r,t)
if(!e.length)return
Ct(t,await Promise.all(e.map(bt)))}],["addAttackLinkToLog",async function(t){const e=s('a[href*="=createsecure&"]',t)
if(!e.length)return
const n=e.map(W);(await Promise.all(n.map(X))).filter((([,,t])=>!t)).forEach(Z)}],["changeButtonLabels",function(t){s('a[href*="=trade&"]',t).forEach((t=>c("Trade",t))),s('a[href*="=createsecure&"]',t).forEach((t=>c("ST",t)))}],["trackLadderReset",function(t){kt=_($),s(k,t).map(G).filter(Tt).forEach(Bt)}],["showPvPSummaryInLog",async function(t){const e=s('a[href*="&combat_id="]',t)
if(0===e.length)return;(await Promise.all(function(t){return t.map(G).filter(at).map((t=>[t,t.cells[2].innerHTML])).filter(ot).map(rt)}(e))).filter(lt).forEach(ft)}]]
function xt(t,e){_(e[0])&&e[1](t)}function Gt(t){!function(t){C(t,$t)}(t),Et.forEach(d(xt,t))}function Rt(){t("PlayerLog",1),function(){if(T())return
const t=i("#pCC > table:last-of-type")
t&&Gt(t)}()}export default Rt
//# sourceMappingURL=playerLog-c7c8dabd.js.map
