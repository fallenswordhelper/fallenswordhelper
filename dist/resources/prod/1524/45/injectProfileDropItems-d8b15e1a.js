import{C as e,S as t,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,Z as m,y as d,bF as f}from"./calfSystem-e1e858cd.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-d601891d.js"
import{S as b,i as g,s as v,e as x,t as y,a as _,b as C,c as E,d as I,f as k,g as S,h as D,j as N,l as $,n as w,k as A,r as M,m as T,o as B}from"./index-2be3364e.js"
import{c as F}from"./chunk-82057567.js"
import{c as J}from"./closestTable-08179790.js"
import{c as R}from"./closestTr-1393a128.js"
import{m as V}from"./moveItem-2ccd35d7.js"
import{e as X}from"./errorDialog-0a862506.js"
import{b as Z}from"./simpleCheckbox-00f3c8e3.js"
import"./daAjaxSendItemsToRecipient-7db1d77f.js"
import"./htmlResult-e8d79b81.js"
import"./getInventoryById-d4059c8b.js"
import"./getInventory-517104e3.js"
import"./cmdExport-ac312c58.js"
import"./indexAjaxJson-fc55a4e0.js"
import"./doStatTotal-dbe867ed.js"
import"./batch-55db0df2.js"
import"./closest-8e46d454.js"
import"./dialog-25c9de65.js"
import"./dialogMsg-f24b55b1.js"
import"./isChecked-1aa3d1a2.js"
function q(e,t,o){const s=e.slice()
return s[7]=t[o],s}function z(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){_(e,t,s),C(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&E(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&I(t)}}}function G(e){let t,o,s,n,a,r,c,i,l,m,d,f=e[0],u=[]
for(let t=0;t<f.length;t+=1)u[t]=z(q(e,f,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===e[1]&&D((()=>e[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(f,p){_(f,t,p),C(t,o),C(o,s),C(o,n),C(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
N(a,e[1]),C(o,r),C(o,c),C(o,i),C(o,l),m||(d=[$(a,"change",e[5]),$(l,"click",e[4])],m=!0)},p(e,[t]){if(13&t){let o
for(f=e[0],o=0;o<f.length;o+=1){const s=q(e,f,o)
u[o]?u[o].p(s,t):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=f.length}7&t&&N(a,e[1])},i:w,o:w,d(e){e&&I(t),A(u,e),m=!1,M(d)}}}function H(o,s,n){const a=T()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends b{constructor(e){super(),g(this,e,H,G,v,{folders:0})}}function L(e,t){return V(t,e).then((()=>({r:t})))}function O(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(e){const t=R(e)
t.nextElementSibling.remove(),t.remove()}async function U(e,t){(await function(e,t){return s(O,L,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(Q)}function W(e){F(30,P()).forEach(a(U,e.detail))}function Y(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(X).then((t=>{t.s&&e.forEach(Q)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),F(30,P()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,m("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=R(J(e[0]))
new K({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",W)},j,function(){(()=>{const e=i('input[type="submit"]')
l(e.parentNode,`&nbsp;&nbsp;${Z("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=r("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Y}]
function ae(){!d()&&h()&&f(ne)}export default ae
//# sourceMappingURL=injectProfileDropItems-d8b15e1a.js.map
