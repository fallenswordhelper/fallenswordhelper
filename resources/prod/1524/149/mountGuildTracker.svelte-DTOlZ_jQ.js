import{a6 as e,R as t,S as s,T as a,X as l,as as i,au as n,Y as r,Z as c,_ as v,V as o,a1 as p,W as u,a3 as d,a4 as b,ea as m,j as f,dE as w,bS as g,s as _,H as h,eb as y,a7 as U,a8 as k,bH as z,ec as x,ed as S,ee as N,ef as T,eg as D,eh as M,ei as j,bn as E,dc as C,x as P,by as G,ej as L,bu as V,bb as W,ak as $,bp as F,dU as H,aw as I,a2 as J,ek as O,el as X,b7 as Z,em as A,en as B,an as R,eo as Y,bE as q,ad as K}from"./calfSystem-BGW9cdWN.js"
import{M as Q}from"./ModalTabbed-Dp4apcr8.js"
let ee=""
var te=l("<option> </option>"),se=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),ae=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),le=l('<div class="main svelte-1eurzp3"><!></div>')
function ie(e,l){t(l,!0)
let P=s(a({})),G=s(a([])),L=s("")
function V(){_("Guild Tracker","handleChange"),ee=o(L)}function W(e){return E(e)?"#DEF":C(e)?"null":e.toLocaleString()}var $=le(),F=c($)
i(F,(async function(){const e=await m()
var t,s
u(P,(t=e.members,f(h(t).map((([e,t])=>[e,[...t].sort(((e,t)=>t[y]-e[y]))])))),!0),u(G,w(o(P)).sort(g),!0),ee?u(L,ee,!0):(s=o(G),u(L,s[0],!0))}),null,(e=>{var t=ae(),s=n(t),a=r(c(s),2),l=r(c(a))
l.__change=V,v(l,21,(()=>o(G)),z,((e,t)=>{var s=te(),a={},l=c(s)
U((()=>{a!==(a=o(t))&&(s.value=null==(s.__value=o(t))?"":o(t)),k(l,o(t))})),d(e,s)}))
var i=r(s,2)
v(i,21,(()=>o(P)?.[o(L)]??[]),z,((e,t)=>{var s=se(),a=n(s),l=c(a),i=r(a,2),v=c(i),p=r(i,2),u=c(p),b=r(p,2),m=c(b),f=r(b,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),z=c(h),E=r(h,2),C=c(E),P=r(E,2),G=c(P)
U(((e,s,a,i,n,r,c)=>{k(l,e),k(v,o(L)),k(u,s),k(m,a),k(w,i),k(_,n),k(z,r),k(C,o(t)[j]),k(G,c)}),[()=>x(new Date(1e3*o(t)[y])),()=>W(o(t)[S]),()=>W(o(t)[N]),()=>W(o(t)[T]),()=>W(o(t)[D]),()=>Math.floor(o(t)[T]/o(t)[D]*100),()=>W(o(t)[M])]),d(e,s)})),p(l,(()=>o(L)),(e=>u(L,e))),d(e,t)})),d(e,$),b()}e(["change"])
const ne=([e,t])=>t.map((t=>[e,...t]))
function re(e){return h(e?.members??{}).flatMap(ne)}const ce=e=>e.split(","),ve=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,oe=([,e,...t])=>[e,Number(t[j]),Number(t[T]),Number(t[S]),Number(t[D]),ve(t[y]),Number(t[N]),Number(t[M])]
function pe(e){return e.startsWith("{")?function(e){const t=W(e),s=re(t)
return[t?.lastUpdate??0,s]}(e):function(e){const t=e.split("\n").slice(1).map(ce)
return[ve(t[0][0]),t.map(oe)]}(e)}const ue=e=>!e.some(C),de=([,...e])=>!e.some($),be=([,...e],[,...t])=>e[y]-t[y],me=([e,...t])=>[e,Math.trunc(t[y]/86400),...t],fe=(e,t)=>e.concat(t).filter(ue).filter(de).sort(be).map(me),we=([e,t])=>`${e}|${t}`,ge=e=>e.split("|"),_e=([e,t])=>[e,Number(t)],he=e=>([t,s])=>e.find(((e,t)=>([s,a])=>s===e&&a===t)(t,s)),ye=([e,,...t])=>[e,...t]
const Ue=([e])=>e,ke=([,...e])=>[...e]
function ze(e){return f(V(e.map(Ue)).map((t=>[t,e.filter((([e])=>e===t)).map(ke)])))}async function xe(e,t){const[s,a]=await P([m(),e.text()]),l=t?[]:re(s),[i,n]=pe(a),r=function(e,t){const s=fe(e,t)
return V(s.map(we)).map(ge).map(_e).map(he(s)).map(ye)}(l,n)
G(L,{lastUpdate:s.lastUpdate??i??0,members:ze(r)})}function Se(){_("Utils","exportJson"),X(R,"application/json")}function Ne(){_("Utils","exportCsv"),X(Y,"text/csv")}function Te(e,t,s){_("Utils","importFile",o(t))
const[a]=o(s).files
xe(a,o(t))}function De(e,t){_("Utils","importButton"),Z(o(t))}function Me(e,t,s){_("Utils","datePurge"),u(t,""),A(o(s))}async function je(e,t,s,a){var l
_("Utils","userPurge"),u(t,1),await B(o(s)),u(a,o(a).filter((e=>e!==o(s))),!0),o(a).length&&(u(t,0),l=o(a),u(s,l[0],!0))}var Ee=()=>{_("Utils","overwriteToggle")},Ce=()=>{_("Utils","purgeDateChange")},Pe=()=>{_("Utils","handleChange")},Ge=l('<option class="svelte-14w01tp"> </option>'),Le=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"><br class="svelte-14w01tp"> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"><br class="svelte-14w01tp"><br class="svelte-14w01tp"> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"><br class="svelte-14w01tp"><br class="svelte-14w01tp"> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"><br class="svelte-14w01tp"><br class="svelte-14w01tp"> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Ve(e,l){t(l,!0)
let i=s(0),n=s(0),m=s(""),f=s(a([])),w=s(""),g=s(1),_=F((()=>o(m)&&Date.parse(o(m))/1e3))
!async function(){var e
u(f,await O(),!0),o(f).length&&(u(g,0),e=o(f),u(w,e[0],!0))}()
var h=Le(),y=c(h)
y.__click=[Se]
var x=r(y,5)
x.__click=[Ne]
var S=r(x,6)
S.__change=[Te,n,i],H(S,(e=>u(i,e)),(()=>o(i)))
var N=r(S,2)
N.__click=[De,i]
var T=r(N,2),D=c(T)
D.__change=[Ee]
var M=r(T,6)
M.__click=[Me,m,_]
var j=r(M,2)
j.__change=[Ce]
var E=r(j,4)
E.__click=[je,g,w,f]
var C=r(E,2)
C.__change=[Pe],v(C,21,(()=>o(f)),z,((e,t)=>{var s=Ge(),a={},l=c(s)
U((()=>{a!==(a=o(t))&&(s.value=null==(s.__value=o(t))?"":o(t)),k(l,o(t))})),d(e,s)})),U((()=>{M.disabled=!o(m),E.disabled=o(g),C.disabled=o(g)})),I(D,(()=>o(n)),(e=>u(n,e))),J(j,(()=>o(m)),(e=>u(m,e))),p(C,(()=>o(w)),(e=>u(w,e))),d(e,h),b()}function We(e,s){t(s,!0)
let a=q(s,"visible",15,!0)
Q(e,{close:function(){_("Guild Tracker","close"),a(!1)},tabs:[{component:ie,label:"Guild Tracker"},{component:Ve,label:"Import/Export"}],get visible(){return a()}}),b()}e(["click","change"])
const $e=a({visible:!0})
let Fe=0
function He(){Fe?$e.visible=!0:Fe=K(We,{props:$e,target:document.body})}export{He as default}
//# sourceMappingURL=mountGuildTracker.svelte-DTOlZ_jQ.js.map
