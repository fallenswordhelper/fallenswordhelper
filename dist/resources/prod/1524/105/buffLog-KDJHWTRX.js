import{a as S}from"./chunk-AAM2VJHB.js";import{a as z}from"./chunk-NP3VZEO6.js";import{a as j,b as J}from"./chunk-K2ALIVI4.js";import"./chunk-KJ2LBMNX.js";import"./chunk-E62N6RI5.js";import"./chunk-7VIXIIBV.js";import"./chunk-E2MFTVAH.js";import{a as h}from"./chunk-Y5EGDMIB.js";import{$ as y,A as N,D as Z,F as x,X as H,Y as Q,_ as R,a as r,aa as X,d as v,fa as L,ga as V,ha as F,ia as Y,ja as k,s as G,t as d,u as f,v as W,w as C,x as p,y as m,z as B}from"./chunk-TVNPLL64.js";import"./chunk-SNNJRQSX.js";import"./chunk-5YAX7RCO.js";import"./chunk-Z5JYB3FL.js";import"./chunk-DLFQE7QF.js";import"./chunk-V45UJIF2.js";import"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import"./chunk-PJWDCLVE.js";import"./chunk-ZFTJPJLX.js";import"./chunk-R7J7NY4A.js";import{za as A}from"./chunk-5ELKH2XV.js";import"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import"./chunk-BZJZQFW2.js";import"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";function U(i,t,n){let e=i.slice();return e[5]=t[n][0],e[6]=t[n][1],e}function P(i){return{c:r,m:r,p:r,d:r}}function O(i){let t,n=X(i[1]),e=[];for(let l=0;l<n.length;l+=1)e[l]=D(U(i,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=B()},m(l,o){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(l,o);d(l,t,o)},p(l,o){if(o&2){n=X(l[1]);let c;for(c=0;c<n.length;c+=1){let b=U(l,n,c);e[c]?e[c].p(b,o):(e[c]=D(b),e[c].c(),e[c].m(t.parentNode,t))}for(;c<e.length;c+=1)e[c].d(1);e.length=n.length}},d(l){l&&f(t),W(e,l)}}}function E(i){let t=i[6]+"",n;return{c(){n=p(t)},m(e,l){d(e,n,l)},p(e,l){l&2&&t!==(t=e[6]+"")&&x(n,t)},d(e){e&&f(n)}}}function K(i){let t,n=i[6].slice(21,-7)+"",e,l;return{c(){t=C("span"),e=p(n),l=m(),Z(t,"class","fshRed")},m(o,c){d(o,t,c),G(t,e),G(t,l)},p(o,c){c&2&&n!==(n=o[6].slice(21,-7)+"")&&x(e,n)},d(o){o&&f(t)}}}function D(i){let t,n,e=i[5]+"",l,o,c,b;function g(u,a){return a&2&&(c=null),c==null&&(c=!!u[6].startsWith("<")),c?K:E}let s=g(i,-1),I=s(i);return{c(){t=C("br"),n=m(),l=p(e),o=m(),I.c(),b=B()},m(u,a){d(u,t,a),d(u,n,a),d(u,l,a),d(u,o,a),I.m(u,a),d(u,b,a)},p(u,a){a&2&&e!==(e=u[5]+"")&&x(l,e),s===(s=g(u,a))&&I?I.p(u,a):(I.d(1),I=s(u),I&&(I.c(),I.m(b.parentNode,b)))},d(u){u&&(f(t),f(n),f(l),f(o),f(b)),I.d(u)}}}function T(i){return{c:r,m:r,p:r,d:r}}function $(i){let t,n,e,l,o,c,b,g={ctx:i,current:null,token:null,hasCatch:!1,pending:T,then:O,catch:P};return R(o=i[3](),g),{c(){t=C("div"),n=C("button"),n.textContent="Clear",e=m(),l=C("div"),g.block.c(),Z(n,"type","button"),Z(t,"class","top svelte-1f283a3"),Z(l,"class","textContainer svelte-1f283a3")},m(s,I){d(s,t,I),G(t,n),d(s,e,I),d(s,l,I),g.block.m(l,g.anchor=null),g.mount=()=>l,g.anchor=null,c||(b=N(n,"click",i[4]),c=!0)},p(s,I){i=s,y(g,i,I)},d(s){s&&(f(t),f(e),f(l)),g.block.d(),g.token=null,g=null,c=!1,b()}}}function q(i){let t;return{c(){t=p("Buff Log")},m(n,e){d(n,t,e)},d(n){n&&f(t)}}}function ee(i){let t,n;return t=new S({props:{visible:i[0],$$slots:{title:[q],default:[$]},$$scope:{ctx:i}}}),t.$on("close",i[2]),{c(){L(t.$$.fragment)},m(e,l){V(t,e,l),n=!0},p(e,[l]){let o={};l&1&&(o.visible=e[0]),l&514&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function te(i,t,n){let{visible:e=!0}=t,l=[];function o(){h("Buff Log","close"),n(0,e=!1)}async function c(){let g=await j(A)??"";n(1,l=g.split("<br>").map(s=>[s.slice(0,19),s.slice(20)]))}function b(){J(A,""),h("Buff Log","clear storage"),n(1,l=[])}return i.$$set=g=>{"visible"in g&&n(0,e=g.visible)},[e,l,o,c,b]}var _=class extends k{constructor(t){super(),Y(this,t,te,ee,v,{visible:0})}},w=_;var le={visible:!0},M=0;function ne(){M=z(le,M,w)}export{ne as default};
//# sourceMappingURL=buffLog-KDJHWTRX.js.map