import{a}from"./chunk-MQSDDZVA.js";import{a as d}from"./chunk-WTU4KHE6.js";import{a as k}from"./chunk-KE2YRUZL.js";import{a as y}from"./chunk-BDG2CRWV.js";import{a as n}from"./chunk-HOFZHHFM.js";import{a as f}from"./chunk-VIE5ZNPH.js";import{a as x}from"./chunk-YLLFMQF3.js";import{a as g}from"./chunk-INJK6J4Y.js";import{a as u}from"./chunk-C6UQ3IWD.js";import{a as p}from"./chunk-SOFFOM3C.js";import{a as o}from"./chunk-3WYYB24O.js";import{Na as l,j as i,k as s,l as c}from"./chunk-7Q74Q23I.js";var v=r=>Number(n(a(r).cells[4]).replaceAll(",","")),b=r=>Number(o(i,r.href)),N=r=>n(a(r).cells[3]),_=r=>Number(o(c,r));function E(r){return{guild_xp:v(r),id:b(r),name:n(r),rank:N(r)}}function I(r){let{stam:t,max:e}=g(s,r);return{current_stamina:Number(t),last_activity:y(r).timestamp,level:Number(o(/Level:.+?(?<l>\d+)/,r)),max_stamina:Number(e),vl:_(r)}}function R(r){return{guild_id:x(),image_version:0,xp:-1,...E(r),...I(r.dataset.tipped)}}function T(r,t,e){return{id:e,members:r.filter(m=>m.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function A(){let r=await k(),e=u(r).getElementById("pCC"),m=f(l,e).map(R);return{r:d(m,"rank").map(p(T,m)),s:!0}}export{A as a};
//# sourceMappingURL=chunk-S6X2AZ73.js.map