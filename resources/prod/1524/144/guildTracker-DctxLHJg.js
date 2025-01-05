import{i as t}from"./Modal-BMQofQrT.js"
import{S as e,O as s,P as n,as as l,R as a,U as c,W as o,at as i,a3 as r,a4 as u,d$ as p,dn as d,bU as v,s as f,bl as m,d1 as b,a9 as h,Q as g,T as w,a7 as x,V as k,X as $,Y as C,_,bp as y,a5 as U,Z as z,a8 as M,dR as D,e0 as T,e1 as N,e2 as S,e3 as j,e4 as P,e5 as E,e6 as G,f as L,E as O,u as A,b8 as F,e7 as V,bu as W,ba as I,ak as J,e8 as R,b4 as X,e9 as Z,ea as B,eb as H,cO as Q,an as Y,ec as q,bF as K,bG as tt,bA as et,bD as st,bH as nt}from"./calfSystem-fMW-YMyF.js"
import{M as lt}from"./ModalTabbed-ymGeK0Uq.js"
import"./ModalTitled-DdT5kcKI.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function ct(t,e,s){const n=t.slice()
return n[11]=e[s],n}function ot(t){return{c:r,m:r,p:r,d:r}}function it(t){let e,s,n,l,i,r,p,d,v,f,m,b,h,z,M,D,T,N,S,j,P,E,G,L,O=g(t[1]),A=[]
for(let e=0;e<O.length;e+=1)A[e]=rt(ct(t,O,e))
let F=g(t[0]?.[t[2]]??[]),V=[]
for(let e=0;e<F.length;e+=1)V[e]=ut(at(t,F,e))
return{c(){e=a("div"),s=a("div"),s.textContent="Date",n=w(),l=a("div"),i=x("Member\n        "),r=a("select")
for(let t=0;t<A.length;t+=1)A[t].c()
p=w(),d=a("div"),d.textContent="Level",v=w(),f=a("div"),f.textContent="VL",m=w(),b=a("div"),b.textContent="Stam",h=w(),z=a("div"),z.textContent="Max Stam",M=w(),D=a("div"),D.textContent="Stam %",T=w(),N=a("div"),N.textContent="Last Activity (Days)",S=w(),j=a("div"),j.textContent="GXP",P=w(),E=a("div")
for(let t=0;t<V.length;t+=1)V[t].c()
c(r,"class","svelte-1eurzp3"),void 0===t[2]&&k((()=>t[6].call(r))),c(e,"class","grid head svelte-1eurzp3"),c(E,"class","grid items svelte-1eurzp3")},m(a,c){o(a,e,c),$(e,s),$(e,n),$(e,l),$(l,i),$(l,r)
for(let t=0;t<A.length;t+=1)A[t]&&A[t].m(r,null)
C(r,t[2],!0),$(e,p),$(e,d),$(e,v),$(e,f),$(e,m),$(e,b),$(e,h),$(e,z),$(e,M),$(e,D),$(e,T),$(e,N),$(e,S),$(e,j),o(a,P,c),o(a,E,c)
for(let t=0;t<V.length;t+=1)V[t]&&V[t].m(E,null)
G||(L=[_(r,"change",t[6]),_(r,"change",t[4])],G=!0)},p(t,e){if(2&e){let s
for(O=g(t[1]),s=0;s<O.length;s+=1){const n=ct(t,O,s)
A[s]?A[s].p(n,e):(A[s]=rt(n),A[s].c(),A[s].m(r,null))}for(;s<A.length;s+=1)A[s].d(1)
A.length=O.length}if(6&e&&C(r,t[2]),37&e){let s
for(F=g(t[0]?.[t[2]]??[]),s=0;s<F.length;s+=1){const n=at(t,F,s)
V[s]?V[s].p(n,e):(V[s]=ut(n),V[s].c(),V[s].m(E,null))}for(;s<V.length;s+=1)V[s].d(1)
V.length=F.length}},d(t){t&&(u(e),u(P),u(E)),y(A,t),y(V,t),G=!1,U(L)}}}function rt(t){let e,s,n,l=t[11]+""
return{c(){e=a("option"),s=x(l),e.__value=n=t[11],z(e,e.__value)},m(t,n){o(t,e,n),$(e,s)},p(t,a){2&a&&l!==(l=t[11]+"")&&M(s,l),2&a&&n!==(n=t[11])&&(e.__value=n,z(e,e.__value))},d(t){t&&u(e)}}}function ut(t){let e,s,n,l,i,r,p,d,v,f,m,b,h,g,k,C,_,y,U,z,L,O,A,F,V,W,I=D(new Date(1e3*t[8][T]))+"",J=t[5](t[8][N])+"",R=t[5](t[8][S])+"",X=t[5](t[8][j])+"",Z=t[5](t[8][P])+"",B=Math.floor(t[8][j]/t[8][P]*100)+"",H=t[8][E]+"",Q=t[5](t[8][G])+""
return{c(){e=a("div"),s=x(I),n=w(),l=a("div"),i=x(t[2]),r=w(),p=a("div"),d=x(J),v=w(),f=a("div"),m=x(R),b=w(),h=a("div"),g=x(X),k=w(),C=a("div"),_=x(Z),y=w(),U=a("div"),z=x(B),L=w(),O=a("div"),A=x(H),F=w(),V=a("div"),W=x(Q),c(e,"class","svelte-1eurzp3"),c(l,"class","svelte-1eurzp3"),c(p,"class","svelte-1eurzp3"),c(f,"class","svelte-1eurzp3"),c(h,"class","svelte-1eurzp3"),c(C,"class","svelte-1eurzp3"),c(U,"class","svelte-1eurzp3"),c(O,"class","svelte-1eurzp3"),c(V,"class","svelte-1eurzp3")},m(t,a){o(t,e,a),$(e,s),o(t,n,a),o(t,l,a),$(l,i),o(t,r,a),o(t,p,a),$(p,d),o(t,v,a),o(t,f,a),$(f,m),o(t,b,a),o(t,h,a),$(h,g),o(t,k,a),o(t,C,a),$(C,_),o(t,y,a),o(t,U,a),$(U,z),o(t,L,a),o(t,O,a),$(O,A),o(t,F,a),o(t,V,a),$(V,W)},p(t,e){5&e&&I!==(I=D(new Date(1e3*t[8][T]))+"")&&M(s,I),4&e&&M(i,t[2]),5&e&&J!==(J=t[5](t[8][N])+"")&&M(d,J),5&e&&R!==(R=t[5](t[8][S])+"")&&M(m,R),5&e&&X!==(X=t[5](t[8][j])+"")&&M(g,X),5&e&&Z!==(Z=t[5](t[8][P])+"")&&M(_,Z),5&e&&B!==(B=Math.floor(t[8][j]/t[8][P]*100)+"")&&M(z,B),5&e&&H!==(H=t[8][E]+"")&&M(A,H),5&e&&Q!==(Q=t[5](t[8][G])+"")&&M(W,Q)},d(t){t&&(u(e),u(n),u(l),u(r),u(p),u(v),u(f),u(b),u(h),u(k),u(C),u(y),u(U),u(L),u(O),u(F),u(V))}}}function pt(t){return{c:r,m:r,p:r,d:r}}function dt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:pt,then:it,catch:ot}
return l(t[3](),s),{c(){e=a("div"),s.block.c(),c(e,"class","main svelte-1eurzp3")},m(t,n){o(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){i(s,t=e,n)},i:r,o:r,d(t){t&&u(e),s.block.d(),s.token=null,s=null}}}let vt=""
function ft(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await p()
var e
s(0,(e=t.members,n=L(O(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[T]-t[T]))]))))),s(1,l=d(n).sort(v)),vt?s(2,a=vt):s(2,[a]=l,a)},function(){f("Guild Tracker","handleChange"),vt=a},function(t){return m(t)?"#DEF":b(t)?"null":t.toLocaleString()},function(){a=h(this),s(2,a),s(1,l)}]}class mt extends e{constructor(t){super(),s(this,t,ft,dt,n,{})}}const bt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return O(t?.members??{}).flatMap(bt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,xt=([,t,...e])=>[t,Number(e[E]),Number(e[j]),Number(e[N]),Number(e[P]),wt(e[T]),Number(e[S]),Number(e[G])]
function kt(t){return t.startsWith("{")?function(t){const e=I(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(xt)]}(t)}const $t=t=>!t.some(b),Ct=([,...t])=>!t.some(J),_t=([,...t],[,...e])=>t[T]-e[T],yt=([t,...e])=>[t,Math.trunc(e[T]/86400),...e],Ut=(t,e)=>t.concat(e).filter($t).filter(Ct).sort(_t).map(yt),zt=([t,e])=>`${t}|${e}`,Mt=t=>t.split("|"),Dt=([t,e])=>[t,Number(e)],Tt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Nt=([t,,...e])=>[t,...e]
const St=([t])=>t,jt=([,...t])=>[...t]
function Pt(t){return L(W(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(jt)])))}async function Et(t,e){const[s,n]=await A([p(),t.text()]),l=e?[]:ht(s),[a,c]=kt(n),o=function(t,e){const s=Ut(t,e)
return W(s.map(zt)).map(Mt).map(Dt).map(Tt(s)).map(Nt)}(l,c)
F(V,{lastUpdate:s.lastUpdate??a??0,members:Pt(o)})}function Gt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Lt(t){let e,s,n,l=t[21]+""
return{c(){e=a("option"),s=x(l),e.__value=n=t[21],z(e,e.__value),c(e,"class","svelte-14w01tp")},m(t,n){o(t,e,n),$(e,s)},p(t,a){8&a&&l!==(l=t[21]+"")&&M(s,l),8&a&&n!==(n=t[21])&&(e.__value=n,z(e,e.__value))},d(t){t&&u(e)}}}function Ot(t){let e,s,n,l,i,p,d,v,f,m,b,h,M,D,T,N,S,j,P,E,G,L,O,A,F,V,W,I,J,R,X,Z,B,H,Q,Y,q=g(t[3]),K=[]
for(let e=0;e<q.length;e+=1)K[e]=Lt(Gt(t,q,e))
return{c(){e=a("div"),s=a("button"),s.textContent="Export JSON",n=a("br"),l=a("br"),i=w(),p=a("button"),p.textContent="Export CSV",d=a("br"),v=a("br"),f=a("br"),m=w(),b=a("input"),h=w(),M=a("button"),M.textContent="Import",D=w(),T=a("label"),N=a("input"),S=x("\n    Overwrite"),j=x("\n  (Warning: This can take a while on large files)"),P=a("br"),E=a("br"),G=a("br"),L=w(),O=a("button"),A=x("Purge"),V=x("\n  data before\n  "),W=a("input"),I=a("br"),J=a("br"),R=w(),X=a("button"),Z=x("Purge"),B=x("\n  username\n  "),H=a("select")
for(let t=0;t<K.length;t+=1)K[t].c()
c(s,"type","button"),c(s,"class","svelte-14w01tp"),c(n,"class","svelte-14w01tp"),c(l,"class","svelte-14w01tp"),c(p,"type","button"),c(p,"class","svelte-14w01tp"),c(d,"class","svelte-14w01tp"),c(v,"class","svelte-14w01tp"),c(f,"class","svelte-14w01tp"),c(b,"accept",".csv, .json, .txt"),c(b,"type","file"),c(b,"class","svelte-14w01tp"),c(M,"type","button"),c(M,"class","svelte-14w01tp"),c(N,"type","checkbox"),c(N,"class","svelte-14w01tp"),c(T,"class","svelte-14w01tp"),c(P,"class","svelte-14w01tp"),c(E,"class","svelte-14w01tp"),c(G,"class","svelte-14w01tp"),O.disabled=F=!t[0],c(O,"type","button"),c(O,"class","svelte-14w01tp"),c(W,"type","date"),c(W,"class","svelte-14w01tp"),c(I,"class","svelte-14w01tp"),c(J,"class","svelte-14w01tp"),X.disabled=t[5],c(X,"type","button"),c(X,"class","svelte-14w01tp"),H.disabled=t[5],c(H,"class","svelte-14w01tp"),void 0===t[4]&&k((()=>t[17].call(H))),c(e,"class","svelte-14w01tp")},m(a,c){o(a,e,c),$(e,s),$(e,n),$(e,l),$(e,i),$(e,p),$(e,d),$(e,v),$(e,f),$(e,m),$(e,b),t[12](b),$(e,h),$(e,M),$(e,D),$(e,T),$(T,N),N.checked=t[2],$(T,S),$(e,j),$(e,P),$(e,E),$(e,G),$(e,L),$(e,O),$(O,A),$(e,V),$(e,W),z(W,t[0]),$(e,I),$(e,J),$(e,R),$(e,X),$(X,Z),$(e,B),$(e,H)
for(let t=0;t<K.length;t+=1)K[t]&&K[t].m(H,null)
C(H,t[4],!0),Q||(Y=[_(s,"click",t[6]),_(p,"click",t[7]),_(b,"change",t[8]),_(M,"click",t[9]),_(N,"change",t[13]),_(N,"change",t[14]),_(O,"click",t[10]),_(W,"input",t[15]),_(W,"change",t[16]),_(X,"click",t[11]),_(H,"change",t[17]),_(H,"change",t[18])],Q=!0)},p(t,[e]){if(4&e&&(N.checked=t[2]),1&e&&F!==(F=!t[0])&&(O.disabled=F),1&e&&z(W,t[0]),32&e&&(X.disabled=t[5]),8&e){let s
for(q=g(t[3]),s=0;s<q.length;s+=1){const n=Gt(t,q,s)
K[s]?K[s].p(n,e):(K[s]=Lt(n),K[s].c(),K[s].m(H,null))}for(;s<K.length;s+=1)K[s].d(1)
K.length=q.length}32&e&&(H.disabled=t[5]),24&e&&C(H,t[4])},i:r,o:r,d(s){s&&u(e),t[12](null),y(K,s),Q=!1,U(Y)}}}function At(t,e,s){let n,l=0,a=0,c="",o=[],i="",r=1
!async function(){s(3,o=await B()),o.length&&(s(5,r=0),s(4,[i]=o,i))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=c&&Date.parse(c)/1e3)},[c,l,a,o,i,r,function(){f("Utils","exportJson"),R(Y,"application/json")},function(){f("Utils","exportCsv"),R(q,"text/csv")},function(){f("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){f("Utils","importButton"),X(l)},function(){f("Utils","datePurge"),s(0,c=""),Z(n)},async function(){f("Utils","userPurge"),s(5,r=1),await H(i),s(3,o=o.filter((t=>t!==i))),o.length&&(s(5,r=0),s(4,[i]=o,i))},function(t){Q[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{f("Utils","overwriteToggle")},function(){c=this.value,s(0,c)},()=>{f("Utils","purgeDateChange")},function(){i=h(this),s(4,i),s(3,o)},()=>{f("Utils","handleChange")}]}class Ft extends e{constructor(t){super(),s(this,t,At,Ot,n,{})}}function Vt(t){let e,s
return e=new lt({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){K(e.$$.fragment)},m(t,n){tt(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(et(e.$$.fragment,t),s=!0)},o(t){st(e.$$.fragment,t),s=!1},d(t){nt(e,t)}}}function Wt(t,e,s){let{visible:n=!0}=e
const l=[{component:mt,label:"Guild Tracker"},{component:Ft,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){f("Guild Tracker","close"),s(0,n=!1)},l]}class It extends e{constructor(t){super(),s(this,t,Wt,Vt,n,{visible:0})}}const Jt={visible:!0}
let Rt=0
function Xt(){Rt=t(Jt,Rt,It)}export{Xt as default}
//# sourceMappingURL=guildTracker-DctxLHJg.js.map
