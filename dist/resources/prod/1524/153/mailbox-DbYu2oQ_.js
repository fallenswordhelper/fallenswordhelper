import{U as t,$ as n,_ as a,a0 as e,a1 as s,a2 as i,p as c,a3 as r,a4 as o,a5 as u,c as f,s as l,a6 as m,a7 as d,i as p,u as k,a8 as h,o as g,a9 as b,aa as v,d as T,ab as x,ac as y,g as I}from"./calfSystem-CT1aM4VG.js"
import{c as L}from"./createInput-CTW03HuX.js"
import{c as C}from"./createLabel-CJEqIp3q.js"
function M(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}function Q(t){return e({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function j(t){return function(t){const n=t.filter((t=>0===t.r)),a=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:a.length>0?{e:{message:a[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await a(t.map(Q)))}function q(t,n){s(n,`<li class="fshNbrList">${t}</li>`)}let E=""
function N(t,n){return!t||(function(t){return!t.s&&E!==t.e.message}(t)&&(E=t.e.message,q(t.e.message,n)),!t.s||void 0)}function S(t,n,a){const e=C({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return o(e,a),e}function w(t,n){const a=n.children[0],{tipped:e}=a.dataset,{itemId:s,invId:i}=m(d,e)
return s&&i?(t[s]?t[s].invIds.push(i):t[s]={invIds:[i],tipped:e.replace(/&extra=\d/,""),src:a.src},t):t}function B(t,n){const a=n[1],e=k(),s=k({innerHTML:`<img src="${a.src}" class="tip-dynamic" data-tipped="${a.tipped}">`})
p(e,s)
const i=k({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${a.invIds.length}</button>`})
p(e,i),p(t,e)}function H(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=I(`temp-inv-${t.id}`)
n&&T("",n)}function _(t,n){N(n,t)||y(n.r)&&function(t,n){n.r.forEach(H),q(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}async function O(t,a){var e
_(t,await(e=a,n(M,j,e)))}function R(t,n,a){v("fshBls",a.target)&&function(t,n,a){l("mailbox","takeSimilar")
const e=a.dataset.id,{invIds:s}=t[e]
T(`taking all ${s.length} items`,a.parentNode),x(40,s).forEach(f(O,n))}(t,n,a.target)}function z(t,n,a){const e=k({className:"fshTakeGrid"})
!function(t,n){b(n).forEach(f(B,t))}(e,t),p(n,e),g(e,f(R,t,a))}function A(t){const n=k({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:a,takeResult:e}=function(){const t=k(),n=h()
return p(t,n),{takeContainer:t,takeResult:n}}()
z(t,n,e),p(n,k()),p(n,a),p(c(),n)}function F(t,n){l("mailbox","toggleQuickTake"),S("qtOn","Mailbox",n)
A(t.reduce(w,{}))}function G(){if(i()||!c())return
const t=r("a",c())
if(0===t.length)return
const n=c().lastElementChild
!function(t,n){const a=L({id:"fshQuickTake",type:"checkbox"})
o(a,n),u(a,"change",f(F,t,n))}(t,n),S("qtOff","Quick Take",n)}export{G as default}
//# sourceMappingURL=mailbox-DbYu2oQ_.js.map
