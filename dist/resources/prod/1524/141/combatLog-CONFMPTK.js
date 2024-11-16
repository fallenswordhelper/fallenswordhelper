import{i as t}from"./Modal-D6I5F6g9.js"
import{S as s,L as a,M as e,Z as o,O as n,Y as c,ah as l,R as i,T as r,a2 as u,U as f,W as m,X as b,am as p,V as d,be as $,bf as h,bg as v,bh as g,bi as j,s as k,aQ as y,aS as x,cl as C}from"./calfSystem-Blt4DbaE.js"
import{h as L,u as w}from"./await_block-Bf7EOqQ9.js"
import{c as M}from"./confirm-DOY8kXhY.js"
import{M as S}from"./ModalTitled-DCrh-JGN.js"
function _(t){return{c:o,m:o,p:o,d:o}}function A(t){let s,a,e,o,p,d,$,h,v,g
return{c(){s=f("div"),a=f("textarea"),o=m(),p=f("div"),d=f("button"),d.textContent="Select All",$=m(),h=f("button"),h.textContent="Clear",a.readOnly=!0,a.value=e=l(t[1]),b(a,"class","svelte-1ikjp3j"),b(s,"class","textContainer svelte-1ikjp3j"),b(d,"type","button"),b(h,"type","button"),b(p,"class","bottom svelte-1ikjp3j")},m(e,n){i(e,s,n),r(s,a),t[7](a),i(e,o,n),i(e,p,n),r(p,d),r(p,$),r(p,h),v||(g=[u(d,"click",t[4]),u(h,"click",t[6])],v=!0)},p(t,s){2&s&&e!==(e=l(t[1]))&&(a.value=e)},d(a){a&&(n(s),n(o),n(p)),t[7](null),v=!1,c(g)}}}function O(t){return{c:o,m:o,p:o,d:o}}function T(t){let s,a={ctx:t,current:null,token:null,hasCatch:!1,pending:O,then:A,catch:_}
return L(t[5](),a),{c(){s=p(),a.block.c()},m(t,e){i(t,s,e),a.block.m(t,a.anchor=e),a.mount=()=>s.parentNode,a.anchor=s},p(s,e){w(a,t=s,e)},d(t){t&&n(s),a.block.d(t),a.token=null,a=null}}}function N(t){let s
return{c(){s=d("Combat Log")},m(t,a){i(t,s,a)},d(t){t&&n(s)}}}function Q(t){let s,a
return s=new S({props:{visible:t[0],$$slots:{title:[N],default:[T]},$$scope:{ctx:t}}}),s.$on("close",t[3]),{c(){j(s.$$.fragment)},m(t,e){g(s,t,e),a=!0},p(t,[a]){const e={}
1&a&&(e.visible=t[0]),262&a&&(e.$$scope={dirty:a,ctx:t}),s.$set(e)},i(t){a||(v(s.$$.fragment,t),a=!0)},o(t){h(s.$$.fragment,t),a=!1},d(t){$(s,t)}}}function R(t,s,a){let{visible:e=!0}=s,o=[],n=0
return t.$$set=t=>{"visible"in t&&a(0,e=t.visible)},[e,o,n,function(){k("Combat Log","close"),a(0,e=!1)},function(){n.focus(),n.select()},async function(){a(1,o=await y("fsh_combatLog")??[])},async function(){k("Combat Log","clear storage"),await M("Are you sure you want to clear your log?")&&(a(1,o=[]),x("fsh_combatLog",o))},function(t){C[t?"unshift":"push"]((()=>{n=t,a(2,n)}))}]}class U extends s{constructor(t){super(),a(this,t,R,Q,e,{visible:0})}}const V={visible:!0}
let W=0
function X(){W=t(V,W,U)}export{X as default}
//# sourceMappingURL=combatLog-CONFMPTK.js.map
