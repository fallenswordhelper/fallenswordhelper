import{i as t}from"./Modal-DMOUkGCZ.js"
import{S as n,L as e,M as s,bj as l,bk as a,be as c,bh as o,bl as r,O as i,P as u,Q as f,T as m,U as p,X as d,a1 as b,a4 as h,s as $,aQ as g,cJ as v,aS as k,a0 as x,N as j,am as y,b6 as C,a5 as L}from"./calfSystem-KuDT30_2.js"
import{h as M,u as w}from"./await_block-BmB8vVOj.js"
import{M as B}from"./ModalTitled-D5cxiJ8L.js"
function N(t,n,e){const s=t.slice()
return s[5]=n[e][0],s[6]=n[e][1],s}function S(t){return{c:x,m:x,p:x,d:x}}function Q(t){let n,e=j(t[1]),s=[]
for(let n=0;n<e.length;n+=1)s[n]=J(N(t,e,n))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
n=y()},m(t,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,e)
m(t,n,e)},p(t,l){if(2&l){let a
for(e=j(t[1]),a=0;a<e.length;a+=1){const c=N(t,e,a)
s[a]?s[a].p(c,l):(s[a]=J(c),s[a].c(),s[a].m(n.parentNode,n))}for(;a<s.length;a+=1)s[a].d(1)
s.length=e.length}},d(t){t&&b(n),C(s,t)}}}function T(t){let n,e=t[6]+""
return{c(){n=h(e)},m(t,e){m(t,n,e)},p(t,s){2&s&&e!==(e=t[6]+"")&&L(n,e)},d(t){t&&b(n)}}}function _(t){let n,e,s,l=t[6].slice(21,-7)+""
return{c(){n=i("span"),e=h(l),s=u(),f(n,"class","fshRed")},m(t,l){m(t,n,l),p(n,e),p(n,s)},p(t,n){2&n&&l!==(l=t[6].slice(21,-7)+"")&&L(e,l)},d(t){t&&b(n)}}}function J(t){let n,e,s,l,a,c,o=t[5]+""
function r(t,n){return 2&n&&(a=null),null==a&&(a=!!t[6].startsWith("<")),a?_:T}let f=r(t,-1),p=f(t)
return{c(){n=i("br"),e=u(),s=h(o),l=u(),p.c(),c=y()},m(t,a){m(t,n,a),m(t,e,a),m(t,s,a),m(t,l,a),p.m(t,a),m(t,c,a)},p(t,n){2&n&&o!==(o=t[5]+"")&&L(s,o),f===(f=r(t,n))&&p?p.p(t,n):(p.d(1),p=f(t),p&&(p.c(),p.m(c.parentNode,c)))},d(t){t&&(b(n),b(e),b(s),b(l),b(c)),p.d(t)}}}function O(t){return{c:x,m:x,p:x,d:x}}function P(t){let n,e,s,l,a,c,o={ctx:t,current:null,token:null,hasCatch:!1,pending:O,then:Q,catch:S}
return M(t[3](),o),{c(){n=i("div"),e=i("button"),e.textContent="Clear",s=u(),l=i("div"),o.block.c(),f(e,"type","button"),f(n,"class","top svelte-1f283a3"),f(l,"class","textContainer svelte-1f283a3")},m(r,i){m(r,n,i),p(n,e),m(r,s,i),m(r,l,i),o.block.m(l,o.anchor=null),o.mount=()=>l,o.anchor=null,a||(c=d(e,"click",t[4]),a=!0)},p(n,e){w(o,t=n,e)},d(t){t&&(b(n),b(s),b(l)),o.block.d(),o.token=null,o=null,a=!1,c()}}}function R(t){let n
return{c(){n=h("Buff Log")},m(t,e){m(t,n,e)},d(t){t&&b(n)}}}function U(t){let n,e
return n=new B({props:{visible:t[0],$$slots:{title:[R],default:[P]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){l(n.$$.fragment)},m(t,s){a(n,t,s),e=!0},p(t,[e]){const s={}
1&e&&(s.visible=t[0]),514&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){o(n.$$.fragment,t),e=!1},d(t){r(n,t)}}}function W(t,n,e){let{visible:s=!0}=n,l=[]
return t.$$set=t=>{"visible"in t&&e(0,s=t.visible)},[s,l,function(){$("Buff Log","close"),e(0,s=!1)},async function(){const t=await g(v)??""
e(1,l=t.split("<br>").map((t=>[t.slice(0,19),t.slice(20)])))},function(){k(v,""),$("Buff Log","clear storage"),e(1,l=[])}]}class X extends n{constructor(t){super(),e(this,t,W,U,s,{visible:0})}}const q={visible:!0}
let z=0
function A(){z=t(q,z,X)}export{A as default}
//# sourceMappingURL=buffLog-C1TXc81v.js.map
