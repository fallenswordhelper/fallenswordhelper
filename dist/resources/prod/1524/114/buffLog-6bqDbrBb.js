import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as n,J as e,K as s,b9 as l,ba as o,b4 as a,b7 as c,bb as r,L as i,M as u,N as f,P as m,Q as p,U as d,X as b,_ as h,s as g,cv as $,W as v,ah as j,aY as k,a0 as x}from"./calfSystem-rn9Rc_nF.js"
import{h as y,u as C}from"./await_block-WHQS3VDb.js"
import{e as L}from"./each-FVHw1i8T.js"
import{M}from"./ModalTitled-ntPHZ7t4.js"
import{g as w,s as B}from"./idb-1b6_RJN1.js"
import"./Modal-NJ18ALLL.js"
function N(t,n,e){const s=t.slice()
return s[5]=n[e][0],s[6]=n[e][1],s}function S(t){return{c:v,m:v,p:v,d:v}}function W(t){let n,e=L(t[1]),s=[]
for(let n=0;n<e.length;n+=1)s[n]=J(N(t,e,n))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
n=j()},m(t,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,e)
m(t,n,e)},p(t,l){if(2&l){let o
for(e=L(t[1]),o=0;o<e.length;o+=1){const a=N(t,e,o)
s[o]?s[o].p(a,l):(s[o]=J(a),s[o].c(),s[o].m(n.parentNode,n))}for(;o<s.length;o+=1)s[o].d(1)
s.length=e.length}},d(t){t&&b(n),k(s,t)}}}function Y(t){let n,e=t[6]+""
return{c(){n=h(e)},m(t,e){m(t,n,e)},p(t,s){2&s&&e!==(e=t[6]+"")&&x(n,e)},d(t){t&&b(n)}}}function _(t){let n,e,s,l=t[6].slice(21,-7)+""
return{c(){n=i("span"),e=h(l),s=u(),f(n,"class","fshRed")},m(t,l){m(t,n,l),p(n,e),p(n,s)},p(t,n){2&n&&l!==(l=t[6].slice(21,-7)+"")&&x(e,l)},d(t){t&&b(n)}}}function J(t){let n,e,s,l,o,a,c=t[5]+""
function r(t,n){return 2&n&&(o=null),null==o&&(o=!!t[6].startsWith("<")),o?_:Y}let f=r(t,-1),p=f(t)
return{c(){n=i("br"),e=u(),s=h(c),l=u(),p.c(),a=j()},m(t,o){m(t,n,o),m(t,e,o),m(t,s,o),m(t,l,o),p.m(t,o),m(t,a,o)},p(t,n){2&n&&c!==(c=t[5]+"")&&x(s,c),f===(f=r(t,n))&&p?p.p(t,n):(p.d(1),p=f(t),p&&(p.c(),p.m(a.parentNode,a)))},d(t){t&&(b(n),b(e),b(s),b(l),b(a)),p.d(t)}}}function K(t){return{c:v,m:v,p:v,d:v}}function P(t){let n,e,s,l,o,a,c={ctx:t,current:null,token:null,hasCatch:!1,pending:K,then:W,catch:S}
return y(t[3](),c),{c(){n=i("div"),e=i("button"),e.textContent="Clear",s=u(),l=i("div"),c.block.c(),f(e,"type","button"),f(n,"class","top svelte-1f283a3"),f(l,"class","textContainer svelte-1f283a3")},m(r,i){m(r,n,i),p(n,e),m(r,s,i),m(r,l,i),c.block.m(l,c.anchor=null),c.mount=()=>l,c.anchor=null,o||(a=d(e,"click",t[4]),o=!0)},p(n,e){C(c,t=n,e)},d(t){t&&(b(n),b(s),b(l)),c.block.d(),c.token=null,c=null,o=!1,a()}}}function Q(t){let n
return{c(){n=h("Buff Log")},m(t,e){m(t,n,e)},d(t){t&&b(n)}}}function R(t){let n,e
return n=new M({props:{visible:t[0],$$slots:{title:[Q],default:[P]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){l(n.$$.fragment)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s={}
1&e&&(s.visible=t[0]),514&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){c(n.$$.fragment,t),e=!1},d(t){r(n,t)}}}function T(t,n,e){let{visible:s=!0}=n,l=[]
return t.$$set=t=>{"visible"in t&&e(0,s=t.visible)},[s,l,function(){g("Buff Log","close"),e(0,s=!1)},async function(){const t=await w($)??""
e(1,l=t.split("<br>").map((t=>[t.slice(0,19),t.slice(20)])))},function(){B($,""),g("Buff Log","clear storage"),e(1,l=[])}]}var U=class extends n{constructor(t){super(),e(this,t,T,R,s,{visible:0})}}
const X={visible:!0}
let q=0
function z(){q=t(X,q,U)}export{z as default}
//# sourceMappingURL=buffLog-6bqDbrBb.js.map
