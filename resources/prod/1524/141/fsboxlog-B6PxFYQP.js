import{i as t}from"./Modal-D6I5F6g9.js"
import{S as s,L as n,M as e,Z as a,N as o,O as l,P as r,bt as c,X as i,R as u,T as f,U as m,W as b,V as p,b9 as h,am as d,a2 as g,be as $,bf as x,bg as v,bh as k,bi as y,s as S,aQ as L,k as M,q as _,ax as j,a8 as C,as as q,di as w,aS as z}from"./calfSystem-Blt4DbaE.js"
import{h as B,u as F}from"./await_block-Bf7EOqQ9.js"
import{M as N}from"./ModalTitled-DCrh-JGN.js"
function T(t,s,n){const e=t.slice()
return e[7]=s[n][0],e[8]=s[n][1],e[9]=s[n][2],e}function H(t){return{c:a,m:a,p:a,d:a}}function O(t){let s,n=o(t[1]),e=[]
for(let s=0;s<n.length;s+=1)e[s]=P(T(t,n,s))
return{c(){for(let t=0;t<e.length;t+=1)e[t].c()
s=d()},m(t,n){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,n)
u(t,s,n)},p(t,a){if(2&a){let l
for(n=o(t[1]),l=0;l<n.length;l+=1){const o=T(t,n,l)
e[l]?e[l].p(o,a):(e[l]=P(o),e[l].c(),e[l].m(s.parentNode,s))}for(;l<e.length;l+=1)e[l].d(1)
e.length=n.length}},d(t){t&&l(s),h(e,t)}}}function P(t){let s,n,e,a,o,h,d,g,$,x,v,k=t[8]+"",y=t[9]+""
return{c(){s=m("br"),n=b(),e=m("span"),a=m("a"),o=p(k),d=p("\n          says:"),g=b(),$=m("q"),x=p(y),v=b(),i(a,"href",h=""+(c+t[7])),i(a,"class","svelte-14ozmrh")},m(t,l){u(t,s,l),u(t,n,l),u(t,e,l),f(e,a),f(a,o),f(e,d),u(t,g,l),u(t,$,l),f($,x),f($,v)},p(t,s){2&s&&k!==(k=t[8]+"")&&r(o,k),2&s&&h!==(h=""+(c+t[7]))&&i(a,"href",h),2&s&&y!==(y=t[9]+"")&&r(x,y)},d(t){t&&(l(s),l(n),l(e),l(g),l($))}}}function Q(t){return{c:a,m:a,p:a,d:a}}function R(t){let s,n,e,a,o,r,c={ctx:t,current:null,token:null,hasCatch:!1,pending:Q,then:O,catch:H}
return B(t[3](),c),{c(){s=m("div"),n=m("button"),n.textContent="Clear",e=b(),a=m("div"),c.block.c(),i(n,"type","button"),i(s,"class","top svelte-14ozmrh"),i(a,"class","textContainer svelte-14ozmrh")},m(l,i){u(l,s,i),f(s,n),u(l,e,i),u(l,a,i),c.block.m(a,c.anchor=null),c.mount=()=>a,c.anchor=null,o||(r=g(n,"click",t[4]),o=!0)},p(s,n){F(c,t=s,n)},d(t){t&&(l(s),l(e),l(a)),c.block.d(),c.token=null,c=null,o=!1,r()}}}function U(t){let s
return{c(){s=p("FS Box Log")},m(t,n){u(t,s,n)},d(t){t&&l(s)}}}function V(t){let s,n
return s=new N({props:{visible:t[0],$$slots:{title:[U],default:[R]},$$scope:{ctx:t}}}),s.$on("close",t[2]),{c(){y(s.$$.fragment)},m(t,e){k(s,t,e),n=!0},p(t,[n]){const e={}
1&n&&(e.visible=t[0]),4098&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){n||(v(s.$$.fragment,t),n=!0)},o(t){x(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function W(t,s,n){let{visible:e=!0}=s,a=[]
function o(t){const s=M({innerHTML:t}),n=_("a",s)
return[Number(j(n?.href,"player_id")),C(n),q(_("q",s))]}const l=([t,s,n])=>t&&w(s)&&w(n)
return t.$$set=t=>{"visible"in t&&n(0,e=t.visible)},[e,a,function(){S("FS Box Log","close"),n(0,e=!1)},async function(){const t=await L("fsh_fsboxcontent")??""
n(1,a=t.split("<br>").map(o).filter(l))},function(){z("fsh_fsboxcontent",""),S("FS Box Log","clear storage"),n(1,a=[])}]}class X extends s{constructor(t){super(),n(this,t,W,V,e,{visible:0})}}const Z={visible:!0}
let A=0
function D(){A=t(Z,A,X)}export{D as default}
//# sourceMappingURL=fsboxlog-B6PxFYQP.js.map
