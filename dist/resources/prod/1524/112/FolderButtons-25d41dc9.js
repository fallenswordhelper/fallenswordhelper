import{S as t,J as e,K as n,C as s,ba as o,ah as r,bb as c,P as $,b5 as l,b6 as a,b8 as f,b7 as i,X as m,bc as u,aZ as p,b9 as d,_ as g,M as h,a0 as x}from"./calfSystem-4830a18d.js"
import{e as b}from"./each-1f09c43f.js"
import{L as k}from"./LinkButton-59368dc4.js"
function y(t,e,n){const s=t.slice()
return s[8]=e[n][0],s[9]=e[n][1],s}function W(t){let e
return{c(){e=g("All\n")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function w(t){let e,n,s
return e=new k({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),e.$on("click",t[4]),{c(){o(e.$$.fragment),n=h()},m(t,o){c(e,t,o),$(t,n,o),s=!0},p(t,n){const s={}
4096&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){f(e.$$.fragment,t),s=!1},d(t){t&&m(n),u(e,t)}}}function j(t){let e
return{c(){e=g("Worn")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function L(t){let e
return{c(){e=g("Main\n")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function B(t){let e,n=t[9]+""
return{c(){e=g(n)},m(t,n){$(t,e,n)},p(t,s){1&s&&n!==(n=t[9]+"")&&x(e,n)},d(t){t&&m(e)}}}function M(t){let e,n
return e=new k({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[8])})),{c(){o(e.$$.fragment)},m(t,s){c(e,t,s),n=!0},p(n,s){t=n
const o={}
4097&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(l(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function N(t){let e,n,d,g,h
e=new k({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),e.$on("click",t[3])
let x=t[1]&&w(t)
d=new k({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),d.$on("click",t[5])
let j=b(s(t[0])),B=[]
for(let e=0;e<j.length;e+=1)B[e]=M(y(t,j,e))
const N=t=>f(B[t],1,1,(()=>{B[t]=null}))
return{c(){o(e.$$.fragment),x&&x.c(),n=r(),o(d.$$.fragment)
for(let t=0;t<B.length;t+=1)B[t].c()
g=r()},m(t,s){c(e,t,s),x&&x.m(t,s),$(t,n,s),c(d,t,s)
for(let e=0;e<B.length;e+=1)B[e]&&B[e].m(t,s)
$(t,g,s),h=!0},p(t,[o]){const r={}
4096&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r),t[1]?x?(x.p(t,o),2&o&&l(x,1)):(x=w(t),x.c(),l(x,1),x.m(n.parentNode,n)):x&&(a(),f(x,1,1,(()=>{x=null})),i())
const c={}
if(4096&o&&(c.$$scope={dirty:o,ctx:t}),d.$set(c),5&o){let e
for(j=b(s(t[0])),e=0;e<j.length;e+=1){const n=y(t,j,e)
B[e]?(B[e].p(n,o),l(B[e],1)):(B[e]=M(n),B[e].c(),l(B[e],1),B[e].m(g.parentNode,g))}for(a(),e=j.length;e<B.length;e+=1)N(e)
i()}},i(t){if(!h){l(e.$$.fragment,t),l(x),l(d.$$.fragment,t)
for(let t=0;t<j.length;t+=1)l(B[t])
h=!0}},o(t){f(e.$$.fragment,t),f(x),f(d.$$.fragment,t),B=B.filter(Boolean)
for(let t=0;t<B.length;t+=1)f(B[t])
h=!1},d(t){t&&(m(n),m(g)),u(e,t),x&&x.d(t),u(d,t),p(B,t)}}}function S(t,e,n){const s=d()
let{folders:o={}}=e,{needsWorn:r=0}=e
function c(t){s("filter",t)}return t.$$set=t=>{"folders"in t&&n(0,o=t.folders),"needsWorn"in t&&n(1,r=t.needsWorn)},[o,r,c,()=>c("-2"),()=>c("-3"),()=>c("-1"),t=>c(t)]}class A extends t{constructor(t){super(),e(this,t,S,N,n,{folders:0,needsWorn:1})}}export{A as F}
//# sourceMappingURL=FolderButtons-25d41dc9.js.map
