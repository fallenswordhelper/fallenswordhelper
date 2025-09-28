import{bn as s,x as a,y as e,I as t,aF as l,D as c,aE as i,L as n,N as r,aj as o,B as d,P as u,Q as v,J as f,E as m,G as p,C as h,bQ as g,bC as $,F as b,bP as y,d5 as S,d6 as _,d7 as k,H as w,az as j,cw as C,i as E,cu as P,f as T,h as x,aa as H,bj as I,c as Q,av as A,ax as B,bB as F,d8 as G}from"./calfSystem-CIuUjh4H.js"
import{c as N}from"./createStyle-Co3Q_8M9.js"
function z(a){return s(`[${a}]`)}var D=d('<div class="svelte-177lc40">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-177lc40" type="text"/></div> <div class="svelte-177lc40"><!></div> <div class="svelte-177lc40"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),J=d('<p style="color: red">Server Error</p>'),L=d('<p style="color: red"> </p>')
function M(s,d){a(d,!0)
let M=e(d,"wantsTagged",3,0),R=o(null),q=o(null),K=o(null)
function O(){return z(j("sendClasses"))??z(C.sendClasses)}t(R,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(K).items[s.id.split("-").at(-1)]],W=([,s])=>f(q)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(Q(t,e)).filter(W).slice(0,function(){let s=parseInt(f(R),10)
return A(s)&&(s=H(f(K).items).length),"createsecure"===B.subcmd?Math.min(100,s):s}()).map(X).forEach(I)}function Z(s){const a=x(".selectable-item")
a.length&&(x('[class$="-create-selected"] div').forEach(I),Y(s,a))}function ss(s){d.dispatchSelect(s),Z(s)}function as(){d.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ls(s){f(K).items.fshHasST&&E(s,N(H(f(K).items).filter(es).map(ts).join("\n")))}var cs=l(),is=c(cs)
i(is,async function(){const s=await P()
s?.items&&t(K,{items:T(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=l(),e=c(a),i=s=>{var a=D(),e=c(a),l=h(m(e))
g(l,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var i=h(l,2)
g(i,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(i,2),o=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
p(r,s=>{M()&&s(o)})
var j=h(r,2)
b(j,17,O,y,(s,a)=>{var e=F(()=>G(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
u(()=>v(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var C=h(j,2),E=h(e,2),P=m(E)
S(P,{get dispatchToggle(){return d.dispatchToggle},get inSt(){return f(q)},set inSt(s){t(q,s,!0)}}),_(E,s=>ls?.(s))
var T=h(E,2),x=m(T)
k(x,()=>({"--button-color":"blue"})),g(x.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),w(C,()=>f(R),s=>t(R,s)),n(s,a)},r=s=>{var a=J()
n(s,a)}
p(e,s=>{f(K)?.items?s(i):s(r,!1)}),n(s,a)},(s,a)=>{var e=L(),t=m(e)
u(()=>v(t,f(a).message)),n(s,e)}),n(s,cs),r()}export{M as Q}
//# sourceMappingURL=QuickSelectClasses-Drh_jDiW.js.map
