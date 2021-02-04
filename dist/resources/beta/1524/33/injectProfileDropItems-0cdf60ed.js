import{B as e,V as t,w as o,D as s,t as n,H as a,f as r,C as c,i,Z as l,x as f,bB as d}from"./calfSystem-c91a5c89.js"
import{g as m,d as u,a as p,i as h}from"./injectStoreItems-9ed7ec7a.js"
import{S as b,i as j,s as g,e as v,t as x,a as y,b as _,c as C,d as k,f as E,g as D,h as I,l as S,n as N,j as w,r as $,k as A,m as B,o as M}from"./index-bebd168e.js"
import{c as T}from"./chunk-c6dcf4eb.js"
import{c as J}from"./closestTable-2e6fd7b0.js"
import{c as V}from"./closestTr-1719adc3.js"
import{e as F}from"./errorDialog-998604da.js"
import{b as H}from"./simpleCheckbox-f69d12f9.js"
import"./daAjaxSendItemsToRecipient-55b6a78a.js"
import"./getInventoryById-69ad3941.js"
import"./getInventory-082657b0.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
import"./doStatTotal-424f589d.js"
import"./batch-4aceb3c4.js"
import"./closest-8b679b7a.js"
import"./dialogMsg-fcad563e.js"
import"./isChecked-622b73bf.js"
function R(e,t,o){const s=e.slice()
return s[7]=t[o],s}function X(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=v("option"),o=x(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){y(e,t,s),_(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&C(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&k(t)}}}function Z(e){let t,o,s,n,a,r,c,i,l,f,d,m=e[0],u=[]
for(let t=0;t<m.length;t+=1)u[t]=X(R(e,m,t))
return{c(){t=v("tr"),o=v("td"),s=v("span"),s.textContent="Move selected items to:",n=E(),a=v("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=E(),c=v("span"),c.textContent=" ",i=E(),l=v("button"),l.textContent="Move",D(a,"class","customselect"),void 0===e[1]&&B((()=>e[5].call(a))),D(l,"class","custombutton"),D(l,"type","button"),D(o,"class","fshCenter")},m(m,p){y(m,t,p),_(t,o),_(o,s),_(o,n),_(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
I(a,e[1]),_(o,r),_(o,c),_(o,i),_(o,l),f||(d=[S(a,"change",e[5]),S(l,"click",e[4])],f=!0)},p(e,[t]){if(13&t){let o
for(m=e[0],o=0;o<m.length;o+=1){const s=R(e,m,o)
u[o]?u[o].p(s,t):(u[o]=X(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=m.length}7&t&&I(a,e[1])},i:N,o:N,d(e){e&&k(t),w(u,e),f=!1,$(d)}}}function q(o,s,n){const a=A()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=M(this),n(1,r),n(2,i),n(0,c)}]}class z extends b{constructor(e){super(),j(this,e,q,Z,g,{folders:0})}}function G(e,t){return function(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}(e,t)}function K(){return s('[name="removeIndex[]"]:checked')}function L(e){const t=V(e)
t.nextElementSibling.remove(),t.remove()}async function O(e,t){(await G(e,t.map((e=>e.value)))).s&&t.forEach(L)}function P(e){T(30,K()).forEach(n(O,e.detail))}function Q(e){m().forEach((t=>{t.checked=Boolean(e)}))}let U
const W=e=>{u(e.map((e=>e.value))).then(F).then((t=>{t.s&&e.forEach(L)}))},Y=e=>{e.returnValue&&U&&(e.preventDefault(),T(30,K()).forEach(W),t("dropitems","Destroy by AJAX"))}
function ee(){U=!U,l("ajaxifyDestroy",U)}const te=[function(){const e=s('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=V(J(e[0]))
new z({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",P)},h,function(){(()=>{const e=c('input[type="submit"]')
i(e.parentNode,`&nbsp;&nbsp;${H("ajaxifyDestroy")}`),r(e.parentNode,"change",ee)})(),U=a("ajaxifyDestroy"),r(document.forms[0],"submit",Y),window.check=Q}]
function oe(){!f()&&p()&&d(te)}export default oe
//# sourceMappingURL=injectProfileDropItems-0cdf60ed.js.map
