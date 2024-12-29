import{S as t,O as e,P as n,Q as s,E as o,bF as r,av as c,bG as $,W as l,bA as a,bB as f,bD as i,bC as u,a4 as p,bH as m,bp as d,bE as g,a7 as x,T as b,a8 as h}from"./calfSystem-ChzN4Q-P.js"
import{L as W}from"./LinkButton-BclPa9W-.js"
function k(t,e,n){const s=t.slice()
return s[8]=e[n][0],s[9]=e[n][1],s}function y(t){let e
return{c(){e=x("All")},m(t,n){l(t,e,n)},d(t){t&&p(e)}}}function w(t){let e,n,s
return e=new W({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),e.$on("click",t[4]),{c(){r(e.$$.fragment),n=b()},m(t,o){$(e,t,o),l(t,n,o),s=!0},p(t,n){const s={}
4096&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){i(e.$$.fragment,t),s=!1},d(t){t&&p(n),m(e,t)}}}function B(t){let e
return{c(){e=x("Worn")},m(t,n){l(t,e,n)},d(t){t&&p(e)}}}function j(t){let e
return{c(){e=x("Main\n")},m(t,n){l(t,e,n)},d(t){t&&p(e)}}}function A(t){let e,n=t[9]+""
return{c(){e=x(n)},m(t,n){l(t,e,n)},p(t,s){1&s&&n!==(n=t[9]+"")&&h(e,n)},d(t){t&&p(e)}}}function E(t){let e,n
return e=new W({props:{$$slots:{default:[A]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[8])})),{c(){r(e.$$.fragment)},m(t,s){$(e,t,s),n=!0},p(n,s){t=n
const o={}
4097&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function F(t){let e,n,g,x,b
e=new W({props:{$$slots:{default:[y]},$$scope:{ctx:t}}}),e.$on("click",t[3])
let h=t[1]&&w(t)
g=new W({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),g.$on("click",t[5])
let B=s(o(t[0])),A=[]
for(let e=0;e<B.length;e+=1)A[e]=E(k(t,B,e))
const F=t=>i(A[t],1,1,(()=>{A[t]=null}))
return{c(){r(e.$$.fragment),h&&h.c(),n=c(),r(g.$$.fragment)
for(let t=0;t<A.length;t+=1)A[t].c()
x=c()},m(t,s){$(e,t,s),h&&h.m(t,s),l(t,n,s),$(g,t,s)
for(let e=0;e<A.length;e+=1)A[e]&&A[e].m(t,s)
l(t,x,s),b=!0},p(t,[r]){const c={}
4096&r&&(c.$$scope={dirty:r,ctx:t}),e.$set(c),t[1]?h?(h.p(t,r),2&r&&a(h,1)):(h=w(t),h.c(),a(h,1),h.m(n.parentNode,n)):h&&(f(),i(h,1,1,(()=>{h=null})),u())
const $={}
if(4096&r&&($.$$scope={dirty:r,ctx:t}),g.$set($),5&r){let e
for(B=s(o(t[0])),e=0;e<B.length;e+=1){const n=k(t,B,e)
A[e]?(A[e].p(n,r),a(A[e],1)):(A[e]=E(n),A[e].c(),a(A[e],1),A[e].m(x.parentNode,x))}for(f(),e=B.length;e<A.length;e+=1)F(e)
u()}},i(t){if(!b){a(e.$$.fragment,t),a(h),a(g.$$.fragment,t)
for(let t=0;t<B.length;t+=1)a(A[t])
b=!0}},o(t){i(e.$$.fragment,t),i(h),i(g.$$.fragment,t),A=A.filter(Boolean)
for(let t=0;t<A.length;t+=1)i(A[t])
b=!1},d(t){t&&(p(n),p(x)),m(e,t),h&&h.d(t),m(g,t),d(A,t)}}}function L(t,e,n){const s=g()
let{folders:o={}}=e,{needsWorn:r=0}=e
function c(t){s("filter",t)}return t.$$set=t=>{"folders"in t&&n(0,o=t.folders),"needsWorn"in t&&n(1,r=t.needsWorn)},[o,r,c,()=>c("-2"),()=>c("-3"),()=>c("-1"),t=>c(t)]}class N extends t{constructor(t){super(),e(this,t,L,F,n,{folders:0,needsWorn:1})}}export{N as F}
//# sourceMappingURL=FolderButtons-9IFoeziH.js.map
