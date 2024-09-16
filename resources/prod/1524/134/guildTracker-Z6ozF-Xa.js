import{i as t}from"./instantiate-upFtXRx7.js"
import{S as e,L as s,M as n,O as l,Q as a,T as i,_ as c,a0 as o,bu as r,s as u,b2 as f,cG as m,a6 as b,N as p,P as v,a3 as d,R as h,U as g,V as w,X as y,b6 as x,a1 as k,W as j,a4 as C,f as _,C as U,aS as $,aU as M,aC as N,cl as D,ah as T,bj as S,bk as P,be as G,bh as L,bl as E}from"./calfSystem-CyLCrHqa.js"
import{M as I}from"./ModalTabbed-B2mASYDc.js"
import{h as O,u as V}from"./await_block-kKTPWHQa.js"
import{f as W}from"./formatUtcDateTime-DUH5p_s6.js"
import{k as B}from"./keys-CFr_h3Bx.js"
import{g as F,u as J,l as X,v as Z,c as q,m as A,b as H,a as Q,f as R,d as z,p as K,r as Y,e as tt,h as et}from"./utils-DihWmDYf.js"
import{a as st}from"./all-YfMtr2SN.js"
import{n as nt}from"./numberIsNaN-CGkd1jiA.js"
import{u as lt}from"./uniq-DXRxPJJ2.js"
import"./ModalTitled-DAWYlPnT.js"
import"./Modal-CK6EKYne.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./guildMembers-C3YZ3Xen.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function it(t,e,s){const n=t.slice()
return n[11]=e[s],n}function ct(t){return{c:c,m:c,p:c,d:c}}function ot(t){let e,s,n,c,r,u,f,m,b,j,C,_,U,$,M,N,D,T,S,P,G,L,E,I,O=p(t[1]),V=[]
for(let e=0;e<O.length;e+=1)V[e]=rt(it(t,O,e))
let W=p(t[0]?.[t[2]]??[]),B=[]
for(let e=0;e<W.length;e+=1)B[e]=ut(at(t,W,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=v(),c=l("div"),r=d("Member\n        "),u=l("select")
for(let t=0;t<V.length;t+=1)V[t].c()
f=v(),m=l("div"),m.textContent="Level",b=v(),j=l("div"),j.textContent="VL",C=v(),_=l("div"),_.textContent="Stam",U=v(),$=l("div"),$.textContent="Max Stam",M=v(),N=l("div"),N.textContent="Stam %",D=v(),T=l("div"),T.textContent="Last Activity (Days)",S=v(),P=l("div"),P.textContent="GXP",G=v(),L=l("div")
for(let t=0;t<B.length;t+=1)B[t].c()
a(u,"class","svelte-1e4efyh"),void 0===t[2]&&h((()=>t[6].call(u))),a(e,"class","grid head svelte-1e4efyh"),a(L,"class","grid items svelte-1e4efyh")},m(l,a){i(l,e,a),g(e,s),g(e,n),g(e,c),g(c,r),g(c,u)
for(let t=0;t<V.length;t+=1)V[t]&&V[t].m(u,null)
w(u,t[2],!0),g(e,f),g(e,m),g(e,b),g(e,j),g(e,C),g(e,_),g(e,U),g(e,$),g(e,M),g(e,N),g(e,D),g(e,T),g(e,S),g(e,P),i(l,G,a),i(l,L,a)
for(let t=0;t<B.length;t+=1)B[t]&&B[t].m(L,null)
E||(I=[y(u,"change",t[6]),y(u,"change",t[4])],E=!0)},p(t,e){if(2&e){let s
for(O=p(t[1]),s=0;s<O.length;s+=1){const n=it(t,O,s)
V[s]?V[s].p(n,e):(V[s]=rt(n),V[s].c(),V[s].m(u,null))}for(;s<V.length;s+=1)V[s].d(1)
V.length=O.length}if(6&e&&w(u,t[2]),37&e){let s
for(W=p(t[0]?.[t[2]]??[]),s=0;s<W.length;s+=1){const n=at(t,W,s)
B[s]?B[s].p(n,e):(B[s]=ut(n),B[s].c(),B[s].m(L,null))}for(;s<B.length;s+=1)B[s].d(1)
B.length=W.length}},d(t){t&&(o(e),o(G),o(L)),x(V,t),x(B,t),E=!1,k(I)}}}function rt(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=d(a),e.__value=n=t[11],j(e,e.__value)},m(t,n){i(t,e,n),g(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&C(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,j(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,c,r,u,f,m,b,p,h,w,y,x,k,j,_,U,$,M,N,D,T,S,P,G,L=W(new Date(1e3*t[8][J]))+"",E=t[5](t[8][X])+"",I=t[5](t[8][Z])+"",O=t[5](t[8][q])+"",V=t[5](t[8][A])+"",B=Math.floor(t[8][q]/t[8][A]*100)+"",F=t[8][H]+"",R=t[5](t[8][Q])+""
return{c(){e=l("div"),s=d(L),n=v(),c=l("div"),r=d(t[2]),u=v(),f=l("div"),m=d(E),b=v(),p=l("div"),h=d(I),w=v(),y=l("div"),x=d(O),k=v(),j=l("div"),_=d(V),U=v(),$=l("div"),M=d(B),N=v(),D=l("div"),T=d(F),S=v(),P=l("div"),G=d(R),a(e,"class","svelte-1e4efyh"),a(c,"class","svelte-1e4efyh"),a(f,"class","svelte-1e4efyh"),a(p,"class","svelte-1e4efyh"),a(y,"class","svelte-1e4efyh"),a(j,"class","svelte-1e4efyh"),a($,"class","svelte-1e4efyh"),a(D,"class","svelte-1e4efyh"),a(P,"class","svelte-1e4efyh")},m(t,l){i(t,e,l),g(e,s),i(t,n,l),i(t,c,l),g(c,r),i(t,u,l),i(t,f,l),g(f,m),i(t,b,l),i(t,p,l),g(p,h),i(t,w,l),i(t,y,l),g(y,x),i(t,k,l),i(t,j,l),g(j,_),i(t,U,l),i(t,$,l),g($,M),i(t,N,l),i(t,D,l),g(D,T),i(t,S,l),i(t,P,l),g(P,G)},p(t,e){5&e&&L!==(L=W(new Date(1e3*t[8][J]))+"")&&C(s,L),4&e&&C(r,t[2]),5&e&&E!==(E=t[5](t[8][X])+"")&&C(m,E),5&e&&I!==(I=t[5](t[8][Z])+"")&&C(h,I),5&e&&O!==(O=t[5](t[8][q])+"")&&C(x,O),5&e&&V!==(V=t[5](t[8][A])+"")&&C(_,V),5&e&&B!==(B=Math.floor(t[8][q]/t[8][A]*100)+"")&&C(M,B),5&e&&F!==(F=t[8][H]+"")&&C(T,F),5&e&&R!==(R=t[5](t[8][Q])+"")&&C(G,R)},d(t){t&&(o(e),o(n),o(c),o(u),o(f),o(b),o(p),o(w),o(y),o(k),o(j),o(U),o($),o(N),o(D),o(S),o(P))}}}function ft(t){return{c:c,m:c,p:c,d:c}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ft,then:ot,catch:ct}
return O(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1e4efyh")},m(t,n){i(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){V(s,t=e,n)},i:c,o:c,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let bt=""
function pt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await F()
var e
s(0,(e=t.members,n=_(U(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[J]-t[J]))]))))),s(1,l=B(n).sort(r)),bt?s(2,a=bt):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),bt=a},function(t){return f(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=b(this),s(2,a),s(1,l)}]}class vt extends e{constructor(t){super(),s(this,t,pt,mt,n,{})}}const dt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return U(t?.members??{}).flatMap(dt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,yt=([,t,...e])=>[t,Number(e[H]),Number(e[q]),Number(e[X]),Number(e[A]),wt(e[J]),Number(e[Z]),Number(e[Q])]
function xt(t){return t.startsWith("{")?function(t){const e=M(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(yt)]}(t)}const kt=t=>!t.some(m),jt=([,...t])=>!t.some(nt),Ct=([,...t],[,...e])=>t[J]-e[J],_t=([t,...e])=>[t,Math.trunc(e[J]/86400),...e],Ut=(t,e)=>t.concat(e).filter(kt).filter(jt).sort(Ct).map(_t),$t=([t,e])=>`${t}|${e}`,Mt=t=>t.split("|"),Nt=([t,e])=>[t,Number(e)],Dt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Tt=([t,,...e])=>[t,...e]
const St=([t])=>t,Pt=([,...t])=>[...t]
function Gt(t){return _(lt(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(Pt)])))}async function Lt(t,e){const[s,n]=await st([F(),t.text()]),l=e?[]:ht(s),[a,i]=xt(n),c=function(t,e){const s=Ut(t,e)
return lt(s.map($t)).map(Mt).map(Nt).map(Dt(s)).map(Tt)}(l,i)
$(R,{lastUpdate:s.lastUpdate??a??0,members:Gt(c)})}function Et(t,e,s){const n=t.slice()
return n[21]=e[s],n}function It(t){let e,s,n,c=t[21]+""
return{c(){e=l("option"),s=d(c),e.__value=n=t[21],j(e,e.__value),a(e,"class","svelte-1itewb")},m(t,n){i(t,e,n),g(e,s)},p(t,l){8&l&&c!==(c=t[21]+"")&&C(s,c),8&l&&n!==(n=t[21])&&(e.__value=n,j(e,e.__value))},d(t){t&&o(e)}}}function Ot(t){let e,s,n,r,u,f,m,b,C,_,U,$,M,N,D,T,S,P,G,L,E,I,O,V,W,B,F,J,X,Z,q,A,H,Q,R,z,K=p(t[3]),Y=[]
for(let e=0;e<K.length;e+=1)Y[e]=It(Et(t,K,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),r=l("br"),u=v(),f=l("button"),f.textContent="Export CSV",m=l("br"),b=l("br"),C=l("br"),_=v(),U=l("input"),$=v(),M=l("button"),M.textContent="Import",N=v(),D=l("label"),T=l("input"),S=d("\n    Overwrite"),P=d("\n  (Warning: This can take a while on large files)"),G=l("br"),L=l("br"),E=l("br"),I=v(),O=l("button"),V=d("Purge"),B=d("\n  data before\n  "),F=l("input"),J=l("br"),X=l("br"),Z=v(),q=l("button"),A=d("Purge"),H=d("\n  username\n  "),Q=l("select")
for(let t=0;t<Y.length;t+=1)Y[t].c()
a(s,"type","button"),a(s,"class","svelte-1itewb"),a(n,"class","svelte-1itewb"),a(r,"class","svelte-1itewb"),a(f,"type","button"),a(f,"class","svelte-1itewb"),a(m,"class","svelte-1itewb"),a(b,"class","svelte-1itewb"),a(C,"class","svelte-1itewb"),a(U,"accept",".csv, .json, .txt"),a(U,"type","file"),a(U,"class","svelte-1itewb"),a(M,"type","button"),a(M,"class","svelte-1itewb"),a(T,"type","checkbox"),a(T,"class","svelte-1itewb"),a(D,"class","svelte-1itewb"),a(G,"class","svelte-1itewb"),a(L,"class","svelte-1itewb"),a(E,"class","svelte-1itewb"),O.disabled=W=!t[0],a(O,"type","button"),a(O,"class","svelte-1itewb"),a(F,"type","date"),a(F,"class","svelte-1itewb"),a(J,"class","svelte-1itewb"),a(X,"class","svelte-1itewb"),q.disabled=t[5],a(q,"type","button"),a(q,"class","svelte-1itewb"),Q.disabled=t[5],a(Q,"class","svelte-1itewb"),void 0===t[4]&&h((()=>t[17].call(Q))),a(e,"class","svelte-1itewb")},m(l,a){i(l,e,a),g(e,s),g(e,n),g(e,r),g(e,u),g(e,f),g(e,m),g(e,b),g(e,C),g(e,_),g(e,U),t[12](U),g(e,$),g(e,M),g(e,N),g(e,D),g(D,T),T.checked=t[2],g(D,S),g(e,P),g(e,G),g(e,L),g(e,E),g(e,I),g(e,O),g(O,V),g(e,B),g(e,F),j(F,t[0]),g(e,J),g(e,X),g(e,Z),g(e,q),g(q,A),g(e,H),g(e,Q)
for(let t=0;t<Y.length;t+=1)Y[t]&&Y[t].m(Q,null)
w(Q,t[4],!0),R||(z=[y(s,"click",t[6]),y(f,"click",t[7]),y(U,"change",t[8]),y(M,"click",t[9]),y(T,"change",t[13]),y(T,"change",t[14]),y(O,"click",t[10]),y(F,"input",t[15]),y(F,"change",t[16]),y(q,"click",t[11]),y(Q,"change",t[17]),y(Q,"change",t[18])],R=!0)},p(t,[e]){if(4&e&&(T.checked=t[2]),1&e&&W!==(W=!t[0])&&(O.disabled=W),1&e&&j(F,t[0]),32&e&&(q.disabled=t[5]),8&e){let s
for(K=p(t[3]),s=0;s<K.length;s+=1){const n=Et(t,K,s)
Y[s]?Y[s].p(n,e):(Y[s]=It(n),Y[s].c(),Y[s].m(Q,null))}for(;s<Y.length;s+=1)Y[s].d(1)
Y.length=K.length}32&e&&(Q.disabled=t[5]),24&e&&w(Q,t[4])},i:c,o:c,d(s){s&&o(e),t[12](null),x(Y,s),R=!1,k(z)}}}function Vt(t,e,s){let n,l=0,a=0,i="",c=[],o="",r=1
!async function(){s(3,c=await Y()),c.length&&(s(5,r=0),s(4,[o]=c,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=i&&Date.parse(i)/1e3)},[i,l,a,c,o,r,function(){u("Utils","exportJson"),z(T,"application/json")},function(){u("Utils","exportCsv"),z(et,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Lt(t,a)},function(){u("Utils","importButton"),N(l)},function(){u("Utils","datePurge"),s(0,i=""),K(n)},async function(){u("Utils","userPurge"),s(5,r=1),await tt(o),s(3,c=c.filter((t=>t!==o))),c.length&&(s(5,r=0),s(4,[o]=c,o))},function(t){D[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){i=this.value,s(0,i)},()=>{u("Utils","purgeDateChange")},function(){o=b(this),s(4,o),s(3,c)},()=>{u("Utils","handleChange")}]}class Wt extends e{constructor(t){super(),s(this,t,Vt,Ot,n,{})}}function Bt(t){let e,s
return e=new I({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){S(e.$$.fragment)},m(t,n){P(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function Ft(t,e,s){let{visible:n=!0}=e
const l=[{component:vt,label:"Guild Tracker"},{component:Wt,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}var Jt=class extends e{constructor(t){super(),s(this,t,Ft,Bt,n,{visible:0})}}
const Xt={visible:!0}
let Zt=0
function qt(){Zt=t(Xt,Zt,Jt)}export{qt as default}
//# sourceMappingURL=guildTracker-Z6ozF-Xa.js.map
