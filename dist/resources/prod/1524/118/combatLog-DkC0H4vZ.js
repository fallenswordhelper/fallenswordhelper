import{i as t}from"./instantiate-upFtXRx7.js"
import{S as s,L as a,M as e,bh as n,bi as o,bc as c,bf as l,bj as i,am as r,T as u,a0 as m,a3 as f,s as b,aO as p,aQ as d,cg as $,_ as v,O as h,P as k,ah as g,Q as y,U as x,X as C,a1 as j}from"./calfSystem-hszmVKJw.js"
import{h as L,u as w}from"./await_block-DYQUOgK6.js"
import{c as M}from"./confirm-ZaZxXQzI.js"
import{M as _}from"./ModalTitled-CNSpv5Ta.js"
import"./Modal-DfgQnXdG.js"
function O(t){return{c:v,m:v,p:v,d:v}}function S(t){let s,a,e,n,o,c,l,i,r,f
return{c(){s=h("div"),a=h("textarea"),n=k(),o=h("div"),c=h("button"),c.textContent="Select All",l=k(),i=h("button"),i.textContent="Clear",a.readOnly=!0,a.value=e=g(t[1]),y(a,"class","svelte-19mlkk5"),y(s,"class","textContainer svelte-19mlkk5"),y(c,"type","button"),y(i,"type","button"),y(o,"class","bottom svelte-19mlkk5")},m(e,m){u(e,s,m),x(s,a),t[7](a),u(e,n,m),u(e,o,m),x(o,c),x(o,l),x(o,i),r||(f=[C(c,"click",t[4]),C(i,"click",t[6])],r=!0)},p(t,s){2&s&&e!==(e=g(t[1]))&&(a.value=e)},d(a){a&&(m(s),m(n),m(o)),t[7](null),r=!1,j(f)}}}function A(t){return{c:v,m:v,p:v,d:v}}function Q(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:A,then:S,catch:O}
return L(t[5](),a),{c(){s=r(),a.block.c()},m(t,e){u(t,s,e),a.block.m(t,a.anchor=e),a.mount=()=>s.parentNode,a.anchor=s},p(s,e){w(a,t=s,e)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function T(t){let s
return{c(){s=f("Combat Log")},m(t,a){u(t,s,a)},d(t){t&&m(s)}}}function N(t){let s,a
return s=new _({props:{visible:t[0],$$slots:{title:[T],default:[Q]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){n(s.$$.fragment)},m(t,e){o(s,t,e),a=!0},p(t,[a]){const e={}
1&a&&(e.visible=t[0]),262&a&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function P(t,s,a){let{visible:e=!0}=s,n=[],o=0
return t.$$set=t=>{"visible"in t&&a(0,e=t.visible)},[e,n,o,function(){b("Combat Log","close"),a(0,e=!1)},function(){o.focus(),o.select()},async function(){a(1,n=await p("fsh_combatLog")??[])},async function(){b("Combat Log","clear storage"),await M("Are you sure you want to clear your log?")&&(a(1,n=[]),d("fsh_combatLog",n))},function(t){$[t?"unshift":"push"]((()=>{o=t,a(2,o)}))}]}var U=class extends s{constructor(t){super(),a(this,t,P,N,e,{visible:0})}}
const X={visible:!0}
let q=0
function z(){q=t(X,q,U)}export{z as default}
//# sourceMappingURL=combatLog-DkC0H4vZ.js.map
