import{a,$ as s,q as t,o as e,p as n,b as f,c,s as i,d as r,f as u,e as o,r as d}from"./calfSystem-Dh7h0wep.js"
import{a as l}from"./aGenericFallback-OAllK-cg.js"
function m(s){return t={subcmd:"buy",id:s},a({cmd:"buffmarket",...t})
var t}function p(a){return l({cmd:"buffmarket",subcmd:"buy",id:a},"Request accepted - buffs have automatically been cast.")}async function b(a,s){i("buffmarket","search"),s.preventDefault(),r('<div class="fshWaiting">Loading...</div>',a)
const e=u(new FormData(s.target)),n=await o(e)
if(!n)return
const f=t("#buff-results",n)
if(!f)return
const c=f.parentElement.innerHTML
r(c,a)}async function g(a){i("buffmarket","interceptBuy"),a.stopPropagation()
const t=d(/id=(?<id>\d+)/,a.target.getAttribute("onclick"))
if(t){const e=a.target.parentNode
e.className="fshActionRow",r('<div class="fshSpin"><span class="fshSpinner"></span></div>',e)
const n=await function(a){return s(m,p,a)}(t)
if(n?.s)r('<span class="fshBuffSuccess">Buffs have been applied</span>',e)
else{r(`<span class="fshBuffFail">${n?.e?.message??"Failed"}</span>`,e)}}}function h(a){"INPUT"===a.target.tagName&&"Buy"===a.target.value&&g(a)}function v(){const a=t("#buff-results")
a&&(!function(a){const s=document.forms[0]
f(s,"submit",c(b,a.parentNode))}(a),e(n(),h,!0))}export{v as default}
//# sourceMappingURL=injectBuffmarket-lo8Gf9nM.js.map
