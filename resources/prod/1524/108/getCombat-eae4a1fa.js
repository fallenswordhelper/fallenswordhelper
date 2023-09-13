import{a as n,G as t,H as e,g as s,a5 as a,r as i,j as r,an as c,n as o,$ as l,C as u,c as m,f as p}from"./calfSystem-34913441.js"
import{b as d,o as f,s as g}from"./now-6f22aec9.js"
import{g as b,s as h}from"./idb-ec5d6344.js"
import{p as w}from"./parseDateAsTimestamp-de53e2f8.js"
function C(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const _=n=>Number(i(/\/(?<id>\d+)/,n.getAttribute("background")))
function v(n,t){const e=new RegExp(`${t} = (\\d+)`)
return Number(i(e,n))}function k(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,e])=>[t,n.includes(e),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(o("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function j(n){return r("#specialsDiv",n).map(c).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(k)}function y(n,t){return{id:_(n.rows[1].cells[t]),name:c(n.rows[0].cells[t])}}function S(n,t){const e=t.children[0].rows[5].cells[0].children[0]
return{attacker:y(e,0),defender:y(e,2),id:Number(n),specials:j(t)}}function T(n){const t=a(n.children[1])
return{gold_gain:v(t,"goldGain"),gold_stolen:v(t,"goldStolen"),pvp_prestige_gain:v(t,"prestigeGain"),pvp_rating_change:v(t,"pvpRatingChange"),winner:v(t,"winner"),xp_gain:v(t,"xpGain")}}function x(n,t){return{...S(n,t),...T(t)}}async function G(n){const a=await function(n){return t({cmd:"combat",subcmd:"view",combat_id:n})}(n)
return function(n,t){const a=e(t)
return{r:{combat:x(n,s("pCC",a))},s:!0}}(n,a)}const N="fsh_pvpCombat"
let A=null,D=0
function P(n,[t,e]){return"lastCheck"===t||e.logTime&&e.logTime>n}async function R(){const n=await b(N)
return n?!n.lastCheck||n.lastCheck<f()?function(n){const t=u(n).filter(m(P,g())),e={...p(t),lastCheck:d()}
return h(N,e),e}(n):n:{lastCheck:d()}}async function $(n,t,e){const s=await(a=t,l(C,G,a))
var a
if(s&&s.s)return D||(D={...e}),D[t]={...s,logTime:w(c(n.cells[1]))/1e3},h(N,D),s}async function E(n,t){A||(A=R())
const e=await A
return e[t]&&e[t].logTime?e[t]:$(n,t,e)}export{E as g}
//# sourceMappingURL=getCombat-eae4a1fa.js.map
