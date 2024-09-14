import{S as s,L as t,M as n,O as e,Q as l,T as c,X as a,_ as o,a0 as i,bi as u,cl as $,cm as r,bj as m,bk as f,cn as d,be as p,bh as b,bl as v,dg as g,dh as h,cf as j,P as x,U as M,ch as k,ci as y,cj as w,ck as z}from"./calfSystem-Dh7h0wep.js"
import{M as S}from"./Modal-BjUHjI3V.js"
function C(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",l(t,"class","modal-close svelte-jhpi06"),l(t,"type","button")},m(e,l){c(e,t,l),n||(u=a(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function L(s){const t=u()
return[()=>t("close")]}class O extends s{constructor(s){super(),t(this,s,L,C,n,{})}}const P=s=>({}),Q=s=>({})
function T(s){let t,n,a,o,u,$
const r=s[3].title,d=j(r,s,s[8],Q)
a=new O({}),a.$on("close",s[4])
const g=s[3].default,h=j(g,s,s[8],null)
return{c(){t=e("div"),d&&d.c(),n=x(),m(a.$$.fragment),o=x(),u=e("div"),h&&h.c(),l(t,"class","modal-title svelte-mgjzgm"),l(u,"class","modal-content svelte-mgjzgm")},m(e,l){c(e,t,l),d&&d.m(t,null),M(t,n),f(a,t,null),s[5](t),c(e,o,l),c(e,u,l),h&&h.m(u,null),$=!0},p(s,t){d&&d.p&&(!$||256&t)&&k(d,r,s,s[8],$?w(r,s[8],t,P):y(s[8]),Q),h&&h.p&&(!$||256&t)&&k(h,g,s,s[8],$?w(g,s[8],t,null):y(s[8]),null)},i(s){$||(p(d,s),p(a.$$.fragment,s),p(h,s),$=!0)},o(s){b(d,s),b(a.$$.fragment,s),b(h,s),$=!1},d(n){n&&(i(t),i(o),i(u)),d&&d.d(n),v(a),s[5](null),h&&h.d(n)}}}function U(s){let t,n,e
function l(t){s[6](t)}let c={visible:s[0],$$slots:{default:[T]},$$scope:{ctx:s}}
return void 0!==s[1]&&(c.modal=s[1]),t=new S({props:c}),$.push((()=>r(t,"modal",l))),t.$on("close",s[7]),{c(){m(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const l={}
1&e&&(l.visible=s[0]),260&e&&(l.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,l.modal=s[1],d((()=>n=!1))),t.$set(l)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function X(s,t,n){let e,l,{$$slots:c={},$$scope:a}=t,{visible:o=!0}=t
return g((()=>{h(l,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,a=s.$$scope)},[o,e,l,c,function(t){z.call(this,s,t)},function(s){$[s?"unshift":"push"]((()=>{l=s,n(2,l)}))},function(s){e=s,n(1,e)},function(t){z.call(this,s,t)},a]}class _ extends s{constructor(s){super(),t(this,s,X,U,n,{visible:0})}}export{_ as M}
//# sourceMappingURL=ModalTitled-BHO4qPf4.js.map
