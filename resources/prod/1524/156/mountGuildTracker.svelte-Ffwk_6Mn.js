import{ap as e,x as t,ak as s,al as a,B as l,aE as i,D as n,C as r,E as c,F as v,bO as o,J as p,an as u,I as d,L as b,N as m,e8 as f,f as w,dA as g,b$ as _,d5 as h,s as y,aa as z,e9 as k,P as x,Q as U,ea as N,eb as D,ec as S,ed as T,ee as E,ef as M,eg as C,by as P,d9 as j,a0 as L,bI as G,eh as I,bE as $,bm as A,aw as F,dS as J,bA as O,aH as B,H,ei as V,ej as W,bi as Q,ek as X,el as Z,az as q,em as K,y as R,n as Y}from"./calfSystem-79LsojAC.js"
import{M as ee}from"./ModalTabbed-DFUjowrd.js"
let te=""
var se=l("<option> </option>"),ae=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),le=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),ie=l('<div class="main svelte-1eurzp3"><!></div>')
function ne(e,l){t(l,!0)
let L=s(a({})),G=s(a([])),I=s("")
function $(){y("Guild Tracker","handleChange"),te=p(I)}function A(e){return P(e)?"#DEF":j(e)?"null":e.toLocaleString()}var F=ie(),J=c(F)
i(J,async function(){const e=await f()
var t,s,a
d(L,(t=e.members,w(z(t).map(([e,t])=>[e,[...t].sort((e,t)=>t[k]-e[k])]))),!0),d(G,g(p(L)).sort(_),!0),te?d(I,te,!0):(s=p(G),a=h(s,1),d(I,a[0],!0))},null,e=>{var t=le(),s=n(t),a=r(c(s),2),l=r(c(a))
l.__change=$,v(l,21,()=>p(G),o,(e,t)=>{var s=se(),a=c(s),l={}
x(()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")}),b(e,s)})
var i=r(s,2)
v(i,21,()=>p(L)?.[p(I)]??[],o,(e,t)=>{var s=ae(),a=n(s),l=c(a),i=r(a,2),v=c(i),o=r(i,2),u=c(o),d=r(o,2),m=c(d),f=r(d,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),y=c(h),z=r(h,2),P=c(z),j=r(z,2),L=c(j)
x((e,s,a,i,n,r,c)=>{U(l,e),U(v,p(I)),U(u,s),U(m,a),U(w,i),U(_,n),U(y,r),U(P,p(t)[C]),U(L,c)},[()=>N(new Date(1e3*p(t)[k])),()=>A(p(t)[D]),()=>A(p(t)[S]),()=>A(p(t)[T]),()=>A(p(t)[E]),()=>Math.floor(p(t)[T]/p(t)[E]*100),()=>A(p(t)[M])]),b(e,s)}),u(l,()=>p(I),e=>d(I,e)),b(e,t)}),b(e,F),m()}e(["change"])
const re=([e,t])=>t.map(t=>[e,...t])
function ce(e){return z(e?.members??{}).flatMap(re)}const ve=e=>e.split(","),oe=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,pe=([,e,...t])=>[e,Number(t[C]),Number(t[T]),Number(t[D]),Number(t[E]),oe(t[k]),Number(t[S]),Number(t[M])]
function ue(e){return e.startsWith("{")?function(e){const t=A(e),s=ce(t)
return[t?.lastUpdate??0,s]}(e):function(e){const t=e.split("\n").slice(1).map(ve)
return[oe(t[0][0]),t.map(pe)]}(e)}const de=e=>!e.some(j),be=([,...e])=>!e.some(F),me=([,...e],[,...t])=>e[k]-t[k],fe=([e,...t])=>[e,Math.trunc(t[k]/86400),...t],we=([e,t])=>`${e}|${t}`,ge=e=>e.split("|"),_e=([e,t])=>[e,Number(t)],he=([e,,...t])=>[e,...t]
function ye(e,t){const s=((e,t)=>e.concat(t).filter(de).filter(be).sort(me).map(fe))(e,t)
return $(s.map(we)).map(ge).map(_e).map((e=>([t,s])=>e.find(((e,t)=>([s,a])=>s===e&&a===t)(t,s)))(s)).map(he)}const ze=([e])=>e,ke=([,...e])=>[...e]
function xe(e){return w($(e.map(ze)).map(t=>[t,e.filter(([e])=>e===t).map(ke)]))}function Ue(){y("Utils","exportJson"),W(q,"application/json")}function Ne(){y("Utils","exportCsv"),W(K,"text/csv")}function De(e,t,s){y("Utils","importFile",p(t))
const[a]=p(s).files
!async function(e,t){const[s,a]=await L([f(),e.text()]),l=t?[]:ce(s),[i,n]=ue(a),r=ye(l,n)
G(I,{lastUpdate:s.lastUpdate??i??0,members:xe(r)})}(a,p(t))}function Se(e,t){y("Utils","importButton"),Q(p(t))}function Te(e,t,s){y("Utils","datePurge"),d(t,""),X(p(s))}async function Ee(e,t,s,a){var l,i
y("Utils","userPurge"),d(t,1),await Z(p(s)),d(a,p(a).filter(e=>e!==p(s)),!0),p(a).length&&(d(t,0),l=p(a),i=h(l,1),d(s,i[0],!0))}var Me=()=>{y("Utils","overwriteToggle")},Ce=()=>{y("Utils","purgeDateChange")},Pe=()=>{y("Utils","handleChange")},je=l('<option class="svelte-14w01tp"> </option>'),Le=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Ge(e,l){t(l,!0)
let i=s(0),n=s(0),f=s(""),w=s(a([])),g=s(""),_=s(1),y=O(()=>p(f)&&Date.parse(p(f))/1e3)
!async function(){var e,t
d(w,await V(),!0),p(w).length&&(d(_,0),e=p(w),t=h(e,1),d(g,t[0],!0))}()
var z=Le(),k=c(z)
k.__click=[Ue]
var N=r(k,5)
N.__click=[Ne]
var D=r(N,6)
D.__change=[De,n,i],J(D,e=>d(i,e),()=>p(i))
var S=r(D,2)
S.__click=[Se,i]
var T=r(S,2),E=c(T)
E.__change=[Me]
var M=r(T,6)
M.__click=[Te,f,y]
var C=r(M,2)
C.__change=[Ce]
var P=r(C,4)
P.__click=[Ee,_,g,w]
var j=r(P,2)
j.__change=[Pe],v(j,21,()=>p(w),o,(e,t)=>{var s=je(),a=c(s),l={}
x(()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")}),b(e,s)}),x(()=>{M.disabled=!p(f),P.disabled=p(_),j.disabled=p(_)}),B(E,()=>p(n),e=>d(n,e)),H(C,()=>p(f),e=>d(f,e)),u(j,()=>p(g),e=>d(g,e)),b(e,z),m()}function Ie(e,s){t(s,!0)
let a=R(s,"visible",15,!0)
const l=[{component:ne,label:"Guild Tracker"},{component:Ge,label:"Import/Export"}]
ee(e,{close:function(){y("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}e(["click","change"])
const $e=a({visible:!0})
let Ae=0
function Fe(){Ae?$e.visible=!0:Ae=Y(Ie,{props:$e,target:document.body})}export{Fe as default}
//# sourceMappingURL=mountGuildTracker.svelte-Ffwk_6Mn.js.map
