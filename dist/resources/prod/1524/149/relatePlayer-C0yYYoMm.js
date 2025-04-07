import{cb as n,aY as a,cs as e,an as s,cn as t,H as i,ck as r,aH as c,x as l}from"./calfSystem-BGW9cdWN.js"
import{g as u}from"./getMembrList-CKfpQ-Zy.js"
const m=n=>n.username
let o=null
function f(){return o||(o=async function(){const t=await n(!1)
return t?.username!==a()?{}:(t._allies&&t._enemies||e(`myStats returned ${s(t)}`),{...t._allies&&{_allies:t._allies.map(m)},...t._enemies&&{_enemies:t._enemies.map(m)}})}()),o}async function y(n){return(await f())._allies?.includes(n)}async function _(n){return(await f())._enemies?.includes(n)}let p=null
async function w(n){return t()&&!p&&(p=async function(){const n=await u(!1)
if(n)return i(n).filter((([,n])=>r(n))).map((([n])=>n))}()),(await p)?.includes(n)}async function d(n){let a=""
const e=c(n),[s,t,i]=await l([w(e),y(e),_(e)])
return s?a="guild":t?a="ally":i&&(a="enemy"),[n,a]}export{w as i,d as r}
//# sourceMappingURL=relatePlayer-C0yYYoMm.js.map
