import{a as n,$ as t,K as e,L as a,g as s,ad as c,r as i,l as r,aH as o,s as l,bw as u,ch as d,cM as p,bx as m,F as f,bZ as g,f as b}from"./calfSystem-BAeDn21M.js"
function h(t){return n({cmd:"combat",subcmd:"view",combat_id:t})}const w=n=>Number(i(/\/(?<id>\d+)/,n.getAttribute("background")))
function _(n,t){const e=new RegExp(`${t} = (\\d+)`)
return Number(i(e,n))}function v(n){const t=[[18,"leeched"],[21,"Spell"]].map((([t,e])=>[t,n.includes(e),n.split(" ")[0],n.split("'")[1]])).find((([,n])=>n))
return t?{id:t[0],params:[t[2],t[3]]}:(l("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function C(n){return r("#specialsDiv",n).map(o).filter((n=>["leeched","Spell"].some((t=>n.includes(t))))).map(v)}function k(n,t){return{id:w(n.rows[1].cells[t]),name:o(n.rows[0].cells[t])}}function x(n,t){const e=t.children[0].rows[5].cells[0].children[0]
return{attacker:k(e,0),defender:k(e,2),id:Number(n),specials:C(t)}}function y(n){const t=c(n.children[1])
return{gold_gain:_(t,"goldGain"),gold_stolen:_(t,"goldStolen"),pvp_prestige_gain:_(t,"prestigeGain"),pvp_rating_change:_(t,"pvpRatingChange"),winner:_(t,"winner"),xp_gain:_(t,"xpGain")}}function S(n,t){return{...x(n,t),...y(t)}}async function G(n){return function(n,t){const e=a(t)
return{r:{combat:S(n,s("pCC",e))},s:!0}}(n,await e({cmd:"combat",subcmd:"view",combat_id:n}))}const N="fsh_pvpCombat"
let T=null,L=0
const M=n=>([t,e])=>"lastCheck"===t||e?.logTime>n
async function P(){const n=await u(N)
return L=n?(n?.lastCheck??0)<p()?function(n){const t=f(n).filter(M(g())),e={...b(t),lastCheck:d()}
return m(N,e),e}(n):n:{lastCheck:d()},L}async function R(n,e){const a=await(s=e,t(h,G,s))
var s
if(a?.s)return L[e]={...a,logTime:n},m(N,L),a}async function $(n,t){T||(T=P())
const e=await T
return e[t]?.logTime?e[t]:R(n,t)}export{$ as g}
//# sourceMappingURL=getCombat-R0g80w8M.js.map
