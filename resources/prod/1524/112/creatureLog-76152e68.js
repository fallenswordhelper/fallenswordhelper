import{i as t}from"./instantiate-880b172e.js"
import{S as e,J as n,K as s,ba as o,bb as a,b5 as i,b8 as r,bc as l,L as c,M as m,ah as u,N as d,aY as f,P as p,Q as g,U as v,X as h,Y as b,_ as $,n as y,C as x,W as C,bl as k,aZ as L,aI as j,a0 as w}from"./calfSystem-4830a18d.js"
import{h as _,u as M}from"./await_block-31b017e2.js"
import{e as N}from"./each-1f09c43f.js"
import{L as A}from"./LinkButtonBracketed-0fb81602.js"
import{c as B}from"./confirm-68e1ea7c.js"
import{M as E}from"./ModalTitled-c3fc6c07.js"
import{a as P}from"./addCommas-47d6aaa1.js"
import{g as Y,s as D}from"./idb-7e56faaa.js"
import"./LinkButton-59368dc4.js"
import"./Modal-75c69e5d.js"
function I(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function S(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function H(t){let e
return{c(){e=$("Clear")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function J(t){return{c:C,m:C,p:C,d:C}}function K(t){let e
function n(t,e){return t[1].length?T:Q}let s=n(t),o=s(t)
return{c(){o.c(),e=u()},m(t,n){o.m(t,n),p(t,e,n)},p(t,a){s===(s=n(t))&&o?o.p(t,a):(o.d(1),o=s(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){t&&h(e),o.d(t)}}}function Q(t){let e
return{c(){e=c("div"),e.textContent="No monster information! Please enable creature log and travel a bit to see the world",d(e,"class","no-mobs svelte-10oeym4")},m(t,n){p(t,e,n)},p:C,d(t){t&&h(e)}}}function T(t){let e,n=N(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=Z(I(t,n,e))
return{c(){e=c("div")
for(let t=0;t<s.length;t+=1)s[t].c()
d(e,"class","data grid svelte-10oeym4")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,o){if(2&o[0]){let a
for(n=N(t[1]),a=0;a<n.length;a+=1){const i=I(t,n,a)
s[a]?s[a].p(i,o):(s[a]=Z(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),L(s,t)}}}function U(t){let e
return{c(){e=c("div"),e.textContent="**Missing**",d(e,"class","missing svelte-10oeym4")},m(t,n){p(t,e,n)},p:C,d(t){t&&h(e)}}}function W(t){let e,n=N(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=X(S(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=u()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
p(t,e,n)},p(t,o){if(2&o[0]){let a
for(n=N(t[22]),a=0;a<n.length;a+=1){const i=S(t,n,a)
s[a]?s[a].p(i,o):(s[a]=X(i),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),L(s,t)}}}function X(t){let e,n,s,o,a,i,r=t[26]+"",l=t[27]+"",m=t[28]+""
return{c(){e=c("div"),n=$(r),s=$(": "),o=$(l),a=$(" - "),i=$(m),d(e,"class","enhancements svelte-10oeym4")},m(t,r){p(t,e,r),g(e,n),g(e,s),g(e,o),g(e,a),g(e,i)},p(t,e){2&e[0]&&r!==(r=t[26]+"")&&w(n,r),2&e[0]&&l!==(l=t[27]+"")&&w(o,l),2&e[0]&&m!==(m=t[28]+"")&&w(i,m)},d(t){t&&h(e)}}}function Z(t){let e,n,s,o,a,i,r,l,u,v,b,y,x,C,k,L,_,M,N,A,B,E,Y,D,I,S,H,J,K,Q,T,X,Z,q,z,F,G,O,R,V,tt=`url('${j}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=P(t[16])+"",ot=t[17].min+"",at=t[17].max+"",it=t[18].min+"",rt=t[18].max+"",lt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function pt(t,e){return t[22]?W:U}let gt=pt(t),vt=gt(t)
return{c(){e=c("div"),n=c("div"),o=m(),a=c("div"),i=$(et),r=m(),l=c("div"),u=$(nt),v=m(),b=c("div"),y=$(st),x=m(),C=c("div"),k=$(ot),L=$(" - "),_=$(at),M=m(),N=c("div"),A=$(it),B=$(" - "),E=$(rt),Y=m(),D=c("div"),I=$(lt),S=$(" - "),H=$(ct),J=m(),K=c("div"),Q=$(mt),T=$(" - "),X=$(ut),Z=m(),q=c("div"),z=$(dt),F=$(" - "),G=$(ft),O=m(),R=c("div"),vt.c(),V=m(),d(n,"class","image tip-static svelte-10oeym4"),d(n,"data-tipped",s="<img height=200 src='"+j+"creatures/"+t[23]+".png' width=200>"),f(n,"background-image",tt),d(e,"class","entity svelte-10oeym4")},m(t,s){p(t,e,s),g(e,n),g(e,o),g(e,a),g(a,i),p(t,r,s),p(t,l,s),g(l,u),p(t,v,s),p(t,b,s),g(b,y),p(t,x,s),p(t,C,s),g(C,k),g(C,L),g(C,_),p(t,M,s),p(t,N,s),g(N,A),g(N,B),g(N,E),p(t,Y,s),p(t,D,s),g(D,I),g(D,S),g(D,H),p(t,J,s),p(t,K,s),g(K,Q),g(K,T),g(K,X),p(t,Z,s),p(t,q,s),g(q,z),g(q,F),g(q,G),p(t,O,s),p(t,R,s),vt.m(R,null),g(R,V)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+j+"creatures/"+t[23]+".png' width=200>")&&d(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${j}creatures/${t[23]}.png')`)&&f(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&w(i,et),2&e[0]&&nt!==(nt=t[15]+"")&&w(u,nt),2&e[0]&&st!==(st=P(t[16])+"")&&w(y,st),2&e[0]&&ot!==(ot=t[17].min+"")&&w(k,ot),2&e[0]&&at!==(at=t[17].max+"")&&w(_,at),2&e[0]&&it!==(it=t[18].min+"")&&w(A,it),2&e[0]&&rt!==(rt=t[18].max+"")&&w(E,rt),2&e[0]&&lt!==(lt=t[19].min+"")&&w(I,lt),2&e[0]&&ct!==(ct=t[19].max+"")&&w(H,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&w(Q,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&w(X,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&w(z,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&w(G,ft),gt===(gt=pt(t))&&vt?vt.p(t,e):(vt.d(1),vt=gt(t),vt&&(vt.c(),vt.m(R,V)))},d(t){t&&(h(e),h(r),h(l),h(v),h(b),h(x),h(C),h(M),h(N),h(Y),h(D),h(J),h(K),h(Z),h(q),h(O),h(R)),vt.d()}}}function q(t){return{c:C,m:C,p:C,d:C}}function z(t){let e,n,s,$,y,x,C,k,L,j,w,N,B,E,P,Y,D,I,S,Q,T,U,W,X,Z,z,F,G,O,R,V,tt
$=new A({props:{$$slots:{default:[H]},$$scope:{ctx:t}}}),$.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:q,then:K,catch:J}
return _(t[6](),et),{c(){e=c("div"),n=c("span"),n.textContent="Entity Information",s=m(),y=c("div"),o($.$$.fragment),x=m(),C=c("div"),k=c("div"),L=c("button"),L.textContent="Entity",j=m(),w=c("div"),N=c("button"),N.textContent="Class",B=m(),E=c("div"),P=c("button"),P.textContent="Lvl",Y=m(),D=c("div"),D.textContent="Attack",I=m(),S=c("div"),S.textContent="Defense",Q=m(),T=c("div"),T.textContent="Armor",U=m(),W=c("div"),W.textContent="Damage",X=m(),Z=c("div"),Z.textContent="HP",z=m(),F=c("div"),F.textContent="Enhancements",G=m(),O=u(),et.block.c(),d(n,"class","bold svelte-10oeym4"),f(y,"display","contents"),f(y,"--button-color","white"),f(y,"--button-width","2.8em"),d(e,"class","title svelte-10oeym4"),d(L,"class","sortable svelte-10oeym4"),d(L,"type","button"),d(N,"class","sortable svelte-10oeym4"),d(N,"type","button"),d(P,"class","sortable svelte-10oeym4"),d(P,"type","button"),d(C,"class","grid headings svelte-10oeym4")},m(o,i){p(o,e,i),g(e,n),g(e,s),g(e,y),a($,y,null),p(o,x,i),p(o,C,i),g(C,k),g(k,L),g(C,j),g(C,w),g(w,N),g(C,B),g(C,E),g(E,P),g(C,Y),g(C,D),g(C,I),g(C,S),g(C,Q),g(C,T),g(C,U),g(C,W),g(C,X),g(C,Z),g(C,z),g(C,F),p(o,G,i),p(o,O,i),et.block.m(o,et.anchor=i),et.mount=()=>O.parentNode,et.anchor=O,R=!0,V||(tt=[v(L,"click",t[3]),v(N,"click",t[4]),v(P,"click",t[5])],V=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s),M(et,t,n)},i(t){R||(i($.$$.fragment,t),R=!0)},o(t){r($.$$.fragment,t),R=!1},d(t){t&&(h(e),h(x),h(C),h(G),h(O)),l($),et.block.d(t),et.token=null,et=null,V=!1,b(tt)}}}function F(t){let e
return{c(){e=$("Creature Log")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function G(t){let e,n
return e=new E({props:{visible:t[0],$$slots:{title:[F],default:[z]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){o(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function O(t,e,n){let{visible:s=!0}=e
let o=[],a=1,i=""
const r=([t],[e])=>a*k(t,e),l=([,t],[,e])=>a*k(t,e),c=([,,t],[,,e])=>a*(t-e)
function m(t,e){a=i===e?a:1,n(1,o=o.slice().sort(t)),i=e,a*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,o,function(){y("Creature Log","close"),n(0,s=!1)},function(){y("Creature Log","sort by entity"),m(r,"entity")},function(){y("Creature Log","sort by class"),m(l,"class")},function(){y("Creature Log","sort by level"),m(c,"level")},async function(){const t=await Y("fsh_monsterLog")
t&&(n(1,o=x(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?x(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){y("Creature Log","clear storage"),await B("Are you sure you want to clear your log?")&&(n(1,o=[]),D("fsh_monsterLog",""))}]}var R=class extends e{constructor(t){super(),n(this,t,O,G,s,{visible:0},null,[-1,-1])}}
const V={visible:!0}
let tt=0
function et(){tt=t(V,tt,R)}export{et as default}
//# sourceMappingURL=creatureLog-76152e68.js.map
