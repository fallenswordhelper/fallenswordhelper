import{i as t}from"./instantiate-zhKnqr-J.js"
import{S as s,J as a,K as o,b9 as e,ba as n,b4 as c,b7 as l,bb as i,ah as r,P as u,X as m,_ as f,s as b,c8 as p,W as d,L as $,M as v,ac as k,N as h,Q as g,U as y,Y as x}from"./calfSystem-VUa7wwu1.js"
import{h as C,u as j}from"./await_block-5SUqwqnQ.js"
import{c as L}from"./confirm-f0zAMU8i.js"
import{M as w}from"./ModalTitled-vMxB-XQb.js"
import{g as M,s as _}from"./idb-gpu32B-C.js"
import"./Modal-uOwFwRjo.js"
function S(t){return{c:d,m:d,p:d,d:d}}function A(t){let s,a,o,e,n,c,l,i,r,f
return{c(){s=$("div"),a=$("textarea"),e=v(),n=$("div"),c=$("button"),c.textContent="Select All",l=v(),i=$("button"),i.textContent="Clear",a.readOnly=!0,a.value=o=k(t[1]),h(a,"class","svelte-19mlkk5"),h(s,"class","textContainer svelte-19mlkk5"),h(c,"type","button"),h(i,"type","button"),h(n,"class","bottom svelte-19mlkk5")},m(o,m){u(o,s,m),g(s,a),t[7](a),u(o,e,m),u(o,n,m),g(n,c),g(n,l),g(n,i),r||(f=[y(c,"click",t[4]),y(i,"click",t[6])],r=!0)},p(t,s){2&s&&o!==(o=k(t[1]))&&(a.value=o)},d(a){a&&(m(s),m(e),m(n)),t[7](null),r=!1,x(f)}}}function N(t){return{c:d,m:d,p:d,d:d}}function J(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:N,then:A,catch:S}
return C(t[5](),a),{c(){s=r(),a.block.c()},m(t,o){u(t,s,o),a.block.m(t,a.anchor=o),a.mount=()=>s.parentNode,a.anchor=s},p(s,o){j(a,t=s,o)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function K(t){let s
return{c(){s=f("Combat Log")},m(t,a){u(t,s,a)},d(t){t&&m(s)}}}function O(t){let s,a
return s=new w({props:{visible:t[0],$$slots:{title:[K],default:[J]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){e(s.$$.fragment)},m(t,o){n(s,t,o),a=!0},p(t,[a]){const o={}
1&a&&(o.visible=t[0]),262&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function P(t,s,a){let{visible:o=!0}=s,e=[],n=0
return t.$$set=t=>{"visible"in t&&a(0,o=t.visible)},[o,e,n,function(){b("Combat Log","close"),a(0,o=!1)},function(){n.focus(),n.select()},async function(){a(1,e=await M("fsh_combatLog")??[])},async function(){b("Combat Log","clear storage"),await L("Are you sure you want to clear your log?")&&(a(1,e=[]),_("fsh_combatLog",e))},function(t){p[t?"unshift":"push"]((()=>{n=t,a(2,n)}))}]}var Q=class extends s{constructor(t){super(),a(this,t,P,O,o,{visible:0})}}
const T={visible:!0}
let U=0
function W(){U=t(T,U,Q)}export{W as default}
//# sourceMappingURL=combatLog-0JNLQhA6.js.map
