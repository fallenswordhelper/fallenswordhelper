import{S as s,L as t,M as n,O as e,Z as l,R as c,a2 as a,U as o,X as i,bl as u,cf as $,be as r,bf as m,bg as f,cg as d,ch as p,ci as b,T as g,bh as v,W as h,bi as x,cl as j,cm as M,cn as y,dg as k,dh as w,ck as z}from"./calfSystem-Blt4DbaE.js"
import{M as S}from"./Modal-D6I5F6g9.js"
function C(s){let t,n,u
return{c(){t=o("button"),t.textContent="×",i(t,"class","modal-close svelte-jhpi06"),i(t,"type","button")},m(e,l){c(e,t,l),n||(u=a(t,"click",s[0]),n=!0)},p:l,i:l,o:l,d(s){s&&e(t),n=!1,u()}}}function L(s){const t=u()
return[()=>t("close")]}class O extends s{constructor(s){super(),t(this,s,L,C,n,{})}}const R=s=>({}),T=s=>({})
function U(s){let t,n,l,a,u,j
const M=s[3].title,y=$(M,s,s[8],T)
l=new O({}),l.$on("close",s[4])
const k=s[3].default,w=$(k,s,s[8],null)
return{c(){t=o("div"),y&&y.c(),n=h(),x(l.$$.fragment),a=h(),u=o("div"),w&&w.c(),i(t,"class","modal-title svelte-mgjzgm"),i(u,"class","modal-content svelte-mgjzgm")},m(e,o){c(e,t,o),y&&y.m(t,null),g(t,n),v(l,t,null),s[5](t),c(e,a,o),c(e,u,o),w&&w.m(u,null),j=!0},p(s,t){y&&y.p&&(!j||256&t)&&d(y,M,s,s[8],j?b(M,s[8],t,R):p(s[8]),T),w&&w.p&&(!j||256&t)&&d(w,k,s,s[8],j?b(k,s[8],t,null):p(s[8]),null)},i(s){j||(f(y,s),f(l.$$.fragment,s),f(w,s),j=!0)},o(s){m(y,s),m(l.$$.fragment,s),m(w,s),j=!1},d(n){n&&(e(t),e(a),e(u)),y&&y.d(n),r(l),s[5](null),w&&w.d(n)}}}function W(s){let t,n,e
function l(t){s[6](t)}let c={visible:s[0],$$slots:{default:[U]},$$scope:{ctx:s}}
return void 0!==s[1]&&(c.modal=s[1]),t=new S({props:c}),j.push((()=>M(t,"modal",l))),t.$on("close",s[7]),{c(){x(t.$$.fragment)},m(s,n){v(t,s,n),e=!0},p(s,[e]){const l={}
1&e&&(l.visible=s[0]),260&e&&(l.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,l.modal=s[1],y((()=>n=!1))),t.$set(l)},i(s){e||(f(t.$$.fragment,s),e=!0)},o(s){m(t.$$.fragment,s),e=!1},d(s){r(t,s)}}}function X(s,t,n){let e,l,{$$slots:c={},$$scope:a}=t,{visible:o=!0}=t
return k((()=>{w(l,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,a=s.$$scope)},[o,e,l,c,function(t){z.call(this,s,t)},function(s){j[s?"unshift":"push"]((()=>{l=s,n(2,l)}))},function(s){e=s,n(1,e)},function(t){z.call(this,s,t)},a]}class Z extends s{constructor(s){super(),t(this,s,X,W,n,{visible:0})}}export{Z as M}
//# sourceMappingURL=ModalTitled-DCrh-JGN.js.map
