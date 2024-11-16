import{a,$ as s,q as t,o as e,b as n,s as c,c as f,f as i,d as r,e as u,r as o,p as d}from"./calfSystem-Blt4DbaE.js"
import{a as l}from"./aGenericFallback-BVLHkg3J.js"
function m(s){return t={subcmd:"buy",id:s},a({cmd:"buffmarket",...t})
var t}function p(a){return l({cmd:"buffmarket",subcmd:"buy",id:a},"Request accepted - buffs have automatically been cast.")}async function b(a,s){c("buffmarket","search"),s.preventDefault(),f('<div class="fshWaiting">Loading...</div>',a)
const e=i(new FormData(s.target)),n=await r(e)
if(!n)return
const u=t("#buff-results",n)
if(!u)return
const o=u.parentElement.innerHTML
f(o,a)}async function g(a,t){const e=a.target.parentNode
e.className="fshActionRow",f('<div class="fshSpin"><span class="fshSpinner"></span></div>',e)
const n=await function(a){return s(m,p,a)}(t)
if(n?.s)f('<span class="fshBuffSuccess">Buffs have been applied</span>',e)
else{f(`<span class="fshBuffFail">${n?.e?.message??"Failed"}</span>`,e)}}function h(a){"INPUT"===a.target.tagName&&"Buy"===a.target.value&&function(a){c("buffmarket","interceptBuy"),a.stopPropagation()
const s=o(/id=(?<id>\d+)/,a.target.getAttribute("onclick"))
s&&g(a,s)}(a)}function v(){const a=t("#buff-results")
a&&(!function(a){const s=document.forms[0]
e(s,"submit",n(b,a.parentNode))}(a),u(d(),h,!0))}export{v as default}
//# sourceMappingURL=injectBuffmarket-VQUlwx4u.js.map
