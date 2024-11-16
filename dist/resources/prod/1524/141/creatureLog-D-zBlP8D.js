import{i as t}from"./Modal-D6I5F6g9.js"
import{S as e,L as n,M as s,O as a,R as o,V as l,Z as i,N as r,aO as c,P as m,T as u,U as d,X as f,b9 as g,am as p,b5 as v,W as h,be as k,Y as b,bf as $,bg as x,bh as C,a2 as y,bi as L,s as w,bw as j,aQ as _,C as M,aS as N}from"./calfSystem-Blt4DbaE.js"
import{h as A,u as B}from"./await_block-Bf7EOqQ9.js"
import{L as E}from"./LinkButtonBracketed-C9l9Kpoo.js"
import{c as P}from"./confirm-DOY8kXhY.js"
import{M as S}from"./ModalTitled-DCrh-JGN.js"
import{a as D}from"./addCommas-C_h2HN8s.js"
import"./LinkButton-CTQrdC0s.js"
function O(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function T(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function G(t){let e
return{c(){e=l("Clear")},m(t,n){o(t,e,n)},d(t){t&&a(e)}}}function H(t){return{c:i,m:i,p:i,d:i}}function I(t){let e
function n(t,e){return t[1].length?R:Q}let s=n(t),l=s(t)
return{c(){l.c(),e=p()},m(t,n){l.m(t,n),o(t,e,n)},p(t,a){s===(s=n(t))&&l?l.p(t,a):(l.d(1),l=s(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){t&&a(e),l.d(t)}}}function Q(t){let e
return{c(){e=d("div"),e.textContent="No monster information! Please enable creature log and travel a bit to\n        see the world",f(e,"class","no-mobs svelte-69l0kk")},m(t,n){o(t,e,n)},p:i,d(t){t&&a(e)}}}function R(t){let e,n=r(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=X(O(t,n,e))
return{c(){e=d("div")
for(let t=0;t<s.length;t+=1)s[t].c()
f(e,"class","data grid svelte-69l0kk")},m(t,n){o(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,a){if(2&a[0]){let o
for(n=r(t[1]),o=0;o<n.length;o+=1){const l=O(t,n,o)
s[o]?s[o].p(l,a):(s[o]=X(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1)
s.length=n.length}},d(t){t&&a(e),g(s,t)}}}function U(t){let e
return{c(){e=d("div"),e.textContent="**Missing**",f(e,"class","missing svelte-69l0kk")},m(t,n){o(t,e,n)},p:i,d(t){t&&a(e)}}}function V(t){let e,n=r(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=W(T(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=p()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
o(t,e,n)},p(t,a){if(2&a[0]){let o
for(n=r(t[22]),o=0;o<n.length;o+=1){const l=T(t,n,o)
s[o]?s[o].p(l,a):(s[o]=W(l),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1)
s.length=n.length}},d(t){t&&a(e),g(s,t)}}}function W(t){let e,n,s,i,r,c,g=t[26]+"",p=t[27]+"",v=t[28]+""
return{c(){e=d("div"),n=l(g),s=l(": "),i=l(p),r=l(" - "),c=l(v),f(e,"class","enhancements svelte-69l0kk")},m(t,a){o(t,e,a),u(e,n),u(e,s),u(e,i),u(e,r),u(e,c)},p(t,e){2&e[0]&&g!==(g=t[26]+"")&&m(n,g),2&e[0]&&p!==(p=t[27]+"")&&m(i,p),2&e[0]&&v!==(v=t[28]+"")&&m(c,v)},d(t){t&&a(e)}}}function X(t){let e,n,s,i,r,g,p,k,b,$,x,C,y,L,w,j,_,M,N,A,B,E,P,S,O,T,G,H,I,Q,R,W,X,Y,Z,q,z,F,J,K,tt=`url('${c}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=D(t[16])+"",at=t[17].min+"",ot=t[17].max+"",lt=t[18].min+"",it=t[18].max+"",rt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function gt(t,e){return t[22]?V:U}let pt=gt(t),vt=pt(t)
return{c(){e=d("div"),n=d("div"),i=h(),r=d("div"),g=l(et),p=h(),k=d("div"),b=l(nt),$=h(),x=d("div"),C=l(st),y=h(),L=d("div"),w=l(at),j=l(" - "),_=l(ot),M=h(),N=d("div"),A=l(lt),B=l(" - "),E=l(it),P=h(),S=d("div"),O=l(rt),T=l(" - "),G=l(ct),H=h(),I=d("div"),Q=l(mt),R=l(" - "),W=l(ut),X=h(),Y=d("div"),Z=l(dt),q=l(" - "),z=l(ft),F=h(),J=d("div"),vt.c(),K=h(),f(n,"class","image tip-static svelte-69l0kk"),f(n,"data-tipped",s="<img height=200 src='"+c+"creatures/"+t[23]+".png' width=200>"),v(n,"background-image",tt),f(e,"class","entity svelte-69l0kk")},m(t,s){o(t,e,s),u(e,n),u(e,i),u(e,r),u(r,g),o(t,p,s),o(t,k,s),u(k,b),o(t,$,s),o(t,x,s),u(x,C),o(t,y,s),o(t,L,s),u(L,w),u(L,j),u(L,_),o(t,M,s),o(t,N,s),u(N,A),u(N,B),u(N,E),o(t,P,s),o(t,S,s),u(S,O),u(S,T),u(S,G),o(t,H,s),o(t,I,s),u(I,Q),u(I,R),u(I,W),o(t,X,s),o(t,Y,s),u(Y,Z),u(Y,q),u(Y,z),o(t,F,s),o(t,J,s),vt.m(J,null),u(J,K)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+c+"creatures/"+t[23]+".png' width=200>")&&f(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${c}creatures/${t[23]}.png')`)&&v(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&m(g,et),2&e[0]&&nt!==(nt=t[15]+"")&&m(b,nt),2&e[0]&&st!==(st=D(t[16])+"")&&m(C,st),2&e[0]&&at!==(at=t[17].min+"")&&m(w,at),2&e[0]&&ot!==(ot=t[17].max+"")&&m(_,ot),2&e[0]&&lt!==(lt=t[18].min+"")&&m(A,lt),2&e[0]&&it!==(it=t[18].max+"")&&m(E,it),2&e[0]&&rt!==(rt=t[19].min+"")&&m(O,rt),2&e[0]&&ct!==(ct=t[19].max+"")&&m(G,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&m(Q,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&m(W,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&m(Z,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&m(z,ft),pt===(pt=gt(t))&&vt?vt.p(t,e):(vt.d(1),vt=pt(t),vt&&(vt.c(),vt.m(J,K)))},d(t){t&&(a(e),a(p),a(k),a($),a(x),a(y),a(L),a(M),a(N),a(P),a(S),a(H),a(I),a(X),a(Y),a(F),a(J)),vt.d()}}}function Y(t){return{c:i,m:i,p:i,d:i}}function Z(t){let e,n,s,l,i,r,c,m,g,w,j,_,M,N,P,S,D,O,T,Q,R,U,V,W,X,Z,q,z,F,J,K,tt
l=new E({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),l.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:Y,then:I,catch:H}
return A(t[6](),et),{c(){e=d("div"),n=d("span"),n.textContent="Entity Information",s=h(),i=d("div"),L(l.$$.fragment),r=h(),c=d("div"),m=d("div"),g=d("button"),g.textContent="Entity",w=h(),j=d("div"),_=d("button"),_.textContent="Class",M=h(),N=d("div"),P=d("button"),P.textContent="Lvl",S=h(),D=d("div"),D.textContent="Attack",O=h(),T=d("div"),T.textContent="Defense",Q=h(),R=d("div"),R.textContent="Armor",U=h(),V=d("div"),V.textContent="Damage",W=h(),X=d("div"),X.textContent="HP",Z=h(),q=d("div"),q.textContent="Enhancements",z=h(),F=p(),et.block.c(),f(n,"class","bold svelte-69l0kk"),v(i,"display","contents"),v(i,"--button-color","white"),v(i,"--button-width","2.8em"),f(e,"class","title svelte-69l0kk"),f(g,"class","sortable svelte-69l0kk"),f(g,"type","button"),f(_,"class","sortable svelte-69l0kk"),f(_,"type","button"),f(P,"class","sortable svelte-69l0kk"),f(P,"type","button"),f(c,"class","grid headings svelte-69l0kk")},m(a,d){o(a,e,d),u(e,n),u(e,s),u(e,i),C(l,i,null),o(a,r,d),o(a,c,d),u(c,m),u(m,g),u(c,w),u(c,j),u(j,_),u(c,M),u(c,N),u(N,P),u(c,S),u(c,D),u(c,O),u(c,T),u(c,Q),u(c,R),u(c,U),u(c,V),u(c,W),u(c,X),u(c,Z),u(c,q),o(a,z,d),o(a,F,d),et.block.m(a,et.anchor=d),et.mount=()=>F.parentNode,et.anchor=F,J=!0,K||(tt=[y(g,"click",t[3]),y(_,"click",t[4]),y(P,"click",t[5])],K=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),l.$set(s),B(et,t,n)},i(t){J||(x(l.$$.fragment,t),J=!0)},o(t){$(l.$$.fragment,t),J=!1},d(t){t&&(a(e),a(r),a(c),a(z),a(F)),k(l),et.block.d(t),et.token=null,et=null,K=!1,b(tt)}}}function q(t){let e
return{c(){e=l("Creature Log")},m(t,n){o(t,e,n)},d(t){t&&a(e)}}}function z(t){let e,n
return e=new S({props:{visible:t[0],$$slots:{title:[q],default:[Z]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){L(e.$$.fragment)},m(t,s){C(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function F(t,e,n){let{visible:s=!0}=e
let a=[],o=1,l=""
const i=([t],[e])=>o*j(t,e),r=([,t],[,e])=>o*j(t,e),c=([,,t],[,,e])=>o*(t-e)
function m(t,e){o=l===e?o:1,n(1,a=a.slice().sort(t)),l=e,o*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,a,function(){w("Creature Log","close"),n(0,s=!1)},function(){w("Creature Log","sort by entity"),m(i,"entity")},function(){w("Creature Log","sort by class"),m(r,"class")},function(){w("Creature Log","sort by level"),m(c,"level")},async function(){const t=await _("fsh_monsterLog")
t&&(n(1,a=M(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?M(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){w("Creature Log","clear storage"),await P("Are you sure you want to clear your log?")&&(n(1,a=[]),N("fsh_monsterLog",""))}]}class J extends e{constructor(t){super(),n(this,t,F,z,s,{visible:0},null,[-1,-1])}}const K={visible:!0}
let tt=0
function et(){tt=t(K,tt,J)}export{et as default}
//# sourceMappingURL=creatureLog-D-zBlP8D.js.map
