import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as l,d as a,m as f,b as m,c as u,f as d,k as p,r as b}from"./index-79201ad3.js"
import{T as j,e as g,j as h,I as v,t as k,aq as x}from"./calfSystem-d3f0a380.js"
import{b as y}from"./batch-7c0362d6.js"
import{c as I}from"./closestTr-fd5f5074.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-b2751898.js"
import{t as w}from"./toggleForce-70762365.js"
import"./closest-d38ca7fc.js"
import"./daAjaxSendItemsToRecipient-b83b4b94.js"
import"./sendItems-c8a61001.js"
import"./htmlResult-3e5887e6.js"
import"./errorDialog-2e0e2853.js"
import"./dialogMsg-16959bc2.js"
import"./getInventoryById-41db4f82.js"
import"./getInventory-9586c0e4.js"
import"./guildStore-7eb2c059.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./doStatTotal-af8f07c1.js"
function T(t){let e,s,f,m
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(m=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,m()}}}function $(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,T,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),m(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&u(s,d)},d(t){t&&a(e),l=!1,f()}}}function R(t){let e,s,o,f,u,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(N(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),u=n("button"),u.textContent="Main",j=d()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(u,"type","button"),r(u,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),m(e,s),m(s,o),m(s,f),m(s,u),m(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(u,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=N(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:l,o:l,d(t){t&&a(e),p(x,t),h=!1,b(v)}}}function q(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class B extends t{constructor(t){super(),e(this,t,q,R,s,{inv:0})}}function D(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function J(t,e){y([5,3,A(),0,k(D,t,Number(e.detail))])}function _(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new B({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(J,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",_)}(),S()}export default z
//# sourceMappingURL=storeitems-16a730c2.js.map
