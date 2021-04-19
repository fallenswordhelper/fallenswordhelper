import{C as t,X as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,a0 as m,y as f,bF as d}from"./calfSystem-b31aba65.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-baacba87.js"
import{S as j,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-7b21bc0b.js"
import{c as F}from"./chunk-f573f88c.js"
import{c as J}from"./closestTable-756f74a0.js"
import{c as R}from"./closestTr-51be90ef.js"
import{m as X}from"./moveItem-2df15210.js"
import{e as V}from"./errorDialog-e19553de.js"
import{b as q}from"./simpleCheckbox-d91d951a.js"
import"./daAjaxSendItemsToRecipient-047e125a.js"
import"./sendItems-e1f25bc5.js"
import"./htmlResult-3c24ad63.js"
import"./getInventoryById-cae61a80.js"
import"./getInventory-56961d1a.js"
import"./guildStore-288b0535.js"
import"./cmdExport-8d5cf03e.js"
import"./indexAjaxJson-0fdc3cdc.js"
import"./doStatTotal-b22ced68.js"
import"./batch-4b6ac500.js"
import"./closest-97a04dcf.js"
import"./dialog-181309bb.js"
import"./dialogMsg-a960ad1e.js"
import"./isChecked-6d3ab351.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){I(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function H(t){let e,o,s,n,a,r,c,i,l,m,f,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=G(z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&T((()=>t[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
D(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,l),m||(f=[N(a,"change",t[5]),N(l,"click",t[4])],m=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&D(a,t[1])},i:$,o:$,d(t){t&&E(e),w(u,t),m=!1,A(f)}}}function K(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends j{constructor(t){super(),g(this,t,K,H,v,{folders:0})}}function O(t,e){return X(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=R(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){F(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),F(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,m("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=R(J(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!f()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-814c67a8.js.map
