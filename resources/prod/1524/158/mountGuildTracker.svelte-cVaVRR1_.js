import{ao as s,x as e,aj as t,ak as a,B as l,aE as c,D as i,C as n,E as v,F as r,bP as o,J as u,am as b,I as d,L as f,N as m,e2 as p,f as h,dv as g,c0 as k,d8 as x,s as _,aa as z,e3 as j,P as y,Q as U,e4 as N,e5 as w,e6 as D,e7 as M,e8 as P,e9 as S,ea as T,bz as C,db as E,a0 as L,bJ as F,eb as G,bF as J,bn as B,av as I,dM as $,bB as H,aH as O,H as V,ec as W,ed as Z,bj as A,ee as Q,ef as X,ay as q,eg as K,y as R,n as Y}from"./calfSystem-CIuUjh4H.js"
import{M as ss}from"./ModalTabbed-Uquh-7uI.js"
let es=""
var ts=l("<option> </option>"),as=l('<div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div>',1),ls=l('<div class="grid head svelte-1bj4gm2"><div>Date</div> <div>Member <select class="svelte-1bj4gm2"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1bj4gm2"></div>',1),cs=l('<div class="main svelte-1bj4gm2"><!></div>')
function is(s,l){e(l,!0)
let L=t(a({})),F=t(a([])),G=t("")
function J(){_("Guild Tracker","handleChange"),es=u(G)}function B(s){return C(s)?"#DEF":E(s)?"null":s.toLocaleString()}var I=cs(),$=v(I)
c($,async function(){const s=await p()
var e,t,a
d(L,(e=s.members,h(z(e).map(([s,e])=>[s,[...e].sort((s,e)=>e[j]-s[j])]))),!0),d(F,g(u(L)).sort(k),!0),es?d(G,es,!0):(t=u(F),a=x(t,1),d(G,a[0],!0))},null,s=>{var e=ls(),t=i(e),a=n(v(t),2),l=n(v(a))
l.__change=J,r(l,21,()=>u(F),o,(s,e)=>{var t=ts(),a=v(t),l={}
y(()=>{U(a,u(e)),l!==(l=u(e))&&(t.value=(t.__value=u(e))??"")}),f(s,t)})
var c=n(t,2)
r(c,21,()=>u(L)?.[u(G)]??[],o,(s,e)=>{var t=as(),a=i(t),l=v(a),c=n(a,2),r=v(c),o=n(c,2),b=v(o),d=n(o,2),m=v(d),p=n(d,2),h=v(p),g=n(p,2),k=v(g),x=n(g,2),_=v(x),z=n(x,2),C=v(z),E=n(z,2),L=v(E)
y((s,t,a,c,i,n,v)=>{U(l,s),U(r,u(G)),U(b,t),U(m,a),U(h,c),U(k,i),U(_,n),U(C,u(e)[T]),U(L,v)},[()=>N(new Date(1e3*u(e)[j])),()=>B(u(e)[w]),()=>B(u(e)[D]),()=>B(u(e)[M]),()=>B(u(e)[P]),()=>Math.floor(u(e)[M]/u(e)[P]*100),()=>B(u(e)[S])]),f(s,t)}),b(l,()=>u(G),s=>d(G,s)),f(s,e)}),f(s,I),m()}s(["change"])
const ns=([s,e])=>e.map(e=>[s,...e])
function vs(s){return z(s?.members??{}).flatMap(ns)}const rs=s=>s.split(","),os=s=>Date.parse(`${s.replace(" ","T")}Z`)/1e3,us=([,s,...e])=>[s,Number(e[T]),Number(e[M]),Number(e[w]),Number(e[P]),os(e[j]),Number(e[D]),Number(e[S])]
function bs(s){return s.startsWith("{")?function(s){const e=B(s),t=vs(e)
return[e?.lastUpdate??0,t]}(s):function(s){const e=s.split("\n").slice(1).map(rs)
return[os(e[0][0]),e.map(us)]}(s)}const ds=s=>!s.some(E),fs=([,...s])=>!s.some(I),ms=([,...s],[,...e])=>s[j]-e[j],ps=([s,...e])=>[s,Math.trunc(e[j]/86400),...e],hs=([s,e])=>`${s}|${e}`,gs=s=>s.split("|"),ks=([s,e])=>[s,Number(e)],xs=([s,,...e])=>[s,...e]
function _s(s,e){const t=((s,e)=>s.concat(e).filter(ds).filter(fs).sort(ms).map(ps))(s,e)
return J(t.map(hs)).map(gs).map(ks).map((s=>([e,t])=>s.find(((s,e)=>([t,a])=>t===s&&a===e)(e,t)))(t)).map(xs)}const zs=([s])=>s,js=([,...s])=>[...s]
function ys(s){return h(J(s.map(zs)).map(e=>[e,s.filter(([s])=>s===e).map(js)]))}function Us(){_("Utils","exportJson"),Z(q,"application/json")}function Ns(){_("Utils","exportCsv"),Z(K,"text/csv")}function ws(s,e,t){_("Utils","importFile",u(e))
const[a]=u(t).files
!async function(s,e){const[t,a]=await L([p(),s.text()]),l=e?[]:vs(t),[c,i]=bs(a),n=_s(l,i)
F(G,{lastUpdate:t.lastUpdate??c??0,members:ys(n)})}(a,u(e))}function Ds(s,e){_("Utils","importButton"),A(u(e))}function Ms(s,e,t){_("Utils","datePurge"),d(e,""),Q(u(t))}async function Ps(s,e,t,a){var l,c
_("Utils","userPurge"),d(e,1),await X(u(t)),d(a,u(a).filter(s=>s!==u(t)),!0),u(a).length&&(d(e,0),l=u(a),c=x(l,1),d(t,c[0],!0))}var Ss=()=>{_("Utils","overwriteToggle")},Ts=()=>{_("Utils","purgeDateChange")},Cs=()=>{_("Utils","handleChange")},Es=l('<option class="svelte-zcxhfk"> </option>'),Ls=l('<div class="svelte-zcxhfk"><button type="button" class="svelte-zcxhfk">Export JSON</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Export CSV</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <input accept=".csv, .json, .txt" type="file" class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Import</button> <label class="svelte-zcxhfk"><input type="checkbox" class="svelte-zcxhfk"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> data before <input type="date" class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> username <select class="svelte-zcxhfk"></select></div>')
function Fs(s,l){e(l,!0)
let c=t(0),i=t(0),p=t(""),h=t(a([])),g=t(""),k=t(1),_=H(()=>u(p)&&Date.parse(u(p))/1e3)
!async function(){var s,e
d(h,await W(),!0),u(h).length&&(d(k,0),s=u(h),e=x(s,1),d(g,e[0],!0))}()
var z=Ls(),j=v(z)
j.__click=[Us]
var N=n(j,5)
N.__click=[Ns]
var w=n(N,6)
w.__change=[ws,i,c],$(w,s=>d(c,s),()=>u(c))
var D=n(w,2)
D.__click=[Ds,c]
var M=n(D,2),P=v(M)
P.__change=[Ss]
var S=n(M,6)
S.__click=[Ms,p,_]
var T=n(S,2)
T.__change=[Ts]
var C=n(T,4)
C.__click=[Ps,k,g,h]
var E=n(C,2)
E.__change=[Cs],r(E,21,()=>u(h),o,(s,e)=>{var t=Es(),a=v(t),l={}
y(()=>{U(a,u(e)),l!==(l=u(e))&&(t.value=(t.__value=u(e))??"")}),f(s,t)}),y(()=>{S.disabled=!u(p),C.disabled=u(k),E.disabled=u(k)}),O(P,()=>u(i),s=>d(i,s)),V(T,()=>u(p),s=>d(p,s)),b(E,()=>u(g),s=>d(g,s)),f(s,z),m()}function Gs(s,t){e(t,!0)
let a=R(t,"visible",15,!0)
const l=[{component:is,label:"Guild Tracker"},{component:Fs,label:"Import/Export"}]
ss(s,{close:function(){_("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}s(["click","change"])
const Js=a({visible:!0})
let Bs=0
function Is(){Bs?Js.visible=!0:Bs=Y(Gs,{props:Js,target:document.body})}export{Is as default}
//# sourceMappingURL=mountGuildTracker.svelte-cVaVRR1_.js.map
