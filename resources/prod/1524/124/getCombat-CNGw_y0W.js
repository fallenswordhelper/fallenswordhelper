import{a as n,G as t,H as s,g as a,a8 as e,r as i,k as c,aq as r,s as o,$ as l,aO as u,aQ as p,C as d,f as m}from"./calfSystem-0LeC9ahe.js"
import{b as f,o as g,s as b}from"./now-Cx4PsKjI.js"
function w(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const h=n=>Number(i(/\/(?<id>\d+)/,n.getAttribute("background")))
function _(n,t){const s=new RegExp(`${t} = (\\d+)`)
return Number(i(s,n))}function v(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,s])=>[t,n.includes(s),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(o("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function C(n){return c("#specialsDiv",n).map(r).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(v)}function k(n,t){return{id:h(n.rows[1].cells[t]),name:r(n.rows[0].cells[t])}}function y(n,t){const s=t.children[0].rows[5].cells[0].children[0]
return{attacker:k(s,0),defender:k(s,2),id:Number(n),specials:C(t)}}function S(n){const t=e(n.children[1])
return{gold_gain:_(t,"goldGain"),gold_stolen:_(t,"goldStolen"),pvp_prestige_gain:_(t,"prestigeGain"),pvp_rating_change:_(t,"pvpRatingChange"),winner:_(t,"winner"),xp_gain:_(t,"xpGain")}}function x(n,t){return{...y(n,t),...S(t)}}async function G(n){const e=await function(n){return t({cmd:"combat",subcmd:"view",combat_id:n})}(n)
return function(n,t){const e=s(t)
return{r:{combat:x(n,a("pCC",e))},s:!0}}(n,e)}const N="fsh_pvpCombat"
let T=null,j=0
const P=n=>([t,s])=>"lastCheck"===t||s?.logTime>n
async function R(){const n=await u(N)
return j=n?(n?.lastCheck??0)<g()?function(n){const t=d(n).filter(P(b())),s={...m(t),lastCheck:f()}
return p(N,s),s}(n):n:{lastCheck:f()},j}async function $(n,t){const s=await(a=t,l(w,G,a))
var a
if(s?.s)return j[t]={...s,logTime:n},p(N,j),s}async function q(n,t){T||(T=R())
const s=await T
return s[t]?.logTime?s[t]:$(n,t)}export{q as g}
//# sourceMappingURL=getCombat-CNGw_y0W.js.map
