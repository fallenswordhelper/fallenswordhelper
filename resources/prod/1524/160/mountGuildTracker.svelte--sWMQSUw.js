import{bK as s,dD as e,e9 as t,f as a,ab as l,ea as c,bL as n,a1 as i,aC as r,c2 as o,bN as v,eb as m,ec as b,dF as d,ed as u,dE as p,ee as f,ef as g,ap as h,y as k,ak as x,al as j,C as y,aF as _,E as z,D as U,F as w,G as D,P as $,S as M,K as S,N,bT as L,eg as T,bD as G,an as C,J as P,O as E,d8 as F,s as I,bB as B,dd as J,bI as O,bp as V,aw as A,dR as K,aI as R,I as W,bl as X,az as H,z as Y,t as Z}from"./calfSystem-HVCiy-VV.js"
import{M as q}from"./ModalTabbed-CUwOsg2C.js"
import{k as Q}from"./keys-CFr_h3Bx.js"
import{g as ss}from"./guildMembers-DswVgOFV.js"
async function es(){return await s(e)??{lastUpdate:0,members:{}}}const ts=s=>m(new Date(1e3*s)),as=s=>[s[b],s[d],s[u],s[p],ts(s[c]),s[f],s[g]]
function ls(s){const{lastUpdate:e,members:t}=s
var a
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${l(t).flatMap((a=ts(e),([s,e])=>e.map(as).map(e=>[a,s,...e].join(",")))).join("\n")}`}const cs=[s=>s.getFullYear().toString(),s=>s.getMonth()+1,s=>s.getDate(),s=>s.getHours(),s=>s.getMinutes(),s=>s.getSeconds()]
async function ns(s,e){const a=await es()
if(!a.lastUpdate||!a.members)return
const l=s(a),c=new Blob([l],{type:e}),n=`${(i=cs.map((r=new Date,s=>s(r))).map(v))[0]}${i[1]}${i[2]}${i[3]}${i[4]}${i[5]}_GuildTracker.${e.split("/")[1]}`
var i,r
t(c,n)}let is=""
var rs=y("<option> </option>"),os=y('<div class="grid-row svelte-1bj4gm2"><div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div></div>'),vs=y('<div class="grid-row head svelte-1bj4gm2"><div class="svelte-1bj4gm2">Date</div> <div class="svelte-1bj4gm2">Member <select class="svelte-1bj4gm2"></select></div> <div class="svelte-1bj4gm2">Level</div> <div class="svelte-1bj4gm2">VL</div> <div class="svelte-1bj4gm2">Stam</div> <div class="svelte-1bj4gm2">Max Stam</div> <div class="svelte-1bj4gm2">Stam %</div> <div class="svelte-1bj4gm2">Last Activity (Days)</div> <div class="svelte-1bj4gm2">GXP</div></div> <div class="items svelte-1bj4gm2"><!></div>',1),ms=y('<div class="fsh-guild-tracker svelte-1bj4gm2"><!></div>')
function bs(s,e){k(e,!0)
let t=x(j({})),n=x(j([])),i=x("")
const r=G(()=>S(t)?.[S(i)]??[])
function v(){I("Guild Tracker","handleChange"),is=S(i)}function h(s){return B(s)?"#DEF":J(s)?"null":s.toLocaleString()}var y=ms(),O=w(y)
_(O,async function(){const s=await es()
var e,r,v
P(t,(e=s.members,a(l(e).map(([s,e])=>[s,[...e].sort((s,e)=>e[c]-s[c])]))),!0),P(n,Q(S(t)).sort(o),!0),is?P(i,is,!0):(r=S(n),v=F(r,1),P(i,v[0],!0))},null,s=>{var e=vs(),t=z(e),a=U(w(t),2),l=U(w(a))
l.__change=v,D(l,21,()=>S(n),L,(s,e)=>{var t=rs(),a=w(t),l={}
$(()=>{M(a,S(e)),l!==(l=S(e))&&(t.value=(t.__value=S(e))??"")}),N(s,t)})
var o=U(t,2),k=w(o)
{const s=(s,e)=>{let t=()=>e?.().item
var a=os(),l=w(a),n=w(l),r=U(l,2),o=w(r),v=U(r,2),k=w(v),x=U(v,2),j=w(x),y=U(x,2),_=w(y),z=U(y,2),D=w(z),L=U(z,2),T=w(L),G=U(L,2),C=w(G),P=U(G,2),E=w(P)
$((s,e,a,l,c,r,v)=>{M(n,s),M(o,S(i)),M(k,e),M(j,a),M(_,l),M(D,c),M(T,r),M(C,t()[b]),M(E,v)},[()=>m(new Date(1e3*t()[c])),()=>h(t()[u]),()=>h(t()[f]),()=>h(t()[d]),()=>h(t()[p]),()=>Math.floor(t()[d]/t()[p]*100),()=>h(t()[g])]),N(s,a)}
T(k,{get items(){return S(r)},children:s,$$slots:{default:!0}})}C(l,()=>S(i),s=>P(i,s)),N(s,e)}),N(s,y),E()}h(["change"])
const ds=([s,e])=>e.map(e=>[s,...e])
function us(s){return l(s?.members??{}).flatMap(ds)}const ps=s=>s.split(","),fs=s=>Date.parse(`${s.replace(" ","T")}Z`)/1e3,gs=([,s,...e])=>[s,Number(e[b]),Number(e[d]),Number(e[u]),Number(e[p]),fs(e[c]),Number(e[f]),Number(e[g])]
function hs(s){return s.startsWith("{")?function(s){const e=V(s),t=us(e)
return[e?.lastUpdate??0,t]}(s):function(s){const e=s.split("\n").slice(1).map(ps)
return[fs(e[0][0]),e.map(gs)]}(s)}const ks=s=>!s.some(J),xs=([,...s])=>!s.some(A),js=([,...s],[,...e])=>s[c]-e[c],ys=([s,...e])=>[s,Math.trunc(e[c]/86400),...e],_s=([s,e])=>`${s}|${e}`,zs=s=>s.split("|"),Us=([s,e])=>[s,Number(e)],ws=([s,,...e])=>[s,...e]
function Ds(s,e){const t=((s,e)=>s.concat(e).filter(ks).filter(xs).sort(js).map(ys))(s,e)
return O(t.map(_s)).map(zs).map(Us).map((s=>([e,t])=>s.find(((s,e)=>([t,a])=>t===s&&a===e)(e,t)))(t)).map(ws)}const $s=([s])=>s,Ms=([,...s])=>[...s]
function Ss(s){return a(O(s.map($s)).map(e=>[e,s.filter(([s])=>s===e).map(Ms)]))}var Ns=y('<option class="svelte-zcxhfk"> </option>'),Ls=y('<div class="svelte-zcxhfk"><button type="button" class="svelte-zcxhfk">Export JSON</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Export CSV</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <input accept=".csv, .json, .txt" type="file" class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Import</button> <label class="svelte-zcxhfk"><input type="checkbox" class="svelte-zcxhfk"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> data before <input type="date" class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> username <select class="svelte-zcxhfk"></select></div>')
function Ts(s,t){k(t,!0)
let v=x(0),m=x(0),b=x(""),d=x(j([])),u=x(""),p=x(1),f=G(()=>S(b)&&Date.parse(S(b))/1e3)
!async function(){var s,e
P(d,await async function(){const[s,e]=await i([es(),ss(r())]),t=e.map(({username:s})=>s)
return Q(s.members).filter((s=>e=>!s.find(s=>s===e))(t)).sort(o)}(),!0),S(d).length&&(P(p,0),s=S(d),e=F(s,1),P(u,e[0],!0))}()
var g=Ls(),h=w(g)
h.__click=function(){I("Utils","exportJson"),ns(H,"application/json")}
var y=U(h,5)
y.__click=function(){I("Utils","exportCsv"),ns(ls,"text/csv")}
var _=U(y,6)
_.__change=function(){I("Utils","importFile",S(m))
const[s]=S(v).files
!async function(s,t){const[a,l]=await i([es(),s.text()]),c=t?[]:us(a),[r,o]=hs(l),v=Ds(c,o)
n(e,{lastUpdate:a.lastUpdate??r??0,members:Ss(v)})}(s,S(m))},K(_,s=>P(v,s),()=>S(v))
var z=U(_,2)
z.__click=function(){I("Utils","importButton"),X(S(v))}
var T=U(z,2),B=w(T)
B.__change=()=>{I("Utils","overwriteToggle")}
var J=U(T,6)
J.__click=function(){I("Utils","datePurge"),P(b,""),async function(s){const t=await es(),i={lastUpdate:t.lastUpdate,members:a(l(t.members).map(([e,t])=>[e,t.filter(e=>e[c]>s)]))}
n(e,i)}(S(f))}
var O=U(J,2)
O.__change=()=>{I("Utils","purgeDateChange")}
var V=U(O,4)
V.__click=async function(){var s,t
I("Utils","userPurge"),P(p,1),await async function(s){const t=await es(),c={lastUpdate:t.lastUpdate,members:a(l(t.members).filter(([e])=>e!==s))}
n(e,c)}(S(u)),P(d,S(d).filter(s=>s!==S(u)),!0),S(d).length&&(P(p,0),s=S(d),t=F(s,1),P(u,t[0],!0))}
var A=U(V,2)
A.__change=()=>{I("Utils","handleChange")},D(A,21,()=>S(d),L,(s,e)=>{var t=Ns(),a=w(t),l={}
$(()=>{M(a,S(e)),l!==(l=S(e))&&(t.value=(t.__value=S(e))??"")}),N(s,t)}),$(()=>{J.disabled=!S(b),V.disabled=S(p),A.disabled=S(p)}),R(B,()=>S(m),s=>P(m,s)),W(O,()=>S(b),s=>P(b,s)),C(A,()=>S(u),s=>P(u,s)),N(s,g),E()}function Gs(s,e){k(e,!0)
let t=Y(e,"visible",15,!0)
const a=[{component:bs,label:"Guild Tracker"},{component:Ts,label:"Import/Export"}]
q(s,{close:function(){I("Guild Tracker","close"),t(!1)},get tabs(){return a},get visible(){return t()}}),E()}h(["click","change"])
const Cs=j({visible:!0})
let Ps=0
function Es(){Ps?Cs.visible=!0:Ps=Z(Gs,{props:Cs,target:document.body})}export{Es as default}
//# sourceMappingURL=mountGuildTracker.svelte--sWMQSUw.js.map
