import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as a,n as i,d as l,m as f,b as u,c as m,f as d,k as p,r as b}from"./index-2be3364e.js"
import{S as j,e as g,j as h,I as v,t as k,ap as x}from"./calfSystem-ae2e69af.js"
import{b as y}from"./batch-ff866587.js"
import{c as S}from"./closestTr-eb55d944.js"
import{i as C,b as I,g as A,c as F}from"./injectStoreItems-35c850ae.js"
import{t as w}from"./toggleForce-537064ea.js"
import"./closest-8e46d454.js"
import"./daAjaxSendItemsToRecipient-db55173c.js"
import"./htmlResult-a2f95549.js"
import"./errorDialog-0a862506.js"
import"./dialogMsg-f24b55b1.js"
import"./getInventoryById-53b88638.js"
import"./getInventory-ce8ab76d.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./doStatTotal-7fb789f5.js"
function $(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(u=a(e,"click",t[0]),f=!0)},p:i,i:i,o:i,d(t){t&&l(e),t&&l(s),f=!1,u()}}}function E(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class N extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,i,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),u(e,s),i||(f=a(e,"click",p),i=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&m(s,d)},d(t){t&&l(e),i=!1,f()}}}function R(t){let e,s,o,f,m,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(T(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),m=n("button"),m.textContent="Main",j=d()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),u(e,s),u(s,o),u(s,f),u(s,m),u(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[a(o,"click",t[2]),a(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=T(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:i,o:i,d(t){t&&l(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=S(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await I()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(_,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new N({anchor:t,target:t.parentNode}).$on("checkall",q)}(),C()}export default z
//# sourceMappingURL=storeitems-5a8a9ff9.js.map
