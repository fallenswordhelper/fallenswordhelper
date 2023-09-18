import{a,$ as s,q as t,o as e,p as n,b as c,c as f,s as i,f as u,d as r,r as o}from"./calfSystem-929ac228.js"
import{a as d}from"./aGenericFallback-1e8d1d46.js"
function l(s){return t={subcmd:"buy",id:s},a({cmd:"buffmarket",...t})
var t}function p(a){return d({cmd:"buffmarket",subcmd:"buy",id:a},"Request accepted - buffs have automatically been cast.")}async function m(a,s){s.preventDefault(),i('<div class="fshWaiting">Loading...</div>',a)
const e=u(new FormData(s.target)),n=await r(e),c=t("#buff-results",n)
if(!c)return
const f=c.parentElement.innerHTML
i(f,a)}async function b(a){a.stopPropagation()
const t=o(/id=(?<id>\d+)/,a.target.getAttribute("onclick"))
if(t){const e=a.target.parentNode
e.className="fshActionRow",i('<div class="fshSpin"><span class="fshSpinner"></span></div>',e)
const n=await function(a){return s(l,p,a)}(t)
if(n?.s)i('<span class="fshBuffSuccess">Buffs have been applied</span>',e)
else{i(`<span class="fshBuffFail">${n?.e?.message??"Failed"}</span>`,e)}}}function g(a){"INPUT"===a.target.tagName&&"Buy"===a.target.value&&b(a)}function v(){const a=t("#buff-results")
a&&(!function(a){const s=document.forms[0]
c(s,"submit",f(m,a.parentNode))}(a),e(n(),g,!0))}export{v as default}
//# sourceMappingURL=injectBuffmarket-fbdfb18c.js.map
