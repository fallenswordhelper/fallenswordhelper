import{S as t,P as e,Q as s,au as n,T as l,U as a,av as c,_ as i,a3 as o,a5 as r,R as u,bq as p,V as v,Y as d,a0 as f,a1 as b,a4 as m,a9 as h,a6 as g,e8 as w,f as x,du as k,bX as _,s as C,bn as $,d8 as y,aa as z,a8 as U,Z as D,d_ as M,e9 as T,ea as N,eb as S,ec as j,ed as P,ee as E,ef as L,F as G,v as F,bx as J,eg as V,bu as I,bb as O,am as R,eh as W,ei as X,b7 as Z,ej as q,ek as A,d1 as B,ap as K,el as Q,bJ as Y,bD as H,bE as tt,bK as et,bL as st,dR as nt}from"./calfSystem-DiXGAkgN.js"
import{M as lt}from"./ModalTabbed-8bTr_yZX.js"
import"./ModalTitled-tS2Ux_DT.js"
function at(t,e,s){const n=t.slice()
return n[8]=e[s],n}function ct(t,e,s){const n=t.slice()
return n[11]=e[s],n}function it(t){return{c:l,m:l,p:l,d:l}}function ot(t){let e,s,n,l,c,w,x,k,_,C,$,y,z,U,D,M,T,N,S,j,P,E,L,G,F=u(t[1]),J=[]
for(let e=0;e<F.length;e+=1)J[e]=rt(ct(t,F,e))
let V=u(t[0]?.[t[2]]??[]),I=[]
for(let e=0;e<V.length;e+=1)I[e]=ut(at(t,V,e))
return{c(){e=o("div"),s=o("div"),s.textContent="Date",n=m(),l=o("div"),c=h("Member\n        "),w=o("select")
for(let t=0;t<J.length;t+=1)J[t].c()
x=m(),k=o("div"),k.textContent="Level",_=m(),C=o("div"),C.textContent="VL",$=m(),y=o("div"),y.textContent="Stam",z=m(),U=o("div"),U.textContent="Max Stam",D=m(),M=o("div"),M.textContent="Stam %",T=m(),N=o("div"),N.textContent="Last Activity (Days)",S=m(),j=o("div"),j.textContent="GXP",P=m(),E=o("div")
for(let t=0;t<I.length;t+=1)I[t].c()
r(w,"class","svelte-1eurzp3"),void 0===t[2]&&g((()=>t[6].call(w))),r(e,"class","grid head svelte-1eurzp3"),r(E,"class","grid items svelte-1eurzp3")},m(a,o){i(a,e,o),f(e,s),f(e,n),f(e,l),f(l,c),f(l,w)
for(let t=0;t<J.length;t+=1)J[t]&&J[t].m(w,null)
d(w,t[2],!0),f(e,x),f(e,k),f(e,_),f(e,C),f(e,$),f(e,y),f(e,z),f(e,U),f(e,D),f(e,M),f(e,T),f(e,N),f(e,S),f(e,j),i(a,P,o),i(a,E,o)
for(let t=0;t<I.length;t+=1)I[t]&&I[t].m(E,null)
L||(G=[b(w,"change",t[6]),b(w,"change",t[4])],L=!0)},p(t,e){if(2&e){let s
for(F=u(t[1]),s=0;s<F.length;s+=1){const n=ct(t,F,s)
J[s]?J[s].p(n,e):(J[s]=rt(n),J[s].c(),J[s].m(w,null))}for(;s<J.length;s+=1)J[s].d(1)
J.length=F.length}if(6&e&&d(w,t[2]),37&e){let s
for(V=u(t[0]?.[t[2]]??[]),s=0;s<V.length;s+=1){const n=at(t,V,s)
I[s]?I[s].p(n,e):(I[s]=ut(n),I[s].c(),I[s].m(E,null))}for(;s<I.length;s+=1)I[s].d(1)
I.length=V.length}},d(t){t&&(a(e),a(P),a(E)),p(J,t),p(I,t),L=!1,v(G)}}}function rt(t){let e,s,n,l=t[11]+""
return{c(){e=o("option"),s=h(l),e.__value=n=t[11],D(e,e.__value)},m(t,n){i(t,e,n),f(e,s)},p(t,a){2&a&&l!==(l=t[11]+"")&&U(s,l),2&a&&n!==(n=t[11])&&(e.__value=n,D(e,e.__value))},d(t){t&&a(e)}}}function ut(t){let e,s,n,l,c,u,p,v,d,b,g,w,x,k,_,C,$,y,z,D,G,F,J,V,I,O,R=M(new Date(1e3*t[8][T]))+"",W=t[5](t[8][N])+"",X=t[5](t[8][S])+"",Z=t[5](t[8][j])+"",q=t[5](t[8][P])+"",A=Math.floor(t[8][j]/t[8][P]*100)+"",B=t[8][E]+"",K=t[5](t[8][L])+""
return{c(){e=o("div"),s=h(R),n=m(),l=o("div"),c=h(t[2]),u=m(),p=o("div"),v=h(W),d=m(),b=o("div"),g=h(X),w=m(),x=o("div"),k=h(Z),_=m(),C=o("div"),$=h(q),y=m(),z=o("div"),D=h(A),G=m(),F=o("div"),J=h(B),V=m(),I=o("div"),O=h(K),r(e,"class","svelte-1eurzp3"),r(l,"class","svelte-1eurzp3"),r(p,"class","svelte-1eurzp3"),r(b,"class","svelte-1eurzp3"),r(x,"class","svelte-1eurzp3"),r(C,"class","svelte-1eurzp3"),r(z,"class","svelte-1eurzp3"),r(F,"class","svelte-1eurzp3"),r(I,"class","svelte-1eurzp3")},m(t,a){i(t,e,a),f(e,s),i(t,n,a),i(t,l,a),f(l,c),i(t,u,a),i(t,p,a),f(p,v),i(t,d,a),i(t,b,a),f(b,g),i(t,w,a),i(t,x,a),f(x,k),i(t,_,a),i(t,C,a),f(C,$),i(t,y,a),i(t,z,a),f(z,D),i(t,G,a),i(t,F,a),f(F,J),i(t,V,a),i(t,I,a),f(I,O)},p(t,e){5&e&&R!==(R=M(new Date(1e3*t[8][T]))+"")&&U(s,R),4&e&&U(c,t[2]),5&e&&W!==(W=t[5](t[8][N])+"")&&U(v,W),5&e&&X!==(X=t[5](t[8][S])+"")&&U(g,X),5&e&&Z!==(Z=t[5](t[8][j])+"")&&U(k,Z),5&e&&q!==(q=t[5](t[8][P])+"")&&U($,q),5&e&&A!==(A=Math.floor(t[8][j]/t[8][P]*100)+"")&&U(D,A),5&e&&B!==(B=t[8][E]+"")&&U(J,B),5&e&&K!==(K=t[5](t[8][L])+"")&&U(O,K)},d(t){t&&(a(e),a(n),a(l),a(u),a(p),a(d),a(b),a(w),a(x),a(_),a(C),a(y),a(z),a(G),a(F),a(V),a(I))}}}function pt(t){return{c:l,m:l,p:l,d:l}}function vt(t){let e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:pt,then:ot,catch:it}
return n(t[3](),s),{c(){e=o("div"),s.block.c(),r(e,"class","main svelte-1eurzp3")},m(t,n){i(t,e,n),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null},p(e,[n]){c(s,t=e,n)},i:l,o:l,d(t){t&&a(e),s.block.d(),s.token=null,s=null}}}let dt=""
function ft(t,e,s){let n={},l=[],a=""
return[n,l,a,async function(){const t=await w()
var e
s(0,(e=t.members,n=x(G(e).map((([t,e])=>[t,[...e].sort(((t,e)=>e[T]-t[T]))]))))),s(1,l=k(n).sort(_)),dt?s(2,a=dt):s(2,[a]=l,a)},function(){C("Guild Tracker","handleChange"),dt=a},function(t){return $(t)?"#DEF":y(t)?"null":t.toLocaleString()},function(){a=z(this),s(2,a),s(1,l)}]}class bt extends t{constructor(t){super(),e(this,t,ft,vt,s,{})}}const mt=([t,e])=>e.map((e=>[t,...e]))
function ht(t){return G(t?.members??{}).flatMap(mt)}const gt=t=>t.split(","),wt=t=>Date.parse(`${t.replace(" ","T")}Z`)/1e3,xt=([,t,...e])=>[t,Number(e[E]),Number(e[j]),Number(e[N]),Number(e[P]),wt(e[T]),Number(e[S]),Number(e[L])]
function kt(t){return t.startsWith("{")?function(t){const e=O(t),s=ht(e)
return[e?.lastUpdate??0,s]}(t):function(t){const e=t.split("\n").slice(1).map(gt)
return[wt(e[0][0]),e.map(xt)]}(t)}const _t=t=>!t.some(y),Ct=([,...t])=>!t.some(R),$t=([,...t],[,...e])=>t[T]-e[T],yt=([t,...e])=>[t,Math.trunc(e[T]/86400),...e],zt=(t,e)=>t.concat(e).filter(_t).filter(Ct).sort($t).map(yt),Ut=([t,e])=>`${t}|${e}`,Dt=t=>t.split("|"),Mt=([t,e])=>[t,Number(e)],Tt=t=>([e,s])=>t.find(((t,e)=>([s,n])=>s===t&&n===e)(e,s)),Nt=([t,,...e])=>[t,...e]
const St=([t])=>t,jt=([,...t])=>[...t]
function Pt(t){return x(I(t.map(St)).map((e=>[e,t.filter((([t])=>t===e)).map(jt)])))}async function Et(t,e){const[s,n]=await F([w(),t.text()]),l=e?[]:ht(s),[a,c]=kt(n),i=function(t,e){const s=zt(t,e)
return I(s.map(Ut)).map(Dt).map(Mt).map(Tt(s)).map(Nt)}(l,c)
J(V,{lastUpdate:s.lastUpdate??a??0,members:Pt(i)})}function Lt(t,e,s){const n=t.slice()
return n[21]=e[s],n}function Gt(t){let e,s,n,l=t[21]+""
return{c(){e=o("option"),s=h(l),e.__value=n=t[21],D(e,e.__value),r(e,"class","svelte-14w01tp")},m(t,n){i(t,e,n),f(e,s)},p(t,a){8&a&&l!==(l=t[21]+"")&&U(s,l),8&a&&n!==(n=t[21])&&(e.__value=n,D(e,e.__value))},d(t){t&&a(e)}}}function Ft(t){let e,s,n,c,w,x,k,_,C,$,y,z,U,M,T,N,S,j,P,E,L,G,F,J,V,I,O,R,W,X,Z,q,A,B,K,Q,Y=u(t[3]),H=[]
for(let e=0;e<Y.length;e+=1)H[e]=Gt(Lt(t,Y,e))
return{c(){e=o("div"),s=o("button"),s.textContent="Export JSON",n=o("br"),c=o("br"),w=m(),x=o("button"),x.textContent="Export CSV",k=o("br"),_=o("br"),C=o("br"),$=m(),y=o("input"),z=m(),U=o("button"),U.textContent="Import",M=m(),T=o("label"),N=o("input"),S=h("\n    Overwrite"),j=h("\n  (Warning: This can take a while on large files)"),P=o("br"),E=o("br"),L=o("br"),G=m(),F=o("button"),J=h("Purge"),I=h("\n  data before\n  "),O=o("input"),R=o("br"),W=o("br"),X=m(),Z=o("button"),q=h("Purge"),A=h("\n  username\n  "),B=o("select")
for(let t=0;t<H.length;t+=1)H[t].c()
r(s,"type","button"),r(s,"class","svelte-14w01tp"),r(n,"class","svelte-14w01tp"),r(c,"class","svelte-14w01tp"),r(x,"type","button"),r(x,"class","svelte-14w01tp"),r(k,"class","svelte-14w01tp"),r(_,"class","svelte-14w01tp"),r(C,"class","svelte-14w01tp"),r(y,"accept",".csv, .json, .txt"),r(y,"type","file"),r(y,"class","svelte-14w01tp"),r(U,"type","button"),r(U,"class","svelte-14w01tp"),r(N,"type","checkbox"),r(N,"class","svelte-14w01tp"),r(T,"class","svelte-14w01tp"),r(P,"class","svelte-14w01tp"),r(E,"class","svelte-14w01tp"),r(L,"class","svelte-14w01tp"),F.disabled=V=!t[0],r(F,"type","button"),r(F,"class","svelte-14w01tp"),r(O,"type","date"),r(O,"class","svelte-14w01tp"),r(R,"class","svelte-14w01tp"),r(W,"class","svelte-14w01tp"),Z.disabled=t[5],r(Z,"type","button"),r(Z,"class","svelte-14w01tp"),B.disabled=t[5],r(B,"class","svelte-14w01tp"),void 0===t[4]&&g((()=>t[17].call(B))),r(e,"class","svelte-14w01tp")},m(l,a){i(l,e,a),f(e,s),f(e,n),f(e,c),f(e,w),f(e,x),f(e,k),f(e,_),f(e,C),f(e,$),f(e,y),t[12](y),f(e,z),f(e,U),f(e,M),f(e,T),f(T,N),N.checked=t[2],f(T,S),f(e,j),f(e,P),f(e,E),f(e,L),f(e,G),f(e,F),f(F,J),f(e,I),f(e,O),D(O,t[0]),f(e,R),f(e,W),f(e,X),f(e,Z),f(Z,q),f(e,A),f(e,B)
for(let t=0;t<H.length;t+=1)H[t]&&H[t].m(B,null)
d(B,t[4],!0),K||(Q=[b(s,"click",t[6]),b(x,"click",t[7]),b(y,"change",t[8]),b(U,"click",t[9]),b(N,"change",t[13]),b(N,"change",t[14]),b(F,"click",t[10]),b(O,"input",t[15]),b(O,"change",t[16]),b(Z,"click",t[11]),b(B,"change",t[17]),b(B,"change",t[18])],K=!0)},p(t,[e]){if(4&e&&(N.checked=t[2]),1&e&&V!==(V=!t[0])&&(F.disabled=V),1&e&&D(O,t[0]),32&e&&(Z.disabled=t[5]),8&e){let s
for(Y=u(t[3]),s=0;s<Y.length;s+=1){const n=Lt(t,Y,s)
H[s]?H[s].p(n,e):(H[s]=Gt(n),H[s].c(),H[s].m(B,null))}for(;s<H.length;s+=1)H[s].d(1)
H.length=Y.length}32&e&&(B.disabled=t[5]),24&e&&d(B,t[4])},i:l,o:l,d(s){s&&a(e),t[12](null),p(H,s),K=!1,v(Q)}}}function Jt(t,e,s){let n,l=0,a=0,c="",i=[],o="",r=1
!async function(){s(3,i=await W()),i.length&&(s(5,r=0),s(4,[o]=i,o))}()
return t.$$.update=()=>{1&t.$$.dirty&&(n=c&&Date.parse(c)/1e3)},[c,l,a,i,o,r,function(){C("Utils","exportJson"),X(K,"application/json")},function(){C("Utils","exportCsv"),X(Q,"text/csv")},function(){C("Utils","importFile",a)
const[t]=l.files
Et(t,a)},function(){C("Utils","importButton"),Z(l)},function(){C("Utils","datePurge"),s(0,c=""),q(n)},async function(){C("Utils","userPurge"),s(5,r=1),await A(o),s(3,i=i.filter((t=>t!==o))),i.length&&(s(5,r=0),s(4,[o]=i,o))},function(t){B[t?"unshift":"push"]((()=>{l=t,s(1,l)}))},function(){a=this.checked,s(2,a)},()=>{C("Utils","overwriteToggle")},function(){c=this.value,s(0,c)},()=>{C("Utils","purgeDateChange")},function(){o=z(this),s(4,o),s(3,i)},()=>{C("Utils","handleChange")}]}class Vt extends t{constructor(t){super(),e(this,t,Jt,Ft,s,{})}}function It(t){let e,s
return e=new lt({props:{tabs:t[2],visible:t[0]}}),e.$on("close",t[1]),{c(){st(e.$$.fragment)},m(t,n){et(e,t,n),s=!0},p(t,[s]){const n={}
1&s&&(n.visible=t[0]),e.$set(n)},i(t){s||(tt(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){Y(e,t)}}}function Ot(t,e,s){let{visible:n=!0}=e
const l=[{component:bt,label:"Guild Tracker"},{component:Vt,label:"Import/Export"}]
return t.$$set=t=>{"visible"in t&&s(0,n=t.visible)},[n,function(){C("Guild Tracker","close"),s(0,n=!1)},l]}class Rt extends t{constructor(t){super(),e(this,t,Ot,It,s,{visible:0})}}const Wt={visible:!0}
let Xt=0
function Zt(){Xt=nt(Wt,Xt,Rt)}export{Zt as default}
//# sourceMappingURL=guildTracker-Vmh-jXM5.js.map
