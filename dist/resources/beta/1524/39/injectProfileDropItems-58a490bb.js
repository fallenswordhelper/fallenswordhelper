import{C as t,W as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,_ as f,y as m,bE as d}from"./calfSystem-26fbeaeb.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-629d01c3.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as E,c as C,d as I,f as k,g as D,h as S,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-7b21bc0b.js"
import{c as J}from"./chunk-f573f88c.js"
import{c as R}from"./closestTable-0d8adda0.js"
import{c as F}from"./closestTr-9c98eebc.js"
import{m as V}from"./moveItem-3ff4d7e1.js"
import{e as W}from"./errorDialog-e19553de.js"
import{b as X}from"./simpleCheckbox-33d1f679.js"
import"./daAjaxSendItemsToRecipient-bb4f90ea.js"
import"./htmlResult-717c66ff.js"
import"./getInventoryById-29cc4c9d.js"
import"./getInventory-08cad8a3.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
import"./doStatTotal-e1ab27c9.js"
import"./batch-a9571296.js"
import"./closest-97a04dcf.js"
import"./dialog-181309bb.js"
import"./dialogMsg-a960ad1e.js"
import"./isChecked-6d3ab351.js"
function q(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),E(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function G(t){let e,o,s,n,a,r,c,i,l,f,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(q(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",D(a,"class","customselect"),void 0===t[1]&&T((()=>t[5].call(a))),D(l,"class","custombutton"),D(l,"type","button"),D(o,"class","fshCenter")},m(d,p){_(d,e,p),E(e,o),E(o,s),E(o,n),E(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
S(a,t[1]),E(o,r),E(o,c),E(o,i),E(o,l),f||(m=[N(a,"change",t[5]),N(l,"click",t[4])],f=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=q(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&S(a,t[1])},i:$,o:$,d(t){t&&I(e),w(u,t),f=!1,A(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return V(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function Y(t){J(30,P()).forEach(a(U,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(W).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,f("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-58a490bb.js.map
