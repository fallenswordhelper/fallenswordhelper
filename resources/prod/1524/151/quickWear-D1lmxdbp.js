import{b as a,a as e}from"./backpackOk-BjyGHPKD.js"
import{aq as s,z as t,A as n,C as i,D as r,F as c,s as o,Q as d,R as l,T as u,eb as m,N as v,O as p,H as f,bH as h,dj as k,G as b,bP as g,E as Q,K as W,bC as q,bF as w,an as y,c0 as N,ec as j,aG as I,ea as S,u as x,cq as F,$ as P,a2 as _,h as A,al as C,am as H,J as E,bQ as L,bB as M,az as T,at as B,dJ as U,e as G,i as O,w as z,c as D,cF as J,aa as K,dW as R,a7 as V,o as X,cM as Y,p as Z,a3 as aa,aB as ea,ed as sa,aw as ta}from"./calfSystem-C1X5YxJZ.js"
import{e as na,s as ia}from"./selfIdIs-IA5PHYBh.js"
import{s as ra}from"./simpleCheckbox-nwywzlgZ.js"
import"./legacy-CERE4DQ7.js"
import{F as ca}from"./FolderButtons-_mGyxzY5.js"
import{I as oa}from"./ItemImg-hPPLg_TQ.js"
import{c as da}from"./createInput-LMpmIneO.js"
import{c as la}from"./createLabel-BN2NWsP1.js"
import"./isChecked-D_0do7nT.js"
var ua=(a,e)=>o("QuickWear","AH Quick Search",e()),ma=i('<div class="svelte-17xtpol"> <a>AH Quick Search</a> found in your inventory</div>')
function va(a,e){t(e,!0)
let s=n(e,"data",3,"")
var i=ma(),o=c(i),f=r(o)
f.__click=[ua,s],d((()=>{l(o,`Items ${s()??""} from `),u(f,"href",m)})),v(a,i),p()}s(["click"])
var pa=i('<div class="th svelte-kjal3l"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function fa(a){var e=pa()
v(a,e)}var ha=i("<hr/>")
function ka(a){var e=ha()
v(a,e)}var ba=(a,e)=>o("QuickWear","Nick Name",e().searchname),ga=i("<a> </a>"),Qa=i("<div><div> </div> <div><!></div> <div> </div></div>")
function Wa(a,e){t(e,!0)
let s=n(e,"data",19,(()=>({})))
var i=Qa()
let o
var m=c(i),b=c(m),g=r(m,2),Q=c(g),W=a=>{var e=ga()
e.__click=[ba,s]
var t=c(e)
d((()=>{u(e,"href",`${k??""}${s().searchname??""}`),l(t,s().nickname)})),v(a,e)}
f(Q,(a=>{s().nickname&&a(W)}))
var $=r(g,2),q=c($)
d((a=>{o=h(i,1,"tr svelte-1o62vvh",null,o,a),l(b,s().searchname),l(q,s().count)}),[()=>({odd:s().odd})]),v(a,i),p()}s(["click"])
var $a=(a,e)=>o("QuickWear","Not Found",e()),qa=i("<!> <a> </a>",1),wa=i("<div>Did not find: <!></div>")
function ya(a,e){t(e,!0)
let s=n(e,"data",19,(()=>[]))
var i=wa(),o=r(c(i))
b(o,17,s,g,((a,e,s)=>{let t=()=>W(e).searchname
var n=qa(),i=Q(n),o=a=>{var e=q(",")
v(a,e)}
f(i,(a=>{s>0&&a(o)}))
var m=r(i,2)
m.__click=[$a,t]
var p=c(m)
d((()=>{u(m,"href",`${k??""}${t()??""}`),l(p,W(e).nickname)})),v(a,n)})),v(a,i),p()}s(["click"])
var Na=i('<div class="vs svelte-114e2ss"><!></div>')
function ja(a,e){t(e,!0)
let s=n(e,"itemList",3,0)
const i=w(s().items,"n").map((({n:a})=>({n:a,count:s().items.filter((({n:e})=>e===a)).length}))),r=y("quickSearchList")||[],o=w(r,"searchname").sort(((a,e)=>N(a.searchname,e.searchname))),d=o.filter((({searchname:a})=>i.some((({n:e})=>e===a)))).map((({nickname:a,searchname:e},s)=>({component:Wa,data:{count:i.find((({n:a})=>a===e)).count,nickname:a,odd:s%2,searchname:e},id:s+3}))),l=i.filter((({n:a})=>!d.some((({data:{searchname:e}})=>e===a)))).map((({n:a,count:e},s)=>({component:Wa,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7}))),u=[{component:va,id:1},{component:fa,id:2},...d,{component:ka,id:d.length+3},{component:ya,data:o.filter((({searchname:a})=>!i.some((({n:e})=>e===a)))),id:d.length+4},{component:ka,id:d.length+5},{component:va,data:"NOT",id:d.length+6},...l]
var m=Na(),f=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=I(),n=Q(t)
S(n,(()=>s().component),((a,e)=>{e(a,{get data(){return s().data}})})),v(a,t)}
j(f,{get items(){return u},children:a,$$slots:{default:!0}})}v(a,m),p()}function Ia(a,e){!function(a,e){x(ja,{props:{itemList:a},target:e})}(a,e)}function Sa(a){return F({subcmd:"equipitem",inventory_id:a})}async function xa(a){return{s:0===(await _({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Fa(a){return P(Sa,xa,a)}var Pa=i('<span class="itemUsed svelte-10im2pe"> </span>'),_a=i('<span class="fshSpinner fshSpin12"></span>'),Aa=i('<span class="fshSpinner fshSpin12"></span>'),Ca=i('<span class="equippable svelte-10im2pe"><!></span> | <span class="usable svelte-10im2pe"><!></span>',1),Ha=i('<div class="grid svelte-10im2pe"><div class="actionButtons svelte-10im2pe"><!></div> <div><!></div> <div> </div></div>'),Ea=i('<div class="folderButtons svelte-10im2pe"><!></div> <div class="vs svelte-10im2pe"><div class="headGrid svelte-10im2pe"><div class="headOne svelte-10im2pe">Actions</div> <div>Items</div></div> <!></div>',1)
function La(a,e){t(e,!0)
let s=n(e,"appInv",3,0)
const i=A(s().folders.filter((({a:a})=>-1!==a)).map((({a:a,n:e})=>[a,e]))),u=(a,e)=>N(a.n,e.n)
let m=C(H(s().items.sort(u)))
async function h(a,e,s,t){o("QuickWear",`doAction - ${t}`)
const n=W(m).findIndex((e=>e.a===a))
W(m)[n][e]=1;(await s(a)).s&&(W(m)[n].used=t)}var k=Ea(),b=Q(k),g=c(b)
ca(g,{doFilter:function(a){o("QuickWear","doFilter")
const e=Number(a)
E(m,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(u),!0)},get folders(){return i}})
var $=r(b,2),w=r(c($),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=Ha(),n=c(t),i=c(n),o=a=>{var e=Pa(),t=c(e)
d((()=>l(t,s().used))),v(a,e)},u=a=>{var e=Ca(),t=Q(e),n=c(t),i=a=>{var e=_a()
v(a,e)},o=a=>{{let e=M((()=>!s().eq))
L(a,{get disabled(){return W(e)},onclick:()=>{h(s().a,"equip",Fa,"Worn")},children:(a,e)=>{var s=q("Wear")
v(a,s)},$$slots:{default:!0}})}}
f(n,(a=>{s().equip?a(i):a(o,!1)}))
var d=r(t,2),l=c(d),u=a=>{var e=Aa()
v(a,e)},m=a=>{{let e=M((()=>s().eq||!(s().u&&!s().c)))
L(a,{get disabled(){return W(e)},onclick:()=>async function(a){(T.disableQuickWearPrompts||await B("Are you sure you want to use/extract the item?"))&&h(a,"use",U,"Used")}(s().a),children:(a,e)=>{var s=q("Use/Ext")
v(a,s)},$$slots:{default:!0}})}}
f(l,(a=>{s().use?a(u):a(m,!1)})),v(a,e)}
f(i,(a=>{s().used?a(o):a(u,!1)}))
var m=r(n,2),p=c(m)
oa(p,{get item(){return s()},small:"1",t:"0"})
var k=r(m,2),b=c(k)
d((()=>l(b,s().n))),v(a,t)}
j(w,{get items(){return W(m)},children:a,$$slots:{default:!0}})}v(a,k),p()}function Ma(a,e){!function(a,e){x(La,{props:{appInv:a},target:e})}(a,e)}const Ta=(a,e)=>a+String(e)
function Ba(a,e,s){return da({checked:0===s,id:Ta(a,s),name:a,type:"radio"})}function Ua(a,e,s,t){const n=R({className:"ui-state-default ui-corner-top"})
return O(n,la({htmlFor:Ta(a,t),innerHTML:s})),0!==t&&V(n,"click",(()=>J(Ta(a,t),e[t]))),X(n,(()=>o("QuickWear",Ta(a,t)))),n}const Ga=()=>z({className:"ui-tabs-panel ui-corner-bottom"})
function Oa(a,e,s,t){const n=function(a,e,s){const t=K({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(D(Ua,e,s)).forEach(D(O,t)),t}(a,e,t)
J(`${e}-header`,n),O(s,n)}function za(a,e){const s=z({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=D(O,s)
!function(a,e,s){a.map(D(Ba,e)).forEach(s)}(a,e,t)
const n=a.map(Ga)
return J(Ta(e,0),n[0]),Oa(a,e,s,n),n.forEach(t),s}const Da="disableQuickWearPrompts"
function Ja(){o("QuickWear","Toggle Prompts"),T.disableQuickWearPrompts=!T.disableQuickWearPrompts,ta(Da,T.disableQuickWearPrompts)}function Ka(a){O(a,z({className:"qwPref",innerHTML:ra(Da)}))}function Ra(a,e){var s,t,n
sa("qwtab-header",Ka),sa("qwtab0",(a=>Ma(e,a))),sa("qwtab1",(a=>Ia(e,a))),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",G("",s=a),O(s,za(t,n)),X(a,na([[ia(Da),Ja]]))}async function Va(s){s&&$(s).on("dialogclose",(()=>o("QuickWear","Close")))
const t=s||Z()
if(!t)return
aa(t,"Getting item list from backpack..."),T.disableQuickWearPrompts=ea(Da)
!function(a,s){e(s)&&Ra(a,s)}(t,await a())}function Xa(a){Y()&&Va(a)}export{Xa as default}
//# sourceMappingURL=quickWear-D1lmxdbp.js.map
