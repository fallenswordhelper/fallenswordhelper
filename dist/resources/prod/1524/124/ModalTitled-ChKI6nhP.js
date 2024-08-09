import{S as s,L as t,M as n,O as e,Q as c,T as l,X as a,_ as o,a0 as i,bg as u,cf as $,cg as r,bh as m,bi as f,ch as d,bc as p,bf as b,bj as g,d7 as v,d8 as h,c9 as j,P as x,U as M,cb as y,cc as w,cd as z,ce as S}from"./calfSystem-0LeC9ahe.js"
import{M as k}from"./Modal-D2u0yTnL.js"
function C(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",c(t,"class","modal-close svelte-jhpi06"),c(t,"type","button")},m(e,c){l(e,t,c),n||(u=a(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function L(s){const t=u()
return[()=>t("close")]}class O extends s{constructor(s){super(),t(this,s,L,C,n,{})}}const P=s=>({}),Q=s=>({})
function T(s){let t,n,a,o,u,$
const r=s[3].title,d=j(r,s,s[8],Q)
a=new O({}),a.$on("close",s[4])
const v=s[3].default,h=j(v,s,s[8],null)
return{c(){t=e("div"),d&&d.c(),n=x(),m(a.$$.fragment),o=x(),u=e("div"),h&&h.c(),c(t,"class","modal-title svelte-mgjzgm"),c(u,"class","modal-content svelte-mgjzgm")},m(e,c){l(e,t,c),d&&d.m(t,null),M(t,n),f(a,t,null),s[5](t),l(e,o,c),l(e,u,c),h&&h.m(u,null),$=!0},p(s,t){d&&d.p&&(!$||256&t)&&y(d,r,s,s[8],$?z(r,s[8],t,P):w(s[8]),Q),h&&h.p&&(!$||256&t)&&y(h,v,s,s[8],$?z(v,s[8],t,null):w(s[8]),null)},i(s){$||(p(d,s),p(a.$$.fragment,s),p(h,s),$=!0)},o(s){b(d,s),b(a.$$.fragment,s),b(h,s),$=!1},d(n){n&&(i(t),i(o),i(u)),d&&d.d(n),g(a),s[5](null),h&&h.d(n)}}}function U(s){let t,n,e
function c(t){s[6](t)}let l={visible:s[0],$$slots:{default:[T]},$$scope:{ctx:s}}
return void 0!==s[1]&&(l.modal=s[1]),t=new k({props:l}),$.push((()=>r(t,"modal",c))),t.$on("close",s[7]),{c(){m(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const c={}
1&e&&(c.visible=s[0]),260&e&&(c.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,c.modal=s[1],d((()=>n=!1))),t.$set(c)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){g(t,s)}}}function X(s,t,n){let e,c,{$$slots:l={},$$scope:a}=t,{visible:o=!0}=t
return v((()=>{h(c,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,a=s.$$scope)},[o,e,c,l,function(t){S.call(this,s,t)},function(s){$[s?"unshift":"push"]((()=>{c=s,n(2,c)}))},function(s){e=s,n(1,e)},function(t){S.call(this,s,t)},a]}class _ extends s{constructor(s){super(),t(this,s,X,U,n,{visible:0})}}export{_ as M}
//# sourceMappingURL=ModalTitled-ChKI6nhP.js.map
