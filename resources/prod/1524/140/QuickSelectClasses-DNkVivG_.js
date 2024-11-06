import{aU as t,f as n,S as e,L as s,M as c,am as l,T as o,be as a,bh as r,a1 as i,bi as u,ai as f,bU as $,i as m,ck as d,O as p,b5 as g,a0 as h,bf as b,bg as v,k,C as x,N as w,cl as y,cm as S,a4 as _,bj as T,P as j,Q as C,U as N,bk as I,W as E,X as H,cD as L,cn as P,bl as U,b6 as A,a2 as B,aO as D,c as G,ag as M}from"./calfSystem-BhNMi9iJ.js"
import{h as O,u as Q}from"./await_block-CDfjgofq.js"
import{c as R}from"./createStyle-Ddqbo82m.js"
import{i as W,S as X}from"./SelectInST-Cs3z0g3d.js"
import{L as q}from"./LinkButton-CI-OQDBm.js"
import{n as z}from"./numberIsNaN-CGkd1jiA.js"
function F(n){return t(`[${n}]`)}async function J(){const t=await W()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function K(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function V(t){let n
return{c(){n=p("p"),n.textContent=`${t[32].message}`,g(n,"color","red")},m(t,e){o(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function Y(t){let n,e,s,c
const u=[tt,Z],f=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=f[n]=u[n](t),{c(){e.c(),s=l()},m(t,e){f[n].m(t,e),o(t,s,e),c=!0},p(t,c){let l=n
n=$(t),n===l?f[n].p(t,c):(b(),r(f[l],1,1,(()=>{f[l]=null})),v(),e=f[n],e?e.p(t,c):(e=f[n]=u[n](t),e.c()),a(e,1),e.m(s.parentNode,s))},i(t){c||(a(e),c=!0)},o(t){r(e),c=!1},d(t){t&&i(s),f[n].d(t)}}}function Z(t){let n
return{c(){n=p("p"),n.textContent="Server Error",g(n,"color","red")},m(t,e){o(t,n,e)},p:h,i:h,o:h,d(t){t&&i(n)}}}function tt(t){let n,e,s,c,l,u,f,$,m,d,h,k,x,D,G,M,O,Q,R,W
s=new q({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),l=new q({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),l.$on("click",t[10])
let z=t[0]&&st(t),F=w(t[5]()),J=[]
for(let n=0;n<F.length;n+=1)J[n]=ot(K(t,F,n))
const V=t=>r(J[t],1,1,(()=>{J[t]=null}))
function Y(n){t[14](n)}let Z={}
return void 0!==t[2]&&(Z.inSt=t[2]),k=new X({props:Z}),y.push((()=>S(k,"inSt",Y))),k.$on("toggle",t[15]),M=new q({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),M.$on("click",t[7]),{c(){n=p("div"),e=_("Select:\n      "),T(s.$$.fragment),c=j(),T(l.$$.fragment),u=j(),z&&z.c(),f=j()
for(let t=0;t<J.length;t+=1)J[t].c()
$=_("\n      How many:"),m=p("input"),d=j(),h=p("div"),T(k.$$.fragment),D=j(),G=p("div"),O=p("div"),T(M.$$.fragment),C(m,"class","custominput svelte-1divdfe"),C(m,"type","text"),C(n,"class","svelte-1divdfe"),C(h,"class","svelte-1divdfe"),g(O,"display","contents"),g(O,"--button-color","blue"),C(G,"class","svelte-1divdfe")},m(a,r){o(a,n,r),N(n,e),I(s,n,null),N(n,c),I(l,n,null),N(n,u),z&&z.m(n,null),N(n,f)
for(let t=0;t<J.length;t+=1)J[t]&&J[t].m(n,null)
N(n,$),N(n,m),E(m,t[1]),o(a,d,r),o(a,h,r),I(k,h,null),o(a,D,r),o(a,G,r),N(G,O),I(M,O,null),Q=!0,R||(W=[H(m,"input",t[13]),L(t[8].call(null,h))],R=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const o={}
if(4&e[1]&&(o.$$scope={dirty:e,ctx:t}),l.$set(o),t[0]?z?(z.p(t,e),1&e[0]&&a(z,1)):(z=st(t),z.c(),a(z,1),z.m(n,f)):z&&(b(),r(z,1,1,(()=>{z=null})),v()),96&e[0]){let s
for(F=w(t[5]()),s=0;s<F.length;s+=1){const c=K(t,F,s)
J[s]?(J[s].p(c,e),a(J[s],1)):(J[s]=ot(c),J[s].c(),a(J[s],1),J[s].m(n,$))}for(b(),s=F.length;s<J.length;s+=1)V(s)
v()}2&e[0]&&m.value!==t[1]&&E(m,t[1])
const i={}
!x&&4&e[0]&&(x=!0,i.inSt=t[2],P((()=>x=!1))),k.$set(i)
const u={}
4&e[1]&&(u.$$scope={dirty:e,ctx:t}),M.$set(u)},i(t){if(!Q){a(s.$$.fragment,t),a(l.$$.fragment,t),a(z)
for(let t=0;t<F.length;t+=1)a(J[t])
a(k.$$.fragment,t),a(M.$$.fragment,t),Q=!0}},o(t){r(s.$$.fragment,t),r(l.$$.fragment,t),r(z),J=J.filter(Boolean)
for(let t=0;t<J.length;t+=1)r(J[t])
r(k.$$.fragment,t),r(M.$$.fragment,t),Q=!1},d(t){t&&(i(n),i(d),i(h),i(D),i(G)),U(s),U(l),z&&z.d(),A(J,t),U(k),U(M),R=!1,B(W)}}}function nt(t){let n
return{c(){n=_("All Items")},m(t,e){o(t,n,e)},d(t){t&&i(n)}}}function et(t){let n
return{c(){n=_("All Resources")},m(t,e){o(t,n,e)},d(t){t&&i(n)}}}function st(t){let n,e
return n=new q({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){T(n.$$.fragment)},m(t,s){I(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function ct(t){let n
return{c(){n=_("Guild Tagged")},m(t,e){o(t,n,e)},d(t){t&&i(n)}}}function lt(t){let n,e=t[28]+""
return{c(){n=_(e)},m(t,e){o(t,n,e)},p:h,d(t){t&&i(n)}}}function ot(t){let n,e
return n=new q({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){T(n.$$.fragment)},m(t,s){I(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(a(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function at(t){let n
return{c(){n=_("Perfect")},m(t,e){o(t,n,e)},d(t){t&&i(n)}}}function rt(t){return{c:h,m:h,p:h,i:h,o:h,d:h}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:Y,catch:V,error:32,blocks:[,,,]}
return O(t[4](),s),{c(){n=l(),s.block.c()},m(t,c){o(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){Q(s,t=n,e)},i(t){e||(a(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
r(n)}e=!1},d(t){t&&i(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=u()
let{wantsTagged:c=0}=n,l=null,o=null,a=null
l="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n?.item_id]]
const i=t=>[t,a.items[t.id.split("-").at(-1)]],p=([,t])=>o||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(G(s,e)).filter(p).slice(0,function(){let t=parseInt(l,10)
return z(t)&&(t=x(a.items).length),"createsecure"===M.subcmd?Math.min(100,t):t}()).map(g).forEach(D)}function b(t){const n=k(".selectable-item")
n.length&&(k('[class$="-create-selected"] div').forEach(D),h(t,n))}function v(t){s("select",t),b(t)}const w=([,t])=>t.is_in_st,y=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,l,o,a,async function(){e(3,a=await J())},function(){return F(f("sendClasses"))??F($.sendClasses)},v,function(){s("perf"),b("-99")},function(t){a.items.fshHasST&&m(t,R(x(a.items).filter(w).map(y).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){l=this.value,e(1,l)},function(t){o=t,e(2,o)},function(n){d.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-DNkVivG_.js.map
