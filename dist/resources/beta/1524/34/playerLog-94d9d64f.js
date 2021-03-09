import{a as t}from"./addLogColoring-14811dca.js"
import{e,ad as n,D as a,bb as s,bc as o,E as r,C as i,z as c,bd as f,G as l,i as u,w as m,T as d,t as p,aA as h,be as b,a8 as g,h as y,m as j,B as w,o as C,bf as P,H as _,M as v,a4 as $,bg as k,Z as L,x as T}from"./calfSystem-dfa26790.js"
import{i as B}from"./insertHtmlAfterEnd-1adfe0ea.js"
import{c as E}from"./currentGuildId-8fb4e32d.js"
import{g as x}from"./getMembrList-f5a9f032.js"
import{c as G}from"./closestTr-d7616f33.js"
import{a as R}from"./addCommas-4b913655.js"
import{p as A}from"./parseDateAsTimestamp-5cae868a.js"
import{g as S,s as I}from"./idb-93f11a94.js"
import{c as M}from"./createStyle-bdad4a3a.js"
import{m as Y}from"./myStats-577a668b.js"
import{b as D}from"./buffObj-3703b564.js"
import{c as H}from"./closestTd-4f374c1d.js"
import{c as N}from"./csvSplit-5e072bd9.js"
import{o as z}from"./openQuickBuffByName-b13feb07.js"
import{t as O}from"./toLowerCase-82b2a5d7.js"
import"./dataRows-fbdbdd02.js"
import"./doBuffLinkClick-6adaeb27.js"
import"./cmdExport-b0c06830.js"
import"./indexAjaxJson-3825eadb.js"
import"./closest-f906514d.js"
import"./getProfile-097c83cc.js"
import"./playerName-b7be03d7.js"
import"./fshOpen-49538a62.js"
let Q
async function J(t){return E()&&!Q&&(Q=async function(){return e(await x(!1)).filter((([,t])=>n(t))).map((([t])=>t))}()),(await Q).includes(t)}const W=t=>[t,s(t.href,"target_username")],X=async([t,e])=>[t,e,await J(e)]
function Z([t,e]){B(t,` | <a href="${o}${e}">Attack</a>`)}function q(t){return`<a href="${f}${l(t)}" data-tooltip="Add to Ignore List">Ignore</a>`}function F([t,,e]){c("Report",e),B(e,` | ${q(t)}`)}function K([t,e]){u(e.cells[1].children[0],`<font size="1"><br>[ ${q(t)} ]</font>`)}function U(t){return function(t){return m({cmd:"combat",subcmd:"view",combat_id:t})}(t)}let V,tt
function et(t,[e,n]){return"lastCheck"===e||n.logTime&&n.logTime>t}async function nt(){const t=await S("fsh_pvpCombat")
if(!t)return{lastCheck:d}
const n=d-86400
return!t.lastCheck||t.lastCheck<n?function(t){const n=d-604800,a=e(t).filter(p(et,n)),s={...h(a),lastCheck:d}
return I("fsh_pvpCombat",s),s}(t):t}async function at(t,e){V||(V=nt())
const n=await V
return n[e]&&n[e].logTime?n[e]:async function(t,e,n){const a=await U(e)
if(a&&a.s)return tt||(tt={...n}),tt[e]={...a,logTime:A(l(t.cells[1]))/1e3},I("fsh_pvpCombat",tt),a}(t,e,n)}const st=t=>i(b,t),ot=([,t])=>!/\(Guild Conflict\)/.test(t),rt=async([t,e])=>[t,e,await at(t,/combat_id=(\d+)/.exec(e)[1])]
function it(t,e,n){return 0!==t?`${e}:<span class="${n}">${R(t)}</span> `:""}function ct(t,e){return 18===e.id?`${t}<br><span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:21===e.id?`${t}<br><span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`:t}function ft([t,e,n]){const[a,s]=function(t,e){return/You were victorious over/.test(e)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(e)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",w(t.cells[2].firstChild)]}(t,e),o=function(t,e){return it(t.r.xp_gain,"XP stolen",e)+it(t.r.gold_gain,"Gold lost",e)+it(t.r.gold_stolen,"Gold stolen",e)+it(t.r.pvp_prestige_gain,"Prestige gain",e)+it(t.r.pvp_rating_change,"PvP change",e)+t.r.specials.reduce(ct,"")}(n,a)
t.cells[2].firstChild.remove(),g(t.cells[2],s),y(t.cells[2],j({innerHTML:o}))}const lt=([,,t])=>t&&t.s
const ut=t=>t.username
let mt
async function dt(){const t=await Y(!1)
return{_allies:t._allies.map(ut),_enemies:t._enemies.map(ut)}}async function pt(t){return mt||(mt=dt()),(await mt)._allies.includes(t)}async function ht(t){return mt||(mt=dt()),(await mt)._enemies.includes(t)}async function bt(t){let e=""
const n=l(t),[a,s,o]=await Promise.all([J(n),pt(n),ht(n)])
return a?e="guild":s?e="ally":o&&(e="enemy"),[`.fshPlayerColoring tr:nth-of-type(${G(t).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function gt(t,[e,n]){return t[n]?t[n].push(e):t[n]=[e],t}const yt={guild:"green",ally:"blue",enemy:"red"}
function jt([t,e]){return`${e.join(", ")} { color: ${yt[t]}; }`}const wt=([,t])=>t
function Ct(t,n){const a=function(t){return e(t.filter(wt).reduce(gt,{})).map(jt)}(n)
a.length&&(!function(t){const e=t.rows[0].cells[2]
e&&u(e,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(t),t.classList.add("fshPlayerColoring"),y(document.body,M(a.join("\n"))))}const Pt=t=>(t=>v(H(t).childNodes))(t).map(l)
function _t(t,e){return(t=>i(P,G(t)))(t)&&("Buff"===e||"Reply"===e&&_("enableChatParsing"))}function vt(t){const e=D.find((e=>((t,e)=>N(e.nicks).includes(O(t)))(t,e)))
if(e)return e.id}function $t(t){const{target:e}=t,n=l(e)
_t(e,n)&&("Reply"===n&&(!function(t){const e=Pt(t).slice(0,2),n=e.join(" ")
let a=n
n.length>140&&(a=`${n.substring(0,140)}...`),window.openQuickMsgDialog(e[0],"",a)}(e),t.preventDefault()),"Buff"===n&&function(t,e){const[n,a]=Pt(e),s=/`~(.*)~`/.exec(a)
if(s){const e=N(s[1]).map(vt).filter((t=>t)).join(";")
z(n,e),t.preventDefault()}}(t,e))}let kt
const Lt=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Tt(t){return Lt.test(w(t.cells[2]))}function Bt(t){const e=A(l(t.cells[1]))
e>kt&&(L($,e),kt=e)}const Et=[["addIgnoreLink",function(t){const e=a(r,t)
if(0===e.length)return
const n=e.map((t=>[t,G(t)])).map((([t,e])=>[t,e,i('a[href*="reportMsg"]',e)]))
n.filter((([,,t])=>t)).forEach(F),n.filter((([,,t])=>!t)).forEach(K)}],["colorPlayerNames",async function(t){const e=a(r,t)
if(!e.length)return
Ct(t,await Promise.all(e.map(bt)))}],["addAttackLinkToLog",async function(t){const e=a('a[href*="=createsecure&"]',t)
if(!e.length)return
const n=e.map(W);(await Promise.all(n.map(X))).filter((([,,t])=>!t)).forEach(Z)}],["changeButtonLabels",function(t){a('a[href*="=trade&"]',t).forEach((t=>c("Trade",t))),a('a[href*="=createsecure&"]',t).forEach((t=>c("ST",t)))}],["trackLadderReset",function(t){kt=_($),a(k,t).map(G).filter(Tt).forEach(Bt)}],["showPvPSummaryInLog",async function(t){const e=a('a[href*="&combat_id="]',t)
if(0===e.length)return;(await Promise.all(function(t){return t.map(G).filter(st).map((t=>[t,t.cells[2].innerHTML])).filter(ot).map(rt)}(e))).filter(lt).forEach(ft)}]]
function xt(t,e){_(e[0])&&e[1](t)}function Gt(t){!function(t){C(t,$t)}(t),Et.forEach(p(xt,t))}function Rt(){t("PlayerLog",1),function(){if(T())return
const t=i("#pCC > table:last-of-type")
t&&Gt(t)}()}export default Rt
//# sourceMappingURL=playerLog-94d9d64f.js.map
