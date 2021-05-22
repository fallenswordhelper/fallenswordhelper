import{C as t,T as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,_ as l,y as m,bH as d}from"./calfSystem-f7cf24f6.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-3d01a46f.js"
import{S as b,i as g,s as v,e as x,t as y,a as _,b as I,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as T,r as w,k as A,m as M,o as B}from"./index-3af319ff.js"
import{c as J}from"./chunk-d354fb99.js"
import{c as R}from"./closestTable-170bdad1.js"
import{c as F}from"./closestTr-6cca472b.js"
import{m as H}from"./moveItem-6bb8ff00.js"
import{e as V}from"./errorDialog-48630d52.js"
import{b as X}from"./simpleCheckbox-92565e2b.js"
import"./daAjaxSendItemsToRecipient-f7e26b0d.js"
import"./sendItems-726d52bd.js"
import"./htmlResult-73e3fb74.js"
import"./getInventoryById-46c0ed75.js"
import"./getInventory-8cdb4e39.js"
import"./guildStore-7a373ab0.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./doStatTotal-df5d1ab9.js"
import"./batch-a8223d61.js"
import"./closest-7cf61e52.js"
import"./dialog-e5c57349.js"
import"./dialogMsg-227939ed.js"
import"./isChecked-5630e19a.js"
function q(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),I(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function G(t){let e,o,s,n,a,r,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(q(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&M((()=>t[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),I(e,o),I(o,s),I(o,n),I(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
D(a,t[1]),I(o,r),I(o,c),I(o,i),I(o,f),l||(m=[N(a,"change",t[5]),N(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=q(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&D(a,t[1])},i:$,o:$,d(t){t&&E(e),T(u,t),l=!1,w(m)}}}function K(o,s,n){const a=A()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends b{constructor(t){super(),g(this,t,K,G,v,{folders:0})}}function O(t,e){return H(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){J(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},j,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-5b69713b.js.map
