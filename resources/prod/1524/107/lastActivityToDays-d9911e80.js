import{g as r}from"./guildManage-bc6b02f6.js"
import{c as a}from"./closestTr-03cebe69.js"
import{H as s,j as t,k as e,c as n,bL as m,an as i,cJ as o,r as u,cK as c,cL as l}from"./calfSystem-2fff342b.js"
import{l as p}from"./lastActivity-051eff5d.js"
import{r as f}from"./regExpGroups-2038386a.js"
import{u as d}from"./uniq-8c81946e.js"
import{b}from"./now-6f22aec9.js"
const g=r=>Number(i(a(r)?.cells[4])?.replaceAll(",","")),j=r=>Number(u(c,r.href)),x=r=>i(a(r)?.cells[3]),_=r=>Number(u(l,r))
function k(r){return{guild_xp:g(r),id:j(r),name:i(r),rank:x(r)}}function v(r){const{stam:a,max:s}=f(o,r)
return{current_stamina:Number(a),last_activity:p(r).timestamp,level:Number(u(/Level:.+?(?<l>\d+)/,r)),max_stamina:Number(s),vl:_(r)}}function N(r){return{guild_id:m(),image_version:0,xp:-1,...k(r),...v(r.dataset.tipped)}}function y(r,a,s){return{id:s,members:r.filter((r=>r.rank===a.rank)),name:a.rank,permissions:0,tax:-1}}async function h(){const a=await r(),m=s(a).getElementById("pCC")
if(!m)return{e:{code:0,message:"Failure"},s:!1}
const i=t(e,m).map(N)
return{r:d(i,"rank").map(n(y,i)),s:!0}}function L(r){return Math.floor(Math.max(0,b()-r)/86400)}export{L as l,h as r}
//# sourceMappingURL=lastActivityToDays-d9911e80.js.map
