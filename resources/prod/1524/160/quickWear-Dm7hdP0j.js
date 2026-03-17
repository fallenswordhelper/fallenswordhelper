import{b as a,a as e}from"./backpackOk-D6BL4kQQ.js"
import{y as t,z as s,e0 as n,K as i,ak as r,J as o,e1 as c,C as l,bH as d,F as v,G as u,H as m,N as f,aG as p,E as h,e2 as k,bG as g,bD as b,dR as w,P as q,dx as y,U as Q,e3 as W,O as x,bJ as N,ap as j,D as I,s as S,S as z,Q as H,e4 as T,dc as P,bT as _,bI as A,am as E,c2 as F,d$ as L,t as C,cr as G,$ as M,a2 as U,f as B,al as O,bR as D,ay as J,as as R,du as K,d as Y,i as V,v as X,c as Z,cG as aa,aa as ea,dL as ta,a7 as sa,o as na,j as ia,p as ra,a3 as oa,aA as ca,e5 as la,av as da}from"./calfSystem-HVCiy-VV.js"
import{e as va,s as ua}from"./selfIdIs-DjCJFjQp.js"
import{s as ma}from"./simpleCheckbox-CEHi-xtc.js"
import{F as fa}from"./FolderButtons-BuCf5paR.js"
import{I as pa}from"./ItemImg-0EM3a_QW.js"
import{c as ha}from"./createInput-343o8t4v.js"
import{c as ka}from"./createLabel-C7UFXjFF.js"
import"./isChecked-D_0do7nT.js"
var ga=l("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),ba=l("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function wa(a,e){t(e,!0)
let l,$,j=s(e,"height",3,"100%"),I=s(e,"itemHeight",3,void 0),S=s(e,"start",15,0),z=s(e,"end",15,0),H=[],T=r(void 0),P=r(void 0),_=r(0),A=b(()=>e.items.slice(S(),z()).map((a,e)=>({index:e+S(),data:a}))),E=r(void 0),F=r(0),L=r(0),C=0
async function G(a,e){const{scrollTop:t}=i(T)
e={left:0,top:t+(a-S())*(I()||$),behavior:"smooth",...e},i(T).scrollTo(e)}n(()=>{l=i(P).getElementsByTagName("svelte-virtual-list-row"),o(E,!0)}),c(()=>{i(E)&&async function(a,e,t){if(C)return
C=!0,a.length<S()&&await G(a.length-1,{behavior:"auto"})
const{scrollTop:s}=i(T)
await N()
let n=i(F)-s,r=S()
for(;n<e&&r<a.length;){let a=l[r-S()]
a||(z(r+1),await N(),a=l[r-S()]),a&&(n+=H[r]=t||a.offsetHeight),r+=1}z(r)
const c=a.length-z()
$=(i(F)+n)/z(),o(L,c*$),H.length=a.length,C=!1}(e.items,i(_),I())})
var M=ba()
d(M,1,"svelte-wx5j6o")
var U=v(M)
d(U,1,"svelte-wx5j6o"),u(U,21,()=>i(A),a=>a.index,(a,t)=>{var s=ga()
d(s,1,"svelte-wx5j6o")
var n=v(s),r=a=>{var s=p(),n=h(s)
k(n,()=>e.children,()=>({item:i(t).data})),f(a,s)},o=a=>{var e=g("Missing template")
f(a,e)}
m(n,a=>{e.children?a(r):a(o,!1)}),f(a,s)}),w(U,a=>o(P,a),()=>i(P)),w(M,a=>o(T,a),()=>i(T)),q(()=>{y(M,`height: ${j()??""};`),y(U,`padding-top: ${i(F)??""}px; padding-bottom: ${i(L)??""}px;`)}),Q("scroll",M,async function(){const{scrollTop:a}=i(T)
for(let a=0;a<l.length;a+=1)H[S()+a]=I()||l[a].offsetHeight
let t=0,s=0
for(;t<e.items.length;){const e=H[t]||$
if(s+e>a){S(t),o(F,s,!0)
break}s+=e,t+=1}for(;t<e.items.length&&(s+=H[t]||$,t+=1,!(s>a+i(_))););z(t)
const n=e.items.length-z()
for($=s/z();t<e.items.length;)H[t++]=$
o(L,n*$)}),W(M,"offsetHeight",a=>o(_,a)),f(a,M),x()}var qa=l('<div class="svelte-1lmgu38"> <a>AH Quick Search</a> found in your inventory</div>')
function ya(a,e){t(e,!0)
let n=s(e,"data",3,"")
var i=qa(),r=v(i),o=I(r)
o.__click=()=>S("QuickWear","AH Quick Search",n()),q(()=>{z(r,`Items ${n()??""} from `),H(o,"href",T)}),f(a,i),x()}j(["click"])
var $a=l('<div class="th svelte-wltbzh"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function Qa(a){var e=$a()
f(a,e)}var Wa=l("<hr/>")
function xa(a){var e=Wa()
f(a,e)}var Na=l("<a> </a>"),ja=l("<div><div> </div> <div><!></div> <div> </div></div>")
function Ia(a,e){t(e,!0)
let n=s(e,"data",19,()=>({}))
var i=ja()
let r
var o=v(i),c=v(o),l=I(o,2),u=v(l),p=a=>{var e=Na()
e.__click=()=>S("QuickWear","Nick Name",n().searchname)
var t=v(e)
q(()=>{H(e,"href",`${P??""}${n().searchname??""}`),z(t,n().nickname)}),f(a,e)}
m(u,a=>{n().nickname&&a(p)})
var h=I(l,2),k=v(h)
q(()=>{r=d(i,1,"tr svelte-1p3cb9v",null,r,{odd:n().odd}),z(c,n().searchname),z(k,n().count)}),f(a,i),x()}j(["click"])
var Sa=l("<!> <a> </a>",1),za=l("<div>Did not find: <!></div>")
function Ha(a,e){t(e,!0)
let n=s(e,"data",19,()=>[])
var r=za(),o=I(v(r))
u(o,17,n,_,(a,e,t)=>{let s=()=>i(e).searchname
var n=Sa(),r=h(n),o=a=>{var e=g(",")
f(a,e)}
m(r,a=>{t>0&&a(o)})
var c=I(r,2)
c.__click=()=>S("QuickWear","Not Found",s())
var l=v(c)
q(()=>{H(c,"href",`${P??""}${s()??""}`),z(l,i(e).nickname)}),f(a,n)}),f(a,r),x()}j(["click"])
var Ta=l('<div class="vs svelte-10dd8v"><!></div>')
function Pa(a,e){t(e,!0)
let n=s(e,"itemList",3,0)
const i=A(n().items,"n").map(({n:a})=>({n:a,count:n().items.filter(({n:e})=>e===a).length})),r=E("quickSearchList")||[],o=A(r,"searchname").sort((a,e)=>F(a.searchname,e.searchname)),c=o.filter(({searchname:a})=>i.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},t)=>({component:Ia,data:{count:i.find(({n:a})=>a===e).count,nickname:a,odd:t%2,searchname:e},id:t+3})),l=i.filter(({n:a})=>!c.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},t)=>({component:Ia,data:{count:e,odd:t%2,searchname:a},id:t+c.length+7})),d=[{component:ya,id:1},{component:Qa,id:2},...c,{component:xa,id:c.length+3},{component:Ha,data:o.filter(({searchname:a})=>!i.some(({n:e})=>e===a)),id:c.length+4},{component:xa,id:c.length+5},{component:ya,data:"NOT",id:c.length+6},...l]
var u=Ta()
{const a=(a,e)=>{let t=()=>e?.().item
var s=p(),n=h(s)
L(n,()=>t().component,(a,e)=>{e(a,{get data(){return t().data}})}),f(a,s)}
wa(v(u),{get items(){return d},children:a,$$slots:{default:!0}})}f(a,u),x()}function _a(a,e){!function(a,e){C(Pa,{props:{itemList:a},target:e})}(a,e)}function Aa(a){return G({subcmd:"equipitem",inventory_id:a})}async function Ea(a){return{s:0===(await U({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Fa(a){return M(Aa,Ea,a)}var La=l('<span class="itemUsed svelte-1kshqzm"> </span>'),Ca=l('<span class="fshSpinner fshSpin12"></span>'),Ga=l('<span class="fshSpinner fshSpin12"></span>'),Ma=l('<span class="equippable svelte-1kshqzm"><!></span> | <span class="usable svelte-1kshqzm"><!></span>',1),Ua=l('<div class="grid svelte-1kshqzm"><div class="actionButtons svelte-1kshqzm"><!></div> <div><!></div> <div> </div></div>'),Ba=l('<div class="folderButtons svelte-1kshqzm"><!></div> <div class="vs svelte-1kshqzm"><div class="headGrid svelte-1kshqzm"><div class="headOne svelte-1kshqzm">Actions</div> <div>Items</div></div> <!></div>',1)
function Oa(a,e){t(e,!0)
let n=s(e,"appInv",3,0)
const c=B(n().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),l=(a,e)=>F(a.n,e.n)
let d=r(O(n().items.sort(l)))
async function u(a,e,t,s){S("QuickWear",`doAction - ${s}`)
const n=i(d).findIndex(e=>e.a===a)
i(d)[n][e]=1;(await t(a)).s&&(i(d)[n].used=s)}var p=Ba(),k=h(p),w=v(k)
fa(w,{doFilter:function(a){S("QuickWear","doFilter")
const e=Number(a)
o(d,n().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(l),!0)},get folders(){return c}})
var y=I(k,2)
{const a=(a,e)=>{let t=()=>e?.().item
var s=Ua(),n=v(s),r=v(n),o=a=>{var e=La(),s=v(e)
q(()=>z(s,t().used)),f(a,e)},c=a=>{var e=Ma(),s=h(e),n=v(s),r=a=>{var e=Ca()
f(a,e)},o=a=>{{let e=b(()=>!t().eq)
D(a,{get disabled(){return i(e)},onclick:()=>{u(t().a,"equip",Fa,"Worn")},children:(a,e)=>{var t=g("Wear")
f(a,t)},$$slots:{default:!0}})}}
m(n,a=>{t().equip?a(r):a(o,!1)})
var c=I(s,2),l=v(c),d=a=>{var e=Ga()
f(a,e)},p=a=>{{let e=b(()=>t().eq||!(t().u&&!t().c))
D(a,{get disabled(){return i(e)},onclick:()=>async function(a){(J.disableQuickWearPrompts||await R("Are you sure you want to use/extract the item?"))&&u(a,"use",K,"Used")}(t().a),children:(a,e)=>{var t=g("Use/Ext")
f(a,t)},$$slots:{default:!0}})}}
m(l,a=>{t().use?a(d):a(p,!1)}),f(a,e)}
m(r,a=>{t().used?a(o):a(c,!1)})
var l=I(n,2),d=v(l)
pa(d,{get item(){return t()},small:"1",t:"0"})
var p=I(l,2),k=v(p)
q(()=>z(k,t().n)),f(a,s)}
wa(I(v(y),2),{get items(){return i(d)},children:a,$$slots:{default:!0}})}f(a,p),x()}function Da(a,e){!function(a,e){C(Oa,{props:{appInv:a},target:e})}(a,e)}const Ja=(a,e)=>a+String(e)
function Ra(a,e,t){return ha({checked:0===t,id:Ja(a,t),name:a,type:"radio"})}function Ka(a,e,t,s){const n=ta({className:"ui-state-default ui-corner-top"})
return V(n,ka({htmlFor:Ja(a,s),innerHTML:t})),0!==s&&sa(n,"click",()=>aa(Ja(a,s),e[s])),na(n,()=>S("QuickWear",Ja(a,s))),n}const Ya=()=>X({className:"ui-tabs-panel ui-corner-bottom"})
function Va(a,e,t,s){const n=function(a,e,t){const s=ea({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(Z(Ka,e,t)).forEach(Z(V,s)),s}(a,e,s)
aa(`${e}-header`,n),V(t,n)}function Xa(a,e){const t=X({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),s=Z(V,t)
!function(a,e,t){a.map(Z(Ra,e)).forEach(t)}(a,e,s)
const n=a.map(Ya)
return aa(Ja(e,0),n[0]),Va(a,e,t,n),n.forEach(s),t}const Za="disableQuickWearPrompts"
function ae(){S("QuickWear","Toggle Prompts"),J.disableQuickWearPrompts=!J.disableQuickWearPrompts,da(Za,J.disableQuickWearPrompts)}function ee(a){V(a,X({className:"qwPref",innerHTML:ma(Za)}))}function te(a,e){var t,s,n
la("qwtab-header",ee),la("qwtab0",a=>Da(e,a)),la("qwtab1",a=>_a(e,a)),s=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",Y("",t=a),V(t,Xa(s,n)),na(a,va([[ua(Za),ae]]))}async function se(t){t&&$(t).on("dialogclose",()=>S("QuickWear","Close"))
const s=t||ra()
if(!s)return
oa(s,"Getting item list from backpack..."),J.disableQuickWearPrompts=ca(Za)
!function(a,t){e(t)&&te(a,t)}(s,await a())}function ne(a){ia()&&se(a)}export{ne as default}
//# sourceMappingURL=quickWear-Dm7hdP0j.js.map
