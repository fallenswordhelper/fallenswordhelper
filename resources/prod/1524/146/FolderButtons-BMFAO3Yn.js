import{S as t,P as e,Q as n,R as s,F as o,U as r,bJ as c,bq as $,bD as l,bE as a,bF as f,bG as i,bK as u,_ as m,bL as p,ax as d,bH as g,a9 as x,a4 as b,a8 as h}from"./calfSystem-DiXGAkgN.js"
import{L as W}from"./LinkButton-BZVcIUNH.js"
function k(t,e,n){const s=t.slice()
return s[8]=e[n][0],s[9]=e[n][1],s}function y(t){let e
return{c(){e=x("All")},m(t,n){m(t,e,n)},d(t){t&&r(e)}}}function w(t){let e,n,s
return e=new W({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),e.$on("click",t[4]),{c(){p(e.$$.fragment),n=b()},m(t,o){u(e,t,o),m(t,n,o),s=!0},p(t,n){const s={}
4096&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&r(n),c(e,t)}}}function F(t){let e
return{c(){e=x("Worn")},m(t,n){m(t,e,n)},d(t){t&&r(e)}}}function L(t){let e
return{c(){e=x("Main\n")},m(t,n){m(t,e,n)},d(t){t&&r(e)}}}function j(t){let e,n=t[9]+""
return{c(){e=x(n)},m(t,n){m(t,e,n)},p(t,s){1&s&&n!==(n=t[9]+"")&&h(e,n)},d(t){t&&r(e)}}}function B(t){let e,n
return e=new W({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),e.$on("click",(function(){return t[6](t[8])})),{c(){p(e.$$.fragment)},m(t,s){u(e,t,s),n=!0},p(n,s){t=n
const o={}
4097&s&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(a(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function N(t){let e,n,g,x,b
e=new W({props:{$$slots:{default:[y]},$$scope:{ctx:t}}}),e.$on("click",t[3])
let h=t[1]&&w(t)
g=new W({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),g.$on("click",t[5])
let F=s(o(t[0])),j=[]
for(let e=0;e<F.length;e+=1)j[e]=B(k(t,F,e))
const N=t=>l(j[t],1,1,(()=>{j[t]=null}))
return{c(){p(e.$$.fragment),h&&h.c(),n=d(),p(g.$$.fragment)
for(let t=0;t<j.length;t+=1)j[t].c()
x=d()},m(t,s){u(e,t,s),h&&h.m(t,s),m(t,n,s),u(g,t,s)
for(let e=0;e<j.length;e+=1)j[e]&&j[e].m(t,s)
m(t,x,s),b=!0},p(t,[r]){const c={}
4096&r&&(c.$$scope={dirty:r,ctx:t}),e.$set(c),t[1]?h?(h.p(t,r),2&r&&a(h,1)):(h=w(t),h.c(),a(h,1),h.m(n.parentNode,n)):h&&(f(),l(h,1,1,(()=>{h=null})),i())
const $={}
if(4096&r&&($.$$scope={dirty:r,ctx:t}),g.$set($),5&r){let e
for(F=s(o(t[0])),e=0;e<F.length;e+=1){const n=k(t,F,e)
j[e]?(j[e].p(n,r),a(j[e],1)):(j[e]=B(n),j[e].c(),a(j[e],1),j[e].m(x.parentNode,x))}for(f(),e=F.length;e<j.length;e+=1)N(e)
i()}},i(t){if(!b){a(e.$$.fragment,t),a(h),a(g.$$.fragment,t)
for(let t=0;t<F.length;t+=1)a(j[t])
b=!0}},o(t){l(e.$$.fragment,t),l(h),l(g.$$.fragment,t),j=j.filter(Boolean)
for(let t=0;t<j.length;t+=1)l(j[t])
b=!1},d(t){t&&(r(n),r(x)),c(e,t),h&&h.d(t),c(g,t),$(j,t)}}}function S(t,e,n){const s=g()
let{folders:o={}}=e,{needsWorn:r=0}=e
function c(t){s("filter",t)}return t.$$set=t=>{"folders"in t&&n(0,o=t.folders),"needsWorn"in t&&n(1,r=t.needsWorn)},[o,r,c,()=>c("-2"),()=>c("-3"),()=>c("-1"),t=>c(t)]}class q extends t{constructor(t){super(),e(this,t,S,N,n,{folders:0,needsWorn:1})}}export{q as F}
//# sourceMappingURL=FolderButtons-BMFAO3Yn.js.map
