import{S as s,L as t,M as e,bj as n,bk as a,be as o,bh as i,bl as c,bi as l,O as r,a3 as u,P as m,Q as $,T as b,U as f,X as p,a4 as v,a0 as d,a1 as g}from"./calfSystem-DKih1pr1.js"
import{M as y}from"./Modal-BxEsJBuc.js"
import{i as x}from"./instantiate-upFtXRx7.js"
function j(s){let t,e,n,a,o,i,c,l,y
return{c(){t=r("div"),e=u(s[1]),n=m(),a=r("div"),o=r("button"),o.textContent="Yes",i=m(),c=r("button"),c.textContent="No",$(t,"class","svelte-1gd1a38"),$(o,"type","button"),$(o,"class","svelte-1gd1a38"),$(c,"type","button"),$(c,"class","svelte-1gd1a38"),$(a,"class","svelte-1gd1a38")},m(r,u){b(r,t,u),f(t,e),b(r,n,u),b(r,a,u),f(a,o),f(a,i),f(a,c),l||(y=[p(o,"click",s[3]),p(c,"click",s[2])],l=!0)},p(s,t){2&t&&v(e,s[1])},d(s){s&&(d(t),d(n),d(a)),l=!1,g(y)}}}function k(s){let t,e
return t=new y({props:{visible:s[0],$$slots:{default:[j]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){n(t.$$.fragment)},m(s,n){a(t,s,n),e=!0},p(s,[e]){const n={}
1&e&&(n.visible=s[0]),34&e&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){e||(o(t.$$.fragment,s),e=!0)},o(s){i(t.$$.fragment,s),e=!1},d(s){c(t,s)}}}function M(s,t,e){let{msg:n="Are you sure?"}=t,{visible:a=!0}=t
const o=l()
return s.$$set=s=>{"msg"in s&&e(1,n=s.msg),"visible"in s&&e(0,a=s.visible)},[a,n,function(){e(0,a=!1),o("no")},function(){e(0,a=!1),o("yes")}]}class h extends s{constructor(s){super(),t(this,s,M,k,e,{msg:1,visible:0})}}const w={visible:!0}
let C
function P(s){C=x(w,C,h),C.$on("yes",(()=>s(!0))),C.$on("no",(()=>s(!1)))}function S(s){return w.msg=s,new Promise(P)}export{S as c}
//# sourceMappingURL=confirm-CsIVFA7N.js.map
