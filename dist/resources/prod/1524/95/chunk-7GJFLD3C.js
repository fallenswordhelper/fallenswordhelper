import{a as C,b as S}from"./chunk-BG57XN7Y.js";import{A as v,C as g,F as f,I as M,U as Y,aa as q,ba as x,c as $,e as h,ka as A,la as D,ma as E,na as N,oa as P,u as m,v as b,w as d,y as a,z as k}from"./chunk-OPUFCVBO.js";function B(o){let t,s,n,e,i,p,r,u,y;return{c(){t=a("div"),s=k(o[1]),n=v(),e=a("div"),i=a("button"),i.textContent="Yes",p=v(),r=a("button"),r.textContent="No",f(t,"class","svelte-u0wbtl"),f(i,"class","ui-button ui-corner-all ui-widget"),f(i,"type","button"),f(r,"class","ui-button ui-corner-all ui-widget"),f(r,"type","button"),f(e,"class","svelte-u0wbtl")},m(l,c){b(l,t,c),m(t,s),b(l,n,c),b(l,e,c),m(e,i),m(e,p),m(e,r),u||(y=[g(i,"click",o[3]),g(r,"click",o[2])],u=!0)},p(l,c){c&2&&M(s,l[1])},d(l){l&&d(t),l&&d(n),l&&d(e),u=!1,$(y)}}}function F(o){let t,s;return t=new S({props:{visible:o[0],$$slots:{default:[B]},$$scope:{ctx:o}}}),t.$on("close",o[2]),{c(){A(t.$$.fragment)},m(n,e){D(t,n,e),s=!0},p(n,[e]){let i={};e&1&&(i.visible=n[0]),e&34&&(i.$$scope={dirty:e,ctx:n}),t.$set(i)},i(n){s||(q(t.$$.fragment,n),s=!0)},o(n){x(t.$$.fragment,n),s=!1},d(n){E(t,n)}}}function G(o,t,s){let{msg:n="Are you sure?"}=t,{visible:e=!0}=t,i=Y();function p(){s(0,e=!1),i("no")}function r(){s(0,e=!1),i("yes")}return o.$$set=u=>{"msg"in u&&s(1,n=u.msg),"visible"in u&&s(0,e=u.visible)},[e,n,p,r]}var w=class extends P{constructor(t){super(),N(this,t,G,F,h,{msg:1,visible:0})}},j=w;var z={visible:!0},_;function H(o){_=C(z,_,j),_.$on("yes",()=>o(!0)),_.$on("no",()=>o(!1))}function I(o){return z.msg=o,new Promise(H)}export{I as a};
//# sourceMappingURL=chunk-7GJFLD3C.js.map