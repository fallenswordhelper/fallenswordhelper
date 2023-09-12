import{i as t}from"./instantiate-880b172e.js"
import{S as s,L as a,M as o,bf as e,bg as n,ba as c,bd as l,bh as i,aj as r,R as u,Z as m,a1 as f,n as b,cd as p,Y as d,N as $,O as k,ae as v,P as g,T as h,W as y,_ as x}from"./calfSystem-34913441.js"
import{h as j,u as C}from"./await_block-d58cecee.js"
import{c as L}from"./confirm-e3cb1a1b.js"
import{M as w}from"./ModalTitled-945b0136.js"
import{g as M,s as _}from"./idb-ec5d6344.js"
import"./Modal-108b3dd4.js"
function S(t){return{c:d,m:d,p:d,d:d}}function A(t){let s,a,o,e,n,c,l,i,r,f
return{c(){s=$("div"),a=$("textarea"),e=k(),n=$("div"),c=$("button"),c.textContent="Select All",l=k(),i=$("button"),i.textContent="Clear",a.readOnly=!0,a.value=o=v(t[1]),g(a,"class","svelte-19mlkk5"),g(s,"class","textContainer svelte-19mlkk5"),g(c,"type","button"),g(i,"type","button"),g(n,"class","bottom svelte-19mlkk5")},m(o,m){u(o,s,m),h(s,a),t[7](a),u(o,e,m),u(o,n,m),h(n,c),h(n,l),h(n,i),r||(f=[y(c,"click",t[4]),y(i,"click",t[6])],r=!0)},p(t,s){2&s&&o!==(o=v(t[1]))&&(a.value=o)},d(a){a&&(m(s),m(e),m(n)),t[7](null),r=!1,x(f)}}}function N(t){return{c:d,m:d,p:d,d:d}}function O(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:N,then:A,catch:S}
return j(t[5](),a),{c(){s=r(),a.block.c()},m(t,o){u(t,s,o),a.block.m(t,a.anchor=o),a.mount=()=>s.parentNode,a.anchor=s},p(s,o){C(a,t=s,o)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function T(t){let s
return{c(){s=f("Combat Log")},m(t,a){u(t,s,a)},d(t){t&&m(s)}}}function P(t){let s,a
return s=new w({props:{visible:t[0],$$slots:{title:[T],default:[O]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){e(s.$$.fragment)},m(t,o){n(s,t,o),a=!0},p(t,[a]){const o={}
1&a&&(o.visible=t[0]),262&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function R(t,s,a){let{visible:o=!0}=s,e=[],n=0
return t.$$set=t=>{"visible"in t&&a(0,o=t.visible)},[o,e,n,function(){b("Combat Log","close"),a(0,o=!1)},function(){n.focus(),n.select()},async function(){a(1,e=await M("fsh_combatLog")??[])},async function(){b("Combat Log","clear storage"),await L("Are you sure you want to clear your log?")&&(a(1,e=[]),_("fsh_combatLog",e))},function(t){p[t?"unshift":"push"]((()=>{n=t,a(2,n)}))}]}var W=class extends s{constructor(t){super(),a(this,t,R,P,o,{visible:0})}}
const Y={visible:!0}
let Z=0
function q(){Z=t(Y,Z,W)}export{q as default}
//# sourceMappingURL=combatLog-8e23767d.js.map
