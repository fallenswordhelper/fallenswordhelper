import{i as t}from"./instantiate-880b172e.js"
import{S as e,K as s,L as n,M as l,O as a,Q as i,X as c,Y as o,bm as r,n as u,aW as f,ct as m,a2 as p,N as b,a0 as d,P as v,R as h,T as g,V as w,a_ as y,Z as x,U as k,a1 as j,f as C,C as _,aM as $,aw as U,ca as M,ad as N,bb as T,bc as D,b6 as S,b9 as P,bd as L}from"./calfSystem-929ac228.js"
import{M as E}from"./ModalTabbed-855e0ef1.js"
import{h as G,u as I}from"./await_block-1344c2da.js"
import{e as J}from"./each-bac91e63.js"
import{f as O}from"./formatUtcDateTime-1099acf4.js"
import{k as V}from"./keys-ae03eaa2.js"
import{g as W,u as Z,l as F,v as X,c as Y,m as q,a as A,b as B,f as K,d as Q,p as R,r as z,e as H,h as tt}from"./utils-5303e2d8.js"
import{a as et}from"./all-414e0607.js"
import{n as st}from"./numberIsNaN-a40c3bbb.js"
import{u as nt}from"./uniq-a9975ce0.js"
import{s as lt}from"./idb-8fd6b5d1.js"
import"./ModalTitled-77d1fd9a.js"
import"./Modal-b8a2fc24.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./guildMembers-ec6b013f.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function it(t,e,s){const n=t.slice()
return n[11]=e[s],n}function ct(t){return{c:c,m:c,p:c,d:c}}function ot(t){let e,s,n,c,r,u,f,m,p,k,j,C,_,$,U,M,N,T,D,S,P,L,E,G,I=J(t[1]),O=[]
for(let e=0;e<I.length;e+=1)O[e]=rt(it(t,I,e))
let V=J(t[0]?.[t[2]]??[]),W=[]
for(let e=0;e<V.length;e+=1)W[e]=ut(at(t,V,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=b(),c=l("div"),r=d("Member\n        "),u=l("select")
for(let t=0;t<O.length;t+=1)O[t].c()
f=b(),m=l("div"),m.textContent="Level",p=b(),k=l("div"),k.textContent="VL",j=b(),C=l("div"),C.textContent="Stam",_=b(),$=l("div"),$.textContent="Max Stam",U=b(),M=l("div"),M.textContent="Stam %",N=b(),T=l("div"),T.textContent="Last Activity (Days)",D=b(),S=l("div"),S.textContent="GXP",P=b(),L=l("div")
for(let t=0;t<W.length;t+=1)W[t].c()
a(u,"class","svelte-1e4efyh"),void 0===t[2]&&v((()=>t[6].call(u))),a(e,"class","grid head svelte-1e4efyh"),a(L,"class","grid items svelte-1e4efyh")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,c),h(c,r),h(c,u)
for(let t=0;t<O.length;t+=1)O[t]&&O[t].m(u,null)
g(u,t[2],!0),h(e,f),h(e,m),h(e,p),h(e,k),h(e,j),h(e,C),h(e,_),h(e,$),h(e,U),h(e,M),h(e,N),h(e,T),h(e,D),h(e,S),i(l,P,a),i(l,L,a)
for(let t=0;t<W.length;t+=1)W[t]&&W[t].m(L,null)
E||(G=[w(u,"change",t[6]),w(u,"change",t[4])],E=!0)},p(t,e){if(2&e){let s
for(I=J(t[1]),s=0;s<I.length;s+=1){const n=it(t,I,s)
O[s]?O[s].p(n,e):(O[s]=rt(n),O[s].c(),O[s].m(u,null))}for(;s<O.length;s+=1)O[s].d(1)
O.length=I.length}if(6&e&&g(u,t[2]),37&e){let s
for(V=J(t[0]?.[t[2]]??[]),s=0;s<V.length;s+=1){const n=at(t,V,s)
W[s]?W[s].p(n,e):(W[s]=ut(n),W[s].c(),W[s].m(L,null))}for(;s<W.length;s+=1)W[s].d(1)
W.length=V.length}},d(t){t&&(o(e),o(P),o(L)),y(O,t),y(W,t),E=!1,x(G)}}}function rt(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=d(a),e.__value=n=t[11],k(e,e.__value)},m(t,n){i(t,e,n),h(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&j(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,c,r,u,f,m,p,v,g,w,y,x,k,C,_,$,U,M,N,T,D,S,P,L,E=O(new Date(1e3*t[8][Z]))+"",G=t[5](t[8][F])+"",I=t[5](t[8][X])+"",J=t[5](t[8][Y])+"",V=t[5](t[8][q])+"",W=Math.floor(t[8][Y]/t[8][q]*100)+"",K=t[8][A]+"",Q=t[5](t[8][B])+""
return{c(){e=l("div"),s=d(E),n=b(),c=l("div"),r=d(t[2]),u=b(),f=l("div"),m=d(G),p=b(),v=l("div"),g=d(I),w=b(),y=l("div"),x=d(J),k=b(),C=l("div"),_=d(V),$=b(),U=l("div"),M=d(W),N=b(),T=l("div"),D=d(K),S=b(),P=l("div"),L=d(Q),a(e,"class","svelte-1e4efyh"),a(c,"class","svelte-1e4efyh"),a(f,"class","svelte-1e4efyh"),a(v,"class","svelte-1e4efyh"),a(y,"class","svelte-1e4efyh"),a(C,"class","svelte-1e4efyh"),a(U,"class","svelte-1e4efyh"),a(T,"class","svelte-1e4efyh"),a(P,"class","svelte-1e4efyh")},m(t,l){i(t,e,l),h(e,s),i(t,n,l),i(t,c,l),h(c,r),i(t,u,l),i(t,f,l),h(f,m),i(t,p,l),i(t,v,l),h(v,g),i(t,w,l),i(t,y,l),h(y,x),i(t,k,l),i(t,C,l),h(C,_),i(t,$,l),i(t,U,l),h(U,M),i(t,N,l),i(t,T,l),h(T,D),i(t,S,l),i(t,P,l),h(P,L)},p(t,e){5&e&&E!==(E=O(new Date(1e3*t[8][Z]))+"")&&j(s,E),4&e&&j(r,t[2]),5&e&&G!==(G=t[5](t[8][F])+"")&&j(m,G),5&e&&I!==(I=t[5](t[8][X])+"")&&j(g,I),5&e&&J!==(J=t[5](t[8][Y])+"")&&j(x,J),5&e&&V!==(V=t[5](t[8][q])+"")&&j(_,V),5&e&&W!==(W=Math.floor(t[8][Y]/t[8][q]*100)+"")&&j(M,W),5&e&&K!==(K=t[8][A]+"")&&j(D,K),5&e&&Q!==(Q=t[5](t[8][B])+"")&&j(L,Q)},d(t){t&&(o(e),o(n),o(c),o(u),o(f),o(p),o(v),o(w),o(y),o(k),o(C),o($),o(U),o(N),o(T),o(S),o(P))}}}function ft(t){return{c:c,m:c,p:c,d:c}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ft,then:ot,catch:ct}
return G(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1e4efyh")},m(t,n){i(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){I(s,t=e,n)},i:c,o:c,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let pt=""
function bt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await W()
var e
s(0,(e=t.members,n=C(_(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[Z]-t[Z]))]))))),s(1,l=V(n).sort(r)),pt?s(2,a=pt):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),pt=a},function(t){return f(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=p(this),s(2,a),s(1,l)}]}class dt extends e{constructor(t){super(),s(this,t,bt,mt,n,{})}}const vt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return _(t?.members??{}).flatMap(vt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,yt=([,t,...e])=>[t,Number(e[A]),Number(e[Y]),Number(e[F]),Number(e[q]),wt(e[Z]),Number(e[X]),Number(e[B])]
function xt(t){return t.startsWith("{")?function(t){const e=$(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(yt)]}(t)}const kt=t=>!t.some(m),jt=([,...t])=>!t.some(st),Ct=([,...t],[,...e])=>t[Z]-e[Z],_t=([t,...e])=>[t,Math.trunc(e[Z]/86400),...e],$t=(t,e)=>t.concat(e).filter(kt).filter(jt).sort(Ct).map(_t),Ut=([t,e])=>`${t}|${e}`,Mt=t=>t.split("|"),Nt=([t,e])=>[t,Number(e)],Tt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Dt=([t,,...e])=>[t,...e]
const St=([t])=>t,Pt=([,...t])=>[...t]
function Lt(t){return C(nt(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(Pt)])))}async function Et(t,e){const[s,n]=await et([W(),t.text()]),l=e?[]:ht(s),[a,i]=xt(n),c=function(t,e){const s=$t(t,e)
return nt(s.map(Ut)).map(Mt).map(Nt).map(Tt(s)).map(Dt)}(l,i)
lt(K,{lastUpdate:s.lastUpdate??a??0,members:Lt(c)})}function Gt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function It(t){let e,s,n,c=t[21]+""
return{c(){e=l("option"),s=d(c),e.__value=n=t[21],k(e,e.__value),a(e,"class","svelte-1itewb")},m(t,n){i(t,e,n),h(e,s)},p(t,l){8&l&&c!==(c=t[21]+"")&&j(s,c),8&l&&n!==(n=t[21])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function Jt(t){let e,s,n,r,u,f,m,p,j,C,_,$,U,M,N,T,D,S,P,L,E,G,I,O,V,W,Z,F,X,Y,q,A,B,K,Q,R,z=J(t[3]),H=[]
for(let e=0;e<z.length;e+=1)H[e]=It(Gt(t,z,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),r=l("br"),u=b(),f=l("button"),f.textContent="Export CSV",m=l("br"),p=l("br"),j=l("br"),C=b(),_=l("input"),$=b(),U=l("button"),U.textContent="Import",M=b(),N=l("label"),T=l("input"),D=d("\n    Overwrite"),S=d("\n  (Warning: This can take a while on large files)"),P=l("br"),L=l("br"),E=l("br"),G=b(),I=l("button"),O=d("Purge"),W=d("\n  data before\n  "),Z=l("input"),F=l("br"),X=l("br"),Y=b(),q=l("button"),A=d("Purge"),B=d("\n  username\n  "),K=l("select")
for(let t=0;t<H.length;t+=1)H[t].c()
a(s,"type","button"),a(s,"class","svelte-1itewb"),a(n,"class","svelte-1itewb"),a(r,"class","svelte-1itewb"),a(f,"type","button"),a(f,"class","svelte-1itewb"),a(m,"class","svelte-1itewb"),a(p,"class","svelte-1itewb"),a(j,"class","svelte-1itewb"),a(_,"accept",".csv, .json, .txt"),a(_,"type","file"),a(_,"class","svelte-1itewb"),a(U,"type","button"),a(U,"class","svelte-1itewb"),a(T,"type","checkbox"),a(T,"class","svelte-1itewb"),a(N,"class","svelte-1itewb"),a(P,"class","svelte-1itewb"),a(L,"class","svelte-1itewb"),a(E,"class","svelte-1itewb"),I.disabled=V=!t[0],a(I,"type","button"),a(I,"class","svelte-1itewb"),a(Z,"type","date"),a(Z,"class","svelte-1itewb"),a(F,"class","svelte-1itewb"),a(X,"class","svelte-1itewb"),q.disabled=t[5],a(q,"type","button"),a(q,"class","svelte-1itewb"),K.disabled=t[5],a(K,"class","svelte-1itewb"),void 0===t[4]&&v((()=>t[17].call(K))),a(e,"class","svelte-1itewb")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,r),h(e,u),h(e,f),h(e,m),h(e,p),h(e,j),h(e,C),h(e,_),t[12](_),h(e,$),h(e,U),h(e,M),h(e,N),h(N,T),T.checked=t[2],h(N,D),h(e,S),h(e,P),h(e,L),h(e,E),h(e,G),h(e,I),h(I,O),h(e,W),h(e,Z),k(Z,t[0]),h(e,F),h(e,X),h(e,Y),h(e,q),h(q,A),h(e,B),h(e,K)
for(let t=0;t<H.length;t+=1)H[t]&&H[t].m(K,null)
g(K,t[4],!0),Q||(R=[w(s,"click",t[6]),w(f,"click",t[7]),w(_,"change",t[8]),w(U,"click",t[9]),w(T,"change",t[13]),w(T,"change",t[14]),w(I,"click",t[10]),w(Z,"input",t[15]),w(Z,"change",t[16]),w(q,"click",t[11]),w(K,"change",t[17]),w(K,"change",t[18])],Q=!0)},p(t,[e]){if(4&e&&(T.checked=t[2]),1&e&&V!==(V=!t[0])&&(I.disabled=V),1&e&&k(Z,t[0]),32&e&&(q.disabled=t[5]),8&e){let s
for(z=J(t[3]),s=0;s<z.length;s+=1){const n=Gt(t,z,s)
H[s]?H[s].p(n,e):(H[s]=It(n),H[s].c(),H[s].m(K,null))}for(;s<H.length;s+=1)H[s].d(1)
H.length=z.length}32&e&&(K.disabled=t[5]),24&e&&g(K,t[4])},i:c,o:c,d(s){s&&o(e),t[12](null),y(H,s),Q=!1,x(R)}}}function Ot(t,e,s){let n,l=0,a=0,i="",c=[],o="",r=1
!async function(){s(3,c=await z()),c.length&&(s(5,r=0),s(4,[o]=c,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=i&&Date.parse(i)/1e3)},[i,l,a,c,o,r,function(){u("Utils","exportJson"),Q(N,"application/json")},function(){u("Utils","exportCsv"),Q(tt,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){u("Utils","importButton"),U(l)},function(){u("Utils","datePurge"),s(0,i=""),R(n)},async function(){u("Utils","userPurge"),s(5,r=1),await H(o),s(3,c=c.filter((t=>t!==o))),c.length&&(s(5,r=0),s(4,[o]=c,o))},function(t){M[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){i=this.value,s(0,i)},()=>{u("Utils","purgeDateChange")},function(){o=p(this),s(4,o),s(3,c)},()=>{u("Utils","handleChange")}]}class Vt extends e{constructor(t){super(),s(this,t,Ot,Jt,n,{})}}function Wt(t){let e,s
return e=new E({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){T(e.$$.fragment)},m(t,n){D(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Zt(t,e,s){let{visible:n=!0}=e
const l=[{component:dt,label:"Guild Tracker"},{component:Vt,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}var Ft=class extends e{constructor(t){super(),s(this,t,Zt,Wt,n,{visible:0})}}
const Xt={visible:!0}
let Yt=0
function qt(){Yt=t(Xt,Yt,Ft)}export{qt as default}
//# sourceMappingURL=guildTracker-1eb6926e.js.map
