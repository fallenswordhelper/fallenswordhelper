import{aq as e,z as t,al as s,am as a,C as l,aF as i,E as n,D as r,F as c,G as v,bP as o,K as p,ao as u,J as d,N as b,O as m,eh as f,h as w,dM as g,c0 as _,df as h,s as y,ab as z,ei as k,Q as x,R as U,ej as N,ek as D,el as M,em as S,en as T,eo as j,ep as C,bz as P,dk as E,a1 as F,bJ as G,eq as I,bF as J,bn as L,ax as A,e0 as O,bB as $,aI as q,I as B,er as V,es as W,bj as X,et as K,eu as Q,aA as R,ev as Z,A as H,u as Y}from"./calfSystem-C1X5YxJZ.js"
import{M as ee}from"./ModalTabbed-f13OUsOq.js"
let te=""
var se=l("<option> </option>"),ae=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),le=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),ie=l('<div class="main svelte-1eurzp3"><!></div>')
function ne(e,l){t(l,!0)
let F=s(a({})),G=s(a([])),I=s("")
function J(){y("Guild Tracker","handleChange"),te=p(I)}function L(e){return P(e)?"#DEF":E(e)?"null":e.toLocaleString()}var A=ie(),O=c(A)
i(O,(async function(){const e=await f()
var t,s,a
d(F,(t=e.members,w(z(t).map((([e,t])=>[e,[...t].sort(((e,t)=>t[k]-e[k]))])))),!0),d(G,g(p(F)).sort(_),!0),te?d(I,te,!0):(s=p(G),a=h(s,1),d(I,a[0],!0))}),null,(e=>{var t=le(),s=n(t),a=r(c(s),2),l=r(c(a))
l.__change=J,v(l,21,(()=>p(G)),o,((e,t)=>{var s=se(),a=c(s),l={}
x((()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")})),b(e,s)}))
var i=r(s,2)
v(i,21,(()=>p(F)?.[p(I)]??[]),o,((e,t)=>{var s=ae(),a=n(s),l=c(a),i=r(a,2),v=c(i),o=r(i,2),u=c(o),d=r(o,2),m=c(d),f=r(d,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),y=c(h),z=r(h,2),P=c(z),E=r(z,2),F=c(E)
x(((e,s,a,i,n,r,c)=>{U(l,e),U(v,p(I)),U(u,s),U(m,a),U(w,i),U(_,n),U(y,r),U(P,p(t)[C]),U(F,c)}),[()=>N(new Date(1e3*p(t)[k])),()=>L(p(t)[D]),()=>L(p(t)[M]),()=>L(p(t)[S]),()=>L(p(t)[T]),()=>Math.floor(p(t)[S]/p(t)[T]*100),()=>L(p(t)[j])]),b(e,s)})),u(l,(()=>p(I)),(e=>d(I,e))),b(e,t)})),b(e,A),m()}e(["change"])
const re=([e,t])=>t.map((t=>[e,...t]))
function ce(e){return z(e?.members??{}).flatMap(re)}const ve=e=>e.split(","),oe=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,pe=([,e,...t])=>[e,Number(t[C]),Number(t[S]),Number(t[D]),Number(t[T]),oe(t[k]),Number(t[M]),Number(t[j])]
function ue(e){return e.startsWith("{")?function(e){const t=L(e),s=ce(t)
return[t?.lastUpdate??0,s]}(e):function(e){const t=e.split("\n").slice(1).map(ve)
return[oe(t[0][0]),t.map(pe)]}(e)}const de=e=>!e.some(E),be=([,...e])=>!e.some(A),me=([,...e],[,...t])=>e[k]-t[k],fe=([e,...t])=>[e,Math.trunc(t[k]/86400),...t],we=(e,t)=>e.concat(t).filter(de).filter(be).sort(me).map(fe),ge=([e,t])=>`${e}|${t}`,_e=e=>e.split("|"),he=([e,t])=>[e,Number(t)],ye=e=>([t,s])=>e.find(((e,t)=>([s,a])=>s===e&&a===t)(t,s)),ze=([e,,...t])=>[e,...t]
const ke=([e])=>e,xe=([,...e])=>[...e]
function Ue(e){return w(J(e.map(ke)).map((t=>[t,e.filter((([e])=>e===t)).map(xe)])))}async function Ne(e,t){const[s,a]=await F([f(),e.text()]),l=t?[]:ce(s),[i,n]=ue(a),r=function(e,t){const s=we(e,t)
return J(s.map(ge)).map(_e).map(he).map(ye(s)).map(ze)}(l,n)
G(I,{lastUpdate:s.lastUpdate??i??0,members:Ue(r)})}function De(){y("Utils","exportJson"),W(R,"application/json")}function Me(){y("Utils","exportCsv"),W(Z,"text/csv")}function Se(e,t,s){y("Utils","importFile",p(t))
const[a]=p(s).files
Ne(a,p(t))}function Te(e,t){y("Utils","importButton"),X(p(t))}function je(e,t,s){y("Utils","datePurge"),d(t,""),K(p(s))}async function Ce(e,t,s,a){var l,i
y("Utils","userPurge"),d(t,1),await Q(p(s)),d(a,p(a).filter((e=>e!==p(s))),!0),p(a).length&&(d(t,0),l=p(a),i=h(l,1),d(s,i[0],!0))}var Pe=()=>{y("Utils","overwriteToggle")},Ee=()=>{y("Utils","purgeDateChange")},Fe=()=>{y("Utils","handleChange")},Ge=l('<option class="svelte-14w01tp"> </option>'),Ie=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Je(e,l){t(l,!0)
let i=s(0),n=s(0),f=s(""),w=s(a([])),g=s(""),_=s(1),y=$((()=>p(f)&&Date.parse(p(f))/1e3))
!async function(){var e,t
d(w,await V(),!0),p(w).length&&(d(_,0),e=p(w),t=h(e,1),d(g,t[0],!0))}()
var z=Ie(),k=c(z)
k.__click=[De]
var N=r(k,5)
N.__click=[Me]
var D=r(N,6)
D.__change=[Se,n,i],O(D,(e=>d(i,e)),(()=>p(i)))
var M=r(D,2)
M.__click=[Te,i]
var S=r(M,2),T=c(S)
T.__change=[Pe]
var j=r(S,6)
j.__click=[je,f,y]
var C=r(j,2)
C.__change=[Ee]
var P=r(C,4)
P.__click=[Ce,_,g,w]
var E=r(P,2)
E.__change=[Fe],v(E,21,(()=>p(w)),o,((e,t)=>{var s=Ge(),a=c(s),l={}
x((()=>{U(a,p(t)),l!==(l=p(t))&&(s.value=(s.__value=p(t))??"")})),b(e,s)})),x((()=>{j.disabled=!p(f),P.disabled=p(_),E.disabled=p(_)})),q(T,(()=>p(n)),(e=>d(n,e))),B(C,(()=>p(f)),(e=>d(f,e))),u(E,(()=>p(g)),(e=>d(g,e))),b(e,z),m()}function Le(e,s){t(s,!0)
let a=H(s,"visible",15,!0)
const l=[{component:ne,label:"Guild Tracker"},{component:Je,label:"Import/Export"}]
ee(e,{close:function(){y("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}e(["click","change"])
const Ae=a({visible:!0})
let Oe=0
function $e(){Oe?Ae.visible=!0:Oe=Y(Le,{props:Ae,target:document.body})}export{$e as default}
//# sourceMappingURL=mountGuildTracker.svelte-Uzox1M7_.js.map
