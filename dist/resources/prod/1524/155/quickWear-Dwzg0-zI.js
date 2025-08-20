import{b as a,a as e}from"./backpackOk-CPMw1ST_.js"
import{ao as s,x as t,y as i,A as n,B as r,D as c,s as o,O as d,P as l,R as u,e6 as m,K as v,L as p,F as f,bF as h,df as k,E as b,bN as g,C as y,I as Q,bA as W,bD as N,al as q,b_ as x,e7 as j,aE as w,e5 as I,n as _,co as S,$ as P,a0 as A,bd as E,bi as F,f as L,aj as C,ak as H,H as B,bO as O,bz as T,ax as M,ar as U,dE as z,d as D,i as G,u as R,c as K,cB as V,a8 as J,dR as X,a5 as Y,o as Z,cI as aa,p as ea,a1 as sa,az as ta,e8 as ia,au as na}from"./calfSystem-UyQ_FKFu.js"
import{e as ra,s as ca}from"./selfIdIs-CwDtrHCy.js"
import{s as oa}from"./simpleCheckbox-C_yEWmPy.js"
import"./legacy-BJNb2DD1.js"
import{F as da}from"./FolderButtons-CBTaD3Xs.js"
import{c as la}from"./createInput-B13zWypd.js"
import{c as ua}from"./createLabel-BjAqmNH0.js"
import"./isChecked-D_0do7nT.js"
var ma=(a,e)=>o("QuickWear","AH Quick Search",e()),va=n('<div class="svelte-17xtpol"> <a>AH Quick Search</a> found in your inventory</div>')
function pa(a,e){t(e,!0)
let s=i(e,"data",3,"")
var n=va(),o=c(n),f=r(o)
f.__click=[ma,s],d(()=>{l(o,`Items ${s()??""} from `),u(f,"href",m)}),v(a,n),p()}s(["click"])
var fa=n('<div class="th svelte-kjal3l"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function ha(a){var e=fa()
v(a,e)}var ka=n("<hr/>")
function ba(a){var e=ka()
v(a,e)}var ga=(a,e)=>o("QuickWear","Nick Name",e().searchname),$a=n("<a> </a>"),ya=n("<div><div> </div> <div><!></div> <div> </div></div>")
function Qa(a,e){t(e,!0)
let s=i(e,"data",19,()=>({}))
var n=ya()
let o
var m=c(n),b=c(m),g=r(m,2),$=c(g),y=a=>{var e=$a()
e.__click=[ga,s]
var t=c(e)
d(()=>{u(e,"href",`${k??""}${s().searchname??""}`),l(t,s().nickname)}),v(a,e)}
f($,a=>{s().nickname&&a(y)})
var Q=r(g,2),W=c(Q)
d(a=>{o=h(n,1,"tr svelte-1o62vvh",null,o,a),l(b,s().searchname),l(W,s().count)},[()=>({odd:s().odd})]),v(a,n),p()}s(["click"])
var Wa=(a,e)=>o("QuickWear","Not Found",e()),Na=n("<!> <a> </a>",1),qa=n("<div>Did not find: <!></div>")
function xa(a,e){t(e,!0)
let s=i(e,"data",19,()=>[])
var n=qa(),o=r(c(n))
b(o,17,s,g,(a,e,s)=>{let t=()=>Q(e).searchname
var i=Na(),n=y(i),o=a=>{var e=W(",")
v(a,e)}
f(n,a=>{s>0&&a(o)})
var m=r(n,2)
m.__click=[Wa,t]
var p=c(m)
d(()=>{u(m,"href",`${k??""}${t()??""}`),l(p,Q(e).nickname)}),v(a,i)}),v(a,n),p()}s(["click"])
var ja=n('<div class="vs svelte-114e2ss"><!></div>')
function wa(a,e){t(e,!0)
let s=i(e,"itemList",3,0)
const n=N(s().items,"n").map(({n:a})=>({n:a,count:s().items.filter(({n:e})=>e===a).length})),r=q("quickSearchList")||[],o=N(r,"searchname").sort((a,e)=>x(a.searchname,e.searchname)),d=o.filter(({searchname:a})=>n.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},s)=>({component:Qa,data:{count:n.find(({n:a})=>a===e).count,nickname:a,odd:s%2,searchname:e},id:s+3})),l=n.filter(({n:a})=>!d.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},s)=>({component:Qa,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7})),u=[{component:pa,id:1},{component:ha,id:2},...d,{component:ba,id:d.length+3},{component:xa,data:o.filter(({searchname:a})=>!n.some(({n:e})=>e===a)),id:d.length+4},{component:ba,id:d.length+5},{component:pa,data:"NOT",id:d.length+6},...l]
var m=ja(),f=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=w(),i=y(t)
I(i,()=>s().component,(a,e)=>{e(a,{get data(){return s().data}})}),v(a,t)}
j(f,{get items(){return u},children:a,$$slots:{default:!0}})}v(a,m),p()}function Ia(a,e){!function(a,e){_(wa,{props:{itemList:a},target:e})}(a,e)}function _a(a){return S({subcmd:"equipitem",inventory_id:a})}async function Sa(a){return{s:0===(await A({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Pa(a){return P(_a,Sa,a)}var Aa=n("<img/>")
function Ea(a,e){t(e,!0)
let s=i(e,"item",3,0),n=i(e,"small",3,0),r=i(e,"t",3,0)
const c=a=>13699===a.b?(a=>`${F}composing/${a.x.d}_${a.x.c}.png`)(a):(a=>`${F}items/${a.b}.gif`)(a)
var o=Aa()
let l
d((a,e,t)=>{u(o,"alt",s().n),l=h(o,1,"tip-dynamic svelte-1oqzgf0",null,l,a),u(o,"data-tipped",e),u(o,"src",t)},[()=>({small:n()}),()=>{return`fetchitem.php?item_id=${(a=s()).b}&inv_id=${a.a}&t=${r()}&p=${E()}`
var a},()=>c(s())]),v(a,o),p()}var Fa=n('<span class="itemUsed svelte-10im2pe"> </span>'),La=n('<span class="fshSpinner fshSpin12"></span>'),Ca=n('<span class="fshSpinner fshSpin12"></span>'),Ha=n('<span class="equippable svelte-10im2pe"><!></span> | <span class="usable svelte-10im2pe"><!></span>',1),Ba=n('<div class="grid svelte-10im2pe"><div class="actionButtons svelte-10im2pe"><!></div> <div><!></div> <div> </div></div>'),Oa=n('<div class="folderButtons svelte-10im2pe"><!></div> <div class="vs svelte-10im2pe"><div class="headGrid svelte-10im2pe"><div class="headOne svelte-10im2pe">Actions</div> <div>Items</div></div> <!></div>',1)
function Ta(a,e){t(e,!0)
let s=i(e,"appInv",3,0)
const n=L(s().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),u=(a,e)=>x(a.n,e.n)
let m=C(H(s().items.sort(u)))
async function h(a,e,s,t){o("QuickWear",`doAction - ${t}`)
const i=Q(m).findIndex(e=>e.a===a)
Q(m)[i][e]=1;(await s(a)).s&&(Q(m)[i].used=t)}var k=Oa(),b=y(k),g=c(b)
da(g,{doFilter:function(a){o("QuickWear","doFilter")
const e=Number(a)
B(m,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(u),!0)},get folders(){return n}})
var $=r(b,2),N=r(c($),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=Ba(),i=c(t),n=c(i),o=a=>{var e=Fa(),t=c(e)
d(()=>l(t,s().used)),v(a,e)},u=a=>{var e=Ha(),t=y(e),i=c(t),n=a=>{var e=La()
v(a,e)},o=a=>{{let e=T(()=>!s().eq)
O(a,{get disabled(){return Q(e)},onclick:()=>{h(s().a,"equip",Pa,"Worn")},children:(a,e)=>{var s=W("Wear")
v(a,s)},$$slots:{default:!0}})}}
f(i,a=>{s().equip?a(n):a(o,!1)})
var d=r(t,2),l=c(d),u=a=>{var e=Ca()
v(a,e)},m=a=>{{let e=T(()=>s().eq||!(s().u&&!s().c))
O(a,{get disabled(){return Q(e)},onclick:()=>async function(a){(M.disableQuickWearPrompts||await U("Are you sure you want to use/extract the item?"))&&h(a,"use",z,"Used")}(s().a),children:(a,e)=>{var s=W("Use/Ext")
v(a,s)},$$slots:{default:!0}})}}
f(l,a=>{s().use?a(u):a(m,!1)}),v(a,e)}
f(n,a=>{s().used?a(o):a(u,!1)})
var m=r(i,2)
Ea(c(m),{get item(){return s()},small:"1",t:"0"})
var p=r(m,2),k=c(p)
d(()=>l(k,s().n)),v(a,t)}
j(N,{get items(){return Q(m)},children:a,$$slots:{default:!0}})}v(a,k),p()}function Ma(a,e){!function(a,e){_(Ta,{props:{appInv:a},target:e})}(a,e)}const Ua=(a,e)=>a+String(e)
function za(a,e,s){return la({checked:0===s,id:Ua(a,s),name:a,type:"radio"})}function Da(a,e,s,t){const i=X({className:"ui-state-default ui-corner-top"})
return G(i,ua({htmlFor:Ua(a,t),innerHTML:s})),0!==t&&Y(i,"click",()=>V(Ua(a,t),e[t])),Z(i,()=>o("QuickWear",Ua(a,t))),i}const Ga=()=>R({className:"ui-tabs-panel ui-corner-bottom"})
function Ra(a,e,s,t){const i=function(a,e,s){const t=J({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(K(Da,e,s)).forEach(K(G,t)),t}(a,e,t)
V(`${e}-header`,i),G(s,i)}function Ka(a,e){const s=R({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=K(G,s)
!function(a,e,s){a.map(K(za,e)).forEach(s)}(a,e,t)
const i=a.map(Ga)
return V(Ua(e,0),i[0]),Ra(a,e,s,i),i.forEach(t),s}const Va="disableQuickWearPrompts"
function Ja(){o("QuickWear","Toggle Prompts"),M.disableQuickWearPrompts=!M.disableQuickWearPrompts,na(Va,M.disableQuickWearPrompts)}function Xa(a){G(a,R({className:"qwPref",innerHTML:oa(Va)}))}function Ya(a,e){var s,t,i
ia("qwtab-header",Xa),ia("qwtab0",a=>Ma(e,a)),ia("qwtab1",a=>Ia(e,a)),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],i="qwtab",D("",s=a),G(s,Ka(t,i)),Z(a,ra([[ca(Va),Ja]]))}async function Za(s){s&&$(s).on("dialogclose",()=>o("QuickWear","Close"))
const t=s||ea()
if(!t)return
sa(t,"Getting item list from backpack..."),M.disableQuickWearPrompts=ta(Va)
!function(a,s){e(s)&&Ya(a,s)}(t,await a())}function ae(a){aa()&&Za(a)}export{ae as default}
//# sourceMappingURL=quickWear-Dwzg0-zI.js.map
