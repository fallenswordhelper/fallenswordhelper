import{W as t,$ as a,a1 as n,a2 as e,a3 as s,a4 as i,p as c,a5 as r,a6 as o,a7 as u,c as f,s as m,a8 as l,a9 as d,i as p,w as k,aa as h,o as g,ab as b,ac as v,e as T,ad as x,ae as y,g as I}from"./calfSystem-C1X5YxJZ.js"
import{c as L}from"./createInput-LMpmIneO.js"
import{c as C}from"./createLabel-BN2NWsP1.js"
function M(a){return t({cmd:"tempinv",subcmd:"takeitems",item:a})}function Q(t){return e({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function j(t){return function(t){const a=t.filter((t=>0===t.r)),n=t.filter((t=>0!==t.r))
return a.length>0?{r:a.map((t=>({id:t.temp_id}))),s:!0}:n.length>0?{e:{message:n[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await n(t.map(Q)))}function q(t,a){s(a,`<li class="fshNbrList">${t}</li>`)}let w=""
function E(t,a){return!t||(function(t){return!t.s&&w!==t.e.message}(t)&&(w=t.e.message,q(t.e.message,a)),!t.s||void 0)}function N(t,a,n){const e=C({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${a}`})
return o(e,n),e}function S(t,a){const n=a.children[0],{tipped:e}=n.dataset,{itemId:s,invId:i}=l(d,e)
return s&&i?(t[s]?t[s].invIds.push(i):t[s]={invIds:[i],tipped:e.replace(/&extra=\d/,""),src:n.src},t):t}function B(t,a){const n=a[1],e=k(),s=k({innerHTML:`<img src="${n.src}" class="tip-dynamic" data-tipped="${n.tipped}">`})
p(e,s)
const i=k({innerHTML:`<button class="fshBl fshBls" data-id="${a[0]}">Take All ${n.invIds.length}</button>`})
p(e,i),p(t,e)}function H(t){!function(t){const a=$(`#temp-inv-img-${t}`).qtip("api")
a&&a.destroy(!0)}(t.id)
const a=I(`temp-inv-${t.id}`)
a&&T("",a)}function O(t,a){E(a,t)||y(a.r)&&function(t,a){a.r.forEach(H),q(`${a.r.length.toString()} item(s) taken.`,t)}(t,a)}async function R(t,n){var e
O(t,await(e=n,a(M,j,e)))}function _(t,a,n){v("fshBls",n.target)&&function(t,a,n){m("mailbox","takeSimilar")
const e=n.dataset.id,{invIds:s}=t[e]
T(`taking all ${s.length} items`,n.parentNode),x(40,s).forEach(f(R,a))}(t,a,n.target)}function z(t,a,n){const e=k({className:"fshTakeGrid"})
!function(t,a){b(a).forEach(f(B,t))}(e,t),p(a,e),g(e,f(_,t,n))}function A(t){const a=k({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:n,takeResult:e}=function(){const t=k(),a=h()
return p(t,a),{takeContainer:t,takeResult:a}}()
z(t,a,e),p(a,k()),p(a,n),p(c(),a)}function F(t,a){m("mailbox","toggleQuickTake"),N("qtOn","Mailbox",a)
A(t.reduce(S,{}))}function G(){if(i()||!c())return
const t=r("a",c())
if(0===t.length)return
const a=c().lastElementChild
!function(t,a){const n=L({id:"fshQuickTake",type:"checkbox"})
o(n,a),u(n,"change",f(F,t,a))}(t,a),N("qtOff","Quick Take",a)}export{G as default}
//# sourceMappingURL=mailbox-1SSQZqQw.js.map
