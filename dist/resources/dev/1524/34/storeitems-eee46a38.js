import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as a,d as l,k as f,b as u,c as m,f as d,j as p,r as b}from"./index-7fbf76d3.js"
import{W as j,e as g,j as h,H as v,t as k,M as x}from"./calfSystem-c07e3259.js"
import{b as y}from"./batch-13a297b0.js"
import{c as S}from"./closestTr-51c4677a.js"
import{i as C,b as A,g as F,c as I}from"./injectStoreItems-57afc081.js"
import{t as w}from"./toggleForce-f376374b.js"
import"./closest-f906514d.js"
import"./daAjaxSendItemsToRecipient-83f134bb.js"
import"./senditems-6addbfb7.js"
import"./errorDialog-da819f92.js"
import"./dialogMsg-2f52cc12.js"
import"./getInventoryById-78665853.js"
import"./getInventory-a7a4a959.js"
import"./guildStore-574f6b62.js"
import"./cmdExport-73f6ff02.js"
import"./indexAjaxJson-18a12ea8.js"
import"./doStatTotal-f7d22e98.js"
function $(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(u=i(e,"click",t[0]),f=!0)},p:a,i:a,o:a,d(t){t&&l(e),t&&l(s),f=!1,u()}}}function E(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class M extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function T(t){let e,s,a,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),u(e,s),a||(f=i(e,"click",p),a=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&m(s,d)},d(t){t&&l(e),a=!1,f()}}}function B(t){let e,s,o,f,m,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=T(N(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),m=n("button"),m.textContent="Main",j=d()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),u(e,s),u(s,o),u(s,f),u(s,m),u(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=N(t,k,n)
x[n]?x[n].p(o,e):(x[n]=T(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:a,o:a,d(t){t&&l(e),p(x,t),h=!1,b(v)}}}function D(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class H extends t{constructor(t){super(),e(this,t,D,B,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=S(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function R(t,e){y([5,3,F(),0,k(J,t,Number(e.detail))])}function W(){I().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function _(){h()&&v("enableFolderFilter")&&async function(){const t=await A()
if(!t||!t.folders)return
const e=document.forms[0]
new H({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(R,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new M({anchor:t,target:t.parentNode}).$on("checkall",W)}(),C()}export default _
//# sourceMappingURL=storeitems-eee46a38.js.map
