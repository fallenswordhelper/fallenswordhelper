import{bK as s,dD as e,a1 as t,aC as a,c1 as l,e9 as c,f as n,ab as i,ea as r,bL as o,bN as v,eb as m,ec as b,dF as d,ed as u,dE as p,ee as f,ef as g,ap as h,y as k,ak as x,al as j,C as y,aF as _,E as z,D as U,F as w,G as D,bR as $,K as M,eg as S,bD as N,an as L,J as G,N as T,Q as C,R as E,O as F,d8 as P,s as I,bB as R,dd as B,bH as J,bp as O,aw as V,dR as A,aI as H,I as K,bl as W,az as X,z as Q,t as Y}from"./calfSystem-CIdPz3EO.js"
import{M as Z}from"./ModalTabbed-DAmPFrdA.js"
import{k as q}from"./keys-CFr_h3Bx.js"
import{g as ss}from"./guildMembers-BxoIaGju.js"
async function es(){return await s(e)??{lastUpdate:0,members:{}}}const ts=s=>m(new Date(1e3*s)),as=s=>[s[b],s[d],s[u],s[p],ts(s[r]),s[f],s[g]]
function ls(s){const{lastUpdate:e,members:t}=s
var a
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${i(t).flatMap((a=ts(e),([s,e])=>e.map(as).map(e=>[a,s,...e].join(",")))).join("\n")}`}const cs=[s=>s.getFullYear().toString(),s=>s.getMonth()+1,s=>s.getDate(),s=>s.getHours(),s=>s.getMinutes(),s=>s.getSeconds()]
async function ns(s,e){const t=await es()
if(!t.lastUpdate||!t.members)return
const a=s(t),l=new Blob([a],{type:e}),n=`${(i=cs.map((r=new Date,s=>s(r))).map(v))[0]}${i[1]}${i[2]}${i[3]}${i[4]}${i[5]}_GuildTracker.${e.split("/")[1]}`
var i,r
c(l,n)}let is=""
var rs=y("<option> </option>"),os=y('<div class="grid-row svelte-1bj4gm2"><div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div> <div class="svelte-1bj4gm2"> </div></div>'),vs=y('<div class="grid-row head svelte-1bj4gm2"><div class="svelte-1bj4gm2">Date</div> <div class="svelte-1bj4gm2">Member <select class="svelte-1bj4gm2"></select></div> <div class="svelte-1bj4gm2">Level</div> <div class="svelte-1bj4gm2">VL</div> <div class="svelte-1bj4gm2">Stam</div> <div class="svelte-1bj4gm2">Max Stam</div> <div class="svelte-1bj4gm2">Stam %</div> <div class="svelte-1bj4gm2">Last Activity (Days)</div> <div class="svelte-1bj4gm2">GXP</div></div> <div class="items svelte-1bj4gm2"><!></div>',1),ms=y('<div class="fsh-guild-tracker svelte-1bj4gm2"><!></div>')
function bs(s,e){k(e,!0)
let t=x(j({})),a=x(j([])),c=x("")
const o=N(()=>M(t)?.[M(c)]??[])
function v(){I("Guild Tracker","handleChange"),is=M(c)}function h(s){return R(s)?"#DEF":B(s)?"null":s.toLocaleString()}var y=ms(),J=w(y)
_(J,async function(){const s=await es()
var e,o,v
G(t,(e=s.members,n(i(e).map(([s,e])=>[s,[...e].sort((s,e)=>e[r]-s[r])]))),!0),G(a,q(M(t)).sort(l),!0),is?G(c,is,!0):(o=M(a),v=P(o,1),G(c,v[0],!0))},null,s=>{var e=vs(),t=z(e),l=U(w(t),2),n=U(w(l))
n.__change=v,D(n,21,()=>M(a),$,(s,e)=>{var t=rs(),a=w(t),l={}
C(()=>{E(a,M(e)),l!==(l=M(e))&&(t.value=(t.__value=M(e))??"")}),T(s,t)})
var i=U(t,2),k=w(i)
{const s=(s,e)=>{let t=()=>e?.().item
var a=os(),l=w(a),n=w(l),i=U(l,2),o=w(i),v=U(i,2),k=w(v),x=U(v,2),j=w(x),y=U(x,2),_=w(y),z=U(y,2),D=w(z),$=U(z,2),S=w($),N=U($,2),L=w(N),G=U(N,2),F=w(G)
C((s,e,a,l,i,r,v)=>{E(n,s),E(o,M(c)),E(k,e),E(j,a),E(_,l),E(D,i),E(S,r),E(L,t()[b]),E(F,v)},[()=>m(new Date(1e3*t()[r])),()=>h(t()[u]),()=>h(t()[f]),()=>h(t()[d]),()=>h(t()[p]),()=>Math.floor(t()[d]/t()[p]*100),()=>h(t()[g])]),T(s,a)}
S(k,{get items(){return M(o)},children:s,$$slots:{default:!0}})}L(n,()=>M(c),s=>G(c,s)),T(s,e)}),T(s,y),F()}h(["change"])
const ds=([s,e])=>e.map(e=>[s,...e])
function us(s){return i(s?.members??{}).flatMap(ds)}const ps=s=>s.split(","),fs=s=>Date.parse(`${s.replace(" ","T")}Z`)/1e3,gs=([,s,...e])=>[s,Number(e[b]),Number(e[d]),Number(e[u]),Number(e[p]),fs(e[r]),Number(e[f]),Number(e[g])]
function hs(s){return s.startsWith("{")?function(s){const e=O(s),t=us(e)
return[e?.lastUpdate??0,t]}(s):function(s){const e=s.split("\n").slice(1).map(ps)
return[fs(e[0][0]),e.map(gs)]}(s)}const ks=s=>!s.some(B),xs=([,...s])=>!s.some(V),js=([,...s],[,...e])=>s[r]-e[r],ys=([s,...e])=>[s,Math.trunc(e[r]/86400),...e],_s=([s,e])=>`${s}|${e}`,zs=s=>s.split("|"),Us=([s,e])=>[s,Number(e)],ws=([s,,...e])=>[s,...e]
function Ds(s,e){const t=((s,e)=>s.concat(e).filter(ks).filter(xs).sort(js).map(ys))(s,e)
return J(t.map(_s)).map(zs).map(Us).map((s=>([e,t])=>s.find(((s,e)=>([t,a])=>t===s&&a===e)(e,t)))(t)).map(ws)}const $s=([s])=>s,Ms=([,...s])=>[...s]
function Ss(s){return n(J(s.map($s)).map(e=>[e,s.filter(([s])=>s===e).map(Ms)]))}function Ns(){I("Utils","exportJson"),ns(X,"application/json")}function Ls(){I("Utils","exportCsv"),ns(ls,"text/csv")}function Gs(s,a,l){I("Utils","importFile",M(a))
const[c]=M(l).files
!async function(s,a){const[l,c]=await t([es(),s.text()]),n=a?[]:us(l),[i,r]=hs(c),v=Ds(n,r)
o(e,{lastUpdate:l.lastUpdate??i??0,members:Ss(v)})}(c,M(a))}function Ts(s,e){I("Utils","importButton"),W(M(e))}function Cs(s,t,a){I("Utils","datePurge"),G(t,""),async function(s){const t=await es(),a={lastUpdate:t.lastUpdate,members:n(i(t.members).map(([e,t])=>[e,t.filter(e=>e[r]>s)]))}
o(e,a)}(M(a))}async function Es(s,t,a,l){var c,r
I("Utils","userPurge"),G(t,1),await async function(s){const t=await es(),a={lastUpdate:t.lastUpdate,members:n(i(t.members).filter(([e])=>e!==s))}
o(e,a)}(M(a)),G(l,M(l).filter(s=>s!==M(a)),!0),M(l).length&&(G(t,0),c=M(l),r=P(c,1),G(a,r[0],!0))}var Fs=()=>{I("Utils","overwriteToggle")},Ps=()=>{I("Utils","purgeDateChange")},Is=()=>{I("Utils","handleChange")},Rs=y('<option class="svelte-zcxhfk"> </option>'),Bs=y('<div class="svelte-zcxhfk"><button type="button" class="svelte-zcxhfk">Export JSON</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Export CSV</button> <br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <input accept=".csv, .json, .txt" type="file" class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Import</button> <label class="svelte-zcxhfk"><input type="checkbox" class="svelte-zcxhfk"/> Overwrite</label> (Warning: This can take a while on large files)<br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> data before <input type="date" class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/><br class="svelte-zcxhfk"/> <button type="button" class="svelte-zcxhfk">Purge</button> username <select class="svelte-zcxhfk"></select></div>')
function Js(s,e){k(e,!0)
let c=x(0),n=x(0),i=x(""),r=x(j([])),o=x(""),v=x(1),m=N(()=>M(i)&&Date.parse(M(i))/1e3)
!async function(){var s,e
G(r,await async function(){const[s,e]=await t([es(),ss(a())]),c=e.map(({username:s})=>s)
return q(s.members).filter((s=>e=>!s.find(s=>s===e))(c)).sort(l)}(),!0),M(r).length&&(G(v,0),s=M(r),e=P(s,1),G(o,e[0],!0))}()
var b=Bs(),d=w(b)
d.__click=[Ns]
var u=U(d,5)
u.__click=[Ls]
var p=U(u,6)
p.__change=[Gs,n,c],A(p,s=>G(c,s),()=>M(c))
var f=U(p,2)
f.__click=[Ts,c]
var g=U(f,2),h=w(g)
h.__change=[Fs]
var y=U(g,6)
y.__click=[Cs,i,m]
var _=U(y,2)
_.__change=[Ps]
var z=U(_,4)
z.__click=[Es,v,o,r]
var S=U(z,2)
S.__change=[Is],D(S,21,()=>M(r),$,(s,e)=>{var t=Rs(),a=w(t),l={}
C(()=>{E(a,M(e)),l!==(l=M(e))&&(t.value=(t.__value=M(e))??"")}),T(s,t)}),C(()=>{y.disabled=!M(i),z.disabled=M(v),S.disabled=M(v)}),H(h,()=>M(n),s=>G(n,s)),K(_,()=>M(i),s=>G(i,s)),L(S,()=>M(o),s=>G(o,s)),T(s,b),F()}function Os(s,e){k(e,!0)
let t=Q(e,"visible",15,!0)
const a=[{component:bs,label:"Guild Tracker"},{component:Js,label:"Import/Export"}]
Z(s,{close:function(){I("Guild Tracker","close"),t(!1)},get tabs(){return a},get visible(){return t()}}),F()}h(["click","change"])
const Vs=j({visible:!0})
let As=0
function Hs(){As?Vs.visible=!0:As=Y(Os,{props:Vs,target:document.body})}export{Hs as default}
//# sourceMappingURL=mountGuildTracker.svelte-YHTIvMz1.js.map
