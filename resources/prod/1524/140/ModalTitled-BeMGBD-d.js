import{S as s,L as t,M as n,O as e,Q as l,T as a,X as c,a0 as o,a1 as i,bi as u,cl as $,cm as r,bj as m,bk as f,cn as d,be as p,bh as b,bl as v,dg as g,cf as h,P as j,U as x,ch as M,ci as k,cj as y,dh as w,ck as z}from"./calfSystem-BhNMi9iJ.js"
import{M as S}from"./Modal-Dxm27BSi.js"
function C(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",l(t,"class","modal-close svelte-jhpi06"),l(t,"type","button")},m(e,l){a(e,t,l),n||(u=c(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function L(s){const t=u()
return[()=>t("close")]}class O extends s{constructor(s){super(),t(this,s,L,C,n,{})}}const P=s=>({}),Q=s=>({})
function T(s){let t,n,c,o,u,$
const r=s[3].title,d=h(r,s,s[8],Q)
c=new O({}),c.$on("close",s[4])
const g=s[3].default,w=h(g,s,s[8],null)
return{c(){t=e("div"),d&&d.c(),n=j(),m(c.$$.fragment),o=j(),u=e("div"),w&&w.c(),l(t,"class","modal-title svelte-mgjzgm"),l(u,"class","modal-content svelte-mgjzgm")},m(e,l){a(e,t,l),d&&d.m(t,null),x(t,n),f(c,t,null),s[5](t),a(e,o,l),a(e,u,l),w&&w.m(u,null),$=!0},p(s,t){d&&d.p&&(!$||256&t)&&M(d,r,s,s[8],$?y(r,s[8],t,P):k(s[8]),Q),w&&w.p&&(!$||256&t)&&M(w,g,s,s[8],$?y(g,s[8],t,null):k(s[8]),null)},i(s){$||(p(d,s),p(c.$$.fragment,s),p(w,s),$=!0)},o(s){b(d,s),b(c.$$.fragment,s),b(w,s),$=!1},d(n){n&&(i(t),i(o),i(u)),d&&d.d(n),v(c),s[5](null),w&&w.d(n)}}}function U(s){let t,n,e
function l(t){s[6](t)}let a={visible:s[0],$$slots:{default:[T]},$$scope:{ctx:s}}
return void 0!==s[1]&&(a.modal=s[1]),t=new S({props:a}),$.push((()=>r(t,"modal",l))),t.$on("close",s[7]),{c(){m(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const l={}
1&e&&(l.visible=s[0]),260&e&&(l.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,l.modal=s[1],d((()=>n=!1))),t.$set(l)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function X(s,t,n){let e,l,{$$slots:a={},$$scope:c}=t,{visible:o=!0}=t
return g((()=>{w(l,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,c=s.$$scope)},[o,e,l,a,function(t){z.call(this,s,t)},function(s){$[s?"unshift":"push"]((()=>{l=s,n(2,l)}))},function(s){e=s,n(1,e)},function(t){z.call(this,s,t)},c]}class q extends s{constructor(s){super(),t(this,s,X,U,n,{visible:0})}}export{q as M}
//# sourceMappingURL=ModalTitled-BeMGBD-d.js.map
