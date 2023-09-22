import{a as n,E as t,F as s,g as e,a3 as a,r as i,j as r,al as c,n as o,$ as l,C as u,c as m,f as p}from"./calfSystem-4830a18d.js"
import{b as d,o as f,s as g}from"./now-6f22aec9.js"
import{g as b,s as h}from"./idb-7e56faaa.js"
import{p as w}from"./parseDateAsTimestamp-2956e520.js"
function C(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const _=n=>Number(i(/\/(?<id>\d+)/,n.getAttribute("background")))
function v(n,t){const s=new RegExp(`${t} = (\\d+)`)
return Number(i(s,n))}function k(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,s])=>[t,n.includes(s),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(o("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function j(n){return r("#specialsDiv",n).map(c).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(k)}function y(n,t){return{id:_(n.rows[1].cells[t]),name:c(n.rows[0].cells[t])}}function S(n,t){const s=t.children[0].rows[5].cells[0].children[0]
return{attacker:y(s,0),defender:y(s,2),id:Number(n),specials:j(t)}}function T(n){const t=a(n.children[1])
return{gold_gain:v(t,"goldGain"),gold_stolen:v(t,"goldStolen"),pvp_prestige_gain:v(t,"prestigeGain"),pvp_rating_change:v(t,"pvpRatingChange"),winner:v(t,"winner"),xp_gain:v(t,"xpGain")}}function x(n,t){return{...S(n,t),...T(t)}}async function G(n){const a=await function(n){return t({cmd:"combat",subcmd:"view",combat_id:n})}(n)
return function(n,t){const a=s(t)
return{r:{combat:x(n,e("pCC",a))},s:!0}}(n,a)}const N="fsh_pvpCombat"
let A=null,D=0
function E(n,[t,s]){return"lastCheck"===t||s.logTime&&s.logTime>n}async function P(){const n=await b(N)
return n?!n.lastCheck||n.lastCheck<f()?function(n){const t=u(n).filter(m(E,g())),s={...p(t),lastCheck:d()}
return h(N,s),s}(n):n:{lastCheck:d()}}async function R(n,t,s){const e=await(a=t,l(C,G,a))
var a
if(e?.s)return D||(D={...s}),D[t]={...e,logTime:w(c(n.cells[1]))/1e3},h(N,D),e}async function $(n,t){A||(A=P())
const s=await A
return s[t]?.logTime?s[t]:R(n,t,s)}export{$ as g}
//# sourceMappingURL=getCombat-dce41474.js.map
