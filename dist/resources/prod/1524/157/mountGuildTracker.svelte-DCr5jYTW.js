import{ap as e,x as t,ak as s,al as a,B as l,aF as i,D as n,C as r,E as c,F as v,bQ as o,J as p,an as u,I as d,L as b,N as m,e9 as f,f as w,dC as g,c1 as _,d9 as h,s as y,aa as k,ea as z,P as x,Q as U,eb as N,ec as C,ed as D,ee as T,ef as M,eg as S,eh as P,bA as j,dc as E,a0 as G,bK as L,ei as F,bG as I,bo as J,aw as $,dT as A,bC as B,aI as O,H as Q,ej as V,ek as W,bk as H,el as K,em as X,az as Y,en as Z,y as q,n as R}from"./calfSystem-CQOGdqPv.js"
import{M as ee}from"./ModalTabbed-DdleZ1iW.js"
let te=""
var se=l("<option> </option>"),ae=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),le=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),ie=l('<div class="main svelte-1eurzp3"><!></div>')
function ne(e,l){t(l,!0)
let G=s(a({})),L=s(a([])),F=s("")
function I(){y("Guild Tracker","handleChange"),te=p(F)}function J(e){return j(e)?"#DEF":E(e)?"null":e.toLocaleString()}var $=ie(),A=c($)
i(A,async function(){const e=await f()
var t,s,a
d(G,(t=e.members,w(k(t).map(([e,t])=>[e,[...t].sort((e,t)=>t[z]-e[z])]))),!0),d(L,g(p(G)).sort(_),!0),te?d(F,te,!0):(s=p(L),a=h(s,1),d(F,a[0],!0))},null,e=>{var t=le(),s=n(t),a=r(c(s),2),l=r(c(a))
l.__change=I,v(l,21,()=>p(L),o,(e,t)=>{var s=se(),a=c(s),l={}
x(()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")}),b(e,s)})
var i=r(s,2)
v(i,21,()=>p(G)?.[p(F)]??[],o,(e,t)=>{var s=ae(),a=n(s),l=c(a),i=r(a,2),v=c(i),o=r(i,2),u=c(o),d=r(o,2),m=c(d),f=r(d,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),y=c(h),k=r(h,2),j=c(k),E=r(k,2),G=c(E)
x((e,s,a,i,n,r,c)=>{U(l,e),U(v,p(F)),U(u,s),U(m,a),U(w,i),U(_,n),U(y,r),U(j,p(t)[P]),U(G,c)},[()=>N(new Date(1e3*p(t)[z])),()=>J(p(t)[C]),()=>J(p(t)[D]),()=>J(p(t)[T]),()=>J(p(t)[M]),()=>Math.floor(p(t)[T]/p(t)[M]*100),()=>J(p(t)[S])]),b(e,s)}),u(l,()=>p(F),e=>d(F,e)),b(e,t)}),b(e,$),m()}e(["change"])
const re=([e,t])=>t.map(t=>[e,...t])
function ce(e){return k(e?.members??{}).flatMap(re)}const ve=e=>e.split(","),oe=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,pe=([,e,...t])=>[e,Number(t[P]),Number(t[T]),Number(t[C]),Number(t[M]),oe(t[z]),Number(t[D]),Number(t[S])]
function ue(e){return e.startsWith("{")?function(e){const t=J(e),s=ce(t)
return[t?.lastUpdate??0,s]}(e):function(e){const t=e.split("\n").slice(1).map(ve)
return[oe(t[0][0]),t.map(pe)]}(e)}const de=e=>!e.some(E),be=([,...e])=>!e.some($),me=([,...e],[,...t])=>e[z]-t[z],fe=([e,...t])=>[e,Math.trunc(t[z]/86400),...t],we=([e,t])=>`${e}|${t}`,ge=e=>e.split("|"),_e=([e,t])=>[e,Number(t)],he=([e,,...t])=>[e,...t]
function ye(e,t){const s=((e,t)=>e.concat(t).filter(de).filter(be).sort(me).map(fe))(e,t)
return I(s.map(we)).map(ge).map(_e).map((e=>([t,s])=>e.find(((e,t)=>([s,a])=>s===e&&a===t)(t,s)))(s)).map(he)}const ke=([e])=>e,ze=([,...e])=>[...e]
function xe(e){return w(I(e.map(ke)).map(t=>[t,e.filter(([e])=>e===t).map(ze)]))}function Ue(){y("Utils","exportJson"),W(Y,"application/json")}function Ne(){y("Utils","exportCsv"),W(Z,"text/csv")}function Ce(e,t,s){y("Utils","importFile",p(t))
const[a]=p(s).files
!async function(e,t){const[s,a]=await G([f(),e.text()]),l=t?[]:ce(s),[i,n]=ue(a),r=ye(l,n)
L(F,{lastUpdate:s.lastUpdate??i??0,members:xe(r)})}(a,p(t))}function De(e,t){y("Utils","importButton"),H(p(t))}function Te(e,t,s){y("Utils","datePurge"),d(t,""),K(p(s))}async function Me(e,t,s,a){var l,i
y("Utils","userPurge"),d(t,1),await X(p(s)),d(a,p(a).filter(e=>e!==p(s)),!0),p(a).length&&(d(t,0),l=p(a),i=h(l,1),d(s,i[0],!0))}var Se=()=>{y("Utils","overwriteToggle")},Pe=()=>{y("Utils","purgeDateChange")},je=()=>{y("Utils","handleChange")},Ee=l('<option class="svelte-14w01tp"> </option>'),Ge=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Le(e,l){t(l,!0)
let i=s(0),n=s(0),f=s(""),w=s(a([])),g=s(""),_=s(1),y=B(()=>p(f)&&Date.parse(p(f))/1e3)
!async function(){var e,t
d(w,await V(),!0),p(w).length&&(d(_,0),e=p(w),t=h(e,1),d(g,t[0],!0))}()
var k=Ge(),z=c(k)
z.__click=[Ue]
var N=r(z,5)
N.__click=[Ne]
var C=r(N,6)
C.__change=[Ce,n,i],A(C,e=>d(i,e),()=>p(i))
var D=r(C,2)
D.__click=[De,i]
var T=r(D,2),M=c(T)
M.__change=[Se]
var S=r(T,6)
S.__click=[Te,f,y]
var P=r(S,2)
P.__change=[Pe]
var j=r(P,4)
j.__click=[Me,_,g,w]
var E=r(j,2)
E.__change=[je],v(E,21,()=>p(w),o,(e,t)=>{var s=Ee(),a=c(s),l={}
x(()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")}),b(e,s)}),x(()=>{S.disabled=!p(f),j.disabled=p(_),E.disabled=p(_)}),O(M,()=>p(n),e=>d(n,e)),Q(P,()=>p(f),e=>d(f,e)),u(E,()=>p(g),e=>d(g,e)),b(e,k),m()}function Fe(e,s){t(s,!0)
let a=q(s,"visible",15,!0)
const l=[{component:ne,label:"Guild Tracker"},{component:Le,label:"Import/Export"}]
ee(e,{close:function(){y("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}e(["click","change"])
const Ie=a({visible:!0})
let Je=0
function $e(){Je?Ie.visible=!0:Je=R(Fe,{props:Ie,target:document.body})}export{$e as default}
//# sourceMappingURL=mountGuildTracker.svelte-DCr5jYTW.js.map
