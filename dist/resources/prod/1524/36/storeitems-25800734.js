import{S as t,i as e,s,e as n,t as o,g as c,a as r,l as i,n as l,d as a,k as f,b as u,c as d,f as m,j as p,r as b}from"./index-62c3c7c6.js"
import{W as j,e as g,j as h,I as v,t as k,N as x}from"./calfSystem-e7bde0c3.js"
import{b as y}from"./batch-cbe16ea5.js"
import{c as C}from"./closestTr-d6d5777f.js"
import{i as I,b as S,g as A,c as F}from"./injectStoreItems-3ba4f10f.js"
import{t as w}from"./toggleForce-a73479b0.js"
import"./closest-7968af48.js"
import"./daAjaxSendItemsToRecipient-92795ec0.js"
import"./htmlResult-5b3dc12a.js"
import"./errorDialog-db13a69a.js"
import"./dialogMsg-716cf657.js"
import"./getInventoryById-e3966c2d.js"
import"./getInventory-202e3d25.js"
import"./cmdExport-073f9de0.js"
import"./indexAjaxJson-9da74e49.js"
import"./doStatTotal-bda8a776.js"
function N(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),c(e,"class","custombutton svelte-1recp8w"),c(e,"type","button")},m(n,o){r(n,e,o),r(n,s,o),f||(u=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,u()}}}function $(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,N,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,f,m=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(m),c(e,"type","button"),c(e,"class","svelte-1gvij2s")},m(t,n){r(t,e,n),u(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&m!==(m=t[7]+"")&&d(s,m)},d(t){t&&a(e),l=!1,f()}}}function R(t){let e,s,o,f,d,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(T(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=m(),d=n("button"),d.textContent="Main",j=m()
for(let t=0;t<x.length;t+=1)x[t].c()
c(o,"type","button"),c(o,"class","svelte-1gvij2s"),c(d,"type","button"),c(d,"class","svelte-1gvij2s"),c(s,"colspan","3"),c(e,"class","fshCenter")},m(n,c){r(n,e,c),u(e,s),u(s,o),u(s,f),u(s,d),u(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(d,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=T(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:l,o:l,d(t){t&&a(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function c(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,c,()=>c("-2"),()=>c("-1"),t=>c(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=C(s),o=t.items[s.value].folder_id,c=-2!==e&&e!==o
w(n,c),w(n.nextElementSibling,c)}function W(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function _(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function q(){h()&&v("enableFolderFilter")&&async function(){const t=await S()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(W,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",_)}(),I()}export default q
//# sourceMappingURL=storeitems-25800734.js.map
