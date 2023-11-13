import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as e,J as s,K as n,L as l,N as a,P as i,W as c,X as o,bk as r,s as u,aU as f,cs as m,a1 as p,M as b,_ as v,O as d,Q as h,R as g,U as w,aY as y,Y as x,T as k,a0 as j,f as C,C as _,aK as $,av as U,c8 as M,ac as N,b9 as T,ba as D,b4 as S,b7 as L,bb as P}from"./calfSystem-rn9Rc_nF.js"
import{M as E}from"./ModalTabbed-hWwrKhGQ.js"
import{h as G,u as Y}from"./await_block-WHQS3VDb.js"
import{e as I}from"./each-FVHw1i8T.js"
import{f as J}from"./formatUtcDateTime-nEhiH8fM.js"
import{k as O}from"./keys-fO1nQfVO.js"
import{g as W,u as F,l as K,v as V,c as X,m as Z,a as q,b as A,f as B,d as Q,p as R,r as z,e as H,h as tt}from"./utils-kRntK1xM.js"
import{a as et}from"./all-TTLWag-d.js"
import{n as st}from"./numberIsNaN--k2kVli9.js"
import{u as nt}from"./uniq-rEURYuE3.js"
import{s as lt}from"./idb-1b6_RJN1.js"
import"./ModalTitled-ntPHZ7t4.js"
import"./Modal-NJ18ALLL.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
import"./guildMembers-q4YutUVF.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function it(t,e,s){const n=t.slice()
return n[11]=e[s],n}function ct(t){return{c:c,m:c,p:c,d:c}}function ot(t){let e,s,n,c,r,u,f,m,p,k,j,C,_,$,U,M,N,T,D,S,L,P,E,G,Y=I(t[1]),J=[]
for(let e=0;e<Y.length;e+=1)J[e]=rt(it(t,Y,e))
let O=I(t[0]?.[t[2]]??[]),W=[]
for(let e=0;e<O.length;e+=1)W[e]=ut(at(t,O,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=b(),c=l("div"),r=v("Member\n        "),u=l("select")
for(let t=0;t<J.length;t+=1)J[t].c()
f=b(),m=l("div"),m.textContent="Level",p=b(),k=l("div"),k.textContent="VL",j=b(),C=l("div"),C.textContent="Stam",_=b(),$=l("div"),$.textContent="Max Stam",U=b(),M=l("div"),M.textContent="Stam %",N=b(),T=l("div"),T.textContent="Last Activity (Days)",D=b(),S=l("div"),S.textContent="GXP",L=b(),P=l("div")
for(let t=0;t<W.length;t+=1)W[t].c()
a(u,"class","svelte-1e4efyh"),void 0===t[2]&&d((()=>t[6].call(u))),a(e,"class","grid head svelte-1e4efyh"),a(P,"class","grid items svelte-1e4efyh")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,c),h(c,r),h(c,u)
for(let t=0;t<J.length;t+=1)J[t]&&J[t].m(u,null)
g(u,t[2],!0),h(e,f),h(e,m),h(e,p),h(e,k),h(e,j),h(e,C),h(e,_),h(e,$),h(e,U),h(e,M),h(e,N),h(e,T),h(e,D),h(e,S),i(l,L,a),i(l,P,a)
for(let t=0;t<W.length;t+=1)W[t]&&W[t].m(P,null)
E||(G=[w(u,"change",t[6]),w(u,"change",t[4])],E=!0)},p(t,e){if(2&e){let s
for(Y=I(t[1]),s=0;s<Y.length;s+=1){const n=it(t,Y,s)
J[s]?J[s].p(n,e):(J[s]=rt(n),J[s].c(),J[s].m(u,null))}for(;s<J.length;s+=1)J[s].d(1)
J.length=Y.length}if(6&e&&g(u,t[2]),37&e){let s
for(O=I(t[0]?.[t[2]]??[]),s=0;s<O.length;s+=1){const n=at(t,O,s)
W[s]?W[s].p(n,e):(W[s]=ut(n),W[s].c(),W[s].m(P,null))}for(;s<W.length;s+=1)W[s].d(1)
W.length=O.length}},d(t){t&&(o(e),o(L),o(P)),y(J,t),y(W,t),E=!1,x(G)}}}function rt(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=v(a),e.__value=n=t[11],k(e,e.__value)},m(t,n){i(t,e,n),h(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&j(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,c,r,u,f,m,p,d,g,w,y,x,k,C,_,$,U,M,N,T,D,S,L,P,E=J(new Date(1e3*t[8][F]))+"",G=t[5](t[8][K])+"",Y=t[5](t[8][V])+"",I=t[5](t[8][X])+"",O=t[5](t[8][Z])+"",W=Math.floor(t[8][X]/t[8][Z]*100)+"",B=t[8][q]+"",Q=t[5](t[8][A])+""
return{c(){e=l("div"),s=v(E),n=b(),c=l("div"),r=v(t[2]),u=b(),f=l("div"),m=v(G),p=b(),d=l("div"),g=v(Y),w=b(),y=l("div"),x=v(I),k=b(),C=l("div"),_=v(O),$=b(),U=l("div"),M=v(W),N=b(),T=l("div"),D=v(B),S=b(),L=l("div"),P=v(Q),a(e,"class","svelte-1e4efyh"),a(c,"class","svelte-1e4efyh"),a(f,"class","svelte-1e4efyh"),a(d,"class","svelte-1e4efyh"),a(y,"class","svelte-1e4efyh"),a(C,"class","svelte-1e4efyh"),a(U,"class","svelte-1e4efyh"),a(T,"class","svelte-1e4efyh"),a(L,"class","svelte-1e4efyh")},m(t,l){i(t,e,l),h(e,s),i(t,n,l),i(t,c,l),h(c,r),i(t,u,l),i(t,f,l),h(f,m),i(t,p,l),i(t,d,l),h(d,g),i(t,w,l),i(t,y,l),h(y,x),i(t,k,l),i(t,C,l),h(C,_),i(t,$,l),i(t,U,l),h(U,M),i(t,N,l),i(t,T,l),h(T,D),i(t,S,l),i(t,L,l),h(L,P)},p(t,e){5&e&&E!==(E=J(new Date(1e3*t[8][F]))+"")&&j(s,E),4&e&&j(r,t[2]),5&e&&G!==(G=t[5](t[8][K])+"")&&j(m,G),5&e&&Y!==(Y=t[5](t[8][V])+"")&&j(g,Y),5&e&&I!==(I=t[5](t[8][X])+"")&&j(x,I),5&e&&O!==(O=t[5](t[8][Z])+"")&&j(_,O),5&e&&W!==(W=Math.floor(t[8][X]/t[8][Z]*100)+"")&&j(M,W),5&e&&B!==(B=t[8][q]+"")&&j(D,B),5&e&&Q!==(Q=t[5](t[8][A])+"")&&j(P,Q)},d(t){t&&(o(e),o(n),o(c),o(u),o(f),o(p),o(d),o(w),o(y),o(k),o(C),o($),o(U),o(N),o(T),o(S),o(L))}}}function ft(t){return{c:c,m:c,p:c,d:c}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ft,then:ot,catch:ct}
return G(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1e4efyh")},m(t,n){i(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){Y(s,t=e,n)},i:c,o:c,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let pt=""
function bt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await W()
var e
s(0,(e=t.members,n=C(_(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[F]-t[F]))]))))),s(1,l=O(n).sort(r)),pt?s(2,a=pt):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),pt=a},function(t){return f(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=p(this),s(2,a),s(1,l)}]}class vt extends e{constructor(t){super(),s(this,t,bt,mt,n,{})}}const dt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return _(t?.members??{}).flatMap(dt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,yt=([,t,...e])=>[t,Number(e[q]),Number(e[X]),Number(e[K]),Number(e[Z]),wt(e[F]),Number(e[V]),Number(e[A])]
function xt(t){return t.startsWith("{")?function(t){const e=$(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(yt)]}(t)}const kt=t=>!t.some(m),jt=([,...t])=>!t.some(st),Ct=([,...t],[,...e])=>t[F]-e[F],_t=([t,...e])=>[t,Math.trunc(e[F]/86400),...e],$t=(t,e)=>t.concat(e).filter(kt).filter(jt).sort(Ct).map(_t),Ut=([t,e])=>`${t}|${e}`,Mt=t=>t.split("|"),Nt=([t,e])=>[t,Number(e)],Tt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Dt=([t,,...e])=>[t,...e]
const St=([t])=>t,Lt=([,...t])=>[...t]
function Pt(t){return C(nt(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(Lt)])))}async function Et(t,e){const[s,n]=await et([W(),t.text()]),l=e?[]:ht(s),[a,i]=xt(n),c=function(t,e){const s=$t(t,e)
return nt(s.map(Ut)).map(Mt).map(Nt).map(Tt(s)).map(Dt)}(l,i)
lt(B,{lastUpdate:s.lastUpdate??a??0,members:Pt(c)})}function Gt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Yt(t){let e,s,n,c=t[21]+""
return{c(){e=l("option"),s=v(c),e.__value=n=t[21],k(e,e.__value),a(e,"class","svelte-1itewb")},m(t,n){i(t,e,n),h(e,s)},p(t,l){8&l&&c!==(c=t[21]+"")&&j(s,c),8&l&&n!==(n=t[21])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function It(t){let e,s,n,r,u,f,m,p,j,C,_,$,U,M,N,T,D,S,L,P,E,G,Y,J,O,W,F,K,V,X,Z,q,A,B,Q,R,z=I(t[3]),H=[]
for(let e=0;e<z.length;e+=1)H[e]=Yt(Gt(t,z,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),r=l("br"),u=b(),f=l("button"),f.textContent="Export CSV",m=l("br"),p=l("br"),j=l("br"),C=b(),_=l("input"),$=b(),U=l("button"),U.textContent="Import",M=b(),N=l("label"),T=l("input"),D=v("\n    Overwrite"),S=v("\n  (Warning: This can take a while on large files)"),L=l("br"),P=l("br"),E=l("br"),G=b(),Y=l("button"),J=v("Purge"),W=v("\n  data before\n  "),F=l("input"),K=l("br"),V=l("br"),X=b(),Z=l("button"),q=v("Purge"),A=v("\n  username\n  "),B=l("select")
for(let t=0;t<H.length;t+=1)H[t].c()
a(s,"type","button"),a(s,"class","svelte-1itewb"),a(n,"class","svelte-1itewb"),a(r,"class","svelte-1itewb"),a(f,"type","button"),a(f,"class","svelte-1itewb"),a(m,"class","svelte-1itewb"),a(p,"class","svelte-1itewb"),a(j,"class","svelte-1itewb"),a(_,"accept",".csv, .json, .txt"),a(_,"type","file"),a(_,"class","svelte-1itewb"),a(U,"type","button"),a(U,"class","svelte-1itewb"),a(T,"type","checkbox"),a(T,"class","svelte-1itewb"),a(N,"class","svelte-1itewb"),a(L,"class","svelte-1itewb"),a(P,"class","svelte-1itewb"),a(E,"class","svelte-1itewb"),Y.disabled=O=!t[0],a(Y,"type","button"),a(Y,"class","svelte-1itewb"),a(F,"type","date"),a(F,"class","svelte-1itewb"),a(K,"class","svelte-1itewb"),a(V,"class","svelte-1itewb"),Z.disabled=t[5],a(Z,"type","button"),a(Z,"class","svelte-1itewb"),B.disabled=t[5],a(B,"class","svelte-1itewb"),void 0===t[4]&&d((()=>t[17].call(B))),a(e,"class","svelte-1itewb")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,r),h(e,u),h(e,f),h(e,m),h(e,p),h(e,j),h(e,C),h(e,_),t[12](_),h(e,$),h(e,U),h(e,M),h(e,N),h(N,T),T.checked=t[2],h(N,D),h(e,S),h(e,L),h(e,P),h(e,E),h(e,G),h(e,Y),h(Y,J),h(e,W),h(e,F),k(F,t[0]),h(e,K),h(e,V),h(e,X),h(e,Z),h(Z,q),h(e,A),h(e,B)
for(let t=0;t<H.length;t+=1)H[t]&&H[t].m(B,null)
g(B,t[4],!0),Q||(R=[w(s,"click",t[6]),w(f,"click",t[7]),w(_,"change",t[8]),w(U,"click",t[9]),w(T,"change",t[13]),w(T,"change",t[14]),w(Y,"click",t[10]),w(F,"input",t[15]),w(F,"change",t[16]),w(Z,"click",t[11]),w(B,"change",t[17]),w(B,"change",t[18])],Q=!0)},p(t,[e]){if(4&e&&(T.checked=t[2]),1&e&&O!==(O=!t[0])&&(Y.disabled=O),1&e&&k(F,t[0]),32&e&&(Z.disabled=t[5]),8&e){let s
for(z=I(t[3]),s=0;s<z.length;s+=1){const n=Gt(t,z,s)
H[s]?H[s].p(n,e):(H[s]=Yt(n),H[s].c(),H[s].m(B,null))}for(;s<H.length;s+=1)H[s].d(1)
H.length=z.length}32&e&&(B.disabled=t[5]),24&e&&g(B,t[4])},i:c,o:c,d(s){s&&o(e),t[12](null),y(H,s),Q=!1,x(R)}}}function Jt(t,e,s){let n,l=0,a=0,i="",c=[],o="",r=1
!async function(){s(3,c=await z()),c.length&&(s(5,r=0),s(4,[o]=c,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=i&&Date.parse(i)/1e3)},[i,l,a,c,o,r,function(){u("Utils","exportJson"),Q(N,"application/json")},function(){u("Utils","exportCsv"),Q(tt,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){u("Utils","importButton"),U(l)},function(){u("Utils","datePurge"),s(0,i=""),R(n)},async function(){u("Utils","userPurge"),s(5,r=1),await H(o),s(3,c=c.filter((t=>t!==o))),c.length&&(s(5,r=0),s(4,[o]=c,o))},function(t){M[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){i=this.value,s(0,i)},()=>{u("Utils","purgeDateChange")},function(){o=p(this),s(4,o),s(3,c)},()=>{u("Utils","handleChange")}]}class Ot extends e{constructor(t){super(),s(this,t,Jt,It,n,{})}}function Wt(t){let e,s
return e=new E({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){T(e.$$.fragment)},m(t,n){D(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ft(t,e,s){let{visible:n=!0}=e
const l=[{component:vt,label:"Guild Tracker"},{component:Ot,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}var Kt=class extends e{constructor(t){super(),s(this,t,Ft,Wt,n,{visible:0})}}
const Vt={visible:!0}
let Xt=0
function Zt(){Xt=t(Vt,Xt,Kt)}export{Zt as default}
//# sourceMappingURL=guildTracker-2YZD8uOa.js.map
