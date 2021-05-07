import{C as t,T as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,_ as f,y as m,bE as u}from"./calfSystem-1d588248.js"
import{g as d,d as p,a as h,i as b}from"./injectStoreItems-2959b0a0.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as E,c as C,d as I,f as k,g as D,h as S,l as N,n as $,j as T,r as w,k as A,m as M,o as B}from"./index-60ac54a4.js"
import{c as J}from"./chunk-4bfbd415.js"
import{c as R}from"./closestTable-18ec3479.js"
import{c as F}from"./closestTr-40749289.js"
import{m as V}from"./moveItem-880f8564.js"
import{e as X}from"./errorDialog-0f2ff56e.js"
import{b as q}from"./simpleCheckbox-f6900a79.js"
import"./daAjaxSendItemsToRecipient-7725c2a7.js"
import"./htmlResult-19e4cbea.js"
import"./getInventoryById-5ab299aa.js"
import"./getInventory-1268b5ea.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
import"./doStatTotal-60aece13.js"
import"./batch-40833b07.js"
import"./closest-bc1fafe7.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./isChecked-987a8a1c.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),E(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function H(t){let e,o,s,n,a,r,c,i,l,f,m,u=t[0],d=[]
for(let e=0;e<u.length;e+=1)d[e]=G(z(t,u,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<d.length;t+=1)d[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",D(a,"class","customselect"),void 0===t[1]&&M((()=>t[5].call(a))),D(l,"class","custombutton"),D(l,"type","button"),D(o,"class","fshCenter")},m(u,p){_(u,e,p),E(e,o),E(o,s),E(o,n),E(o,a)
for(let t=0;t<d.length;t+=1)d[t].m(a,null)
S(a,t[1]),E(o,r),E(o,c),E(o,i),E(o,l),f||(m=[N(a,"change",t[5]),N(l,"click",t[4])],f=!0)},p(t,[e]){if(13&e){let o
for(u=t[0],o=0;o<u.length;o+=1){const s=z(t,u,o)
d[o]?d[o].p(s,e):(d[o]=G(s),d[o].c(),d[o].m(a,null))}for(;o<d.length;o+=1)d[o].d(1)
d.length=u.length}7&e&&S(a,t[1])},i:$,o:$,d(t){t&&I(e),T(d,t),f=!1,w(m)}}}function K(o,s,n){const a=A()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends j{constructor(t){super(),g(this,t,K,H,v,{folders:0})}}function O(t,e){return V(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){J(30,Q()).forEach(a(W,t.detail))}function Z(t){d().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(X).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,f("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&u(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-259ab45e.js.map
