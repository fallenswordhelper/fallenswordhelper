import{S as t,L as e,M as n,N as s,C as o,bh as r,am as c,bi as $,T as l,bc as a,bd as f,bf as i,be as u,a0 as m,bj as d,b4 as p,bg as g,a3 as h,P as x,a4 as b}from"./calfSystem-BtgQSp8m.js"
import{L as k}from"./LinkButton-CbKrCfyn.js"
function y(t,e,n){const s=t.slice()
return s[8]=e[n][0],s[9]=e[n][1],s}function W(t){let e
return{c(){e=h("All\n")},m(t,n){l(t,e,n)},d(t){t&&m(e)}}}function w(t){let e,n,s
return e=new k({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),e.$on("click",t[4]),{c(){r(e.$$.fragment),n=x()},m(t,o){$(e,t,o),l(t,n,o),s=!0},p(t,n){const s={}
4096&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){i(e.$$.fragment,t),s=!1},d(t){t&&m(n),d(e,t)}}}function j(t){let e
return{c(){e=h("Worn")},m(t,n){l(t,e,n)},d(t){t&&m(e)}}}function L(t){let e
return{c(){e=h("Main\n")},m(t,n){l(t,e,n)},d(t){t&&m(e)}}}function N(t){let e,n=t[9]+""
return{c(){e=h(n)},m(t,n){l(t,e,n)},p(t,s){1&s&&n!==(n=t[9]+"")&&b(e,n)},d(t){t&&m(e)}}}function B(t){let e,n
return e=new k({props:{$$slots:{default:[N]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[8])})),{c(){r(e.$$.fragment)},m(t,s){$(e,t,s),n=!0},p(n,s){t=n
const o={}
4097&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){d(e,t)}}}function M(t){let e,n,g,h,x
e=new k({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),e.$on("click",t[3])
let b=t[1]&&w(t)
g=new k({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),g.$on("click",t[5])
let j=s(o(t[0])),N=[]
for(let e=0;e<j.length;e+=1)N[e]=B(y(t,j,e))
const M=t=>i(N[t],1,1,(()=>{N[t]=null}))
return{c(){r(e.$$.fragment),b&&b.c(),n=c(),r(g.$$.fragment)
for(let t=0;t<N.length;t+=1)N[t].c()
h=c()},m(t,s){$(e,t,s),b&&b.m(t,s),l(t,n,s),$(g,t,s)
for(let e=0;e<N.length;e+=1)N[e]&&N[e].m(t,s)
l(t,h,s),x=!0},p(t,[r]){const c={}
4096&r&&(c.$$scope={dirty:r,ctx:t}),e.$set(c),t[1]?b?(b.p(t,r),2&r&&a(b,1)):(b=w(t),b.c(),a(b,1),b.m(n.parentNode,n)):b&&(f(),i(b,1,1,(()=>{b=null})),u())
const $={}
if(4096&r&&($.$$scope={dirty:r,ctx:t}),g.$set($),5&r){let e
for(j=s(o(t[0])),e=0;e<j.length;e+=1){const n=y(t,j,e)
N[e]?(N[e].p(n,r),a(N[e],1)):(N[e]=B(n),N[e].c(),a(N[e],1),N[e].m(h.parentNode,h))}for(f(),e=j.length;e<N.length;e+=1)M(e)
u()}},i(t){if(!x){a(e.$$.fragment,t),a(b),a(g.$$.fragment,t)
for(let t=0;t<j.length;t+=1)a(N[t])
x=!0}},o(t){i(e.$$.fragment,t),i(b),i(g.$$.fragment,t),N=N.filter(Boolean)
for(let t=0;t<N.length;t+=1)i(N[t])
x=!1},d(t){t&&(m(n),m(h)),d(e,t),b&&b.d(t),d(g,t),p(N,t)}}}function S(t,e,n){const s=g()
let{folders:o={}}=e,{needsWorn:r=0}=e
function c(t){s("filter",t)}return t.$$set=t=>{"folders"in t&&n(0,o=t.folders),"needsWorn"in t&&n(1,r=t.needsWorn)},[o,r,c,()=>c("-2"),()=>c("-3"),()=>c("-1"),t=>c(t)]}class A extends t{constructor(t){super(),e(this,t,S,M,n,{folders:0,needsWorn:1})}}export{A as F}
//# sourceMappingURL=FolderButtons-Cfuei8cO.js.map
