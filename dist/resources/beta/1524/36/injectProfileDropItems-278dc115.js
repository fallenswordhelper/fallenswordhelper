import{C as e,W as t,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,_ as f,y as m,bE as d}from"./calfSystem-4a40365f.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-4919b4e2.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as E,c as C,d as I,f as k,g as D,h as S,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-62c3c7c6.js"
import{c as J}from"./chunk-eaa75fd1.js"
import{c as R}from"./closestTable-d46cf6db.js"
import{c as F}from"./closestTr-7b3a3d25.js"
import{m as V}from"./moveItem-2dfbe239.js"
import{e as W}from"./errorDialog-db13a69a.js"
import{b as X}from"./simpleCheckbox-54e3f875.js"
import"./daAjaxSendItemsToRecipient-c5ce7292.js"
import"./htmlResult-bb7a88e2.js"
import"./getInventoryById-dae6200e.js"
import"./getInventory-658c2b33.js"
import"./cmdExport-92971757.js"
import"./indexAjaxJson-6d511c0e.js"
import"./doStatTotal-9b76c02c.js"
import"./batch-7e6fa7bc.js"
import"./closest-7968af48.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./isChecked-d75e63a5.js"
function q(e,t,o){const s=e.slice()
return s[7]=t[o],s}function z(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){_(e,t,s),E(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&C(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&I(t)}}}function G(e){let t,o,s,n,a,r,c,i,l,f,m,d=e[0],u=[]
for(let t=0;t<d.length;t+=1)u[t]=z(q(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",D(a,"class","customselect"),void 0===e[1]&&T((()=>e[5].call(a))),D(l,"class","custombutton"),D(l,"type","button"),D(o,"class","fshCenter")},m(d,p){_(d,t,p),E(t,o),E(o,s),E(o,n),E(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
S(a,e[1]),E(o,r),E(o,c),E(o,i),E(o,l),f||(m=[N(a,"change",e[5]),N(l,"click",e[4])],f=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=q(e,d,o)
u[o]?u[o].p(s,t):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&t&&S(a,e[1])},i:$,o:$,d(e){e&&I(t),w(u,e),f=!1,A(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(e){super(),g(this,e,H,G,v,{folders:0})}}function L(e,t){return V(t,e).then((()=>({r:t})))}function O(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(e){const t=F(e)
t.nextElementSibling.remove(),t.remove()}async function U(e,t){(await function(e,t){return s(O,L,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(Q)}function Y(e){J(30,P()).forEach(a(U,e.detail))}function Z(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(W).then((t=>{t.s&&e.forEach(Q)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),J(30,P()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,f("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=F(R(e[0]))
new K({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},b,function(){(()=>{const e=i('input[type="submit"]')
l(e.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=r("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function ae(){!m()&&h()&&d(ne)}export default ae
//# sourceMappingURL=injectProfileDropItems-278dc115.js.map
