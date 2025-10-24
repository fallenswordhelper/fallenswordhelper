import{bp as s,y as a,z as e,J as t,aG as l,E as c,aF as i,N as n,O as r,ak as o,C as d,Q as u,R as v,K as f,F as p,H as m,D as h,bS as g,bE as $,G as b,bR as y,d5 as S,d6 as k,d7 as _,I as w,aA as E,cx as T,i as C,cv as j,f as x,h as A,ab as G,bl as H,c as I,aw as P,ay as R,bD as D,d8 as F}from"./calfSystem-CIdPz3EO.js"
import{c as N}from"./createStyle-C-OOcRjs.js"
function Q(a){return s(`[${a}]`)}var z=d('<div class="svelte-177lc40">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-177lc40" type="text"/></div> <div class="svelte-177lc40"><!></div> <div class="svelte-177lc40"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),J=d('<p style="color: red">Server Error</p>'),K=d('<p style="color: red"> </p>')
function M(s,d){a(d,!0)
let M=e(d,"wantsTagged",3,0),O=o(null),q=o(null),B=o(null)
function L(){return Q(E("sendClasses"))??Q(T.sendClasses)}t(O,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(B).items[s.id.split("-").at(-1)]],W=([,s])=>f(q)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(I(t,e)).filter(W).slice(0,function(){let s=parseInt(f(O),10)
return P(s)&&(s=G(f(B).items).length),"createsecure"===R.subcmd?Math.min(100,s):s}()).map(X).forEach(H)}function Z(s){const a=A(".selectable-item")
a.length&&(A('[class$="-create-selected"] div').forEach(H),Y(s,a))}function ss(s){d.dispatchSelect(s),Z(s)}function as(){d.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ls(s){f(B).items.fshHasST&&C(s,N(G(f(B).items).filter(es).map(ts).join("\n")))}var cs=l(),is=c(cs)
i(is,async function(){const s=await j()
s?.items&&t(B,{items:x(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=l(),e=c(a),i=s=>{var a=z(),e=c(a),l=h(p(e))
g(l,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var i=h(l,2)
g(i,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(i,2),o=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
m(r,s=>{M()&&s(o)})
var E=h(r,2)
b(E,17,L,y,(s,a)=>{var e=D(()=>F(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
u(()=>v(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var T=h(E,2),C=h(e,2),j=p(C)
S(j,{get dispatchToggle(){return d.dispatchToggle},get inSt(){return f(q)},set inSt(s){t(q,s,!0)}}),k(C,s=>ls?.(s))
var x=h(C,2),A=p(x)
_(A,()=>({"--button-color":"blue"})),g(A.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),w(T,()=>f(O),s=>t(O,s)),n(s,a)},r=s=>{var a=J()
n(s,a)}
m(e,s=>{f(B)?.items?s(i):s(r,!1)}),n(s,a)},(s,a)=>{var e=K(),t=p(e)
u(()=>v(t,f(a).message)),n(s,e)}),n(s,cs),r()}export{M as Q}
//# sourceMappingURL=QuickSelectClasses-Bd3vUjbE.js.map
