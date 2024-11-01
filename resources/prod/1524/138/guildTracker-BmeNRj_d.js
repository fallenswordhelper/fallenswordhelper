import{i as t}from"./Modal-Dm7_felh.js"
import{S as e,L as s,M as n,O as l,Q as a,T as c,a0 as r,a1 as o,bu as i,s as u,b2 as p,cG as m,a6 as f,N as v,P as d,a4 as b,R as h,U as g,V as w,X as x,b6 as k,a2 as y,W as C,a5 as $,f as _,C as j,aS as U,aU as z,aO as M,cl as N,ah as D,bj as S,bk as T,be as P,bh as E,bl as G}from"./calfSystem-BjarbvkO.js"
import{M as L}from"./ModalTabbed-bE0aLBkn.js"
import{h as O,u as F}from"./await_block-BK1iodr-.js"
import{f as I}from"./formatUtcDateTime-DUH5p_s6.js"
import{k as V}from"./keys-CFr_h3Bx.js"
import{g as W,u as J,l as R,v as X,c as Z,m as q,b as A,a as B,f as Q,d as H,p as K,r as Y,e as tt,h as et}from"./utils-DnDlh8Bz.js"
import{a as st}from"./all-YfMtr2SN.js"
import{n as nt}from"./numberIsNaN-CGkd1jiA.js"
import{u as lt}from"./uniq-CMbuE8hS.js"
import"./ModalTitled-CGPrJs3d.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
import"./guildMembers-CCBJ9tp8.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function ct(t,e,s){const n=t.slice()
return n[11]=e[s],n}function rt(t){return{c:r,m:r,p:r,d:r}}function ot(t){let e,s,n,r,i,u,p,m,f,C,$,_,j,U,z,M,N,D,S,T,P,E,G,L,O=v(t[1]),F=[]
for(let e=0;e<O.length;e+=1)F[e]=it(ct(t,O,e))
let I=v(t[0]?.[t[2]]??[]),V=[]
for(let e=0;e<I.length;e+=1)V[e]=ut(at(t,I,e))
return{c(){e=l("div"),s=l("div"),s.textContent="Date",n=d(),r=l("div"),i=b("Member\n        "),u=l("select")
for(let t=0;t<F.length;t+=1)F[t].c()
p=d(),m=l("div"),m.textContent="Level",f=d(),C=l("div"),C.textContent="VL",$=d(),_=l("div"),_.textContent="Stam",j=d(),U=l("div"),U.textContent="Max Stam",z=d(),M=l("div"),M.textContent="Stam %",N=d(),D=l("div"),D.textContent="Last Activity (Days)",S=d(),T=l("div"),T.textContent="GXP",P=d(),E=l("div")
for(let t=0;t<V.length;t+=1)V[t].c()
a(u,"class","svelte-1eurzp3"),void 0===t[2]&&h((()=>t[6].call(u))),a(e,"class","grid head svelte-1eurzp3"),a(E,"class","grid items svelte-1eurzp3")},m(l,a){c(l,e,a),g(e,s),g(e,n),g(e,r),g(r,i),g(r,u)
for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(u,null)
w(u,t[2],!0),g(e,p),g(e,m),g(e,f),g(e,C),g(e,$),g(e,_),g(e,j),g(e,U),g(e,z),g(e,M),g(e,N),g(e,D),g(e,S),g(e,T),c(l,P,a),c(l,E,a)
for(let t=0;t<V.length;t+=1)V[t]&&V[t].m(E,null)
G||(L=[x(u,"change",t[6]),x(u,"change",t[4])],G=!0)},p(t,e){if(2&e){let s
for(O=v(t[1]),s=0;s<O.length;s+=1){const n=ct(t,O,s)
F[s]?F[s].p(n,e):(F[s]=it(n),F[s].c(),F[s].m(u,null))}for(;s<F.length;s+=1)F[s].d(1)
F.length=O.length}if(6&e&&w(u,t[2]),37&e){let s
for(I=v(t[0]?.[t[2]]??[]),s=0;s<I.length;s+=1){const n=at(t,I,s)
V[s]?V[s].p(n,e):(V[s]=ut(n),V[s].c(),V[s].m(E,null))}for(;s<V.length;s+=1)V[s].d(1)
V.length=I.length}},d(t){t&&(o(e),o(P),o(E)),k(F,t),k(V,t),G=!1,y(L)}}}function it(t){let e,s,n,a=t[11]+""
return{c(){e=l("option"),s=b(a),e.__value=n=t[11],C(e,e.__value)},m(t,n){c(t,e,n),g(e,s)},p(t,l){2&l&&a!==(a=t[11]+"")&&$(s,a),2&l&&n!==(n=t[11])&&(e.__value=n,C(e,e.__value))},d(t){t&&o(e)}}}function ut(t){let e,s,n,r,i,u,p,m,f,v,h,w,x,k,y,C,_,j,U,z,M,N,D,S,T,P,E=I(new Date(1e3*t[8][J]))+"",G=t[5](t[8][R])+"",L=t[5](t[8][X])+"",O=t[5](t[8][Z])+"",F=t[5](t[8][q])+"",V=Math.floor(t[8][Z]/t[8][q]*100)+"",W=t[8][A]+"",Q=t[5](t[8][B])+""
return{c(){e=l("div"),s=b(E),n=d(),r=l("div"),i=b(t[2]),u=d(),p=l("div"),m=b(G),f=d(),v=l("div"),h=b(L),w=d(),x=l("div"),k=b(O),y=d(),C=l("div"),_=b(F),j=d(),U=l("div"),z=b(V),M=d(),N=l("div"),D=b(W),S=d(),T=l("div"),P=b(Q),a(e,"class","svelte-1eurzp3"),a(r,"class","svelte-1eurzp3"),a(p,"class","svelte-1eurzp3"),a(v,"class","svelte-1eurzp3"),a(x,"class","svelte-1eurzp3"),a(C,"class","svelte-1eurzp3"),a(U,"class","svelte-1eurzp3"),a(N,"class","svelte-1eurzp3"),a(T,"class","svelte-1eurzp3")},m(t,l){c(t,e,l),g(e,s),c(t,n,l),c(t,r,l),g(r,i),c(t,u,l),c(t,p,l),g(p,m),c(t,f,l),c(t,v,l),g(v,h),c(t,w,l),c(t,x,l),g(x,k),c(t,y,l),c(t,C,l),g(C,_),c(t,j,l),c(t,U,l),g(U,z),c(t,M,l),c(t,N,l),g(N,D),c(t,S,l),c(t,T,l),g(T,P)},p(t,e){5&e&&E!==(E=I(new Date(1e3*t[8][J]))+"")&&$(s,E),4&e&&$(i,t[2]),5&e&&G!==(G=t[5](t[8][R])+"")&&$(m,G),5&e&&L!==(L=t[5](t[8][X])+"")&&$(h,L),5&e&&O!==(O=t[5](t[8][Z])+"")&&$(k,O),5&e&&F!==(F=t[5](t[8][q])+"")&&$(_,F),5&e&&V!==(V=Math.floor(t[8][Z]/t[8][q]*100)+"")&&$(z,V),5&e&&W!==(W=t[8][A]+"")&&$(D,W),5&e&&Q!==(Q=t[5](t[8][B])+"")&&$(P,Q)},d(t){t&&(o(e),o(n),o(r),o(u),o(p),o(f),o(v),o(w),o(x),o(y),o(C),o(j),o(U),o(M),o(N),o(S),o(T))}}}function pt(t){return{c:r,m:r,p:r,d:r}}function mt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:pt,then:ot,catch:rt}
return O(t[3](),s),{c(){e=l("div"),s.block.c(),a(e,"class","main svelte-1eurzp3")},m(t,n){c(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){F(s,t=e,n)},i:r,o:r,d(t){t&&o(e),s.block.d(),s.token=null,s=null}}}let ft=""
function vt(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await W()
var e
s(0,(e=t.members,n=_(j(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[J]-t[J]))]))))),s(1,l=V(n).sort(i)),ft?s(2,a=ft):s(2,[a]=l,a)},function(){u("Guild Tracker","handleChange"),ft=a},function(t){return p(t)?"#DEF":m(t)?"null":t.toLocaleString()},function(){a=f(this),s(2,a),s(1,l)}]}class dt extends e{constructor(t){super(),s(this,t,vt,mt,n,{})}}const bt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return j(t?.members??{}).flatMap(bt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,xt=([,t,...e])=>[t,Number(e[A]),Number(e[Z]),Number(e[R]),Number(e[q]),wt(e[J]),Number(e[X]),Number(e[B])]
function kt(t){return t.startsWith("{")?function(t){const e=z(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(xt)]}(t)}const yt=t=>!t.some(m),Ct=([,...t])=>!t.some(nt),$t=([,...t],[,...e])=>t[J]-e[J],_t=([t,...e])=>[t,Math.trunc(e[J]/86400),...e],jt=(t,e)=>t.concat(e).filter(yt).filter(Ct).sort($t).map(_t),Ut=([t,e])=>`${t}|${e}`,zt=t=>t.split("|"),Mt=([t,e])=>[t,Number(e)],Nt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Dt=([t,,...e])=>[t,...e]
const St=([t])=>t,Tt=([,...t])=>[...t]
function Pt(t){return _(lt(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(Tt)])))}async function Et(t,e){const[s,n]=await st([W(),t.text()]),l=e?[]:ht(s),[a,c]=kt(n),r=function(t,e){const s=jt(t,e)
return lt(s.map(Ut)).map(zt).map(Mt).map(Nt(s)).map(Dt)}(l,c)
U(Q,{lastUpdate:s.lastUpdate??a??0,members:Pt(r)})}function Gt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Lt(t){let e,s,n,r=t[21]+""
return{c(){e=l("option"),s=b(r),e.__value=n=t[21],C(e,e.__value),a(e,"class","svelte-14w01tp")},m(t,n){c(t,e,n),g(e,s)},p(t,l){8&l&&r!==(r=t[21]+"")&&$(s,r),8&l&&n!==(n=t[21])&&(e.__value=n,C(e,e.__value))},d(t){t&&o(e)}}}function Ot(t){let e,s,n,i,u,p,m,f,$,_,j,U,z,M,N,D,S,T,P,E,G,L,O,F,I,V,W,J,R,X,Z,q,A,B,Q,H,K=v(t[3]),Y=[]
for(let e=0;e<K.length;e+=1)Y[e]=Lt(Gt(t,K,e))
return{c(){e=l("div"),s=l("button"),s.textContent="Export JSON",n=l("br"),i=l("br"),u=d(),p=l("button"),p.textContent="Export CSV",m=l("br"),f=l("br"),$=l("br"),_=d(),j=l("input"),U=d(),z=l("button"),z.textContent="Import",M=d(),N=l("label"),D=l("input"),S=b("\n    Overwrite"),T=b("\n  (Warning: This can take a while on large files)"),P=l("br"),E=l("br"),G=l("br"),L=d(),O=l("button"),F=b("Purge"),V=b("\n  data before\n  "),W=l("input"),J=l("br"),R=l("br"),X=d(),Z=l("button"),q=b("Purge"),A=b("\n  username\n  "),B=l("select")
for(let t=0;t<Y.length;t+=1)Y[t].c()
a(s,"type","button"),a(s,"class","svelte-14w01tp"),a(n,"class","svelte-14w01tp"),a(i,"class","svelte-14w01tp"),a(p,"type","button"),a(p,"class","svelte-14w01tp"),a(m,"class","svelte-14w01tp"),a(f,"class","svelte-14w01tp"),a($,"class","svelte-14w01tp"),a(j,"accept",".csv, .json, .txt"),a(j,"type","file"),a(j,"class","svelte-14w01tp"),a(z,"type","button"),a(z,"class","svelte-14w01tp"),a(D,"type","checkbox"),a(D,"class","svelte-14w01tp"),a(N,"class","svelte-14w01tp"),a(P,"class","svelte-14w01tp"),a(E,"class","svelte-14w01tp"),a(G,"class","svelte-14w01tp"),O.disabled=I=!t[0],a(O,"type","button"),a(O,"class","svelte-14w01tp"),a(W,"type","date"),a(W,"class","svelte-14w01tp"),a(J,"class","svelte-14w01tp"),a(R,"class","svelte-14w01tp"),Z.disabled=t[5],a(Z,"type","button"),a(Z,"class","svelte-14w01tp"),B.disabled=t[5],a(B,"class","svelte-14w01tp"),void 0===t[4]&&h((()=>t[17].call(B))),a(e,"class","svelte-14w01tp")},m(l,a){c(l,e,a),g(e,s),g(e,n),g(e,i),g(e,u),g(e,p),g(e,m),g(e,f),g(e,$),g(e,_),g(e,j),t[12](j),g(e,U),g(e,z),g(e,M),g(e,N),g(N,D),D.checked=t[2],g(N,S),g(e,T),g(e,P),g(e,E),g(e,G),g(e,L),g(e,O),g(O,F),g(e,V),g(e,W),C(W,t[0]),g(e,J),g(e,R),g(e,X),g(e,Z),g(Z,q),g(e,A),g(e,B)
for(let t=0;t<Y.length;t+=1)Y[t]&&Y[t].m(B,null)
w(B,t[4],!0),Q||(H=[x(s,"click",t[6]),x(p,"click",t[7]),x(j,"change",t[8]),x(z,"click",t[9]),x(D,"change",t[13]),x(D,"change",t[14]),x(O,"click",t[10]),x(W,"input",t[15]),x(W,"change",t[16]),x(Z,"click",t[11]),x(B,"change",t[17]),x(B,"change",t[18])],Q=!0)},p(t,[e]){if(4&e&&(D.checked=t[2]),1&e&&I!==(I=!t[0])&&(O.disabled=I),1&e&&C(W,t[0]),32&e&&(Z.disabled=t[5]),8&e){let s
for(K=v(t[3]),s=0;s<K.length;s+=1){const n=Gt(t,K,s)
Y[s]?Y[s].p(n,e):(Y[s]=Lt(n),Y[s].c(),Y[s].m(B,null))}for(;s<Y.length;s+=1)Y[s].d(1)
Y.length=K.length}32&e&&(B.disabled=t[5]),24&e&&w(B,t[4])},i:r,o:r,d(s){s&&o(e),t[12](null),k(Y,s),Q=!1,y(H)}}}function Ft(t,e,s){let n,l=0,a=0,c="",r=[],o="",i=1
!async function(){s(3,r=await Y()),r.length&&(s(5,i=0),s(4,[o]=r,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=c&&Date.parse(c)/1e3)},[c,l,a,r,o,i,function(){u("Utils","exportJson"),H(D,"application/json")},function(){u("Utils","exportCsv"),H(et,"text/csv")},function(){u("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){u("Utils","importButton"),M(l)},function(){u("Utils","datePurge"),s(0,c=""),K(n)},async function(){u("Utils","userPurge"),s(5,i=1),await tt(o),s(3,r=r.filter((t=>t!==o))),r.length&&(s(5,i=0),s(4,[o]=r,o))},function(t){N[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{u("Utils","overwriteToggle")},function(){c=this.value,s(0,c)},()=>{u("Utils","purgeDateChange")},function(){o=f(this),s(4,o),s(3,r)},()=>{u("Utils","handleChange")}]}class It extends e{constructor(t){super(),s(this,t,Ft,Ot,n,{})}}function Vt(t){let e,s
return e=new L({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){S(e.$$.fragment)},m(t,n){T(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){G(e,t)}}}function Wt(t,e,s){let{visible:n=!0}=e
const l=[{component:dt,label:"Guild Tracker"},{component:It,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){u("Guild Tracker","close"),s(0,n=!1)},l]}class Jt extends e{constructor(t){super(),s(this,t,Wt,Vt,n,{visible:0})}}const Rt={visible:!0}
let Xt=0
function Zt(){Xt=t(Rt,Xt,Jt)}export{Zt as default}
//# sourceMappingURL=guildTracker-BmeNRj_d.js.map
