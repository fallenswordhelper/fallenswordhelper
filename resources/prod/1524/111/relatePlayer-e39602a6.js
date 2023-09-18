import{a}from"./all-414e0607.js"
import{ay as e,bQ as n,ad as s,bJ as t,C as i,bG as r,am as l}from"./calfSystem-abb16b0d.js"
import{m}from"./myStats-0c66109a.js"
import{g as u}from"./getMembrList-c23778b8.js"
const c=a=>a.username
let o=null
function f(){return o||(o=async function(){const a=await m(!1)
return a?.username!==e()?{}:(a._allies&&a._enemies||n(`myStats returned ${s(a)}`,!1),{...a._allies&&{_allies:a._allies.map(c)},...a._enemies&&{_enemies:a._enemies.map(c)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function d(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function w(e){let n=""
const s=l(e),[t,i,r]=await a([d(s),y(s),_(s)])
return t?n="guild":i?n="ally":r&&(n="enemy"),[e,n]}export{d as i,w as r}
//# sourceMappingURL=relatePlayer-e39602a6.js.map
