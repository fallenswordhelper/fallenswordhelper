import{b as a,a as e}from"./backpackOk-CoVKbvvg.js"
import{y as t,z as s,e0 as n,K as i,ak as r,J as o,e1 as c,C as l,bG as d,F as v,G as u,cp as m,dR as f,Q as p,dw as h,P as k,e2 as g,N as b,O as w,bF as q,H as Q,aG as y,E as W,e3 as x,bQ as N,ap as j,D as I,s as z,R as S,T,e4 as H,dd as P,bO as F,bE as E,am as _,b$ as A,d$ as L,t as C,cq as G,$ as M,a2 as O,f as B,al as U,bP as D,ay as R,as as J,dt as K,d as Z,i as V,v as X,c as Y,cF as aa,aa as ea,dL as ta,a7 as sa,o as na,j as ia,p as ra,a3 as oa,aA as ca,e5 as la,av as da}from"./calfSystem-Cs6CSxoU.js"
import{e as va,s as ua}from"./selfIdIs-BJkQHLVH.js"
import{s as ma}from"./simpleCheckbox-C-dxZ6vG.js"
import{F as fa}from"./FolderButtons-DemK7XcK.js"
import{I as pa}from"./ItemImg-Bs0RZQth.js"
import{c as ha}from"./createInput-DJIEghIX.js"
import{c as ka}from"./createLabel-B6VVZZLi.js"
import"./isChecked-D_0do7nT.js"
var ga=l("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),ba=l("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function wa(a,e){t(e,!0)
let l,$,j=s(e,"height",3,"100%"),I=s(e,"itemHeight",3,void 0),z=s(e,"start",15,0),S=s(e,"end",15,0),T=[],H=r(void 0),P=r(void 0),F=r(0),E=m(()=>e.items.slice(z(),S()).map((a,e)=>({index:e+z(),data:a}))),_=r(void 0),A=r(0),L=r(0),C=0
async function G(a,e){const{scrollTop:t}=i(H)
e={left:0,top:t+(a-z())*(I()||$),behavior:"smooth",...e},i(H).scrollTo(e)}n(()=>{l=i(P).getElementsByTagName("svelte-virtual-list-row"),o(_,!0)}),c(()=>{i(_)&&async function(a,e,t){if(C)return
C=!0,a.length<z()&&await G(a.length-1,{behavior:"auto"})
const{scrollTop:s}=i(H)
await q()
let n=i(A)-s,r=z()
for(;n<e&&r<a.length;){let a=l[r-z()]
a||(S(r+1),await q(),a=l[r-z()]),a&&(n+=T[r]=t||a.offsetHeight),r+=1}S(r)
const c=a.length-S()
$=(i(A)+n)/S(),o(L,c*$),T.length=a.length,C=!1}(e.items,i(F),I())})
var M=ba()
d(M,1,"svelte-wx5j6o")
var O=v(M)
d(O,1,"svelte-wx5j6o"),u(O,21,()=>i(E),a=>a.index,(a,t)=>{var s=ga()
d(s,1,"svelte-wx5j6o")
var n=v(s),r=a=>{var s=y(),n=W(s)
x(n,()=>e.children,()=>({item:i(t).data})),b(a,s)},o=a=>{var e=N("Missing template")
b(a,e)}
Q(n,a=>{e.children?a(r):a(o,!1)}),b(a,s)}),f(O,a=>o(P,a),()=>i(P)),f(M,a=>o(H,a),()=>i(H)),p(()=>{h(M,`height: ${j()??""};`),h(O,`padding-top: ${i(A)??""}px; padding-bottom: ${i(L)??""}px;`)}),k("scroll",M,async function(){const{scrollTop:a}=i(H)
for(let a=0;a<l.length;a+=1)T[z()+a]=I()||l[a].offsetHeight
let t=0,s=0
for(;t<e.items.length;){const e=T[t]||$
if(s+e>a){z(t),o(A,s,!0)
break}s+=e,t+=1}for(;t<e.items.length&&(s+=T[t]||$,t+=1,!(s>a+i(F))););S(t)
const n=e.items.length-S()
for($=s/S();t<e.items.length;)T[t++]=$
o(L,n*$)}),g(M,"offsetHeight",a=>o(F,a)),b(a,M),w()}var qa=l('<div class="svelte-1lmgu38"> <a>AH Quick Search</a> found in your inventory</div>')
function $a(a,e){t(e,!0)
let n=s(e,"data",3,"")
var i=qa(),r=v(i),o=I(r)
o.__click=()=>z("QuickWear","AH Quick Search",n()),p(()=>{S(r,`Items ${n()??""} from `),T(o,"href",H)}),b(a,i),w()}j(["click"])
var Qa=l('<div class="th svelte-wltbzh"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function ya(a){var e=Qa()
b(a,e)}var Wa=l("<hr/>")
function xa(a){var e=Wa()
b(a,e)}var Na=l("<a> </a>"),ja=l("<div><div> </div> <div><!></div> <div> </div></div>")
function Ia(a,e){t(e,!0)
let n=s(e,"data",19,()=>({}))
var i=ja()
let r
var o=v(i),c=v(o),l=I(o,2),u=v(l),m=a=>{var e=Na()
e.__click=()=>z("QuickWear","Nick Name",n().searchname)
var t=v(e)
p(()=>{T(e,"href",`${P??""}${n().searchname??""}`),S(t,n().nickname)}),b(a,e)}
Q(u,a=>{n().nickname&&a(m)})
var f=I(l,2),h=v(f)
p(()=>{r=d(i,1,"tr svelte-1p3cb9v",null,r,{odd:n().odd}),S(c,n().searchname),S(h,n().count)}),b(a,i),w()}j(["click"])
var za=l("<!> <a> </a>",1),Sa=l("<div>Did not find: <!></div>")
function Ta(a,e){t(e,!0)
let n=s(e,"data",19,()=>[])
var r=Sa(),o=I(v(r))
u(o,17,n,F,(a,e,t)=>{let s=()=>i(e).searchname
var n=za(),r=W(n),o=a=>{var e=N(",")
b(a,e)}
Q(r,a=>{t>0&&a(o)})
var c=I(r,2)
c.__click=()=>z("QuickWear","Not Found",s())
var l=v(c)
p(()=>{T(c,"href",`${P??""}${s()??""}`),S(l,i(e).nickname)}),b(a,n)}),b(a,r),w()}j(["click"])
var Ha=l('<div class="vs svelte-10dd8v"><!></div>')
function Pa(a,e){t(e,!0)
let n=s(e,"itemList",3,0)
const i=E(n().items,"n").map(({n:a})=>({n:a,count:n().items.filter(({n:e})=>e===a).length})),r=_("quickSearchList")||[],o=E(r,"searchname").sort((a,e)=>A(a.searchname,e.searchname)),c=o.filter(({searchname:a})=>i.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},t)=>({component:Ia,data:{count:i.find(({n:a})=>a===e).count,nickname:a,odd:t%2,searchname:e},id:t+3})),l=i.filter(({n:a})=>!c.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},t)=>({component:Ia,data:{count:e,odd:t%2,searchname:a},id:t+c.length+7})),d=[{component:$a,id:1},{component:ya,id:2},...c,{component:xa,id:c.length+3},{component:Ta,data:o.filter(({searchname:a})=>!i.some(({n:e})=>e===a)),id:c.length+4},{component:xa,id:c.length+5},{component:$a,data:"NOT",id:c.length+6},...l]
var u=Ha()
{const a=(a,e)=>{let t=()=>e?.().item
var s=y(),n=W(s)
L(n,()=>t().component,(a,e)=>{e(a,{get data(){return t().data}})}),b(a,s)}
wa(v(u),{get items(){return d},children:a,$$slots:{default:!0}})}b(a,u),w()}function Fa(a,e){!function(a,e){C(Pa,{props:{itemList:a},target:e})}(a,e)}function Ea(a){return G({subcmd:"equipitem",inventory_id:a})}async function _a(a){return{s:0===(await O({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Aa(a){return M(Ea,_a,a)}var La=l('<span class="itemUsed svelte-1kshqzm"> </span>'),Ca=l('<span class="fshSpinner fshSpin12"></span>'),Ga=l('<span class="fshSpinner fshSpin12"></span>'),Ma=l('<span class="equippable svelte-1kshqzm"><!></span> | <span class="usable svelte-1kshqzm"><!></span>',1),Oa=l('<div class="grid svelte-1kshqzm"><div class="actionButtons svelte-1kshqzm"><!></div> <div><!></div> <div> </div></div>'),Ba=l('<div class="folderButtons svelte-1kshqzm"><!></div> <div class="vs svelte-1kshqzm"><div class="headGrid svelte-1kshqzm"><div class="headOne svelte-1kshqzm">Actions</div> <div>Items</div></div> <!></div>',1)
function Ua(a,e){t(e,!0)
let n=s(e,"appInv",3,0)
const c=B(n().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),l=(a,e)=>A(a.n,e.n)
let d=r(U(n().items.sort(l)))
async function u(a,e,t,s){z("QuickWear",`doAction - ${s}`)
const n=i(d).findIndex(e=>e.a===a)
i(d)[n][e]=1;(await t(a)).s&&(i(d)[n].used=s)}var f=Ba(),h=W(f),k=v(h)
fa(k,{doFilter:function(a){z("QuickWear","doFilter")
const e=Number(a)
o(d,n().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(l),!0)},get folders(){return c}})
var g=I(h,2)
{const a=(a,e)=>{let t=()=>e?.().item
var s=Oa(),n=v(s),r=v(n),o=a=>{var e=La(),s=v(e)
p(()=>S(s,t().used)),b(a,e)},c=a=>{var e=Ma(),s=W(e),n=v(s),r=a=>{var e=Ca()
b(a,e)},o=a=>{{let e=m(()=>!t().eq)
D(a,{get disabled(){return i(e)},onclick:()=>{u(t().a,"equip",Aa,"Worn")},children:(a,e)=>{var t=N("Wear")
b(a,t)},$$slots:{default:!0}})}}
Q(n,a=>{t().equip?a(r):a(o,!1)})
var c=I(s,2),l=v(c),d=a=>{var e=Ga()
b(a,e)},f=a=>{{let e=m(()=>t().eq||!(t().u&&!t().c))
D(a,{get disabled(){return i(e)},onclick:()=>async function(a){(R.disableQuickWearPrompts||await J("Are you sure you want to use/extract the item?"))&&u(a,"use",K,"Used")}(t().a),children:(a,e)=>{var t=N("Use/Ext")
b(a,t)},$$slots:{default:!0}})}}
Q(l,a=>{t().use?a(d):a(f,!1)}),b(a,e)}
Q(r,a=>{t().used?a(o):a(c,!1)})
var l=I(n,2),d=v(l)
pa(d,{get item(){return t()},small:"1",t:"0"})
var f=I(l,2),h=v(f)
p(()=>S(h,t().n)),b(a,s)}
wa(I(v(g),2),{get items(){return i(d)},children:a,$$slots:{default:!0}})}b(a,f),w()}function Da(a,e){!function(a,e){C(Ua,{props:{appInv:a},target:e})}(a,e)}const Ra=(a,e)=>a+String(e)
function Ja(a,e,t){return ha({checked:0===t,id:Ra(a,t),name:a,type:"radio"})}function Ka(a,e,t,s){const n=ta({className:"ui-state-default ui-corner-top"})
return V(n,ka({htmlFor:Ra(a,s),innerHTML:t})),0!==s&&sa(n,"click",()=>aa(Ra(a,s),e[s])),na(n,()=>z("QuickWear",Ra(a,s))),n}const Za=()=>X({className:"ui-tabs-panel ui-corner-bottom"})
function Va(a,e,t,s){const n=function(a,e,t){const s=ea({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(Y(Ka,e,t)).forEach(Y(V,s)),s}(a,e,s)
aa(`${e}-header`,n),V(t,n)}function Xa(a,e){const t=X({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),s=Y(V,t)
!function(a,e,t){a.map(Y(Ja,e)).forEach(t)}(a,e,s)
const n=a.map(Za)
return aa(Ra(e,0),n[0]),Va(a,e,t,n),n.forEach(s),t}const Ya="disableQuickWearPrompts"
function ae(){z("QuickWear","Toggle Prompts"),R.disableQuickWearPrompts=!R.disableQuickWearPrompts,da(Ya,R.disableQuickWearPrompts)}function ee(a){V(a,X({className:"qwPref",innerHTML:ma(Ya)}))}function te(a,e){var t,s,n
la("qwtab-header",ee),la("qwtab0",a=>Da(e,a)),la("qwtab1",a=>Fa(e,a)),s=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",Z("",t=a),V(t,Xa(s,n)),na(a,va([[ua(Ya),ae]]))}async function se(t){t&&$(t).on("dialogclose",()=>z("QuickWear","Close"))
const s=t||ra()
if(!s)return
oa(s,"Getting item list from backpack..."),R.disableQuickWearPrompts=ca(Ya)
!function(a,t){e(t)&&te(a,t)}(s,await a())}function ne(a){ia()&&se(a)}export{ne as default}
//# sourceMappingURL=quickWear-BwQ9dt_0.js.map
