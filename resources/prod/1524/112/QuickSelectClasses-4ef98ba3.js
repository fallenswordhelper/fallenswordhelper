import{aL as t,f as n,S as e,J as s,K as c,ah as o,P as a,b5 as l,b8 as r,X as i,b9 as u,ad as f,bG as $,i as m,c8 as d,L as p,aY as g,W as h,b6 as b,b7 as v,j as k,C as x,c9 as w,ca as y,_ as S,ba as _,M as j,N as T,Q as C,bb as N,T as L,U as E,cp as I,cb as H,bc as P,aZ as Y,Y as A,av as B,c as G,ab as M}from"./calfSystem-4830a18d.js"
import{h as Q,u as J}from"./await_block-31b017e2.js"
import{e as K}from"./each-1f09c43f.js"
import{c as R}from"./createStyle-79b7cdab.js"
import{i as U,S as W}from"./SelectInST-8c6a2089.js"
import{L as X}from"./LinkButton-59368dc4.js"
import{n as Z}from"./numberIsNaN-a40c3bbb.js"
function q(n){return t(`[${n}]`)}async function z(){const t=await U()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function D(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function F(t){let n
return{c(){n=p("p"),n.textContent=`${t[32].message}`,g(n,"color","red")},m(t,e){a(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function O(t){let n,e,s,c
const u=[tt,V],f=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=f[n]=u[n](t),{c(){e.c(),s=o()},m(t,e){f[n].m(t,e),a(t,s,e),c=!0},p(t,c){let o=n
n=$(t),n===o?f[n].p(t,c):(b(),r(f[o],1,1,(()=>{f[o]=null})),v(),e=f[n],e?e.p(t,c):(e=f[n]=u[n](t),e.c()),l(e,1),e.m(s.parentNode,s))},i(t){c||(l(e),c=!0)},o(t){r(e),c=!1},d(t){t&&i(s),f[n].d(t)}}}function V(t){let n
return{c(){n=p("p"),n.textContent="Server Error",g(n,"color","red")},m(t,e){a(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function tt(t){let n,e,s,c,o,u,f,$,m,d,h,k,x,B,G,M,Q,J,R,U
s=new X({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),o=new X({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),o.$on("click",t[10])
let Z=t[0]&&st(t),q=K(t[5]()),z=[]
for(let n=0;n<q.length;n+=1)z[n]=at(D(t,q,n))
const F=t=>r(z[t],1,1,(()=>{z[t]=null}))
function O(n){t[14](n)}let V={}
return void 0!==t[2]&&(V.inSt=t[2]),k=new W({props:V}),w.push((()=>y(k,"inSt",O))),k.$on("toggle",t[15]),M=new X({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),M.$on("click",t[7]),{c(){n=p("div"),e=S("Select:\n      "),_(s.$$.fragment),c=j(),_(o.$$.fragment),u=j(),Z&&Z.c(),f=j()
for(let t=0;t<z.length;t+=1)z[t].c()
$=S("\n      How many:"),m=p("input"),d=j(),h=p("div"),_(k.$$.fragment),B=j(),G=p("div"),Q=p("div"),_(M.$$.fragment),T(m,"class","custominput svelte-1divdfe"),T(m,"type","text"),T(n,"class","svelte-1divdfe"),T(h,"class","svelte-1divdfe"),g(Q,"display","contents"),g(Q,"--button-color","blue"),T(G,"class","svelte-1divdfe")},m(l,r){a(l,n,r),C(n,e),N(s,n,null),C(n,c),N(o,n,null),C(n,u),Z&&Z.m(n,null),C(n,f)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(n,null)
C(n,$),C(n,m),L(m,t[1]),a(l,d,r),a(l,h,r),N(k,h,null),a(l,B,r),a(l,G,r),C(G,Q),N(M,Q,null),J=!0,R||(U=[E(m,"input",t[13]),I(t[8].call(null,h))],R=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const a={}
if(4&e[1]&&(a.$$scope={dirty:e,ctx:t}),o.$set(a),t[0]?Z?(Z.p(t,e),1&e[0]&&l(Z,1)):(Z=st(t),Z.c(),l(Z,1),Z.m(n,f)):Z&&(b(),r(Z,1,1,(()=>{Z=null})),v()),96&e[0]){let s
for(q=K(t[5]()),s=0;s<q.length;s+=1){const c=D(t,q,s)
z[s]?(z[s].p(c,e),l(z[s],1)):(z[s]=at(c),z[s].c(),l(z[s],1),z[s].m(n,$))}for(b(),s=q.length;s<z.length;s+=1)F(s)
v()}2&e[0]&&m.value!==t[1]&&L(m,t[1])
const i={}
!x&&4&e[0]&&(x=!0,i.inSt=t[2],H((()=>x=!1))),k.$set(i)
const u={}
4&e[1]&&(u.$$scope={dirty:e,ctx:t}),M.$set(u)},i(t){if(!J){l(s.$$.fragment,t),l(o.$$.fragment,t),l(Z)
for(let t=0;t<q.length;t+=1)l(z[t])
l(k.$$.fragment,t),l(M.$$.fragment,t),J=!0}},o(t){r(s.$$.fragment,t),r(o.$$.fragment,t),r(Z),z=z.filter(Boolean)
for(let t=0;t<z.length;t+=1)r(z[t])
r(k.$$.fragment,t),r(M.$$.fragment,t),J=!1},d(t){t&&(i(n),i(d),i(h),i(B),i(G)),P(s),P(o),Z&&Z.d(),Y(z,t),P(k),P(M),R=!1,A(U)}}}function nt(t){let n
return{c(){n=S("All Items")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function et(t){let n
return{c(){n=S("All Resources")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function st(t){let n,e
return n=new X({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){_(n.$$.fragment)},m(t,s){N(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function ct(t){let n
return{c(){n=S("Guild Tagged")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function ot(t){let n,e=t[28]+""
return{c(){n=S(e)},m(t,e){a(t,n,e)},p:h,d(t){t&&i(n)}}}function at(t){let n,e
return n=new X({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){_(n.$$.fragment)},m(t,s){N(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function lt(t){let n
return{c(){n=S("Perfect")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function rt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:O,catch:F,error:32,blocks:[,,,]}
return Q(t[4](),s),{c(){n=o(),s.block.c()},m(t,c){a(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){J(s,t=n,e)},i(t){e||(l(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
r(n)}e=!1},d(t){t&&i(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=u()
let{wantsTagged:c=0}=n,o=null,a=null,l=null
o="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n.item_id]]
const i=t=>[t,l.items[t.id.split("-").at(-1)]],p=([,t])=>a||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(G(s,e)).filter(p).slice(0,function(){let t=parseInt(o,10)
return Z(t)&&(t=x(l.items).length),"createsecure"===M.subcmd?Math.min(100,t):t}()).map(g).forEach(B)}function b(t){const n=k(".selectable-item")
n.length&&(k('[class$="-create-selected"] div').forEach(B),h(t,n))}function v(t){s("select",t),b(t)}const w=([,t])=>t.is_in_st,y=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,o,a,l,async function(){e(3,l=await z())},function(){return q(f("sendClasses"))??q($.sendClasses)},v,function(){s("perf"),b("-99")},function(t){l.items.fshHasST&&m(t,R(x(l.items).filter(w).map(y).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){o=this.value,e(1,o)},function(t){a=t,e(2,a)},function(n){d.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-4ef98ba3.js.map
