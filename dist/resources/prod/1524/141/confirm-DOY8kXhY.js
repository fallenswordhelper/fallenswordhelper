import{S as s,L as t,M as e,O as n,Y as a,P as o,R as i,T as c,a2 as l,U as r,V as u,W as $,X as b,be as m,bf as f,bg as g,bh as v,bi as d,bl as p}from"./calfSystem-Blt4DbaE.js"
import{M as y,i as x}from"./Modal-D6I5F6g9.js"
function M(s){let t,e,m,f,g,v,d,p,y
return{c(){t=r("div"),e=u(s[1]),m=$(),f=r("div"),g=r("button"),g.textContent="Yes",v=$(),d=r("button"),d.textContent="No",b(t,"class","svelte-1gd1a38"),b(g,"type","button"),b(g,"class","svelte-1gd1a38"),b(d,"type","button"),b(d,"class","svelte-1gd1a38"),b(f,"class","svelte-1gd1a38")},m(n,a){i(n,t,a),c(t,e),i(n,m,a),i(n,f,a),c(f,g),c(f,v),c(f,d),p||(y=[l(g,"click",s[3]),l(d,"click",s[2])],p=!0)},p(s,t){2&t&&o(e,s[1])},d(s){s&&(n(t),n(m),n(f)),p=!1,a(y)}}}function h(s){let t,e
return t=new y({props:{visible:s[0],$$slots:{default:[M]},$$scope:{ctx:s}}}),t.$on("close",s[2]),{c(){d(t.$$.fragment)},m(s,n){v(t,s,n),e=!0},p(s,[e]){const n={}
1&e&&(n.visible=s[0]),34&e&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){e||(g(t.$$.fragment,s),e=!0)},o(s){f(t.$$.fragment,s),e=!1},d(s){m(t,s)}}}function j(s,t,e){let{msg:n="Are you sure?"}=t,{visible:a=!0}=t
const o=p()
return s.$$set=s=>{"msg"in s&&e(1,n=s.msg),"visible"in s&&e(0,a=s.visible)},[a,n,function(){e(0,a=!1),o("no")},function(){e(0,a=!1),o("yes")}]}class k extends s{constructor(s){super(),t(this,s,j,h,e,{msg:1,visible:0})}}const w={visible:!0}
let C
function P(s){C=x(w,C,k),C.$on("yes",(()=>s(!0))),C.$on("no",(()=>s(!1)))}function S(s){return w.msg=s,new Promise(P)}export{S as c}
//# sourceMappingURL=confirm-DOY8kXhY.js.map
