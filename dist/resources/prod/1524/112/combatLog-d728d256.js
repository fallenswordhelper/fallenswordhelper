import{i as t}from"./instantiate-880b172e.js"
import{S as s,J as a,K as o,ba as n,bb as e,b5 as c,b8 as l,bc as i,ah as r,P as u,X as m,_ as f,n as b,c9 as p,W as d,L as $,M as v,ac as k,N as h,Q as g,U as y,Y as x}from"./calfSystem-4830a18d.js"
import{h as C,u as j}from"./await_block-31b017e2.js"
import{c as L}from"./confirm-68e1ea7c.js"
import{M as w}from"./ModalTitled-c3fc6c07.js"
import{g as M,s as _}from"./idb-7e56faaa.js"
import"./Modal-75c69e5d.js"
function S(t){return{c:d,m:d,p:d,d:d}}function A(t){let s,a,o,n,e,c,l,i,r,f
return{c(){s=$("div"),a=$("textarea"),n=v(),e=$("div"),c=$("button"),c.textContent="Select All",l=v(),i=$("button"),i.textContent="Clear",a.readOnly=!0,a.value=o=k(t[1]),h(a,"class","svelte-19mlkk5"),h(s,"class","textContainer svelte-19mlkk5"),h(c,"type","button"),h(i,"type","button"),h(e,"class","bottom svelte-19mlkk5")},m(o,m){u(o,s,m),g(s,a),t[7](a),u(o,n,m),u(o,e,m),g(e,c),g(e,l),g(e,i),r||(f=[y(c,"click",t[4]),y(i,"click",t[6])],r=!0)},p(t,s){2&s&&o!==(o=k(t[1]))&&(a.value=o)},d(a){a&&(m(s),m(n),m(e)),t[7](null),r=!1,x(f)}}}function N(t){return{c:d,m:d,p:d,d:d}}function J(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:N,then:A,catch:S}
return C(t[5](),a),{c(){s=r(),a.block.c()},m(t,o){u(t,s,o),a.block.m(t,a.anchor=o),a.mount=()=>s.parentNode,a.anchor=s},p(s,o){j(a,t=s,o)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function K(t){let s
return{c(){s=f("Combat Log")},m(t,a){u(t,s,a)},d(t){t&&m(s)}}}function O(t){let s,a
return s=new w({props:{visible:t[0],$$slots:{title:[K],default:[J]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){n(s.$$.fragment)},m(t,o){e(s,t,o),a=!0},p(t,[a]){const o={}
1&a&&(o.visible=t[0]),262&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function P(t,s,a){let{visible:o=!0}=s,n=[],e=0
return t.$$set=t=>{"visible"in t&&a(0,o=t.visible)},[o,n,e,function(){b("Combat Log","close"),a(0,o=!1)},function(){e.focus(),e.select()},async function(){a(1,n=await M("fsh_combatLog")??[])},async function(){b("Combat Log","clear storage"),await L("Are you sure you want to clear your log?")&&(a(1,n=[]),_("fsh_combatLog",n))},function(t){p[t?"unshift":"push"]((()=>{e=t,a(2,e)}))}]}var Q=class extends s{constructor(t){super(),a(this,t,P,O,o,{visible:0})}}
const T={visible:!0}
let U=0
function W(){U=t(T,U,Q)}export{W as default}
//# sourceMappingURL=combatLog-d728d256.js.map
