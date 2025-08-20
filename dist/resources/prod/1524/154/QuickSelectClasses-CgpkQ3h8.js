import{bl as s,x as a,y as e,H as t,aE as l,C as i,aD as c,K as n,L as r,aj as d,A as o,O as v,P as u,I as f,D as m,F as p,B as h,bO as g,bA as $,E as b,bN as y,d7 as S,d8 as _,d9 as k,G as j,az as w,cr as E,i as T,da as x,f as A,h as C,a9 as P,bh as H,c as I,av as z,ax as D,bz as G,db as N}from"./calfSystem-KFszEm2S.js"
import{c as O}from"./createStyle-DZTKavCB.js"
function B(a){return s(`[${a}]`)}var F=o('<div class="svelte-1divdfe">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-1divdfe" type="text"/></div> <div class="svelte-1divdfe"><!></div> <div class="svelte-1divdfe"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),K=o('<p style="color: red">Server Error</p>'),L=o('<p style="color: red"> </p>')
function M(s,o){a(o,!0)
let M=e(o,"wantsTagged",3,0),Q=d(null),R=d(null),q=d(null)
function J(){return B(w("sendClasses"))??B(E.sendClasses)}t(Q,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(q).items[s.id.split("-").at(-1)]],W=([,s])=>f(R)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(I(t,e)).filter(W).slice(0,function(){let s=parseInt(f(Q),10)
return z(s)&&(s=P(f(q).items).length),"createsecure"===D.subcmd?Math.min(100,s):s}()).map(X).forEach(H)}function Z(s){const a=C(".selectable-item")
a.length&&(C('[class$="-create-selected"] div').forEach(H),Y(s,a))}function ss(s){o.dispatchSelect(s),Z(s)}function as(){o.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ls(s){f(q).items.fshHasST&&T(s,O(P(f(q).items).filter(es).map(ts).join("\n")))}var is=l(),cs=i(is)
c(cs,async function(){const s=await x()
s?.items&&t(q,{items:A(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=l(),e=i(a),c=s=>{var a=F(),e=i(a),l=h(m(e))
g(l,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var c=h(l,2)
g(c,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(c,2),d=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
p(r,s=>{M()&&s(d)})
var w=h(r,2)
b(w,17,J,y,(s,a)=>{var e=G(()=>N(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
v(()=>u(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var E=h(w,2),T=h(e,2),x=m(T)
S(x,{get dispatchToggle(){return o.dispatchToggle},get inSt(){return f(R)},set inSt(s){t(R,s,!0)}}),_(T,s=>ls?.(s))
var A=h(T,2),C=m(A)
k(C,()=>({"--button-color":"blue"})),g(C.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),j(E,()=>f(Q),s=>t(Q,s)),n(s,a)},r=s=>{var a=K()
n(s,a)}
p(e,s=>{f(q)?.items?s(c):s(r,!1)}),n(s,a)},(s,a)=>{var e=L(),t=m(e)
v(()=>u(t,f(a).message)),n(s,e)}),n(s,is),r()}export{M as Q}
//# sourceMappingURL=QuickSelectClasses-CgpkQ3h8.js.map
