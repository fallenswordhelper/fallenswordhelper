import{S as s,L as t,M as n,O as e,Q as a,T as c,X as l,_ as o,a0 as i,bg as u,cg as r,ch as $,bh as d,bi as f,ci as m,bc as p,bf as b,bj as v,da as h,db as g,ca as x,P as j,U as M,cc as y,cd as w,ce as S,cf as k}from"./calfSystem-G1dN925O.js"
import{M as C}from"./Modal-YW3k5oJC.js"
function L(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",a(t,"class","modal-close svelte-jhpi06"),a(t,"type","button")},m(e,a){c(e,t,a),n||(u=l(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function O(s){const t=u()
return[()=>t("close")]}class P extends s{constructor(s){super(),t(this,s,O,L,n,{})}}const Q=s=>({}),T=s=>({})
function U(s){let t,n,l,o,u,r
const $=s[3].title,m=x($,s,s[8],T)
l=new P({}),l.$on("close",s[4])
const h=s[3].default,g=x(h,s,s[8],null)
return{c(){t=e("div"),m&&m.c(),n=j(),d(l.$$.fragment),o=j(),u=e("div"),g&&g.c(),a(t,"class","modal-title svelte-r3dnad"),a(u,"class","modal-content svelte-r3dnad")},m(e,a){c(e,t,a),m&&m.m(t,null),M(t,n),f(l,t,null),s[5](t),c(e,o,a),c(e,u,a),g&&g.m(u,null),r=!0},p(s,t){m&&m.p&&(!r||256&t)&&y(m,$,s,s[8],r?S($,s[8],t,Q):w(s[8]),T),g&&g.p&&(!r||256&t)&&y(g,h,s,s[8],r?S(h,s[8],t,null):w(s[8]),null)},i(s){r||(p(m,s),p(l.$$.fragment,s),p(g,s),r=!0)},o(s){b(m,s),b(l.$$.fragment,s),b(g,s),r=!1},d(n){n&&(i(t),i(o),i(u)),m&&m.d(n),v(l),s[5](null),g&&g.d(n)}}}function X(s){let t,n,e
function a(t){s[6](t)}let c={visible:s[0],$$slots:{default:[U]},$$scope:{ctx:s}}
return void 0!==s[1]&&(c.modal=s[1]),t=new C({props:c}),r.push((()=>$(t,"modal",a))),t.$on("close",s[7]),{c(){d(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const a={}
1&e&&(a.visible=s[0]),260&e&&(a.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,a.modal=s[1],m((()=>n=!1))),t.$set(a)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function _(s,t,n){let e,a,{$$slots:c={},$$scope:l}=t,{visible:o=!0}=t
return h((()=>{g(a,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,l=s.$$scope)},[o,e,a,c,function(t){k.call(this,s,t)},function(s){r[s?"unshift":"push"]((()=>{a=s,n(2,a)}))},function(s){e=s,n(1,e)},function(t){k.call(this,s,t)},l]}class q extends s{constructor(s){super(),t(this,s,_,X,n,{visible:0})}}export{q as M}
//# sourceMappingURL=ModalTitled-L8qvvlEc.js.map
