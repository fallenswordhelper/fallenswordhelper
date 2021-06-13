import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as a,d as l,m as d,b as m,c as f,f as u,k as p,r as j}from"./index-2be3364e.js"
import{T as b,e as g,j as h,I as v,t as k,aq as x}from"./calfSystem-6a3c85e0.js"
import{b as y}from"./batch-e8572a8f.js"
import{c as I}from"./closestTr-3df2da21.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-dc8e8a64.js"
import{t as w}from"./toggleForce-537064ea.js"
import"./closest-8e46d454.js"
import"./daAjaxSendItemsToRecipient-731034d6.js"
import"./sendItems-68b87d4c.js"
import"./htmlResult-c58d347a.js"
import"./errorDialog-0a862506.js"
import"./dialogMsg-f24b55b1.js"
import"./getInventoryById-e5962aec.js"
import"./getInventory-a569507a.js"
import"./guildStore-fcb25778.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./doStatTotal-dc259649.js"
function T(t){let e,s,d,m
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),d||(m=i(e,"click",t[0]),d=!0)},p:a,i:a,o:a,d(t){t&&l(e),t&&l(s),d=!1,m()}}}function $(t){const e=d()
return[function(){b("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,T,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,a,d,u=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(u),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),m(e,s),a||(d=i(e,"click",p),a=!0)},p(e,n){t=e,1&n&&u!==(u=t[7]+"")&&f(s,u)},d(t){t&&l(e),a=!1,d()}}}function R(t){let e,s,o,d,f,b,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(N(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",d=u(),f=n("button"),f.textContent="Main",b=u()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(f,"type","button"),r(f,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),m(e,s),m(s,o),m(s,d),m(s,f),m(s,b)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(f,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=N(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:a,o:a,d(t){t&&l(e),p(x,t),h=!1,j(v)}}}function q(t,e,s){const n=d()
let{inv:o={folders:{}}}=e
function r(t){b("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class B extends t{constructor(t){super(),e(this,t,q,R,s,{inv:0})}}function D(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function J(t,e){y([5,3,A(),0,k(D,t,Number(e.detail))])}function _(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new B({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(J,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",_)}(),S()}export default z
//# sourceMappingURL=storeitems-a5992439.js.map
