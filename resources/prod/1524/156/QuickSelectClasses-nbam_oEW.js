import{bm as s,x as a,y as e,I as t,aF as i,D as l,aE as c,L as n,N as r,ak as d,B as o,P as v,Q as u,J as f,E as m,G as p,C as h,bP as g,bB as $,F as b,bO as y,d1 as S,d2 as _,d3 as k,H as w,aA as E,cs as P,i as T,d4 as A,f as C,h as j,aa as x,bi as H,c as I,aw as B,ay as F,bA as G,d5 as N}from"./calfSystem-79LsojAC.js"
import{c as Q}from"./createStyle-BdMrx8ah.js"
function D(a){return s(`[${a}]`)}var J=o('<div class="svelte-1divdfe">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-1divdfe" type="text"/></div> <div class="svelte-1divdfe"><!></div> <div class="svelte-1divdfe"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),L=o('<p style="color: red">Server Error</p>'),M=o('<p style="color: red"> </p>')
function O(s,o){a(o,!0)
let O=e(o,"wantsTagged",3,0),R=d(null),q=d(null),z=d(null)
function K(){return D(E("sendClasses"))??D(P.sendClasses)}t(R,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(z).items[s.id.split("-").at(-1)]],W=([,s])=>f(q)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(I(t,e)).filter(W).slice(0,function(){let s=parseInt(f(R),10)
return B(s)&&(s=x(f(z).items).length),"createsecure"===F.subcmd?Math.min(100,s):s}()).map(X).forEach(H)}function Z(s){const a=j(".selectable-item")
a.length&&(j('[class$="-create-selected"] div').forEach(H),Y(s,a))}function ss(s){o.dispatchSelect(s),Z(s)}function as(){o.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function is(s){f(z).items.fshHasST&&T(s,Q(x(f(z).items).filter(es).map(ts).join("\n")))}var ls=i(),cs=l(ls)
c(cs,async function(){const s=await A()
s?.items&&t(z,{items:C(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=i(),e=l(a),c=s=>{var a=J(),e=l(a),i=h(m(e))
g(i,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var c=h(i,2)
g(c,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(c,2),d=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
p(r,s=>{O()&&s(d)})
var E=h(r,2)
b(E,17,K,y,(s,a)=>{var e=G(()=>N(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
v(()=>u(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var P=h(E,2),T=h(e,2),A=m(T)
S(A,{get dispatchToggle(){return o.dispatchToggle},get inSt(){return f(q)},set inSt(s){t(q,s,!0)}}),_(T,s=>is?.(s))
var C=h(T,2),j=m(C)
k(j,()=>({"--button-color":"blue"})),g(j.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),w(P,()=>f(R),s=>t(R,s)),n(s,a)},r=s=>{var a=L()
n(s,a)}
p(e,s=>{f(z)?.items?s(c):s(r,!1)}),n(s,a)},(s,a)=>{var e=M(),t=m(e)
v(()=>u(t,f(a).message)),n(s,e)}),n(s,ls),r()}export{O as Q}
//# sourceMappingURL=QuickSelectClasses-nbam_oEW.js.map
