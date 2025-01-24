import{i as t}from"./Modal-Cc9OeAYd.js"
import{S as s,O as n,P as e,bF as a,bG as o,bA as l,bD as c,bH as r,as as i,R as u,T as f,U as m,W as b,X as p,_ as d,at as h,a4 as $,a7 as g,s as v,b6 as x,b8 as k,m as y,q as S,aN as F,ac as M,aF as C,dM as L,a3 as _,Q as j,av as q,bp as z,bS as B,a8 as N}from"./calfSystem-CvwhhJv4.js"
import{M as T}from"./ModalTitled-BuRy86X7.js"
function w(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function A(t){return{c:_,m:_,p:_,d:_}}function H(t){let s,n=j(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=D(w(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=q()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
b(t,s,n)},p(t,a){if(2&a){let o
for(n=j(t[1]),o=0;o<n.length;o+=1){const l=w(t,n,o)
e[o]?e[o].p(l,a):(e[o]=D(l),e[o].c(),e[o].m(s.parentNode,s))}for(;o<e.length;o+=1)e[o].d(1)
e.length=n.length}},d(t){t&&$(s),z(e,t)}}}function D(t){let s,n,e,a,o,l,c,r,i,d,h,v=t[8]+"",x=t[9]+""
return{c(){s=u("br"),n=f(),e=u("span"),a=u("a"),o=g(v),c=g("\n          says:"),r=f(),i=u("q"),d=g(x),h=f(),m(a,"href",l=""+(B+t[7])),m(a,"class","svelte-14ozmrh")},m(t,l){b(t,s,l),b(t,n,l),b(t,e,l),p(e,a),p(a,o),p(e,c),b(t,r,l),b(t,i,l),p(i,d),p(i,h)},p(t,s){2&s&&v!==(v=t[8]+"")&&N(o,v),2&s&&l!==(l=""+(B+t[7]))&&m(a,"href",l),2&s&&x!==(x=t[9]+"")&&N(d,x)},d(t){t&&($(s),$(n),$(e),$(r),$(i))}}}function G(t){return{c:_,m:_,p:_,d:_}}function O(t){let s,n,e,a,o,l,c={ctx:t,current:null,token:null,hasCatch:!1,pending:G,then:H,catch:A}
return i(t[3](),c),{c(){s=u("div"),n=u("button"),n.textContent="Clear",e=f(),a=u("div"),c.block.c(),m(n,"type","button"),m(s,"class","top svelte-14ozmrh"),m(a,"class","textContainer svelte-14ozmrh")},m(r,i){b(r,s,i),p(s,n),b(r,e,i),b(r,a,i),c.block.m(a,c.anchor=null),c.mount=()=>a,c.anchor=null,o||(l=d(n,"click",t[4]),o=!0)},p(s,n){h(c,t=s,n)},d(t){t&&($(s),$(e),$(a)),c.block.d(),c.token=null,c=null,o=!1,l()}}}function P(t){let s
return{c(){s=g("FS Box Log")},m(t,n){b(t,s,n)},d(t){t&&$(s)}}}function Q(t){let s,n
return s=new T({props:{visible:t[0],$$slots:{title:[P],default:[O]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){a(s.$$.fragment)},m(t,e){o(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(l(s.$$.fragment,t),n=!0)},o(t){c(s.$$.fragment,t),n=!1},d(t){r(s,t)}}}function R(t,s,n){let{visible:e=!0}=s,a=[]
function o(t){const s=y({innerHTML:t}),n=S("a",s)
return[Number(F(n?.href,"player_id")),M(n),C(S("q",s))]}const l=([t,s,n])=>t&&L(s)&&L(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,a,function(){v("FS Box Log","close"),n(0,e=!1)},async function(){const t=await x("fsh_fsboxcontent")??""
n(1,a=t.split("<br>").map(o).filter(l))},function(){k("fsh_fsboxcontent",""),v("FS Box Log","clear storage"),n(1,a=[])}]}class U extends s{constructor(t){super(),n(this,t,R,Q,e,{visible:0})}}const W={visible:!0}
let X=0
function E(){X=t(W,X,U)}export{E as default}
//# sourceMappingURL=fsboxlog-D8-zpuAA.js.map
