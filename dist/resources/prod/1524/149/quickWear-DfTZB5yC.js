import{b as a,a as e}from"./backpackOk-CcbevA1S.js"
import{a6 as s,R as t,bE as n,X as i,Y as r,Z as c,br as o,e4 as d,s as l,a7 as u,a8 as m,a3 as v,a4 as p,a0 as f,bw as h,db as k,_ as b,au as g,V as Q,bq as W,bH as y,bu as q,U as j,bS as w,e5 as I,at as N,e3 as S,ad as x,cg as _,$ as P,y as F,j as A,S as E,T as H,W as L,bp as T,bF as U,am as C,ae as B,dB as M,h as O,i as D,u as G,e as R,cw as Y,G as z,dO as K,D as V,o as X,cD as Z,p as J,z as aa,ao as ea,e6 as sa,aj as ta}from"./calfSystem-BGW9cdWN.js"
import{e as na,s as ia}from"./selfIdIs-apLHXwYh.js"
import{s as ra}from"./simpleCheckbox-BIjRR8-3.js"
import"./legacy-vY5CN2wW.js"
import{F as ca}from"./FolderButtons-BnxSc9De.js"
import{I as oa}from"./ItemImg-BWi7039S.js"
import{c as da}from"./createInput-BPTzKwU5.js"
import{c as la}from"./createLabel-Ceh0DYzT.js"
import"./isChecked-D_0do7nT.js"
var ua=(a,e)=>l("QuickWear","AH Quick Search",e()),ma=i('<div class="svelte-17xtpol"> <a>AH Quick Search</a> found in your inventory</div>')
function va(a,e){t(e,!0)
let s=n(e,"data",3,"")
var i=ma(),l=c(i),f=r(l)
o(f,"href",d),f.__click=[ua,s],u((()=>m(l,`Items ${s()??""} from `))),v(a,i),p()}s(["click"])
var pa=i('<div class="th svelte-kjal3l"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function fa(a){var e=pa()
v(a,e)}var ha=i("<hr>")
function ka(a){var e=ha()
v(a,e)}var ba=(a,e)=>l("QuickWear","Nick Name",e().searchname),ga=i("<a> </a>"),Qa=i("<div><div> </div> <div><!></div> <div> </div></div>")
function Wa(a,e){t(e,!0)
let s=n(e,"data",19,(()=>({})))
var i=Qa()
let d
var l=c(i),b=c(l),g=r(l,2),Q=c(g),W=a=>{var e=ga()
e.__click=[ba,s]
var t=c(e)
u((()=>{o(e,"href",`${k??""}${s().searchname??""}`),m(t,s().nickname)})),v(a,e)}
f(Q,(a=>{s().nickname&&a(W)}))
var $=r(g,2),y=c($)
u((a=>{d=h(i,1,"tr svelte-1o62vvh",null,d,a),m(b,s().searchname),m(y,s().count)}),[()=>({odd:s().odd})]),v(a,i),p()}s(["click"])
var $a=(a,e)=>l("QuickWear","Not Found",e()),ya=i("<!> <a> </a>",1),qa=i("<div>Did not find: <!></div>")
function ja(a,e){t(e,!0)
let s=n(e,"data",19,(()=>[]))
var i=qa(),d=r(c(i))
b(d,17,s,y,((a,e,s)=>{let t=()=>Q(e).searchname
var n=ya(),i=g(n),d=a=>{var e=W(",")
v(a,e)}
f(i,(a=>{s>0&&a(d)}))
var l=r(i,2)
l.__click=[$a,t]
var p=c(l)
u((()=>{o(l,"href",`${k??""}${t()??""}`),m(p,Q(e).nickname)})),v(a,n)})),v(a,i),p()}s(["click"])
var wa=i('<div class="vs svelte-114e2ss"><!></div>')
function Ia(a,e){t(e,!0)
let s=n(e,"itemList",3,0)
const i=q(s().items,"n").map((({n:a})=>({n:a,count:s().items.filter((({n:e})=>e===a)).length}))),r=j("quickSearchList")||[],o=q(r,"searchname").sort(((a,e)=>w(a.searchname,e.searchname))),d=o.filter((({searchname:a})=>i.some((({n:e})=>e===a)))).map((({nickname:a,searchname:e},s)=>({component:Wa,data:{count:i.find((({n:a})=>a===e)).count,nickname:a,odd:s%2,searchname:e},id:s+3}))),l=i.filter((({n:a})=>!d.some((({data:{searchname:e}})=>e===a)))).map((({n:a,count:e},s)=>({component:Wa,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7}))),u=[{component:va,id:1},{component:fa,id:2},...d,{component:ka,id:d.length+3},{component:ja,data:o.filter((({searchname:a})=>!i.some((({n:e})=>e===a)))),id:d.length+4},{component:ka,id:d.length+5},{component:va,data:"NOT",id:d.length+6},...l]
var m=wa(),f=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=N(),n=g(t)
S(n,(()=>s().component),((a,e)=>{e(a,{get data(){return s().data}})})),v(a,t)}
I(f,{items:u,children:a,$$slots:{default:!0}})}v(a,m),p()}function Na(a,e){!function(a,e){x(Ia,{props:{itemList:a},target:e})}(a,e)}function Sa(a){return _({subcmd:"equipitem",inventory_id:a})}async function xa(a){return{s:0===(await F({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function _a(a){return P(Sa,xa,a)}var Pa=i('<span class="itemUsed svelte-10im2pe"> </span>'),Fa=i('<span class="fshSpinner fshSpin12"></span>'),Aa=i('<span class="fshSpinner fshSpin12"></span>'),Ea=i('<span class="equippable svelte-10im2pe"><!></span> | <span class="usable svelte-10im2pe"><!></span>',1),Ha=i('<div class="grid svelte-10im2pe"><div class="actionButtons svelte-10im2pe"><!></div> <div><!></div> <div> </div></div>'),La=i('<div class="folderButtons svelte-10im2pe"><!></div> <div class="vs svelte-10im2pe"><div class="headGrid svelte-10im2pe"><div class="headOne svelte-10im2pe">Actions</div> <div>Items</div></div> <!></div>',1)
function Ta(a,e){t(e,!0)
let s=n(e,"appInv",3,0)
const i=A(s().folders.filter((({a:a})=>-1!==a)).map((({a:a,n:e})=>[a,e]))),o=(a,e)=>w(a.n,e.n)
let d=E(H(s().items.sort(o)))
async function h(a,e,s,t){l("QuickWear",`doAction - ${t}`)
const n=Q(d).findIndex((e=>e.a===a))
Q(d)[n][e]=1;(await s(a)).s&&(Q(d)[n].used=t)}var k=La(),b=g(k),$=c(b)
ca($,{doFilter:function(a){l("QuickWear","doFilter")
const e=Number(a)
L(d,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(o),!0)},folders:i})
var y=r(b,2),q=r(c(y),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=Ha(),n=c(t),i=c(n),o=a=>{var e=Pa(),t=c(e)
u((()=>m(t,s().used))),v(a,e)},d=a=>{var e=Ea(),t=g(e),n=c(t),i=a=>{var e=Fa()
v(a,e)},o=a=>{const e=T((()=>!s().eq))
U(a,{get disabled(){return Q(e)},onclick:()=>{h(s().a,"equip",_a,"Worn")},children:(a,e)=>{var s=W("Wear")
v(a,s)},$$slots:{default:!0}})}
f(n,(a=>{s().equip?a(i):a(o,!1)}))
var d=r(t,2),l=c(d),u=a=>{var e=Aa()
v(a,e)},m=a=>{const e=T((()=>s().eq||!(s().u&&!s().c)))
U(a,{get disabled(){return Q(e)},onclick:()=>async function(a){(C.disableQuickWearPrompts||await B("Are you sure you want to use/extract the item?"))&&h(a,"use",M,"Used")}(s().a),children:(a,e)=>{var s=W("Use/Ext")
v(a,s)},$$slots:{default:!0}})}
f(l,(a=>{s().use?a(u):a(m,!1)})),v(a,e)}
f(i,(a=>{s().used?a(o):a(d,!1)}))
var l=r(n,2),p=c(l)
oa(p,{get item(){return s()},small:"1",t:"0"})
var k=r(l,2),b=c(k)
u((()=>m(b,s().n))),v(a,t)}
I(q,{get items(){return Q(d)},children:a,$$slots:{default:!0}})}v(a,k),p()}function Ua(a,e){!function(a,e){x(Ta,{props:{appInv:a},target:e})}(a,e)}const Ca=(a,e)=>a+String(e)
function Ba(a,e,s){return da({checked:0===s,id:Ca(a,s),name:a,type:"radio"})}function Ma(a,e,s,t){const n=K({className:"ui-state-default ui-corner-top"})
return D(n,la({htmlFor:Ca(a,t),innerHTML:s})),0!==t&&V(n,"click",(()=>Y(Ca(a,t),e[t]))),X(n,(()=>l("QuickWear",Ca(a,t)))),n}const Oa=()=>G({className:"ui-tabs-panel ui-corner-bottom"})
function Da(a,e,s,t){const n=function(a,e,s){const t=z({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(R(Ma,e,s)).forEach(R(D,t)),t}(a,e,t)
Y(`${e}-header`,n),D(s,n)}function Ga(a,e){const s=G({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=R(D,s)
!function(a,e,s){a.map(R(Ba,e)).forEach(s)}(a,e,t)
const n=a.map(Oa)
return Y(Ca(e,0),n[0]),Da(a,e,s,n),n.forEach(t),s}const Ra="disableQuickWearPrompts"
function Ya(){l("QuickWear","Toggle Prompts"),C.disableQuickWearPrompts=!C.disableQuickWearPrompts,ta(Ra,C.disableQuickWearPrompts)}function za(a){D(a,G({className:"qwPref",innerHTML:ra(Ra)}))}function Ka(a,e){var s,t,n
sa("qwtab-header",za),sa("qwtab0",(a=>Ua(e,a))),sa("qwtab1",(a=>Na(e,a))),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",O("",s=a),D(s,Ga(t,n)),X(a,na([[ia(Ra),Ya]]))}async function Va(s){s&&$(s).on("dialogclose",(()=>l("QuickWear","Close")))
const t=s||J()
if(!t)return
aa(t,"Getting item list from backpack..."),C.disableQuickWearPrompts=ea(Ra)
!function(a,s){e(s)&&Ka(a,s)}(t,await a())}function Xa(a){Z()&&Va(a)}export{Xa as default}
//# sourceMappingURL=quickWear-DfTZB5yC.js.map
