import{cj as a,b6 as e,cv as n,ay as s,cr as t,a9 as i,co as r,aR as c,_ as l}from"./calfSystem-CT1aM4VG.js"
import{g as u}from"./getMembrList-Ctbnv9ny.js"
const m=a=>a.username
let o=null
function f(){return o||(o=async function(){const t=await a(!1)
return t?.username!==e()?{}:(t._allies&&t._enemies||n(`myStats returned ${s(t)}`),{...t._allies&&{_allies:t._allies.map(m)},...t._enemies&&{_enemies:t._enemies.map(m)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function w(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function d(a){let e=""
const n=c(a),[s,t,i]=await l([w(n),y(n),_(n)])
return s?e="guild":t?e="ally":i&&(e="enemy"),[a,e]}export{w as i,d as r}
//# sourceMappingURL=relatePlayer-BP_NoLF9.js.map
