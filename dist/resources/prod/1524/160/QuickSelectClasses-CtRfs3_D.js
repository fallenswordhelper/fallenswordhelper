import{bp as s,y as a,z as e,J as t,aG as l,E as c,aF as i,N as n,O as r,ak as o,C as d,P as u,S as v,K as f,F as p,H as m,D as h,bR as g,bG as $,G as b,bD as y,bT as S,d5 as k,d6 as _,d7 as w,I as T,d8 as C,aA as E,cx as G,i as P,cv as j,f as x,h as A,ab as H,bl as I,c as D,aw as F,ay as N}from"./calfSystem-HVCiy-VV.js"
import{c as R}from"./createStyle-u6QR1rZp.js"
function z(a){return s(`[${a}]`)}var J=d('<div class="svelte-177lc40">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-177lc40" type="text"/></div> <div class="svelte-177lc40"><!></div> <div class="svelte-177lc40"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),K=d('<p style="color: red">Server Error</p>'),M=d('<p style="color: red"> </p>')
function O(s,d){a(d,!0)
let O=e(d,"wantsTagged",3,0),Q=o(null),q=o(null),B=o(null)
function L(){return z(E("sendClasses"))??z(G.sendClasses)}t(Q,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(B).items[s.id.split("-").at(-1)]],W=([,s])=>f(q)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(D(t,e)).filter(W).slice(0,function(){let s=parseInt(f(Q),10)
return F(s)&&(s=H(f(B).items).length),"createsecure"===N.subcmd?Math.min(100,s):s}()).map(X).forEach(I)}function Z(s){const a=A(".selectable-item")
a.length&&(A('[class$="-create-selected"] div').forEach(I),Y(s,a))}function ss(s){d.dispatchSelect(s),Z(s)}function as(){d.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ls(s){f(B).items.fshHasST&&P(s,R(H(f(B).items).filter(es).map(ts).join("\n")))}var cs=l(),is=c(cs)
i(is,async function(){const s=await j()
s?.items&&t(B,{items:x(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=l(),e=c(a),i=s=>{var a=J(),e=c(a),l=h(p(e))
g(l,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var i=h(l,2)
g(i,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(i,2),o=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
m(r,s=>{O()&&s(o)})
var E=h(r,2)
b(E,17,L,S,(s,a)=>{var e=y(()=>C(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
u(()=>v(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var G=h(E,2),P=h(e,2),j=p(P)
k(j,{get dispatchToggle(){return d.dispatchToggle},get inSt(){return f(q)},set inSt(s){t(q,s,!0)}}),_(P,s=>ls?.(s))
var x=h(P,2),A=p(x)
w(A,()=>({"--button-color":"blue"})),g(A.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),T(G,()=>f(Q),s=>t(Q,s)),n(s,a)},r=s=>{var a=K()
n(s,a)}
m(e,s=>{f(B)?.items?s(i):s(r,!1)}),n(s,a)},(s,a)=>{var e=M(),t=p(e)
u(()=>v(t,f(a).message)),n(s,e)}),n(s,cs),r()}export{O as Q}
//# sourceMappingURL=QuickSelectClasses-CtRfs3_D.js.map
