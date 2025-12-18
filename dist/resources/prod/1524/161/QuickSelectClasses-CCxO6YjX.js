import{bq as s,y as a,z as e,J as t,aG as l,E as c,aF as i,N as n,O as r,ak as o,C as d,Q as u,R as v,K as f,F as m,H as p,D as h,bP as g,bQ as $,G as b,bO as y,d5 as S,d6 as _,d7 as k,I as w,aA as T,cw as C,i as E,cu as P,f as j,h as A,ab as G,bm as H,c as I,aw as Q,ay as x,cp as F,d8 as N}from"./calfSystem-Cs6CSxoU.js"
import{c as O}from"./createStyle-SGEMbHV8.js"
function R(a){return s(`[${a}]`)}var q=d('<div class="svelte-177lc40">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-177lc40" type="text"/></div> <div class="svelte-177lc40"><!></div> <div class="svelte-177lc40"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),z=d('<p style="color: red">Server Error</p>'),D=d('<p style="color: red"> </p>')
function J(s,d){a(d,!0)
let J=e(d,"wantsTagged",3,0),K=o(null),M=o(null),B=o(null)
function L(){return R(T("sendClasses"))??R(C.sendClasses)}t(K,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(B).items[s.id.split("-").at(-1)]],W=([,s])=>f(M)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(I(t,e)).filter(W).slice(0,function(){let s=parseInt(f(K),10)
return Q(s)&&(s=G(f(B).items).length),"createsecure"===x.subcmd?Math.min(100,s):s}()).map(X).forEach(H)}function Z(s){const a=A(".selectable-item")
a.length&&(A('[class$="-create-selected"] div').forEach(H),Y(s,a))}function ss(s){d.dispatchSelect(s),Z(s)}function as(){d.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ls(s){f(B).items.fshHasST&&E(s,O(G(f(B).items).filter(es).map(ts).join("\n")))}var cs=l(),is=c(cs)
i(is,async function(){const s=await P()
s?.items&&t(B,{items:j(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=l(),e=c(a),i=s=>{var a=q(),e=c(a),l=h(m(e))
g(l,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var i=h(l,2)
g(i,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(i,2),o=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
p(r,s=>{J()&&s(o)})
var T=h(r,2)
b(T,17,L,y,(s,a)=>{var e=F(()=>N(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
u(()=>v(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var C=h(T,2),E=h(e,2),P=m(E)
S(P,{get dispatchToggle(){return d.dispatchToggle},get inSt(){return f(M)},set inSt(s){t(M,s,!0)}}),_(E,s=>ls?.(s))
var j=h(E,2),A=m(j)
k(A,()=>({"--button-color":"blue"})),g(A.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),w(C,()=>f(K),s=>t(K,s)),n(s,a)},r=s=>{var a=z()
n(s,a)}
p(e,s=>{f(B)?.items?s(i):s(r,!1)}),n(s,a)},(s,a)=>{var e=D(),t=m(e)
u(()=>v(t,f(a).message)),n(s,e)}),n(s,cs),r()}export{J as Q}
//# sourceMappingURL=QuickSelectClasses-CCxO6YjX.js.map
