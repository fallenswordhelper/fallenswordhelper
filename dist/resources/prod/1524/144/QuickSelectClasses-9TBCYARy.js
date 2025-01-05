import{ba as t,f as n,S as e,O as s,P as c,as as a,av as l,W as o,at as r,bA as i,bD as u,a4 as f,bE as $,ao as m,ck as d,i as p,cN as g,R as h,bo as b,a3 as v,bB as k,bC as x,k as w,E as y,Q as S,cO as _,cP as T,a7 as C,bF as j,T as E,U as H,X as N,bG as P,Z as A,_ as B,c_ as I,cQ as Q,bH as G,bp as L,a5 as O,b4 as R,c as Z,ak as D,am as F}from"./calfSystem-fMW-YMyF.js"
import{c as M}from"./createStyle-2f8g7MV4.js"
import{i as U,S as W}from"./SelectInST-CCsv6FPJ.js"
import{L as X}from"./LinkButton-9QqGD9_1.js"
function q(n){return t(`[${n}]`)}async function z(){const t=await U()
return t?.items?{items:{...n((e=t).items.map((t=>[t.inv_id,t]))),...e.items.filter((t=>t.is_in_st)).length&&{fshHasST:!0}}}:t
var e}function J(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function K(t){let n
return{c(){n=h("p"),n.textContent=`${t[32].message}`,b(n,"color","red")},m(t,e){o(t,n,e)},p:v,i:v,o:v,d(t){t&&f(n)}}}function V(t){let n,e,s,c
const a=[tt,Y],r=[]
function $(t,n){return t[3]?.items?0:1}return n=$(t),e=r[n]=a[n](t),{c(){e.c(),s=l()},m(t,e){r[n].m(t,e),o(t,s,e),c=!0},p(t,c){let l=n
n=$(t),n===l?r[n].p(t,c):(k(),u(r[l],1,1,(()=>{r[l]=null})),x(),e=r[n],e?e.p(t,c):(e=r[n]=a[n](t),e.c()),i(e,1),e.m(s.parentNode,s))},i(t){c||(i(e),c=!0)},o(t){u(e),c=!1},d(t){t&&f(s),r[n].d(t)}}}function Y(t){let n
return{c(){n=h("p"),n.textContent="Server Error",b(n,"color","red")},m(t,e){o(t,n,e)},p:v,i:v,o:v,d(t){t&&f(n)}}}function tt(t){let n,e,s,c,a,l,r,$,m,d,p,g,v,w,y,R,Z,D,F,M
s=new X({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s.$on("click",t[9]),a=new X({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),a.$on("click",t[10])
let U=t[0]&&st(t),q=S(t[5]()),z=[]
for(let n=0;n<q.length;n+=1)z[n]=lt(J(t,q,n))
const K=t=>u(z[t],1,1,(()=>{z[t]=null}))
function V(n){t[14](n)}let Y={}
return void 0!==t[2]&&(Y.inSt=t[2]),g=new W({props:Y}),_.push((()=>T(g,"inSt",V))),g.$on("toggle",t[15]),R=new X({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),R.$on("click",t[7]),{c(){n=h("div"),e=C("Select:\n      "),j(s.$$.fragment),c=E(),j(a.$$.fragment),l=E(),U&&U.c(),r=E()
for(let t=0;t<z.length;t+=1)z[t].c()
$=C("\n      How many:"),m=h("input"),d=E(),p=h("div"),j(g.$$.fragment),w=E(),y=h("div"),Z=h("div"),j(R.$$.fragment),H(m,"class","custominput svelte-1divdfe"),H(m,"type","text"),H(n,"class","svelte-1divdfe"),H(p,"class","svelte-1divdfe"),b(Z,"display","contents"),b(Z,"--button-color","blue"),H(y,"class","svelte-1divdfe")},m(i,u){o(i,n,u),N(n,e),P(s,n,null),N(n,c),P(a,n,null),N(n,l),U&&U.m(n,null),N(n,r)
for(let t=0;t<z.length;t+=1)z[t]&&z[t].m(n,null)
N(n,$),N(n,m),A(m,t[1]),o(i,d,u),o(i,p,u),P(g,p,null),o(i,w,u),o(i,y,u),N(y,Z),P(R,Z,null),D=!0,F||(M=[B(m,"input",t[13]),I(t[8].call(null,p))],F=!0)},p(t,e){const c={}
4&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const l={}
if(4&e[1]&&(l.$$scope={dirty:e,ctx:t}),a.$set(l),t[0]?U?(U.p(t,e),1&e[0]&&i(U,1)):(U=st(t),U.c(),i(U,1),U.m(n,r)):U&&(k(),u(U,1,1,(()=>{U=null})),x()),96&e[0]){let s
for(q=S(t[5]()),s=0;s<q.length;s+=1){const c=J(t,q,s)
z[s]?(z[s].p(c,e),i(z[s],1)):(z[s]=lt(c),z[s].c(),i(z[s],1),z[s].m(n,$))}for(k(),s=q.length;s<z.length;s+=1)K(s)
x()}2&e[0]&&m.value!==t[1]&&A(m,t[1])
const o={}
!v&&4&e[0]&&(v=!0,o.inSt=t[2],Q((()=>v=!1))),g.$set(o)
const f={}
4&e[1]&&(f.$$scope={dirty:e,ctx:t}),R.$set(f)},i(t){if(!D){i(s.$$.fragment,t),i(a.$$.fragment,t),i(U)
for(let t=0;t<q.length;t+=1)i(z[t])
i(g.$$.fragment,t),i(R.$$.fragment,t),D=!0}},o(t){u(s.$$.fragment,t),u(a.$$.fragment,t),u(U),z=z.filter(Boolean)
for(let t=0;t<z.length;t+=1)u(z[t])
u(g.$$.fragment,t),u(R.$$.fragment,t),D=!1},d(t){t&&(f(n),f(d),f(p),f(w),f(y)),G(s),G(a),U&&U.d(),L(z,t),G(g),G(R),F=!1,O(M)}}}function nt(t){let n
return{c(){n=C("All Items")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function et(t){let n
return{c(){n=C("All Resources")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function st(t){let n,e
return n=new X({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){j(n.$$.fragment)},m(t,s){P(n,t,s),e=!0},p(t,e){const s={}
4&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(i(n.$$.fragment,t),e=!0)},o(t){u(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ct(t){let n
return{c(){n=C("Guild Tagged")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function at(t){let n,e=t[28]+""
return{c(){n=C(e)},m(t,e){o(t,n,e)},p:v,d(t){t&&f(n)}}}function lt(t){let n,e
return n=new X({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){j(n.$$.fragment)},m(t,s){P(n,t,s),e=!0},p(e,s){t=e
const c={}
4&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(i(n.$$.fragment,t),e=!0)},o(t){u(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ot(t){let n
return{c(){n=C("Perfect")},m(t,e){o(t,n,e)},d(t){t&&f(n)}}}function rt(t){return{c:v,m:v,p:v,i:v,o:v,d:v}}function it(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!0,pending:rt,then:V,catch:K,error:32,blocks:[,,,]}
return a(t[4](),s),{c(){n=l(),s.block.c()},m(t,c){o(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){r(s,t=n,e)},i(t){e||(i(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
u(n)}e=!1},d(t){t&&f(n),s.block.d(t),s.token=null,s=null}}}function ut(t,n,e){const s=$()
let{wantsTagged:c=0}=n,a=null,l=null,o=null
a="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n?.item_id]]
const i=t=>[t,o.items[t.id.split("-").at(-1)]],u=([,t])=>l||!t.is_in_st,f=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(i).filter(Z(s,e)).filter(u).slice(0,function(){let t=parseInt(a,10)
return D(t)&&(t=y(o.items).length),"createsecure"===F.subcmd?Math.min(100,t):t}()).map(f).forEach(R)}function b(t){const n=w(".selectable-item")
n.length&&(w('[class$="-create-selected"] div').forEach(R),h(t,n))}function v(t){s("select",t),b(t)}const k=([,t])=>t.is_in_st,x=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,a,l,o,async function(){e(3,o=await z())},function(){return q(m("sendClasses"))??q(d.sendClasses)},v,function(){s("perf"),b("-99")},function(t){o.items.fshHasST&&p(t,M(y(o.items).filter(k).map(x).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){a=this.value,e(1,a)},function(t){l=t,e(2,l)},function(n){g.call(this,t,n)}]}class ft extends e{constructor(t){super(),s(this,t,ut,it,c,{wantsTagged:0},null,[-1,-1])}}export{ft as Q}
//# sourceMappingURL=QuickSelectClasses-9TBCYARy.js.map
