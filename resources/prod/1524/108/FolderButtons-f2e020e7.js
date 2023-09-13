import{S as t,L as e,M as n,C as s,bf as o,aj as r,bg as c,R as $,ba as l,bb as a,bd as f,bc as i,Z as m,bh as u,b0 as p,be as d,a1 as g,O as h,a2 as b}from"./calfSystem-34913441.js"
import{e as x}from"./each-6f7f5a14.js"
import{L as k}from"./LinkButton-aabd28ac.js"
function y(t,e,n){const s=t.slice()
return s[8]=e[n][0],s[9]=e[n][1],s}function W(t){let e
return{c(){e=g("All\n")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function j(t){let e,n,s
return e=new k({props:{$$slots:{default:[w]},$$scope:{ctx:t}}}),e.$on("click",t[4]),{c(){o(e.$$.fragment),n=h()},m(t,o){c(e,t,o),$(t,n,o),s=!0},p(t,n){const s={}
4096&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){t&&m(n),u(e,t)}}}function w(t){let e
return{c(){e=g("Worn")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function L(t){let e
return{c(){e=g("Main\n")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function B(t){let e,n=t[9]+""
return{c(){e=g(n)},m(t,n){$(t,e,n)},p(t,s){1&s&&n!==(n=t[9]+"")&&b(e,n)},d(t){t&&m(e)}}}function M(t){let e,n
return e=new k({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[8])})),{c(){o(e.$$.fragment)},m(t,s){c(e,t,s),n=!0},p(n,s){t=n
const o={}
4097&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function N(t){let e,n,d,g,h
e=new k({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),e.$on("click",t[3])
let b=t[1]&&j(t)
d=new k({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),d.$on("click",t[5])
let w=x(s(t[0])),B=[]
for(let e=0;e<w.length;e+=1)B[e]=M(y(t,w,e))
const N=t=>f(B[t],1,1,(()=>{B[t]=null}))
return{c(){o(e.$$.fragment),b&&b.c(),n=r(),o(d.$$.fragment)
for(let t=0;t<B.length;t+=1)B[t].c()
g=r()},m(t,s){c(e,t,s),b&&b.m(t,s),$(t,n,s),c(d,t,s)
for(let e=0;e<B.length;e+=1)B[e]&&B[e].m(t,s)
$(t,g,s),h=!0},p(t,[o]){const r={}
4096&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r),t[1]?b?(b.p(t,o),2&o&&l(b,1)):(b=j(t),b.c(),l(b,1),b.m(n.parentNode,n)):b&&(a(),f(b,1,1,(()=>{b=null})),i())
const c={}
if(4096&o&&(c.$$scope={dirty:o,ctx:t}),d.$set(c),5&o){let e
for(w=x(s(t[0])),e=0;e<w.length;e+=1){const n=y(t,w,e)
B[e]?(B[e].p(n,o),l(B[e],1)):(B[e]=M(n),B[e].c(),l(B[e],1),B[e].m(g.parentNode,g))}for(a(),e=w.length;e<B.length;e+=1)N(e)
i()}},i(t){if(!h){l(e.$$.fragment,t),l(b),l(d.$$.fragment,t)
for(let t=0;t<w.length;t+=1)l(B[t])
h=!0}},o(t){f(e.$$.fragment,t),f(b),f(d.$$.fragment,t),B=B.filter(Boolean)
for(let t=0;t<B.length;t+=1)f(B[t])
h=!1},d(t){t&&(m(n),m(g)),u(e,t),b&&b.d(t),u(d,t),p(B,t)}}}function S(t,e,n){const s=d()
let{folders:o={}}=e,{needsWorn:r=0}=e
function c(t){s("filter",t)}return t.$$set=t=>{"folders"in t&&n(0,o=t.folders),"needsWorn"in t&&n(1,r=t.needsWorn)},[o,r,c,()=>c("-2"),()=>c("-3"),()=>c("-1"),t=>c(t)]}class A extends t{constructor(t){super(),e(this,t,S,N,n,{folders:0,needsWorn:1})}}export{A as F}
//# sourceMappingURL=FolderButtons-f2e020e7.js.map
