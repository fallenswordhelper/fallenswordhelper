import{C as t,S as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,Z as m,y as f,bI as d}from"./calfSystem-cbf77dd7.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-63ba3a8f.js"
import{S as j,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,j as N,l as $,n as w,k as A,r as M,m as T,o as B}from"./index-79201ad3.js"
import{c as J}from"./chunk-4d4ecad3.js"
import{c as R}from"./closestTable-ea26a9a2.js"
import{c as F}from"./closestTr-205327ed.js"
import{m as V}from"./moveItem-c027527c.js"
import{e as X}from"./errorDialog-2e0e2853.js"
import{b as Z}from"./simpleCheckbox-27261aa3.js"
import"./daAjaxSendItemsToRecipient-2692d6d0.js"
import"./htmlResult-b098423b.js"
import"./getInventoryById-eb3b3485.js"
import"./getInventory-09198b2e.js"
import"./cmdExport-cd0ba453.js"
import"./indexAjaxJson-167a69fe.js"
import"./doStatTotal-94b8b51b.js"
import"./batch-996e914c.js"
import"./closest-d38ca7fc.js"
import"./dialog-16fed349.js"
import"./dialogMsg-16959bc2.js"
import"./isChecked-e1880947.js"
function q(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){I(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function G(t){let e,o,s,n,a,r,c,i,l,m,f,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(q(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,l),m||(f=[$(a,"change",t[5]),$(l,"click",t[4])],m=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=q(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:w,o:w,d(t){t&&E(e),A(u,t),m=!1,M(f)}}}function H(o,s,n){const a=T()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return V(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function W(t){J(30,P()).forEach(a(U,t.detail))}function Y(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(X).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,m("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",W)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${Z("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Y}]
function at(){!f()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-a4516aa7.js.map
