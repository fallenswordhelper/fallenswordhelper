import{a as P,b as S}from"./chunk-VH4COHSR.js";import{A as g,D as u,F as w,P as M,X as Y,Y as q,b as $,d as h,ea as x,fa as A,ga as D,ha as E,ia as N,s as m,t as d,u as b,w as c,x as k,y as _}from"./chunk-CGES44DB.js";function B(s){let t,o,n,e,i,p,r,f,C;return{c(){t=c("div"),o=k(s[1]),n=_(),e=c("div"),i=c("button"),i.textContent="Yes",p=_(),r=c("button"),r.textContent="No",u(t,"class","svelte-1gd1a38"),u(i,"type","button"),u(i,"class","svelte-1gd1a38"),u(r,"type","button"),u(r,"class","svelte-1gd1a38"),u(e,"class","svelte-1gd1a38")},m(l,a){d(l,t,a),m(t,o),d(l,n,a),d(l,e,a),m(e,i),m(e,p),m(e,r),f||(C=[g(i,"click",s[3]),g(r,"click",s[2])],f=!0)},p(l,a){a&2&&w(o,l[1])},d(l){l&&b(t),l&&b(n),l&&b(e),f=!1,$(C)}}}function F(s){let t,o;return t=new S({props:{visible:s[0],$$slots:{default:[B]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){x(t.$$.fragment)},m(n,e){A(t,n,e),o=!0},p(n,[e]){let i={};e&1&&(i.visible=n[0]),e&34&&(i.$$scope={dirty:e,ctx:n}),t.$set(i)},i(n){o||(Y(t.$$.fragment,n),o=!0)},o(n){q(t.$$.fragment,n),o=!1},d(n){D(t,n)}}}function G(s,t,o){let{msg:n="Are you sure?"}=t,{visible:e=!0}=t,i=M();function p(){o(0,e=!1),i("no")}function r(){o(0,e=!1),i("yes")}return s.$$set=f=>{"msg"in f&&o(1,n=f.msg),"visible"in f&&o(0,e=f.visible)},[e,n,p,r]}var y=class extends N{constructor(t){super(),E(this,t,G,F,h,{msg:1,visible:0})}},j=y;var z={visible:!0},v;function H(s){v=P(z,v,j),v.$on("yes",()=>s(!0)),v.$on("no",()=>s(!1))}function I(s){return z.msg=s,new Promise(H)}export{I as a};
//# sourceMappingURL=chunk-BPFITXEZ.js.map
