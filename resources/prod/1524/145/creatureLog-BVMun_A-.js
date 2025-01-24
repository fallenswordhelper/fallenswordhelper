import{i as t}from"./Modal-Cc9OeAYd.js"
import{S as e,O as n,P as s,bF as a,bG as l,bA as o,bD as i,bH as r,as as c,R as m,T as u,av as d,U as f,bo as g,W as p,X as v,_ as b,at as k,a4 as h,a5 as $,a7 as x,s as C,b6 as y,E as L,b8 as w,a3 as j,bU as A,Q as _,bp as B,b5 as E,a8 as M}from"./calfSystem-CvwhhJv4.js"
import{L as N}from"./LinkButtonBracketed-CA2auUeo.js"
import{c as D}from"./confirm-NdPgDHCg.js"
import{M as P}from"./ModalTitled-BuRy86X7.js"
import{a as H}from"./addCommas-C_h2HN8s.js"
import"./LinkButton-DGK9y3f9.js"
function S(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function T(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function U(t){let e
return{c(){e=x("Clear")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function z(t){return{c:j,m:j,p:j,d:j}}function F(t){let e
function n(t,e){return t[1].length?I:G}let s=n(t),a=s(t)
return{c(){a.c(),e=d()},m(t,n){a.m(t,n),p(t,e,n)},p(t,l){s===(s=n(t))&&a?a.p(t,l):(a.d(1),a=s(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){t&&h(e),a.d(t)}}}function G(t){let e
return{c(){e=m("div"),e.textContent="No monster information! Please enable creature log and travel a bit to\n        see the world",f(e,"class","no-mobs svelte-69l0kk")},m(t,n){p(t,e,n)},p:j,d(t){t&&h(e)}}}function I(t){let e,n=_(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=W(S(t,n,e))
return{c(){e=m("div")
for(let t=0;t<s.length;t+=1)s[t].c()
f(e,"class","data grid svelte-69l0kk")},m(t,n){p(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,a){if(2&a[0]){let l
for(n=_(t[1]),l=0;l<n.length;l+=1){const o=S(t,n,l)
s[l]?s[l].p(o,a):(s[l]=W(o),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1)
s.length=n.length}},d(t){t&&h(e),B(s,t)}}}function O(t){let e
return{c(){e=m("div"),e.textContent="**Missing**",f(e,"class","missing svelte-69l0kk")},m(t,n){p(t,e,n)},p:j,d(t){t&&h(e)}}}function Q(t){let e,n=_(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=R(T(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=d()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
p(t,e,n)},p(t,a){if(2&a[0]){let l
for(n=_(t[22]),l=0;l<n.length;l+=1){const o=T(t,n,l)
s[l]?s[l].p(o,a):(s[l]=R(o),s[l].c(),s[l].m(e.parentNode,e))}for(;l<s.length;l+=1)s[l].d(1)
s.length=n.length}},d(t){t&&h(e),B(s,t)}}}function R(t){let e,n,s,a,l,o,i=t[26]+"",r=t[27]+"",c=t[28]+""
return{c(){e=m("div"),n=x(i),s=x(": "),a=x(r),l=x(" - "),o=x(c),f(e,"class","enhancements svelte-69l0kk")},m(t,i){p(t,e,i),v(e,n),v(e,s),v(e,a),v(e,l),v(e,o)},p(t,e){2&e[0]&&i!==(i=t[26]+"")&&M(n,i),2&e[0]&&r!==(r=t[27]+"")&&M(a,r),2&e[0]&&c!==(c=t[28]+"")&&M(o,c)},d(t){t&&h(e)}}}function W(t){let e,n,s,a,l,o,i,r,c,d,b,k,$,C,y,L,w,j,A,_,B,N,D,P,S,T,U,z,F,G,I,R,W,X,Z,q,J,K,V,Y,tt=`url('${E}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=H(t[16])+"",at=t[17].min+"",lt=t[17].max+"",ot=t[18].min+"",it=t[18].max+"",rt=t[19].min+"",ct=t[19].max+"",mt=t[20].min+"",ut=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function gt(t,e){return t[22]?Q:O}let pt=gt(t),vt=pt(t)
return{c(){e=m("div"),n=m("div"),a=u(),l=m("div"),o=x(et),i=u(),r=m("div"),c=x(nt),d=u(),b=m("div"),k=x(st),$=u(),C=m("div"),y=x(at),L=x(" - "),w=x(lt),j=u(),A=m("div"),_=x(ot),B=x(" - "),N=x(it),D=u(),P=m("div"),S=x(rt),T=x(" - "),U=x(ct),z=u(),F=m("div"),G=x(mt),I=x(" - "),R=x(ut),W=u(),X=m("div"),Z=x(dt),q=x(" - "),J=x(ft),K=u(),V=m("div"),vt.c(),Y=u(),f(n,"class","image tip-static svelte-69l0kk"),f(n,"data-tipped",s="<img height=200 src='"+E+"creatures/"+t[23]+".png' width=200>"),g(n,"background-image",tt),f(e,"class","entity svelte-69l0kk")},m(t,s){p(t,e,s),v(e,n),v(e,a),v(e,l),v(l,o),p(t,i,s),p(t,r,s),v(r,c),p(t,d,s),p(t,b,s),v(b,k),p(t,$,s),p(t,C,s),v(C,y),v(C,L),v(C,w),p(t,j,s),p(t,A,s),v(A,_),v(A,B),v(A,N),p(t,D,s),p(t,P,s),v(P,S),v(P,T),v(P,U),p(t,z,s),p(t,F,s),v(F,G),v(F,I),v(F,R),p(t,W,s),p(t,X,s),v(X,Z),v(X,q),v(X,J),p(t,K,s),p(t,V,s),vt.m(V,null),v(V,Y)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+E+"creatures/"+t[23]+".png' width=200>")&&f(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${E}creatures/${t[23]}.png')`)&&g(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&M(o,et),2&e[0]&&nt!==(nt=t[15]+"")&&M(c,nt),2&e[0]&&st!==(st=H(t[16])+"")&&M(k,st),2&e[0]&&at!==(at=t[17].min+"")&&M(y,at),2&e[0]&&lt!==(lt=t[17].max+"")&&M(w,lt),2&e[0]&&ot!==(ot=t[18].min+"")&&M(_,ot),2&e[0]&&it!==(it=t[18].max+"")&&M(N,it),2&e[0]&&rt!==(rt=t[19].min+"")&&M(S,rt),2&e[0]&&ct!==(ct=t[19].max+"")&&M(U,ct),2&e[0]&&mt!==(mt=t[20].min+"")&&M(G,mt),2&e[0]&&ut!==(ut=t[20].max+"")&&M(R,ut),2&e[0]&&dt!==(dt=t[21].min+"")&&M(Z,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&M(J,ft),pt===(pt=gt(t))&&vt?vt.p(t,e):(vt.d(1),vt=pt(t),vt&&(vt.c(),vt.m(V,Y)))},d(t){t&&(h(e),h(i),h(r),h(d),h(b),h($),h(C),h(j),h(A),h(D),h(P),h(z),h(F),h(W),h(X),h(K),h(V)),vt.d()}}}function X(t){return{c:j,m:j,p:j,d:j}}function Z(t){let e,n,s,x,C,y,L,w,j,A,_,B,E,M,D,P,H,S,T,G,I,O,Q,R,W,Z,q,J,K,V,Y,tt
x=new N({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),x.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:X,then:F,catch:z}
return c(t[6](),et),{c(){e=m("div"),n=m("span"),n.textContent="Entity Information",s=u(),C=m("div"),a(x.$$.fragment),y=u(),L=m("div"),w=m("div"),j=m("button"),j.textContent="Entity",A=u(),_=m("div"),B=m("button"),B.textContent="Class",E=u(),M=m("div"),D=m("button"),D.textContent="Lvl",P=u(),H=m("div"),H.textContent="Attack",S=u(),T=m("div"),T.textContent="Defense",G=u(),I=m("div"),I.textContent="Armor",O=u(),Q=m("div"),Q.textContent="Damage",R=u(),W=m("div"),W.textContent="HP",Z=u(),q=m("div"),q.textContent="Enhancements",J=u(),K=d(),et.block.c(),f(n,"class","bold svelte-69l0kk"),g(C,"display","contents"),g(C,"--button-color","white"),g(C,"--button-width","2.8em"),f(e,"class","title svelte-69l0kk"),f(j,"class","sortable svelte-69l0kk"),f(j,"type","button"),f(B,"class","sortable svelte-69l0kk"),f(B,"type","button"),f(D,"class","sortable svelte-69l0kk"),f(D,"type","button"),f(L,"class","grid headings svelte-69l0kk")},m(a,o){p(a,e,o),v(e,n),v(e,s),v(e,C),l(x,C,null),p(a,y,o),p(a,L,o),v(L,w),v(w,j),v(L,A),v(L,_),v(_,B),v(L,E),v(L,M),v(M,D),v(L,P),v(L,H),v(L,S),v(L,T),v(L,G),v(L,I),v(L,O),v(L,Q),v(L,R),v(L,W),v(L,Z),v(L,q),p(a,J,o),p(a,K,o),et.block.m(a,et.anchor=o),et.mount=()=>K.parentNode,et.anchor=K,V=!0,Y||(tt=[b(j,"click",t[3]),b(B,"click",t[4]),b(D,"click",t[5])],Y=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),x.$set(s),k(et,t,n)},i(t){V||(o(x.$$.fragment,t),V=!0)},o(t){i(x.$$.fragment,t),V=!1},d(t){t&&(h(e),h(y),h(L),h(J),h(K)),r(x),et.block.d(t),et.token=null,et=null,Y=!1,$(tt)}}}function q(t){let e
return{c(){e=x("Creature Log")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function J(t){let e,n
return e=new P({props:{visible:t[0],$$slots:{title:[q],default:[Z]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){a(e.$$.fragment)},m(t,s){l(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(o(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){r(e,t)}}}function K(t,e,n){let{visible:s=!0}=e
let a=[],l=1,o=""
const i=([t],[e])=>l*A(t,e),r=([,t],[,e])=>l*A(t,e),c=([,,t],[,,e])=>l*(t-e)
function m(t,e){l=o===e?l:1,n(1,a=a.slice().sort(t)),o=e,l*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,a,function(){C("Creature Log","close"),n(0,s=!1)},function(){C("Creature Log","sort by entity"),m(i,"entity")},function(){C("Creature Log","sort by class"),m(r,"class")},function(){C("Creature Log","sort by level"),m(c,"level")},async function(){const t=await y("fsh_monsterLog")
t&&(n(1,a=L(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?L(e.enhancements):0,e.image_id]))),m(c,"level"))},async function(){C("Creature Log","clear storage"),await D("Are you sure you want to clear your log?")&&(n(1,a=[]),w("fsh_monsterLog",""))}]}class V extends e{constructor(t){super(),n(this,t,K,J,s,{visible:0},null,[-1,-1])}}const Y={visible:!0}
let tt=0
function et(){tt=t(Y,tt,V)}export{et as default}
//# sourceMappingURL=creatureLog-BVMun_A-.js.map
