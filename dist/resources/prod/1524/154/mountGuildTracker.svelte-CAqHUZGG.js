import{ao as e,x as t,aj as s,ak as a,A as l,aD as i,C as n,B as r,D as c,E as v,bN as o,I as p,am as u,H as d,K as b,L as m,ec as f,f as w,dH as g,b_ as _,db as h,s as y,a9 as z,ed as k,O as x,P as U,ee as D,ef as N,eg as M,eh as S,ei as T,ej as j,ek as C,bx as G,dg as P,_ as E,bH as L,el as H,bD as I,bl as O,av as $,dX as A,bz as B,aG as F,G as J,em as V,en as W,bh as X,eo as q,ep as K,ay as Y,eq as Z,y as Q,n as R}from"./calfSystem-KFszEm2S.js"
import{M as ee}from"./ModalTabbed-CufGeMxG.js"
let te=""
var se=l("<option> </option>"),ae=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),le=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),ie=l('<div class="main svelte-1eurzp3"><!></div>')
function ne(e,l){t(l,!0)
let E=s(a({})),L=s(a([])),H=s("")
function I(){y("Guild Tracker","handleChange"),te=p(H)}function O(e){return G(e)?"#DEF":P(e)?"null":e.toLocaleString()}var $=ie(),A=c($)
i(A,async function(){const e=await f()
var t,s,a
d(E,(t=e.members,w(z(t).map(([e,t])=>[e,[...t].sort((e,t)=>t[k]-e[k])]))),!0),d(L,g(p(E)).sort(_),!0),te?d(H,te,!0):(s=p(L),a=h(s,1),d(H,a[0],!0))},null,e=>{var t=le(),s=n(t),a=r(c(s),2),l=r(c(a))
l.__change=I,v(l,21,()=>p(L),o,(e,t)=>{var s=se(),a=c(s),l={}
x(()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")}),b(e,s)})
var i=r(s,2)
v(i,21,()=>p(E)?.[p(H)]??[],o,(e,t)=>{var s=ae(),a=n(s),l=c(a),i=r(a,2),v=c(i),o=r(i,2),u=c(o),d=r(o,2),m=c(d),f=r(d,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),y=c(h),z=r(h,2),G=c(z),P=r(z,2),E=c(P)
x((e,s,a,i,n,r,c)=>{U(l,e),U(v,p(H)),U(u,s),U(m,a),U(w,i),U(_,n),U(y,r),U(G,p(t)[C]),U(E,c)},[()=>D(new Date(1e3*p(t)[k])),()=>O(p(t)[N]),()=>O(p(t)[M]),()=>O(p(t)[S]),()=>O(p(t)[T]),()=>Math.floor(p(t)[S]/p(t)[T]*100),()=>O(p(t)[j])]),b(e,s)}),u(l,()=>p(H),e=>d(H,e)),b(e,t)}),b(e,$),m()}e(["change"])
const re=([e,t])=>t.map(t=>[e,...t])
function ce(e){return z(e?.members??{}).flatMap(re)}const ve=e=>e.split(","),oe=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,pe=([,e,...t])=>[e,Number(t[C]),Number(t[S]),Number(t[N]),Number(t[T]),oe(t[k]),Number(t[M]),Number(t[j])]
function ue(e){return e.startsWith("{")?function(e){const t=O(e),s=ce(t)
return[t?.lastUpdate??0,s]}(e):function(e){const t=e.split("\n").slice(1).map(ve)
return[oe(t[0][0]),t.map(pe)]}(e)}const de=e=>!e.some(P),be=([,...e])=>!e.some($),me=([,...e],[,...t])=>e[k]-t[k],fe=([e,...t])=>[e,Math.trunc(t[k]/86400),...t],we=([e,t])=>`${e}|${t}`,ge=e=>e.split("|"),_e=([e,t])=>[e,Number(t)],he=([e,,...t])=>[e,...t]
function ye(e,t){const s=((e,t)=>e.concat(t).filter(de).filter(be).sort(me).map(fe))(e,t)
return I(s.map(we)).map(ge).map(_e).map((e=>([t,s])=>e.find(((e,t)=>([s,a])=>s===e&&a===t)(t,s)))(s)).map(he)}const ze=([e])=>e,ke=([,...e])=>[...e]
function xe(e){return w(I(e.map(ze)).map(t=>[t,e.filter(([e])=>e===t).map(ke)]))}function Ue(){y("Utils","exportJson"),W(Y,"application/json")}function De(){y("Utils","exportCsv"),W(Z,"text/csv")}function Ne(e,t,s){y("Utils","importFile",p(t))
const[a]=p(s).files
!async function(e,t){const[s,a]=await E([f(),e.text()]),l=t?[]:ce(s),[i,n]=ue(a),r=ye(l,n)
L(H,{lastUpdate:s.lastUpdate??i??0,members:xe(r)})}(a,p(t))}function Me(e,t){y("Utils","importButton"),X(p(t))}function Se(e,t,s){y("Utils","datePurge"),d(t,""),q(p(s))}async function Te(e,t,s,a){var l,i
y("Utils","userPurge"),d(t,1),await K(p(s)),d(a,p(a).filter(e=>e!==p(s)),!0),p(a).length&&(d(t,0),l=p(a),i=h(l,1),d(s,i[0],!0))}var je=()=>{y("Utils","overwriteToggle")},Ce=()=>{y("Utils","purgeDateChange")},Ge=()=>{y("Utils","handleChange")},Pe=l('<option class="svelte-14w01tp"> </option>'),Ee=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Le(e,l){t(l,!0)
let i=s(0),n=s(0),f=s(""),w=s(a([])),g=s(""),_=s(1),y=B(()=>p(f)&&Date.parse(p(f))/1e3)
!async function(){var e,t
d(w,await V(),!0),p(w).length&&(d(_,0),e=p(w),t=h(e,1),d(g,t[0],!0))}()
var z=Ee(),k=c(z)
k.__click=[Ue]
var D=r(k,5)
D.__click=[De]
var N=r(D,6)
N.__change=[Ne,n,i],A(N,e=>d(i,e),()=>p(i))
var M=r(N,2)
M.__click=[Me,i]
var S=r(M,2),T=c(S)
T.__change=[je]
var j=r(S,6)
j.__click=[Se,f,y]
var C=r(j,2)
C.__change=[Ce]
var G=r(C,4)
G.__click=[Te,_,g,w]
var P=r(G,2)
P.__change=[Ge],v(P,21,()=>p(w),o,(e,t)=>{var s=Pe(),a=c(s),l={}
x(()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")}),b(e,s)}),x(()=>{j.disabled=!p(f),G.disabled=p(_),P.disabled=p(_)}),F(T,()=>p(n),e=>d(n,e)),J(C,()=>p(f),e=>d(f,e)),u(P,()=>p(g),e=>d(g,e)),b(e,z),m()}function He(e,s){t(s,!0)
let a=Q(s,"visible",15,!0)
const l=[{component:ne,label:"Guild Tracker"},{component:Le,label:"Import/Export"}]
ee(e,{close:function(){y("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}e(["click","change"])
const Ie=a({visible:!0})
let Oe=0
function $e(){Oe?Ie.visible=!0:Oe=R(He,{props:Ie,target:document.body})}export{$e as default}
//# sourceMappingURL=mountGuildTracker.svelte-CAqHUZGG.js.map
