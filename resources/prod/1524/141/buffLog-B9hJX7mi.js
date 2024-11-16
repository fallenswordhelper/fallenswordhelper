import{i as t}from"./Modal-D6I5F6g9.js"
import{S as n,L as e,M as s,Z as l,N as c,O as a,P as o,R as r,T as i,U as u,V as f,W as m,X as p,am as d,b9 as b,a2 as h,be as g,bf as $,bg as v,bh as k,bi as x,s as j,aQ as y,cJ as C,aS as L}from"./calfSystem-Blt4DbaE.js"
import{h as M,u as w}from"./await_block-Bf7EOqQ9.js"
import{M as B}from"./ModalTitled-DCrh-JGN.js"
function N(t,n,e){const s=t.slice()
return s[5]=n[e][0],s[6]=n[e][1],s}function S(t){return{c:l,m:l,p:l,d:l}}function R(t){let n,e=c(t[1]),s=[]
for(let n=0;n<e.length;n+=1)s[n]=_(N(t,e,n))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
n=d()},m(t,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,e)
r(t,n,e)},p(t,l){if(2&l){let a
for(e=c(t[1]),a=0;a<e.length;a+=1){const c=N(t,e,a)
s[a]?s[a].p(c,l):(s[a]=_(c),s[a].c(),s[a].m(n.parentNode,n))}for(;a<s.length;a+=1)s[a].d(1)
s.length=e.length}},d(t){t&&a(n),b(s,t)}}}function T(t){let n,e=t[6]+""
return{c(){n=f(e)},m(t,e){r(t,n,e)},p(t,s){2&s&&e!==(e=t[6]+"")&&o(n,e)},d(t){t&&a(n)}}}function W(t){let n,e,s,l=t[6].slice(21,-7)+""
return{c(){n=u("span"),e=f(l),s=m(),p(n,"class","fshRed")},m(t,l){r(t,n,l),i(n,e),i(n,s)},p(t,n){2&n&&l!==(l=t[6].slice(21,-7)+"")&&o(e,l)},d(t){t&&a(n)}}}function _(t){let n,e,s,l,c,i,p=t[5]+""
function b(t,n){return 2&n&&(c=null),null==c&&(c=!!t[6].startsWith("<")),c?W:T}let h=b(t,-1),g=h(t)
return{c(){n=u("br"),e=m(),s=f(p),l=m(),g.c(),i=d()},m(t,c){r(t,n,c),r(t,e,c),r(t,s,c),r(t,l,c),g.m(t,c),r(t,i,c)},p(t,n){2&n&&p!==(p=t[5]+"")&&o(s,p),h===(h=b(t,n))&&g?g.p(t,n):(g.d(1),g=h(t),g&&(g.c(),g.m(i.parentNode,i)))},d(t){t&&(a(n),a(e),a(s),a(l),a(i)),g.d(t)}}}function J(t){return{c:l,m:l,p:l,d:l}}function O(t){let n,e,s,l,c,o,f={ctx:t,current:null,token:null,hasCatch:!1,pending:J,then:R,catch:S}
return M(t[3](),f),{c(){n=u("div"),e=u("button"),e.textContent="Clear",s=m(),l=u("div"),f.block.c(),p(e,"type","button"),p(n,"class","top svelte-1f283a3"),p(l,"class","textContainer svelte-1f283a3")},m(a,u){r(a,n,u),i(n,e),r(a,s,u),r(a,l,u),f.block.m(l,f.anchor=null),f.mount=()=>l,f.anchor=null,c||(o=h(e,"click",t[4]),c=!0)},p(n,e){w(f,t=n,e)},d(t){t&&(a(n),a(s),a(l)),f.block.d(),f.token=null,f=null,c=!1,o()}}}function P(t){let n
return{c(){n=f("Buff Log")},m(t,e){r(t,n,e)},d(t){t&&a(n)}}}function Q(t){let n,e
return n=new B({props:{visible:t[0],$$slots:{title:[P],default:[O]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){x(n.$$.fragment)},m(t,s){k(n,t,s),e=!0},p(t,[e]){const s={}
1&e&&(s.visible=t[0]),514&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(v(n.$$.fragment,t),e=!0)},o(t){$(n.$$.fragment,t),e=!1},d(t){g(n,t)}}}function U(t,n,e){let{visible:s=!0}=n,l=[]
return t.$$set=t=>{"visible"in t&&e(0,s=t.visible)},[s,l,function(){j("Buff Log","close"),e(0,s=!1)},async function(){const t=await y(C)??""
e(1,l=t.split("<br>").map((t=>[t.slice(0,19),t.slice(20)])))},function(){L(C,""),j("Buff Log","clear storage"),e(1,l=[])}]}class V extends n{constructor(t){super(),e(this,t,U,Q,s,{visible:0})}}const X={visible:!0}
let Z=0
function q(){Z=t(X,Z,V)}export{q as default}
//# sourceMappingURL=buffLog-B9hJX7mi.js.map
