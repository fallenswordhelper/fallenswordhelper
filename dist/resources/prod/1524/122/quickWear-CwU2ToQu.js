import{b as t}from"./backpack-CwRTG2Qs.js"
import{b as e}from"./backpackOk-CagcATOI.js"
import{S as n,L as a,M as s,O as r,a3 as c,Q as i,di as o,T as u,U as l,X as d,a4 as m,_ as f,a0 as p,s as h,P as v,cc as b,cy as g,N as k,b4 as w,bh as x,bi as j,bc as y,bf as Q,bj as I,a2 as W,bs as q,dh as N,am as S,bd as L,be as M,f as P,ag as T,d as A,i as C,m as H,c as U,B as E,cr as B,z as F,o as O,c2 as z,p as G,v as V,ai as D,ae as K}from"./calfSystem-C4gAE-9q.js"
import{e as R,s as X}from"./selfIdIs-BmLkLwKv.js"
import{s as Z}from"./simpleCheckbox-D5LhvHMv.js"
import{p as _,a as J}from"./pubsub-CZcT2LWD.js"
import{V as Y,g as tt,d as et}from"./daEquipItem-B4soXGPR.js"
import{u as nt}from"./uniq-DcDZ6zXV.js"
import{d as at}from"./daUseItem-MUBXK7IT.js"
import{F as st}from"./FolderButtons-D0uiJ1YD.js"
import{I as rt}from"./ItemImg-DPbzJFqU.js"
import{L as ct}from"./LinkButton-Ccne2AMZ.js"
import{c as it}from"./confirm-C9Hc3T7M.js"
import{c as ot}from"./createInput-C0n_hNQT.js"
import{c as ut}from"./createLabel-DKCF09Az.js"
import"./isArray-eVldfhw1.js"
import"./isChecked-D_0do7nT.js"
import"./Modal-seireTkf.js"
import"./instantiate-upFtXRx7.js"
function lt(t){let e,n,a,s,$,h,v,b
return{c(){e=r("div"),n=c("Items "),a=c(t[0]),s=c(" from\n  "),$=r("a"),$.textContent="AH Quick Search",h=c("\n  found in your inventory"),i($,"href",o),i(e,"class","svelte-17xtpol")},m(r,c){u(r,e,c),l(e,n),l(e,a),l(e,s),l(e,$),l(e,h),v||(b=d($,"click",t[1]),v=!0)},p(t,[e]){1&e&&m(a,t[0])},i:f,o:f,d(t){t&&p(e),v=!1,b()}}}function dt(t,e,n){let{data:a=""}=e
return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a,()=>h("QuickWear","AH Quick Search",a)]}class mt extends n{constructor(t){super(),a(this,t,dt,lt,s,{data:0})}}function ft(t){let e
return{c(){e=r("div"),e.innerHTML="<div>Name</div> <div>Nick Name</div> <div>Inv Count</div>",i(e,"class","th svelte-kjal3l")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}class pt extends n{constructor(t){super(),a(this,t,null,ft,s,{})}}function $t(t){let e
return{c(){e=r("hr")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}class ht extends n{constructor(t){super(),a(this,t,null,$t,s,{})}}function vt(t){let e,n,a,s,o,f=t[0].nickname+""
return{c(){e=r("a"),n=c(f),i(e,"href",a=""+(g+t[0].searchname))},m(a,r){u(a,e,r),l(e,n),s||(o=d(e,"click",t[1]),s=!0)},p(t,s){1&s&&f!==(f=t[0].nickname+"")&&m(n,f),1&s&&a!==(a=""+(g+t[0].searchname))&&i(e,"href",a)},d(t){t&&p(e),s=!1,o()}}}function bt(t){let e,n,a,s,o,d,$,h,g=t[0].searchname+"",k=t[0].count+"",w=t[0].nickname&&vt(t)
return{c(){e=r("div"),n=r("div"),a=c(g),s=v(),o=r("div"),w&&w.c(),d=v(),$=r("div"),h=c(k),i(e,"class","tr svelte-fhessj"),b(e,"odd",t[0].odd)},m(t,r){u(t,e,r),l(e,n),l(n,a),l(e,s),l(e,o),w&&w.m(o,null),l(e,d),l(e,$),l($,h)},p(t,[n]){1&n&&g!==(g=t[0].searchname+"")&&m(a,g),t[0].nickname?w?w.p(t,n):(w=vt(t),w.c(),w.m(o,null)):w&&(w.d(1),w=null),1&n&&k!==(k=t[0].count+"")&&m(h,k),1&n&&b(e,"odd",t[0].odd)},i:f,o:f,d(t){t&&p(e),w&&w.d()}}}function gt(t,e,n){let{data:a={}}=e
return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a,()=>h("QuickWear","Nick Name",a.searchname)]}class kt extends n{constructor(t){super(),a(this,t,gt,bt,s,{data:0})}}function wt(t,e,n){const a=t.slice()
return a[2]=e[n].nickname,a[3]=e[n].searchname,a[5]=n,a}function xt(t){let e,n,a,s,o,f,$=t[2]+"",h=t[5]>0&&function(t){let e
return{c(){e=c(",")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}()
function b(){return t[1](t[3])}return{c(){h&&h.c(),e=v(),n=r("a"),a=c($),i(n,"href",s=""+(g+t[3]))},m(t,s){h&&h.m(t,s),u(t,e,s),u(t,n,s),l(n,a),o||(f=d(n,"click",b),o=!0)},p(e,r){t=e,1&r&&$!==($=t[2]+"")&&m(a,$),1&r&&s!==(s=""+(g+t[3]))&&i(n,"href",s)},d(t){t&&(p(e),p(n)),h&&h.d(t),o=!1,f()}}}function jt(t){let e,n,a=k(t[0]),s=[]
for(let e=0;e<a.length;e+=1)s[e]=xt(wt(t,a,e))
return{c(){e=r("div"),n=c("Did not find:\n  ")
for(let t=0;t<s.length;t+=1)s[t].c()},m(t,a){u(t,e,a),l(e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,[n]){if(1&n){let r
for(a=k(t[0]),r=0;r<a.length;r+=1){const c=wt(t,a,r)
s[r]?s[r].p(c,n):(s[r]=xt(c),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1)
s.length=a.length}},i:f,o:f,d(t){t&&p(e),w(s,t)}}}function yt(t,e,n){let{data:a=[]}=e
return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a,t=>h("QuickWear","Not Found",t)]}class Qt extends n{constructor(t){super(),a(this,t,yt,jt,s,{data:0})}}function It(t){let e,n,a
var s=t[10].component
function r(t,e){return{props:{data:t[10].data}}}return s&&(e=N(s,r(t))),{c(){e&&x(e.$$.fragment),n=S()},m(t,s){e&&j(e,t,s),u(t,n,s),a=!0},p(t,a){if(1024&a&&s!==(s=t[10].component)){if(e){L()
const t=e
Q(t.$$.fragment,1,0,(()=>{I(t,1)})),M()}s?(e=N(s,r(t)),x(e.$$.fragment),y(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(s){const n={}
1024&a&&(n.data=t[10].data),e.$set(n)}},i(t){a||(e&&y(e.$$.fragment,t),a=!0)},o(t){e&&Q(e.$$.fragment,t),a=!1},d(t){t&&p(n),e&&I(e,t)}}}function Wt(t){let e,n,a
return n=new Y({props:{data:t[0],key:"id",keeps:Math.floor(tt()/10),estimateSize:"14",$$slots:{default:[It,({data:t})=>({10:t}),({data:t})=>t?1024:0]},$$scope:{ctx:t}}}),{c(){e=r("div"),x(n.$$.fragment),i(e,"class","vs svelte-114e2ss")},m(t,s){u(t,e,s),j(n,e,null),a=!0},p(t,[e]){const a={}
3072&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a)},i(t){a||(y(n.$$.fragment,t),a=!0)},o(t){Q(n.$$.fragment,t),a=!1},d(t){t&&p(e),I(n)}}}function qt(t,e,n){let{itemList:a=0}=e
const s=nt(a.items,"n").map((({n:t})=>({n:t,count:a.items.filter((({n:e})=>e===t)).length}))),r=W("quickSearchList")||[],c=nt(r,"searchname").sort(((t,e)=>q(t.searchname,e.searchname))),i=c.filter((({searchname:t})=>s.some((({n:e})=>e===t)))).map((({nickname:t,searchname:e},n)=>({component:kt,data:{count:s.find((({n:t})=>t===e)).count,nickname:t,odd:n%2,searchname:e},id:n+3}))),o=s.filter((({n:t})=>!i.some((({data:{searchname:e}})=>e===t)))).map((({n:t,count:e},n)=>({component:kt,data:{count:e,odd:n%2,searchname:t},id:n+i.length+7}))),u=[{component:mt,id:1},{component:pt,id:2},...i,{component:ht,id:i.length+3},{component:Qt,data:c.filter((({searchname:t})=>!s.some((({n:e})=>e===t)))),id:i.length+4},{component:ht,id:i.length+5},{component:mt,data:"NOT",id:i.length+6},...o]
return t.$$set=t=>{"itemList"in t&&n(1,a=t.itemList)},[u,a]}class Nt extends n{constructor(t){super(),a(this,t,qt,Wt,s,{itemList:1})}}function St(t,e){!function(t,e){new Nt({props:{itemList:t},target:e})}(t,e)}function Lt(t){let e,n,a,s,o,l,d,m
const f=[Tt,Pt],$=[]
function h(t,e){return t[13].equip?0:1}n=h(t),a=$[n]=f[n](t)
const v=[Ht,Ct],b=[]
function g(t,e){return t[13].use?0:1}return l=g(t),d=b[l]=v[l](t),{c(){e=r("span"),a.c(),s=c("\n          |\n          "),o=r("span"),d.c(),i(e,"class","equippable svelte-569baw"),i(o,"class","usable svelte-569baw")},m(t,a){u(t,e,a),$[n].m(e,null),u(t,s,a),u(t,o,a),b[l].m(o,null),m=!0},p(t,s){let r=n
n=h(t),n===r?$[n].p(t,s):(L(),Q($[r],1,1,(()=>{$[r]=null})),M(),a=$[n],a?a.p(t,s):(a=$[n]=f[n](t),a.c()),y(a,1),a.m(e,null))
let c=l
l=g(t),l===c?b[l].p(t,s):(L(),Q(b[c],1,1,(()=>{b[c]=null})),M(),d=b[l],d?d.p(t,s):(d=b[l]=v[l](t),d.c()),y(d,1),d.m(o,null))},i(t){m||(y(a),y(d),m=!0)},o(t){Q(a),Q(d),m=!1},d(t){t&&(p(e),p(s),p(o)),$[n].d(),b[l].d()}}}function Mt(t){let e,n,a=t[13].used+""
return{c(){e=r("span"),n=c(a),i(e,"class","itemUsed svelte-569baw")},m(t,a){u(t,e,a),l(e,n)},p(t,e){8192&e&&a!==(a=t[13].used+"")&&m(n,a)},i:f,o:f,d(t){t&&p(e)}}}function Pt(t){let e,n
return e=new ct({props:{disabled:!t[13].eq,$$slots:{default:[At]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[13])})),{c(){x(e.$$.fragment)},m(t,a){j(e,t,a),n=!0},p(n,a){t=n
const s={}
8192&a&&(s.disabled=!t[13].eq),16384&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Tt(t){let e
return{c(){e=r("span"),i(e,"class","fshSpinner fshSpin12")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}function At(t){let e
return{c(){e=c("Wear")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}function Ct(t){let e,n
return e=new ct({props:{disabled:t[13].eq||!(t[13].u&&!t[13].c),$$slots:{default:[Ut]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[7](t[13])})),{c(){x(e.$$.fragment)},m(t,a){j(e,t,a),n=!0},p(n,a){t=n
const s={}
8192&a&&(s.disabled=t[13].eq||!(t[13].u&&!t[13].c)),16384&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Ht(t){let e
return{c(){e=r("span"),i(e,"class","fshSpinner fshSpin12")},m(t,n){u(t,e,n)},p:f,i:f,o:f,d(t){t&&p(e)}}}function Ut(t){let e
return{c(){e=c("Use/Ext")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}function Et(t){let e,n,a,s,o,d,f,$,h,b,g,k=t[13].n+""
const w=[Mt,Lt],W=[]
function q(t,e){return t[13].used?0:1}return a=q(t),s=W[a]=w[a](t),f=new rt({props:{item:t[13],small:"1",t:"0"}}),{c(){e=r("div"),n=r("div"),s.c(),o=v(),d=r("div"),x(f.$$.fragment),$=v(),h=r("div"),b=c(k),i(n,"class","actionButtons svelte-569baw"),i(e,"class","grid svelte-569baw")},m(t,s){u(t,e,s),l(e,n),W[a].m(n,null),l(e,o),l(e,d),j(f,d,null),l(e,$),l(e,h),l(h,b),g=!0},p(t,e){let r=a
a=q(t),a===r?W[a].p(t,e):(L(),Q(W[r],1,1,(()=>{W[r]=null})),M(),s=W[a],s?s.p(t,e):(s=W[a]=w[a](t),s.c()),y(s,1),s.m(n,null))
const c={}
8192&e&&(c.item=t[13]),f.$set(c),(!g||8192&e)&&k!==(k=t[13].n+"")&&m(b,k)},i(t){g||(y(s),y(f.$$.fragment,t),g=!0)},o(t){Q(s),Q(f.$$.fragment,t),g=!1},d(t){t&&p(e),W[a].d(),I(f)}}}function Bt(t){let e
return{c(){e=r("div"),e.innerHTML='<div class="headOne svelte-569baw">Actions</div> <div>Items</div>',i(e,"class","headGrid svelte-569baw"),i(e,"slot","header")},m(t,n){u(t,e,n)},p:f,d(t){t&&p(e)}}}function Ft(t){let e,n,a,s,c,o
return n=new st({props:{folders:t[1]}}),n.$on("filter",t[2]),c=new Y({props:{data:t[0],key:"a",keeps:Math.floor(tt()/22),estimateSize:"30",$$slots:{header:[Bt],default:[Et,({data:t})=>({13:t}),({data:t})=>t?8192:0]},$$scope:{ctx:t}}}),{c(){e=r("div"),x(n.$$.fragment),a=v(),s=r("div"),x(c.$$.fragment),i(e,"class","folderButtons svelte-569baw"),i(s,"class","vs svelte-569baw")},m(t,r){u(t,e,r),j(n,e,null),u(t,a,r),u(t,s,r),j(c,s,null),o=!0},p(t,[e]){const n={}
1&e&&(n.data=t[0]),24576&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){o||(y(n.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){Q(n.$$.fragment,t),Q(c.$$.fragment,t),o=!1},d(t){t&&(p(e),p(a),p(s)),I(n),I(c)}}}function Ot(t,e,n){let{appInv:a=0}=e
const s=P(a.folders.filter((({a:t})=>-1!==t)).map((({a:t,n:e})=>[t,e]))),r=(t,e)=>q(t.n,e.n)
let c=a.items.sort(r)
async function i(t,e,a,s){h("QuickWear",`doAction - ${s}`)
const r=c.findIndex((e=>e.a===t))
n(0,c[r][e]=1,c);(await a(t)).s&&n(0,c[r].used=s,c)}function o(t){i(t,"equip",et,"Worn")}async function u(t){(T.disableQuickWearPrompts||await it("Are you sure you want to use/extract the item?"))&&i(t,"use",at,"Used")}return t.$$set=t=>{"appInv"in t&&n(5,a=t.appInv)},[c,s,function(t){h("QuickWear","doFilter")
const e=Number(t.detail)
var s
n(0,c=a.items.filter((s=e,t=>-2===s||t.f===s)).sort(r))},o,u,a,t=>o(t.a),t=>u(t.a)]}class zt extends n{constructor(t){super(),a(this,t,Ot,Ft,s,{appInv:5})}}function Gt(t,e){!function(t,e){new zt({props:{appInv:t},target:e})}(t,e)}const Vt=(t,e)=>t+String(e)
function Dt(t,e,n){return ot({checked:0===n,id:Vt(t,n),name:t,type:"radio"})}function Kt(t,e,n,a){const s=B({className:"ui-state-default ui-corner-top"})
return C(s,ut({htmlFor:Vt(t,a),innerHTML:n})),0!==a&&F(s,"click",(()=>_(Vt(t,a),e[a]))),O(s,(()=>h("QuickWear",Vt(t,a)))),s}const Rt=()=>H({className:"ui-tabs-panel ui-corner-bottom"})
function Xt(t,e,n,a){const s=function(t,e,n){const a=E({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(U(Kt,e,n)).forEach(U(C,a)),a}(t,e,a)
_(`${e}-header`,s),C(n,s)}function Zt(t,e){const n=H({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),a=U(C,n)
!function(t,e,n){t.map(U(Dt,e)).forEach(n)}(t,e,a)
const s=t.map(Rt)
return _(Vt(e,0),s[0]),Xt(t,e,n,s),s.forEach(a),n}const _t="disableQuickWearPrompts"
function Jt(){h("QuickWear","Toggle Prompts"),T.disableQuickWearPrompts=!T.disableQuickWearPrompts,K(_t,T.disableQuickWearPrompts)}function Yt(t){C(t,H({className:"qwPref",innerHTML:Z(_t)}))}function te(t,e){var n,a,s
J("qwtab-header",Yt),J("qwtab0",(t=>Gt(e,t))),J("qwtab1",(t=>St(e,t))),a=["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],s="qwtab",A("",n=t),C(n,Zt(a,s)),O(t,R([[X(_t),Jt]]))}async function ee(n){n&&$(n).on("dialogclose",(()=>h("QuickWear","Close")))
const a=n||G()
if(!a)return
V(a,"Getting item list from backpack..."),T.disableQuickWearPrompts=D(_t)
!function(t,n){e(n)&&te(t,n)}(a,await t())}function ne(t){z()&&ee(t)}export{ne as default}
//# sourceMappingURL=quickWear-CwU2ToQu.js.map
