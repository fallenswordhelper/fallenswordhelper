import{i as t}from"./instantiate-880b172e.js"
import{S as n,J as e,K as s,ba as l,bb as o,b5 as a,b8 as c,bc as r,L as i,M as u,N as f,P as m,Q as p,U as d,X as b,_ as h,n as g,cw as $,W as v,ah as j,aZ as k,a0 as x}from"./calfSystem-4830a18d.js"
import{h as w,u as y}from"./await_block-31b017e2.js"
import{e as C}from"./each-1f09c43f.js"
import{M as L}from"./ModalTitled-c3fc6c07.js"
import{g as M,s as B}from"./idb-7e56faaa.js"
import"./Modal-75c69e5d.js"
function N(t,n,e){const s=t.slice()
return s[5]=n[e][0],s[6]=n[e][1],s}function S(t){return{c:v,m:v,p:v,d:v}}function W(t){let n,e=C(t[1]),s=[]
for(let n=0;n<e.length;n+=1)s[n]=K(N(t,e,n))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
n=j()},m(t,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,e)
m(t,n,e)},p(t,l){if(2&l){let o
for(e=C(t[1]),o=0;o<e.length;o+=1){const a=N(t,e,o)
s[o]?s[o].p(a,l):(s[o]=K(a),s[o].c(),s[o].m(n.parentNode,n))}for(;o<s.length;o+=1)s[o].d(1)
s.length=e.length}},d(t){t&&b(n),k(s,t)}}}function _(t){let n,e=t[6]+""
return{c(){n=h(e)},m(t,e){m(t,n,e)},p(t,s){2&s&&e!==(e=t[6]+"")&&x(n,e)},d(t){t&&b(n)}}}function J(t){let n,e,s,l=t[6].slice(21,-7)+""
return{c(){n=i("span"),e=h(l),s=u(),f(n,"class","fshRed")},m(t,l){m(t,n,l),p(n,e),p(n,s)},p(t,n){2&n&&l!==(l=t[6].slice(21,-7)+"")&&x(e,l)},d(t){t&&b(n)}}}function K(t){let n,e,s,l,o,a,c=t[5]+""
function r(t,n){return 2&n&&(o=null),null==o&&(o=!!t[6].startsWith("<")),o?J:_}let f=r(t,-1),p=f(t)
return{c(){n=i("br"),e=u(),s=h(c),l=u(),p.c(),a=j()},m(t,o){m(t,n,o),m(t,e,o),m(t,s,o),m(t,l,o),p.m(t,o),m(t,a,o)},p(t,n){2&n&&c!==(c=t[5]+"")&&x(s,c),f===(f=r(t,n))&&p?p.p(t,n):(p.d(1),p=f(t),p&&(p.c(),p.m(a.parentNode,a)))},d(t){t&&(b(n),b(e),b(s),b(l),b(a)),p.d(t)}}}function P(t){return{c:v,m:v,p:v,d:v}}function Q(t){let n,e,s,l,o,a,c={ctx:t,current:null,token:null,hasCatch:!1,pending:P,then:W,catch:S}
return w(t[3](),c),{c(){n=i("div"),e=i("button"),e.textContent="Clear",s=u(),l=i("div"),c.block.c(),f(e,"type","button"),f(n,"class","top svelte-1f283a3"),f(l,"class","textContainer svelte-1f283a3")},m(r,i){m(r,n,i),p(n,e),m(r,s,i),m(r,l,i),c.block.m(l,c.anchor=null),c.mount=()=>l,c.anchor=null,o||(a=d(e,"click",t[4]),o=!0)},p(n,e){y(c,t=n,e)},d(t){t&&(b(n),b(s),b(l)),c.block.d(),c.token=null,c=null,o=!1,a()}}}function R(t){let n
return{c(){n=h("Buff Log")},m(t,e){m(t,n,e)},d(t){t&&b(n)}}}function T(t){let n,e
return n=new L({props:{visible:t[0],$$slots:{title:[R],default:[Q]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){l(n.$$.fragment)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s={}
1&e&&(s.visible=t[0]),514&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){c(n.$$.fragment,t),e=!1},d(t){r(n,t)}}}function U(t,n,e){let{visible:s=!0}=n,l=[]
return t.$$set=t=>{"visible"in t&&e(0,s=t.visible)},[s,l,function(){g("Buff Log","close"),e(0,s=!1)},async function(){const t=await M($)??""
e(1,l=t.split("<br>").map((t=>[t.slice(0,19),t.slice(20)])))},function(){B($,""),g("Buff Log","clear storage"),e(1,l=[])}]}var X=class extends n{constructor(t){super(),e(this,t,U,T,s,{visible:0})}}
const Y={visible:!0}
let Z=0
function q(){Z=t(Y,Z,X)}export{q as default}
//# sourceMappingURL=buffLog-bf4cc997.js.map
