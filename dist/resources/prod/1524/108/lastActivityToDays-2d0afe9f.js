import{g as r}from"./guildManage-08277e29.js"
import{c as a}from"./closestTr-316dea29.js"
import{H as s,j as t,k as e,c as n,bL as m,an as i,cJ as o,r as u,cK as c,cL as l}from"./calfSystem-34913441.js"
import{l as p}from"./lastActivity-75095e08.js"
import{r as f}from"./regExpGroups-e9c1f885.js"
import{u as d}from"./uniq-a7375dfa.js"
import{b}from"./now-6f22aec9.js"
const g=r=>Number(i(a(r)?.cells[4])?.replaceAll(",","")),j=r=>Number(u(c,r.href)),x=r=>i(a(r)?.cells[3]),k=r=>Number(u(l,r))
function v(r){return{guild_xp:g(r),id:j(r),name:i(r),rank:x(r)}}function N(r){const{stam:a,max:s}=f(o,r)
return{current_stamina:Number(a),last_activity:p(r).timestamp,level:Number(u(/Level:.+?(?<l>\d+)/,r)),max_stamina:Number(s),vl:k(r)}}function _(r){return{guild_id:m(),image_version:0,xp:-1,...v(r),...N(r.dataset.tipped)}}function y(r,a,s){return{id:s,members:r.filter((r=>r.rank===a.rank)),name:a.rank,permissions:0,tax:-1}}async function h(){const a=await r(),m=s(a).getElementById("pCC")
if(!m)return{e:{code:0,message:"Failure"},s:!1}
const i=t(e,m).map(_)
return{r:d(i,"rank").map(n(y,i)),s:!0}}function C(r){return Math.floor(Math.max(0,b()-r)/86400)}export{C as l,h as r}
//# sourceMappingURL=lastActivityToDays-2d0afe9f.js.map
