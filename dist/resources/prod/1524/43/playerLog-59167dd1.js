import{a as e}from"./addLogColoring-66a33a9b.js"
import{e as n,ag as t,E as a,ah as s,ai as r,F as o,D as i,A as c,aj as f,H as l,i as u,x as m,u as p,t as d,v as h,z as g,C as b,T as w,$ as y,V as j,ak as _,al as v,aa as C,h as k,m as P,o as $,am as L,I as T,N as x,a6 as E,an as B,_ as G,y as R}from"./calfSystem-9942149b.js"
import{i as S}from"./insertHtmlAfterEnd-e5fb7af4.js"
import{c as A}from"./currentGuildId-71878d37.js"
import{g as N}from"./getMembrList-e6e94af7.js"
import{c as I}from"./closestTr-d871b75b.js"
import{a as z}from"./addCommas-5b74e836.js"
import{p as D}from"./parseDateAsTimestamp-214240ae.js"
import{g as M,s as Y}from"./idb-6116f2a7.js"
import{c as H}from"./createStyle-6a43018a.js"
import{m as O}from"./myStats-5331506c.js"
import{b as Q}from"./buffObj-b66afe66.js"
import{c as Z}from"./closestTd-b89e6776.js"
import{c as F}from"./csvSplit-4a4cc559.js"
import{o as J}from"./openQuickBuffByName-4f92c0f7.js"
import{t as V}from"./toLowerCase-999f3196.js"
import"./dataRows-60f8d94a.js"
import"./doBuffLinkClick-ab961b4c.js"
import"./cmdExport-ded2df3e.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./closest-bc1fafe7.js"
import"./getProfile-ccaddef4.js"
import"./playerName-b83afe17.js"
import"./fshOpen-72d27290.js"
let W
async function X(e){return A()&&!W&&(W=async function(){return n(await N(!1)).filter((([,e])=>t(e))).map((([e])=>e))}()),(await W).includes(e)}const q=e=>[e,s(e.href,"target_username")],K=async([e,n])=>[e,n,await X(n)]
function U([e,n]){S(e,` | <a href="${r}${n}">Attack</a>`)}function ee(e){return`<a href="${f}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`}function ne([e,,n]){c("Report",n),S(n,` | ${ee(e)}`)}function te([e,n]){u(n.cells[1].children[0],`<font size="1"><br>[ ${ee(e)} ]</font>`)}function ae(e){return m({cmd:"combat",subcmd:"view",combat_id:e})}function se(e){return Number(e.getAttribute("background").match(/\/(\d+)/)[1])}function re(e,n){const t=new RegExp(`${n} = (\\d+)`)
return Number(e.match(t)[1])}const oe=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function ie(e){const n=oe.map((([n,t])=>[n,e.match(t)])).find((([,e])=>e))
return n?{id:n[0],params:[n[1][1],n[1][2]]}:(w("Logs","Missing PvP Special",e),{id:-1,params:["-1","-1"]})}function ce(e){return a("#specialsDiv",e).map(l).filter((e=>["leeched","Spell"].some((n=>e.includes(n))))).map(ie)}function fe(e){return{id:se(e.rows[1].cells[0]),name:l(e.rows[0].cells[0])}}function le(e){return{id:se(e.rows[1].cells[2]),name:l(e.rows[0].cells[2])}}function ue(e,n){const t=n.children[0].rows[5].cells[0].children[0]
return{attacker:fe(t),defender:le(t),id:Number(e),specials:ce(n)}}function me(e){const n=b(e.children[1])
return{gold_gain:re(n,"goldGain"),gold_stolen:re(n,"goldStolen"),pvp_prestige_gain:re(n,"prestigeGain"),pvp_rating_change:re(n,"pvpRatingChange"),winner:re(n,"winner"),xp_gain:re(n,"xpGain")}}function pe(e,n){return{...ue(e,n),...me(n)}}function de(e,n){const t=h(n)
return{r:pe(e,g("pCC",t)),s:!0}}function he(e){return function(e){return p({cmd:"combat",subcmd:"view",combat_id:e})}(e).then(d(de,e))}let ge,be
function we(e,[n,t]){return"lastCheck"===n||t.logTime&&t.logTime>e}async function ye(){const e=await M("fsh_pvpCombat")
if(!e)return{lastCheck:j}
const t=j-86400
return!e.lastCheck||e.lastCheck<t?function(e){const t=j-604800,a=n(e).filter(d(we,t)),s={..._(a),lastCheck:j}
return Y("fsh_pvpCombat",s),s}(e):e}async function je(e,n,t){const a=await(s=n,y(ae,he,s))
var s
if(a&&a.s)return be||(be={...t}),be[n]={...a,logTime:D(l(e.cells[1]))/1e3},Y("fsh_pvpCombat",be),a}async function _e(e,n){ge||(ge=ye())
const t=await ge
return t[n]&&t[n].logTime?t[n]:je(e,n,t)}const ve=e=>i(v,e),Ce=([,e])=>!/\(Guild Conflict\)/.test(e),ke=async([e,n])=>[e,n,await _e(e,/combat_id=(\d+)/.exec(n)[1])]
function Pe(e,n,t){return 0!==e?`${n}:<span class="${t}">${z(e)}</span> `:""}function $e(e,n){return 18===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} leeched the buff '${n.params[1]}'.</span>`:21===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} was mesmerized by Spell Breaker, losing the '${n.params[1]}' buff.</span>`:e}function Le([e,n,t]){const[a,s]=function(e,n){return/You were victorious over/.test(n)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(n)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",b(e.cells[2].firstChild)]}(e,n),r=function(e,n){return Pe(e.r.xp_gain,"XP stolen",n)+Pe(e.r.gold_gain,"Gold lost",n)+Pe(e.r.gold_stolen,"Gold stolen",n)+Pe(e.r.pvp_prestige_gain,"Prestige gain",n)+Pe(e.r.pvp_rating_change,"PvP change",n)+e.r.specials.reduce($e,"")}(t,a)
e.cells[2].firstChild.remove(),C(e.cells[2],s),k(e.cells[2],P({innerHTML:r}))}const Te=([,,e])=>e&&e.s
const xe=e=>e.username
let Ee
async function Be(){const e=await O(!1)
return{_allies:e._allies.map(xe),_enemies:e._enemies.map(xe)}}async function Ge(e){return Ee||(Ee=Be()),(await Ee)._allies.includes(e)}async function Re(e){return Ee||(Ee=Be()),(await Ee)._enemies.includes(e)}async function Se(e){let n=""
const t=l(e),[a,s,r]=await Promise.all([X(t),Ge(t),Re(t)])
return a?n="guild":s?n="ally":r&&(n="enemy"),[`.fshPlayerColoring tr:nth-of-type(${I(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,n]}function Ae(e,[n,t]){return e[t]?e[t].push(n):e[t]=[n],e}const Ne={guild:"green",ally:"blue",enemy:"red"}
function Ie([e,n]){return`${n.join(", ")} { color: ${Ne[e]}; }`}const ze=([,e])=>e
function De(e,t){const a=function(e){return n(e.filter(ze).reduce(Ae,{})).map(Ie)}(t)
a.length&&(!function(e){const n=e.rows[0].cells[2]
n&&u(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e),e.classList.add("fshPlayerColoring"),k(document.body,H(a.join("\n"))))}const Me=e=>(e=>x(Z(e).childNodes))(e).map(l)
function Ye(e,n){return(e=>i(L,I(e)))(e)&&("Buff"===n||"Reply"===n&&T("enableChatParsing"))}function He(e){const n=Q.find((n=>((e,n)=>F(n.nicks).includes(V(e)))(e,n)))
if(n)return n.id}function Oe(e){const{target:n}=e,t=l(n)
Ye(n,t)&&("Reply"===t&&(!function(e){const n=Me(e).slice(0,2),t=n.join(" ")
let a=t
t.length>140&&(a=`${t.substring(0,140)}...`),window.openQuickMsgDialog(n[0],"",a)}(n),e.preventDefault()),"Buff"===t&&function(e,n){const[t,a]=Me(n),s=/`~(.*)~`/.exec(a)
if(s){const n=F(s[1]).map(He).filter((e=>e)).join(";")
J(t,n),e.preventDefault()}}(e,n))}let Qe
const Ze=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Fe(e){return Ze.test(b(e.cells[2]))}function Je(e){const n=D(l(e.cells[1]))
n>Qe&&(G(E,n),Qe=n)}const Ve=[["addIgnoreLink",function(e){const n=a(o,e)
if(0===n.length)return
const t=n.map((e=>[e,I(e)])).map((([e,n])=>[e,n,i('a[href*="reportMsg"]',n)]))
t.filter((([,,e])=>e)).forEach(ne),t.filter((([,,e])=>!e)).forEach(te)}],["colorPlayerNames",async function(e){const n=a(o,e)
if(!n.length)return
De(e,await Promise.all(n.map(Se)))}],["addAttackLinkToLog",async function(e){const n=a('a[href*="=createsecure&"]',e)
if(!n.length)return
const t=n.map(q);(await Promise.all(t.map(K))).filter((([,,e])=>!e)).forEach(U)}],["changeButtonLabels",function(e){a('a[href*="=trade&"]',e).forEach((e=>c("Trade",e))),a('a[href*="=createsecure&"]',e).forEach((e=>c("ST",e)))}],["trackLadderReset",function(e){Qe=T(E),a(B,e).map(I).filter(Fe).forEach(Je)}],["showPvPSummaryInLog",async function(e){const n=a('a[href*="&combat_id="]',e)
if(0===n.length)return;(await Promise.all(function(e){return e.map(I).filter(ve).map((e=>[e,e.cells[2].innerHTML])).filter(Ce).map(ke)}(n))).filter(Te).forEach(Le)}]]
function We(e,n){T(n[0])&&n[1](e)}function Xe(e){!function(e){$(e,Oe)}(e),Ve.forEach(d(We,e))}function qe(){e("PlayerLog",1,3),function(){if(R())return
const e=i("#pCC > table:last-of-type")
e&&Xe(e)}()}export default qe
//# sourceMappingURL=playerLog-59167dd1.js.map
