import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as a,n as i,d as l,k as f,b as u,c as m,f as d,j as p,r as b}from"./index-60ac54a4.js"
import{T as j,e as g,j as h,I as v,t as k,N as x}from"./calfSystem-9942149b.js"
import{b as y}from"./batch-0f6a856b.js"
import{c as C}from"./closestTr-d871b75b.js"
import{i as I,b as S,g as A,c as F}from"./injectStoreItems-b72c7a88.js"
import{t as w}from"./toggleForce-aa6abab1.js"
import"./closest-bc1fafe7.js"
import"./daAjaxSendItemsToRecipient-3e4d61ae.js"
import"./htmlResult-667ec4a3.js"
import"./errorDialog-0f2ff56e.js"
import"./dialogMsg-3c26aecb.js"
import"./getInventoryById-446225e7.js"
import"./getInventory-0cdb2477.js"
import"./cmdExport-ded2df3e.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./doStatTotal-abb93346.js"
function N(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(u=a(e,"click",t[0]),f=!0)},p:i,i:i,o:i,d(t){t&&l(e),t&&l(s),f=!1,u()}}}function T(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class $ extends t{constructor(t){super(),e(this,t,T,N,s,{})}}function E(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,i,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),u(e,s),i||(f=a(e,"click",p),i=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&m(s,d)},d(t){t&&l(e),i=!1,f()}}}function R(t){let e,s,o,f,m,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(E(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),m=n("button"),m.textContent="Main",j=d()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),u(e,s),u(s,o),u(s,f),u(s,m),u(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[a(o,"click",t[2]),a(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=E(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:i,o:i,d(t){t&&l(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=C(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await S()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(_,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new $({anchor:t,target:t.parentNode}).$on("checkall",q)}(),I()}export default z
//# sourceMappingURL=storeitems-a576d3f1.js.map
