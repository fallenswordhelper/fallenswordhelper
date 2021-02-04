import{B as e,W as t,w as o,D as s,t as n,H as a,f as r,C as c,i,_ as l,x as f,bC as d}from"./calfSystem-37f70deb.js"
import{g as m,d as u,a as p,i as b}from"./injectStoreItems-87b2697d.js"
import{S as h,i as j,s as g,e as v,t as x,a as y,b as _,c as C,d as k,f as E,g as S,h as D,l as I,n as N,j as w,r as $,k as A,m as M,o as T}from"./index-bebd168e.js"
import{c as B}from"./chunk-c6dcf4eb.js"
import{c as J}from"./closestTable-6f68d8f3.js"
import{c as F}from"./closestTr-8453785a.js"
import{e as H}from"./errorDialog-998604da.js"
import{b as R}from"./simpleCheckbox-329b4550.js"
import"./daAjaxSendItemsToRecipient-a275d9e4.js"
import"./senditems-2013acfe.js"
import"./getInventoryById-63c97c31.js"
import"./getInventory-bdf0965e.js"
import"./guildStore-48dcb633.js"
import"./cmdExport-de9079b1.js"
import"./indexAjaxJson-82f32240.js"
import"./doStatTotal-a3b3e660.js"
import"./batch-556f2f36.js"
import"./closest-8b679b7a.js"
import"./dialogMsg-fcad563e.js"
import"./isChecked-622b73bf.js"
function V(e,t,o){const s=e.slice()
return s[7]=t[o],s}function W(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=v("option"),o=x(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){y(e,t,s),_(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&C(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&k(t)}}}function X(e){let t,o,s,n,a,r,c,i,l,f,d,m=e[0],u=[]
for(let t=0;t<m.length;t+=1)u[t]=W(V(e,m,t))
return{c(){t=v("tr"),o=v("td"),s=v("span"),s.textContent="Move selected items to:",n=E(),a=v("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=E(),c=v("span"),c.textContent=" ",i=E(),l=v("button"),l.textContent="Move",S(a,"class","customselect"),void 0===e[1]&&M((()=>e[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(m,p){y(m,t,p),_(t,o),_(o,s),_(o,n),_(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
D(a,e[1]),_(o,r),_(o,c),_(o,i),_(o,l),f||(d=[I(a,"change",e[5]),I(l,"click",e[4])],f=!0)},p(e,[t]){if(13&t){let o
for(m=e[0],o=0;o<m.length;o+=1){const s=V(e,m,o)
u[o]?u[o].p(s,t):(u[o]=W(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=m.length}7&t&&D(a,e[1])},i:N,o:N,d(e){e&&k(t),w(u,e),f=!1,$(d)}}}function q(o,s,n){const a=A()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=T(this),n(1,r),n(2,i),n(0,c)}]}class z extends h{constructor(e){super(),j(this,e,q,X,g,{folders:0})}}function G(e,t){return function(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}(e,t)}function K(){return s('[name="removeIndex[]"]:checked')}function L(e){const t=F(e)
t.nextElementSibling.remove(),t.remove()}async function O(e,t){(await G(e,t.map((e=>e.value)))).s&&t.forEach(L)}function P(e){B(30,K()).forEach(n(O,e.detail))}function Q(e){m().forEach((t=>{t.checked=Boolean(e)}))}let U
const Y=e=>{u(e.map((e=>e.value))).then(H).then((t=>{t.s&&e.forEach(L)}))},Z=e=>{e.returnValue&&U&&(e.preventDefault(),B(30,K()).forEach(Y),t("dropitems","Destroy by AJAX"))}
function ee(){U=!U,l("ajaxifyDestroy",U)}const te=[function(){const e=s('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=F(J(e[0]))
new z({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",P)},b,function(){(()=>{const e=c('input[type="submit"]')
i(e.parentNode,`&nbsp;&nbsp;${R("ajaxifyDestroy")}`),r(e.parentNode,"change",ee)})(),U=a("ajaxifyDestroy"),r(document.forms[0],"submit",Z),window.check=Q}]
function oe(){!f()&&p()&&d(te)}export default oe
//# sourceMappingURL=injectProfileDropItems-0b536de1.js.map
