import{C as t,T as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,_ as m,y as f,bJ as d}from"./calfSystem-6a3c85e0.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-dc8e8a64.js"
import{S as g,i as b,s as v,e as x,t as y,a as _,b as I,c as C,d as E,f as k,g as S,h as D,j as N,l as $,n as T,k as w,r as A,m as M,o as J}from"./index-2be3364e.js"
import{c as B}from"./chunk-82057567.js"
import{c as R}from"./closestTable-305a5f02.js"
import{c as F}from"./closestTr-3df2da21.js"
import{m as V}from"./moveItem-505f385a.js"
import{e as X}from"./errorDialog-0a862506.js"
import{b as q}from"./simpleCheckbox-9a762acc.js"
import"./daAjaxSendItemsToRecipient-731034d6.js"
import"./sendItems-68b87d4c.js"
import"./htmlResult-c58d347a.js"
import"./getInventoryById-e5962aec.js"
import"./getInventory-a569507a.js"
import"./guildStore-fcb25778.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./doStatTotal-dc259649.js"
import"./batch-e8572a8f.js"
import"./closest-8e46d454.js"
import"./dialog-25c9de65.js"
import"./dialogMsg-f24b55b1.js"
import"./isChecked-1aa3d1a2.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),I(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function H(t){let e,o,s,n,a,r,c,i,l,m,f,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=G(z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),I(e,o),I(o,s),I(o,n),I(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),I(o,r),I(o,c),I(o,i),I(o,l),m||(f=[$(a,"change",t[5]),$(l,"click",t[4])],m=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:T,o:T,d(t){t&&E(e),w(u,t),m=!1,A(f)}}}function K(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=J(this),n(1,r),n(2,i),n(0,c)}]}class L extends g{constructor(t){super(),b(this,t,K,H,v,{folders:0})}}function O(t,e){return V(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){B(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(X).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),B(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,m("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},j,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!f()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-382aac88.js.map
