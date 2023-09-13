import{i as t}from"./instantiate-880b172e.js"
import{S as e,L as s,M as n,N as l,P as a,R as i,Y as c,Z as o,bq as r,n as u,aY as f,cw as m,a3 as p,O as b,a1 as v,Q as d,T as h,U as g,W as w,b0 as y,_ as x,V as k,a2 as j,f as C,C as _,aO as $,ax as U,cc as M,ae as D,bf as N,bg as T,ba as S,bd as L,bh as P}from"./calfSystem-2f15e074.js"
import{M as E}from"./ModalTabbed-bd6a56f6.js"
import{h as G,u as O}from"./await_block-d535654a.js"
import{e as Z}from"./each-d93fc3a2.js"
import{f as I}from"./formatUtcDateTime-1099acf4.js"
import{k as V}from"./keys-ae03eaa2.js"
import{g as W,u as q,l as F,v as J,c as X,m as Y,a as A,b as B,f as Q,d as R,p as z,r as H,e as K,h as tt}from"./utils-b4fa7dde.js"
import{a as et}from"./all-414e0607.js"
import{n as st}from"./numberIsNaN-a40c3bbb.js"
import{u as nt}from"./uniq-9cddbf0f.js"
import{s as lt}from"./idb-28aa7d4a.js"
import"./ModalTitled-4705b2f9.js"
import"./Modal-d504dd2a.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
import"./guildMembers-1ceac4c8.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function it(t,e,s){const n=t.slice()
return n[11]=e[s],n}function ct(t){return{c:c,m:c,p:c,d:c}}function ot(t){let e,s,n,c,r,u,f,m,p,k,j,C,_,$,U,M,D,N,T,S,L,P,E,G,O=Z(t[1]),I=[]
for(let e=0;e<O.length;e+=1)I[e]=rt(it(t,O,e))
let V=Z(t[0]?.[t[2]]??[]),W=[]
for(let e=0;e<V.length;e+=1)W[e]=ut(at(t,V,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=b(),c=l("div"),r=v("Member\n        "),u=l("select")
for(let t=0;t<I.length;t+=1)I[t].c()
f=b(),m=l("div"),m.textContent="Level",p=b(),k=l("div"),k.textContent="VL",j=b(),C=l("div"),C.textContent="Stam",_=b(),$=l("div"),$.textContent="Max Stam",U=b(),M=l("div"),M.textContent="Stam %",D=b(),N=l("div"),N.textContent="Last Activity (Days)",T=b(),S=l("div"),S.textContent="GXP",L=b(),P=l("div")
for(let t=0;t<W.length;t+=1)W[t].c()
a(u,"class","svelte-1e4efyh"),void 0===t[2]&&d((()=>t[6].call(u))),a(e,"class","grid head svelte-1e4efyh"),a(P,"class","grid items svelte-1e4efyh")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,c),h(c,r),h(c,u)
for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(u,null)
g(u,t[2],!0),h(e,f),h(e,m),h(e,p),h(e,k),h(e,j),h(e,C),h(e,_),h(e,$),h(e,U),h(e,M),h(e,D),h(e,N),h(e,T),h(e,S),i(l,L,a),i(l,P,a)
for(let t=0;t<W.length;t+=1)W[t]&&W[t].m(P,null)
E||(G=[w(u,"change",t[6]),w(u,"change",t[4])],E=!0)},p(t,e){if(2&e){let s
for(O=Z(t[1]),s=0;s<O.length;s+=1){const n=it(t,O,s)
I[s]?I[s].p(n,e):(I[s]=rt(n),I[s].c(),I[s].m(u,null))}for(;s<I.length;s+=1)I[s].d(1)
I.length=O.length}if(6&e&&g(u,t[2]),37&e){let s
for(V=Z(t[0]?.[t[2]]??[]),s=0;s<V.length;s+=1){const n=at(t,V,s)
W[s]?W[s].p(n,e):(W[s]=ut(n),W[s].c(),W[s].m(P,null))}for(;s<W.length;s+=1)W[s].d(1)
W.length=V.length}},d(t){t&&(o(e),o(L),o(P)),y(I,t),y(W,t),E=!1,x(G)}}}function rt(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=v(a),e.__value=n=t[11],k(e,e.__value)},m(t,n){i(t,e,n),h(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&j(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,c,r,u,f,m,p,d,g,w,y,x,k,C,_,$,U,M,D,N,T,S,L,P,E=I(new Date(1e3*t[8][q]))+"",G=t[5](t[8][F])+"",O=t[5](t[8][J])+"",Z=t[5](t[8][X])+"",V=t[5](t[8][Y])+"",W=Math.floor(t[8][X]/t[8][Y]*100)+"",Q=t[8][A]+"",R=t[5](t[8][B])+""
return{c(){e=l("div"),s=v(E),n=b(),c=l("div"),r=v(t[2]),u=b(),f=l("div"),m=v(G),p=b(),d=l("div"),g=v(O),w=b(),y=l("div"),x=v(Z),k=b(),C=l("div"),_=v(V),$=b(),U=l("div"),M=v(W),D=b(),N=l("div"),T=v(Q),S=b(),L=l("div"),P=v(R),a(e,"class","svelte-1e4efyh"),a(c,"class","svelte-1e4efyh"),a(f,"class","svelte-1e4efyh"),a(d,"class","svelte-1e4efyh"),a(y,"class","svelte-1e4efyh"),a(C,"class","svelte-1e4efyh"),a(U,"class","svelte-1e4efyh"),a(N,"class","svelte-1e4efyh"),a(L,"class","svelte-1e4efyh")},m(t,l){i(t,e,l),h(e,s),i(t,n,l),i(t,c,l),h(c,r),i(t,u,l),i(t,f,l),h(f,m),i(t,p,l),i(t,d,l),h(d,g),i(t,w,l),i(t,y,l),h(y,x),i(t,k,l),i(t,C,l),h(C,_),i(t,$,l),i(t,U,l),h(U,M),i(t,D,l),i(t,N,l),h(N,T),i(t,S,l),i(t,L,l),h(L,P)},p(t,e){5&e&&E!==(E=I(new Date(1e3*t[8][q]))+"")&&j(s,E),4&e&&j(r,t[2]),5&e&&G!==(G=t[5](t[8][F])+"")&&j(m,G),5&e&&O!==(O=t[5](t[8][J])+"")&&j(g,O),5&e&&Z!==(Z=t[5](t[8][X])+"")&&j(x,Z),5&e&&V!==(V=t[5](t[8][Y])+"")&&j(_,V),5&e&&W!==(W=Math.floor(t[8][X]/t[8][Y]*100)+"")&&j(M,W),5&e&&Q!==(Q=t[8][A]+"")&&j(T,Q),5&e&&R!==(R=t[5](t[8][B])+"")&&j(P,R)},d(t){t&&(o(e),o(n),o(c),o(u),o(f),o(p),o(d),o(w),o(y),o(k),o(C),o($),o(U),o(D),o(N),o(S),o(L))}}}function ft(t){return{c:c,m:c,p:c,d:c}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ft,then:ot,catch:ct}
return G(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1e4efyh")},m(t,n){i(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){O(s,t=e,n)},i:c,o:c,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let pt=""
function bt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await W()
var e
s(0,(e=t.members,n=C(_(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[q]-t[q]))]))))),s(1,l=V(n).sort(r)),pt?s(2,a=pt):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),pt=a},function(t){return f(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=p(this),s(2,a),s(1,l)}]}class vt extends e{constructor(t){super(),s(this,t,bt,mt,n,{})}}const dt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return _(t?.members??{}).flatMap(dt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,yt=([,t,...e])=>[t,Number(e[A]),Number(e[X]),Number(e[F]),Number(e[Y]),wt(e[q]),Number(e[J]),Number(e[B])]
function xt(t){return t.startsWith("{")?function(t){const e=$(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(yt)]}(t)}const kt=t=>!t.some(m),jt=([,...t])=>!t.some(st),Ct=([,...t],[,...e])=>t[q]-e[q],_t=([t,...e])=>[t,Math.trunc(e[q]/86400),...e],$t=(t,e)=>t.concat(e).filter(kt).filter(jt).sort(Ct).map(_t),Ut=([t,e])=>`${t}|${e}`,Mt=t=>t.split("|"),Dt=([t,e])=>[t,Number(e)],Nt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Tt=([t,,...e])=>[t,...e]
const St=([t])=>t,Lt=([,...t])=>[...t]
function Pt(t){return C(nt(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(Lt)])))}async function Et(t,e){const[s,n]=await et([W(),t.text()]),l=e?[]:ht(s),[a,i]=xt(n),c=function(t,e){const s=$t(t,e)
return nt(s.map(Ut)).map(Mt).map(Dt).map(Nt(s)).map(Tt)}(l,i)
lt(Q,{lastUpdate:s.lastUpdate??a??0,members:Pt(c)})}function Gt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Ot(t){let e,s,n,c=t[21]+""
return{c(){e=l("option"),s=v(c),e.__value=n=t[21],k(e,e.__value),a(e,"class","svelte-1itewb")},m(t,n){i(t,e,n),h(e,s)},p(t,l){8&l&&c!==(c=t[21]+"")&&j(s,c),8&l&&n!==(n=t[21])&&(e.__value=n,k(e,e.__value))},d(t){t&&o(e)}}}function Zt(t){let e,s,n,r,u,f,m,p,j,C,_,$,U,M,D,N,T,S,L,P,E,G,O,I,V,W,q,F,J,X,Y,A,B,Q,R,z,H=Z(t[3]),K=[]
for(let e=0;e<H.length;e+=1)K[e]=Ot(Gt(t,H,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),r=l("br"),u=b(),f=l("button"),f.textContent="Export CSV",m=l("br"),p=l("br"),j=l("br"),C=b(),_=l("input"),$=b(),U=l("button"),U.textContent="Import",M=b(),D=l("label"),N=l("input"),T=v("\n    Overwrite"),S=v("\n  (Warning: This can take a while on large files)"),L=l("br"),P=l("br"),E=l("br"),G=b(),O=l("button"),I=v("Purge"),W=v("\n  data before\n  "),q=l("input"),F=l("br"),J=l("br"),X=b(),Y=l("button"),A=v("Purge"),B=v("\n  username\n  "),Q=l("select")
for(let t=0;t<K.length;t+=1)K[t].c()
a(s,"type","button"),a(s,"class","svelte-1itewb"),a(n,"class","svelte-1itewb"),a(r,"class","svelte-1itewb"),a(f,"type","button"),a(f,"class","svelte-1itewb"),a(m,"class","svelte-1itewb"),a(p,"class","svelte-1itewb"),a(j,"class","svelte-1itewb"),a(_,"accept",".csv, .json, .txt"),a(_,"type","file"),a(_,"class","svelte-1itewb"),a(U,"type","button"),a(U,"class","svelte-1itewb"),a(N,"type","checkbox"),a(N,"class","svelte-1itewb"),a(D,"class","svelte-1itewb"),a(L,"class","svelte-1itewb"),a(P,"class","svelte-1itewb"),a(E,"class","svelte-1itewb"),O.disabled=V=!t[0],a(O,"type","button"),a(O,"class","svelte-1itewb"),a(q,"type","date"),a(q,"class","svelte-1itewb"),a(F,"class","svelte-1itewb"),a(J,"class","svelte-1itewb"),Y.disabled=t[5],a(Y,"type","button"),a(Y,"class","svelte-1itewb"),Q.disabled=t[5],a(Q,"class","svelte-1itewb"),void 0===t[4]&&d((()=>t[17].call(Q))),a(e,"class","svelte-1itewb")},m(l,a){i(l,e,a),h(e,s),h(e,n),h(e,r),h(e,u),h(e,f),h(e,m),h(e,p),h(e,j),h(e,C),h(e,_),t[12](_),h(e,$),h(e,U),h(e,M),h(e,D),h(D,N),N.checked=t[2],h(D,T),h(e,S),h(e,L),h(e,P),h(e,E),h(e,G),h(e,O),h(O,I),h(e,W),h(e,q),k(q,t[0]),h(e,F),h(e,J),h(e,X),h(e,Y),h(Y,A),h(e,B),h(e,Q)
for(let t=0;t<K.length;t+=1)K[t]&&K[t].m(Q,null)
g(Q,t[4],!0),R||(z=[w(s,"click",t[6]),w(f,"click",t[7]),w(_,"change",t[8]),w(U,"click",t[9]),w(N,"change",t[13]),w(N,"change",t[14]),w(O,"click",t[10]),w(q,"input",t[15]),w(q,"change",t[16]),w(Y,"click",t[11]),w(Q,"change",t[17]),w(Q,"change",t[18])],R=!0)},p(t,[e]){if(4&e&&(N.checked=t[2]),1&e&&V!==(V=!t[0])&&(O.disabled=V),1&e&&k(q,t[0]),32&e&&(Y.disabled=t[5]),8&e){let s
for(H=Z(t[3]),s=0;s<H.length;s+=1){const n=Gt(t,H,s)
K[s]?K[s].p(n,e):(K[s]=Ot(n),K[s].c(),K[s].m(Q,null))}for(;s<K.length;s+=1)K[s].d(1)
K.length=H.length}32&e&&(Q.disabled=t[5]),24&e&&g(Q,t[4])},i:c,o:c,d(s){s&&o(e),t[12](null),y(K,s),R=!1,x(z)}}}function It(t,e,s){let n,l=0,a=0,i="",c=[],o="",r=1
!async function(){s(3,c=await H()),c.length&&(s(5,r=0),s(4,[o]=c,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=i&&Date.parse(i)/1e3)},[i,l,a,c,o,r,function(){u("Utils","exportJson"),R(D,"application/json")},function(){u("Utils","exportCsv"),R(tt,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){u("Utils","importButton"),U(l)},function(){u("Utils","datePurge"),s(0,i=""),z(n)},async function(){u("Utils","userPurge"),s(5,r=1),await K(o),s(3,c=c.filter((t=>t!==o))),c.length&&(s(5,r=0),s(4,[o]=c,o))},function(t){M[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){i=this.value,s(0,i)},()=>{u("Utils","purgeDateChange")},function(){o=p(this),s(4,o),s(3,c)},()=>{u("Utils","handleChange")}]}class Vt extends e{constructor(t){super(),s(this,t,It,Zt,n,{})}}function Wt(t){let e,s
return e=new E({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){N(e.$$.fragment)},m(t,n){T(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(S(e.$$.fragment,t),s=!0)},o(t){L(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function qt(t,e,s){let{visible:n=!0}=e
const l=[{component:vt,label:"Guild Tracker"},{component:Vt,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}var Ft=class extends e{constructor(t){super(),s(this,t,qt,Wt,n,{visible:0})}}
const Jt={visible:!0}
let Xt=0
function Yt(){Xt=t(Jt,Xt,Ft)}export{Yt as default}
//# sourceMappingURL=guildTracker-75d2219a.js.map
