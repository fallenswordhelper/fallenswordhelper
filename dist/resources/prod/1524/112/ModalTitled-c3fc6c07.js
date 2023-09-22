import{S as s,J as t,K as n,L as e,N as l,P as c,U as a,W as o,X as i,b9 as u,c9 as r,ca as $,ba as d,bb as f,cb as m,b5 as p,b8 as b,bc as v,c3 as h,M as g,Q as x,c5 as M,c6 as j,c7 as y,c8 as w}from"./calfSystem-4830a18d.js"
import{M as S}from"./Modal-75c69e5d.js"
function k(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",l(t,"class","modal-close svelte-jhpi06"),l(t,"type","button")},m(e,l){c(e,t,l),n||(u=a(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function C(s){const t=u()
return[()=>t("close")]}class J extends s{constructor(s){super(),t(this,s,C,k,n,{})}}const K=s=>({}),L=s=>({})
function N(s){let t,n,a,o,u,r
const $=s[3].title,m=h($,s,s[8],L)
a=new J({}),a.$on("close",s[4])
const w=s[3].default,S=h(w,s,s[8],null)
return{c(){t=e("div"),m&&m.c(),n=g(),d(a.$$.fragment),o=g(),u=e("div"),S&&S.c(),l(t,"class","modal-title svelte-r3dnad"),l(u,"class","modal-content svelte-r3dnad")},m(e,l){c(e,t,l),m&&m.m(t,null),x(t,n),f(a,t,null),s[5](t),c(e,o,l),c(e,u,l),S&&S.m(u,null),r=!0},p(s,t){m&&m.p&&(!r||256&t)&&M(m,$,s,s[8],r?y($,s[8],t,K):j(s[8]),L),S&&S.p&&(!r||256&t)&&M(S,w,s,s[8],r?y(w,s[8],t,null):j(s[8]),null)},i(s){r||(p(m,s),p(a.$$.fragment,s),p(S,s),r=!0)},o(s){b(m,s),b(a.$$.fragment,s),b(S,s),r=!1},d(n){n&&(i(t),i(o),i(u)),m&&m.d(n),v(a),s[5](null),S&&S.d(n)}}}function P(s){let t,n,e
function l(t){s[6](t)}let c={visible:s[0],$$slots:{default:[N]},$$scope:{ctx:s}}
return void 0!==s[1]&&(c.modal=s[1]),t=new S({props:c}),r.push((()=>$(t,"modal",l))),t.$on("close",s[7]),{c(){d(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const l={}
1&e&&(l.visible=s[0]),260&e&&(l.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,l.modal=s[1],m((()=>n=!1))),t.$set(l)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function Q(s,t,n){let e,l,{$$slots:c={},$$scope:a}=t,{visible:o=!0}=t
return s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,a=s.$$scope)},[o,e,l,c,function(t){w.call(this,s,t)},function(s){r[s?"unshift":"push"]((()=>{l=s,n(2,l)}))},function(s){e=s,n(1,e)},function(t){w.call(this,s,t)},a]}class U extends s{constructor(s){super(),t(this,s,Q,P,n,{visible:0})}}export{U as M}
//# sourceMappingURL=ModalTitled-c3fc6c07.js.map
