import{a as n,G as t,H as a,g as e,a8 as s,r as c,k as i,as as r,s as o,$ as l,aQ as u,bO as d,ct as p,aS as m,C as f,bw as g,f as b}from"./calfSystem-DKih1pr1.js"
function w(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const h=n=>Number(c(/\/(?<id>\d+)/,n.getAttribute("background")))
function _(n,t){const a=new RegExp(`${t} = (\\d+)`)
return Number(c(a,n))}function v(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,a])=>[t,n.includes(a),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(o("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function C(n){return i("#specialsDiv",n).map(r).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(v)}function k(n,t){return{id:h(n.rows[1].cells[t]),name:r(n.rows[0].cells[t])}}function S(n,t){const a=t.children[0].rows[5].cells[0].children[0]
return{attacker:k(a,0),defender:k(a,2),id:Number(n),specials:C(t)}}function y(n){const t=s(n.children[1])
return{gold_gain:_(t,"goldGain"),gold_stolen:_(t,"goldStolen"),pvp_prestige_gain:_(t,"prestigeGain"),pvp_rating_change:_(t,"pvpRatingChange"),winner:_(t,"winner"),xp_gain:_(t,"xpGain")}}function x(n,t){return{...S(n,t),...y(t)}}async function G(n){const s=await function(n){return t({cmd:"combat",subcmd:"view",combat_id:n})}(n)
return function(n,t){const s=a(t)
return{r:{combat:x(n,e("pCC",s))},s:!0}}(n,s)}const N="fsh_pvpCombat"
let T=null,P=0
const R=n=>([t,a])=>"lastCheck"===t||a?.logTime>n
async function $(){const n=await u(N)
return P=n?(n?.lastCheck??0)<p()?function(n){const t=f(n).filter(R(g())),a={...b(t),lastCheck:d()}
return m(N,a),a}(n):n:{lastCheck:d()},P}async function j(n,t){const a=await(e=t,l(w,G,e))
var e
if(a?.s)return P[t]={...a,logTime:n},m(N,P),a}async function A(n,t){T||(T=$())
const a=await T
return a[t]?.logTime?a[t]:j(n,t)}export{A as g}
//# sourceMappingURL=getCombat-DXgBxcYm.js.map
