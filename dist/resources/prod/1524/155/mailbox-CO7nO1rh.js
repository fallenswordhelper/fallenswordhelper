import{U as t,$ as a,_ as n,a0 as e,a1 as s,a2 as i,p as c,a3 as o,a4 as r,a5 as u,c as f,s as l,a6 as m,a7 as d,i as p,u as k,a8 as h,o as g,a9 as b,aa as v,d as T,ab as x,ac as y,g as I}from"./calfSystem-UyQ_FKFu.js"
import{c as L}from"./createInput-B13zWypd.js"
import{c as C}from"./createLabel-BjAqmNH0.js"
function M(a){return t({cmd:"tempinv",subcmd:"takeitems",item:a})}function Q(t){return e({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function j(t){return function(t){const a=t.filter(t=>0===t.r),n=t.filter(t=>0!==t.r)
return a.length>0?{r:a.map(t=>({id:t.temp_id})),s:!0}:n.length>0?{e:{message:n[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await n(t.map(Q)))}function q(t,a){s(a,`<li class="fshNbrList">${t}</li>`)}let E=""
function N(t,a){return!t||(function(t){return!t.s&&E!==t.e.message}(t)&&(E=t.e.message,q(t.e.message,a)),!t.s||void 0)}function S(t,a,n){const e=C({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${a}`})
return r(e,n),e}function w(t,a){const n=a.children[0],{tipped:e}=n.dataset,{itemId:s,invId:i}=m(d,e)
return s&&i?(t[s]?t[s].invIds.push(i):t[s]={invIds:[i],tipped:e.replace(/&extra=\d/,""),src:n.src},t):t}function B(t,a){const n=a[1],e=k(),s=k({innerHTML:`<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">`})
p(e,s)
const i=k({innerHTML:`<button class="fshBl fshBls" data-id="${a[0]}">Take All ${n.invIds.length}</button>`})
p(e,i),p(t,e)}function H(t){!function(t){const a=$(`#temp-inv-img-${t}`).qtip("api")
a&&a.destroy(!0)}(t.id)
const a=I(`temp-inv-${t.id}`)
a&&T("",a)}function _(t,a){N(a,t)||y(a.r)&&function(t,a){a.r.forEach(H),q(`${a.r.length.toString()} item(s) taken.`,t)}(t,a)}async function O(t,n){var e
_(t,await(e=n,a(M,j,e)))}function R(t,a,n){v("fshBls",n.target)&&function(t,a,n){l("mailbox","takeSimilar")
const e=n.dataset.id,{invIds:s}=t[e]
T(`taking all ${s.length} items`,n.parentNode),x(40,s).forEach(f(O,a))}(t,a,n.target)}function z(t,a,n){const e=k({className:"fshTakeGrid"})
!function(t,a){b(a).forEach(f(B,t))}(e,t),p(a,e),g(e,f(R,t,n))}function A(t){const a=k({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:n,takeResult:e}=function(){const t=k(),a=h()
return p(t,a),{takeContainer:t,takeResult:a}}()
z(t,a,e),p(a,k()),p(a,n),p(c(),a)}function F(t,a){l("mailbox","toggleQuickTake"),S("qtOn","Mailbox",a)
A(t.reduce(w,{}))}function G(){if(i()||!c())return
const t=o("a",c())
if(0===t.length)return
const a=c().lastElementChild
!function(t,a){const n=L({id:"fshQuickTake",type:"checkbox"})
r(n,a),u(n,"change",f(F,t,a))}(t,a),S("qtOff","Quick Take",a)}export{G as default}
//# sourceMappingURL=mailbox-CO7nO1rh.js.map
