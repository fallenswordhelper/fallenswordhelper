import{bH as e,dD as s,ea as t,f as a,ab as l,eb as c,bI as n,a1 as i,aC as r,b$ as o,bK as v,ec as m,ed as b,dF as u,ee as d,dE as p,ef as f,eg as g,ap as h,y as k,ak as x,al as j,C as y,aF as _,E as z,D as U,F as w,G as $,bO as D,K as M,eh as S,cp as N,an as C,J as L,N as T,Q as E,R as G,O as F,d8 as P,s as I,bC as O,de as H,bE as J,bq as V,aw as A,dR as B,aI as K,I as R,bm as W,az as X,z as q,t as Q}from"./calfSystem-Cs6CSxoU.js"
import{M as Y}from"./ModalTabbed-B0kgqr1k.js"
import{k as Z}from"./keys-CFr_h3Bx.js"
import{g as ee}from"./guildMembers-Bfrwbkp_.js"
async function se(){return await e(s)??{lastUpdate:0,members:{}}}const te=e=>m(new Date(1e3*e)),ae=e=>[e[b],e[u],e[d],e[p],te(e[c]),e[f],e[g]]
function le(e){const{lastUpdate:s,members:t}=e
var a
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${l(t).flatMap((a=te(s),([e,s])=>s.map(ae).map(s=>[a,e,...s].join(",")))).join("\n")}`}const ce=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()]
async function ne(e,s){const a=await se()
if(!a.lastUpdate||!a.members)return
const l=e(a),c=new Blob([l],{type:s}),n=`${(i=ce.map((r=new Date,e=>e(r))).map(v))[0]}${i[1]}${i[2]}${i[3]}${i[4]}${i[5]}_GuildTracker.${s.split("/")[1]}`
var i,r
t(c,n)}let ie=""
var re=y("<option> </option>"),oe=y('<div class="grid-row svelte-1bj4gm2"><div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div></div>'),ve=y('<div class="grid-row head svelte-1bj4gm2"><div class="svelte-1bj4gm2">Date</div> <div class="svelte-1bj4gm2">Member <select class="svelte-1bj4gm2"></select></div> <div class="svelte-1bj4gm2">Level</div> <div class="svelte-1bj4gm2">VL</div> <div class="svelte-1bj4gm2">Stam</div> <div class="svelte-1bj4gm2">Max Stam</div> <div class="svelte-1bj4gm2">Stam %</div> <div class="svelte-1bj4gm2">Last Activity (Days)</div> <div class="svelte-1bj4gm2">GXP</div></div> <div class="items svelte-1bj4gm2"><!></div>',1),me=y('<div class="fsh-guild-tracker svelte-1bj4gm2"><!></div>')
function be(e,s){k(s,!0)
let t=x(j({})),n=x(j([])),i=x("")
const r=N(()=>M(t)?.[M(i)]??[])
function v(){I("Guild Tracker","handleChange"),ie=M(i)}function h(e){return O(e)?"#DEF":H(e)?"null":e.toLocaleString()}var y=me(),J=w(y)
_(J,async function(){const e=await se()
var s,r,v
L(t,(s=e.members,a(l(s).map(([e,s])=>[e,[...s].sort((e,s)=>s[c]-e[c])]))),!0),L(n,Z(M(t)).sort(o),!0),ie?L(i,ie,!0):(r=M(n),v=P(r,1),L(i,v[0],!0))},null,e=>{var s=ve(),t=z(s),a=U(w(t),2),l=U(w(a))
l.__change=v,$(l,21,()=>M(n),D,(e,s)=>{var t=re(),a=w(t),l={}
E(()=>{G(a,M(s)),l!==(l=M(s))&&(t.value=(t.__value=M(s))??"")}),T(e,t)})
var o=U(t,2),k=w(o)
{const e=(e,s)=>{let t=()=>s?.().item
var a=oe(),l=w(a),n=w(l),r=U(l,2),o=w(r),v=U(r,2),k=w(v),x=U(v,2),j=w(x),y=U(x,2),_=w(y),z=U(y,2),$=w(z),D=U(z,2),S=w(D),N=U(D,2),C=w(N),L=U(N,2),F=w(L)
E((e,s,a,l,c,r,v)=>{G(n,e),G(o,M(i)),G(k,s),G(j,a),G(_,l),G($,c),G(S,r),G(C,t()[b]),G(F,v)},[()=>m(new Date(1e3*t()[c])),()=>h(t()[d]),()=>h(t()[f]),()=>h(t()[u]),()=>h(t()[p]),()=>Math.floor(t()[u]/t()[p]*100),()=>h(t()[g])]),T(e,a)}
S(k,{get items(){return M(r)},children:e,$$slots:{default:!0}})}C(l,()=>M(i),e=>L(i,e)),T(e,s)}),T(e,y),F()}h(["change"])
const ue=([e,s])=>s.map(s=>[e,...s])
function de(e){return l(e?.members??{}).flatMap(ue)}const pe=e=>e.split(","),fe=e=>Date.parse(`${e.replace(" ","T")}Z`)/1e3,ge=([,e,...s])=>[e,Number(s[b]),Number(s[u]),Number(s[d]),Number(s[p]),fe(s[c]),Number(s[f]),Number(s[g])]
function he(e){return e.startsWith("{")?function(e){const s=V(e),t=de(s)
return[s?.lastUpdate??0,t]}(e):function(e){const s=e.split("\n").slice(1).map(pe)
return[fe(s[0][0]),s.map(ge)]}(e)}const ke=e=>!e.some(H),xe=([,...e])=>!e.some(A),je=([,...e],[,...s])=>e[c]-s[c],ye=([e,...s])=>[e,Math.trunc(s[c]/86400),...s],_e=([e,s])=>`${e}|${s}`,ze=e=>e.split("|"),Ue=([e,s])=>[e,Number(s)],we=([e,,...s])=>[e,...s]
function $e(e,s){const t=((e,s)=>e.concat(s).filter(ke).filter(xe).sort(je).map(ye))(e,s)
return J(t.map(_e)).map(ze).map(Ue).map((e=>([s,t])=>e.find(((e,s)=>([t,a])=>t===e&&a===s)(s,t)))(t)).map(we)}const De=([e])=>e,Me=([,...e])=>[...e]
function Se(e){return a(J(e.map(De)).map(s=>[s,e.filter(([e])=>e===s).map(Me)]))}var Ne=y('<option class="svelte-zcxhfk"> </option>'),Ce=y('<div class="svelte-zcxhfk"><button type="button" class="svelte-zcxhfk">Export JSON</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Export CSV</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <input accept=".csv, .json, .txt" type="file" class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Import</button> <label class="svelte-zcxhfk"><input type="checkbox" class="svelte-zcxhfk"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> data before <input type="date" class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> username <select class="svelte-zcxhfk"></select></div>')
function Le(e,t){k(t,!0)
let v=x(0),m=x(0),b=x(""),u=x(j([])),d=x(""),p=x(1),f=N(()=>M(b)&&Date.parse(M(b))/1e3)
!async function(){var e,s
L(u,await async function(){const[e,s]=await i([se(),ee(r())]),t=s.map(({username:e})=>e)
return Z(e.members).filter((e=>s=>!e.find(e=>e===s))(t)).sort(o)}(),!0),M(u).length&&(L(p,0),e=M(u),s=P(e,1),L(d,s[0],!0))}()
var g=Ce(),h=w(g)
h.__click=function(){I("Utils","exportJson"),ne(X,"application/json")}
var y=U(h,5)
y.__click=function(){I("Utils","exportCsv"),ne(le,"text/csv")}
var _=U(y,6)
_.__change=function(){I("Utils","importFile",M(m))
const[e]=M(v).files
!async function(e,t){const[a,l]=await i([se(),e.text()]),c=t?[]:de(a),[r,o]=he(l),v=$e(c,o)
n(s,{lastUpdate:a.lastUpdate??r??0,members:Se(v)})}(e,M(m))},B(_,e=>L(v,e),()=>M(v))
var z=U(_,2)
z.__click=function(){I("Utils","importButton"),W(M(v))}
var S=U(z,2),O=w(S)
O.__change=()=>{I("Utils","overwriteToggle")}
var H=U(S,6)
H.__click=function(){I("Utils","datePurge"),L(b,""),async function(e){const t=await se(),i={lastUpdate:t.lastUpdate,members:a(l(t.members).map(([s,t])=>[s,t.filter(s=>s[c]>e)]))}
n(s,i)}(M(f))}
var J=U(H,2)
J.__change=()=>{I("Utils","purgeDateChange")}
var V=U(J,4)
V.__click=async function(){var e,t
I("Utils","userPurge"),L(p,1),await async function(e){const t=await se(),c={lastUpdate:t.lastUpdate,members:a(l(t.members).filter(([s])=>s!==e))}
n(s,c)}(M(d)),L(u,M(u).filter(e=>e!==M(d)),!0),M(u).length&&(L(p,0),e=M(u),t=P(e,1),L(d,t[0],!0))}
var A=U(V,2)
A.__change=()=>{I("Utils","handleChange")},$(A,21,()=>M(u),D,(e,s)=>{var t=Ne(),a=w(t),l={}
E(()=>{G(a,M(s)),l!==(l=M(s))&&(t.value=(t.__value=M(s))??"")}),T(e,t)}),E(()=>{H.disabled=!M(b),V.disabled=M(p),A.disabled=M(p)}),K(O,()=>M(m),e=>L(m,e)),R(J,()=>M(b),e=>L(b,e)),C(A,()=>M(d),e=>L(d,e)),T(e,g),F()}function Te(e,s){k(s,!0)
let t=q(s,"visible",15,!0)
const a=[{component:be,label:"Guild Tracker"},{component:Le,label:"Import/Export"}]
Y(e,{close:function(){I("Guild Tracker","close"),t(!1)},get tabs(){return a},get visible(){return t()}}),F()}h(["click","change"])
const Ee=j({visible:!0})
let Ge=0
function Fe(){Ge?Ee.visible=!0:Ge=Q(Te,{props:Ee,target:document.body})}export{Fe as default}
//# sourceMappingURL=mountGuildTracker.svelte-deyxLQzF.js.map
