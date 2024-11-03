import{a}from"./all-YfMtr2SN.js"
import{aC as e,b$ as s,ah as n,bW as t,C as i,bT as r,as as l}from"./calfSystem-B_VkFJhM.js"
import{m}from"./myStats-Bi0k_kUx.js"
import{g as u}from"./getMembrList-DcTiQz5B.js"
const c=a=>a.username
let o=null
function f(){return o||(o=async function(){const a=await m(!1)
return a?.username!==e()?{}:(a._allies&&a._enemies||s(`myStats returned ${n(a)}`),{...a._allies&&{_allies:a._allies.map(c)},...a._enemies&&{_enemies:a._enemies.map(c)}})}()),o}async function y(a){return(await f())._allies?.includes(a)}async function _(a){return(await f())._enemies?.includes(a)}let p=null
async function d(a){return t()&&!p&&(p=async function(){const a=await u(!1)
if(a)return i(a).filter((([,a])=>r(a))).map((([a])=>a))}()),(await p)?.includes(a)}async function w(e){let s=""
const n=l(e),[t,i,r]=await a([d(n),y(n),_(n)])
return t?s="guild":i?s="ally":r&&(s="enemy"),[e,s]}export{d as i,w as r}
//# sourceMappingURL=relatePlayer-CfKbMXiC.js.map
