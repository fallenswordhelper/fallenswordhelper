import{a}from"./all-414e0607.js"
import{aA as e,bS as n,ae as s,bL as t,C as i,bI as r,an as l}from"./calfSystem-076d7a01.js"
import{m}from"./myStats-ce4a0fe3.js"
import{g as u}from"./getMembrList-4c9f1480.js"
const c=a=>a.username
let o=null
function f(){return o||(o=async function(){const a=await m(!1)
return a?.username!==e()?{}:(a._allies&&a._enemies||n(`myStats returned ${s(a)}`,!1),{...a._allies&&{_allies:a._allies.map(c)},...a._enemies&&{_enemies:a._enemies.map(c)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function w(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function d(e){let n=""
const s=l(e),[t,i,r]=await a([w(s),y(s),_(s)])
return t?n="guild":i?n="ally":r&&(n="enemy"),[e,n]}export{w as i,d as r}
//# sourceMappingURL=relatePlayer-c663a3a1.js.map
