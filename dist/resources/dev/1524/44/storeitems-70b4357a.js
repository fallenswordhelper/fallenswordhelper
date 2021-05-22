import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as l,d as a,k as f,b as d,c as m,f as u,j as p,r as j}from"./index-3af319ff.js"
import{T as b,e as g,j as h,I as v,t as k,ap as x}from"./calfSystem-f7cf24f6.js"
import{b as y}from"./batch-a8223d61.js"
import{c as I}from"./closestTr-6cca472b.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-3d01a46f.js"
import{t as w}from"./toggleForce-46f497a3.js"
import"./closest-7cf61e52.js"
import"./daAjaxSendItemsToRecipient-f7e26b0d.js"
import"./sendItems-726d52bd.js"
import"./htmlResult-73e3fb74.js"
import"./errorDialog-48630d52.js"
import"./dialogMsg-227939ed.js"
import"./getInventoryById-46c0ed75.js"
import"./getInventory-8cdb4e39.js"
import"./guildStore-7a373ab0.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./doStatTotal-df5d1ab9.js"
function T(t){let e,s,f,d
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(d=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,d()}}}function $(t){const e=f()
return[function(){b("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,T,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,f,u=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(u),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),d(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&u!==(u=t[7]+"")&&m(s,u)},d(t){t&&a(e),l=!1,f()}}}function R(t){let e,s,o,f,m,b,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(N(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=u(),m=n("button"),m.textContent="Main",b=u()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),d(e,s),d(s,o),d(s,f),d(s,m),d(s,b)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=N(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:l,o:l,d(t){t&&a(e),p(x,t),h=!1,j(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){b("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(_,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",q)}(),S()}export default z
//# sourceMappingURL=storeitems-70b4357a.js.map
