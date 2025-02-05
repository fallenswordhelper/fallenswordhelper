import{cd as a,aX as e,cu as n,ap as s,cp as t,F as i,cm as r,aH as c,v as l}from"./calfSystem-BAeDn21M.js"
import{g as u}from"./getMembrList-DbSAMBC0.js"
const m=a=>a.username
let o=null
function f(){return o||(o=async function(){const t=await a(!1)
return t?.username!==e()?{}:(t._allies&&t._enemies||n(`myStats returned ${s(t)}`),{...t._allies&&{_allies:t._allies.map(m)},...t._enemies&&{_enemies:t._enemies.map(m)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function d(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function w(a){let e=""
const n=c(a),[s,t,i]=await l([d(n),y(n),_(n)])
return s?e="guild":t?e="ally":i&&(e="enemy"),[a,e]}export{d as i,w as r}
//# sourceMappingURL=relatePlayer-b0NCbXyR.js.map
