import{S as s,O as t,P as n,R as e,U as l,W as a,_ as c,a3 as o,a4 as i,bE as u,cO as $,cP as r,bF as m,bG as d,cQ as f,bA as p,bD as b,bH as v,dK as g,cI as h,T as x,X as j,cK as M,cL as y,cM as z,dL as w,cN as K}from"./calfSystem-ChzN4Q-P.js"
import{M as L}from"./Modal-BueFqMNE.js"
function O(s){let t,n,u
return{c(){t=e("button"),t.textContent="×",l(t,"class","modal-close svelte-jhpi06"),l(t,"type","button")},m(e,l){a(e,t,l),n||(u=c(t,"click",s[0]),n=!0)},p:o,i:o,o:o,d(s){s&&i(t),n=!1,u()}}}function P(s){const t=u()
return[()=>t("close")]}class S extends s{constructor(s){super(),t(this,s,P,O,n,{})}}const k=s=>({}),A=s=>({})
function C(s){let t,n,c,o,u,$
const r=s[3].title,f=h(r,s,s[8],A)
c=new S({}),c.$on("close",s[4])
const g=s[3].default,w=h(g,s,s[8],null)
return{c(){t=e("div"),f&&f.c(),n=x(),m(c.$$.fragment),o=x(),u=e("div"),w&&w.c(),l(t,"class","modal-title svelte-mgjzgm"),l(u,"class","modal-content svelte-mgjzgm")},m(e,l){a(e,t,l),f&&f.m(t,null),j(t,n),d(c,t,null),s[5](t),a(e,o,l),a(e,u,l),w&&w.m(u,null),$=!0},p(s,t){f&&f.p&&(!$||256&t)&&M(f,r,s,s[8],$?z(r,s[8],t,k):y(s[8]),A),w&&w.p&&(!$||256&t)&&M(w,g,s,s[8],$?z(g,s[8],t,null):y(s[8]),null)},i(s){$||(p(f,s),p(c.$$.fragment,s),p(w,s),$=!0)},o(s){b(f,s),b(c.$$.fragment,s),b(w,s),$=!1},d(n){n&&(i(t),i(o),i(u)),f&&f.d(n),v(c),s[5](null),w&&w.d(n)}}}function D(s){let t,n,e
function l(t){s[6](t)}let a={visible:s[0],$$slots:{default:[C]},$$scope:{ctx:s}}
return void 0!==s[1]&&(a.modal=s[1]),t=new L({props:a}),$.push((()=>r(t,"modal",l))),t.$on("close",s[7]),{c(){m(t.$$.fragment)},m(s,n){d(t,s,n),e=!0},p(s,[e]){const l={}
1&e&&(l.visible=s[0]),260&e&&(l.$$scope={dirty:e,ctx:s}),!n&&2&e&&(n=!0,l.modal=s[1],f((()=>n=!1))),t.$set(l)},i(s){e||(p(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){v(t,s)}}}function E(s,t,n){let e,l,{$$slots:a={},$$scope:c}=t,{visible:o=!0}=t
return g((()=>{w(l,e)})),s.$$set=s=>{"visible"in s&&n(0,o=s.visible),"$$scope"in s&&n(8,c=s.$$scope)},[o,e,l,a,function(t){K.call(this,s,t)},function(s){$[s?"unshift":"push"]((()=>{l=s,n(2,l)}))},function(s){e=s,n(1,e)},function(t){K.call(this,s,t)},c]}class F extends s{constructor(s){super(),t(this,s,E,D,n,{visible:0})}}export{F as M}
//# sourceMappingURL=ModalTitled-C-7Cgn78.js.map
