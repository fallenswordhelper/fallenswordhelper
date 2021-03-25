import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as l,d as a,k as f,b as d,c as m,f as u,j as p,r as b}from"./index-62c3c7c6.js"
import{X as j,e as g,j as h,I as v,t as k,N as x}from"./calfSystem-eeb1d862.js"
import{b as y}from"./batch-7ea0272b.js"
import{c as I}from"./closestTr-8d5ed3dd.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-7608ba74.js"
import{t as w}from"./toggleForce-a73479b0.js"
import"./closest-7968af48.js"
import"./daAjaxSendItemsToRecipient-4f20f9ac.js"
import"./sendItems-285f8454.js"
import"./htmlResult-541e86c4.js"
import"./errorDialog-db13a69a.js"
import"./dialogMsg-716cf657.js"
import"./getInventoryById-b7958825.js"
import"./getInventory-938a71f5.js"
import"./guildStore-bd4084a2.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./doStatTotal-677e42df.js"
function N(t){let e,s,f,d
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(d=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,d()}}}function $(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,N,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,f,u=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(u),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),d(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&u!==(u=t[7]+"")&&m(s,u)},d(t){t&&a(e),l=!1,f()}}}function R(t){let e,s,o,f,m,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(T(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=u(),m=n("button"),m.textContent="Main",j=u()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),d(e,s),d(s,o),d(s,f),d(s,m),d(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=T(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:l,o:l,d(t){t&&a(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function X(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function _(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function q(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(X,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",_)}(),S()}export default q
//# sourceMappingURL=storeitems-06925b08.js.map
