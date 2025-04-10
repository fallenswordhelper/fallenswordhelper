import{bb as s,d4 as a,j as e,R as t,bE as i,W as l,at as n,au as c,as as r,a3 as d,a4 as o,S as u,X as v,a7 as f,a0 as m,a8 as p,V as h,Z as g,Y as $,bF as b,bq as y,_,d5 as S,d6 as k,d7 as w,a2 as T,ao as H,cl as j,i as E,n as C,H as P,b7 as x,e as A,ak as I,am as R,bH as q}from"./calfSystem-BGOTz8de.js"
import{c as F}from"./createStyle-dPu6vqqt.js"
function G(a){return s(`[${a}]`)}async function M(){const s=await a()
return s?.items?{items:{...e((t=s).items.map((s=>[s.inv_id,s]))),...t.items.filter((s=>s.is_in_st)).length&&{fshHasST:!0}}}:s
var t}var N=v('<div class="svelte-1divdfe">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-1divdfe" type="text"></div> <div class="svelte-1divdfe"><!></div> <div class="svelte-1divdfe"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),Q=v('<p style="color: red">Server Error</p>'),V=v('<p style="color: red"> </p>')
function W(s,a){t(a,!0)
let e=i(a,"wantsTagged",3,0),v=u(null),W=u(null),X=u(null)
function Y(){return G(H("sendClasses"))??G(j.sendClasses)}l(v,"all")
const Z=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const z=s=>[s,h(X).items[s.id.split("-").at(-1)]],B=([,s])=>h(W)||!s.is_in_st,D=([s])=>s
function J(s,a){const e=Number(s),[,t]=Z.find((([s])=>s(e)))
a.map(z).filter(A(t,e)).filter(B).slice(0,function(){let s=parseInt(h(v),10)
return I(s)&&(s=P(h(X).items).length),"createsecure"===R.subcmd?Math.min(100,s):s}()).map(D).forEach(x)}function K(s){const a=C(".selectable-item")
a.length&&(C('[class$="-create-selected"] div').forEach(x),J(s,a))}function L(s){a.dispatchSelect(s),K(s)}function O(){a.dispatchPerf(),K("-99")}const U=([,s])=>s.is_in_st,ss=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function as(s){h(X).items.fshHasST&&E(s,F(P(h(X).items).filter(U).map(ss).join("\n")))}var es=n(),ts=c(es)
r(ts,(async function(){l(X,await M(),!0)}),null,(s=>{var t=n(),i=c(t),r=s=>{var t=N(),i=c(t),n=$(g(i))
b(n,{onclick:()=>L("-1"),children:(s,a)=>{var e=y("All Items")
d(s,e)},$$slots:{default:!0}})
var r=$(n,2)
b(r,{onclick:()=>L("-2"),children:(s,a)=>{var e=y("All Resources")
d(s,e)},$$slots:{default:!0}})
var o=$(r,2),u=s=>{b(s,{onclick:()=>L("-3"),children:(s,a)=>{var e=y("Guild Tagged")
d(s,e)},$$slots:{default:!0}})}
m(o,(s=>{e()&&s(u)}))
var H=$(o,2)
_(H,17,Y,q,((s,a)=>{b(s,{onclick:()=>L(h(a)[1]),children:(s,e)=>{var t=y()
f((()=>p(t,h(a)[0]))),d(s,t)},$$slots:{default:!0}})}))
var j=$(H,2),E=$(i,2),C=g(E)
S(C,{get dispatchToggle(){return a.dispatchToggle},get inSt(){return h(W)},set inSt(s){l(W,s,!0)}}),k(E,(s=>as?.(s)))
var P=$(E,2),x=g(P)
w(x,(()=>({"--button-color":"blue"}))),b(x.lastChild,{onclick:O,children:(s,a)=>{var e=y("Perfect")
d(s,e)},$$slots:{default:!0}}),T(j,(()=>h(v)),(s=>l(v,s))),d(s,t)},o=s=>{var a=Q()
d(s,a)}
m(i,(s=>{h(X)?.items?s(r):s(o,!1)})),d(s,t)}),((s,a)=>{var e=V(),t=g(e)
f((()=>p(t,h(a).message))),d(s,e)})),d(s,es),o()}export{W as Q}
//# sourceMappingURL=QuickSelectClasses-IWIWLivP.js.map
