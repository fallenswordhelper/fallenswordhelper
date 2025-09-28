import{b as a,a as e}from"./backpackOk-Tqyljaqd.js"
import{ao as s,x as t,y as n,B as i,C as r,E as c,s as o,P as d,Q as l,S as u,dX as m,L as v,N as f,G as p,bH as h,da as k,F as b,bP as g,D as q,J as Q,bC as W,bF as y,al as I,c0 as N,dY as w,aF as S,dW as j,n as z,cq as F,$ as x,a1 as P,f as _,aj as C,ak as L,I as A,bQ as E,bB as H,ax as B,ar as M,ds as T,d as O,i as U,u as G,c as D,cF as J,a9 as X,dF as Y,a6 as Z,o as K,cM as R,p as V,a2 as aa,az as ea,dZ as sa,au as ta}from"./calfSystem-CIuUjh4H.js"
import{e as na,s as ia}from"./selfIdIs-BaGxtKvW.js"
import{s as ra}from"./simpleCheckbox-D1e9ej5E.js"
import{F as ca}from"./FolderButtons-KBypcsgX.js"
import{I as oa}from"./ItemImg-D-Y1yfEI.js"
import{c as da}from"./createInput-ESh6G5it.js"
import{c as la}from"./createLabel-CKsPg3Zr.js"
import"./isChecked-D_0do7nT.js"
var ua=(a,e)=>o("QuickWear","AH Quick Search",e()),ma=i('<div class="svelte-1lmgu38"> <a>AH Quick Search</a> found in your inventory</div>')
function va(a,e){t(e,!0)
let s=n(e,"data",3,"")
var i=ma(),o=c(i),p=r(o)
p.__click=[ua,s],d(()=>{l(o,`Items ${s()??""} from `),u(p,"href",m)}),v(a,i),f()}s(["click"])
var fa=i('<div class="th svelte-wltbzh"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function pa(a){var e=fa()
v(a,e)}var ha=i("<hr/>")
function ka(a){var e=ha()
v(a,e)}var ba=(a,e)=>o("QuickWear","Nick Name",e().searchname),ga=i("<a> </a>"),qa=i("<div><div> </div> <div><!></div> <div> </div></div>")
function Qa(a,e){t(e,!0)
let s=n(e,"data",19,()=>({}))
var i=qa()
let o
var m=c(i),b=c(m),g=r(m,2),q=c(g),Q=a=>{var e=ga()
e.__click=[ba,s]
var t=c(e)
d(()=>{u(e,"href",`${k??""}${s().searchname??""}`),l(t,s().nickname)}),v(a,e)}
p(q,a=>{s().nickname&&a(Q)})
var W=r(g,2),$=c(W)
d(a=>{o=h(i,1,"tr svelte-1p3cb9v",null,o,a),l(b,s().searchname),l($,s().count)},[()=>({odd:s().odd})]),v(a,i),f()}s(["click"])
var Wa=(a,e)=>o("QuickWear","Not Found",e()),$a=i("<!> <a> </a>",1),ya=i("<div>Did not find: <!></div>")
function Ia(a,e){t(e,!0)
let s=n(e,"data",19,()=>[])
var i=ya(),o=r(c(i))
b(o,17,s,g,(a,e,s)=>{let t=()=>Q(e).searchname
var n=$a(),i=q(n),o=a=>{var e=W(",")
v(a,e)}
p(i,a=>{s>0&&a(o)})
var m=r(i,2)
m.__click=[Wa,t]
var f=c(m)
d(()=>{u(m,"href",`${k??""}${t()??""}`),l(f,Q(e).nickname)}),v(a,n)}),v(a,i),f()}s(["click"])
var Na=i('<div class="vs svelte-10dd8v"><!></div>')
function wa(a,e){t(e,!0)
let s=n(e,"itemList",3,0)
const i=y(s().items,"n").map(({n:a})=>({n:a,count:s().items.filter(({n:e})=>e===a).length})),r=I("quickSearchList")||[],o=y(r,"searchname").sort((a,e)=>N(a.searchname,e.searchname)),d=o.filter(({searchname:a})=>i.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},s)=>({component:Qa,data:{count:i.find(({n:a})=>a===e).count,nickname:a,odd:s%2,searchname:e},id:s+3})),l=i.filter(({n:a})=>!d.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},s)=>({component:Qa,data:{count:e,odd:s%2,searchname:a},id:s+d.length+7})),u=[{component:va,id:1},{component:pa,id:2},...d,{component:ka,id:d.length+3},{component:Ia,data:o.filter(({searchname:a})=>!i.some(({n:e})=>e===a)),id:d.length+4},{component:ka,id:d.length+5},{component:va,data:"NOT",id:d.length+6},...l]
var m=Na(),p=c(m)
{const a=(a,e)=>{let s=()=>e?.().item
var t=S(),n=q(t)
j(n,()=>s().component,(a,e)=>{e(a,{get data(){return s().data}})}),v(a,t)}
w(p,{get items(){return u},children:a,$$slots:{default:!0}})}v(a,m),f()}function Sa(a,e){!function(a,e){z(wa,{props:{itemList:a},target:e})}(a,e)}function ja(a){return F({subcmd:"equipitem",inventory_id:a})}async function za(a){return{s:0===(await P({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Fa(a){return x(ja,za,a)}var xa=i('<span class="itemUsed svelte-1kshqzm"> </span>'),Pa=i('<span class="fshSpinner fshSpin12"></span>'),_a=i('<span class="fshSpinner fshSpin12"></span>'),Ca=i('<span class="equippable svelte-1kshqzm"><!></span> | <span class="usable svelte-1kshqzm"><!></span>',1),La=i('<div class="grid svelte-1kshqzm"><div class="actionButtons svelte-1kshqzm"><!></div> <div><!></div> <div> </div></div>'),Aa=i('<div class="folderButtons svelte-1kshqzm"><!></div> <div class="vs svelte-1kshqzm"><div class="headGrid svelte-1kshqzm"><div class="headOne svelte-1kshqzm">Actions</div> <div>Items</div></div> <!></div>',1)
function Ea(a,e){t(e,!0)
let s=n(e,"appInv",3,0)
const i=_(s().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),u=(a,e)=>N(a.n,e.n)
let m=C(L(s().items.sort(u)))
async function h(a,e,s,t){o("QuickWear",`doAction - ${t}`)
const n=Q(m).findIndex(e=>e.a===a)
Q(m)[n][e]=1;(await s(a)).s&&(Q(m)[n].used=t)}var k=Aa(),b=q(k),g=c(b)
ca(g,{doFilter:function(a){o("QuickWear","doFilter")
const e=Number(a)
A(m,s().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(u),!0)},get folders(){return i}})
var $=r(b,2),y=r(c($),2)
{const a=(a,e)=>{let s=()=>e?.().item
var t=La(),n=c(t),i=c(n),o=a=>{var e=xa(),t=c(e)
d(()=>l(t,s().used)),v(a,e)},u=a=>{var e=Ca(),t=q(e),n=c(t),i=a=>{var e=Pa()
v(a,e)},o=a=>{{let e=H(()=>!s().eq)
E(a,{get disabled(){return Q(e)},onclick:()=>{h(s().a,"equip",Fa,"Worn")},children:(a,e)=>{var s=W("Wear")
v(a,s)},$$slots:{default:!0}})}}
p(n,a=>{s().equip?a(i):a(o,!1)})
var d=r(t,2),l=c(d),u=a=>{var e=_a()
v(a,e)},m=a=>{{let e=H(()=>s().eq||!(s().u&&!s().c))
E(a,{get disabled(){return Q(e)},onclick:()=>async function(a){(B.disableQuickWearPrompts||await M("Are you sure you want to use/extract the item?"))&&h(a,"use",T,"Used")}(s().a),children:(a,e)=>{var s=W("Use/Ext")
v(a,s)},$$slots:{default:!0}})}}
p(l,a=>{s().use?a(u):a(m,!1)}),v(a,e)}
p(i,a=>{s().used?a(o):a(u,!1)})
var m=r(n,2),f=c(m)
oa(f,{get item(){return s()},small:"1",t:"0"})
var k=r(m,2),b=c(k)
d(()=>l(b,s().n)),v(a,t)}
w(y,{get items(){return Q(m)},children:a,$$slots:{default:!0}})}v(a,k),f()}function Ha(a,e){!function(a,e){z(Ea,{props:{appInv:a},target:e})}(a,e)}const Ba=(a,e)=>a+String(e)
function Ma(a,e,s){return da({checked:0===s,id:Ba(a,s),name:a,type:"radio"})}function Ta(a,e,s,t){const n=Y({className:"ui-state-default ui-corner-top"})
return U(n,la({htmlFor:Ba(a,t),innerHTML:s})),0!==t&&Z(n,"click",()=>J(Ba(a,t),e[t])),K(n,()=>o("QuickWear",Ba(a,t))),n}const Oa=()=>G({className:"ui-tabs-panel ui-corner-bottom"})
function Ua(a,e,s,t){const n=function(a,e,s){const t=X({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(D(Ta,e,s)).forEach(D(U,t)),t}(a,e,t)
J(`${e}-header`,n),U(s,n)}function Ga(a,e){const s=G({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),t=D(U,s)
!function(a,e,s){a.map(D(Ma,e)).forEach(s)}(a,e,t)
const n=a.map(Oa)
return J(Ba(e,0),n[0]),Ua(a,e,s,n),n.forEach(t),s}const Da="disableQuickWearPrompts"
function Ja(){o("QuickWear","Toggle Prompts"),B.disableQuickWearPrompts=!B.disableQuickWearPrompts,ta(Da,B.disableQuickWearPrompts)}function Xa(a){U(a,G({className:"qwPref",innerHTML:ra(Da)}))}function Ya(a,e){var s,t,n
sa("qwtab-header",Xa),sa("qwtab0",a=>Ha(e,a)),sa("qwtab1",a=>Sa(e,a)),t=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",O("",s=a),U(s,Ga(t,n)),K(a,na([[ia(Da),Ja]]))}async function Za(s){s&&$(s).on("dialogclose",()=>o("QuickWear","Close"))
const t=s||V()
if(!t)return
aa(t,"Getting item list from backpack..."),B.disableQuickWearPrompts=ea(Da)
!function(a,s){e(s)&&Ya(a,s)}(t,await a())}function Ka(a){R()&&Za(a)}export{Ka as default}
//# sourceMappingURL=quickWear-DH0YZaIg.js.map
