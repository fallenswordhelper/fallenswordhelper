import{a as g}from"./chunk-PE2Z4VFC.js";import{a as E}from"./chunk-GFYEJ6XD.js";import{$ as j,B as q,C as D,F as p,I as N,K as k,T as S,Y as V,_ as W,aa as d,ba as v,ca as h,e as A,i as C,na as z,oa as B,s as L,u as _,v as y,w as b,y as w,z as M}from"./chunk-UM32QR7D.js";var c=E("");function F(n){let r,o,t,e,i,s,u;return{c(){r=w("div"),o=w("p"),t=M(n[0]),p(o,"class","svelte-1v0rgfy"),p(r,"role","alert"),p(r,"class","svelte-1v0rgfy"),k(r,"transform",n[2])},m(l,a){y(l,r,a),_(r,o),_(o,t),i=!0,s||(u=D(r,"click",n[4]),s=!0)},p(l,a){(!i||a&1)&&N(t,l[0]),a&4&&k(r,"transform",l[2])},i(l){i||(V(()=>{e||(e=h(r,g,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),e.run(1)}),i=!0)},o(l){e||(e=h(r,g,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),e.run(0),i=!1},d(l){l&&b(r),l&&e&&e.end(),s=!1,u()}}}function J(n){let r,o,t=n[1]&&F(n);return{c(){t&&t.c(),r=q()},m(e,i){t&&t.m(e,i),y(e,r,i),o=!0},p(e,[i]){e[1]?t?(t.p(e,i),i&2&&d(t,1)):(t=F(e),t.c(),d(t,1),t.m(r.parentNode,r)):t&&(W(),v(t,1,1,()=>{t=null}),j())},i(e){o||(d(t),o=!0)},o(e){v(t),o=!1},d(e){t&&t.d(e),e&&b(r)}}}function K(n,r,o){let t;C(n,c,f=>o(0,t=f));let{ms:e=3e3}=r,i=!1,s=0,u="";async function l(){let f=window.visualViewport,m=f.offsetLeft+f.width-window.innerWidth;o(2,u=`translate(${m}px, ${f.offsetTop}px)`),o(1,i=!0)}let a=(f,m)=>{clearTimeout(s),f?(l(),m>0&&(s=setTimeout(()=>{o(1,i=!1),L(c,t="",t)},m))):o(1,i=!1)};S(()=>clearTimeout(s));let I=()=>{o(1,i=!1)};return n.$$set=f=>{"ms"in f&&o(3,e=f.ms)},n.$$.update=()=>{if(n.$$.dirty&9){t:a(t,e)}},[t,i,u,e,I]}var x=class extends B{constructor(r){super(),z(this,r,K,J,A,{ms:3})}},G=x;var H;function T(){if(!H)return H=!0,new G({target:document.body})}function O(n){n&&(T(),c.set(n))}export{O as a};
//# sourceMappingURL=chunk-CH3XH3UZ.js.map
