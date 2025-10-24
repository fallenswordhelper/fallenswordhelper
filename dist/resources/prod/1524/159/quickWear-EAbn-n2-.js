import{b as a,a as e}from"./backpackOk-CKD5p1Qh.js"
import{y as t,z as s,e0 as n,K as i,ak as r,J as o,e1 as c,C as l,bJ as d,F as v,G as u,bD as m,dR as f,Q as p,dx as h,P as k,e2 as g,N as b,O as w,bI as q,H as y,aG as Q,E as W,e3 as x,bE as N,ap as j,D as I,s as S,R as z,T as H,e4 as T,dc as P,bR as E,bH as _,am as A,c1 as F,d$ as L,t as C,cr as G,$ as M,a2 as B,f as O,al as U,bS as D,ay as R,as as J,du as K,d as Y,i as V,v as X,c as Z,cG as aa,aa as ea,dL as ta,a7 as sa,o as na,j as ia,p as ra,a3 as oa,aA as ca,e5 as la,av as da}from"./calfSystem-CIdPz3EO.js"
import{e as va,s as ua}from"./selfIdIs-VADzkGzQ.js"
import{s as ma}from"./simpleCheckbox-cwzWQeYd.js"
import{F as fa}from"./FolderButtons-CsciEMnd.js"
import{I as pa}from"./ItemImg-DTebAiBh.js"
import{c as ha}from"./createInput-aJbr7AXf.js"
import{c as ka}from"./createLabel-CrgD_1iS.js"
import"./isChecked-D_0do7nT.js"
var ga=l("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),ba=l("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function wa(a,e){t(e,!0)
let l,$,j=s(e,"height",3,"100%"),I=s(e,"itemHeight",3,void 0),S=s(e,"start",15,0),z=s(e,"end",15,0),H=[],T=r(void 0),P=r(void 0),E=r(0),_=m(()=>e.items.slice(S(),z()).map((a,e)=>({index:e+S(),data:a}))),A=r(void 0),F=r(0),L=r(0),C=0
async function G(a,e){const{scrollTop:t}=i(T)
e={left:0,top:t+(a-S())*(I()||$),behavior:"smooth",...e},i(T).scrollTo(e)}n(()=>{l=i(P).getElementsByTagName("svelte-virtual-list-row"),o(A,!0)}),c(()=>{i(A)&&async function(a,e,t){if(C)return
C=!0,a.length<S()&&await G(a.length-1,{behavior:"auto"})
const{scrollTop:s}=i(T)
await q()
let n=i(F)-s,r=S()
for(;n<e&&r<a.length;){let a=l[r-S()]
a||(z(r+1),await q(),a=l[r-S()]),a&&(n+=H[r]=t||a.offsetHeight),r+=1}z(r)
const c=a.length-z()
$=(i(F)+n)/z(),o(L,c*$),H.length=a.length,C=!1}(e.items,i(E),I())})
var M=ba()
d(M,1,"svelte-wx5j6o")
var B=v(M)
d(B,1,"svelte-wx5j6o"),u(B,21,()=>i(_),a=>a.index,(a,t)=>{var s=ga()
d(s,1,"svelte-wx5j6o")
var n=v(s),r=a=>{var s=Q(),n=W(s)
x(n,()=>e.children,()=>({item:i(t).data})),b(a,s)},o=a=>{var e=N("Missing template")
b(a,e)}
y(n,a=>{e.children?a(r):a(o,!1)}),b(a,s)}),f(B,a=>o(P,a),()=>i(P)),f(M,a=>o(T,a),()=>i(T)),p(()=>{h(M,`height: ${j()??""};`),h(B,`padding-top: ${i(F)??""}px; padding-bottom: ${i(L)??""}px;`)}),k("scroll",M,async function(){const{scrollTop:a}=i(T)
for(let a=0;a<l.length;a+=1)H[S()+a]=I()||l[a].offsetHeight
let t=0,s=0
for(;t<e.items.length;){const e=H[t]||$
if(s+e>a){S(t),o(F,s,!0)
break}s+=e,t+=1}for(;t<e.items.length&&(s+=H[t]||$,t+=1,!(s>a+i(E))););z(t)
const n=e.items.length-z()
for($=s/z();t<e.items.length;)H[t++]=$
o(L,n*$)}),g(M,"offsetHeight",a=>o(E,a)),b(a,M),w()}var qa=(a,e)=>S("QuickWear","AH Quick Search",e()),ya=l('<div class="svelte-1lmgu38"> <a>AH Quick Search</a> found in your inventory</div>')
function $a(a,e){t(e,!0)
let n=s(e,"data",3,"")
var i=ya(),r=v(i),o=I(r)
o.__click=[qa,n],p(()=>{z(r,`Items ${n()??""} from `),H(o,"href",T)}),b(a,i),w()}j(["click"])
var Qa=l('<div class="th svelte-wltbzh"><div>Name</div> <div>Nick Name</div> <div>Inv Count</div></div>')
function Wa(a){var e=Qa()
b(a,e)}var xa=l("<hr/>")
function Na(a){var e=xa()
b(a,e)}var ja=(a,e)=>S("QuickWear","Nick Name",e().searchname),Ia=l("<a> </a>"),Sa=l("<div><div> </div> <div><!></div> <div> </div></div>")
function za(a,e){t(e,!0)
let n=s(e,"data",19,()=>({}))
var i=Sa()
let r
var o=v(i),c=v(o),l=I(o,2),u=v(l),m=a=>{var e=Ia()
e.__click=[ja,n]
var t=v(e)
p(()=>{H(e,"href",`${P??""}${n().searchname??""}`),z(t,n().nickname)}),b(a,e)}
y(u,a=>{n().nickname&&a(m)})
var f=I(l,2),h=v(f)
p(a=>{r=d(i,1,"tr svelte-1p3cb9v",null,r,a),z(c,n().searchname),z(h,n().count)},[()=>({odd:n().odd})]),b(a,i),w()}j(["click"])
var Ha=(a,e)=>S("QuickWear","Not Found",e()),Ta=l("<!> <a> </a>",1),Pa=l("<div>Did not find: <!></div>")
function Ea(a,e){t(e,!0)
let n=s(e,"data",19,()=>[])
var r=Pa(),o=I(v(r))
u(o,17,n,E,(a,e,t)=>{let s=()=>i(e).searchname
var n=Ta(),r=W(n),o=a=>{var e=N(",")
b(a,e)}
y(r,a=>{t>0&&a(o)})
var c=I(r,2)
c.__click=[Ha,s]
var l=v(c)
p(()=>{H(c,"href",`${P??""}${s()??""}`),z(l,i(e).nickname)}),b(a,n)}),b(a,r),w()}j(["click"])
var _a=l('<div class="vs svelte-10dd8v"><!></div>')
function Aa(a,e){t(e,!0)
let n=s(e,"itemList",3,0)
const i=_(n().items,"n").map(({n:a})=>({n:a,count:n().items.filter(({n:e})=>e===a).length})),r=A("quickSearchList")||[],o=_(r,"searchname").sort((a,e)=>F(a.searchname,e.searchname)),c=o.filter(({searchname:a})=>i.some(({n:e})=>e===a)).map(({nickname:a,searchname:e},t)=>({component:za,data:{count:i.find(({n:a})=>a===e).count,nickname:a,odd:t%2,searchname:e},id:t+3})),l=i.filter(({n:a})=>!c.some(({data:{searchname:e}})=>e===a)).map(({n:a,count:e},t)=>({component:za,data:{count:e,odd:t%2,searchname:a},id:t+c.length+7})),d=[{component:$a,id:1},{component:Wa,id:2},...c,{component:Na,id:c.length+3},{component:Ea,data:o.filter(({searchname:a})=>!i.some(({n:e})=>e===a)),id:c.length+4},{component:Na,id:c.length+5},{component:$a,data:"NOT",id:c.length+6},...l]
var u=_a()
{const a=(a,e)=>{let t=()=>e?.().item
var s=Q(),n=W(s)
L(n,()=>t().component,(a,e)=>{e(a,{get data(){return t().data}})}),b(a,s)}
wa(v(u),{get items(){return d},children:a,$$slots:{default:!0}})}b(a,u),w()}function Fa(a,e){!function(a,e){C(Aa,{props:{itemList:a},target:e})}(a,e)}function La(a){return G({subcmd:"equipitem",inventory_id:a})}async function Ca(a){return{s:0===(await B({cmd:"profile",subcmd:"equipitem",inventory_id:a,ajax:1})).r}}function Ga(a){return M(La,Ca,a)}var Ma=l('<span class="itemUsed svelte-1kshqzm"> </span>'),Ba=l('<span class="fshSpinner fshSpin12"></span>'),Oa=l('<span class="fshSpinner fshSpin12"></span>'),Ua=l('<span class="equippable svelte-1kshqzm"><!></span> | <span class="usable svelte-1kshqzm"><!></span>',1),Da=l('<div class="grid svelte-1kshqzm"><div class="actionButtons svelte-1kshqzm"><!></div> <div><!></div> <div> </div></div>'),Ra=l('<div class="folderButtons svelte-1kshqzm"><!></div> <div class="vs svelte-1kshqzm"><div class="headGrid svelte-1kshqzm"><div class="headOne svelte-1kshqzm">Actions</div> <div>Items</div></div> <!></div>',1)
function Ja(a,e){t(e,!0)
let n=s(e,"appInv",3,0)
const c=O(n().folders.filter(({a:a})=>-1!==a).map(({a:a,n:e})=>[a,e])),l=(a,e)=>F(a.n,e.n)
let d=r(U(n().items.sort(l)))
async function u(a,e,t,s){S("QuickWear",`doAction - ${s}`)
const n=i(d).findIndex(e=>e.a===a)
i(d)[n][e]=1;(await t(a)).s&&(i(d)[n].used=s)}var f=Ra(),h=W(f),k=v(h)
fa(k,{doFilter:function(a){S("QuickWear","doFilter")
const e=Number(a)
o(d,n().items.filter((a=>e=>-2===a||e.f===a)(e)).sort(l),!0)},get folders(){return c}})
var g=I(h,2)
{const a=(a,e)=>{let t=()=>e?.().item
var s=Da(),n=v(s),r=v(n),o=a=>{var e=Ma(),s=v(e)
p(()=>z(s,t().used)),b(a,e)},c=a=>{var e=Ua(),s=W(e),n=v(s),r=a=>{var e=Ba()
b(a,e)},o=a=>{{let e=m(()=>!t().eq)
D(a,{get disabled(){return i(e)},onclick:()=>{u(t().a,"equip",Ga,"Worn")},children:(a,e)=>{var t=N("Wear")
b(a,t)},$$slots:{default:!0}})}}
y(n,a=>{t().equip?a(r):a(o,!1)})
var c=I(s,2),l=v(c),d=a=>{var e=Oa()
b(a,e)},f=a=>{{let e=m(()=>t().eq||!(t().u&&!t().c))
D(a,{get disabled(){return i(e)},onclick:()=>async function(a){(R.disableQuickWearPrompts||await J("Are you sure you want to use/extract the item?"))&&u(a,"use",K,"Used")}(t().a),children:(a,e)=>{var t=N("Use/Ext")
b(a,t)},$$slots:{default:!0}})}}
y(l,a=>{t().use?a(d):a(f,!1)}),b(a,e)}
y(r,a=>{t().used?a(o):a(c,!1)})
var l=I(n,2),d=v(l)
pa(d,{get item(){return t()},small:"1",t:"0"})
var f=I(l,2),h=v(f)
p(()=>z(h,t().n)),b(a,s)}
wa(I(v(g),2),{get items(){return i(d)},children:a,$$slots:{default:!0}})}b(a,f),w()}function Ka(a,e){!function(a,e){C(Ja,{props:{appInv:a},target:e})}(a,e)}const Ya=(a,e)=>a+String(e)
function Va(a,e,t){return ha({checked:0===t,id:Ya(a,t),name:a,type:"radio"})}function Xa(a,e,t,s){const n=ta({className:"ui-state-default ui-corner-top"})
return V(n,ka({htmlFor:Ya(a,s),innerHTML:t})),0!==s&&sa(n,"click",()=>aa(Ya(a,s),e[s])),na(n,()=>S("QuickWear",Ya(a,s))),n}const Za=()=>X({className:"ui-tabs-panel ui-corner-bottom"})
function ae(a,e,t,s){const n=function(a,e,t){const s=ea({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return a.map(Z(Xa,e,t)).forEach(Z(V,s)),s}(a,e,s)
aa(`${e}-header`,n),V(t,n)}function ee(a,e){const t=X({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),s=Z(V,t)
!function(a,e,t){a.map(Z(Va,e)).forEach(t)}(a,e,s)
const n=a.map(Za)
return aa(Ya(e,0),n[0]),ae(a,e,t,n),n.forEach(s),t}const te="disableQuickWearPrompts"
function se(){S("QuickWear","Toggle Prompts"),R.disableQuickWearPrompts=!R.disableQuickWearPrompts,da(te,R.disableQuickWearPrompts)}function ne(a){V(a,X({className:"qwPref",innerHTML:ma(te)}))}function ie(a,e){var t,s,n
la("qwtab-header",ne),la("qwtab0",a=>Ka(e,a)),la("qwtab1",a=>Fa(e,a)),s=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],n="qwtab",Y("",t=a),V(t,ee(s,n)),na(a,va([[ua(te),se]]))}async function re(t){t&&$(t).on("dialogclose",()=>S("QuickWear","Close"))
const s=t||ra()
if(!s)return
oa(s,"Getting item list from backpack..."),R.disableQuickWearPrompts=ca(te)
!function(a,t){e(t)&&ie(a,t)}(s,await a())}function oe(a){ia()&&re(a)}export{oe as default}
//# sourceMappingURL=quickWear-EAbn-n2-.js.map
