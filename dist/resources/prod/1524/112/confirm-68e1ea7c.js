import{S as s,J as t,K as e,ba as n,bb as a,b5 as o,b8 as i,bc as c,b9 as l,L as r,_ as u,M as b,N as m,P as $,Q as f,U as p,a0 as v,X as d,Y as g}from"./calfSystem-4830a18d.js"
import{M as y}from"./Modal-75c69e5d.js"
import{i as x}from"./instantiate-880b172e.js"
function j(s){let t,e,n,a,o,i,c,l,y
return{c(){t=r("div"),e=u(s[1]),n=b(),a=r("div"),o=r("button"),o.textContent="Yes",i=b(),c=r("button"),c.textContent="No",m(t,"class","svelte-1gd1a38"),m(o,"type","button"),m(o,"class","svelte-1gd1a38"),m(c,"type","button"),m(c,"class","svelte-1gd1a38"),m(a,"class","svelte-1gd1a38")},m(r,u){$(r,t,u),f(t,e),$(r,n,u),$(r,a,u),f(a,o),f(a,i),f(a,c),l||(y=[p(o,"click",s[3]),p(c,"click",s[2])],l=!0)},p(s,t){2&t&&v(e,s[1])},d(s){s&&(d(t),d(n),d(a)),l=!1,g(y)}}}function M(s){let t,e
return t=new y({props:{visible:s[0],$$slots:{default:[j]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){n(t.$$.fragment)},m(s,n){a(t,s,n),e=!0},p(s,[e]){const n={}
1&e&&(n.visible=s[0]),34&e&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){e||(o(t.$$.fragment,s),e=!0)},o(s){i(t.$$.fragment,s),e=!1},d(s){c(t,s)}}}function k(s,t,e){let{msg:n="Are you sure?"}=t,{visible:a=!0}=t
const o=l()
return s.$$set=s=>{"msg"in s&&e(1,n=s.msg),"visible"in s&&e(0,a=s.visible)},[a,n,function(){e(0,a=!1),o("no")},function(){e(0,a=!1),o("yes")}]}class w extends s{constructor(s){super(),t(this,s,k,M,e,{msg:1,visible:0})}}const C={visible:!0}
let N
function P(s){N=x(C,N,w),N.$on("yes",(()=>s(!0))),N.$on("no",(()=>s(!1)))}function S(s){return C.msg=s,new Promise(P)}export{S as c}
//# sourceMappingURL=confirm-68e1ea7c.js.map
