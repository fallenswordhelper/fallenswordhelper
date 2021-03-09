import{B as t,V as e,w as o,D as s,t as n,H as a,f as r,C as c,i,Z as f,x as l,bB as d}from"./calfSystem-dfa26790.js"
import{g as m,d as u,a as p,i as h}from"./injectStoreItems-f890647a.js"
import{S as j,i as b,s as g,e as v,t as x,a as y,b as _,c as C,d as k,f as E,g as D,h as I,l as S,n as N,j as w,r as $,k as A,m as B,o as M}from"./index-7fbf76d3.js"
import{c as T}from"./chunk-5d7e6f3a.js"
import{c as J}from"./closestTable-2e82ac4c.js"
import{c as V}from"./closestTr-d7616f33.js"
import{e as F}from"./errorDialog-da819f92.js"
import{b as H}from"./simpleCheckbox-a076d904.js"
import"./daAjaxSendItemsToRecipient-9bb4fc2b.js"
import"./getInventoryById-580a84c8.js"
import"./getInventory-da61aa5b.js"
import"./cmdExport-b0c06830.js"
import"./indexAjaxJson-3825eadb.js"
import"./doStatTotal-1aaf7cc1.js"
import"./batch-1e22305c.js"
import"./closest-f906514d.js"
import"./dialogMsg-2f52cc12.js"
import"./isChecked-d96c8dec.js"
function R(t,e,o){const s=t.slice()
return s[7]=e[o],s}function X(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=v("option"),o=x(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){y(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&k(e)}}}function Z(t){let e,o,s,n,a,r,c,i,f,l,d,m=t[0],u=[]
for(let e=0;e<m.length;e+=1)u[e]=X(R(t,m,e))
return{c(){e=v("tr"),o=v("td"),s=v("span"),s.textContent="Move selected items to:",n=E(),a=v("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=E(),c=v("span"),c.textContent=" ",i=E(),f=v("button"),f.textContent="Move",D(a,"class","customselect"),void 0===t[1]&&B((()=>t[5].call(a))),D(f,"class","custombutton"),D(f,"type","button"),D(o,"class","fshCenter")},m(m,p){y(m,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
I(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,f),l||(d=[S(a,"change",t[5]),S(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(m=t[0],o=0;o<m.length;o+=1){const s=R(t,m,o)
u[o]?u[o].p(s,e):(u[o]=X(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=m.length}7&e&&I(a,t[1])},i:N,o:N,d(t){t&&k(e),w(u,t),l=!1,$(d)}}}function q(o,s,n){const a=A()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=M(this),n(1,r),n(2,i),n(0,c)}]}class z extends j{constructor(t){super(),b(this,t,q,Z,g,{folders:0})}}function G(t,e){return function(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}(t,e)}function K(){return s('[name="removeIndex[]"]:checked')}function L(t){const e=V(t)
e.nextElementSibling.remove(),e.remove()}async function O(t,e){(await G(t,e.map((t=>t.value)))).s&&e.forEach(L)}function P(t){T(30,K()).forEach(n(O,t.detail))}function Q(t){m().forEach((e=>{e.checked=Boolean(t)}))}let U
const W=t=>{u(t.map((t=>t.value))).then(F).then((e=>{e.s&&t.forEach(L)}))},Y=t=>{t.returnValue&&U&&(t.preventDefault(),T(30,K()).forEach(W),e("dropitems","Destroy by AJAX"))}
function tt(){U=!U,f("ajaxifyDestroy",U)}const et=[function(){const t=s('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=V(J(t[0]))
new z({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",P)},h,function(){(()=>{const t=c('input[type="submit"]')
i(t.parentNode,`&nbsp;&nbsp;${H("ajaxifyDestroy")}`),r(t.parentNode,"change",tt)})(),U=a("ajaxifyDestroy"),r(document.forms[0],"submit",Y),window.check=Q}]
function ot(){!l()&&p()&&d(et)}export default ot
//# sourceMappingURL=injectProfileDropItems-b2c8d0d4.js.map
