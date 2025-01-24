import{a as n,J as t,K as e,g as s,ac as a,r as c,k as i,aF as r,s as o,$ as l,b6 as u,ce as d,cS as p,b8 as m,E as f,bW as g,f as b}from"./calfSystem-CvwhhJv4.js"
function h(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const w=n=>Number(c(/\/(?<id>\d+)/,n.getAttribute("background")))
function _(n,t){const e=new RegExp(`${t} = (\\d+)`)
return Number(c(e,n))}function v(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,e])=>[t,n.includes(e),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(o("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function C(n){return i("#specialsDiv",n).map(r).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(v)}function k(n,t){return{id:w(n.rows[1].cells[t]),name:r(n.rows[0].cells[t])}}function S(n,t){const e=t.children[0].rows[5].cells[0].children[0]
return{attacker:k(e,0),defender:k(e,2),id:Number(n),specials:C(t)}}function y(n){const t=a(n.children[1])
return{gold_gain:_(t,"goldGain"),gold_stolen:_(t,"goldStolen"),pvp_prestige_gain:_(t,"prestigeGain"),pvp_rating_change:_(t,"pvpRatingChange"),winner:_(t,"winner"),xp_gain:_(t,"xpGain")}}function x(n,t){return{...S(n,t),...y(t)}}async function G(n){const a=await function(n){return t({cmd:"combat",subcmd:"view",combat_id:n})}(n)
return function(n,t){const a=e(t)
return{r:{combat:x(n,s("pCC",a))},s:!0}}(n,a)}const N="fsh_pvpCombat"
let T=null,E=0
const P=n=>([t,e])=>"lastCheck"===t||e?.logTime>n
async function R(){const n=await u(N)
return E=n?(n?.lastCheck??0)<p()?function(n){const t=f(n).filter(P(g())),e={...b(t),lastCheck:d()}
return m(N,e),e}(n):n:{lastCheck:d()},E}async function $(n,t){const e=await(s=t,l(h,G,s))
var s
if(e?.s)return E[t]={...e,logTime:n},m(N,E),e}async function j(n,t){T||(T=R())
const e=await T
return e[t]?.logTime?e[t]:$(n,t)}export{j as g}
//# sourceMappingURL=getCombat-gLE3uzoO.js.map
