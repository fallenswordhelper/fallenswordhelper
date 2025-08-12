import{aq as t,z as e,al as s,am as a,C as l,aF as i,E as n,D as r,F as c,G as v,bM as o,K as p,ao as u,J as d,N as b,O as m,eg as f,h as w,dK as g,bZ as _,dd as h,s as y,ab as z,eh as k,Q as x,R as U,ei as N,ej as D,ek as M,el as C,em as S,en as T,eo as G,bw as j,di as E,a1 as P,bG as F,ep as I,bC as L,bk as $,ax as A,d$ as J,by as O,aI as q,I as K,eq as V,er as W,bg as X,es as Z,et as B,aA as Q,eu as R,A as H,u as Y}from"./calfSystem-BlPuMQGT.js"
import{M as tt}from"./ModalTabbed-Dsx_pTFW.js"
let et=""
var st=l("<option> </option>"),at=l('<div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div> <div class="svelte-1eurzp3"> </div>',1),lt=l('<div class="grid head svelte-1eurzp3"><div>Date</div> <div>Member <select class="svelte-1eurzp3"></select></div> <div>Level</div> <div>VL</div> <div>Stam</div> <div>Max Stam</div> <div>Stam %</div> <div>Last Activity (Days)</div> <div>GXP</div></div> <div class="grid items svelte-1eurzp3"></div>',1),it=l('<div class="main svelte-1eurzp3"><!></div>')
function nt(t,l){e(l,!0)
let P=s(a({})),F=s(a([])),I=s("")
function L(){y("Guild Tracker","handleChange"),et=p(I)}function $(t){return j(t)?"#DEF":E(t)?"null":t.toLocaleString()}var A=it(),J=c(A)
i(J,(async function(){const t=await f()
var e,s,a
d(P,(e=t.members,w(z(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[k]-t[k]))])))),!0),d(F,g(p(P)).sort(_),!0),et?d(I,et,!0):(s=p(F),a=h(s,1),d(I,a[0],!0))}),null,(t=>{var e=lt(),s=n(e),a=r(c(s),2),l=r(c(a))
l.__change=L,v(l,21,(()=>p(F)),o,((t,e)=>{var s=st(),a=c(s),l={}
x((()=>{U(a,p(e)),l!==(l=p(e))&&(s.value=(s.__value=p(e))??"")})),b(t,s)}))
var i=r(s,2)
v(i,21,(()=>p(P)?.[p(I)]??[]),o,((t,e)=>{var s=at(),a=n(s),l=c(a),i=r(a,2),v=c(i),o=r(i,2),u=c(o),d=r(o,2),m=c(d),f=r(d,2),w=c(f),g=r(f,2),_=c(g),h=r(g,2),y=c(h),z=r(h,2),j=c(z),E=r(z,2),P=c(E)
x(((t,s,a,i,n,r,c)=>{U(l,t),U(v,p(I)),U(u,s),U(m,a),U(w,i),U(_,n),U(y,r),U(j,p(e)[G]),U(P,c)}),[()=>N(new Date(1e3*p(e)[k])),()=>$(p(e)[D]),()=>$(p(e)[M]),()=>$(p(e)[C]),()=>$(p(e)[S]),()=>Math.floor(p(e)[C]/p(e)[S]*100),()=>$(p(e)[T])]),b(t,s)})),u(l,(()=>p(I)),(t=>d(I,t))),b(t,e)})),b(t,A),m()}t(["change"])
const rt=([t,e])=>e.map((e=>[t,...e]))
function ct(t){return z(t?.members??{}).flatMap(rt)}const vt=t=>t.split(","),ot=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,pt=([,t,...e])=>[t,Number(e[G]),Number(e[C]),Number(e[D]),Number(e[S]),ot(e[k]),Number(e[M]),Number(e[T])]
function ut(t){return t.startsWith("{")?function(t){const e=$(t),s=ct(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(vt)
return[ot(e[0][0]),e.map(pt)]}(t)}const dt=t=>!t.some(E),bt=([,...t])=>!t.some(A),mt=([,...t],[,...e])=>t[k]-e[k],ft=([t,...e])=>[t,Math.trunc(e[k]/86400),...e],wt=(t,e)=>t.concat(e).filter(dt).filter(bt).sort(mt).map(ft),gt=([t,e])=>`${t}|${e}`,_t=t=>t.split("|"),ht=([t,e])=>[t,Number(e)],yt=t=>([e,s])=>t.find(((t,e)=>([s,a])=>s===t&&a===e)(e,s)),zt=([t,,...e])=>[t,...e]
const kt=([t])=>t,xt=([,...t])=>[...t]
function Ut(t){return w(L(t.map(kt)).map((e=>[e,t.filter((([t])=>t===e)).map(xt)])))}async function Nt(t,e){const[s,a]=await P([f(),t.text()]),l=e?[]:ct(s),[i,n]=ut(a),r=function(t,e){const s=wt(t,e)
return L(s.map(gt)).map(_t).map(ht).map(yt(s)).map(zt)}(l,n)
F(I,{lastUpdate:s.lastUpdate??i??0,members:Ut(r)})}function Dt(){y("Utils","exportJson"),W(Q,"application/json")}function Mt(){y("Utils","exportCsv"),W(R,"text/csv")}function Ct(t,e,s){y("Utils","importFile",p(e))
const[a]=p(s).files
Nt(a,p(e))}function St(t,e){y("Utils","importButton"),X(p(e))}function Tt(t,e,s){y("Utils","datePurge"),d(e,""),Z(p(s))}async function Gt(t,e,s,a){var l,i
y("Utils","userPurge"),d(e,1),await B(p(s)),d(a,p(a).filter((t=>t!==p(s))),!0),p(a).length&&(d(e,0),l=p(a),i=h(l,1),d(s,i[0],!0))}var jt=()=>{y("Utils","overwriteToggle")},Et=()=>{y("Utils","purgeDateChange")},Pt=()=>{y("Utils","handleChange")},Ft=l('<option class="svelte-14w01tp"> </option>'),It=l('<div class="svelte-14w01tp"><button type="button" class="svelte-14w01tp">Export JSON</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Export CSV</button> <br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <input accept=".csv, .json, .txt" type="file" class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Import</button> <label class="svelte-14w01tp"><input type="checkbox" class="svelte-14w01tp"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> data before <input type="date" class="svelte-14w01tp"/><br class="svelte-14w01tp"/><br class="svelte-14w01tp"/> <button type="button" class="svelte-14w01tp">Purge</button> username <select class="svelte-14w01tp"></select></div>')
function Lt(t,l){e(l,!0)
let i=s(0),n=s(0),f=s(""),w=s(a([])),g=s(""),_=s(1),y=O((()=>p(f)&&Date.parse(p(f))/1e3))
!async function(){var t,e
d(w,await V(),!0),p(w).length&&(d(_,0),t=p(w),e=h(t,1),d(g,e[0],!0))}()
var z=It(),k=c(z)
k.__click=[Dt]
var N=r(k,5)
N.__click=[Mt]
var D=r(N,6)
D.__change=[Ct,n,i],J(D,(t=>d(i,t)),(()=>p(i)))
var M=r(D,2)
M.__click=[St,i]
var C=r(M,2),S=c(C)
S.__change=[jt]
var T=r(C,6)
T.__click=[Tt,f,y]
var G=r(T,2)
G.__change=[Et]
var j=r(G,4)
j.__click=[Gt,_,g,w]
var E=r(j,2)
E.__change=[Pt],v(E,21,(()=>p(w)),o,((t,e)=>{var s=Ft(),a=c(s),l={}
x((()=>{U(a,p(e)),l!==(l=p(e))&&(s.value=(s.__value=p(e))??"")})),b(t,s)})),x((()=>{T.disabled=!p(f),j.disabled=p(_),E.disabled=p(_)})),q(S,(()=>p(n)),(t=>d(n,t))),K(G,(()=>p(f)),(t=>d(f,t))),u(E,(()=>p(g)),(t=>d(g,t))),b(t,z),m()}function $t(t,s){e(s,!0)
let a=H(s,"visible",15,!0)
const l=[{component:nt,label:"Guild Tracker"},{component:Lt,label:"Import/Export"}]
tt(t,{close:function(){y("Guild Tracker","close"),a(!1)},get tabs(){return l},get visible(){return a()}}),m()}t(["click","change"])
const At=a({visible:!0})
let Jt=0
function Ot(){Jt?At.visible=!0:Jt=Y($t,{props:At,target:document.body})}export{Ot as default}
//# sourceMappingURL=mountGuildTracker.svelte-D1wpIFJI.js.map
