import{S as t,i as e,s,e as n,t as o,g as c,a as r,l as a,n as i,d as l,k as f,b as u,c as d,f as m,j as p,r as b}from"./index-bebd168e.js"
import{V as j,e as g,j as h,H as v,t as k,M as x}from"./calfSystem-c91a5c89.js"
import{b as y}from"./batch-4aceb3c4.js"
import{c as C}from"./closestTr-1719adc3.js"
import{i as S,b as A,g as F,c as I}from"./injectStoreItems-9ed7ec7a.js"
import{t as w}from"./toggleForce-6831dfcc.js"
import"./closest-8b679b7a.js"
import"./daAjaxSendItemsToRecipient-55b6a78a.js"
import"./errorDialog-998604da.js"
import"./dialogMsg-fcad563e.js"
import"./getInventoryById-69ad3941.js"
import"./getInventory-082657b0.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
import"./doStatTotal-424f589d.js"
function $(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),c(e,"class","custombutton svelte-1recp8w"),c(e,"type","button")},m(n,o){r(n,e,o),r(n,s,o),f||(u=a(e,"click",t[0]),f=!0)},p:i,i:i,o:i,d(t){t&&l(e),t&&l(s),f=!1,u()}}}function E(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class M extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function T(t){let e,s,i,f,m=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(m),c(e,"type","button"),c(e,"class","svelte-1gvij2s")},m(t,n){r(t,e,n),u(e,s),i||(f=a(e,"click",p),i=!0)},p(e,n){t=e,1&n&&m!==(m=t[7]+"")&&d(s,m)},d(t){t&&l(e),i=!1,f()}}}function B(t){let e,s,o,f,d,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=T(N(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=m(),d=n("button"),d.textContent="Main",j=m()
for(let t=0;t<x.length;t+=1)x[t].c()
c(o,"type","button"),c(o,"class","svelte-1gvij2s"),c(d,"type","button"),c(d,"class","svelte-1gvij2s"),c(s,"colspan","3"),c(e,"class","fshCenter")},m(n,c){r(n,e,c),u(e,s),u(s,o),u(s,f),u(s,d),u(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[a(o,"click",t[2]),a(d,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=N(t,k,n)
x[n]?x[n].p(o,e):(x[n]=T(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:i,o:i,d(t){t&&l(e),p(x,t),h=!1,b(v)}}}function D(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function c(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,c,()=>c("-2"),()=>c("-1"),t=>c(t)]}class H extends t{constructor(t){super(),e(this,t,D,B,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=C(s),o=t.items[s.value].folder_id,c=-2!==e&&e!==o
w(n,c),w(n.nextElementSibling,c)}function R(t,e){y([5,3,F(),0,k(J,t,Number(e.detail))])}function V(){I().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function _(){h()&&v("enableFolderFilter")&&async function(){const t=await A()
if(!t||!t.folders)return
const e=document.forms[0]
new H({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(R,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new M({anchor:t,target:t.parentNode}).$on("checkall",V)}(),S()}export default _
//# sourceMappingURL=storeitems-7dc728c5.js.map
