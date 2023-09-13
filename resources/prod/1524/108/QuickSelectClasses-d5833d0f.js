import{aO as t,S as n,L as e,M as s,aj as c,R as l,ba as o,bd as a,Z as r,be as i,af as u,bJ as f,i as $,cc as m,Y as d,bb as p,bc as g,cd as h,ce as b,N as v,a1 as k,bf as x,O as y,P as w,a$ as j,T as S,bg as _,V as T,W as I,cr as N,cf as C,bh as L,b0 as B,_ as P,j as A,C as E,ax as H,c as M,ad as O}from"./calfSystem-34913441.js"
import{h as R,u as Y}from"./await_block-d58cecee.js"
import{e as F}from"./each-6f7f5a14.js"
import{g as G}from"./getInventoryById-8022c7f6.js"
import{c as J}from"./createStyle-e8b661d2.js"
import{L as Q}from"./LinkButton-aabd28ac.js"
import{n as V}from"./numberIsNaN-a40c3bbb.js"
import{S as W}from"./SelectInST-0698713c.js"
function Z(n){return t(`[${n}]`)}function q(t,n,e){const s=t.slice()
return s[28]=n[e][0],s[29]=n[e][1],s}function z(t){return{c:d,m:d,p:d,i:d,o:d,d:d}}function D(t){let n,e,s=t[3]?.items&&K(t)
return{c(){s&&s.c(),n=c()},m(t,c){s&&s.m(t,c),l(t,n,c),e=!0},p(t,e){t[3]?.items?s?(s.p(t,e),8&e[0]&&o(s,1)):(s=K(t),s.c(),o(s,1),s.m(n.parentNode,n)):s&&(p(),a(s,1,1,(()=>{s=null})),g())},i(t){e||(o(s),e=!0)},o(t){a(s),e=!1},d(t){t&&r(n),s&&s.d(t)}}}function K(t){let n,e,s,c,i,u,f,$,m,d,A,E,H,M,O,R,Y,G,J,V
s=new Q({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),s.$on("click",t[9]),i=new Q({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),i.$on("click",t[10])
let Z=t[0]&&tt(t),z=F(t[5]()),D=[]
for(let n=0;n<z.length;n+=1)D[n]=st(q(t,z,n))
const K=t=>a(D[t],1,1,(()=>{D[t]=null}))
function nt(n){t[14](n)}let et={}
return void 0!==t[2]&&(et.inSt=t[2]),E=new W({props:et}),h.push((()=>b(E,"inSt",nt))),E.$on("toggle",t[15]),R=new Q({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),R.$on("click",t[7]),{c(){n=v("div"),e=k("Select:\n      "),x(s.$$.fragment),c=y(),x(i.$$.fragment),u=y(),Z&&Z.c(),f=y()
for(let t=0;t<D.length;t+=1)D[t].c()
$=k("\n      How many:"),m=v("input"),d=y(),A=v("div"),x(E.$$.fragment),M=y(),O=v("div"),Y=v("div"),x(R.$$.fragment),w(m,"class","custominput svelte-1divdfe"),w(m,"type","text"),w(n,"class","svelte-1divdfe"),w(A,"class","svelte-1divdfe"),j(Y,"display","contents"),j(Y,"--button-color","blue"),w(O,"class","svelte-1divdfe")},m(o,a){l(o,n,a),S(n,e),_(s,n,null),S(n,c),_(i,n,null),S(n,u),Z&&Z.m(n,null),S(n,f)
for(let t=0;t<D.length;t+=1)D[t]&&D[t].m(n,null)
S(n,$),S(n,m),T(m,t[1]),l(o,d,a),l(o,A,a),_(E,A,null),l(o,M,a),l(o,O,a),S(O,Y),_(R,Y,null),G=!0,J||(V=[I(m,"input",t[13]),N(t[8].call(null,A))],J=!0)},p(t,e){const c={}
2&e[1]&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)
const l={}
if(2&e[1]&&(l.$$scope={dirty:e,ctx:t}),i.$set(l),t[0]?Z?(Z.p(t,e),1&e[0]&&o(Z,1)):(Z=tt(t),Z.c(),o(Z,1),Z.m(n,f)):Z&&(p(),a(Z,1,1,(()=>{Z=null})),g()),96&e[0]){let s
for(z=F(t[5]()),s=0;s<z.length;s+=1){const c=q(t,z,s)
D[s]?(D[s].p(c,e),o(D[s],1)):(D[s]=st(c),D[s].c(),o(D[s],1),D[s].m(n,$))}for(p(),s=z.length;s<D.length;s+=1)K(s)
g()}2&e[0]&&m.value!==t[1]&&T(m,t[1])
const r={}
!H&&4&e[0]&&(H=!0,r.inSt=t[2],C((()=>H=!1))),E.$set(r)
const u={}
2&e[1]&&(u.$$scope={dirty:e,ctx:t}),R.$set(u)},i(t){if(!G){o(s.$$.fragment,t),o(i.$$.fragment,t),o(Z)
for(let t=0;t<z.length;t+=1)o(D[t])
o(E.$$.fragment,t),o(R.$$.fragment,t),G=!0}},o(t){a(s.$$.fragment,t),a(i.$$.fragment,t),a(Z),D=D.filter(Boolean)
for(let t=0;t<D.length;t+=1)a(D[t])
a(E.$$.fragment,t),a(R.$$.fragment,t),G=!1},d(t){t&&(r(n),r(d),r(A),r(M),r(O)),L(s),L(i),Z&&Z.d(),B(D,t),L(E),L(R),J=!1,P(V)}}}function U(t){let n
return{c(){n=k("All Items")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function X(t){let n
return{c(){n=k("All Resources")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function tt(t){let n,e
return n=new Q({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),n.$on("click",t[11]),{c(){x(n.$$.fragment)},m(t,s){_(n,t,s),e=!0},p(t,e){const s={}
2&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(o(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function nt(t){let n
return{c(){n=k("Guild Tagged")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function et(t){let n,e=t[28]+""
return{c(){n=k(e)},m(t,e){l(t,n,e)},p:d,d(t){t&&r(n)}}}function st(t){let n,e
return n=new Q({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),n.$on("click",(function(){return t[12](t[29])})),{c(){x(n.$$.fragment)},m(t,s){_(n,t,s),e=!0},p(e,s){t=e
const c={}
2&s[1]&&(c.$$scope={dirty:s,ctx:t}),n.$set(c)},i(t){e||(o(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){L(n,t)}}}function ct(t){let n
return{c(){n=k("Perfect")},m(t,e){l(t,n,e)},d(t){t&&r(n)}}}function lt(t){return{c:d,m:d,p:d,i:d,o:d,d:d}}function ot(t){let n,e,s={ctx:t,current:null,token:null,hasCatch:!1,pending:lt,then:D,catch:z,blocks:[,,,]}
return R(t[4](),s),{c(){n=c(),s.block.c()},m(t,c){l(t,n,c),s.block.m(t,s.anchor=c),s.mount=()=>n.parentNode,s.anchor=n,e=!0},p(n,e){Y(s,t=n,e)},i(t){e||(o(s.block),e=!0)},o(t){for(let t=0;t<3;t+=1){const n=s.blocks[t]
a(n)}e=!1},d(t){t&&r(n),s.block.d(t),s.token=null,s=null}}}function at(t,n,e){const s=i()
let{wantsTagged:c=0}=n,l=null,o=null,a=null
l="all"
const r=[[t=>-1===t,()=>!0],[t=>-2===t,(t,[,n])=>12===n.type],[t=>-3===t,(t,[,n])=>n.guild_tag>=0],[t=>-99===t,(t,[,n])=>"Perfect"===n?.craft],[()=>!0,(t,[,n])=>t===n.item_id]]
const d=t=>[t,a.items[t.id.split("-").at(-1)]],p=([,t])=>o||!t.is_in_st,g=([t])=>t
function h(t,n){const e=Number(t),[,s]=r.find((([t])=>t(e)))
n.map(d).filter(M(s,e)).filter(p).slice(0,function(){let t=parseInt(l,10)
return V(t)&&(t=E(a.items).length),"createsecure"===O.subcmd?Math.min(100,t):t}()).map(g).forEach(H)}function b(t){const n=A(".selectable-item")
n.length&&(A('[class$="-create-selected"] div').forEach(H),h(t,n))}function v(t){s("select",t),b(t)}const k=([,t])=>t.is_in_st,x=([,t])=>`div[id$="-highlight-${t.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
return t.$$set=t=>{"wantsTagged"in t&&e(0,c=t.wantsTagged)},[c,l,o,a,async function(){e(3,a=await G())},function(){return Z(u("sendClasses"))??Z(f.sendClasses)},v,function(){s("perf"),b("-99")},function(t){a.items.fshHasST&&$(t,J(E(a.items).filter(k).map(x).join("\n")))},()=>v("-1"),()=>v("-2"),()=>v("-3"),t=>v(t),function(){l=this.value,e(1,l)},function(t){o=t,e(2,o)},function(n){m.call(this,t,n)}]}class rt extends n{constructor(t){super(),e(this,t,at,ot,s,{wantsTagged:0},null,[-1,-1])}}export{rt as Q}
//# sourceMappingURL=QuickSelectClasses-d5833d0f.js.map
