import{cl as a,b8 as e,cB as n,aA as s,cx as t,ab as i,cu as l,aT as r,a1 as c}from"./calfSystem-C1X5YxJZ.js"
import{g as u}from"./getMembrList-DJNIR1Ub.js"
const m=a=>a.username
let o=null
function f(){return o||(o=async function(){const t=await a(!1)
return t?.username!==e()?{}:(t._allies&&t._enemies||n(`myStats returned ${s(t)}`),{...t._allies&&{_allies:t._allies.map(m)},...t._enemies&&{_enemies:t._enemies.map(m)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function w(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>l(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function d(a){let e=""
const n=r(a),[s,t,i]=await c([w(n),y(n),_(n)])
return s?e="guild":t?e="ally":i&&(e="enemy"),[a,e]}export{w as i,d as r}
//# sourceMappingURL=relatePlayer-BeHhOt8G.js.map
