import{C as t,T as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,_ as l,y as m,bJ as d}from"./calfSystem-d3f0a380.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-b2751898.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as I,c as C,d as E,f as k,g as S,h as D,j as N,l as $,n as T,k as w,r as A,m as M,o as J}from"./index-79201ad3.js"
import{c as B}from"./chunk-4d4ecad3.js"
import{c as R}from"./closestTable-f3f570fc.js"
import{c as F}from"./closestTr-fd5f5074.js"
import{m as V}from"./moveItem-bdbb4d71.js"
import{e as X}from"./errorDialog-2e0e2853.js"
import{b as q}from"./simpleCheckbox-7afb7f1a.js"
import"./daAjaxSendItemsToRecipient-b83b4b94.js"
import"./sendItems-c8a61001.js"
import"./htmlResult-3e5887e6.js"
import"./getInventoryById-41db4f82.js"
import"./getInventory-9586c0e4.js"
import"./guildStore-7eb2c059.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./doStatTotal-af8f07c1.js"
import"./batch-7c0362d6.js"
import"./closest-d38ca7fc.js"
import"./dialog-16fed349.js"
import"./dialogMsg-16959bc2.js"
import"./isChecked-e1880947.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),I(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function H(t){let e,o,s,n,a,r,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=G(z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),I(e,o),I(o,s),I(o,n),I(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),I(o,r),I(o,c),I(o,i),I(o,f),l||(m=[$(a,"change",t[5]),$(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:T,o:T,d(t){t&&E(e),w(u,t),l=!1,A(m)}}}function K(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=J(this),n(1,r),n(2,i),n(0,c)}]}class L extends j{constructor(t){super(),g(this,t,K,H,v,{folders:0})}}function O(t,e){return V(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){B(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(X).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),B(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-1fa39d17.js.map
