import{i as t}from"./instantiate-upFtXRx7.js"
import{S as e,L as n,M as s,bh as o,bi as a,bc as i,bf as l,bj as r,O as c,P as m,am as u,Q as d,b3 as f,T as g,U as p,X as v,a0 as h,a1 as b,a3 as $,s as y,aO as x,C,aQ as k,_ as L,bs as w,N as j,b4 as N,aN as _,a4 as M}from"./calfSystem-hszmVKJw.js"
import{h as A,u as B}from"./await_block-DYQUOgK6.js"
import{L as E}from"./LinkButtonBracketed-BDm5HJO2.js"
import{c as P}from"./confirm-ZaZxXQzI.js"
import{M as D}from"./ModalTitled-CNSpv5Ta.js"
import{a as O}from"./addCommas-C_h2HN8s.js"
import"./LinkButton-CIWFjfcK.js"
import"./Modal-DfgQnXdG.js"
function Q(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function S(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function T(t){let e
return{c(){e=$("Clear")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function H(t){return{c:L,m:L,p:L,d:L}}function I(t){let e
function n(t,e){return t[1].length?U:J}let s=n(t),o=s(t)
return{c(){o.c(),e=u()},m(t,n){o.m(t,n),g(t,e,n)},p(t,a){s===(s=n(t))&&o?o.p(t,a):(o.d(1),o=s(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){t&&h(e),o.d(t)}}}function J(t){let e
return{c(){e=c("div"),e.textContent="No monster information! Please enable creature log and travel a bit to see the world",d(e,"class","no-mobs svelte-10oeym4")},m(t,n){g(t,e,n)},p:L,d(t){t&&h(e)}}}function U(t){let e,n=j(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=F(Q(t,n,e))
return{c(){e=c("div")
for(let t=0;t<s.length;t+=1)s[t].c()
d(e,"class","data grid svelte-10oeym4")},m(t,n){g(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,o){if(2&o[0]){let a
for(n=j(t[1]),a=0;a<n.length;a+=1){const i=Q(t,n,a)
s[a]?s[a].p(i,o):(s[a]=F(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),N(s,t)}}}function X(t){let e
return{c(){e=c("div"),e.textContent="**Missing**",d(e,"class","missing svelte-10oeym4")},m(t,n){g(t,e,n)},p:L,d(t){t&&h(e)}}}function q(t){let e,n=j(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=z(S(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=u()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
g(t,e,n)},p(t,o){if(2&o[0]){let a
for(n=j(t[22]),a=0;a<n.length;a+=1){const i=S(t,n,a)
s[a]?s[a].p(i,o):(s[a]=z(i),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),N(s,t)}}}function z(t){let e,n,s,o,a,i,l=t[26]+"",r=t[27]+"",m=t[28]+""
return{c(){e=c("div"),n=$(l),s=$(": "),o=$(r),a=$(" - "),i=$(m),d(e,"class","enhancements svelte-10oeym4")},m(t,l){g(t,e,l),p(e,n),p(e,s),p(e,o),p(e,a),p(e,i)},p(t,e){2&e[0]&&l!==(l=t[26]+"")&&M(n,l),2&e[0]&&r!==(r=t[27]+"")&&M(o,r),2&e[0]&&m!==(m=t[28]+"")&&M(i,m)},d(t){t&&h(e)}}}function F(t){let e,n,s,o,a,i,l,r,u,v,b,y,x,C,k,L,w,j,N,A,B,E,P,D,Q,S,T,H,I,J,U,z,F,G,K,R,V,W,Y,Z,tt=`url('${_}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=O(t[16])+"",ot=t[17].min+"",at=t[17].max+"",it=t[18].min+"",lt=t[18].max+"",rt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function gt(t,e){return t[22]?q:X}let pt=gt(t),vt=pt(t)
return{c(){e=c("div"),n=c("div"),o=m(),a=c("div"),i=$(et),l=m(),r=c("div"),u=$(nt),v=m(),b=c("div"),y=$(st),x=m(),C=c("div"),k=$(ot),L=$(" - "),w=$(at),j=m(),N=c("div"),A=$(it),B=$(" - "),E=$(lt),P=m(),D=c("div"),Q=$(rt),S=$(" - "),T=$(ct),H=m(),I=c("div"),J=$(mt),U=$(" - "),z=$(ut),F=m(),G=c("div"),K=$(dt),R=$(" - "),V=$(ft),W=m(),Y=c("div"),vt.c(),Z=m(),d(n,"class","image tip-static svelte-10oeym4"),d(n,"data-tipped",s="<img height=200 src='"+_+"creatures/"+t[23]+".png' width=200>"),f(n,"background-image",tt),d(e,"class","entity svelte-10oeym4")},m(t,s){g(t,e,s),p(e,n),p(e,o),p(e,a),p(a,i),g(t,l,s),g(t,r,s),p(r,u),g(t,v,s),g(t,b,s),p(b,y),g(t,x,s),g(t,C,s),p(C,k),p(C,L),p(C,w),g(t,j,s),g(t,N,s),p(N,A),p(N,B),p(N,E),g(t,P,s),g(t,D,s),p(D,Q),p(D,S),p(D,T),g(t,H,s),g(t,I,s),p(I,J),p(I,U),p(I,z),g(t,F,s),g(t,G,s),p(G,K),p(G,R),p(G,V),g(t,W,s),g(t,Y,s),vt.m(Y,null),p(Y,Z)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+_+"creatures/"+t[23]+".png' width=200>")&&d(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${_}creatures/${t[23]}.png')`)&&f(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&M(i,et),2&e[0]&&nt!==(nt=t[15]+"")&&M(u,nt),2&e[0]&&st!==(st=O(t[16])+"")&&M(y,st),2&e[0]&&ot!==(ot=t[17].min+"")&&M(k,ot),2&e[0]&&at!==(at=t[17].max+"")&&M(w,at),2&e[0]&&it!==(it=t[18].min+"")&&M(A,it),2&e[0]&&lt!==(lt=t[18].max+"")&&M(E,lt),2&e[0]&&rt!==(rt=t[19].min+"")&&M(Q,rt),2&e[0]&&ct!==(ct=t[19].max+"")&&M(T,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&M(J,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&M(z,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&M(K,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&M(V,ft),pt===(pt=gt(t))&&vt?vt.p(t,e):(vt.d(1),vt=pt(t),vt&&(vt.c(),vt.m(Y,Z)))},d(t){t&&(h(e),h(l),h(r),h(v),h(b),h(x),h(C),h(j),h(N),h(P),h(D),h(H),h(I),h(F),h(G),h(W),h(Y)),vt.d()}}}function G(t){return{c:L,m:L,p:L,d:L}}function K(t){let e,n,s,$,y,x,C,k,L,w,j,N,_,M,P,D,O,Q,S,J,U,X,q,z,F,K,R,V,W,Y,Z,tt
$=new E({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),$.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:G,then:I,catch:H}
return A(t[6](),et),{c(){e=c("div"),n=c("span"),n.textContent="Entity Information",s=m(),y=c("div"),o($.$$.fragment),x=m(),C=c("div"),k=c("div"),L=c("button"),L.textContent="Entity",w=m(),j=c("div"),N=c("button"),N.textContent="Class",_=m(),M=c("div"),P=c("button"),P.textContent="Lvl",D=m(),O=c("div"),O.textContent="Attack",Q=m(),S=c("div"),S.textContent="Defense",J=m(),U=c("div"),U.textContent="Armor",X=m(),q=c("div"),q.textContent="Damage",z=m(),F=c("div"),F.textContent="HP",K=m(),R=c("div"),R.textContent="Enhancements",V=m(),W=u(),et.block.c(),d(n,"class","bold svelte-10oeym4"),f(y,"display","contents"),f(y,"--button-color","white"),f(y,"--button-width","2.8em"),d(e,"class","title svelte-10oeym4"),d(L,"class","sortable svelte-10oeym4"),d(L,"type","button"),d(N,"class","sortable svelte-10oeym4"),d(N,"type","button"),d(P,"class","sortable svelte-10oeym4"),d(P,"type","button"),d(C,"class","grid headings svelte-10oeym4")},m(o,i){g(o,e,i),p(e,n),p(e,s),p(e,y),a($,y,null),g(o,x,i),g(o,C,i),p(C,k),p(k,L),p(C,w),p(C,j),p(j,N),p(C,_),p(C,M),p(M,P),p(C,D),p(C,O),p(C,Q),p(C,S),p(C,J),p(C,U),p(C,X),p(C,q),p(C,z),p(C,F),p(C,K),p(C,R),g(o,V,i),g(o,W,i),et.block.m(o,et.anchor=i),et.mount=()=>W.parentNode,et.anchor=W,Y=!0,Z||(tt=[v(L,"click",t[3]),v(N,"click",t[4]),v(P,"click",t[5])],Z=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s),B(et,t,n)},i(t){Y||(i($.$$.fragment,t),Y=!0)},o(t){l($.$$.fragment,t),Y=!1},d(t){t&&(h(e),h(x),h(C),h(V),h(W)),r($),et.block.d(t),et.token=null,et=null,Z=!1,b(tt)}}}function R(t){let e
return{c(){e=$("Creature Log")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function V(t){let e,n
return e=new D({props:{visible:t[0],$$slots:{title:[R],default:[K]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){o(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function W(t,e,n){let{visible:s=!0}=e
let o=[],a=1,i=""
const l=([t],[e])=>a*w(t,e),r=([,t],[,e])=>a*w(t,e),c=([,,t],[,,e])=>a*(t-e)
function m(t,e){a=i===e?a:1,n(1,o=o.slice().sort(t)),i=e,a*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,o,function(){y("Creature Log","close"),n(0,s=!1)},function(){y("Creature Log","sort by entity"),m(l,"entity")},function(){y("Creature Log","sort by class"),m(r,"class")},function(){y("Creature Log","sort by level"),m(c,"level")},async function(){const t=await x("fsh_monsterLog")
t&&(n(1,o=C(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?C(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){y("Creature Log","clear storage"),await P("Are you sure you want to clear your log?")&&(n(1,o=[]),k("fsh_monsterLog",""))}]}var Y=class extends e{constructor(t){super(),n(this,t,W,V,s,{visible:0},null,[-1,-1])}}
const Z={visible:!0}
let tt=0
function et(){tt=t(Z,tt,Y)}export{et as default}
//# sourceMappingURL=creatureLog-B6EbiOXS.js.map
