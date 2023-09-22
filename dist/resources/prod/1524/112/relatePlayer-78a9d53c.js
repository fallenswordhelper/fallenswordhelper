import{a}from"./all-414e0607.js"
import{ax as e,bP as n,ac as s,bI as t,C as i,bF as r,al as l}from"./calfSystem-4830a18d.js"
import{m}from"./myStats-e8c505b6.js"
import{g as u}from"./getMembrList-d2aebe41.js"
const c=a=>a.username
let o=null
function f(){return o||(o=async function(){const a=await m(!1)
return a?.username!==e()?{}:(a._allies&&a._enemies||n(`myStats returned ${s(a)}`,!1),{...a._allies&&{_allies:a._allies.map(c)},...a._enemies&&{_enemies:a._enemies.map(c)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function w(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function d(e){let n=""
const s=l(e),[t,i,r]=await a([w(s),y(s),_(s)])
return t?n="guild":i?n="ally":r&&(n="enemy"),[e,n]}export{w as i,d as r}
//# sourceMappingURL=relatePlayer-78a9d53c.js.map
