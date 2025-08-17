import{ao as e,x as t,aj as s,ak as a,A as l,aD as i,C as n,B as r,D as c,E as v,bN as o,I as p,am as u,H as d,K as b,L as m,eb as f,f as w,dG as g,b_ as _,da as h,s as y,a9 as z,ec as k,O as x,P as U,ed as D,ee as N,ef as G,eg as M,eh as S,ei as T,ej as j,bx as C,df as P,_ as E,bH as L,ek as I,bD as O,bl as W,av as $,dW as A,bz as B,aG as F,G as H,el as J,em as V,bh as X,en as K,eo as Z,ay as q,ep as Q,y as R,n as Y}from"./calfSystem-CT1aM4VG.js"
import{M as ee}from"./ModalTabbed-1Zl_24XM.js"
let te=""
var se=l("<option> </option>"),ae=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),le=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),ie=l('<div class="main svelte-1eurzp3"><!></div>')
function ne(e,l){t(l,!0)
let E=s(a({})),L=s(a([])),I=s("")
function O(){y("Guild Tracker","handleChange"),te=p(I)}function W(e){return C(e)?"#DEF":P(e)?"null":e.toLocaleString()}var $=ie(),A=c($)
i(A,(async function(){const e=await f()
var t,s,a
d(E,(t=e.members,w(z(t).map((([e,t])=>[e,[...t].sort(((e,t)=>t[k]-e[k]))])))),!0),d(L,g(p(E)).sort(_),!0),te?d(I,te,!0):(s=p(L),a=h(s,1),d(I,a[0],!0))}),null,(e=>{var t=le(),s=n(t),a=r(c(s),2),l=r(c(a))
l.__change=O,v(l,21,(()=>p(L)),o,((e,t)=>{var s=se(),a=c(s),l={}
x((()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")})),b(e,s)}))
var i=r(s,2)
v(i,21,(()=>p(E)?.[p(I)]??[]),o,((e,t)=>{var s=ae(),a=n(s),l=c(a),i=r(a,2),v=c(i),o=r(i,2),u=c(o),d=r(o,2),m=c(d),f=r(d,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),y=c(h),z=r(h,2),C=c(z),P=r(z,2),E=c(P)
x(((e,s,a,i,n,r,c)=>{U(l,e),U(v,p(I)),U(u,s),U(m,a),U(w,i),U(_,n),U(y,r),U(C,p(t)[j]),U(E,c)}),[()=>D(new Date(1e3*p(t)[k])),()=>W(p(t)[N]),()=>W(p(t)[G]),()=>W(p(t)[M]),()=>W(p(t)[S]),()=>Math.floor(p(t)[M]/p(t)[S]*100),()=>W(p(t)[T])]),b(e,s)})),u(l,(()=>p(I)),(e=>d(I,e))),b(e,t)})),b(e,$),m()}e(["change"])
const re=([e,t])=>t.map((t=>[e,...t]))
function ce(e){return z(e?.members??{}).flatMap(re)}const ve=e=>e.split(","),oe=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,pe=([,e,...t])=>[e,Number(t[j]),Number(t[M]),Number(t[N]),Number(t[S]),oe(t[k]),Number(t[G]),Number(t[T])]
function ue(e){return e.startsWith("{")?function(e){const t=W(e),s=ce(t)
return[t?.lastUpdate??0,s]}(e):function(e){const t=e.split("\n").slice(1).map(ve)
return[oe(t[0][0]),t.map(pe)]}(e)}const de=e=>!e.some(P),be=([,...e])=>!e.some($),me=([,...e],[,...t])=>e[k]-t[k],fe=([e,...t])=>[e,Math.trunc(t[k]/86400),...t],we=(e,t)=>e.concat(t).filter(de).filter(be).sort(me).map(fe),ge=([e,t])=>`${e}|${t}`,_e=e=>e.split("|"),he=([e,t])=>[e,Number(t)],ye=e=>([t,s])=>e.find(((e,t)=>([s,a])=>s===e&&a===t)(t,s)),ze=([e,,...t])=>[e,...t]
const ke=([e])=>e,xe=([,...e])=>[...e]
function Ue(e){return w(O(e.map(ke)).map((t=>[t,e.filter((([e])=>e===t)).map(xe)])))}async function De(e,t){const[s,a]=await E([f(),e.text()]),l=t?[]:ce(s),[i,n]=ue(a),r=function(e,t){const s=we(e,t)
return O(s.map(ge)).map(_e).map(he).map(ye(s)).map(ze)}(l,n)
L(I,{lastUpdate:s.lastUpdate??i??0,members:Ue(r)})}function Ne(){y("Utils","exportJson"),V(q,"application/json")}function Ge(){y("Utils","exportCsv"),V(Q,"text/csv")}function Me(e,t,s){y("Utils","importFile",p(t))
const[a]=p(s).files
De(a,p(t))}function Se(e,t){y("Utils","importButton"),X(p(t))}function Te(e,t,s){y("Utils","datePurge"),d(t,""),K(p(s))}async function je(e,t,s,a){var l,i
y("Utils","userPurge"),d(t,1),await Z(p(s)),d(a,p(a).filter((e=>e!==p(s))),!0),p(a).length&&(d(t,0),l=p(a),i=h(l,1),d(s,i[0],!0))}var Ce=()=>{y("Utils","overwriteToggle")},Pe=()=>{y("Utils","purgeDateChange")},Ee=()=>{y("Utils","handleChange")},Le=l('<option class="svelte-14w01tp"> </option>'),Ie=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Oe(e,l){t(l,!0)
let i=s(0),n=s(0),f=s(""),w=s(a([])),g=s(""),_=s(1),y=B((()=>p(f)&&Date.parse(p(f))/1e3))
!async function(){var e,t
d(w,await J(),!0),p(w).length&&(d(_,0),e=p(w),t=h(e,1),d(g,t[0],!0))}()
var z=Ie(),k=c(z)
k.__click=[Ne]
var D=r(k,5)
D.__click=[Ge]
var N=r(D,6)
N.__change=[Me,n,i],A(N,(e=>d(i,e)),(()=>p(i)))
var G=r(N,2)
G.__click=[Se,i]
var M=r(G,2),S=c(M)
S.__change=[Ce]
var T=r(M,6)
T.__click=[Te,f,y]
var j=r(T,2)
j.__change=[Pe]
var C=r(j,4)
C.__click=[je,_,g,w]
var P=r(C,2)
P.__change=[Ee],v(P,21,(()=>p(w)),o,((e,t)=>{var s=Le(),a=c(s),l={}
x((()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")})),b(e,s)})),x((()=>{T.disabled=!p(f),C.disabled=p(_),P.disabled=p(_)})),F(S,(()=>p(n)),(e=>d(n,e))),H(j,(()=>p(f)),(e=>d(f,e))),u(P,(()=>p(g)),(e=>d(g,e))),b(e,z),m()}function We(e,s){t(s,!0)
let a=R(s,"visible",15,!0)
const l=[{component:ne,label:"Guild Tracker"},{component:Oe,label:"Import/Export"}]
ee(e,{close:function(){y("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}e(["click","change"])
const $e=a({visible:!0})
let Ae=0
function Be(){Ae?$e.visible=!0:Ae=Y(We,{props:$e,target:document.body})}export{Be as default}
//# sourceMappingURL=mountGuildTracker.svelte-D7ewWfhI.js.map
