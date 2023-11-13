import{S as s,J as t,K as n,L as e,N as a,P as c,U as l,W as o,X as i,b8 as u,c8 as $,c9 as r,b9 as d,ba as f,ca as m,b4 as p,b7 as b,bb as v,c_ as h,c2 as g,M as x,Q as M,c4 as j,c5 as y,c6 as w,c$ as S,c7 as k}from"./calfSystem-rn9Rc_nF.js"
import{M as C}from"./Modal-NJ18ALLL.js"
function J(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",a(t,"class","modal-close svelte-jhpi06"),a(t,"type","button")},m(e,a){c(e,t,a),n||(u=l(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function K(s){const t=u()
return[()=>t("close")]}class L extends s{constructor(s){super(),t(this,s,K,J,n,{})}}const N=s=>({}),P=s=>({})
function Q(s){let t,n,l,o,u,$
const r=s[3].title,m=g(r,s,s[8],P)
l=new L({}),l.$on("close",s[4])
const h=s[3].default,S=g(h,s,s[8],null)
return{c(){t=e("div"),m&&m.c(),n=x(),d(l.$$.fragment),o=x(),u=e("div"),S&&S.c(),a(t,"class","modal-title svelte-r3dnad"),a(u,"class","modal-content svelte-r3dnad")},m(e,a){c(e,t,a),m&&m.m(t,null),M(t,n),f(l,t,null),s[5](t),c(e,o,a),c(e,u,a),S&&S.m(u,null),$=!0},p(s,t){m&&m.p&&(!$||256&t)&&j(m,r,s,s[8],$?w(r,s[8],t,N):y(s[8]),P),S&&S.p&&(!$||256&t)&&j(S,h,s,s[8],$?w(h,s[8],t,null):y(s[8]),null)},i(s){$||(p(m,s),p(l.$$.fragment,s),p(S,s),$=!0)},o(s){b(m,s),b(l.$$.fragment,s),b(S,s),$=!1},d(n){n&&(i(t),i(o),i(u)),m&&m.d(n),v(l),s[5](null),S&&S.d(n)}}}function U(s){let t,n,e
function a(t){s[6](t)}let c={visible:s[0],$$slots:{default:[Q]},$$scope:{ctx:s}}
return void 0!==s[1]&&(c.modal=s[1]),t=new C({props:c}),$.push((()=>r(t,"modal",a))),t.$on("close",s[7]),{c(){d(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const a={}
1&e&&(a.visible=s[0]),260&e&&(a.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,a.modal=s[1],m((()=>n=!1))),t.$set(a)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function W(s,t,n){let e,a,{$$slots:c={},$$scope:l}=t,{visible:o=!0}=t
return h((()=>{S(a,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,l=s.$$scope)},[o,e,a,c,function(t){k.call(this,s,t)},function(s){$[s?"unshift":"push"]((()=>{a=s,n(2,a)}))},function(s){e=s,n(1,e)},function(t){k.call(this,s,t)},l]}class X extends s{constructor(s){super(),t(this,s,W,U,n,{visible:0})}}export{X as M}
//# sourceMappingURL=ModalTitled-ntPHZ7t4.js.map
