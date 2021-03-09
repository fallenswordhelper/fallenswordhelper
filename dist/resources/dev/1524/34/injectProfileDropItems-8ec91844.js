import{B as t,W as e,w as o,D as s,t as n,H as a,f as r,C as c,i,_ as f,x as l,bC as d}from"./calfSystem-c07e3259.js"
import{g as m,d as u,a as p,i as h}from"./injectStoreItems-57afc081.js"
import{S as j,i as b,s as g,e as v,t as x,a as y,b as _,c as C,d as k,f as E,g as S,h as D,l as I,n as N,j as w,r as $,k as A,m as M,o as T}from"./index-7fbf76d3.js"
import{c as B}from"./chunk-5d7e6f3a.js"
import{c as J}from"./closestTable-255c4693.js"
import{c as F}from"./closestTr-51c4677a.js"
import{e as H}from"./errorDialog-da819f92.js"
import{b as R}from"./simpleCheckbox-d4a4dee5.js"
import"./daAjaxSendItemsToRecipient-83f134bb.js"
import"./senditems-6addbfb7.js"
import"./getInventoryById-78665853.js"
import"./getInventory-a7a4a959.js"
import"./guildStore-574f6b62.js"
import"./cmdExport-73f6ff02.js"
import"./indexAjaxJson-18a12ea8.js"
import"./doStatTotal-f7d22e98.js"
import"./batch-13a297b0.js"
import"./closest-f906514d.js"
import"./dialogMsg-2f52cc12.js"
import"./isChecked-d96c8dec.js"
function V(t,e,o){const s=t.slice()
return s[7]=e[o],s}function W(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=v("option"),o=x(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){y(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&k(e)}}}function X(t){let e,o,s,n,a,r,c,i,f,l,d,m=t[0],u=[]
for(let e=0;e<m.length;e+=1)u[e]=W(V(t,m,e))
return{c(){e=v("tr"),o=v("td"),s=v("span"),s.textContent="Move selected items to:",n=E(),a=v("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=E(),c=v("span"),c.textContent=" ",i=E(),f=v("button"),f.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&M((()=>t[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(m,p){y(m,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
D(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,f),l||(d=[I(a,"change",t[5]),I(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(m=t[0],o=0;o<m.length;o+=1){const s=V(t,m,o)
u[o]?u[o].p(s,e):(u[o]=W(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=m.length}7&e&&D(a,t[1])},i:N,o:N,d(t){t&&k(e),w(u,t),l=!1,$(d)}}}function q(o,s,n){const a=A()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=T(this),n(1,r),n(2,i),n(0,c)}]}class z extends j{constructor(t){super(),b(this,t,q,X,g,{folders:0})}}function G(t,e){return function(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}(t,e)}function K(){return s('[name="removeIndex[]"]:checked')}function L(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function O(t,e){(await G(t,e.map((t=>t.value)))).s&&e.forEach(L)}function P(t){B(30,K()).forEach(n(O,t.detail))}function Q(t){m().forEach((e=>{e.checked=Boolean(t)}))}let U
const Y=t=>{u(t.map((t=>t.value))).then(H).then((e=>{e.s&&t.forEach(L)}))},Z=t=>{t.returnValue&&U&&(t.preventDefault(),B(30,K()).forEach(Y),e("dropitems","Destroy by AJAX"))}
function tt(){U=!U,f("ajaxifyDestroy",U)}const et=[function(){const t=s('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(J(t[0]))
new z({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",P)},h,function(){(()=>{const t=c('input[type="submit"]')
i(t.parentNode,`&nbsp;&nbsp;${R("ajaxifyDestroy")}`),r(t.parentNode,"change",tt)})(),U=a("ajaxifyDestroy"),r(document.forms[0],"submit",Z),window.check=Q}]
function ot(){!l()&&p()&&d(et)}export default ot
//# sourceMappingURL=injectProfileDropItems-8ec91844.js.map
