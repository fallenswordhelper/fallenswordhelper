import{aK as t,f as n,S as e,J as s,K as c,ah as o,P as a,b4 as l,b7 as r,X as i,b8 as u,ad as f,bF as $,i as m,c7 as d,L as p,aX as g,W as h,b5 as b,b6 as v,k,C as x,c8 as w,c9 as y,_ as S,b9 as _,M as T,N as j,Q as N,ba as C,T as E,U as I,co as H,ca as L,bb as P,aY as Y,Y as A,av as B,c as K,ab as M}from"./calfSystem-rn9Rc_nF.js"
import{h as Q,u as X}from"./await_block-WHQS3VDb.js"
import{e as F}from"./each-FVHw1i8T.js"
import{c as G}from"./createStyle-y4k9B6vH.js"
import{i as J,S as R}from"./SelectInST-qUpI-GYa.js"
import{L as U}from"./LinkButton-WQXidA0A.js"
import{n as W}from"./numberIsNaN--k2kVli9.js"
function q(n){return t(`[${n}]`)}async function z(){const t=await J()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function D(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function O(t){let n
return{c(){n=p("p"),n.textContent=`${t[32].message}`,g(n,"color","red")},m(t,e){a(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function V(t){let n,e,s,c
const u=[tt,Z],f=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=f[n]=u[n](t),{c(){e.c(),s=o()},m(t,e){f[n].m(t,e),a(t,s,e),c=!0},p(t,c){let o=n
n=$(t),n===o?f[n].p(t,c):(b(),r(f[o],1,1,(()=>{f[o]=null})),v(),e=f[n],e?e.p(t,c):(e=f[n]=u[n](t),e.c()),l(e,1),e.m(s.parentNode,s))},i(t){c||(l(e),c=!0)},o(t){r(e),c=!1},d(t){t&&i(s),f[n].d(t)}}}function Z(t){let n
return{c(){n=p("p"),n.textContent="Server Error",g(n,"color","red")},m(t,e){a(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function tt(t){let n,e,s,c,o,u,f,$,m,d,h,k,x,B,K,M,Q,X,G,J
s=new U({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),o=new U({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),o.$on("click",t[10])
let W=t[0]&&st(t),q=F(t[5]()),z=[]
for(let n=0;n<q.length;n+=1)z[n]=at(D(t,q,n))
const O=t=>r(z[t],1,1,(()=>{z[t]=null}))
function V(n){t[14](n)}let Z={}
return void 0!==t[2]&&(Z.inSt=t[2]),k=new R({props:Z}),w.push((()=>y(k,"inSt",V))),k.$on("toggle",t[15]),M=new U({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),M.$on("click",t[7]),{c(){n=p("div"),e=S("Select:\n      "),_(s.$$.fragment),c=T(),_(o.$$.fragment),u=T(),W&&W.c(),f=T()
for(let t=0;t<z.length;t+=1)z[t].c()
$=S("\n      How many:"),m=p("input"),d=T(),h=p("div"),_(k.$$.fragment),B=T(),K=p("div"),Q=p("div"),_(M.$$.fragment),j(m,"class","custominput svelte-1divdfe"),j(m,"type","text"),j(n,"class","svelte-1divdfe"),j(h,"class","svelte-1divdfe"),g(Q,"display","contents"),g(Q,"--button-color","blue"),j(K,"class","svelte-1divdfe")},m(l,r){a(l,n,r),N(n,e),C(s,n,null),N(n,c),C(o,n,null),N(n,u),W&&W.m(n,null),N(n,f)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(n,null)
N(n,$),N(n,m),E(m,t[1]),a(l,d,r),a(l,h,r),C(k,h,null),a(l,B,r),a(l,K,r),N(K,Q),C(M,Q,null),X=!0,G||(J=[I(m,"input",t[13]),H(t[8].call(null,h))],G=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const a={}
if(4&e[1]&&(a.$$scope={dirty:e,ctx:t}),o.$set(a),t[0]?W?(W.p(t,e),1&e[0]&&l(W,1)):(W=st(t),W.c(),l(W,1),W.m(n,f)):W&&(b(),r(W,1,1,(()=>{W=null})),v()),96&e[0]){let s
for(q=F(t[5]()),s=0;s<q.length;s+=1){const c=D(t,q,s)
z[s]?(z[s].p(c,e),l(z[s],1)):(z[s]=at(c),z[s].c(),l(z[s],1),z[s].m(n,$))}for(b(),s=q.length;s<z.length;s+=1)O(s)
v()}2&e[0]&&m.value!==t[1]&&E(m,t[1])
const i={}
!x&&4&e[0]&&(x=!0,i.inSt=t[2],L((()=>x=!1))),k.$set(i)
const u={}
4&e[1]&&(u.$$scope={dirty:e,ctx:t}),M.$set(u)},i(t){if(!X){l(s.$$.fragment,t),l(o.$$.fragment,t),l(W)
for(let t=0;t<q.length;t+=1)l(z[t])
l(k.$$.fragment,t),l(M.$$.fragment,t),X=!0}},o(t){r(s.$$.fragment,t),r(o.$$.fragment,t),r(W),z=z.filter(Boolean)
for(let t=0;t<z.length;t+=1)r(z[t])
r(k.$$.fragment,t),r(M.$$.fragment,t),X=!1},d(t){t&&(i(n),i(d),i(h),i(B),i(K)),P(s),P(o),W&&W.d(),Y(z,t),P(k),P(M),G=!1,A(J)}}}function nt(t){let n
return{c(){n=S("All Items")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function et(t){let n
return{c(){n=S("All Resources")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function st(t){let n,e
return n=new U({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){_(n.$$.fragment)},m(t,s){C(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function ct(t){let n
return{c(){n=S("Guild Tagged")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function ot(t){let n,e=t[28]+""
return{c(){n=S(e)},m(t,e){a(t,n,e)},p:h,d(t){t&&i(n)}}}function at(t){let n,e
return n=new U({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){_(n.$$.fragment)},m(t,s){C(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function lt(t){let n
return{c(){n=S("Perfect")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function rt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:V,catch:O,error:32,blocks:[,,,]}
return Q(t[4](),s),{c(){n=o(),s.block.c()},m(t,c){a(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){X(s,t=n,e)},i(t){e||(l(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
r(n)}e=!1},d(t){t&&i(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=u()
let{wantsTagged:c=0}=n,o=null,a=null,l=null
o="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n.item_id]]
const i=t=>[t,l.items[t.id.split("-").at(-1)]],p=([,t])=>a||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(K(s,e)).filter(p).slice(0,function(){let t=parseInt(o,10)
return W(t)&&(t=x(l.items).length),"createsecure"===M.subcmd?Math.min(100,t):t}()).map(g).forEach(B)}function b(t){const n=k(".selectable-item")
n.length&&(k('[class$="-create-selected"] div').forEach(B),h(t,n))}function v(t){s("select",t),b(t)}const w=([,t])=>t.is_in_st,y=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,o,a,l,async function(){e(3,l=await z())},function(){return q(f("sendClasses"))??q($.sendClasses)},v,function(){s("perf"),b("-99")},function(t){l.items.fshHasST&&m(t,G(x(l.items).filter(w).map(y).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){o=this.value,e(1,o)},function(t){a=t,e(2,a)},function(n){d.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-n5mmKYVN.js.map
