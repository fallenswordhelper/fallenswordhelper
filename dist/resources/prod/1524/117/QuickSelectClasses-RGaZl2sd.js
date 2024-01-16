import{aS as t,f as n,S as e,L as s,M as c,am as o,T as l,bc as a,bf as r,a0 as i,bg as u,ai as f,bN as $,i as m,cf as d,O as p,b3 as g,_ as h,bd as b,be as v,k,C as x,N as w,cg as S,ch as y,a3 as _,bh as T,P as j,Q as N,U as C,bi as I,W as E,X as A,cv as H,ci as L,bj as P,b4 as B,a1 as M,aA as Q,c as G,ag as O}from"./calfSystem-G1dN925O.js"
import{h as R,u as U}from"./await_block-nr-x0DeQ.js"
import{c as W}from"./createStyle-kdSx2xlE.js"
import{i as X,S as q}from"./SelectInST-hOEgPhwA.js"
import{L as z}from"./LinkButton-V4dDaBVi.js"
import{n as D}from"./numberIsNaN--k2kVli9.js"
function F(n){return t(`[${n}]`)}async function J(){const t=await X()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function K(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function V(t){let n
return{c(){n=p("p"),n.textContent=`${t[32].message}`,g(n,"color","red")},m(t,e){l(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function Y(t){let n,e,s,c
const u=[tt,Z],f=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=f[n]=u[n](t),{c(){e.c(),s=o()},m(t,e){f[n].m(t,e),l(t,s,e),c=!0},p(t,c){let o=n
n=$(t),n===o?f[n].p(t,c):(b(),r(f[o],1,1,(()=>{f[o]=null})),v(),e=f[n],e?e.p(t,c):(e=f[n]=u[n](t),e.c()),a(e,1),e.m(s.parentNode,s))},i(t){c||(a(e),c=!0)},o(t){r(e),c=!1},d(t){t&&i(s),f[n].d(t)}}}function Z(t){let n
return{c(){n=p("p"),n.textContent="Server Error",g(n,"color","red")},m(t,e){l(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function tt(t){let n,e,s,c,o,u,f,$,m,d,h,k,x,Q,G,O,R,U,W,X
s=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),o=new z({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),o.$on("click",t[10])
let D=t[0]&&st(t),F=w(t[5]()),J=[]
for(let n=0;n<F.length;n+=1)J[n]=lt(K(t,F,n))
const V=t=>r(J[t],1,1,(()=>{J[t]=null}))
function Y(n){t[14](n)}let Z={}
return void 0!==t[2]&&(Z.inSt=t[2]),k=new q({props:Z}),S.push((()=>y(k,"inSt",Y))),k.$on("toggle",t[15]),O=new z({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),O.$on("click",t[7]),{c(){n=p("div"),e=_("Select:\n      "),T(s.$$.fragment),c=j(),T(o.$$.fragment),u=j(),D&&D.c(),f=j()
for(let t=0;t<J.length;t+=1)J[t].c()
$=_("\n      How many:"),m=p("input"),d=j(),h=p("div"),T(k.$$.fragment),Q=j(),G=p("div"),R=p("div"),T(O.$$.fragment),N(m,"class","custominput svelte-1divdfe"),N(m,"type","text"),N(n,"class","svelte-1divdfe"),N(h,"class","svelte-1divdfe"),g(R,"display","contents"),g(R,"--button-color","blue"),N(G,"class","svelte-1divdfe")},m(a,r){l(a,n,r),C(n,e),I(s,n,null),C(n,c),I(o,n,null),C(n,u),D&&D.m(n,null),C(n,f)
for(let t=0;t<J.length;t+=1)J[t]&&J[t].m(n,null)
C(n,$),C(n,m),E(m,t[1]),l(a,d,r),l(a,h,r),I(k,h,null),l(a,Q,r),l(a,G,r),C(G,R),I(O,R,null),U=!0,W||(X=[A(m,"input",t[13]),H(t[8].call(null,h))],W=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const l={}
if(4&e[1]&&(l.$$scope={dirty:e,ctx:t}),o.$set(l),t[0]?D?(D.p(t,e),1&e[0]&&a(D,1)):(D=st(t),D.c(),a(D,1),D.m(n,f)):D&&(b(),r(D,1,1,(()=>{D=null})),v()),96&e[0]){let s
for(F=w(t[5]()),s=0;s<F.length;s+=1){const c=K(t,F,s)
J[s]?(J[s].p(c,e),a(J[s],1)):(J[s]=lt(c),J[s].c(),a(J[s],1),J[s].m(n,$))}for(b(),s=F.length;s<J.length;s+=1)V(s)
v()}2&e[0]&&m.value!==t[1]&&E(m,t[1])
const i={}
!x&&4&e[0]&&(x=!0,i.inSt=t[2],L((()=>x=!1))),k.$set(i)
const u={}
4&e[1]&&(u.$$scope={dirty:e,ctx:t}),O.$set(u)},i(t){if(!U){a(s.$$.fragment,t),a(o.$$.fragment,t),a(D)
for(let t=0;t<F.length;t+=1)a(J[t])
a(k.$$.fragment,t),a(O.$$.fragment,t),U=!0}},o(t){r(s.$$.fragment,t),r(o.$$.fragment,t),r(D),J=J.filter(Boolean)
for(let t=0;t<J.length;t+=1)r(J[t])
r(k.$$.fragment,t),r(O.$$.fragment,t),U=!1},d(t){t&&(i(n),i(d),i(h),i(Q),i(G)),P(s),P(o),D&&D.d(),B(J,t),P(k),P(O),W=!1,M(X)}}}function nt(t){let n
return{c(){n=_("All Items")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function et(t){let n
return{c(){n=_("All Resources")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function st(t){let n,e
return n=new z({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){T(n.$$.fragment)},m(t,s){I(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function ct(t){let n
return{c(){n=_("Guild Tagged")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function ot(t){let n,e=t[28]+""
return{c(){n=_(e)},m(t,e){l(t,n,e)},p:h,d(t){t&&i(n)}}}function lt(t){let n,e
return n=new z({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){T(n.$$.fragment)},m(t,s){I(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function at(t){let n
return{c(){n=_("Perfect")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function rt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:Y,catch:V,error:32,blocks:[,,,]}
return R(t[4](),s),{c(){n=o(),s.block.c()},m(t,c){l(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){U(s,t=n,e)},i(t){e||(a(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
r(n)}e=!1},d(t){t&&i(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=u()
let{wantsTagged:c=0}=n,o=null,l=null,a=null
o="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n.item_id]]
const i=t=>[t,a.items[t.id.split("-").at(-1)]],p=([,t])=>l||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(G(s,e)).filter(p).slice(0,function(){let t=parseInt(o,10)
return D(t)&&(t=x(a.items).length),"createsecure"===O.subcmd?Math.min(100,t):t}()).map(g).forEach(Q)}function b(t){const n=k(".selectable-item")
n.length&&(k('[class$="-create-selected"] div').forEach(Q),h(t,n))}function v(t){s("select",t),b(t)}const w=([,t])=>t.is_in_st,S=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,o,l,a,async function(){e(3,a=await J())},function(){return F(f("sendClasses"))??F($.sendClasses)},v,function(){s("perf"),b("-99")},function(t){a.items.fshHasST&&m(t,W(x(a.items).filter(w).map(S).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){o=this.value,e(1,o)},function(t){l=t,e(2,l)},function(n){d.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-RGaZl2sd.js.map
