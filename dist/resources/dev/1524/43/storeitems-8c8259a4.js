import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as a,n as i,d as l,k as f,b as m,c as u,f as d,j as p,r as b}from"./index-60ac54a4.js"
import{U as j,e as g,j as h,I as v,t as k,N as x}from"./calfSystem-3cb2f93e.js"
import{b as y}from"./batch-60e4331a.js"
import{c as I}from"./closestTr-0cdbb46f.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-31d988e6.js"
import{t as w}from"./toggleForce-aa6abab1.js"
import"./closest-bc1fafe7.js"
import"./daAjaxSendItemsToRecipient-90b15976.js"
import"./sendItems-ab3a12d9.js"
import"./htmlResult-4d7038ac.js"
import"./errorDialog-0f2ff56e.js"
import"./dialogMsg-3c26aecb.js"
import"./getInventoryById-74030f86.js"
import"./getInventory-238d3b07.js"
import"./guildStore-a425d6aa.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./doStatTotal-2c8b26e5.js"
function N(t){let e,s,f,m
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(m=a(e,"click",t[0]),f=!0)},p:i,i:i,o:i,d(t){t&&l(e),t&&l(s),f=!1,m()}}}function $(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,N,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,i,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),m(e,s),i||(f=a(e,"click",p),i=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&u(s,d)},d(t){t&&l(e),i=!1,f()}}}function R(t){let e,s,o,f,u,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(T(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),u=n("button"),u.textContent="Main",j=d()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(u,"type","button"),r(u,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),m(e,s),m(s,o),m(s,f),m(s,u),m(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[a(o,"click",t[2]),a(u,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=T(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:i,o:i,d(t){t&&l(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function U(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function _(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function q(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(U,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",_)}(),S()}export default q
//# sourceMappingURL=storeitems-8c8259a4.js.map
