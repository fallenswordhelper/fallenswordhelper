import{b as a,a as e}from"./backpackOk-C1H4HF1d.js"
import{ap as s,x as t,y as n,B as i,C as r,E as c,s as o,P as d,Q as l,S as u,e2 as m,L as v,N as p,G as f,bI as h,db as k,F as b,bQ as g,D as Q,J as W,bD as y,bG as N,am as I,c1 as q,e3 as w,aG as S,e1 as j,n as x,cr as P,$ as _,a1 as A,f as C,ak as F,al as L,I as E,bR as G,bC as H,ay as M,as as T,dz as B,d as U,i as D,u as O,c as z,cG as J,a9 as R,dM as V,a6 as K,o as X,cN as Y,p as Z,a2 as aa,aA as ea,e4 as sa,av as ta}from"./calfSystem-CQOGdqPv.js"
import{e as na,s as ia}from"./selfIdIs-PWCsXJ1f.js"
import{s as ra}from"./simpleCheckbox-BcIXGyya.js"
import{F as ca}from"./FolderButtons-CrDgfyi3.js"
import{I as oa}from"./ItemImg-AywM3LNK.js"
import{c as da}from"./createInput-CL-XaKKe.js"
import{c as la}from"./createLabel-EkLn6Kxi.js"
import"./isChecked-D_0do7nT.js"
var ua=(a,e)=>o("QuickWear","AH Quick Search",e()),ma=i('<div class="svelte-17xtpol"> <a>AH Quick Search</a> found in your inventory</div>')
function va(a,e){t(e,!0)
let s=n(e,"data",3,"")
var i=ma(),o=c(i),f=r(o)
f.__click=[ua,s],d(()=>{l(o,`Items ${s()??""} from `),u(f,"href",m)}),v(a,i),p()}s(["click"])
var pa=i('<div class="th svelte-kjal3l"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function fa(a){var e=pa()
v(a,e)}var ha=i("<hr/>")
function ka(a){var e=ha()
v(a,e)}var ba=(a,e)=>o("QuickWear","Nick Name",e().searchname),ga=i("<a> </a>"),Qa=i("<div><div> </div> <div><!></div> <div> </div></div>")
function Wa(a,e){t(e,!0)
let s=n(e,"data",19,()=>({}))
var i=Qa()
let o
var m=c(i),b=c(m),g=r(m,2),Q=c(g),W=a=>{var e=ga()
e.__click=[ba,s]
var t=c(e)
d(()=>{u(e,"href",`${k??""}${s().searchname??""}`),l(t,s().nickname)}),v(a,e)}
f(Q,a=>{s().nickname&&a(W)})
var $=r(g,2),y=c($)
d(a=>{o=h(i,1,"tr svelte-1o62vvh",null,o,a),l(b,s().searchname),l(y,s().count)},[()=>({odd:s().odd})]),v(a,i),p()}s(["click"])
var $a=(a,e)=>o("QuickWear","Not Found",e()),ya=i("<!> <a> </a>",1),Na=i("<div>Did not find: <!></div>")
function Ia(a,e){t(e,!0)
let s=n(e,"data",19,()=>[])
var i=Na(),o=r(c(i))
b(o,17,s,g,(a,e,s)=>{let t=()=>W(e).searchname
var n=ya(),i=Q(n),o=a=>{var e=y(",")
v(a,e)}
f(i,a=>{s>0&&a(o)})
var m=r(i,2)
m.__click=[$a,t]
var p=c(m)
d(()=>{u(m,"href",`${k??""}${t()??""}`),l(p,W(e).nickname)}),v(a,n)}),v(a,i),p()}s(["click"])
var qa=i('<div class="vs svelte-114e2ss"><!></div>')
function wa(a,e){t(e,!0)
let s=n(e,"itemList",3,0)
const i=N(s().items,"n").map(({n:a})=>({n:a,count:s().items.filter(({n:e})=>e===a).length})),r=I("quickSearchList")||[],o=N(r,"searchname").sort((a,e)=>q(a.searchname,e.searchname)),d=o.filter(({searchname:a})=>i.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},s)=>({component:Wa,data:{count:i.find(({n:a})=>a===e).count,nickname:a,odd:s%2,searchname:e},id:s+3})),l=i.filter(({n:a})=>!d.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},s)=>({component:Wa,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7})),u=[{component:va,id:1},{component:fa,id:2},...d,{component:ka,id:d.length+3},{component:Ia,data:o.filter(({searchname:a})=>!i.some(({n:e})=>e===a)),id:d.length+4},{component:ka,id:d.length+5},{component:va,data:"NOT",id:d.length+6},...l]
var m=qa(),f=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=S(),n=Q(t)
j(n,()=>s().component,(a,e)=>{e(a,{get data(){return s().data}})}),v(a,t)}
w(f,{get items(){return u},children:a,$$slots:{default:!0}})}v(a,m),p()}function Sa(a,e){!function(a,e){x(wa,{props:{itemList:a},target:e})}(a,e)}function ja(a){return P({subcmd:"equipitem",inventory_id:a})}async function xa(a){return{s:0===(await A({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Pa(a){return _(ja,xa,a)}var _a=i('<span class="itemUsed svelte-10im2pe"> </span>'),Aa=i('<span class="fshSpinner fshSpin12"></span>'),Ca=i('<span class="fshSpinner fshSpin12"></span>'),Fa=i('<span class="equippable svelte-10im2pe"><!></span> | <span class="usable svelte-10im2pe"><!></span>',1),La=i('<div class="grid svelte-10im2pe"><div class="actionButtons svelte-10im2pe"><!></div> <div><!></div> <div> </div></div>'),Ea=i('<div class="folderButtons svelte-10im2pe"><!></div> <div class="vs svelte-10im2pe"><div class="headGrid svelte-10im2pe"><div class="headOne svelte-10im2pe">Actions</div> <div>Items</div></div> <!></div>',1)
function Ga(a,e){t(e,!0)
let s=n(e,"appInv",3,0)
const i=C(s().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),u=(a,e)=>q(a.n,e.n)
let m=F(L(s().items.sort(u)))
async function h(a,e,s,t){o("QuickWear",`doAction - ${t}`)
const n=W(m).findIndex(e=>e.a===a)
W(m)[n][e]=1;(await s(a)).s&&(W(m)[n].used=t)}var k=Ea(),b=Q(k),g=c(b)
ca(g,{doFilter:function(a){o("QuickWear","doFilter")
const e=Number(a)
E(m,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(u),!0)},get folders(){return i}})
var $=r(b,2),N=r(c($),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=La(),n=c(t),i=c(n),o=a=>{var e=_a(),t=c(e)
d(()=>l(t,s().used)),v(a,e)},u=a=>{var e=Fa(),t=Q(e),n=c(t),i=a=>{var e=Aa()
v(a,e)},o=a=>{{let e=H(()=>!s().eq)
G(a,{get disabled(){return W(e)},onclick:()=>{h(s().a,"equip",Pa,"Worn")},children:(a,e)=>{var s=y("Wear")
v(a,s)},$$slots:{default:!0}})}}
f(n,a=>{s().equip?a(i):a(o,!1)})
var d=r(t,2),l=c(d),u=a=>{var e=Ca()
v(a,e)},m=a=>{{let e=H(()=>s().eq||!(s().u&&!s().c))
G(a,{get disabled(){return W(e)},onclick:()=>async function(a){(M.disableQuickWearPrompts||await T("Are you sure you want to use/extract the item?"))&&h(a,"use",B,"Used")}(s().a),children:(a,e)=>{var s=y("Use/Ext")
v(a,s)},$$slots:{default:!0}})}}
f(l,a=>{s().use?a(u):a(m,!1)}),v(a,e)}
f(i,a=>{s().used?a(o):a(u,!1)})
var m=r(n,2),p=c(m)
oa(p,{get item(){return s()},small:"1",t:"0"})
var k=r(m,2),b=c(k)
d(()=>l(b,s().n)),v(a,t)}
w(N,{get items(){return W(m)},children:a,$$slots:{default:!0}})}v(a,k),p()}function Ha(a,e){!function(a,e){x(Ga,{props:{appInv:a},target:e})}(a,e)}const Ma=(a,e)=>a+String(e)
function Ta(a,e,s){return da({checked:0===s,id:Ma(a,s),name:a,type:"radio"})}function Ba(a,e,s,t){const n=V({className:"ui-state-default ui-corner-top"})
return D(n,la({htmlFor:Ma(a,t),innerHTML:s})),0!==t&&K(n,"click",()=>J(Ma(a,t),e[t])),X(n,()=>o("QuickWear",Ma(a,t))),n}const Ua=()=>O({className:"ui-tabs-panel ui-corner-bottom"})
function Da(a,e,s,t){const n=function(a,e,s){const t=R({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(z(Ba,e,s)).forEach(z(D,t)),t}(a,e,t)
J(`${e}-header`,n),D(s,n)}function Oa(a,e){const s=O({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=z(D,s)
!function(a,e,s){a.map(z(Ta,e)).forEach(s)}(a,e,t)
const n=a.map(Ua)
return J(Ma(e,0),n[0]),Da(a,e,s,n),n.forEach(t),s}const za="disableQuickWearPrompts"
function Ja(){o("QuickWear","Toggle Prompts"),M.disableQuickWearPrompts=!M.disableQuickWearPrompts,ta(za,M.disableQuickWearPrompts)}function Ra(a){D(a,O({className:"qwPref",innerHTML:ra(za)}))}function Va(a,e){var s,t,n
sa("qwtab-header",Ra),sa("qwtab0",a=>Ha(e,a)),sa("qwtab1",a=>Sa(e,a)),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",U("",s=a),D(s,Oa(t,n)),X(a,na([[ia(za),Ja]]))}async function Ka(s){s&&$(s).on("dialogclose",()=>o("QuickWear","Close"))
const t=s||Z()
if(!t)return
aa(t,"Getting item list from backpack..."),M.disableQuickWearPrompts=ea(za)
!function(a,s){e(s)&&Va(a,s)}(t,await a())}function Xa(a){Y()&&Ka(a)}export{Xa as default}
//# sourceMappingURL=quickWear-Cmft-0u6.js.map
