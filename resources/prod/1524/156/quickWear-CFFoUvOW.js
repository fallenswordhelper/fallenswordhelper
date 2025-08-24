import{b as a,a as e}from"./backpackOk-C2rkhfXB.js"
import{ap as s,x as t,y as n,B as i,C as r,E as c,s as o,P as d,Q as l,S as u,e1 as m,L as v,N as p,G as f,bG as h,d8 as k,F as b,bO as g,D as Q,J as y,bB as W,bE as q,am as N,b$ as x,e2 as w,aF as I,e0 as S,n as j,cp as _,$ as P,a1 as A,be as F,bj as C,f as E,ak as L,al as B,I as H,bP as T,bA as G,ay as M,as as O,dx as U,d as D,i as J,u as z,c as K,cC as Y,a9 as R,dK as V,a6 as X,o as Z,cJ as aa,p as ea,a2 as sa,aA as ta,e3 as na,av as ia}from"./calfSystem-79LsojAC.js"
import{e as ra,s as ca}from"./selfIdIs-BxVlCcNr.js"
import{s as oa}from"./simpleCheckbox-GIXRLUIF.js"
import{F as da}from"./FolderButtons-CD6O8sF3.js"
import{c as la}from"./createInput-7MlQDlWD.js"
import{c as ua}from"./createLabel-CFBkgauW.js"
import"./isChecked-D_0do7nT.js"
var ma=(a,e)=>o("QuickWear","AH Quick Search",e()),va=i('<div class="svelte-17xtpol"> <a>AH Quick Search</a> found in your inventory</div>')
function pa(a,e){t(e,!0)
let s=n(e,"data",3,"")
var i=va(),o=c(i),f=r(o)
f.__click=[ma,s],d(()=>{l(o,`Items ${s()??""} from `),u(f,"href",m)}),v(a,i),p()}s(["click"])
var fa=i('<div class="th svelte-kjal3l"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function ha(a){var e=fa()
v(a,e)}var ka=i("<hr/>")
function ba(a){var e=ka()
v(a,e)}var ga=(a,e)=>o("QuickWear","Nick Name",e().searchname),$a=i("<a> </a>"),Qa=i("<div><div> </div> <div><!></div> <div> </div></div>")
function ya(a,e){t(e,!0)
let s=n(e,"data",19,()=>({}))
var i=Qa()
let o
var m=c(i),b=c(m),g=r(m,2),$=c(g),Q=a=>{var e=$a()
e.__click=[ga,s]
var t=c(e)
d(()=>{u(e,"href",`${k??""}${s().searchname??""}`),l(t,s().nickname)}),v(a,e)}
f($,a=>{s().nickname&&a(Q)})
var y=r(g,2),W=c(y)
d(a=>{o=h(i,1,"tr svelte-1o62vvh",null,o,a),l(b,s().searchname),l(W,s().count)},[()=>({odd:s().odd})]),v(a,i),p()}s(["click"])
var Wa=(a,e)=>o("QuickWear","Not Found",e()),qa=i("<!> <a> </a>",1),Na=i("<div>Did not find: <!></div>")
function xa(a,e){t(e,!0)
let s=n(e,"data",19,()=>[])
var i=Na(),o=r(c(i))
b(o,17,s,g,(a,e,s)=>{let t=()=>y(e).searchname
var n=qa(),i=Q(n),o=a=>{var e=W(",")
v(a,e)}
f(i,a=>{s>0&&a(o)})
var m=r(i,2)
m.__click=[Wa,t]
var p=c(m)
d(()=>{u(m,"href",`${k??""}${t()??""}`),l(p,y(e).nickname)}),v(a,n)}),v(a,i),p()}s(["click"])
var wa=i('<div class="vs svelte-114e2ss"><!></div>')
function Ia(a,e){t(e,!0)
let s=n(e,"itemList",3,0)
const i=q(s().items,"n").map(({n:a})=>({n:a,count:s().items.filter(({n:e})=>e===a).length})),r=N("quickSearchList")||[],o=q(r,"searchname").sort((a,e)=>x(a.searchname,e.searchname)),d=o.filter(({searchname:a})=>i.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},s)=>({component:ya,data:{count:i.find(({n:a})=>a===e).count,nickname:a,odd:s%2,searchname:e},id:s+3})),l=i.filter(({n:a})=>!d.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},s)=>({component:ya,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7})),u=[{component:pa,id:1},{component:ha,id:2},...d,{component:ba,id:d.length+3},{component:xa,data:o.filter(({searchname:a})=>!i.some(({n:e})=>e===a)),id:d.length+4},{component:ba,id:d.length+5},{component:pa,data:"NOT",id:d.length+6},...l]
var m=wa(),f=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=I(),n=Q(t)
S(n,()=>s().component,(a,e)=>{e(a,{get data(){return s().data}})}),v(a,t)}
w(f,{get items(){return u},children:a,$$slots:{default:!0}})}v(a,m),p()}function Sa(a,e){!function(a,e){j(Ia,{props:{itemList:a},target:e})}(a,e)}function ja(a){return _({subcmd:"equipitem",inventory_id:a})}async function _a(a){return{s:0===(await A({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Pa(a){return P(ja,_a,a)}var Aa=i("<img/>")
function Fa(a,e){t(e,!0)
let s=n(e,"item",3,0),i=n(e,"small",3,0),r=n(e,"t",3,0)
const c=a=>13699===a.b?(a=>`${C}composing/${a.x.d}_${a.x.c}.png`)(a):(a=>`${C}items/${a.b}.gif`)(a)
var o=Aa()
let l
d((a,e,t)=>{u(o,"alt",s().n),l=h(o,1,"tip-dynamic svelte-1oqzgf0",null,l,a),u(o,"data-tipped",e),u(o,"src",t)},[()=>({small:i()}),()=>{return`fetchitem.php?item_id=${(a=s()).b}&inv_id=${a.a}&t=${r()}&p=${F()}`
var a},()=>c(s())]),v(a,o),p()}var Ca=i('<span class="itemUsed svelte-10im2pe"> </span>'),Ea=i('<span class="fshSpinner fshSpin12"></span>'),La=i('<span class="fshSpinner fshSpin12"></span>'),Ba=i('<span class="equippable svelte-10im2pe"><!></span> | <span class="usable svelte-10im2pe"><!></span>',1),Ha=i('<div class="grid svelte-10im2pe"><div class="actionButtons svelte-10im2pe"><!></div> <div><!></div> <div> </div></div>'),Ta=i('<div class="folderButtons svelte-10im2pe"><!></div> <div class="vs svelte-10im2pe"><div class="headGrid svelte-10im2pe"><div class="headOne svelte-10im2pe">Actions</div> <div>Items</div></div> <!></div>',1)
function Ga(a,e){t(e,!0)
let s=n(e,"appInv",3,0)
const i=E(s().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),u=(a,e)=>x(a.n,e.n)
let m=L(B(s().items.sort(u)))
async function h(a,e,s,t){o("QuickWear",`doAction - ${t}`)
const n=y(m).findIndex(e=>e.a===a)
y(m)[n][e]=1;(await s(a)).s&&(y(m)[n].used=t)}var k=Ta(),b=Q(k),g=c(b)
da(g,{doFilter:function(a){o("QuickWear","doFilter")
const e=Number(a)
H(m,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(u),!0)},get folders(){return i}})
var $=r(b,2),q=r(c($),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=Ha(),n=c(t),i=c(n),o=a=>{var e=Ca(),t=c(e)
d(()=>l(t,s().used)),v(a,e)},u=a=>{var e=Ba(),t=Q(e),n=c(t),i=a=>{var e=Ea()
v(a,e)},o=a=>{{let e=G(()=>!s().eq)
T(a,{get disabled(){return y(e)},onclick:()=>{h(s().a,"equip",Pa,"Worn")},children:(a,e)=>{var s=W("Wear")
v(a,s)},$$slots:{default:!0}})}}
f(n,a=>{s().equip?a(i):a(o,!1)})
var d=r(t,2),l=c(d),u=a=>{var e=La()
v(a,e)},m=a=>{{let e=G(()=>s().eq||!(s().u&&!s().c))
T(a,{get disabled(){return y(e)},onclick:()=>async function(a){(M.disableQuickWearPrompts||await O("Are you sure you want to use/extract the item?"))&&h(a,"use",U,"Used")}(s().a),children:(a,e)=>{var s=W("Use/Ext")
v(a,s)},$$slots:{default:!0}})}}
f(l,a=>{s().use?a(u):a(m,!1)}),v(a,e)}
f(i,a=>{s().used?a(o):a(u,!1)})
var m=r(n,2)
Fa(c(m),{get item(){return s()},small:"1",t:"0"})
var p=r(m,2),k=c(p)
d(()=>l(k,s().n)),v(a,t)}
w(q,{get items(){return y(m)},children:a,$$slots:{default:!0}})}v(a,k),p()}function Ma(a,e){!function(a,e){j(Ga,{props:{appInv:a},target:e})}(a,e)}const Oa=(a,e)=>a+String(e)
function Ua(a,e,s){return la({checked:0===s,id:Oa(a,s),name:a,type:"radio"})}function Da(a,e,s,t){const n=V({className:"ui-state-default ui-corner-top"})
return J(n,ua({htmlFor:Oa(a,t),innerHTML:s})),0!==t&&X(n,"click",()=>Y(Oa(a,t),e[t])),Z(n,()=>o("QuickWear",Oa(a,t))),n}const Ja=()=>z({className:"ui-tabs-panel ui-corner-bottom"})
function za(a,e,s,t){const n=function(a,e,s){const t=R({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(K(Da,e,s)).forEach(K(J,t)),t}(a,e,t)
Y(`${e}-header`,n),J(s,n)}function Ka(a,e){const s=z({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=K(J,s)
!function(a,e,s){a.map(K(Ua,e)).forEach(s)}(a,e,t)
const n=a.map(Ja)
return Y(Oa(e,0),n[0]),za(a,e,s,n),n.forEach(t),s}const Ya="disableQuickWearPrompts"
function Ra(){o("QuickWear","Toggle Prompts"),M.disableQuickWearPrompts=!M.disableQuickWearPrompts,ia(Ya,M.disableQuickWearPrompts)}function Va(a){J(a,z({className:"qwPref",innerHTML:oa(Ya)}))}function Xa(a,e){var s,t,n
na("qwtab-header",Va),na("qwtab0",a=>Ma(e,a)),na("qwtab1",a=>Sa(e,a)),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",D("",s=a),J(s,Ka(t,n)),Z(a,ra([[ca(Ya),Ra]]))}async function Za(s){s&&$(s).on("dialogclose",()=>o("QuickWear","Close"))
const t=s||ea()
if(!t)return
sa(t,"Getting item list from backpack..."),M.disableQuickWearPrompts=ta(Ya)
!function(a,s){e(s)&&Xa(a,s)}(t,await a())}function ae(a){aa()&&Za(a)}export{ae as default}
//# sourceMappingURL=quickWear-CFFoUvOW.js.map
