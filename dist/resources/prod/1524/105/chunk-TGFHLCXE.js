import{a as p}from"./chunk-EHOD6CNQ.js";import{a as v}from"./chunk-3XG27UWS.js";import{A as X,D as u,F as L,H as Q,O as V,T as H,V as R,W as S,X as m,Y as C,Z as f,d as A,h as F,ia as D,ja as Y,p as y,s as a,t as B,u as G,w as d,x as U,z as W}from"./chunk-TVNPLL64.js";var k=v(""),b=k;function h(i){let l,t,e,c,I,o,r;return{c(){l=d("div"),t=d("p"),e=U(i[0]),u(t,"class","svelte-1v0rgfy"),u(l,"role","alert"),u(l,"class","svelte-1v0rgfy"),Q(l,"transform",i[2])},m(g,s){B(g,l,s),a(l,t),a(t,e),I=!0,o||(r=X(l,"click",i[4]),o=!0)},p(g,s){(!I||s&1)&&L(e,g[0]),s&4&&Q(l,"transform",g[2])},i(g){I||(g&&H(()=>{I&&(c||(c=f(l,p,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),c.run(1))}),I=!0)},o(g){g&&(c||(c=f(l,p,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),c.run(0)),I=!1},d(g){g&&G(l),g&&c&&c.end(),o=!1,r()}}}function z(i){let l,t=i[1]&&h(i);return{c(){t&&t.c(),l=W()},m(e,c){t&&t.m(e,c),B(e,l,c)},p(e,[c]){e[1]?t?(t.p(e,c),c&2&&m(t,1)):(t=h(e),t.c(),m(t,1),t.m(l.parentNode,l)):t&&(R(),C(t,1,1,()=>{t=null}),S())},i(e){m(t)},o(e){C(t)},d(e){e&&G(l),t&&t.d(e)}}}function T(i,l,t){let e;F(i,b,n=>t(0,e=n));let{ms:c=3e3}=l,I=!1,o=0,r="";async function g(){let n=window.visualViewport,Z=n.offsetLeft+n.width-window.innerWidth;t(2,r=`translate(${Z}px, ${n.offsetTop}px)`),t(1,I=!0)}let s=(n,Z)=>{clearTimeout(o),n?(g(),Z>0&&(o=setTimeout(()=>{t(1,I=!1),y(b,e="",e)},Z))):t(1,I=!1)};V(()=>clearTimeout(o));let J=()=>{t(1,I=!1)};return i.$$set=n=>{"ms"in n&&t(3,c=n.ms)},i.$$.update=()=>{i.$$.dirty&9&&s(e,c)},[e,I,r,c,J]}var x=class extends Y{constructor(l){super(),D(this,l,T,z,A,{ms:3})}},w=x;var E;function N(){if(!E)return E=!0,new w({target:document.body})}function M(i){i&&(N(),b.set(i))}export{M as a};
//# sourceMappingURL=chunk-TGFHLCXE.js.map
