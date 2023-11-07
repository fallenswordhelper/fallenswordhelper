import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as e,J as n,K as s,b9 as o,ba as a,b4 as i,b7 as r,bb as l,L as c,M as m,ah as u,N as d,aX as f,P as p,Q as g,U as v,X as h,Y as b,_ as $,s as y,C as x,W as C,bk as k,aY as L,aH as j,a0 as w}from"./calfSystem-VUa7wwu1.js"
import{h as N,u as _}from"./await_block-5SUqwqnQ.js"
import{e as M}from"./each-z4oZkgsq.js"
import{L as A}from"./LinkButtonBracketed-hnciORBN.js"
import{c as B}from"./confirm-f0zAMU8i.js"
import{M as E}from"./ModalTitled-vMxB-XQb.js"
import{a as P}from"./addCommas-olJWnOGa.js"
import{g as Y,s as D}from"./idb-gpu32B-C.js"
import"./LinkButton-ssp0QiF9.js"
import"./Modal-uOwFwRjo.js"
function H(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function S(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function X(t){let e
return{c(){e=$("Clear")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function I(t){return{c:C,m:C,p:C,d:C}}function J(t){let e
function n(t,e){return t[1].length?Q:K}let s=n(t),o=s(t)
return{c(){o.c(),e=u()},m(t,n){o.m(t,n),p(t,e,n)},p(t,a){s===(s=n(t))&&o?o.p(t,a):(o.d(1),o=s(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){t&&h(e),o.d(t)}}}function K(t){let e
return{c(){e=c("div"),e.textContent="No monster information! Please enable creature log and travel a bit to see the world",d(e,"class","no-mobs svelte-10oeym4")},m(t,n){p(t,e,n)},p:C,d(t){t&&h(e)}}}function Q(t){let e,n=M(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=q(H(t,n,e))
return{c(){e=c("div")
for(let t=0;t<s.length;t+=1)s[t].c()
d(e,"class","data grid svelte-10oeym4")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,o){if(2&o[0]){let a
for(n=M(t[1]),a=0;a<n.length;a+=1){const i=H(t,n,a)
s[a]?s[a].p(i,o):(s[a]=q(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),L(s,t)}}}function T(t){let e
return{c(){e=c("div"),e.textContent="**Missing**",d(e,"class","missing svelte-10oeym4")},m(t,n){p(t,e,n)},p:C,d(t){t&&h(e)}}}function U(t){let e,n=M(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=W(S(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=u()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
p(t,e,n)},p(t,o){if(2&o[0]){let a
for(n=M(t[22]),a=0;a<n.length;a+=1){const i=S(t,n,a)
s[a]?s[a].p(i,o):(s[a]=W(i),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),L(s,t)}}}function W(t){let e,n,s,o,a,i,r=t[26]+"",l=t[27]+"",m=t[28]+""
return{c(){e=c("div"),n=$(r),s=$(": "),o=$(l),a=$(" - "),i=$(m),d(e,"class","enhancements svelte-10oeym4")},m(t,r){p(t,e,r),g(e,n),g(e,s),g(e,o),g(e,a),g(e,i)},p(t,e){2&e[0]&&r!==(r=t[26]+"")&&w(n,r),2&e[0]&&l!==(l=t[27]+"")&&w(o,l),2&e[0]&&m!==(m=t[28]+"")&&w(i,m)},d(t){t&&h(e)}}}function q(t){let e,n,s,o,a,i,r,l,u,v,b,y,x,C,k,L,N,_,M,A,B,E,Y,D,H,S,X,I,J,K,Q,W,q,z,F,G,O,R,V,Z,tt=`url('${j}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=P(t[16])+"",ot=t[17].min+"",at=t[17].max+"",it=t[18].min+"",rt=t[18].max+"",lt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function pt(t,e){return t[22]?U:T}let gt=pt(t),vt=gt(t)
return{c(){e=c("div"),n=c("div"),o=m(),a=c("div"),i=$(et),r=m(),l=c("div"),u=$(nt),v=m(),b=c("div"),y=$(st),x=m(),C=c("div"),k=$(ot),L=$(" - "),N=$(at),_=m(),M=c("div"),A=$(it),B=$(" - "),E=$(rt),Y=m(),D=c("div"),H=$(lt),S=$(" - "),X=$(ct),I=m(),J=c("div"),K=$(mt),Q=$(" - "),W=$(ut),q=m(),z=c("div"),F=$(dt),G=$(" - "),O=$(ft),R=m(),V=c("div"),vt.c(),Z=m(),d(n,"class","image tip-static svelte-10oeym4"),d(n,"data-tipped",s="<img height=200 src='"+j+"creatures/"+t[23]+".png' width=200>"),f(n,"background-image",tt),d(e,"class","entity svelte-10oeym4")},m(t,s){p(t,e,s),g(e,n),g(e,o),g(e,a),g(a,i),p(t,r,s),p(t,l,s),g(l,u),p(t,v,s),p(t,b,s),g(b,y),p(t,x,s),p(t,C,s),g(C,k),g(C,L),g(C,N),p(t,_,s),p(t,M,s),g(M,A),g(M,B),g(M,E),p(t,Y,s),p(t,D,s),g(D,H),g(D,S),g(D,X),p(t,I,s),p(t,J,s),g(J,K),g(J,Q),g(J,W),p(t,q,s),p(t,z,s),g(z,F),g(z,G),g(z,O),p(t,R,s),p(t,V,s),vt.m(V,null),g(V,Z)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+j+"creatures/"+t[23]+".png' width=200>")&&d(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${j}creatures/${t[23]}.png')`)&&f(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&w(i,et),2&e[0]&&nt!==(nt=t[15]+"")&&w(u,nt),2&e[0]&&st!==(st=P(t[16])+"")&&w(y,st),2&e[0]&&ot!==(ot=t[17].min+"")&&w(k,ot),2&e[0]&&at!==(at=t[17].max+"")&&w(N,at),2&e[0]&&it!==(it=t[18].min+"")&&w(A,it),2&e[0]&&rt!==(rt=t[18].max+"")&&w(E,rt),2&e[0]&&lt!==(lt=t[19].min+"")&&w(H,lt),2&e[0]&&ct!==(ct=t[19].max+"")&&w(X,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&w(K,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&w(W,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&w(F,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&w(O,ft),gt===(gt=pt(t))&&vt?vt.p(t,e):(vt.d(1),vt=gt(t),vt&&(vt.c(),vt.m(V,Z)))},d(t){t&&(h(e),h(r),h(l),h(v),h(b),h(x),h(C),h(_),h(M),h(Y),h(D),h(I),h(J),h(q),h(z),h(R),h(V)),vt.d()}}}function z(t){return{c:C,m:C,p:C,d:C}}function F(t){let e,n,s,$,y,x,C,k,L,j,w,M,B,E,P,Y,D,H,S,K,Q,T,U,W,q,F,G,O,R,V,Z,tt
$=new A({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),$.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:z,then:J,catch:I}
return N(t[6](),et),{c(){e=c("div"),n=c("span"),n.textContent="Entity Information",s=m(),y=c("div"),o($.$$.fragment),x=m(),C=c("div"),k=c("div"),L=c("button"),L.textContent="Entity",j=m(),w=c("div"),M=c("button"),M.textContent="Class",B=m(),E=c("div"),P=c("button"),P.textContent="Lvl",Y=m(),D=c("div"),D.textContent="Attack",H=m(),S=c("div"),S.textContent="Defense",K=m(),Q=c("div"),Q.textContent="Armor",T=m(),U=c("div"),U.textContent="Damage",W=m(),q=c("div"),q.textContent="HP",F=m(),G=c("div"),G.textContent="Enhancements",O=m(),R=u(),et.block.c(),d(n,"class","bold svelte-10oeym4"),f(y,"display","contents"),f(y,"--button-color","white"),f(y,"--button-width","2.8em"),d(e,"class","title svelte-10oeym4"),d(L,"class","sortable svelte-10oeym4"),d(L,"type","button"),d(M,"class","sortable svelte-10oeym4"),d(M,"type","button"),d(P,"class","sortable svelte-10oeym4"),d(P,"type","button"),d(C,"class","grid headings svelte-10oeym4")},m(o,i){p(o,e,i),g(e,n),g(e,s),g(e,y),a($,y,null),p(o,x,i),p(o,C,i),g(C,k),g(k,L),g(C,j),g(C,w),g(w,M),g(C,B),g(C,E),g(E,P),g(C,Y),g(C,D),g(C,H),g(C,S),g(C,K),g(C,Q),g(C,T),g(C,U),g(C,W),g(C,q),g(C,F),g(C,G),p(o,O,i),p(o,R,i),et.block.m(o,et.anchor=i),et.mount=()=>R.parentNode,et.anchor=R,V=!0,Z||(tt=[v(L,"click",t[3]),v(M,"click",t[4]),v(P,"click",t[5])],Z=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s),_(et,t,n)},i(t){V||(i($.$$.fragment,t),V=!0)},o(t){r($.$$.fragment,t),V=!1},d(t){t&&(h(e),h(x),h(C),h(O),h(R)),l($),et.block.d(t),et.token=null,et=null,Z=!1,b(tt)}}}function G(t){let e
return{c(){e=$("Creature Log")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function O(t){let e,n
return e=new E({props:{visible:t[0],$$slots:{title:[G],default:[F]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){o(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function R(t,e,n){let{visible:s=!0}=e
let o=[],a=1,i=""
const r=([t],[e])=>a*k(t,e),l=([,t],[,e])=>a*k(t,e),c=([,,t],[,,e])=>a*(t-e)
function m(t,e){a=i===e?a:1,n(1,o=o.slice().sort(t)),i=e,a*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,o,function(){y("Creature Log","close"),n(0,s=!1)},function(){y("Creature Log","sort by entity"),m(r,"entity")},function(){y("Creature Log","sort by class"),m(l,"class")},function(){y("Creature Log","sort by level"),m(c,"level")},async function(){const t=await Y("fsh_monsterLog")
t&&(n(1,o=x(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?x(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){y("Creature Log","clear storage"),await B("Are you sure you want to clear your log?")&&(n(1,o=[]),D("fsh_monsterLog",""))}]}var V=class extends e{constructor(t){super(),n(this,t,R,O,s,{visible:0},null,[-1,-1])}}
const Z={visible:!0}
let tt=0
function et(){tt=t(Z,tt,V)}export{et as default}
//# sourceMappingURL=creatureLog-iottnwje.js.map
