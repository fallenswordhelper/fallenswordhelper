import{i as t}from"./instantiate-880b172e.js"
import{S as e,L as s,M as n,N as l,P as a,R as i,Y as c,Z as o,bq as r,n as u,aY as f,cw as m,a3 as p,O as b,a1 as d,Q as v,T as h,U as g,W as w,b0 as y,_ as x,V as k,a2 as j,f as C,C as _,aO as $,ax as U,cd as M,ae as N,bf as T,bg as D,ba as S,bd as L,bh as P}from"./calfSystem-34913441.js"
import{M as E}from"./ModalTabbed-bae8e662.js"
import{h as G,u as O}from"./await_block-d58cecee.js"
import{e as I}from"./each-6f7f5a14.js"
import{f as V}from"./formatUtcDateTime-1099acf4.js"
import{k as W}from"./keys-ae03eaa2.js"
import{g as Y,u as Z,l as q,v as F,c as J,m as X,a as A,b as B,f as K,d as Q,p as R,r as z,e as H,h as tt}from"./utils-871680a6.js"
import{a as et}from"./all-414e0607.js"
import{n as st}from"./numberIsNaN-a40c3bbb.js"
import{u as nt}from"./uniq-a7375dfa.js"
import{s as lt}from"./idb-ec5d6344.js"
import"./ModalTitled-945b0136.js"
import"./Modal-108b3dd4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./guildMembers-3d3812de.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function it(t,e,s){const n=t.slice()
return n[11]=e[s],n}function ct(t){return{c:c,m:c,p:c,d:c}}function ot(t){let e,s,n,c,r,u,f,m,p,k,j,C,_,$,U,M,N,T,D,S,L,P,E,G,O=I(t[1]),V=[]
for(let e=0;e<O.length;e+=1)V[e]=rt(it(t,O,e))
let W=I(t[0]?.[t[2]]??[]),Y=[]
for(let e=0;e<W.length;e+=1)Y[e]=ut(at(t,W,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=b(),c=l("div"),r=d("Member\n        "),u=l("select")
for(let t=0;t<V.length;t+=1)V[t].c()
f=b(),m=l("div"),m.textContent="Level",p=b(),k=l("div"),k.textContent="VL",j=b(),C=l("div"),C.textContent="Stam",_=b(),$=l("div"),$.textContent="Max Stam",U=b(),M=l("div"),M.textContent="Stam %",N=b(),T=l("div"),T.textContent="Last Activity (Days)",D=b(),S=l("div"),S.textContent="GXP",L=b(),P=l("div")
for(let t=0;t<Y.length;t+=1)Y[t].c()
a(u,"class","svelte-1e4efyh"),void 0===t[2]&&v((()=>t[6].call(u))),a(e,"class","grid head svelte-1e4efyh"),a(P,"class","grid items svelte-1e4efyh")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,c),h(c,r),h(c,u)
for(let t=0;t<V.length;t+=1)V[t]&&V[t].m(u,null)
g(u,t[2],!0),h(e,f),h(e,m),h(e,p),h(e,k),h(e,j),h(e,C),h(e,_),h(e,$),h(e,U),h(e,M),h(e,N),h(e,T),h(e,D),h(e,S),i(l,L,a),i(l,P,a)
for(let t=0;t<Y.length;t+=1)Y[t]&&Y[t].m(P,null)
E||(G=[w(u,"change",t[6]),w(u,"change",t[4])],E=!0)},p(t,e){if(2&e){let s
for(O=I(t[1]),s=0;s<O.length;s+=1){const n=it(t,O,s)
V[s]?V[s].p(n,e):(V[s]=rt(n),V[s].c(),V[s].m(u,null))}for(;s<V.length;s+=1)V[s].d(1)
V.length=O.length}if(6&e&&g(u,t[2]),37&e){let s
for(W=I(t[0]?.[t[2]]??[]),s=0;s<W.length;s+=1){const n=at(t,W,s)
Y[s]?Y[s].p(n,e):(Y[s]=ut(n),Y[s].c(),Y[s].m(P,null))}for(;s<Y.length;s+=1)Y[s].d(1)
Y.length=W.length}},d(t){t&&(o(e),o(L),o(P)),y(V,t),y(Y,t),E=!1,x(G)}}}function rt(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=d(a),e.__value=n=t[11],k(e,e.__value)},m(t,n){i(t,e,n),h(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&j(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,c,r,u,f,m,p,v,g,w,y,x,k,C,_,$,U,M,N,T,D,S,L,P,E=V(new Date(1e3*t[8][Z]))+"",G=t[5](t[8][q])+"",O=t[5](t[8][F])+"",I=t[5](t[8][J])+"",W=t[5](t[8][X])+"",Y=Math.floor(t[8][J]/t[8][X]*100)+"",K=t[8][A]+"",Q=t[5](t[8][B])+""
return{c(){e=l("div"),s=d(E),n=b(),c=l("div"),r=d(t[2]),u=b(),f=l("div"),m=d(G),p=b(),v=l("div"),g=d(O),w=b(),y=l("div"),x=d(I),k=b(),C=l("div"),_=d(W),$=b(),U=l("div"),M=d(Y),N=b(),T=l("div"),D=d(K),S=b(),L=l("div"),P=d(Q),a(e,"class","svelte-1e4efyh"),a(c,"class","svelte-1e4efyh"),a(f,"class","svelte-1e4efyh"),a(v,"class","svelte-1e4efyh"),a(y,"class","svelte-1e4efyh"),a(C,"class","svelte-1e4efyh"),a(U,"class","svelte-1e4efyh"),a(T,"class","svelte-1e4efyh"),a(L,"class","svelte-1e4efyh")},m(t,l){i(t,e,l),h(e,s),i(t,n,l),i(t,c,l),h(c,r),i(t,u,l),i(t,f,l),h(f,m),i(t,p,l),i(t,v,l),h(v,g),i(t,w,l),i(t,y,l),h(y,x),i(t,k,l),i(t,C,l),h(C,_),i(t,$,l),i(t,U,l),h(U,M),i(t,N,l),i(t,T,l),h(T,D),i(t,S,l),i(t,L,l),h(L,P)},p(t,e){5&e&&E!==(E=V(new Date(1e3*t[8][Z]))+"")&&j(s,E),4&e&&j(r,t[2]),5&e&&G!==(G=t[5](t[8][q])+"")&&j(m,G),5&e&&O!==(O=t[5](t[8][F])+"")&&j(g,O),5&e&&I!==(I=t[5](t[8][J])+"")&&j(x,I),5&e&&W!==(W=t[5](t[8][X])+"")&&j(_,W),5&e&&Y!==(Y=Math.floor(t[8][J]/t[8][X]*100)+"")&&j(M,Y),5&e&&K!==(K=t[8][A]+"")&&j(D,K),5&e&&Q!==(Q=t[5](t[8][B])+"")&&j(P,Q)},d(t){t&&(o(e),o(n),o(c),o(u),o(f),o(p),o(v),o(w),o(y),o(k),o(C),o($),o(U),o(N),o(T),o(S),o(L))}}}function ft(t){return{c:c,m:c,p:c,d:c}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ft,then:ot,catch:ct}
return G(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1e4efyh")},m(t,n){i(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){O(s,t=e,n)},i:c,o:c,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let pt=""
function bt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await Y()
var e
s(0,(e=t.members,n=C(_(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[Z]-t[Z]))]))))),s(1,l=W(n).sort(r)),pt?s(2,a=pt):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),pt=a},function(t){return f(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=p(this),s(2,a),s(1,l)}]}class dt extends e{constructor(t){super(),s(this,t,bt,mt,n,{})}}const vt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return _(t?.members??{}).flatMap(vt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,yt=([,t,...e])=>[t,Number(e[A]),Number(e[J]),Number(e[q]),Number(e[X]),wt(e[Z]),Number(e[F]),Number(e[B])]
function xt(t){return t.startsWith("{")?function(t){const e=$(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(yt)]}(t)}const kt=t=>!t.some(m),jt=([,...t])=>!t.some(st),Ct=([,...t],[,...e])=>t[Z]-e[Z],_t=([t,...e])=>[t,Math.trunc(e[Z]/86400),...e],$t=(t,e)=>t.concat(e).filter(kt).filter(jt).sort(Ct).map(_t),Ut=([t,e])=>`${t}|${e}`,Mt=t=>t.split("|"),Nt=([t,e])=>[t,Number(e)],Tt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Dt=([t,,...e])=>[t,...e]
const St=([t])=>t,Lt=([,...t])=>[...t]
function Pt(t){return C(nt(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(Lt)])))}async function Et(t,e){const[s,n]=await et([Y(),t.text()]),l=e?[]:ht(s),[a,i]=xt(n),c=function(t,e){const s=$t(t,e)
return nt(s.map(Ut)).map(Mt).map(Nt).map(Tt(s)).map(Dt)}(l,i)
lt(K,{lastUpdate:s.lastUpdate??a??0,members:Pt(c)})}function Gt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Ot(t){let e,s,n,c=t[21]+""
return{c(){e=l("option"),s=d(c),e.__value=n=t[21],k(e,e.__value),a(e,"class","svelte-1itewb")},m(t,n){i(t,e,n),h(e,s)},p(t,l){8&l&&c!==(c=t[21]+"")&&j(s,c),8&l&&n!==(n=t[21])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function It(t){let e,s,n,r,u,f,m,p,j,C,_,$,U,M,N,T,D,S,L,P,E,G,O,V,W,Y,Z,q,F,J,X,A,B,K,Q,R,z=I(t[3]),H=[]
for(let e=0;e<z.length;e+=1)H[e]=Ot(Gt(t,z,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),r=l("br"),u=b(),f=l("button"),f.textContent="Export CSV",m=l("br"),p=l("br"),j=l("br"),C=b(),_=l("input"),$=b(),U=l("button"),U.textContent="Import",M=b(),N=l("label"),T=l("input"),D=d("\n    Overwrite"),S=d("\n  (Warning: This can take a while on large files)"),L=l("br"),P=l("br"),E=l("br"),G=b(),O=l("button"),V=d("Purge"),Y=d("\n  data before\n  "),Z=l("input"),q=l("br"),F=l("br"),J=b(),X=l("button"),A=d("Purge"),B=d("\n  username\n  "),K=l("select")
for(let t=0;t<H.length;t+=1)H[t].c()
a(s,"type","button"),a(s,"class","svelte-1itewb"),a(n,"class","svelte-1itewb"),a(r,"class","svelte-1itewb"),a(f,"type","button"),a(f,"class","svelte-1itewb"),a(m,"class","svelte-1itewb"),a(p,"class","svelte-1itewb"),a(j,"class","svelte-1itewb"),a(_,"accept",".csv, .json, .txt"),a(_,"type","file"),a(_,"class","svelte-1itewb"),a(U,"type","button"),a(U,"class","svelte-1itewb"),a(T,"type","checkbox"),a(T,"class","svelte-1itewb"),a(N,"class","svelte-1itewb"),a(L,"class","svelte-1itewb"),a(P,"class","svelte-1itewb"),a(E,"class","svelte-1itewb"),O.disabled=W=!t[0],a(O,"type","button"),a(O,"class","svelte-1itewb"),a(Z,"type","date"),a(Z,"class","svelte-1itewb"),a(q,"class","svelte-1itewb"),a(F,"class","svelte-1itewb"),X.disabled=t[5],a(X,"type","button"),a(X,"class","svelte-1itewb"),K.disabled=t[5],a(K,"class","svelte-1itewb"),void 0===t[4]&&v((()=>t[17].call(K))),a(e,"class","svelte-1itewb")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,r),h(e,u),h(e,f),h(e,m),h(e,p),h(e,j),h(e,C),h(e,_),t[12](_),h(e,$),h(e,U),h(e,M),h(e,N),h(N,T),T.checked=t[2],h(N,D),h(e,S),h(e,L),h(e,P),h(e,E),h(e,G),h(e,O),h(O,V),h(e,Y),h(e,Z),k(Z,t[0]),h(e,q),h(e,F),h(e,J),h(e,X),h(X,A),h(e,B),h(e,K)
for(let t=0;t<H.length;t+=1)H[t]&&H[t].m(K,null)
g(K,t[4],!0),Q||(R=[w(s,"click",t[6]),w(f,"click",t[7]),w(_,"change",t[8]),w(U,"click",t[9]),w(T,"change",t[13]),w(T,"change",t[14]),w(O,"click",t[10]),w(Z,"input",t[15]),w(Z,"change",t[16]),w(X,"click",t[11]),w(K,"change",t[17]),w(K,"change",t[18])],Q=!0)},p(t,[e]){if(4&e&&(T.checked=t[2]),1&e&&W!==(W=!t[0])&&(O.disabled=W),1&e&&k(Z,t[0]),32&e&&(X.disabled=t[5]),8&e){let s
for(z=I(t[3]),s=0;s<z.length;s+=1){const n=Gt(t,z,s)
H[s]?H[s].p(n,e):(H[s]=Ot(n),H[s].c(),H[s].m(K,null))}for(;s<H.length;s+=1)H[s].d(1)
H.length=z.length}32&e&&(K.disabled=t[5]),24&e&&g(K,t[4])},i:c,o:c,d(s){s&&o(e),t[12](null),y(H,s),Q=!1,x(R)}}}function Vt(t,e,s){let n,l=0,a=0,i="",c=[],o="",r=1
!async function(){s(3,c=await z()),c.length&&(s(5,r=0),s(4,[o]=c,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=i&&Date.parse(i)/1e3)},[i,l,a,c,o,r,function(){u("Utils","exportJson"),Q(N,"application/json")},function(){u("Utils","exportCsv"),Q(tt,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){u("Utils","importButton"),U(l)},function(){u("Utils","datePurge"),s(0,i=""),R(n)},async function(){u("Utils","userPurge"),s(5,r=1),await H(o),s(3,c=c.filter((t=>t!==o))),c.length&&(s(5,r=0),s(4,[o]=c,o))},function(t){M[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){i=this.value,s(0,i)},()=>{u("Utils","purgeDateChange")},function(){o=p(this),s(4,o),s(3,c)},()=>{u("Utils","handleChange")}]}class Wt extends e{constructor(t){super(),s(this,t,Vt,It,n,{})}}function Yt(t){let e,s
return e=new E({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){T(e.$$.fragment)},m(t,n){D(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Zt(t,e,s){let{visible:n=!0}=e
const l=[{component:dt,label:"Guild Tracker"},{component:Wt,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}var qt=class extends e{constructor(t){super(),s(this,t,Zt,Yt,n,{visible:0})}}
const Ft={visible:!0}
let Jt=0
function Xt(){Jt=t(Ft,Jt,qt)}export{Xt as default}
//# sourceMappingURL=guildTracker-58f8eb81.js.map
