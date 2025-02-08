import{S as t,P as e,Q as n,bJ as s,bD as a,bE as l,bK as o,bL as i,au as r,U as c,V as u,av as m,_ as d,a0 as f,a1 as g,a3 as v,a4 as p,ax as b,a5 as k,bp as h,a9 as $,s as x,bw as C,F as y,ag as L,bx as w,T as j,bX as _,R as E,bq as N,b8 as A,a8 as B,dR as D}from"./calfSystem-BldO1y8X.js"
import{L as M}from"./LinkButtonBracketed-CpS4fDdD.js"
import{M as P}from"./ModalTitled-DgIzlEw4.js"
import{a as R}from"./addCommas-C_h2HN8s.js"
import"./LinkButton-uS4wZBSJ.js"
function S(t,e,n){const s=t.slice()
return s[14]=e[n][0],s[15]=e[n][1],s[16]=e[n][2],s[17]=e[n][3],s[18]=e[n][4],s[19]=e[n][5],s[20]=e[n][6],s[21]=e[n][7],s[22]=e[n][8],s[23]=e[n][9],s}function T(t,e,n){const s=t.slice()
return s[26]=e[n][0],s[27]=e[n][1].min,s[28]=e[n][1].max,s}function q(t){let e
return{c(){e=$("Clear")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function F(t){return{c:j,m:j,p:j,d:j}}function H(t){let e
function n(t,e){return t[1].length?J:I}let s=n(t),a=s(t)
return{c(){a.c(),e=b()},m(t,n){a.m(t,n),d(t,e,n)},p(t,l){s===(s=n(t))&&a?a.p(t,l):(a.d(1),a=s(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){t&&c(e),a.d(t)}}}function I(t){let e
return{c(){e=v("div"),e.textContent="No monster information! Please enable creature log and travel a bit to\n        see the world",k(e,"class","no-mobs svelte-69l0kk")},m(t,n){d(t,e,n)},p:j,d(t){t&&c(e)}}}function J(t){let e,n=E(t[1]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=V(S(t,n,e))
return{c(){e=v("div")
for(let t=0;t<s.length;t+=1)s[t].c()
k(e,"class","data grid svelte-69l0kk")},m(t,n){d(t,e,n)
for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(t,a){if(2&a[0]){let l
for(n=E(t[1]),l=0;l<n.length;l+=1){const o=S(t,n,l)
s[l]?s[l].p(o,a):(s[l]=V(o),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1)
s.length=n.length}},d(t){t&&c(e),N(s,t)}}}function K(t){let e
return{c(){e=v("div"),e.textContent="**Missing**",k(e,"class","missing svelte-69l0kk")},m(t,n){d(t,e,n)},p:j,d(t){t&&c(e)}}}function Q(t){let e,n=E(t[22]),s=[]
for(let e=0;e<n.length;e+=1)s[e]=U(T(t,n,e))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
e=b()},m(t,n){for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,n)
d(t,e,n)},p(t,a){if(2&a[0]){let l
for(n=E(t[22]),l=0;l<n.length;l+=1){const o=T(t,n,l)
s[l]?s[l].p(o,a):(s[l]=U(o),s[l].c(),s[l].m(e.parentNode,e))}for(;l<s.length;l+=1)s[l].d(1)
s.length=n.length}},d(t){t&&c(e),N(s,t)}}}function U(t){let e,n,s,a,l,o,i=t[26]+"",r=t[27]+"",u=t[28]+""
return{c(){e=v("div"),n=$(i),s=$(": "),a=$(r),l=$(" - "),o=$(u),k(e,"class","enhancements svelte-69l0kk")},m(t,i){d(t,e,i),f(e,n),f(e,s),f(e,a),f(e,l),f(e,o)},p(t,e){2&e[0]&&i!==(i=t[26]+"")&&B(n,i),2&e[0]&&r!==(r=t[27]+"")&&B(a,r),2&e[0]&&u!==(u=t[28]+"")&&B(o,u)},d(t){t&&c(e)}}}function V(t){let e,n,s,a,l,o,i,r,u,m,g,b,x,C,y,L,w,j,_,E,N,D,M,P,S,T,q,F,H,I,J,U,V,W,X,z,G,O,Y,Z,tt=`url('${A}creatures/${t[23]}.png')`,et=t[14]+"",nt=t[15]+"",st=R(t[16])+"",at=t[17].min+"",lt=t[17].max+"",ot=t[18].min+"",it=t[18].max+"",rt=t[19].min+"",ct=t[19].max+"",ut=t[20].min+"",mt=t[20].max+"",dt=t[21].min+"",ft=t[21].max+""
function gt(t,e){return t[22]?Q:K}let vt=gt(t),pt=vt(t)
return{c(){e=v("div"),n=v("div"),a=p(),l=v("div"),o=$(et),i=p(),r=v("div"),u=$(nt),m=p(),g=v("div"),b=$(st),x=p(),C=v("div"),y=$(at),L=$(" - "),w=$(lt),j=p(),_=v("div"),E=$(ot),N=$(" - "),D=$(it),M=p(),P=v("div"),S=$(rt),T=$(" - "),q=$(ct),F=p(),H=v("div"),I=$(ut),J=$(" - "),U=$(mt),V=p(),W=v("div"),X=$(dt),z=$(" - "),G=$(ft),O=p(),Y=v("div"),pt.c(),Z=p(),k(n,"class","image tip-static svelte-69l0kk"),k(n,"data-tipped",s="<img height=200 src='"+A+"creatures/"+t[23]+".png' width=200>"),h(n,"background-image",tt),k(e,"class","entity svelte-69l0kk")},m(t,s){d(t,e,s),f(e,n),f(e,a),f(e,l),f(l,o),d(t,i,s),d(t,r,s),f(r,u),d(t,m,s),d(t,g,s),f(g,b),d(t,x,s),d(t,C,s),f(C,y),f(C,L),f(C,w),d(t,j,s),d(t,_,s),f(_,E),f(_,N),f(_,D),d(t,M,s),d(t,P,s),f(P,S),f(P,T),f(P,q),d(t,F,s),d(t,H,s),f(H,I),f(H,J),f(H,U),d(t,V,s),d(t,W,s),f(W,X),f(W,z),f(W,G),d(t,O,s),d(t,Y,s),pt.m(Y,null),f(Y,Z)},p(t,e){2&e[0]&&s!==(s="<img height=200 src='"+A+"creatures/"+t[23]+".png' width=200>")&&k(n,"data-tipped",s),2&e[0]&&tt!==(tt=`url('${A}creatures/${t[23]}.png')`)&&h(n,"background-image",tt),2&e[0]&&et!==(et=t[14]+"")&&B(o,et),2&e[0]&&nt!==(nt=t[15]+"")&&B(u,nt),2&e[0]&&st!==(st=R(t[16])+"")&&B(b,st),2&e[0]&&at!==(at=t[17].min+"")&&B(y,at),2&e[0]&&lt!==(lt=t[17].max+"")&&B(w,lt),2&e[0]&&ot!==(ot=t[18].min+"")&&B(E,ot),2&e[0]&&it!==(it=t[18].max+"")&&B(D,it),2&e[0]&&rt!==(rt=t[19].min+"")&&B(S,rt),2&e[0]&&ct!==(ct=t[19].max+"")&&B(q,ct),2&e[0]&&ut!==(ut=t[20].min+"")&&B(I,ut),2&e[0]&&mt!==(mt=t[20].max+"")&&B(U,mt),2&e[0]&&dt!==(dt=t[21].min+"")&&B(X,dt),2&e[0]&&ft!==(ft=t[21].max+"")&&B(G,ft),vt===(vt=gt(t))&&pt?pt.p(t,e):(pt.d(1),pt=vt(t),pt&&(pt.c(),pt.m(Y,Z)))},d(t){t&&(c(e),c(i),c(r),c(m),c(g),c(x),c(C),c(j),c(_),c(M),c(P),c(F),c(H),c(V),c(W),c(O),c(Y)),pt.d()}}}function W(t){return{c:j,m:j,p:j,d:j}}function X(t){let e,n,$,x,C,y,L,w,j,_,E,N,A,B,D,P,R,S,T,I,J,K,Q,U,V,X,z,G,O,Y,Z,tt
x=new M({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),x.$on("click",t[7])
let et={ctx:t,current:null,token:null,hasCatch:!1,pending:W,then:H,catch:F}
return r(t[6](),et),{c(){e=v("div"),n=v("span"),n.textContent="Entity Information",$=p(),C=v("div"),i(x.$$.fragment),y=p(),L=v("div"),w=v("div"),j=v("button"),j.textContent="Entity",_=p(),E=v("div"),N=v("button"),N.textContent="Class",A=p(),B=v("div"),D=v("button"),D.textContent="Lvl",P=p(),R=v("div"),R.textContent="Attack",S=p(),T=v("div"),T.textContent="Defense",I=p(),J=v("div"),J.textContent="Armor",K=p(),Q=v("div"),Q.textContent="Damage",U=p(),V=v("div"),V.textContent="HP",X=p(),z=v("div"),z.textContent="Enhancements",G=p(),O=b(),et.block.c(),k(n,"class","bold svelte-69l0kk"),h(C,"display","contents"),h(C,"--button-color","white"),h(C,"--button-width","2.8em"),k(e,"class","title svelte-69l0kk"),k(j,"class","sortable svelte-69l0kk"),k(j,"type","button"),k(N,"class","sortable svelte-69l0kk"),k(N,"type","button"),k(D,"class","sortable svelte-69l0kk"),k(D,"type","button"),k(L,"class","grid headings svelte-69l0kk")},m(s,a){d(s,e,a),f(e,n),f(e,$),f(e,C),o(x,C,null),d(s,y,a),d(s,L,a),f(L,w),f(w,j),f(L,_),f(L,E),f(E,N),f(L,A),f(L,B),f(B,D),f(L,P),f(L,R),f(L,S),f(L,T),f(L,I),f(L,J),f(L,K),f(L,Q),f(L,U),f(L,V),f(L,X),f(L,z),d(s,G,a),d(s,O,a),et.block.m(s,et.anchor=a),et.mount=()=>O.parentNode,et.anchor=O,Y=!0,Z||(tt=[g(j,"click",t[3]),g(N,"click",t[4]),g(D,"click",t[5])],Z=!0)},p(e,n){t=e
const s={}
1&n[1]&&(s.$$scope={dirty:n,ctx:t}),x.$set(s),m(et,t,n)},i(t){Y||(l(x.$$.fragment,t),Y=!0)},o(t){a(x.$$.fragment,t),Y=!1},d(t){t&&(c(e),c(y),c(L),c(G),c(O)),s(x),et.block.d(t),et.token=null,et=null,Z=!1,u(tt)}}}function z(t){let e
return{c(){e=$("Creature Log")},m(t,n){d(t,e,n)},d(t){t&&c(e)}}}function G(t){let e,n
return e=new P({props:{visible:t[0],$$slots:{title:[z],default:[X]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){i(e.$$.fragment)},m(t,s){o(e,t,s),n=!0},p(t,n){const s={}
1&n[0]&&(s.visible=t[0]),2&n[0]|1&n[1]&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){s(e,t)}}}function O(t,e,n){let{visible:s=!0}=e
let a=[],l=1,o=""
const i=([t],[e])=>l*_(t,e),r=([,t],[,e])=>l*_(t,e),c=([,,t],[,,e])=>l*(t-e)
function u(t,e){l=o===e?l:1,n(1,a=a.slice().sort(t)),o=e,l*=-1}return t.$$set=t=>{"visible"in t&&n(0,s=t.visible)},[s,a,function(){x("Creature Log","close"),n(0,s=!1)},function(){x("Creature Log","sort by entity"),u(i,"entity")},function(){x("Creature Log","sort by class"),u(r,"class")},function(){x("Creature Log","sort by level"),u(c,"level")},async function(){const t=await C("fsh_monsterLog")
t&&(n(1,a=y(t).map((([t,e])=>[t,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?y(e.enhancements):0,e.image_id]))),u(c,"level"))},async function(){x("Creature Log","clear storage"),await L("Are you sure you want to clear your log?")&&(n(1,a=[]),w("fsh_monsterLog",""))}]}class Y extends t{constructor(t){super(),e(this,t,O,G,n,{visible:0},null,[-1,-1])}}const Z={visible:!0}
let tt=0
function et(){tt=D(Z,tt,Y)}export{et as default}
//# sourceMappingURL=creatureLog-CJnl6W4i.js.map
