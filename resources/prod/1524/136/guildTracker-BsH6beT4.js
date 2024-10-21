import{i as t}from"./instantiate-upFtXRx7.js"
import{S as e,L as s,M as n,O as l,Q as a,T as c,_ as r,a0 as o,bu as i,s as u,b2 as p,cG as m,a6 as f,N as v,P as d,a3 as b,R as h,U as g,V as w,X as x,b6 as k,a1 as j,W as C,a4 as _,f as y,C as U,aS as $,aU as z,aO as M,cl as N,ah as D,bj as T,bk as S,be as P,bh as G,bl as L}from"./calfSystem-CUgWHLtG.js"
import{M as E}from"./ModalTabbed-R2een0fx.js"
import{h as I,u as O}from"./await_block-DpKGh93y.js"
import{f as V}from"./formatUtcDateTime-DUH5p_s6.js"
import{k as W}from"./keys-CFr_h3Bx.js"
import{g as B,u as F,l as J,v as X,c as Z,m as q,b as A,a as H,f as Q,d as R,p as K,r as Y,e as tt,h as et}from"./utils-D1_Dqi_r.js"
import{a as st}from"./all-YfMtr2SN.js"
import{n as nt}from"./numberIsNaN-CGkd1jiA.js"
import{u as lt}from"./uniq-Dzsj1uso.js"
import"./ModalTitled-DwG8wP1C.js"
import"./Modal-BIzCdrcz.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./guildMembers-xW-R9y84.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function ct(t,e,s){const n=t.slice()
return n[11]=e[s],n}function rt(t){return{c:r,m:r,p:r,d:r}}function ot(t){let e,s,n,r,i,u,p,m,f,C,_,y,U,$,z,M,N,D,T,S,P,G,L,E,I=v(t[1]),O=[]
for(let e=0;e<I.length;e+=1)O[e]=it(ct(t,I,e))
let V=v(t[0]?.[t[2]]??[]),W=[]
for(let e=0;e<V.length;e+=1)W[e]=ut(at(t,V,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=d(),r=l("div"),i=b("Member\n        "),u=l("select")
for(let t=0;t<O.length;t+=1)O[t].c()
p=d(),m=l("div"),m.textContent="Level",f=d(),C=l("div"),C.textContent="VL",_=d(),y=l("div"),y.textContent="Stam",U=d(),$=l("div"),$.textContent="Max Stam",z=d(),M=l("div"),M.textContent="Stam %",N=d(),D=l("div"),D.textContent="Last Activity (Days)",T=d(),S=l("div"),S.textContent="GXP",P=d(),G=l("div")
for(let t=0;t<W.length;t+=1)W[t].c()
a(u,"class","svelte-1eurzp3"),void 0===t[2]&&h((()=>t[6].call(u))),a(e,"class","grid head svelte-1eurzp3"),a(G,"class","grid items svelte-1eurzp3")},m(l,a){c(l,e,a),g(e,s),g(e,n),g(e,r),g(r,i),g(r,u)
for(let t=0;t<O.length;t+=1)O[t]&&O[t].m(u,null)
w(u,t[2],!0),g(e,p),g(e,m),g(e,f),g(e,C),g(e,_),g(e,y),g(e,U),g(e,$),g(e,z),g(e,M),g(e,N),g(e,D),g(e,T),g(e,S),c(l,P,a),c(l,G,a)
for(let t=0;t<W.length;t+=1)W[t]&&W[t].m(G,null)
L||(E=[x(u,"change",t[6]),x(u,"change",t[4])],L=!0)},p(t,e){if(2&e){let s
for(I=v(t[1]),s=0;s<I.length;s+=1){const n=ct(t,I,s)
O[s]?O[s].p(n,e):(O[s]=it(n),O[s].c(),O[s].m(u,null))}for(;s<O.length;s+=1)O[s].d(1)
O.length=I.length}if(6&e&&w(u,t[2]),37&e){let s
for(V=v(t[0]?.[t[2]]??[]),s=0;s<V.length;s+=1){const n=at(t,V,s)
W[s]?W[s].p(n,e):(W[s]=ut(n),W[s].c(),W[s].m(G,null))}for(;s<W.length;s+=1)W[s].d(1)
W.length=V.length}},d(t){t&&(o(e),o(P),o(G)),k(O,t),k(W,t),L=!1,j(E)}}}function it(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=b(a),e.__value=n=t[11],C(e,e.__value)},m(t,n){c(t,e,n),g(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&_(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,C(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,r,i,u,p,m,f,v,h,w,x,k,j,C,y,U,$,z,M,N,D,T,S,P,G=V(new Date(1e3*t[8][F]))+"",L=t[5](t[8][J])+"",E=t[5](t[8][X])+"",I=t[5](t[8][Z])+"",O=t[5](t[8][q])+"",W=Math.floor(t[8][Z]/t[8][q]*100)+"",B=t[8][A]+"",Q=t[5](t[8][H])+""
return{c(){e=l("div"),s=b(G),n=d(),r=l("div"),i=b(t[2]),u=d(),p=l("div"),m=b(L),f=d(),v=l("div"),h=b(E),w=d(),x=l("div"),k=b(I),j=d(),C=l("div"),y=b(O),U=d(),$=l("div"),z=b(W),M=d(),N=l("div"),D=b(B),T=d(),S=l("div"),P=b(Q),a(e,"class","svelte-1eurzp3"),a(r,"class","svelte-1eurzp3"),a(p,"class","svelte-1eurzp3"),a(v,"class","svelte-1eurzp3"),a(x,"class","svelte-1eurzp3"),a(C,"class","svelte-1eurzp3"),a($,"class","svelte-1eurzp3"),a(N,"class","svelte-1eurzp3"),a(S,"class","svelte-1eurzp3")},m(t,l){c(t,e,l),g(e,s),c(t,n,l),c(t,r,l),g(r,i),c(t,u,l),c(t,p,l),g(p,m),c(t,f,l),c(t,v,l),g(v,h),c(t,w,l),c(t,x,l),g(x,k),c(t,j,l),c(t,C,l),g(C,y),c(t,U,l),c(t,$,l),g($,z),c(t,M,l),c(t,N,l),g(N,D),c(t,T,l),c(t,S,l),g(S,P)},p(t,e){5&e&&G!==(G=V(new Date(1e3*t[8][F]))+"")&&_(s,G),4&e&&_(i,t[2]),5&e&&L!==(L=t[5](t[8][J])+"")&&_(m,L),5&e&&E!==(E=t[5](t[8][X])+"")&&_(h,E),5&e&&I!==(I=t[5](t[8][Z])+"")&&_(k,I),5&e&&O!==(O=t[5](t[8][q])+"")&&_(y,O),5&e&&W!==(W=Math.floor(t[8][Z]/t[8][q]*100)+"")&&_(z,W),5&e&&B!==(B=t[8][A]+"")&&_(D,B),5&e&&Q!==(Q=t[5](t[8][H])+"")&&_(P,Q)},d(t){t&&(o(e),o(n),o(r),o(u),o(p),o(f),o(v),o(w),o(x),o(j),o(C),o(U),o($),o(M),o(N),o(T),o(S))}}}function pt(t){return{c:r,m:r,p:r,d:r}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:pt,then:ot,catch:rt}
return I(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1eurzp3")},m(t,n){c(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){O(s,t=e,n)},i:r,o:r,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let ft=""
function vt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await B()
var e
s(0,(e=t.members,n=y(U(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[F]-t[F]))]))))),s(1,l=W(n).sort(i)),ft?s(2,a=ft):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),ft=a},function(t){return p(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=f(this),s(2,a),s(1,l)}]}class dt extends e{constructor(t){super(),s(this,t,vt,mt,n,{})}}const bt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return U(t?.members??{}).flatMap(bt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,xt=([,t,...e])=>[t,Number(e[A]),Number(e[Z]),Number(e[J]),Number(e[q]),wt(e[F]),Number(e[X]),Number(e[H])]
function kt(t){return t.startsWith("{")?function(t){const e=z(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(xt)]}(t)}const jt=t=>!t.some(m),Ct=([,...t])=>!t.some(nt),_t=([,...t],[,...e])=>t[F]-e[F],yt=([t,...e])=>[t,Math.trunc(e[F]/86400),...e],Ut=(t,e)=>t.concat(e).filter(jt).filter(Ct).sort(_t).map(yt),$t=([t,e])=>`${t}|${e}`,zt=t=>t.split("|"),Mt=([t,e])=>[t,Number(e)],Nt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Dt=([t,,...e])=>[t,...e]
const Tt=([t])=>t,St=([,...t])=>[...t]
function Pt(t){return y(lt(t.map(Tt)).map((e=>[e,t.filter((([t])=>t===e)).map(St)])))}async function Gt(t,e){const[s,n]=await st([B(),t.text()]),l=e?[]:ht(s),[a,c]=kt(n),r=function(t,e){const s=Ut(t,e)
return lt(s.map($t)).map(zt).map(Mt).map(Nt(s)).map(Dt)}(l,c)
$(Q,{lastUpdate:s.lastUpdate??a??0,members:Pt(r)})}function Lt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Et(t){let e,s,n,r=t[21]+""
return{c(){e=l("option"),s=b(r),e.__value=n=t[21],C(e,e.__value),a(e,"class","svelte-14w01tp")},m(t,n){c(t,e,n),g(e,s)},p(t,l){8&l&&r!==(r=t[21]+"")&&_(s,r),8&l&&n!==(n=t[21])&&(e.__value=n,C(e,e.__value))},d(t){t&&o(e)}}}function It(t){let e,s,n,i,u,p,m,f,_,y,U,$,z,M,N,D,T,S,P,G,L,E,I,O,V,W,B,F,J,X,Z,q,A,H,Q,R,K=v(t[3]),Y=[]
for(let e=0;e<K.length;e+=1)Y[e]=Et(Lt(t,K,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),i=l("br"),u=d(),p=l("button"),p.textContent="Export CSV",m=l("br"),f=l("br"),_=l("br"),y=d(),U=l("input"),$=d(),z=l("button"),z.textContent="Import",M=d(),N=l("label"),D=l("input"),T=b("\n    Overwrite"),S=b("\n  (Warning: This can take a while on large files)"),P=l("br"),G=l("br"),L=l("br"),E=d(),I=l("button"),O=b("Purge"),W=b("\n  data before\n  "),B=l("input"),F=l("br"),J=l("br"),X=d(),Z=l("button"),q=b("Purge"),A=b("\n  username\n  "),H=l("select")
for(let t=0;t<Y.length;t+=1)Y[t].c()
a(s,"type","button"),a(s,"class","svelte-14w01tp"),a(n,"class","svelte-14w01tp"),a(i,"class","svelte-14w01tp"),a(p,"type","button"),a(p,"class","svelte-14w01tp"),a(m,"class","svelte-14w01tp"),a(f,"class","svelte-14w01tp"),a(_,"class","svelte-14w01tp"),a(U,"accept",".csv, .json, .txt"),a(U,"type","file"),a(U,"class","svelte-14w01tp"),a(z,"type","button"),a(z,"class","svelte-14w01tp"),a(D,"type","checkbox"),a(D,"class","svelte-14w01tp"),a(N,"class","svelte-14w01tp"),a(P,"class","svelte-14w01tp"),a(G,"class","svelte-14w01tp"),a(L,"class","svelte-14w01tp"),I.disabled=V=!t[0],a(I,"type","button"),a(I,"class","svelte-14w01tp"),a(B,"type","date"),a(B,"class","svelte-14w01tp"),a(F,"class","svelte-14w01tp"),a(J,"class","svelte-14w01tp"),Z.disabled=t[5],a(Z,"type","button"),a(Z,"class","svelte-14w01tp"),H.disabled=t[5],a(H,"class","svelte-14w01tp"),void 0===t[4]&&h((()=>t[17].call(H))),a(e,"class","svelte-14w01tp")},m(l,a){c(l,e,a),g(e,s),g(e,n),g(e,i),g(e,u),g(e,p),g(e,m),g(e,f),g(e,_),g(e,y),g(e,U),t[12](U),g(e,$),g(e,z),g(e,M),g(e,N),g(N,D),D.checked=t[2],g(N,T),g(e,S),g(e,P),g(e,G),g(e,L),g(e,E),g(e,I),g(I,O),g(e,W),g(e,B),C(B,t[0]),g(e,F),g(e,J),g(e,X),g(e,Z),g(Z,q),g(e,A),g(e,H)
for(let t=0;t<Y.length;t+=1)Y[t]&&Y[t].m(H,null)
w(H,t[4],!0),Q||(R=[x(s,"click",t[6]),x(p,"click",t[7]),x(U,"change",t[8]),x(z,"click",t[9]),x(D,"change",t[13]),x(D,"change",t[14]),x(I,"click",t[10]),x(B,"input",t[15]),x(B,"change",t[16]),x(Z,"click",t[11]),x(H,"change",t[17]),x(H,"change",t[18])],Q=!0)},p(t,[e]){if(4&e&&(D.checked=t[2]),1&e&&V!==(V=!t[0])&&(I.disabled=V),1&e&&C(B,t[0]),32&e&&(Z.disabled=t[5]),8&e){let s
for(K=v(t[3]),s=0;s<K.length;s+=1){const n=Lt(t,K,s)
Y[s]?Y[s].p(n,e):(Y[s]=Et(n),Y[s].c(),Y[s].m(H,null))}for(;s<Y.length;s+=1)Y[s].d(1)
Y.length=K.length}32&e&&(H.disabled=t[5]),24&e&&w(H,t[4])},i:r,o:r,d(s){s&&o(e),t[12](null),k(Y,s),Q=!1,j(R)}}}function Ot(t,e,s){let n,l=0,a=0,c="",r=[],o="",i=1
!async function(){s(3,r=await Y()),r.length&&(s(5,i=0),s(4,[o]=r,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=c&&Date.parse(c)/1e3)},[c,l,a,r,o,i,function(){u("Utils","exportJson"),R(D,"application/json")},function(){u("Utils","exportCsv"),R(et,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Gt(t,a)},function(){u("Utils","importButton"),M(l)},function(){u("Utils","datePurge"),s(0,c=""),K(n)},async function(){u("Utils","userPurge"),s(5,i=1),await tt(o),s(3,r=r.filter((t=>t!==o))),r.length&&(s(5,i=0),s(4,[o]=r,o))},function(t){N[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){c=this.value,s(0,c)},()=>{u("Utils","purgeDateChange")},function(){o=f(this),s(4,o),s(3,r)},()=>{u("Utils","handleChange")}]}class Vt extends e{constructor(t){super(),s(this,t,Ot,It,n,{})}}function Wt(t){let e,s
return e=new E({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){T(e.$$.fragment)},m(t,n){S(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){G(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function Bt(t,e,s){let{visible:n=!0}=e
const l=[{component:dt,label:"Guild Tracker"},{component:Vt,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}class Ft extends e{constructor(t){super(),s(this,t,Bt,Wt,n,{visible:0})}}const Jt={visible:!0}
let Xt=0
function Zt(){Xt=t(Jt,Xt,Ft)}export{Zt as default}
//# sourceMappingURL=guildTracker-BsH6beT4.js.map
