import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as l,d as a,m as d,b as f,c as u,f as m,k as p,r as b}from"./index-2be3364e.js"
import{S as j,e as g,j as h,I as v,t as k,ap as x}from"./calfSystem-e1e858cd.js"
import{b as y}from"./batch-55db0df2.js"
import{c as S}from"./closestTr-1393a128.js"
import{i as C,b as I,g as A,c as F}from"./injectStoreItems-d601891d.js"
import{t as w}from"./toggleForce-537064ea.js"
import"./closest-8e46d454.js"
import"./daAjaxSendItemsToRecipient-7db1d77f.js"
import"./htmlResult-e8d79b81.js"
import"./errorDialog-0a862506.js"
import"./dialogMsg-f24b55b1.js"
import"./getInventoryById-d4059c8b.js"
import"./getInventory-517104e3.js"
import"./cmdExport-ac312c58.js"
import"./indexAjaxJson-fc55a4e0.js"
import"./doStatTotal-dbe867ed.js"
function $(t){let e,s,d,f
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),d||(f=i(e,"click",t[0]),d=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),d=!1,f()}}}function E(t){const e=d()
return[function(){j("storeitems","Check All"),e("checkall")}]}class N extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,d,m=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(m),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),f(e,s),l||(d=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&m!==(m=t[7]+"")&&u(s,m)},d(t){t&&a(e),l=!1,d()}}}function R(t){let e,s,o,d,u,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=M(T(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",d=m(),u=n("button"),u.textContent="Main",j=m()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(u,"type","button"),r(u,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),f(e,s),f(s,o),f(s,d),f(s,u),f(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(u,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=T(t,k,n)
x[n]?x[n].p(o,e):(x[n]=M(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:l,o:l,d(t){t&&a(e),p(x,t),h=!1,b(v)}}}function B(t,e,s){const n=d()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=S(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,k(J,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await I()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(_,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new N({anchor:t,target:t.parentNode}).$on("checkall",q)}(),C()}export default z
//# sourceMappingURL=storeitems-a10e4909.js.map
