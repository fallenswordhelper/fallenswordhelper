import{b as a,a as e}from"./backpackOk-C0Z16PYr.js"
import{ao as s,x as t,y as n,A as i,B as r,D as c,s as o,O as d,P as l,R as u,e5 as m,K as v,L as p,F as f,bF as h,de as k,E as b,bN as g,C as Q,I as y,bA as W,bD as q,al as x,b_ as N,e6 as j,aE as w,e4 as _,n as I,cJ as S,$ as P,a0 as A,bd as F,bi as E,f as L,aj as C,ak as H,H as M,bO as O,bz as T,ax as U,ar as z,dD as B,d as D,i as G,u as J,c as K,cz as R,a8 as V,dQ as X,a5 as Y,o as Z,cG as aa,p as ea,a1 as sa,az as ta,e7 as na,au as ia}from"./calfSystem-CT1aM4VG.js"
import{e as ra,s as ca}from"./selfIdIs-CyrWimrU.js"
import{s as oa}from"./simpleCheckbox-DX3v3qR1.js"
import"./legacy-BQk1-_ZQ.js"
import{F as da}from"./FolderButtons-Dwd9WuFY.js"
import{c as la}from"./createInput-CTW03HuX.js"
import{c as ua}from"./createLabel-CJEqIp3q.js"
import"./isChecked-D_0do7nT.js"
var ma=(a,e)=>o("QuickWear","AH Quick Search",e()),va=i('<div class="svelte-17xtpol"> <a>AH Quick Search</a> found in your inventory</div>')
function pa(a,e){t(e,!0)
let s=n(e,"data",3,"")
var i=va(),o=c(i),f=r(o)
f.__click=[ma,s],d((()=>{l(o,`Items ${s()??""} from `),u(f,"href",m)})),v(a,i),p()}s(["click"])
var fa=i('<div class="th svelte-kjal3l"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function ha(a){var e=fa()
v(a,e)}var ka=i("<hr/>")
function ba(a){var e=ka()
v(a,e)}var ga=(a,e)=>o("QuickWear","Nick Name",e().searchname),$a=i("<a> </a>"),Qa=i("<div><div> </div> <div><!></div> <div> </div></div>")
function ya(a,e){t(e,!0)
let s=n(e,"data",19,(()=>({})))
var i=Qa()
let o
var m=c(i),b=c(m),g=r(m,2),$=c(g),Q=a=>{var e=$a()
e.__click=[ga,s]
var t=c(e)
d((()=>{u(e,"href",`${k??""}${s().searchname??""}`),l(t,s().nickname)})),v(a,e)}
f($,(a=>{s().nickname&&a(Q)}))
var y=r(g,2),W=c(y)
d((a=>{o=h(i,1,"tr svelte-1o62vvh",null,o,a),l(b,s().searchname),l(W,s().count)}),[()=>({odd:s().odd})]),v(a,i),p()}s(["click"])
var Wa=(a,e)=>o("QuickWear","Not Found",e()),qa=i("<!> <a> </a>",1),xa=i("<div>Did not find: <!></div>")
function Na(a,e){t(e,!0)
let s=n(e,"data",19,(()=>[]))
var i=xa(),o=r(c(i))
b(o,17,s,g,((a,e,s)=>{let t=()=>y(e).searchname
var n=qa(),i=Q(n),o=a=>{var e=W(",")
v(a,e)}
f(i,(a=>{s>0&&a(o)}))
var m=r(i,2)
m.__click=[Wa,t]
var p=c(m)
d((()=>{u(m,"href",`${k??""}${t()??""}`),l(p,y(e).nickname)})),v(a,n)})),v(a,i),p()}s(["click"])
var ja=i('<div class="vs svelte-114e2ss"><!></div>')
function wa(a,e){t(e,!0)
let s=n(e,"itemList",3,0)
const i=q(s().items,"n").map((({n:a})=>({n:a,count:s().items.filter((({n:e})=>e===a)).length}))),r=x("quickSearchList")||[],o=q(r,"searchname").sort(((a,e)=>N(a.searchname,e.searchname))),d=o.filter((({searchname:a})=>i.some((({n:e})=>e===a)))).map((({nickname:a,searchname:e},s)=>({component:ya,data:{count:i.find((({n:a})=>a===e)).count,nickname:a,odd:s%2,searchname:e},id:s+3}))),l=i.filter((({n:a})=>!d.some((({data:{searchname:e}})=>e===a)))).map((({n:a,count:e},s)=>({component:ya,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7}))),u=[{component:pa,id:1},{component:ha,id:2},...d,{component:ba,id:d.length+3},{component:Na,data:o.filter((({searchname:a})=>!i.some((({n:e})=>e===a)))),id:d.length+4},{component:ba,id:d.length+5},{component:pa,data:"NOT",id:d.length+6},...l]
var m=ja(),f=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=w(),n=Q(t)
_(n,(()=>s().component),((a,e)=>{e(a,{get data(){return s().data}})})),v(a,t)}
j(f,{get items(){return u},children:a,$$slots:{default:!0}})}v(a,m),p()}function _a(a,e){!function(a,e){I(wa,{props:{itemList:a},target:e})}(a,e)}function Ia(a){return S({subcmd:"equipitem",inventory_id:a})}async function Sa(a){return{s:0===(await A({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Pa(a){return P(Ia,Sa,a)}var Aa=i("<img/>")
function Fa(a,e){t(e,!0)
let s=n(e,"item",3,0),i=n(e,"small",3,0),r=n(e,"t",3,0)
const c=a=>13699===a.b?(a=>`${E}composing/${a.x.d}_${a.x.c}.png`)(a):(a=>`${E}items/${a.b}.gif`)(a)
var o=Aa()
let l
d(((a,e,t)=>{u(o,"alt",s().n),l=h(o,1,"tip-dynamic svelte-1oqzgf0",null,l,a),u(o,"data-tipped",e),u(o,"src",t)}),[()=>({small:i()}),()=>{return`fetchitem.php?item_id=${(a=s()).b}&inv_id=${a.a}&t=${r()}&p=${F()}`
var a},()=>c(s())]),v(a,o),p()}var Ea=i('<span class="itemUsed svelte-10im2pe"> </span>'),La=i('<span class="fshSpinner fshSpin12"></span>'),Ca=i('<span class="fshSpinner fshSpin12"></span>'),Ha=i('<span class="equippable svelte-10im2pe"><!></span> | <span class="usable svelte-10im2pe"><!></span>',1),Ma=i('<div class="grid svelte-10im2pe"><div class="actionButtons svelte-10im2pe"><!></div> <div><!></div> <div> </div></div>'),Oa=i('<div class="folderButtons svelte-10im2pe"><!></div> <div class="vs svelte-10im2pe"><div class="headGrid svelte-10im2pe"><div class="headOne svelte-10im2pe">Actions</div> <div>Items</div></div> <!></div>',1)
function Ta(a,e){t(e,!0)
let s=n(e,"appInv",3,0)
const i=L(s().folders.filter((({a:a})=>-1!==a)).map((({a:a,n:e})=>[a,e]))),u=(a,e)=>N(a.n,e.n)
let m=C(H(s().items.sort(u)))
async function h(a,e,s,t){o("QuickWear",`doAction - ${t}`)
const n=y(m).findIndex((e=>e.a===a))
y(m)[n][e]=1;(await s(a)).s&&(y(m)[n].used=t)}var k=Oa(),b=Q(k),g=c(b)
da(g,{doFilter:function(a){o("QuickWear","doFilter")
const e=Number(a)
M(m,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(u),!0)},get folders(){return i}})
var $=r(b,2),q=r(c($),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=Ma(),n=c(t),i=c(n),o=a=>{var e=Ea(),t=c(e)
d((()=>l(t,s().used))),v(a,e)},u=a=>{var e=Ha(),t=Q(e),n=c(t),i=a=>{var e=La()
v(a,e)},o=a=>{{let e=T((()=>!s().eq))
O(a,{get disabled(){return y(e)},onclick:()=>{h(s().a,"equip",Pa,"Worn")},children:(a,e)=>{var s=W("Wear")
v(a,s)},$$slots:{default:!0}})}}
f(n,(a=>{s().equip?a(i):a(o,!1)}))
var d=r(t,2),l=c(d),u=a=>{var e=Ca()
v(a,e)},m=a=>{{let e=T((()=>s().eq||!(s().u&&!s().c)))
O(a,{get disabled(){return y(e)},onclick:()=>async function(a){(U.disableQuickWearPrompts||await z("Are you sure you want to use/extract the item?"))&&h(a,"use",B,"Used")}(s().a),children:(a,e)=>{var s=W("Use/Ext")
v(a,s)},$$slots:{default:!0}})}}
f(l,(a=>{s().use?a(u):a(m,!1)})),v(a,e)}
f(i,(a=>{s().used?a(o):a(u,!1)}))
var m=r(n,2)
Fa(c(m),{get item(){return s()},small:"1",t:"0"})
var p=r(m,2),k=c(p)
d((()=>l(k,s().n))),v(a,t)}
j(q,{get items(){return y(m)},children:a,$$slots:{default:!0}})}v(a,k),p()}function Ua(a,e){!function(a,e){I(Ta,{props:{appInv:a},target:e})}(a,e)}const za=(a,e)=>a+String(e)
function Ba(a,e,s){return la({checked:0===s,id:za(a,s),name:a,type:"radio"})}function Da(a,e,s,t){const n=X({className:"ui-state-default ui-corner-top"})
return G(n,ua({htmlFor:za(a,t),innerHTML:s})),0!==t&&Y(n,"click",(()=>R(za(a,t),e[t]))),Z(n,(()=>o("QuickWear",za(a,t)))),n}const Ga=()=>J({className:"ui-tabs-panel ui-corner-bottom"})
function Ja(a,e,s,t){const n=function(a,e,s){const t=V({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(K(Da,e,s)).forEach(K(G,t)),t}(a,e,t)
R(`${e}-header`,n),G(s,n)}function Ka(a,e){const s=J({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=K(G,s)
!function(a,e,s){a.map(K(Ba,e)).forEach(s)}(a,e,t)
const n=a.map(Ga)
return R(za(e,0),n[0]),Ja(a,e,s,n),n.forEach(t),s}const Ra="disableQuickWearPrompts"
function Va(){o("QuickWear","Toggle Prompts"),U.disableQuickWearPrompts=!U.disableQuickWearPrompts,ia(Ra,U.disableQuickWearPrompts)}function Xa(a){G(a,J({className:"qwPref",innerHTML:oa(Ra)}))}function Ya(a,e){var s,t,n
na("qwtab-header",Xa),na("qwtab0",(a=>Ua(e,a))),na("qwtab1",(a=>_a(e,a))),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",D("",s=a),G(s,Ka(t,n)),Z(a,ra([[ca(Ra),Va]]))}async function Za(s){s&&$(s).on("dialogclose",(()=>o("QuickWear","Close")))
const t=s||ea()
if(!t)return
sa(t,"Getting item list from backpack..."),U.disableQuickWearPrompts=ta(Ra)
!function(a,s){e(s)&&Ya(a,s)}(t,await a())}function ae(a){aa()&&Za(a)}export{ae as default}
//# sourceMappingURL=quickWear-DFmfEU50.js.map
