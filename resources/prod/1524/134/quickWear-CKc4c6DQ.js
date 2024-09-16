import{b as t}from"./backpack-B2KRyzBu.js"
import{b as e}from"./backpackOk-CagcATOI.js"
import{S as n,L as a,M as s,O as r,a3 as c,Q as i,dq as o,T as u,U as l,X as m,a4 as d,_ as f,a0 as p,s as h,P as g,cg as b,cF as v,N as k,b6 as w,bj as x,bk as j,be as Q,bh as y,bl as I,a2 as W,bu as q,dp as N,am as S,bf as L,bg as M,f as P,ag as T,d as A,i as H,m as B,c as C,B as E,cy as F,z as U,o as O,c6 as z,p as G,v as V,ai as D,ae as J}from"./calfSystem-CyLCrHqa.js"
import{e as R,s as X}from"./selfIdIs-DK06bVM6.js"
import{s as Y}from"./simpleCheckbox-BdfFBKDo.js"
import{p as _,a as K}from"./pubsub-aYmnelqU.js"
import{V as Z,g as tt,d as et}from"./daEquipItem-CyqfGAqn.js"
import{u as nt}from"./uniq-DXRxPJJ2.js"
import{d as at}from"./daUseItem-BbEsbVb6.js"
import{F as st}from"./FolderButtons--ymoZ_92.js"
import{I as rt}from"./ItemImg-CkWYeOTJ.js"
import{L as ct}from"./LinkButton-DsLK-qp2.js"
import{c as it}from"./confirm-C9-RhGUQ.js"
import{c as ot}from"./createInput-BtlCzWmP.js"
import{c as ut}from"./createLabel-ROofyWeI.js"
import"./isArray-eVldfhw1.js"
import"./isChecked-D_0do7nT.js"
import"./Modal-CK6EKYne.js"
import"./instantiate-upFtXRx7.js"
function lt(t){let e,n,a,s,$,h,g,b
return{c(){e=r("div"),n=c("Items "),a=c(t[0]),s=c(" from\n  "),$=r("a"),$.textContent="AH Quick Search",h=c("\n  found in your inventory"),i($,"href",o),i(e,"class","svelte-17xtpol")},m(r,c){u(r,e,c),l(e,n),l(e,a),l(e,s),l(e,$),l(e,h),g||(b=m($,"click",t[1]),g=!0)},p(t,[e]){1&e&&d(a,t[0])},i:f,o:f,d(t){t&&p(e),g=!1,b()}}}function mt(t,e,n){let{data:a=""}=e
return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a,()=>h("QuickWear","AH Quick Search",a)]}class dt extends n{constructor(t){super(),a(this,t,mt,lt,s,{data:0})}}function ft(t){let e
return{c(){e=r("div"),e.innerHTML="<div>Name</div> <div>Nick Name</div> <div>Inv Count</div>",i(e,"class","th svelte-kjal3l")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}class pt extends n{constructor(t){super(),a(this,t,null,ft,s,{})}}function $t(t){let e
return{c(){e=r("hr")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}class ht extends n{constructor(t){super(),a(this,t,null,$t,s,{})}}function gt(t){let e,n,a,s,o,f=t[0].nickname+""
return{c(){e=r("a"),n=c(f),i(e,"href",a=""+(v+t[0].searchname))},m(a,r){u(a,e,r),l(e,n),s||(o=m(e,"click",t[1]),s=!0)},p(t,s){1&s&&f!==(f=t[0].nickname+"")&&d(n,f),1&s&&a!==(a=""+(v+t[0].searchname))&&i(e,"href",a)},d(t){t&&p(e),s=!1,o()}}}function bt(t){let e,n,a,s,o,m,$,h,v=t[0].searchname+"",k=t[0].count+"",w=t[0].nickname&&gt(t)
return{c(){e=r("div"),n=r("div"),a=c(v),s=g(),o=r("div"),w&&w.c(),m=g(),$=r("div"),h=c(k),i(e,"class","tr svelte-fhessj"),b(e,"odd",t[0].odd)},m(t,r){u(t,e,r),l(e,n),l(n,a),l(e,s),l(e,o),w&&w.m(o,null),l(e,m),l(e,$),l($,h)},p(t,[n]){1&n&&v!==(v=t[0].searchname+"")&&d(a,v),t[0].nickname?w?w.p(t,n):(w=gt(t),w.c(),w.m(o,null)):w&&(w.d(1),w=null),1&n&&k!==(k=t[0].count+"")&&d(h,k),1&n&&b(e,"odd",t[0].odd)},i:f,o:f,d(t){t&&p(e),w&&w.d()}}}function vt(t,e,n){let{data:a={}}=e
return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a,()=>h("QuickWear","Nick Name",a.searchname)]}class kt extends n{constructor(t){super(),a(this,t,vt,bt,s,{data:0})}}function wt(t,e,n){const a=t.slice()
return a[2]=e[n].nickname,a[3]=e[n].searchname,a[5]=n,a}function xt(t){let e,n,a,s,o,f,$=t[2]+"",h=t[5]>0&&function(t){let e
return{c(){e=c(",")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}()
function b(){return t[1](t[3])}return{c(){h&&h.c(),e=g(),n=r("a"),a=c($),i(n,"href",s=""+(v+t[3]))},m(t,s){h&&h.m(t,s),u(t,e,s),u(t,n,s),l(n,a),o||(f=m(n,"click",b),o=!0)},p(e,r){t=e,1&r&&$!==($=t[2]+"")&&d(a,$),1&r&&s!==(s=""+(v+t[3]))&&i(n,"href",s)},d(t){t&&(p(e),p(n)),h&&h.d(t),o=!1,f()}}}function jt(t){let e,n,a=k(t[0]),s=[]
for(let e=0;e<a.length;e+=1)s[e]=xt(wt(t,a,e))
return{c(){e=r("div"),n=c("Did not find:\n  ")
for(let t=0;t<s.length;t+=1)s[t].c()},m(t,a){u(t,e,a),l(e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[n]){if(1&n){let r
for(a=k(t[0]),r=0;r<a.length;r+=1){const c=wt(t,a,r)
s[r]?s[r].p(c,n):(s[r]=xt(c),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1)
s.length=a.length}},i:f,o:f,d(t){t&&p(e),w(s,t)}}}function Qt(t,e,n){let{data:a=[]}=e
return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a,t=>h("QuickWear","Not Found",t)]}class yt extends n{constructor(t){super(),a(this,t,Qt,jt,s,{data:0})}}function It(t){let e,n,a
var s=t[10].component
function r(t,e){return{props:{data:t[10].data}}}return s&&(e=N(s,r(t))),{c(){e&&x(e.$$.fragment),n=S()},m(t,s){e&&j(e,t,s),u(t,n,s),a=!0},p(t,a){if(1024&a&&s!==(s=t[10].component)){if(e){L()
const t=e
y(t.$$.fragment,1,0,(()=>{I(t,1)})),M()}s?(e=N(s,r(t)),x(e.$$.fragment),Q(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(s){const n={}
1024&a&&(n.data=t[10].data),e.$set(n)}},i(t){a||(e&&Q(e.$$.fragment,t),a=!0)},o(t){e&&y(e.$$.fragment,t),a=!1},d(t){t&&p(n),e&&I(e,t)}}}function Wt(t){let e,n,a
return n=new Z({props:{data:t[0],key:"id",keeps:Math.floor(tt()/10),estimateSize:"14",$$slots:{default:[It,({data:t})=>({10:t}),({data:t})=>t?1024:0]},$$scope:{ctx:t}}}),{c(){e=r("div"),x(n.$$.fragment),i(e,"class","vs svelte-114e2ss")},m(t,s){u(t,e,s),j(n,e,null),a=!0},p(t,[e]){const a={}
3072&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a)},i(t){a||(Q(n.$$.fragment,t),a=!0)},o(t){y(n.$$.fragment,t),a=!1},d(t){t&&p(e),I(n)}}}function qt(t,e,n){let{itemList:a=0}=e
const s=nt(a.items,"n").map((({n:t})=>({n:t,count:a.items.filter((({n:e})=>e===t)).length}))),r=W("quickSearchList")||[],c=nt(r,"searchname").sort(((t,e)=>q(t.searchname,e.searchname))),i=c.filter((({searchname:t})=>s.some((({n:e})=>e===t)))).map((({nickname:t,searchname:e},n)=>({component:kt,data:{count:s.find((({n:t})=>t===e)).count,nickname:t,odd:n%2,searchname:e},id:n+3}))),o=s.filter((({n:t})=>!i.some((({data:{searchname:e}})=>e===t)))).map((({n:t,count:e},n)=>({component:kt,data:{count:e,odd:n%2,searchname:t},id:n+i.length+7}))),u=[{component:dt,id:1},{component:pt,id:2},...i,{component:ht,id:i.length+3},{component:yt,data:c.filter((({searchname:t})=>!s.some((({n:e})=>e===t)))),id:i.length+4},{component:ht,id:i.length+5},{component:dt,data:"NOT",id:i.length+6},...o]
return t.$$set=t=>{"itemList"in t&&n(1,a=t.itemList)},[u,a]}class Nt extends n{constructor(t){super(),a(this,t,qt,Wt,s,{itemList:1})}}function St(t,e){!function(t,e){new Nt({props:{itemList:t},target:e})}(t,e)}function Lt(t){let e,n,a,s,o,l,m,d
const f=[Tt,Pt],$=[]
function h(t,e){return t[13].equip?0:1}n=h(t),a=$[n]=f[n](t)
const g=[Bt,Ht],b=[]
function v(t,e){return t[13].use?0:1}return l=v(t),m=b[l]=g[l](t),{c(){e=r("span"),a.c(),s=c("\n          |\n          "),o=r("span"),m.c(),i(e,"class","equippable svelte-569baw"),i(o,"class","usable svelte-569baw")},m(t,a){u(t,e,a),$[n].m(e,null),u(t,s,a),u(t,o,a),b[l].m(o,null),d=!0},p(t,s){let r=n
n=h(t),n===r?$[n].p(t,s):(L(),y($[r],1,1,(()=>{$[r]=null})),M(),a=$[n],a?a.p(t,s):(a=$[n]=f[n](t),a.c()),Q(a,1),a.m(e,null))
let c=l
l=v(t),l===c?b[l].p(t,s):(L(),y(b[c],1,1,(()=>{b[c]=null})),M(),m=b[l],m?m.p(t,s):(m=b[l]=g[l](t),m.c()),Q(m,1),m.m(o,null))},i(t){d||(Q(a),Q(m),d=!0)},o(t){y(a),y(m),d=!1},d(t){t&&(p(e),p(s),p(o)),$[n].d(),b[l].d()}}}function Mt(t){let e,n,a=t[13].used+""
return{c(){e=r("span"),n=c(a),i(e,"class","itemUsed svelte-569baw")},m(t,a){u(t,e,a),l(e,n)},p(t,e){8192&e&&a!==(a=t[13].used+"")&&d(n,a)},i:f,o:f,d(t){t&&p(e)}}}function Pt(t){let e,n
return e=new ct({props:{disabled:!t[13].eq,$$slots:{default:[At]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[13])})),{c(){x(e.$$.fragment)},m(t,a){j(e,t,a),n=!0},p(n,a){t=n
const s={}
8192&a&&(s.disabled=!t[13].eq),16384&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Tt(t){let e
return{c(){e=r("span"),i(e,"class","fshSpinner fshSpin12")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}function At(t){let e
return{c(){e=c("Wear")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}function Ht(t){let e,n
return e=new ct({props:{disabled:t[13].eq||!(t[13].u&&!t[13].c),$$slots:{default:[Ct]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[7](t[13])})),{c(){x(e.$$.fragment)},m(t,a){j(e,t,a),n=!0},p(n,a){t=n
const s={}
8192&a&&(s.disabled=t[13].eq||!(t[13].u&&!t[13].c)),16384&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Bt(t){let e
return{c(){e=r("span"),i(e,"class","fshSpinner fshSpin12")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}function Ct(t){let e
return{c(){e=c("Use/Ext")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}function Et(t){let e,n,a,s,o,m,f,$,h,b,v,k=t[13].n+""
const w=[Mt,Lt],W=[]
function q(t,e){return t[13].used?0:1}return a=q(t),s=W[a]=w[a](t),f=new rt({props:{item:t[13],small:"1",t:"0"}}),{c(){e=r("div"),n=r("div"),s.c(),o=g(),m=r("div"),x(f.$$.fragment),$=g(),h=r("div"),b=c(k),i(n,"class","actionButtons svelte-569baw"),i(e,"class","grid svelte-569baw")},m(t,s){u(t,e,s),l(e,n),W[a].m(n,null),l(e,o),l(e,m),j(f,m,null),l(e,$),l(e,h),l(h,b),v=!0},p(t,e){let r=a
a=q(t),a===r?W[a].p(t,e):(L(),y(W[r],1,1,(()=>{W[r]=null})),M(),s=W[a],s?s.p(t,e):(s=W[a]=w[a](t),s.c()),Q(s,1),s.m(n,null))
const c={}
8192&e&&(c.item=t[13]),f.$set(c),(!v||8192&e)&&k!==(k=t[13].n+"")&&d(b,k)},i(t){v||(Q(s),Q(f.$$.fragment,t),v=!0)},o(t){y(s),y(f.$$.fragment,t),v=!1},d(t){t&&p(e),W[a].d(),I(f)}}}function Ft(t){let e
return{c(){e=r("div"),e.innerHTML='<div class="headOne svelte-569baw">Actions</div> <div>Items</div>',i(e,"class","headGrid svelte-569baw"),i(e,"slot","header")},m(t,n){u(t,e,n)},p:f,d(t){t&&p(e)}}}function Ut(t){let e,n,a,s,c,o
return n=new st({props:{folders:t[1]}}),n.$on("filter",t[2]),c=new Z({props:{data:t[0],key:"a",keeps:Math.floor(tt()/22),estimateSize:"30",$$slots:{header:[Ft],default:[Et,({data:t})=>({13:t}),({data:t})=>t?8192:0]},$$scope:{ctx:t}}}),{c(){e=r("div"),x(n.$$.fragment),a=g(),s=r("div"),x(c.$$.fragment),i(e,"class","folderButtons svelte-569baw"),i(s,"class","vs svelte-569baw")},m(t,r){u(t,e,r),j(n,e,null),u(t,a,r),u(t,s,r),j(c,s,null),o=!0},p(t,[e]){const n={}
1&e&&(n.data=t[0]),24576&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){o||(Q(n.$$.fragment,t),Q(c.$$.fragment,t),o=!0)},o(t){y(n.$$.fragment,t),y(c.$$.fragment,t),o=!1},d(t){t&&(p(e),p(a),p(s)),I(n),I(c)}}}function Ot(t,e,n){let{appInv:a=0}=e
const s=P(a.folders.filter((({a:t})=>-1!==t)).map((({a:t,n:e})=>[t,e]))),r=(t,e)=>q(t.n,e.n)
let c=a.items.sort(r)
async function i(t,e,a,s){h("QuickWear",`doAction - ${s}`)
const r=c.findIndex((e=>e.a===t))
n(0,c[r][e]=1,c);(await a(t)).s&&n(0,c[r].used=s,c)}function o(t){i(t,"equip",et,"Worn")}async function u(t){(T.disableQuickWearPrompts||await it("Are you sure you want to use/extract the item?"))&&i(t,"use",at,"Used")}return t.$$set=t=>{"appInv"in t&&n(5,a=t.appInv)},[c,s,function(t){h("QuickWear","doFilter")
const e=Number(t.detail)
var s
n(0,c=a.items.filter((s=e,t=>-2===s||t.f===s)).sort(r))},o,u,a,t=>o(t.a),t=>u(t.a)]}class zt extends n{constructor(t){super(),a(this,t,Ot,Ut,s,{appInv:5})}}function Gt(t,e){!function(t,e){new zt({props:{appInv:t},target:e})}(t,e)}const Vt=(t,e)=>t+String(e)
function Dt(t,e,n){return ot({checked:0===n,id:Vt(t,n),name:t,type:"radio"})}function Jt(t,e,n,a){const s=F({className:"ui-state-default ui-corner-top"})
return H(s,ut({htmlFor:Vt(t,a),innerHTML:n})),0!==a&&U(s,"click",(()=>_(Vt(t,a),e[a]))),O(s,(()=>h("QuickWear",Vt(t,a)))),s}const Rt=()=>B({className:"ui-tabs-panel ui-corner-bottom"})
function Xt(t,e,n,a){const s=function(t,e,n){const a=E({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(C(Jt,e,n)).forEach(C(H,a)),a}(t,e,a)
_(`${e}-header`,s),H(n,s)}function Yt(t,e){const n=B({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),a=C(H,n)
!function(t,e,n){t.map(C(Dt,e)).forEach(n)}(t,e,a)
const s=t.map(Rt)
return _(Vt(e,0),s[0]),Xt(t,e,n,s),s.forEach(a),n}const _t="disableQuickWearPrompts"
function Kt(){h("QuickWear","Toggle Prompts"),T.disableQuickWearPrompts=!T.disableQuickWearPrompts,J(_t,T.disableQuickWearPrompts)}function Zt(t){H(t,B({className:"qwPref",innerHTML:Y(_t)}))}function te(t,e){var n,a,s
K("qwtab-header",Zt),K("qwtab0",(t=>Gt(e,t))),K("qwtab1",(t=>St(e,t))),a=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],s="qwtab",A("",n=t),H(n,Yt(a,s)),O(t,R([[X(_t),Kt]]))}async function ee(n){n&&$(n).on("dialogclose",(()=>h("QuickWear","Close")))
const a=n||G()
if(!a)return
V(a,"Getting item list from backpack..."),T.disableQuickWearPrompts=D(_t)
!function(t,n){e(n)&&te(t,n)}(a,await t())}function ne(t){z()&&ee(t)}export{ne as default}
//# sourceMappingURL=quickWear-CKc4c6DQ.js.map
