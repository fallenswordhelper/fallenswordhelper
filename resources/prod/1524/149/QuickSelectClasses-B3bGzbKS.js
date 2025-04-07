import{bb as s,d4 as a,j as e,R as t,bE as i,S as l,W as n,at as c,au as r,as as d,a3 as o,a4 as u,X as v,a7 as f,a0 as m,a8 as p,V as h,Z as g,Y as $,bF as b,bq as y,_,d5 as S,d6 as k,d7 as w,a2 as T,ao as H,cl as j,i as E,n as C,H as P,b7 as x,e as A,ak as I,am as R,bH as q}from"./calfSystem-BGW9cdWN.js"
import{c as F}from"./createStyle-Cr9lLj8G.js"
function G(a){return s(`[${a}]`)}async function M(){const s=await a()
return s?.items?{items:{...e((t=s).items.map((s=>[s.inv_id,s]))),...t.items.filter((s=>s.is_in_st)).length&&{fshHasST:!0}}}:s
var t}var N=v('<div class="svelte-1divdfe">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-1divdfe" type="text"></div> <div class="svelte-1divdfe"><!></div> <div class="svelte-1divdfe"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),Q=v('<p style="color: red">Server Error</p>'),V=v('<p style="color: red"> </p>')
function W(s,a){t(a,!0)
let e=i(a,"wantsTagged",3,0),v=l(null),W=l(null),X=l(null)
function Y(){return G(H("sendClasses"))??G(j.sendClasses)}n(v,"all")
const Z=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const z=s=>[s,h(X).items[s.id.split("-").at(-1)]],B=([,s])=>h(W)||!s.is_in_st,D=([s])=>s
function J(s,a){const e=Number(s),[,t]=Z.find((([s])=>s(e)))
a.map(z).filter(A(t,e)).filter(B).slice(0,function(){let s=parseInt(h(v),10)
return I(s)&&(s=P(h(X).items).length),"createsecure"===R.subcmd?Math.min(100,s):s}()).map(D).forEach(x)}function K(s){const a=C(".selectable-item")
a.length&&(C('[class$="-create-selected"] div').forEach(x),J(s,a))}function L(s){a.dispatchSelect(s),K(s)}function O(){a.dispatchPerf(),K("-99")}const U=([,s])=>s.is_in_st,ss=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function as(s){h(X).items.fshHasST&&E(s,F(P(h(X).items).filter(U).map(ss).join("\n")))}var es=c(),ts=r(es)
d(ts,(async function(){n(X,await M(),!0)}),null,(s=>{var t=c(),i=r(t),l=s=>{var t=N(),i=r(t),l=$(g(i))
b(l,{onclick:()=>L("-1"),children:(s,a)=>{var e=y("All Items")
o(s,e)},$$slots:{default:!0}})
var c=$(l,2)
b(c,{onclick:()=>L("-2"),children:(s,a)=>{var e=y("All Resources")
o(s,e)},$$slots:{default:!0}})
var d=$(c,2),u=s=>{b(s,{onclick:()=>L("-3"),children:(s,a)=>{var e=y("Guild Tagged")
o(s,e)},$$slots:{default:!0}})}
m(d,(s=>{e()&&s(u)}))
var H=$(d,2)
_(H,17,Y,q,((s,a)=>{b(s,{onclick:()=>L(h(a)[1]),children:(s,e)=>{var t=y()
f((()=>p(t,h(a)[0]))),o(s,t)},$$slots:{default:!0}})}))
var j=$(H,2),E=$(i,2),C=g(E)
S(C,{get dispatchToggle(){return a.dispatchToggle},get inSt(){return h(W)},set inSt(s){n(W,s,!0)}}),k(E,(s=>as?.(s)))
var P=$(E,2),x=g(P)
w(x,(()=>({"--button-color":"blue"}))),b(x.lastChild,{onclick:O,children:(s,a)=>{var e=y("Perfect")
o(s,e)},$$slots:{default:!0}}),T(j,(()=>h(v)),(s=>n(v,s))),o(s,t)},d=s=>{var a=Q()
o(s,a)}
m(i,(s=>{h(X)?.items?s(l):s(d,!1)})),o(s,t)}),((s,a)=>{var e=V(),t=g(e)
f((()=>p(t,h(a).message))),o(s,e)})),o(s,es),u()}export{W as Q}
//# sourceMappingURL=QuickSelectClasses-B3bGzbKS.js.map
