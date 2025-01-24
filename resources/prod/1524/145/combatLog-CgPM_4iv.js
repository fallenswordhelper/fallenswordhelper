import{i as t}from"./Modal-Cc9OeAYd.js"
import{S as s,O as a,P as e,bF as n,bG as o,bA as c,bD as l,bH as i,as as r,av as u,W as f,at as b,a4 as m,a7 as p,s as d,b6 as $,b8 as v,cO as g,a3 as h,R as j,T as k,an as y,U as x,X as C,_ as L,a5 as w}from"./calfSystem-CvwhhJv4.js"
import{c as A}from"./confirm-NdPgDHCg.js"
import{M}from"./ModalTitled-BuRy86X7.js"
function O(t){return{c:h,m:h,p:h,d:h}}function S(t){let s,a,e,n,o,c,l,i,r,u
return{c(){s=j("div"),a=j("textarea"),n=k(),o=j("div"),c=j("button"),c.textContent="Select All",l=k(),i=j("button"),i.textContent="Clear",a.readOnly=!0,a.value=e=y(t[1]),x(a,"class","svelte-1ikjp3j"),x(s,"class","textContainer svelte-1ikjp3j"),x(c,"type","button"),x(i,"type","button"),x(o,"class","bottom svelte-1ikjp3j")},m(e,b){f(e,s,b),C(s,a),t[7](a),f(e,n,b),f(e,o,b),C(o,c),C(o,l),C(o,i),r||(u=[L(c,"click",t[4]),L(i,"click",t[6])],r=!0)},p(t,s){2&s&&e!==(e=y(t[1]))&&(a.value=e)},d(a){a&&(m(s),m(n),m(o)),t[7](null),r=!1,w(u)}}}function _(t){return{c:h,m:h,p:h,d:h}}function T(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:_,then:S,catch:O}
return r(t[5](),a),{c(){s=u(),a.block.c()},m(t,e){f(t,s,e),a.block.m(t,a.anchor=e),a.mount=()=>s.parentNode,a.anchor=s},p(s,e){b(a,t=s,e)},d(t){t&&m(s),a.block.d(t),a.token=null,a=null}}}function z(t){let s
return{c(){s=p("Combat Log")},m(t,a){f(t,s,a)},d(t){t&&m(s)}}}function D(t){let s,a
return s=new M({props:{visible:t[0],$$slots:{title:[z],default:[T]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){n(s.$$.fragment)},m(t,e){o(s,t,e),a=!0},p(t,[a]){const e={}
1&a&&(e.visible=t[0]),262&a&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){a||(c(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){i(s,t)}}}function F(t,s,a){let{visible:e=!0}=s,n=[],o=0
return t.$$set=t=>{"visible"in t&&a(0,e=t.visible)},[e,n,o,function(){d("Combat Log","close"),a(0,e=!1)},function(){o.focus(),o.select()},async function(){a(1,n=await $("fsh_combatLog")??[])},async function(){d("Combat Log","clear storage"),await A("Are you sure you want to clear your log?")&&(a(1,n=[]),v("fsh_combatLog",n))},function(t){g[t?"unshift":"push"]((()=>{o=t,a(2,o)}))}]}class G extends s{constructor(t){super(),a(this,t,F,D,e,{visible:0})}}const H={visible:!0}
let N=0
function P(){N=t(H,N,G)}export{P as default}
//# sourceMappingURL=combatLog-CgPM_4iv.js.map
