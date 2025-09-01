import{bo as s,x as a,y as e,I as t,aG as l,D as i,aF as c,L as n,N as r,ak as d,B as o,P as v,Q as u,J as f,E as m,G as p,C as h,bR as g,bD as $,F as b,bQ as y,d6 as k,d7 as S,d8 as _,H as w,aA as C,cx as T,i as x,cv as E,f as P,h as j,aa as A,bk as G,c as H,aw as I,ay as Q,bC as D,d9 as F}from"./calfSystem-CQOGdqPv.js"
import{c as N}from"./createStyle--h4yDzB1.js"
function R(a){return s(`[${a}]`)}var B=o('<div class="svelte-1divdfe">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-1divdfe" type="text"/></div> <div class="svelte-1divdfe"><!></div> <div class="svelte-1divdfe"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),J=o('<p style="color: red">Server Error</p>'),L=o('<p style="color: red"> </p>')
function M(s,o){a(o,!0)
let M=e(o,"wantsTagged",3,0),q=d(null),z=d(null),K=d(null)
function O(){return R(C("sendClasses"))??R(T.sendClasses)}t(q,"all")
const U=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const V=s=>[s,f(K).items[s.id.split("-").at(-1)]],W=([,s])=>f(z)||!s.is_in_st,X=([s])=>s
function Y(s,a){const e=Number(s),[,t]=U.find(([s])=>s(e))
a.map(V).filter(H(t,e)).filter(W).slice(0,function(){let s=parseInt(f(q),10)
return I(s)&&(s=A(f(K).items).length),"createsecure"===Q.subcmd?Math.min(100,s):s}()).map(X).forEach(G)}function Z(s){const a=j(".selectable-item")
a.length&&(j('[class$="-create-selected"] div').forEach(G),Y(s,a))}function ss(s){o.dispatchSelect(s),Z(s)}function as(){o.dispatchPerf(),Z("-99")}const es=([,s])=>s.is_in_st,ts=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ls(s){f(K).items.fshHasST&&x(s,N(A(f(K).items).filter(es).map(ts).join("\n")))}var is=l(),cs=i(is)
c(cs,async function(){const s=await E()
s?.items&&t(K,{items:P(s?.items.map(s=>[s.inv_id,s]))},!0)},null,s=>{var a=l(),e=i(a),c=s=>{var a=B(),e=i(a),l=h(m(e))
g(l,{onclick:()=>ss("-1"),children:(s,a)=>{var e=$("All Items")
n(s,e)},$$slots:{default:!0}})
var c=h(l,2)
g(c,{onclick:()=>ss("-2"),children:(s,a)=>{var e=$("All Resources")
n(s,e)},$$slots:{default:!0}})
var r=h(c,2),d=s=>{g(s,{onclick:()=>ss("-3"),children:(s,a)=>{var e=$("Guild Tagged")
n(s,e)},$$slots:{default:!0}})}
p(r,s=>{M()&&s(d)})
var C=h(r,2)
b(C,17,O,y,(s,a)=>{var e=D(()=>F(f(a),2))
g(s,{onclick:()=>ss(f(e)[1]),children:(s,a)=>{var t=$()
v(()=>u(t,f(e)[0])),n(s,t)},$$slots:{default:!0}})})
var T=h(C,2),x=h(e,2),E=m(x)
k(E,{get dispatchToggle(){return o.dispatchToggle},get inSt(){return f(z)},set inSt(s){t(z,s,!0)}}),S(x,s=>ls?.(s))
var P=h(x,2),j=m(P)
_(j,()=>({"--button-color":"blue"})),g(j.lastChild,{onclick:as,children:(s,a)=>{var e=$("Perfect")
n(s,e)},$$slots:{default:!0}}),w(T,()=>f(q),s=>t(q,s)),n(s,a)},r=s=>{var a=J()
n(s,a)}
p(e,s=>{f(K)?.items?s(c):s(r,!1)}),n(s,a)},(s,a)=>{var e=L(),t=m(e)
v(()=>u(t,f(a).message)),n(s,e)}),n(s,is),r()}export{M as Q}
//# sourceMappingURL=QuickSelectClasses-DPlwdU3V.js.map
