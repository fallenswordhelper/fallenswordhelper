import{g as a}from"./guildManage-BhpRder5.js"
import{c as r}from"./closestTr-y9xuFdp6.js"
import{H as s,k as t,l as e,c as n,bW as m,as as i,d1 as o,r as u,d8 as l,d2 as c,bO as p}from"./calfSystem-B_VkFJhM.js"
import{l as f}from"./lastActivity-DivsWk_X.js"
import{r as d}from"./regExpGroups-BcqTkRdL.js"
import{u as b}from"./uniq-BMMV7Mwa.js"
const g=a=>Number(i(r(a)?.cells[4])?.replaceAll(",","")),x=a=>Number(u(l,a.href)),j=a=>i(r(a)?.cells[3]),k=a=>Number(u(c,a))
function v(a){return{guild_xp:g(a),id:x(a),name:i(a),rank:j(a)}}function y(a){const{stam:r,max:s}=d(o,a)
return{current_stamina:Number(r),last_activity:f(a).timestamp,level:Number(u(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(s),vl:k(a)}}function N(a){return{guild_id:m(),image_version:0,xp:-1,...v(a),...y(a.dataset.tipped)}}function _(a,r,s){return{id:s,members:a.filter((a=>a.rank===r.rank)),name:r.rank,permissions:0,tax:-1}}async function h(){const r=await a(),m=s(r).getElementById("pCC")
if(!m)return{e:{code:0,message:"Failure"},s:!1}
const i=t(e,m).map(N)
return{r:b(i,"rank").map(n(_,i)),s:!0}}function A(a){return Math.floor(Math.max(0,p()-a)/86400)}export{A as l,h as r}
//# sourceMappingURL=lastActivityToDays-dj6E7mZY.js.map
