import{S as s,P as t,Q as n,T as e,U as a,_ as l,a1 as c,a3 as o,a5 as i,bH as u,dS as $,d1 as r,d2 as d,bJ as m,bD as f,bE as p,d3 as b,bK as v,bL as g,dT as h,cT as x,cU as j,cV as y,cW as S,a0 as T,a4 as U,cX as w,dU as z}from"./calfSystem-DiXGAkgN.js"
function k(s){let t,n,u
return{c(){t=o("button"),t.textContent="×",i(t,"class","modal-close svelte-jhpi06"),i(t,"type","button")},m(e,a){l(e,t,a),n||(u=c(t,"click",s[0]),n=!0)},p:e,i:e,o:e,d(s){s&&a(t),n=!1,u()}}}function C(s){const t=u()
return[()=>t("close")]}class D extends s{constructor(s){super(),t(this,s,C,k,n,{})}}const E=s=>({}),H=s=>({})
function J(s){let t,n,e,c,u,$
const r=s[3].title,d=x(r,s,s[8],H)
e=new D({}),e.$on("close",s[4])
const b=s[3].default,h=x(b,s,s[8],null)
return{c(){t=o("div"),d&&d.c(),n=U(),g(e.$$.fragment),c=U(),u=o("div"),h&&h.c(),i(t,"class","modal-title svelte-mgjzgm"),i(u,"class","modal-content svelte-mgjzgm")},m(a,o){l(a,t,o),d&&d.m(t,null),T(t,n),v(e,t,null),s[5](t),l(a,c,o),l(a,u,o),h&&h.m(u,null),$=!0},p(s,t){d&&d.p&&(!$||256&t)&&j(d,r,s,s[8],$?S(r,s[8],t,E):y(s[8]),H),h&&h.p&&(!$||256&t)&&j(h,b,s,s[8],$?S(b,s[8],t,null):y(s[8]),null)},i(s){$||(p(d,s),p(e.$$.fragment,s),p(h,s),$=!0)},o(s){f(d,s),f(e.$$.fragment,s),f(h,s),$=!1},d(n){n&&(a(t),a(c),a(u)),d&&d.d(n),m(e),s[5](null),h&&h.d(n)}}}function K(s){let t,n,e
function a(t){s[6](t)}let l={visible:s[0],$$slots:{default:[J]},$$scope:{ctx:s}}
return void 0!==s[1]&&(l.modal=s[1]),t=new $({props:l}),r.push((()=>d(t,"modal",a))),t.$on("close",s[7]),{c(){g(t.$$.fragment)},m(s,n){v(t,s,n),e=!0},p(s,[e]){const a={}
1&e&&(a.visible=s[0]),260&e&&(a.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,a.modal=s[1],b((()=>n=!1))),t.$set(a)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){f(t.$$.fragment,s),e=!1},d(s){m(t,s)}}}function L(s,t,n){let e,a,{$$slots:l={},$$scope:c}=t,{visible:o=!0}=t
return h((()=>{z(a,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,c=s.$$scope)},[o,e,a,l,function(t){w.call(this,s,t)},function(s){r[s?"unshift":"push"]((()=>{a=s,n(2,a)}))},function(s){e=s,n(1,e)},function(t){w.call(this,s,t)},c]}class M extends s{constructor(s){super(),t(this,s,L,K,n,{visible:0})}}export{M}
//# sourceMappingURL=ModalTitled-tS2Ux_DT.js.map
