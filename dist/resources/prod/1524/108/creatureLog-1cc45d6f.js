import{i as t}from"./instantiate-880b172e.js"
import{S as e,L as n,M as s,bf as o,bg as a,ba as i,bd as l,bh as r,N as c,O as m,a1 as u,aj as d,P as f,R as v,T as g,W as p,Z as h,_ as b,n as y,C as x,Y as C,bq as $,b0 as k,aL as L,a$ as j,a2 as w}from"./calfSystem-34913441.js"
import{h as _,u as M}from"./await_block-d58cecee.js"
import{e as N}from"./each-6f7f5a14.js"
import{c as A}from"./confirm-e3cb1a1b.js"
import{M as E}from"./ModalTitled-945b0136.js"
import{a as P}from"./addCommas-47d6aaa1.js"
import{g as D,s as S}from"./idb-ec5d6344.js"
import"./Modal-108b3dd4.js"
function T(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function Y(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function q(t){return{c:C,m:C,p:C,d:C}}function H(t){let e
function n(t,e){return t[1].length?O:I}let s=n(t),o=s(t)
return{c(){o.c(),e=d()},m(t,n){o.m(t,n),v(t,e,n)},p(t,a){s===(s=n(t))&&o?o.p(t,a):(o.d(1),o=s(t),o&&(o.c(),o.m(e.parentNode,e)))},d(t){t&&h(e),o.d(t)}}}function I(t){let e
return{c(){e=c("div"),e.textContent="No monster information! Please enable creature log and travel a bit to see the world",f(e,"class","no-mobs svelte-10oeym4")},m(t,n){v(t,e,n)},p:C,d(t){t&&h(e)}}}function O(t){let e,n=N(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=z(T(t,n,e))
return{c(){e=c("div")
for(let t=0;t<s.length;t+=1)s[t].c()
f(e,"class","data grid svelte-10oeym4")},m(t,n){v(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,o){if(2&o[0]){let a
for(n=N(t[1]),a=0;a<n.length;a+=1){const i=T(t,n,a)
s[a]?s[a].p(i,o):(s[a]=z(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),k(s,t)}}}function R(t){let e
return{c(){e=c("div"),e.textContent="**Missing**",f(e,"class","missing svelte-10oeym4")},m(t,n){v(t,e,n)},p:C,d(t){t&&h(e)}}}function W(t){let e,n=N(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=Z(Y(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=d()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
v(t,e,n)},p(t,o){if(2&o[0]){let a
for(n=N(t[22]),a=0;a<n.length;a+=1){const i=Y(t,n,a)
s[a]?s[a].p(i,o):(s[a]=Z(i),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1)
s.length=n.length}},d(t){t&&h(e),k(s,t)}}}function Z(t){let e,n,s,o,a,i,l=t[26]+"",r=t[27]+"",m=t[28]+""
return{c(){e=c("div"),n=u(l),s=u(": "),o=u(r),a=u(" - "),i=u(m),f(e,"class","enhancements svelte-10oeym4")},m(t,l){v(t,e,l),g(e,n),g(e,s),g(e,o),g(e,a),g(e,i)},p(t,e){2&e[0]&&l!==(l=t[26]+"")&&w(n,l),2&e[0]&&r!==(r=t[27]+"")&&w(o,r),2&e[0]&&m!==(m=t[28]+"")&&w(i,m)},d(t){t&&h(e)}}}function z(t){let e,n,s,o,a,i,l,r,d,p,b,y,x,C,$,k,_,M,N,A,E,D,S,T,Y,q,H,I,O,Z,z,B,F,G,J,K,Q,U,V,X,tt=`url('${L}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=P(t[16])+"",ot=t[17].min+"",at=t[17].max+"",it=t[18].min+"",lt=t[18].max+"",rt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function vt(t,e){return t[22]?W:R}let gt=vt(t),pt=gt(t)
return{c(){e=c("div"),n=c("div"),o=m(),a=c("div"),i=u(et),l=m(),r=c("div"),d=u(nt),p=m(),b=c("div"),y=u(st),x=m(),C=c("div"),$=u(ot),k=u(" - "),_=u(at),M=m(),N=c("div"),A=u(it),E=u(" - "),D=u(lt),S=m(),T=c("div"),Y=u(rt),q=u(" - "),H=u(ct),I=m(),O=c("div"),Z=u(mt),z=u(" - "),B=u(ut),F=m(),G=c("div"),J=u(dt),K=u(" - "),Q=u(ft),U=m(),V=c("div"),pt.c(),X=m(),f(n,"class","image tip-static svelte-10oeym4"),f(n,"data-tipped",s="<img height=200 src='"+L+"creatures/"+t[23]+".png' width=200>"),j(n,"background-image",tt),f(e,"class","entity svelte-10oeym4")},m(t,s){v(t,e,s),g(e,n),g(e,o),g(e,a),g(a,i),v(t,l,s),v(t,r,s),g(r,d),v(t,p,s),v(t,b,s),g(b,y),v(t,x,s),v(t,C,s),g(C,$),g(C,k),g(C,_),v(t,M,s),v(t,N,s),g(N,A),g(N,E),g(N,D),v(t,S,s),v(t,T,s),g(T,Y),g(T,q),g(T,H),v(t,I,s),v(t,O,s),g(O,Z),g(O,z),g(O,B),v(t,F,s),v(t,G,s),g(G,J),g(G,K),g(G,Q),v(t,U,s),v(t,V,s),pt.m(V,null),g(V,X)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+L+"creatures/"+t[23]+".png' width=200>")&&f(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${L}creatures/${t[23]}.png')`)&&j(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&w(i,et),2&e[0]&&nt!==(nt=t[15]+"")&&w(d,nt),2&e[0]&&st!==(st=P(t[16])+"")&&w(y,st),2&e[0]&&ot!==(ot=t[17].min+"")&&w($,ot),2&e[0]&&at!==(at=t[17].max+"")&&w(_,at),2&e[0]&&it!==(it=t[18].min+"")&&w(A,it),2&e[0]&&lt!==(lt=t[18].max+"")&&w(D,lt),2&e[0]&&rt!==(rt=t[19].min+"")&&w(Y,rt),2&e[0]&&ct!==(ct=t[19].max+"")&&w(H,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&w(Z,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&w(B,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&w(J,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&w(Q,ft),gt===(gt=vt(t))&&pt?pt.p(t,e):(pt.d(1),pt=gt(t),pt&&(pt.c(),pt.m(V,X)))},d(t){t&&(h(e),h(l),h(r),h(p),h(b),h(x),h(C),h(M),h(N),h(S),h(T),h(I),h(O),h(F),h(G),h(U),h(V)),pt.d()}}}function B(t){return{c:C,m:C,p:C,d:C}}function F(t){let e,n,s,o,a,i,l,r,y,x,C,$,k,L,j,w,N,A,E,P,D,S,T,Y,I,O,R,W,Z,z,F,G,J,K={ctx:t,current:null,token:null,hasCatch:!1,pending:B,then:H,catch:q}
return _(t[6](),K),{c(){e=c("div"),n=c("span"),n.textContent="Entity Information",s=m(),o=c("div"),a=u("[ "),i=c("button"),i.textContent="Clear",l=u(" ]"),r=m(),y=c("div"),x=c("div"),C=c("button"),C.textContent="Entity",$=m(),k=c("div"),L=c("button"),L.textContent="Class",j=m(),w=c("div"),N=c("button"),N.textContent="Lvl",A=m(),E=c("div"),E.textContent="Attack",P=m(),D=c("div"),D.textContent="Defense",S=m(),T=c("div"),T.textContent="Armor",Y=m(),I=c("div"),I.textContent="Damage",O=m(),R=c("div"),R.textContent="HP",W=m(),Z=c("div"),Z.textContent="Enhancements",z=m(),F=d(),K.block.c(),f(n,"class","bold svelte-10oeym4"),f(i,"type","button"),f(i,"class","svelte-10oeym4"),f(e,"class","title svelte-10oeym4"),f(C,"class","sortable svelte-10oeym4"),f(C,"type","button"),f(L,"class","sortable svelte-10oeym4"),f(L,"type","button"),f(N,"class","sortable svelte-10oeym4"),f(N,"type","button"),f(y,"class","grid headings svelte-10oeym4")},m(c,m){v(c,e,m),g(e,n),g(e,s),g(e,o),g(o,a),g(o,i),g(o,l),v(c,r,m),v(c,y,m),g(y,x),g(x,C),g(y,$),g(y,k),g(k,L),g(y,j),g(y,w),g(w,N),g(y,A),g(y,E),g(y,P),g(y,D),g(y,S),g(y,T),g(y,Y),g(y,I),g(y,O),g(y,R),g(y,W),g(y,Z),v(c,z,m),v(c,F,m),K.block.m(c,K.anchor=m),K.mount=()=>F.parentNode,K.anchor=F,G||(J=[p(i,"click",t[7]),p(C,"click",t[3]),p(L,"click",t[4]),p(N,"click",t[5])],G=!0)},p(e,n){M(K,t=e,n)},d(t){t&&(h(e),h(r),h(y),h(z),h(F)),K.block.d(t),K.token=null,K=null,G=!1,b(J)}}}function G(t){let e
return{c(){e=u("Creature Log")},m(t,n){v(t,e,n)},d(t){t&&h(e)}}}function J(t){let e,n
return e=new E({props:{visible:t[0],$$slots:{title:[G],default:[F]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){o(e.$$.fragment)},m(t,s){a(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function K(t,e,n){let{visible:s=!0}=e
let o=[],a=1,i=""
const l=([t],[e])=>a*$(t,e),r=([,t],[,e])=>a*$(t,e),c=([,,t],[,,e])=>a*(t-e)
function m(t,e){a=i===e?a:1,n(1,o=o.slice().sort(t)),i=e,a*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,o,function(){y("Creature Log","close"),n(0,s=!1)},function(){y("Creature Log","sort by entity"),m(l,"entity")},function(){y("Creature Log","sort by class"),m(r,"class")},function(){y("Creature Log","sort by level"),m(c,"level")},async function(){const t=await D("fsh_monsterLog")
t&&(n(1,o=x(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?x(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){y("Creature Log","clear storage"),await A("Are you sure you want to clear your log?")&&(n(1,o=[]),S("fsh_monsterLog",""))}]}var Q=class extends e{constructor(t){super(),n(this,t,K,J,s,{visible:0},null,[-1,-1])}}
const U={visible:!0}
let V=0
function X(){V=t(U,V,Q)}export{X as default}
//# sourceMappingURL=creatureLog-1cc45d6f.js.map
