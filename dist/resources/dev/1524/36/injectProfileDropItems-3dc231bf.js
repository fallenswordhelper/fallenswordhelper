import{C as e,X as t,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,a0 as f,y as m,bF as d}from"./calfSystem-eeb1d862.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-7608ba74.js"
import{S as b,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-62c3c7c6.js"
import{c as F}from"./chunk-eaa75fd1.js"
import{c as J}from"./closestTable-7d554f21.js"
import{c as R}from"./closestTr-8d5ed3dd.js"
import{m as X}from"./moveItem-fa0b57bd.js"
import{e as V}from"./errorDialog-db13a69a.js"
import{b as q}from"./simpleCheckbox-91ea73d5.js"
import"./daAjaxSendItemsToRecipient-4f20f9ac.js"
import"./sendItems-285f8454.js"
import"./htmlResult-541e86c4.js"
import"./getInventoryById-b7958825.js"
import"./getInventory-938a71f5.js"
import"./guildStore-bd4084a2.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./doStatTotal-677e42df.js"
import"./batch-7ea0272b.js"
import"./closest-7968af48.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./isChecked-d75e63a5.js"
function z(e,t,o){const s=e.slice()
return s[7]=t[o],s}function G(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){I(e,t,s),_(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&C(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&E(t)}}}function H(e){let t,o,s,n,a,r,c,i,l,f,m,d=e[0],u=[]
for(let t=0;t<d.length;t+=1)u[t]=G(z(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===e[1]&&T((()=>e[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,t,p),_(t,o),_(o,s),_(o,n),_(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
D(a,e[1]),_(o,r),_(o,c),_(o,i),_(o,l),f||(m=[N(a,"change",e[5]),N(l,"click",e[4])],f=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=z(e,d,o)
u[o]?u[o].p(s,t):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&t&&D(a,e[1])},i:$,o:$,d(e){e&&E(t),w(u,e),f=!1,A(m)}}}function K(o,s,n){const a=M()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends b{constructor(e){super(),g(this,e,K,H,v,{folders:0})}}function O(e,t){return X(t,e).then((()=>({r:t})))}function P(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(e){const t=R(e)
t.nextElementSibling.remove(),t.remove()}async function W(e,t){(await function(e,t){return s(P,O,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(U)}function Y(e){F(30,Q()).forEach(a(W,e.detail))}function Z(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(V).then((t=>{t.s&&e.forEach(U)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),F(30,Q()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,f("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=R(J(e[0]))
new L({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},j,function(){(()=>{const e=i('input[type="submit"]')
l(e.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=r("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function ae(){!m()&&h()&&d(ne)}export default ae
//# sourceMappingURL=injectProfileDropItems-3dc231bf.js.map
