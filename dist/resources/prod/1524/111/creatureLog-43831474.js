import{i as t}from"./instantiate-880b172e.js"
import{S as e,K as n,L as s,bb as o,bc as a,b6 as i,b9 as r,bd as l,M as c,N as m,ai as u,O as d,aZ as f,Q as p,R as g,V as v,Y as h,Z as b,a0 as $,n as y,C as x,X as C,bm as k,a_ as L,aJ as j,a1 as w}from"./calfSystem-abb16b0d.js"
import{h as _,u as M}from"./await_block-78969f55.js"
import{e as N}from"./each-13c4feae.js"
import{L as A}from"./LinkButtonBracketed-4d890186.js"
import{c as B}from"./confirm-e11e045c.js"
import{M as E}from"./ModalTitled-3d3c0c48.js"
import{a as D}from"./addCommas-47d6aaa1.js"
import{g as K,s as P}from"./idb-e719862a.js"
import"./LinkButton-e3c794a4.js"
import"./Modal-f3893d54.js"
function S(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function Y(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function Z(t){let e
return{c(){e=$("Clear")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function H(t){return{c:C,m:C,p:C,d:C}}function I(t){let e
function n(t,e){return t[1].length?O:J}let s=n(t),o=s(t)
return{c(){o.c(),e=u()},m(t,n){o.m(t,n),p(t,e,n)},p(t,a){s===(s=n(t))&&o?o.p(t,a):(o.d(1),o=s(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){t&&h(e),o.d(t)}}}function J(t){let e
return{c(){e=c("div"),e.textContent="No monster information! Please enable creature log and travel a bit to see the world",d(e,"class","no-mobs svelte-10oeym4")},m(t,n){p(t,e,n)},p:C,d(t){t&&h(e)}}}function O(t){let e,n=N(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=V(S(t,n,e))
return{c(){e=c("div")
for(let t=0;t<s.length;t+=1)s[t].c()
d(e,"class","data grid svelte-10oeym4")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,o){if(2&o[0]){let a
for(n=N(t[1]),a=0;a<n.length;a+=1){const i=S(t,n,a)
s[a]?s[a].p(i,o):(s[a]=V(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),L(s,t)}}}function Q(t){let e
return{c(){e=c("div"),e.textContent="**Missing**",d(e,"class","missing svelte-10oeym4")},m(t,n){p(t,e,n)},p:C,d(t){t&&h(e)}}}function R(t){let e,n=N(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=T(Y(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=u()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
p(t,e,n)},p(t,o){if(2&o[0]){let a
for(n=N(t[22]),a=0;a<n.length;a+=1){const i=Y(t,n,a)
s[a]?s[a].p(i,o):(s[a]=T(i),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),L(s,t)}}}function T(t){let e,n,s,o,a,i,r=t[26]+"",l=t[27]+"",m=t[28]+""
return{c(){e=c("div"),n=$(r),s=$(": "),o=$(l),a=$(" - "),i=$(m),d(e,"class","enhancements svelte-10oeym4")},m(t,r){p(t,e,r),g(e,n),g(e,s),g(e,o),g(e,a),g(e,i)},p(t,e){2&e[0]&&r!==(r=t[26]+"")&&w(n,r),2&e[0]&&l!==(l=t[27]+"")&&w(o,l),2&e[0]&&m!==(m=t[28]+"")&&w(i,m)},d(t){t&&h(e)}}}function V(t){let e,n,s,o,a,i,r,l,u,v,b,y,x,C,k,L,_,M,N,A,B,E,K,P,S,Y,Z,H,I,J,O,T,V,X,q,z,F,G,U,W,tt=`url('${j}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=D(t[16])+"",ot=t[17].min+"",at=t[17].max+"",it=t[18].min+"",rt=t[18].max+"",lt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function pt(t,e){return t[22]?R:Q}let gt=pt(t),vt=gt(t)
return{c(){e=c("div"),n=c("div"),o=m(),a=c("div"),i=$(et),r=m(),l=c("div"),u=$(nt),v=m(),b=c("div"),y=$(st),x=m(),C=c("div"),k=$(ot),L=$(" - "),_=$(at),M=m(),N=c("div"),A=$(it),B=$(" - "),E=$(rt),K=m(),P=c("div"),S=$(lt),Y=$(" - "),Z=$(ct),H=m(),I=c("div"),J=$(mt),O=$(" - "),T=$(ut),V=m(),X=c("div"),q=$(dt),z=$(" - "),F=$(ft),G=m(),U=c("div"),vt.c(),W=m(),d(n,"class","image tip-static svelte-10oeym4"),d(n,"data-tipped",s="<img height=200 src='"+j+"creatures/"+t[23]+".png' width=200>"),f(n,"background-image",tt),d(e,"class","entity svelte-10oeym4")},m(t,s){p(t,e,s),g(e,n),g(e,o),g(e,a),g(a,i),p(t,r,s),p(t,l,s),g(l,u),p(t,v,s),p(t,b,s),g(b,y),p(t,x,s),p(t,C,s),g(C,k),g(C,L),g(C,_),p(t,M,s),p(t,N,s),g(N,A),g(N,B),g(N,E),p(t,K,s),p(t,P,s),g(P,S),g(P,Y),g(P,Z),p(t,H,s),p(t,I,s),g(I,J),g(I,O),g(I,T),p(t,V,s),p(t,X,s),g(X,q),g(X,z),g(X,F),p(t,G,s),p(t,U,s),vt.m(U,null),g(U,W)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+j+"creatures/"+t[23]+".png' width=200>")&&d(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${j}creatures/${t[23]}.png')`)&&f(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&w(i,et),2&e[0]&&nt!==(nt=t[15]+"")&&w(u,nt),2&e[0]&&st!==(st=D(t[16])+"")&&w(y,st),2&e[0]&&ot!==(ot=t[17].min+"")&&w(k,ot),2&e[0]&&at!==(at=t[17].max+"")&&w(_,at),2&e[0]&&it!==(it=t[18].min+"")&&w(A,it),2&e[0]&&rt!==(rt=t[18].max+"")&&w(E,rt),2&e[0]&&lt!==(lt=t[19].min+"")&&w(S,lt),2&e[0]&&ct!==(ct=t[19].max+"")&&w(Z,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&w(J,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&w(T,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&w(q,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&w(F,ft),gt===(gt=pt(t))&&vt?vt.p(t,e):(vt.d(1),vt=gt(t),vt&&(vt.c(),vt.m(U,W)))},d(t){t&&(h(e),h(r),h(l),h(v),h(b),h(x),h(C),h(M),h(N),h(K),h(P),h(H),h(I),h(V),h(X),h(G),h(U)),vt.d()}}}function X(t){return{c:C,m:C,p:C,d:C}}function q(t){let e,n,s,$,y,x,C,k,L,j,w,N,B,E,D,K,P,S,Y,J,O,Q,R,T,V,q,z,F,G,U,W,tt
$=new A({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),$.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:X,then:I,catch:H}
return _(t[6](),et),{c(){e=c("div"),n=c("span"),n.textContent="Entity Information",s=m(),y=c("div"),o($.$$.fragment),x=m(),C=c("div"),k=c("div"),L=c("button"),L.textContent="Entity",j=m(),w=c("div"),N=c("button"),N.textContent="Class",B=m(),E=c("div"),D=c("button"),D.textContent="Lvl",K=m(),P=c("div"),P.textContent="Attack",S=m(),Y=c("div"),Y.textContent="Defense",J=m(),O=c("div"),O.textContent="Armor",Q=m(),R=c("div"),R.textContent="Damage",T=m(),V=c("div"),V.textContent="HP",q=m(),z=c("div"),z.textContent="Enhancements",F=m(),G=u(),et.block.c(),d(n,"class","bold svelte-10oeym4"),f(y,"display","contents"),f(y,"--button-color","white"),f(y,"--button-width","2.8em"),d(e,"class","title svelte-10oeym4"),d(L,"class","sortable svelte-10oeym4"),d(L,"type","button"),d(N,"class","sortable svelte-10oeym4"),d(N,"type","button"),d(D,"class","sortable svelte-10oeym4"),d(D,"type","button"),d(C,"class","grid headings svelte-10oeym4")},m(o,i){p(o,e,i),g(e,n),g(e,s),g(e,y),a($,y,null),p(o,x,i),p(o,C,i),g(C,k),g(k,L),g(C,j),g(C,w),g(w,N),g(C,B),g(C,E),g(E,D),g(C,K),g(C,P),g(C,S),g(C,Y),g(C,J),g(C,O),g(C,Q),g(C,R),g(C,T),g(C,V),g(C,q),g(C,z),p(o,F,i),p(o,G,i),et.block.m(o,et.anchor=i),et.mount=()=>G.parentNode,et.anchor=G,U=!0,W||(tt=[v(L,"click",t[3]),v(N,"click",t[4]),v(D,"click",t[5])],W=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),$.$set(s),M(et,t,n)},i(t){U||(i($.$$.fragment,t),U=!0)},o(t){r($.$$.fragment,t),U=!1},d(t){t&&(h(e),h(x),h(C),h(F),h(G)),l($),et.block.d(t),et.token=null,et=null,W=!1,b(tt)}}}function z(t){let e
return{c(){e=$("Creature Log")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function F(t){let e,n
return e=new E({props:{visible:t[0],$$slots:{title:[z],default:[q]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){o(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){r(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function G(t,e,n){let{visible:s=!0}=e
let o=[],a=1,i=""
const r=([t],[e])=>a*k(t,e),l=([,t],[,e])=>a*k(t,e),c=([,,t],[,,e])=>a*(t-e)
function m(t,e){a=i===e?a:1,n(1,o=o.slice().sort(t)),i=e,a*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,o,function(){y("Creature Log","close"),n(0,s=!1)},function(){y("Creature Log","sort by entity"),m(r,"entity")},function(){y("Creature Log","sort by class"),m(l,"class")},function(){y("Creature Log","sort by level"),m(c,"level")},async function(){const t=await K("fsh_monsterLog")
t&&(n(1,o=x(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?x(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){y("Creature Log","clear storage"),await B("Are you sure you want to clear your log?")&&(n(1,o=[]),P("fsh_monsterLog",""))}]}var U=class extends e{constructor(t){super(),n(this,t,G,F,s,{visible:0},null,[-1,-1])}}
const W={visible:!0}
let tt=0
function et(){tt=t(W,tt,U)}export{et as default}
//# sourceMappingURL=creatureLog-43831474.js.map
