import{g as a}from"./guildManage-BUhvojtx.js"
import{c as r}from"./closestTr-BGA5O97h.js"
import{J as s,n as t,t as e,d1 as n,r as m,d2 as i,as as o,d8 as u,bW as l,b as c,bO as p}from"./calfSystem-Blt4DbaE.js"
import{l as f}from"./lastActivity-E8nkj_ho.js"
import{r as d}from"./regExpGroups-B7iOxfb4.js"
import{u as b}from"./uniq-D422dDMJ.js"
const g=a=>Number(o(r(a)?.cells[4])?.replaceAll(",","")),x=a=>Number(m(u,a.href)),j=a=>o(r(a)?.cells[3]),v=a=>Number(m(i,a))
function y(a){return{guild_xp:g(a),id:x(a),name:o(a),rank:j(a)}}function N(a){const{stam:r,max:s}=d(n,a)
return{current_stamina:Number(r),last_activity:f(a).timestamp,level:Number(m(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(s),vl:v(a)}}function _(a){return{guild_id:l(),image_version:0,xp:-1,...y(a),...N(a.dataset.tipped)}}function k(a,r,s){return{id:s,members:a.filter((a=>a.rank===r.rank)),name:r.rank,permissions:0,tax:-1}}async function h(){const r=await a(),n=s(r).getElementById("pCC")
if(!n)return{e:{code:0,message:"Failure"},s:!1}
const m=t(e,n).map(_)
return{r:b(m,"rank").map(c(k,m)),s:!0}}function A(a){return Math.floor(Math.max(0,p()-a)/86400)}export{A as l,h as r}
//# sourceMappingURL=lastActivityToDays-BjoCXjnn.js.map
