import{i as t}from"./Modal-BMQofQrT.js"
import{S as n,O as e,P as s,bF as l,bG as a,bA as c,bD as o,bH as r,as as i,R as u,T as f,U as p,W as d,X as m,_ as b,at as h,a4 as $,a7 as g,s as v,b6 as x,d4 as k,b8 as y,a3 as C,Q as j,av as B,bp as L,a8 as M}from"./calfSystem-fMW-YMyF.js"
import{M as w}from"./ModalTitled-DdT5kcKI.js"
function A(t,n,e){const s=t.slice()
return s[5]=n[e][0],s[6]=n[e][1],s}function N(t){return{c:C,m:C,p:C,d:C}}function R(t){let n,e=j(t[1]),s=[]
for(let n=0;n<e.length;n+=1)s[n]=W(A(t,e,n))
return{c(){for(let t=0;t<s.length;t+=1)s[t].c()
n=B()},m(t,e){for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(t,e)
d(t,n,e)},p(t,l){if(2&l){let a
for(e=j(t[1]),a=0;a<e.length;a+=1){const c=A(t,e,a)
s[a]?s[a].p(c,l):(s[a]=W(c),s[a].c(),s[a].m(n.parentNode,n))}for(;a<s.length;a+=1)s[a].d(1)
s.length=e.length}},d(t){t&&$(n),L(s,t)}}}function S(t){let n,e=t[6]+""
return{c(){n=g(e)},m(t,e){d(t,n,e)},p(t,s){2&s&&e!==(e=t[6]+"")&&M(n,e)},d(t){t&&$(n)}}}function T(t){let n,e,s,l=t[6].slice(21,-7)+""
return{c(){n=u("span"),e=g(l),s=f(),p(n,"class","fshRed")},m(t,l){d(t,n,l),m(n,e),m(n,s)},p(t,n){2&n&&l!==(l=t[6].slice(21,-7)+"")&&M(e,l)},d(t){t&&$(n)}}}function W(t){let n,e,s,l,a,c,o=t[5]+""
function r(t,n){return 2&n&&(a=null),null==a&&(a=!!t[6].startsWith("<")),a?T:S}let i=r(t,-1),p=i(t)
return{c(){n=u("br"),e=f(),s=g(o),l=f(),p.c(),c=B()},m(t,a){d(t,n,a),d(t,e,a),d(t,s,a),d(t,l,a),p.m(t,a),d(t,c,a)},p(t,n){2&n&&o!==(o=t[5]+"")&&M(s,o),i===(i=r(t,n))&&p?p.p(t,n):(p.d(1),p=i(t),p&&(p.c(),p.m(c.parentNode,c)))},d(t){t&&($(n),$(e),$(s),$(l),$(c)),p.d(t)}}}function D(t){return{c:C,m:C,p:C,d:C}}function F(t){let n,e,s,l,a,c,o={ctx:t,current:null,token:null,hasCatch:!1,pending:D,then:R,catch:N}
return i(t[3](),o),{c(){n=u("div"),e=u("button"),e.textContent="Clear",s=f(),l=u("div"),o.block.c(),p(e,"type","button"),p(n,"class","top svelte-1f283a3"),p(l,"class","textContainer svelte-1f283a3")},m(r,i){d(r,n,i),m(n,e),d(r,s,i),d(r,l,i),o.block.m(l,o.anchor=null),o.mount=()=>l,o.anchor=null,a||(c=b(e,"click",t[4]),a=!0)},p(n,e){h(o,t=n,e)},d(t){t&&($(n),$(s),$(l)),o.block.d(),o.token=null,o=null,a=!1,c()}}}function G(t){let n
return{c(){n=g("Buff Log")},m(t,e){d(t,n,e)},d(t){t&&$(n)}}}function H(t){let n,e
return n=new w({props:{visible:t[0],$$slots:{title:[G],default:[F]},$$scope:{ctx:t}}}),n.$on("close",t[2]),{c(){l(n.$$.fragment)},m(t,s){a(n,t,s),e=!0},p(t,[e]){const s={}
1&e&&(s.visible=t[0]),514&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){o(n.$$.fragment,t),e=!1},d(t){r(n,t)}}}function O(t,n,e){let{visible:s=!0}=n,l=[]
return t.$$set=t=>{"visible"in t&&e(0,s=t.visible)},[s,l,function(){v("Buff Log","close"),e(0,s=!1)},async function(){const t=await x(k)??""
e(1,l=t.split("<br>").map((t=>[t.slice(0,19),t.slice(20)])))},function(){y(k,""),v("Buff Log","clear storage"),e(1,l=[])}]}class P extends n{constructor(t){super(),e(this,t,O,H,s,{visible:0})}}const Q={visible:!0}
let U=0
function X(){U=t(Q,U,P)}export{X as default}
//# sourceMappingURL=buffLog-C7w3-NLC.js.map
