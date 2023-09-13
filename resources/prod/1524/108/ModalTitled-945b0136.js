import{S as s,L as t,M as n,N as e,P as l,R as c,W as a,Y as o,Z as i,be as u,cd as r,ce as $,bf as d,bg as f,cf as m,ba as p,bd as b,bh as v,c7 as h,O as g,T as x,c9 as M,ca as j,cb as y,cc as w}from"./calfSystem-34913441.js"
import{M as S}from"./Modal-108b3dd4.js"
function k(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",l(t,"class","modal-close svelte-jhpi06"),l(t,"type","button")},m(e,l){c(e,t,l),n||(u=a(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function C(s){const t=u()
return[()=>t("close")]}class L extends s{constructor(s){super(),t(this,s,C,k,n,{})}}const N=s=>({}),O=s=>({})
function P(s){let t,n,a,o,u,r
const $=s[3].title,m=h($,s,s[8],O)
a=new L({}),a.$on("close",s[4])
const w=s[3].default,S=h(w,s,s[8],null)
return{c(){t=e("div"),m&&m.c(),n=g(),d(a.$$.fragment),o=g(),u=e("div"),S&&S.c(),l(t,"class","modal-title svelte-r3dnad"),l(u,"class","modal-content svelte-r3dnad")},m(e,l){c(e,t,l),m&&m.m(t,null),x(t,n),f(a,t,null),s[5](t),c(e,o,l),c(e,u,l),S&&S.m(u,null),r=!0},p(s,t){m&&m.p&&(!r||256&t)&&M(m,$,s,s[8],r?y($,s[8],t,N):j(s[8]),O),S&&S.p&&(!r||256&t)&&M(S,w,s,s[8],r?y(w,s[8],t,null):j(s[8]),null)},i(s){r||(p(m,s),p(a.$$.fragment,s),p(S,s),r=!0)},o(s){b(m,s),b(a.$$.fragment,s),b(S,s),r=!1},d(n){n&&(i(t),i(o),i(u)),m&&m.d(n),v(a),s[5](null),S&&S.d(n)}}}function R(s){let t,n,e
function l(t){s[6](t)}let c={visible:s[0],$$slots:{default:[P]},$$scope:{ctx:s}}
return void 0!==s[1]&&(c.modal=s[1]),t=new S({props:c}),r.push((()=>$(t,"modal",l))),t.$on("close",s[7]),{c(){d(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const l={}
1&e&&(l.visible=s[0]),260&e&&(l.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,l.modal=s[1],m((()=>n=!1))),t.$set(l)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function T(s,t,n){let e,l,{$$slots:c={},$$scope:a}=t,{visible:o=!0}=t
return s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,a=s.$$scope)},[o,e,l,c,function(t){w.call(this,s,t)},function(s){r[s?"unshift":"push"]((()=>{l=s,n(2,l)}))},function(s){e=s,n(1,e)},function(t){w.call(this,s,t)},a]}class W extends s{constructor(s){super(),t(this,s,T,R,n,{visible:0})}}export{W as M}
//# sourceMappingURL=ModalTitled-945b0136.js.map
