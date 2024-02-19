import{a as n,G as t,H as e,g as s,a8 as a,r as i,k as c,aq as r,s as o,$ as l,aO as u,aQ as m,C as p,c as d,f}from"./calfSystem-hszmVKJw.js"
import{b as g,o as b,s as h}from"./now-Cx4PsKjI.js"
import{p as w}from"./parseDateAsTimestamp-BSrGuAIU.js"
function C(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const _=n=>Number(i(/\/(?<id>\d+)/,n.getAttribute("background")))
function v(n,t){const e=new RegExp(`${t} = (\\d+)`)
return Number(i(e,n))}function k(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,e])=>[t,n.includes(e),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(o("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function y(n){return c("#specialsDiv",n).map(r).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(k)}function S(n,t){return{id:_(n.rows[1].cells[t]),name:r(n.rows[0].cells[t])}}function T(n,t){const e=t.children[0].rows[5].cells[0].children[0]
return{attacker:S(e,0),defender:S(e,2),id:Number(n),specials:y(t)}}function x(n){const t=a(n.children[1])
return{gold_gain:v(t,"goldGain"),gold_stolen:v(t,"goldStolen"),pvp_prestige_gain:v(t,"prestigeGain"),pvp_rating_change:v(t,"pvpRatingChange"),winner:v(t,"winner"),xp_gain:v(t,"xpGain")}}function G(n,t){return{...T(n,t),...x(t)}}async function j(n){const a=await function(n){return t({cmd:"combat",subcmd:"view",combat_id:n})}(n)
return function(n,t){const a=e(t)
return{r:{combat:G(n,s("pCC",a))},s:!0}}(n,a)}const N="fsh_pvpCombat"
let A=null,D=0
function P(n,[t,e]){return"lastCheck"===t||e.logTime&&e.logTime>n}async function R(){const n=await u(N)
return n?!n.lastCheck||n.lastCheck<b()?function(n){const t=p(n).filter(d(P,h())),e={...f(t),lastCheck:g()}
return m(N,e),e}(n):n:{lastCheck:g()}}async function $(n,t,e){const s=await(a=t,l(C,j,a))
var a
if(s?.s)return D||(D={...e}),D[t]={...s,logTime:w(r(n.cells[1]))/1e3},m(N,D),s}async function q(n,t){A||(A=R())
const e=await A
return e[t]?.logTime?e[t]:$(n,t,e)}export{q as g}
//# sourceMappingURL=getCombat-Cqsa8sof.js.map
