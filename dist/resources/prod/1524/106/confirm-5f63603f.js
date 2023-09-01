import{S as s,L as t,M as e,bf as n,bg as a,ba as o,bd as i,bh as c,be as l,N as r,a1 as u,O as m,P as $,R as b,T as f,W as d,a2 as g,Z as p,_ as v}from"./calfSystem-076d7a01.js"
import{M as y}from"./Modal-925b2b72.js"
import{i as x}from"./instantiate-880b172e.js"
function j(s){let t,e,n,a,o,i,c,l,y
return{c(){t=r("div"),e=u(s[1]),n=m(),a=r("div"),o=r("button"),o.textContent="Yes",i=m(),c=r("button"),c.textContent="No",$(t,"class","svelte-1gd1a38"),$(o,"type","button"),$(o,"class","svelte-1gd1a38"),$(c,"type","button"),$(c,"class","svelte-1gd1a38"),$(a,"class","svelte-1gd1a38")},m(r,u){b(r,t,u),f(t,e),b(r,n,u),b(r,a,u),f(a,o),f(a,i),f(a,c),l||(y=[d(o,"click",s[3]),d(c,"click",s[2])],l=!0)},p(s,t){2&t&&g(e,s[1])},d(s){s&&(p(t),p(n),p(a)),l=!1,v(y)}}}function M(s){let t,e
return t=new y({props:{visible:s[0],$$slots:{default:[j]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){n(t.$$.fragment)},m(s,n){a(t,s,n),e=!0},p(s,[e]){const n={}
1&e&&(n.visible=s[0]),34&e&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){e||(o(t.$$.fragment,s),e=!0)},o(s){i(t.$$.fragment,s),e=!1},d(s){c(t,s)}}}function h(s,t,e){let{msg:n="Are you sure?"}=t,{visible:a=!0}=t
const o=l()
return s.$$set=s=>{"msg"in s&&e(1,n=s.msg),"visible"in s&&e(0,a=s.visible)},[a,n,function(){e(0,a=!1),o("no")},function(){e(0,a=!1),o("yes")}]}class k extends s{constructor(s){super(),t(this,s,h,M,e,{msg:1,visible:0})}}const w={visible:!0}
let C
function N(s){C=x(w,C,k),C.$on("yes",(()=>s(!0))),C.$on("no",(()=>s(!1)))}function P(s){return w.msg=s,new Promise(N)}export{P as c}
//# sourceMappingURL=confirm-5f63603f.js.map
