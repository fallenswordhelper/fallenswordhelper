import{bn as s,db as a,h as e,z as t,A as i,J as l,aG as n,E as c,aF as r,N as d,O as o,al as v,C as u,Q as f,R as m,K as p,F as h,H as g,D as b,bQ as $,bC as y,G as _,bP as S,dc as k,dd as w,de as T,I as C,aB as j,cv as E,i as H,k as P,ab as x,bj as A,c as G,ax as I,az as Q,bB as z,df as B}from"./calfSystem-C1X5YxJZ.js"
import{c as F}from"./createStyle-B0zF0e_c.js"
function N(a){return s(`[${a}]`)}async function R(){const s=await a()
return s?.items?{items:{...e((t=s).items.map((s=>[s.inv_id,s]))),...t.items.filter((s=>s.is_in_st)).length&&{fshHasST:!0}}}:s
var t}var D=u('<div class="svelte-1divdfe">Select: <!> <!> <!> <!> How many:<input class="custominput svelte-1divdfe" type="text"/></div> <div class="svelte-1divdfe"><!></div> <div class="svelte-1divdfe"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>',1),J=u('<p style="color: red">Server Error</p>'),K=u('<p style="color: red"> </p>')
function M(s,a){t(a,!0)
let e=i(a,"wantsTagged",3,0),u=v(null),M=v(null),O=v(null)
function q(){return N(j("sendClasses"))??N(E.sendClasses)}l(u,"all")
const L=[[s=>-1===s,()=>!0],[s=>-2===s,(s,[,a])=>12===a.type],[s=>-3===s,(s,[,a])=>a.guild_tag>=0],[s=>-99===s,(s,[,a])=>"Perfect"===a?.craft],[()=>!0,(s,[,a])=>s===a?.item_id]]
const U=s=>[s,p(O).items[s.id.split("-").at(-1)]],V=([,s])=>p(M)||!s.is_in_st,W=([s])=>s
function X(s,a){const e=Number(s),[,t]=L.find((([s])=>s(e)))
a.map(U).filter(G(t,e)).filter(V).slice(0,function(){let s=parseInt(p(u),10)
return I(s)&&(s=x(p(O).items).length),"createsecure"===Q.subcmd?Math.min(100,s):s}()).map(W).forEach(A)}function Y(s){const a=P(".selectable-item")
a.length&&(P('[class$="-create-selected"] div').forEach(A),X(s,a))}function Z(s){a.dispatchSelect(s),Y(s)}function ss(){a.dispatchPerf(),Y("-99")}const as=([,s])=>s.is_in_st,es=([,s])=>`div[id$="-highlight-${s.inv_id}"]:not([class$="-create-selected"]) {\n    background-color: rgba(255, 0, 0, 0.3);\n  }`
function ts(s){p(O).items.fshHasST&&H(s,F(x(p(O).items).filter(as).map(es).join("\n")))}var is=n(),ls=c(is)
r(ls,(async function(){l(O,await R(),!0)}),null,(s=>{var t=n(),i=c(t),r=s=>{var t=D(),i=c(t),n=b(h(i))
$(n,{onclick:()=>Z("-1"),children:(s,a)=>{var e=y("All Items")
d(s,e)},$$slots:{default:!0}})
var r=b(n,2)
$(r,{onclick:()=>Z("-2"),children:(s,a)=>{var e=y("All Resources")
d(s,e)},$$slots:{default:!0}})
var o=b(r,2),v=s=>{$(s,{onclick:()=>Z("-3"),children:(s,a)=>{var e=y("Guild Tagged")
d(s,e)},$$slots:{default:!0}})}
g(o,(s=>{e()&&s(v)}))
var j=b(o,2)
_(j,17,q,S,((s,a)=>{var e=z((()=>B(p(a),2)))
$(s,{onclick:()=>Z(p(e)[1]),children:(s,a)=>{var t=y()
f((()=>m(t,p(e)[0]))),d(s,t)},$$slots:{default:!0}})}))
var E=b(j,2),H=b(i,2),P=h(H)
k(P,{get dispatchToggle(){return a.dispatchToggle},get inSt(){return p(M)},set inSt(s){l(M,s,!0)}}),w(H,(s=>ts?.(s)))
var x=b(H,2),A=h(x)
T(A,(()=>({"--button-color":"blue"}))),$(A.lastChild,{onclick:ss,children:(s,a)=>{var e=y("Perfect")
d(s,e)},$$slots:{default:!0}}),C(E,(()=>p(u)),(s=>l(u,s))),d(s,t)},o=s=>{var a=J()
d(s,a)}
g(i,(s=>{p(O)?.items?s(r):s(o,!1)})),d(s,t)}),((s,a)=>{var e=K(),t=h(e)
f((()=>m(t,p(a).message))),d(s,e)})),d(s,is),o()}export{M as Q}
//# sourceMappingURL=QuickSelectClasses-vLWck6eU.js.map
