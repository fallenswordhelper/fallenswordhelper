import{S as t,i as e,s,e as n,t as o,g as r,a as c,l as i,n as l,d as a,k as f,b as d,c as u,f as m,j as p,r as b}from"./index-bebd168e.js"
import{W as j,e as g,j as h,H as v,t as k,M as x}from"./calfSystem-37f70deb.js"
import{b as y}from"./batch-556f2f36.js"
import{c as S}from"./closestTr-8453785a.js"
import{i as C,b as A,g as F,c as I}from"./injectStoreItems-87b2697d.js"
import{t as w}from"./toggleForce-6831dfcc.js"
import"./closest-8b679b7a.js"
import"./daAjaxSendItemsToRecipient-a275d9e4.js"
import"./senditems-2013acfe.js"
import"./errorDialog-998604da.js"
import"./dialogMsg-fcad563e.js"
import"./getInventoryById-63c97c31.js"
import"./getInventory-bdf0965e.js"
import"./guildStore-48dcb633.js"
import"./cmdExport-de9079b1.js"
import"./indexAjaxJson-82f32240.js"
import"./doStatTotal-a3b3e660.js"
function $(t){let e,s,f,d
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(d=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,d()}}}function E(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class M extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function T(t){let e,s,l,f,m=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(m),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),d(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&m!==(m=t[7]+"")&&u(s,m)},d(t){t&&a(e),l=!1,f()}}}function B(t){let e,s,o,f,u,j,h,v,k=g(t[0].folders),x=[]
for(let e=0;e<k.length;e+=1)x[e]=T(N(t,k,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=m(),u=n("button"),u.textContent="Main",j=m()
for(let t=0;t<x.length;t+=1)x[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(u,"type","button"),r(u,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),d(e,s),d(s,o),d(s,f),d(s,u),d(s,j)
for(let t=0;t<x.length;t+=1)x[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(u,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(k=g(t[0].folders),n=0;n<k.length;n+=1){const o=N(t,k,n)
x[n]?x[n].p(o,e):(x[n]=T(o),x[n].c(),x[n].m(s,null))}for(;n<x.length;n+=1)x[n].d(1)
x.length=k.length}},i:l,o:l,d(t){t&&a(e),p(x,t),h=!1,b(v)}}}function D(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class H extends t{constructor(t){super(),e(this,t,D,B,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=S(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function R(t,e){y([5,3,F(),0,k(J,t,Number(e.detail))])}function W(){I().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function _(){h()&&v("enableFolderFilter")&&async function(){const t=await A()
if(!t||!t.folders)return
const e=document.forms[0]
new H({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",k(R,t))}(),function(){const t=x(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new M({anchor:t,target:t.parentNode}).$on("checkall",W)}(),C()}export default _
//# sourceMappingURL=storeitems-ec061123.js.map
