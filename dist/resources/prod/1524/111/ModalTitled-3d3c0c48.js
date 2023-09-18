import{S as s,K as t,L as n,M as e,O as c,Q as l,V as a,X as o,Y as i,ba as u,ca as r,cb as $,bb as d,bc as f,cc as m,b6 as p,b9 as b,bd as v,c4 as h,N as g,R as x,c6 as M,c7 as j,c8 as y,c9 as w}from"./calfSystem-abb16b0d.js"
import{M as S}from"./Modal-f3893d54.js"
function k(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",c(t,"class","modal-close svelte-jhpi06"),c(t,"type","button")},m(e,c){l(e,t,c),n||(u=a(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function C(s){const t=u()
return[()=>t("close")]}class K extends s{constructor(s){super(),t(this,s,C,k,n,{})}}const L=s=>({}),N=s=>({})
function O(s){let t,n,a,o,u,r
const $=s[3].title,m=h($,s,s[8],N)
a=new K({}),a.$on("close",s[4])
const w=s[3].default,S=h(w,s,s[8],null)
return{c(){t=e("div"),m&&m.c(),n=g(),d(a.$$.fragment),o=g(),u=e("div"),S&&S.c(),c(t,"class","modal-title svelte-r3dnad"),c(u,"class","modal-content svelte-r3dnad")},m(e,c){l(e,t,c),m&&m.m(t,null),x(t,n),f(a,t,null),s[5](t),l(e,o,c),l(e,u,c),S&&S.m(u,null),r=!0},p(s,t){m&&m.p&&(!r||256&t)&&M(m,$,s,s[8],r?y($,s[8],t,L):j(s[8]),N),S&&S.p&&(!r||256&t)&&M(S,w,s,s[8],r?y(w,s[8],t,null):j(s[8]),null)},i(s){r||(p(m,s),p(a.$$.fragment,s),p(S,s),r=!0)},o(s){b(m,s),b(a.$$.fragment,s),b(S,s),r=!1},d(n){n&&(i(t),i(o),i(u)),m&&m.d(n),v(a),s[5](null),S&&S.d(n)}}}function Q(s){let t,n,e
function c(t){s[6](t)}let l={visible:s[0],$$slots:{default:[O]},$$scope:{ctx:s}}
return void 0!==s[1]&&(l.modal=s[1]),t=new S({props:l}),r.push((()=>$(t,"modal",c))),t.$on("close",s[7]),{c(){d(t.$$.fragment)},m(s,n){f(t,s,n),e=!0},p(s,[e]){const c={}
1&e&&(c.visible=s[0]),260&e&&(c.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,c.modal=s[1],m((()=>n=!1))),t.$set(c)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function R(s,t,n){let e,c,{$$slots:l={},$$scope:a}=t,{visible:o=!0}=t
return s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,a=s.$$scope)},[o,e,c,l,function(t){w.call(this,s,t)},function(s){r[s?"unshift":"push"]((()=>{c=s,n(2,c)}))},function(s){e=s,n(1,e)},function(t){w.call(this,s,t)},a]}class V extends s{constructor(s){super(),t(this,s,R,Q,n,{visible:0})}}export{V as M}
//# sourceMappingURL=ModalTitled-3d3c0c48.js.map
