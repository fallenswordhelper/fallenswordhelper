import{C as t,U as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,a0 as f,y as m,bF as d}from"./calfSystem-3cb2f93e.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-31d988e6.js"
import{S as j,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-60ac54a4.js"
import{c as F}from"./chunk-4bfbd415.js"
import{c as J}from"./closestTable-388bd2b6.js"
import{c as R}from"./closestTr-0cdbb46f.js"
import{m as U}from"./moveItem-ef860923.js"
import{e as V}from"./errorDialog-0f2ff56e.js"
import{b as X}from"./simpleCheckbox-11592a14.js"
import"./daAjaxSendItemsToRecipient-90b15976.js"
import"./sendItems-ab3a12d9.js"
import"./htmlResult-4d7038ac.js"
import"./getInventoryById-74030f86.js"
import"./getInventory-238d3b07.js"
import"./guildStore-a425d6aa.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./doStatTotal-2c8b26e5.js"
import"./batch-60e4331a.js"
import"./closest-bc1fafe7.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./isChecked-987a8a1c.js"
function q(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){I(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function G(t){let e,o,s,n,a,r,c,i,l,f,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(q(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&T((()=>t[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
D(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,l),f||(m=[N(a,"change",t[5]),N(l,"click",t[4])],f=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=q(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&D(a,t[1])},i:$,o:$,d(t){t&&E(e),w(u,t),f=!1,A(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return U(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=R(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function Y(t){F(30,P()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),F(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,f("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=R(J(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-b5c2d94a.js.map
