import{i as t}from"./instantiate-upFtXRx7.js"
import{S as e,L as n,M as s,bj as a,bk as o,be as l,bh as i,bl as r,O as c,P as m,am as u,Q as d,b5 as f,T as g,U as p,X as v,a0 as k,a1 as h,a3 as b,s as $,aQ as x,C,aS as y,_ as L,bu as w,N as j,b6 as _,aP as M,a4 as N}from"./calfSystem-CUgWHLtG.js"
import{h as P,u as A}from"./await_block-DpKGh93y.js"
import{L as B}from"./LinkButtonBracketed-BlDtzj6I.js"
import{c as E}from"./confirm-BtUrOpyM.js"
import{M as S}from"./ModalTitled-DwG8wP1C.js"
import{a as D}from"./addCommas-C_h2HN8s.js"
import"./LinkButton-C46P8xIn.js"
import"./Modal-BIzCdrcz.js"
function Q(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function T(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function H(t){let e
return{c(){e=b("Clear")},m(t,n){g(t,e,n)},d(t){t&&k(e)}}}function I(t){return{c:L,m:L,p:L,d:L}}function J(t){let e
function n(t,e){return t[1].length?U:O}let s=n(t),a=s(t)
return{c(){a.c(),e=u()},m(t,n){a.m(t,n),g(t,e,n)},p(t,o){s===(s=n(t))&&a?a.p(t,o):(a.d(1),a=s(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){t&&k(e),a.d(t)}}}function O(t){let e
return{c(){e=c("div"),e.textContent="No monster information! Please enable creature log and travel a bit to\n        see the world",d(e,"class","no-mobs svelte-69l0kk")},m(t,n){g(t,e,n)},p:L,d(t){t&&k(e)}}}function U(t){let e,n=j(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=F(Q(t,n,e))
return{c(){e=c("div")
for(let t=0;t<s.length;t+=1)s[t].c()
d(e,"class","data grid svelte-69l0kk")},m(t,n){g(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,a){if(2&a[0]){let o
for(n=j(t[1]),o=0;o<n.length;o+=1){const l=Q(t,n,o)
s[o]?s[o].p(l,a):(s[o]=F(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1)
s.length=n.length}},d(t){t&&k(e),_(s,t)}}}function X(t){let e
return{c(){e=c("div"),e.textContent="**Missing**",d(e,"class","missing svelte-69l0kk")},m(t,n){g(t,e,n)},p:L,d(t){t&&k(e)}}}function q(t){let e,n=j(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=z(T(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=u()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
g(t,e,n)},p(t,a){if(2&a[0]){let o
for(n=j(t[22]),o=0;o<n.length;o+=1){const l=T(t,n,o)
s[o]?s[o].p(l,a):(s[o]=z(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1)
s.length=n.length}},d(t){t&&k(e),_(s,t)}}}function z(t){let e,n,s,a,o,l,i=t[26]+"",r=t[27]+"",m=t[28]+""
return{c(){e=c("div"),n=b(i),s=b(": "),a=b(r),o=b(" - "),l=b(m),d(e,"class","enhancements svelte-69l0kk")},m(t,i){g(t,e,i),p(e,n),p(e,s),p(e,a),p(e,o),p(e,l)},p(t,e){2&e[0]&&i!==(i=t[26]+"")&&N(n,i),2&e[0]&&r!==(r=t[27]+"")&&N(a,r),2&e[0]&&m!==(m=t[28]+"")&&N(l,m)},d(t){t&&k(e)}}}function F(t){let e,n,s,a,o,l,i,r,u,v,h,$,x,C,y,L,w,j,_,P,A,B,E,S,Q,T,H,I,J,O,U,z,F,G,K,R,V,W,Y,Z,tt=`url('${M}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=D(t[16])+"",at=t[17].min+"",ot=t[17].max+"",lt=t[18].min+"",it=t[18].max+"",rt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function gt(t,e){return t[22]?q:X}let pt=gt(t),vt=pt(t)
return{c(){e=c("div"),n=c("div"),a=m(),o=c("div"),l=b(et),i=m(),r=c("div"),u=b(nt),v=m(),h=c("div"),$=b(st),x=m(),C=c("div"),y=b(at),L=b(" - "),w=b(ot),j=m(),_=c("div"),P=b(lt),A=b(" - "),B=b(it),E=m(),S=c("div"),Q=b(rt),T=b(" - "),H=b(ct),I=m(),J=c("div"),O=b(mt),U=b(" - "),z=b(ut),F=m(),G=c("div"),K=b(dt),R=b(" - "),V=b(ft),W=m(),Y=c("div"),vt.c(),Z=m(),d(n,"class","image tip-static svelte-69l0kk"),d(n,"data-tipped",s="<img height=200 src='"+M+"creatures/"+t[23]+".png' width=200>"),f(n,"background-image",tt),d(e,"class","entity svelte-69l0kk")},m(t,s){g(t,e,s),p(e,n),p(e,a),p(e,o),p(o,l),g(t,i,s),g(t,r,s),p(r,u),g(t,v,s),g(t,h,s),p(h,$),g(t,x,s),g(t,C,s),p(C,y),p(C,L),p(C,w),g(t,j,s),g(t,_,s),p(_,P),p(_,A),p(_,B),g(t,E,s),g(t,S,s),p(S,Q),p(S,T),p(S,H),g(t,I,s),g(t,J,s),p(J,O),p(J,U),p(J,z),g(t,F,s),g(t,G,s),p(G,K),p(G,R),p(G,V),g(t,W,s),g(t,Y,s),vt.m(Y,null),p(Y,Z)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+M+"creatures/"+t[23]+".png' width=200>")&&d(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${M}creatures/${t[23]}.png')`)&&f(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&N(l,et),2&e[0]&&nt!==(nt=t[15]+"")&&N(u,nt),2&e[0]&&st!==(st=D(t[16])+"")&&N($,st),2&e[0]&&at!==(at=t[17].min+"")&&N(y,at),2&e[0]&&ot!==(ot=t[17].max+"")&&N(w,ot),2&e[0]&&lt!==(lt=t[18].min+"")&&N(P,lt),2&e[0]&&it!==(it=t[18].max+"")&&N(B,it),2&e[0]&&rt!==(rt=t[19].min+"")&&N(Q,rt),2&e[0]&&ct!==(ct=t[19].max+"")&&N(H,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&N(O,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&N(z,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&N(K,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&N(V,ft),pt===(pt=gt(t))&&vt?vt.p(t,e):(vt.d(1),vt=pt(t),vt&&(vt.c(),vt.m(Y,Z)))},d(t){t&&(k(e),k(i),k(r),k(v),k(h),k(x),k(C),k(j),k(_),k(E),k(S),k(I),k(J),k(F),k(G),k(W),k(Y)),vt.d()}}}function G(t){return{c:L,m:L,p:L,d:L}}function K(t){let e,n,s,b,$,x,C,y,L,w,j,_,M,N,E,S,D,Q,T,O,U,X,q,z,F,K,R,V,W,Y,Z,tt
b=new B({props:{$$slots:{default:[H]},$$scope:{ctx:t}}}),b.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:G,then:J,catch:I}
return P(t[6](),et),{c(){e=c("div"),n=c("span"),n.textContent="Entity Information",s=m(),$=c("div"),a(b.$$.fragment),x=m(),C=c("div"),y=c("div"),L=c("button"),L.textContent="Entity",w=m(),j=c("div"),_=c("button"),_.textContent="Class",M=m(),N=c("div"),E=c("button"),E.textContent="Lvl",S=m(),D=c("div"),D.textContent="Attack",Q=m(),T=c("div"),T.textContent="Defense",O=m(),U=c("div"),U.textContent="Armor",X=m(),q=c("div"),q.textContent="Damage",z=m(),F=c("div"),F.textContent="HP",K=m(),R=c("div"),R.textContent="Enhancements",V=m(),W=u(),et.block.c(),d(n,"class","bold svelte-69l0kk"),f($,"display","contents"),f($,"--button-color","white"),f($,"--button-width","2.8em"),d(e,"class","title svelte-69l0kk"),d(L,"class","sortable svelte-69l0kk"),d(L,"type","button"),d(_,"class","sortable svelte-69l0kk"),d(_,"type","button"),d(E,"class","sortable svelte-69l0kk"),d(E,"type","button"),d(C,"class","grid headings svelte-69l0kk")},m(a,l){g(a,e,l),p(e,n),p(e,s),p(e,$),o(b,$,null),g(a,x,l),g(a,C,l),p(C,y),p(y,L),p(C,w),p(C,j),p(j,_),p(C,M),p(C,N),p(N,E),p(C,S),p(C,D),p(C,Q),p(C,T),p(C,O),p(C,U),p(C,X),p(C,q),p(C,z),p(C,F),p(C,K),p(C,R),g(a,V,l),g(a,W,l),et.block.m(a,et.anchor=l),et.mount=()=>W.parentNode,et.anchor=W,Y=!0,Z||(tt=[v(L,"click",t[3]),v(_,"click",t[4]),v(E,"click",t[5])],Z=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),b.$set(s),A(et,t,n)},i(t){Y||(l(b.$$.fragment,t),Y=!0)},o(t){i(b.$$.fragment,t),Y=!1},d(t){t&&(k(e),k(x),k(C),k(V),k(W)),r(b),et.block.d(t),et.token=null,et=null,Z=!1,h(tt)}}}function R(t){let e
return{c(){e=b("Creature Log")},m(t,n){g(t,e,n)},d(t){t&&k(e)}}}function V(t){let e,n
return e=new S({props:{visible:t[0],$$slots:{title:[R],default:[K]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){a(e.$$.fragment)},m(t,s){o(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function W(t,e,n){let{visible:s=!0}=e
let a=[],o=1,l=""
const i=([t],[e])=>o*w(t,e),r=([,t],[,e])=>o*w(t,e),c=([,,t],[,,e])=>o*(t-e)
function m(t,e){o=l===e?o:1,n(1,a=a.slice().sort(t)),l=e,o*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,a,function(){$("Creature Log","close"),n(0,s=!1)},function(){$("Creature Log","sort by entity"),m(i,"entity")},function(){$("Creature Log","sort by class"),m(r,"class")},function(){$("Creature Log","sort by level"),m(c,"level")},async function(){const t=await x("fsh_monsterLog")
t&&(n(1,a=C(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?C(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){$("Creature Log","clear storage"),await E("Are you sure you want to clear your log?")&&(n(1,a=[]),y("fsh_monsterLog",""))}]}class Y extends e{constructor(t){super(),n(this,t,W,V,s,{visible:0},null,[-1,-1])}}const Z={visible:!0}
let tt=0
function et(){tt=t(Z,tt,Y)}export{et as default}
//# sourceMappingURL=creatureLog-CK_XUwDz.js.map