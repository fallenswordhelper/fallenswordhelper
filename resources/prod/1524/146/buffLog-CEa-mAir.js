import{S as t,P as n,Q as e,bJ as s,bD as l,bE as a,bK as c,bL as o,au as r,U as i,av as u,_ as f,a0 as d,a1 as p,a3 as m,a4 as b,a5 as h,a9 as $,s as g,bw as v,db as x,bx as k,T as y,R as C,bq as L,ax as w,a8 as B,dR as R}from"./calfSystem-DiXGAkgN.js"
import{M as j}from"./ModalTitled-tS2Ux_DT.js"
function M(t,n,e){const s=t.slice()
return s[5]=n[e][0],s[6]=n[e][1],s}function N(t){return{c:y,m:y,p:y,d:y}}function S(t){let n,e=C(t[1]),s=[]
for(let n=0;n<e.length;n+=1)s[n]=D(M(t,e,n))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
n=w()},m(t,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,e)
f(t,n,e)},p(t,l){if(2&l){let a
for(e=C(t[1]),a=0;a<e.length;a+=1){const c=M(t,e,a)
s[a]?s[a].p(c,l):(s[a]=D(c),s[a].c(),s[a].m(n.parentNode,n))}for(;a<s.length;a+=1)s[a].d(1)
s.length=e.length}},d(t){t&&i(n),L(s,t)}}}function T(t){let n,e=t[6]+""
return{c(){n=$(e)},m(t,e){f(t,n,e)},p(t,s){2&s&&e!==(e=t[6]+"")&&B(n,e)},d(t){t&&i(n)}}}function q(t){let n,e,s,l=t[6].slice(21,-7)+""
return{c(){n=m("span"),e=$(l),s=b(),h(n,"class","fshRed")},m(t,l){f(t,n,l),d(n,e),d(n,s)},p(t,n){2&n&&l!==(l=t[6].slice(21,-7)+"")&&B(e,l)},d(t){t&&i(n)}}}function D(t){let n,e,s,l,a,c,o=t[5]+""
function r(t,n){return 2&n&&(a=null),null==a&&(a=!!t[6].startsWith("<")),a?q:T}let u=r(t,-1),d=u(t)
return{c(){n=m("br"),e=b(),s=$(o),l=b(),d.c(),c=w()},m(t,a){f(t,n,a),f(t,e,a),f(t,s,a),f(t,l,a),d.m(t,a),f(t,c,a)},p(t,n){2&n&&o!==(o=t[5]+"")&&B(s,o),u===(u=r(t,n))&&d?d.p(t,n):(d.d(1),d=u(t),d&&(d.c(),d.m(c.parentNode,c)))},d(t){t&&(i(n),i(e),i(s),i(l),i(c)),d.d(t)}}}function E(t){return{c:y,m:y,p:y,d:y}}function J(t){let n,e,s,l,a,c,o={ctx:t,current:null,token:null,hasCatch:!1,pending:E,then:S,catch:N}
return r(t[3](),o),{c(){n=m("div"),e=m("button"),e.textContent="Clear",s=b(),l=m("div"),o.block.c(),h(e,"type","button"),h(n,"class","top svelte-1f283a3"),h(l,"class","textContainer svelte-1f283a3")},m(r,i){f(r,n,i),d(n,e),f(r,s,i),f(r,l,i),o.block.m(l,o.anchor=null),o.mount=()=>l,o.anchor=null,a||(c=p(e,"click",t[4]),a=!0)},p(n,e){u(o,t=n,e)},d(t){t&&(i(n),i(s),i(l)),o.block.d(),o.token=null,o=null,a=!1,c()}}}function K(t){let n
return{c(){n=$("Buff Log")},m(t,e){f(t,n,e)},d(t){t&&i(n)}}}function P(t){let n,e
return n=new j({props:{visible:t[0],$$slots:{title:[K],default:[J]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){o(n.$$.fragment)},m(t,s){c(n,t,s),e=!0},p(t,[e]){const s={}
1&e&&(s.visible=t[0]),514&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){s(n,t)}}}function Q(t,n,e){let{visible:s=!0}=n,l=[]
return t.$$set=t=>{"visible"in t&&e(0,s=t.visible)},[s,l,function(){g("Buff Log","close"),e(0,s=!1)},async function(){const t=await v(x)??""
e(1,l=t.split("<br>").map((t=>[t.slice(0,19),t.slice(20)])))},function(){k(x,""),g("Buff Log","clear storage"),e(1,l=[])}]}class U extends t{constructor(t){super(),n(this,t,Q,P,e,{visible:0})}}const W={visible:!0}
let _=0
function z(){_=R(W,_,U)}export{z as default}
//# sourceMappingURL=buffLog-CEa-mAir.js.map
