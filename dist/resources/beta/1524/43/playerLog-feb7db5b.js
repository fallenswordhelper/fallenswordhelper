import{a as n}from"./addLogColoring-504edae4.js"
import{e,ag as t,E as a,ah as s,ai as r,F as o,D as i,A as c,aj as f,H as l,i as u,x as m,u as p,t as d,v as h,z as g,C as b,T as w,$ as y,V as j,ak as _,al as v,aa as C,h as k,m as P,o as $,am as L,I as T,N as x,a6 as E,an as B,_ as G,y as R}from"./calfSystem-1d588248.js"
import{i as S}from"./insertHtmlAfterEnd-8414b2b7.js"
import{c as A}from"./currentGuildId-9fdd6aa9.js"
import{g as N}from"./getMembrList-87ba8bf3.js"
import{c as I}from"./closestTr-40749289.js"
import{a as z}from"./addCommas-5b74e836.js"
import{p as D}from"./parseDateAsTimestamp-a6762fb7.js"
import{g as M,s as Y}from"./idb-dfc3696a.js"
import{c as H}from"./createStyle-111f4346.js"
import{m as O}from"./myStats-a750d38a.js"
import{b as Q}from"./buffObj-b66afe66.js"
import{c as Z}from"./closestTd-bcb497bc.js"
import{c as F}from"./csvSplit-4a4cc559.js"
import{o as J}from"./openQuickBuffByName-f88cfb0a.js"
import{t as V}from"./toLowerCase-999f3196.js"
import"./dataRows-4965f55a.js"
import"./doBuffLinkClick-4908df75.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
import"./closest-bc1fafe7.js"
import"./getProfile-76213cf6.js"
import"./playerName-95f1f2a8.js"
import"./fshOpen-72d27290.js"
let W
async function X(n){return A()&&!W&&(W=async function(){return e(await N(!1)).filter((([,n])=>t(n))).map((([n])=>n))}()),(await W).includes(n)}const q=n=>[n,s(n.href,"target_username")],K=async([n,e])=>[n,e,await X(e)]
function U([n,e]){S(n,` | <a href="${r}${e}">Attack</a>`)}function nn(n){return`<a href="${f}${l(n)}" data-tooltip="Add to Ignore List">Ignore</a>`}function en([n,,e]){c("Report",e),S(e,` | ${nn(n)}`)}function tn([n,e]){u(e.cells[1].children[0],`<font size="1"><br>[ ${nn(n)} ]</font>`)}function an(n){return m({cmd:"combat",subcmd:"view",combat_id:n})}function sn(n){return Number(n.getAttribute("background").match(/\/(\d+)/)[1])}function rn(n,e){const t=new RegExp(`${e} = (\\d+)`)
return Number(n.match(t)[1])}const on=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function cn(n){const e=on.map((([e,t])=>[e,n.match(t)])).find((([,n])=>n))
return e?{id:e[0],params:[e[1][1],e[1][2]]}:(w("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function fn(n){return a("#specialsDiv",n).map(l).filter((n=>["leeched","Spell"].some((e=>n.includes(e))))).map(cn)}function ln(n){return{id:sn(n.rows[1].cells[0]),name:l(n.rows[0].cells[0])}}function un(n){return{id:sn(n.rows[1].cells[2]),name:l(n.rows[0].cells[2])}}function mn(n,e){const t=e.children[0].rows[5].cells[0].children[0]
return{attacker:ln(t),defender:un(t),id:Number(n),specials:fn(e)}}function pn(n){const e=b(n.children[1])
return{gold_gain:rn(e,"goldGain"),gold_stolen:rn(e,"goldStolen"),pvp_prestige_gain:rn(e,"prestigeGain"),pvp_rating_change:rn(e,"pvpRatingChange"),winner:rn(e,"winner"),xp_gain:rn(e,"xpGain")}}function dn(n,e){return{...mn(n,e),...pn(e)}}function hn(n,e){const t=h(e)
return{r:dn(n,g("pCC",t)),s:!0}}function gn(n){return function(n){return p({cmd:"combat",subcmd:"view",combat_id:n})}(n).then(d(hn,n))}let bn,wn
function yn(n,[e,t]){return"lastCheck"===e||t.logTime&&t.logTime>n}async function jn(){const n=await M("fsh_pvpCombat")
if(!n)return{lastCheck:j}
const t=j-86400
return!n.lastCheck||n.lastCheck<t?function(n){const t=j-604800,a=e(n).filter(d(yn,t)),s={..._(a),lastCheck:j}
return Y("fsh_pvpCombat",s),s}(n):n}async function _n(n,e,t){const a=await(s=e,y(an,gn,s))
var s
if(a&&a.s)return wn||(wn={...t}),wn[e]={...a,logTime:D(l(n.cells[1]))/1e3},Y("fsh_pvpCombat",wn),a}async function vn(n,e){bn||(bn=jn())
const t=await bn
return t[e]&&t[e].logTime?t[e]:_n(n,e,t)}const Cn=n=>i(v,n),kn=([,n])=>!/\(Guild Conflict\)/.test(n),Pn=async([n,e])=>[n,e,await vn(n,/combat_id=(\d+)/.exec(e)[1])]
function $n(n,e,t){return 0!==n?`${e}:<span class="${t}">${z(n)}</span> `:""}function Ln(n,e){return 18===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:21===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`:n}function Tn([n,e,t]){const[a,s]=function(n,e){return/You were victorious over/.test(e)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(e)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",b(n.cells[2].firstChild)]}(n,e),r=function(n,e){return $n(n.r.xp_gain,"XP stolen",e)+$n(n.r.gold_gain,"Gold lost",e)+$n(n.r.gold_stolen,"Gold stolen",e)+$n(n.r.pvp_prestige_gain,"Prestige gain",e)+$n(n.r.pvp_rating_change,"PvP change",e)+n.r.specials.reduce(Ln,"")}(t,a)
n.cells[2].firstChild.remove(),C(n.cells[2],s),k(n.cells[2],P({innerHTML:r}))}const xn=([,,n])=>n&&n.s
const En=n=>n.username
let Bn
async function Gn(){const n=await O(!1)
return{_allies:n._allies.map(En),_enemies:n._enemies.map(En)}}async function Rn(n){return Bn||(Bn=Gn()),(await Bn)._allies.includes(n)}async function Sn(n){return Bn||(Bn=Gn()),(await Bn)._enemies.includes(n)}async function An(n){let e=""
const t=l(n),[a,s,r]=await Promise.all([X(t),Rn(t),Sn(t)])
return a?e="guild":s?e="ally":r&&(e="enemy"),[`.fshPlayerColoring tr:nth-of-type(${I(n).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function Nn(n,[e,t]){return n[t]?n[t].push(e):n[t]=[e],n}const In={guild:"green",ally:"blue",enemy:"red"}
function zn([n,e]){return`${e.join(", ")} { color: ${In[n]}; }`}const Dn=([,n])=>n
function Mn(n,t){const a=function(n){return e(n.filter(Dn).reduce(Nn,{})).map(zn)}(t)
a.length&&(!function(n){const e=n.rows[0].cells[2]
e&&u(e,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(n),n.classList.add("fshPlayerColoring"),k(document.body,H(a.join("\n"))))}const Yn=n=>(n=>x(Z(n).childNodes))(n).map(l)
function Hn(n,e){return(n=>i(L,I(n)))(n)&&("Buff"===e||"Reply"===e&&T("enableChatParsing"))}function On(n){const e=Q.find((e=>((n,e)=>F(e.nicks).includes(V(n)))(n,e)))
if(e)return e.id}function Qn(n){const{target:e}=n,t=l(e)
Hn(e,t)&&("Reply"===t&&(!function(n){const e=Yn(n).slice(0,2),t=e.join(" ")
let a=t
t.length>140&&(a=`${t.substring(0,140)}...`),window.openQuickMsgDialog(e[0],"",a)}(e),n.preventDefault()),"Buff"===t&&function(n,e){const[t,a]=Yn(e),s=/`~(.*)~`/.exec(a)
if(s){const e=F(s[1]).map(On).filter((n=>n)).join(";")
J(t,e),n.preventDefault()}}(n,e))}let Zn
const Fn=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Jn(n){return Fn.test(b(n.cells[2]))}function Vn(n){const e=D(l(n.cells[1]))
e>Zn&&(G(E,e),Zn=e)}const Wn=[["addIgnoreLink",function(n){const e=a(o,n)
if(0===e.length)return
const t=e.map((n=>[n,I(n)])).map((([n,e])=>[n,e,i('a[href*="reportMsg"]',e)]))
t.filter((([,,n])=>n)).forEach(en),t.filter((([,,n])=>!n)).forEach(tn)}],["colorPlayerNames",async function(n){const e=a(o,n)
if(!e.length)return
Mn(n,await Promise.all(e.map(An)))}],["addAttackLinkToLog",async function(n){const e=a('a[href*="=createsecure&"]',n)
if(!e.length)return
const t=e.map(q);(await Promise.all(t.map(K))).filter((([,,n])=>!n)).forEach(U)}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).forEach((n=>c("Trade",n))),a('a[href*="=createsecure&"]',n).forEach((n=>c("ST",n)))}],["trackLadderReset",function(n){Zn=T(E),a(B,n).map(I).filter(Jn).forEach(Vn)}],["showPvPSummaryInLog",async function(n){const e=a('a[href*="&combat_id="]',n)
if(0===e.length)return;(await Promise.all(function(n){return n.map(I).filter(Cn).map((n=>[n,n.cells[2].innerHTML])).filter(kn).map(Pn)}(e))).filter(xn).forEach(Tn)}]]
function Xn(n,e){T(e[0])&&e[1](n)}function qn(n){!function(n){$(n,Qn)}(n),Wn.forEach(d(Xn,n))}function Kn(){n("PlayerLog",1,3),function(){if(R())return
const n=i("#pCC > table:last-of-type")
n&&qn(n)}()}export default Kn
//# sourceMappingURL=playerLog-feb7db5b.js.map
