import{S as s,O as t,P as e,bF as n,bG as a,bA as o,bD as i,bH as c,bE as l,R as r,a7 as u,T as $,U as b,W as m,X as f,_ as v,a8 as d,a4 as g,a5 as p}from"./calfSystem-CvwhhJv4.js"
import{M as y,i as x}from"./Modal-Cc9OeAYd.js"
function A(s){let t,e,n,a,o,i,c,l,y
return{c(){t=r("div"),e=u(s[1]),n=$(),a=r("div"),o=r("button"),o.textContent="Yes",i=$(),c=r("button"),c.textContent="No",b(t,"class","svelte-1gd1a38"),b(o,"type","button"),b(o,"class","svelte-1gd1a38"),b(c,"type","button"),b(c,"class","svelte-1gd1a38"),b(a,"class","svelte-1gd1a38")},m(r,u){m(r,t,u),f(t,e),m(r,n,u),m(r,a,u),f(a,o),f(a,i),f(a,c),l||(y=[v(o,"click",s[3]),v(c,"click",s[2])],l=!0)},p(s,t){2&t&&d(e,s[1])},d(s){s&&(g(t),g(n),g(a)),l=!1,p(y)}}}function j(s){let t,e
return t=new y({props:{visible:s[0],$$slots:{default:[A]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){n(t.$$.fragment)},m(s,n){a(t,s,n),e=!0},p(s,[e]){const n={}
1&e&&(n.visible=s[0]),34&e&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){e||(o(t.$$.fragment,s),e=!0)},o(s){i(t.$$.fragment,s),e=!1},d(s){c(t,s)}}}function k(s,t,e){let{msg:n="Are you sure?"}=t,{visible:a=!0}=t
const o=l()
return s.$$set=s=>{"msg"in s&&e(1,n=s.msg),"visible"in s&&e(0,a=s.visible)},[a,n,function(){e(0,a=!1),o("no")},function(){e(0,a=!1),o("yes")}]}class w extends s{constructor(s){super(),t(this,s,k,j,e,{msg:1,visible:0})}}const C={visible:!0}
let M
function P(s){M=x(C,M,w),M.$on("yes",(()=>s(!0))),M.$on("no",(()=>s(!1)))}function S(s){return C.msg=s,new Promise(P)}export{S as c}
//# sourceMappingURL=confirm-NdPgDHCg.js.map
