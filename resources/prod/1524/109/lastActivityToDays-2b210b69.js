import{g as r}from"./guildManage-9b6c7211.js"
import{c as a}from"./closestTr-ce435b3a.js"
import{H as s,j as t,k as e,c as n,bL as m,an as i,cJ as o,r as u,cK as c,cL as l}from"./calfSystem-2f15e074.js"
import{l as p}from"./lastActivity-f32257d7.js"
import{r as f}from"./regExpGroups-54cf6a6f.js"
import{u as d}from"./uniq-9cddbf0f.js"
import{b}from"./now-6f22aec9.js"
const g=r=>Number(i(a(r)?.cells[4])?.replaceAll(",","")),j=r=>Number(u(c,r.href)),x=r=>i(a(r)?.cells[3]),k=r=>Number(u(l,r))
function v(r){return{guild_xp:g(r),id:j(r),name:i(r),rank:x(r)}}function N(r){const{stam:a,max:s}=f(o,r)
return{current_stamina:Number(a),last_activity:p(r).timestamp,level:Number(u(/Level:.+?(?<l>\d+)/,r)),max_stamina:Number(s),vl:k(r)}}function _(r){return{guild_id:m(),image_version:0,xp:-1,...v(r),...N(r.dataset.tipped)}}function y(r,a,s){return{id:s,members:r.filter((r=>r.rank===a.rank)),name:a.rank,permissions:0,tax:-1}}async function h(){const a=await r(),m=s(a).getElementById("pCC")
if(!m)return{e:{code:0,message:"Failure"},s:!1}
const i=t(e,m).map(_)
return{r:d(i,"rank").map(n(y,i)),s:!0}}function L(r){return Math.floor(Math.max(0,b()-r)/86400)}export{L as l,h as r}
//# sourceMappingURL=lastActivityToDays-2b210b69.js.map
