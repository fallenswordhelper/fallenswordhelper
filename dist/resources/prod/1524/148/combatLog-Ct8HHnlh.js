import{S as t,P as a,Q as s,bJ as e,bD as n,bE as o,bK as c,bL as l,au as i,U as r,av as u,_ as b,ax as f,a9 as p,s as m,ag as d,d1 as $,T as v,V as g,ap as k,a0 as x,a1 as y,a3 as h,a4 as j,a5 as C,dR as L}from"./calfSystem-BldO1y8X.js"
import{M as w}from"./ModalTitled-DgIzlEw4.js"
import{a as S,b as A}from"./idbLogger-Z_hvnavs.js"
function M(t){return{c:v,m:v,p:v,d:v}}function T(t){let a,s,e,n,o,c,l,i,u,f
return{c(){a=h("div"),s=h("textarea"),n=j(),o=h("div"),c=h("button"),c.textContent="Select All",l=j(),i=h("button"),i.textContent="Clear",s.readOnly=!0,s.value=e=k(t[1]),C(s,"class","svelte-1ikjp3j"),C(a,"class","textContainer svelte-1ikjp3j"),C(c,"type","button"),C(i,"type","button"),C(o,"class","bottom svelte-1ikjp3j")},m(e,r){b(e,a,r),x(a,s),t[7](s),b(e,n,r),b(e,o,r),x(o,c),x(o,l),x(o,i),u||(f=[y(c,"click",t[4]),y(i,"click",t[6])],u=!0)},p(t,a){2&a&&e!==(e=k(t[1]))&&(s.value=e)},d(s){s&&(r(a),r(n),r(o)),t[7](null),u=!1,g(f)}}}function D(t){return{c:v,m:v,p:v,d:v}}function E(t){let a,s={ctx:t,current:null,token:null,hasCatch:!1,pending:D,then:T,catch:M}
return i(t[5](),s),{c(){a=f(),s.block.c()},m(t,e){b(t,a,e),s.block.m(t,s.anchor=e),s.mount=()=>a.parentNode,s.anchor=a},p(a,e){u(s,t=a,e)},d(t){t&&r(a),s.block.d(t),s.token=null,s=null}}}function J(t){let a
return{c(){a=p("Combat Log")},m(t,s){b(t,a,s)},d(t){t&&r(a)}}}function K(t){let a,s
return a=new w({props:{visible:t[0],$$slots:{title:[J],default:[E]},$$scope:{ctx:t}}}),a.$on("close",t[3]),{c(){l(a.$$.fragment)},m(t,e){c(a,t,e),s=!0},p(t,[s]){const e={}
1&s&&(e.visible=t[0]),262&s&&(e.$$scope={dirty:s,ctx:t}),a.$set(e)},i(t){s||(o(a.$$.fragment,t),s=!0)},o(t){n(a.$$.fragment,t),s=!1},d(t){e(a,t)}}}function N(t,a,s){let{visible:e=!0}=a,n=[],o=0
return t.$$set=t=>{"visible"in t&&s(0,e=t.visible)},[e,n,o,function(){m("Combat Log","close"),s(0,e=!1)},function(){o.focus(),o.select()},async function(){s(1,n=await S()??[])},async function(){m("Combat Log","clear storage"),await d("Are you sure you want to clear your log?")&&(s(1,n=[]),A())},function(t){$[t?"unshift":"push"]((()=>{o=t,s(2,o)}))}]}class O extends t{constructor(t){super(),a(this,t,N,K,s,{visible:0})}}const P={visible:!0}
let Q=0
function R(){Q=L(P,Q,O)}export{R as default}
//# sourceMappingURL=combatLog-Ct8HHnlh.js.map
