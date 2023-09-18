import{i as t}from"./instantiate-880b172e.js"
import{S as s,K as a,L as o,bb as n,bc as e,b6 as c,b9 as l,bd as i,ai as r,Q as u,Y as m,a0 as f,n as b,ca as p,X as d,M as $,N as k,ad as v,O as g,R as h,V as y,Z as x}from"./calfSystem-abb16b0d.js"
import{h as C,u as j}from"./await_block-78969f55.js"
import{c as L}from"./confirm-e11e045c.js"
import{M as w}from"./ModalTitled-3d3c0c48.js"
import{g as M,s as S}from"./idb-e719862a.js"
import"./Modal-f3893d54.js"
function _(t){return{c:d,m:d,p:d,d:d}}function A(t){let s,a,o,n,e,c,l,i,r,f
return{c(){s=$("div"),a=$("textarea"),n=k(),e=$("div"),c=$("button"),c.textContent="Select All",l=k(),i=$("button"),i.textContent="Clear",a.readOnly=!0,a.value=o=v(t[1]),g(a,"class","svelte-19mlkk5"),g(s,"class","textContainer svelte-19mlkk5"),g(c,"type","button"),g(i,"type","button"),g(e,"class","bottom svelte-19mlkk5")},m(o,m){u(o,s,m),h(s,a),t[7](a),u(o,n,m),u(o,e,m),h(e,c),h(e,l),h(e,i),r||(f=[y(c,"click",t[4]),y(i,"click",t[6])],r=!0)},p(t,s){2&s&&o!==(o=v(t[1]))&&(a.value=o)},d(a){a&&(m(s),m(n),m(e)),t[7](null),r=!1,x(f)}}}function N(t){return{c:d,m:d,p:d,d:d}}function O(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:N,then:A,catch:_}
return C(t[5](),a),{c(){s=r(),a.block.c()},m(t,o){u(t,s,o),a.block.m(t,a.anchor=o),a.mount=()=>s.parentNode,a.anchor=s},p(s,o){j(a,t=s,o)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function K(t){let s
return{c(){s=f("Combat Log")},m(t,a){u(t,s,a)},d(t){t&&m(s)}}}function Q(t){let s,a
return s=new w({props:{visible:t[0],$$slots:{title:[K],default:[O]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){n(s.$$.fragment)},m(t,o){e(s,t,o),a=!0},p(t,[a]){const o={}
1&a&&(o.visible=t[0]),262&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function R(t,s,a){let{visible:o=!0}=s,n=[],e=0
return t.$$set=t=>{"visible"in t&&a(0,o=t.visible)},[o,n,e,function(){b("Combat Log","close"),a(0,o=!1)},function(){e.focus(),e.select()},async function(){a(1,n=await M("fsh_combatLog")??[])},async function(){b("Combat Log","clear storage"),await L("Are you sure you want to clear your log?")&&(a(1,n=[]),S("fsh_combatLog",n))},function(t){p[t?"unshift":"push"]((()=>{e=t,a(2,e)}))}]}var T=class extends s{constructor(t){super(),a(this,t,R,Q,o,{visible:0})}}
const V={visible:!0}
let X=0
function Y(){X=t(V,X,T)}export{Y as default}
//# sourceMappingURL=combatLog-6c80200c.js.map
