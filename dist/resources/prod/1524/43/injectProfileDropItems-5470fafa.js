import{C as t,T as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,_ as f,y as m,bB as d}from"./calfSystem-9942149b.js"
import{g as u,d as p,a as b,i as h}from"./injectStoreItems-b72c7a88.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as C,c as E,d as I,f as k,g as D,h as S,l as N,n as $,j as T,r as w,k as A,m as M,o as B}from"./index-60ac54a4.js"
import{c as J}from"./chunk-4bfbd415.js"
import{c as R}from"./closestTable-ad98a9cf.js"
import{c as F}from"./closestTr-d871b75b.js"
import{m as V}from"./moveItem-85d6f1b8.js"
import{e as X}from"./errorDialog-0f2ff56e.js"
import{b as q}from"./simpleCheckbox-b43d710c.js"
import"./daAjaxSendItemsToRecipient-3e4d61ae.js"
import"./htmlResult-667ec4a3.js"
import"./getInventoryById-446225e7.js"
import"./getInventory-0cdb2477.js"
import"./cmdExport-ded2df3e.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./doStatTotal-abb93346.js"
import"./batch-0f6a856b.js"
import"./closest-bc1fafe7.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./isChecked-987a8a1c.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),C(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&E(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function H(t){let e,o,s,n,a,r,c,i,l,f,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=G(z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",D(a,"class","customselect"),void 0===t[1]&&M((()=>t[5].call(a))),D(l,"class","custombutton"),D(l,"type","button"),D(o,"class","fshCenter")},m(d,p){_(d,e,p),C(e,o),C(o,s),C(o,n),C(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
S(a,t[1]),C(o,r),C(o,c),C(o,i),C(o,l),f||(m=[N(a,"change",t[5]),N(l,"click",t[4])],f=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&S(a,t[1])},i:$,o:$,d(t){t&&I(e),T(u,t),f=!1,w(m)}}}function K(o,s,n){const a=A()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends j{constructor(t){super(),g(this,t,K,H,v,{folders:0})}}function O(t,e){return V(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){J(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(X).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,f("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},h,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&b()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-5470fafa.js.map
