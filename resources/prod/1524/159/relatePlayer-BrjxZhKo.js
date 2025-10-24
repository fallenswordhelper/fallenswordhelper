import{cm as a,b8 as e,cC as n,az as s,aC as t,ab as i,cw as r,aT as l,a1 as c}from"./calfSystem-CIdPz3EO.js"
import{g as u}from"./getMembrList-DRRIgIBb.js"
const m=a=>a.username
let o=null
function f(){return o||(o=async function(){const t=await a(!1)
return t?.username!==e()?{}:(t._allies&&t._enemies||n(`myStats returned ${s(t)}`),{...t._allies&&{_allies:t._allies.map(m)},...t._enemies&&{_enemies:t._enemies.map(m)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let w=null
async function p(a){return t()&&!w&&(w=async function(){const a=await u(!1)
if(a)return i(a).filter(([,a])=>r(a)).map(([a])=>a)}()),(await w)?.includes(a)}async function d(a){let e=""
const n=l(a),[s,t,i]=await c([p(n),y(n),_(n)])
return s?e="guild":t?e="ally":i&&(e="enemy"),[a,e]}export{p as i,d as r}
//# sourceMappingURL=relatePlayer-BrjxZhKo.js.map
