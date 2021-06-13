import{C as t,S as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,Z as f,y as m,bI as d}from"./calfSystem-ae2e69af.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-35c850ae.js"
import{S as j,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,j as N,l as $,n as w,k as A,r as M,m as T,o as B}from"./index-2be3364e.js"
import{c as J}from"./chunk-82057567.js"
import{c as R}from"./closestTable-b140f3bf.js"
import{c as F}from"./closestTr-eb55d944.js"
import{m as V}from"./moveItem-a2a6f6d6.js"
import{e as X}from"./errorDialog-0a862506.js"
import{b as Z}from"./simpleCheckbox-b27e4a45.js"
import"./daAjaxSendItemsToRecipient-db55173c.js"
import"./htmlResult-a2f95549.js"
import"./getInventoryById-53b88638.js"
import"./getInventory-ce8ab76d.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./doStatTotal-7fb789f5.js"
import"./batch-ff866587.js"
import"./closest-8e46d454.js"
import"./dialog-25c9de65.js"
import"./dialogMsg-f24b55b1.js"
import"./isChecked-1aa3d1a2.js"
function q(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){I(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function G(t){let e,o,s,n,a,r,c,i,l,f,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(q(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,l),f||(m=[$(a,"change",t[5]),$(l,"click",t[4])],f=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=q(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:w,o:w,d(t){t&&E(e),A(u,t),f=!1,M(m)}}}function H(o,s,n){const a=T()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return V(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function W(t){J(30,P()).forEach(a(U,t.detail))}function Y(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(X).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,f("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",W)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${Z("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Y}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-8a8fa035.js.map
