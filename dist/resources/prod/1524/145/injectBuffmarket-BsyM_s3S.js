import{a,$ as s,q as t,o as e,p as n,b as c,c as f,s as i,d as r,f as u,e as o,r as p}from"./calfSystem-CvwhhJv4.js"
import{a as d}from"./aGenericFallback-Ovyuk4LC.js"
function l(s){return t={subcmd:"buy",id:s},a({cmd:"buffmarket",...t})
var t}function m(a){return d({cmd:"buffmarket",subcmd:"buy",id:a},"Request accepted - buffs have automatically been cast.")}async function b(a,s){i("buffmarket","search"),s.preventDefault(),r('<div class="fshWaiting">Loading...</div>',a)
const e=u(new FormData(s.target)),n=await o(e)
if(!n)return
const c=t("#buff-results",n)
if(!c)return
const f=c.parentElement.innerHTML
r(f,a)}async function g(a,t){const e=a.target.parentNode
e.className="fshActionRow",r('<div class="fshSpin"><span class="fshSpinner"></span></div>',e)
const n=await function(a){return s(l,m,a)}(t)
if(n?.s)r('<span class="fshBuffSuccess">Buffs have been applied</span>',e)
else{r(`<span class="fshBuffFail">${n?.e?.message??"Failed"}</span>`,e)}}function h(a){"INPUT"===a.target.tagName&&"Buy"===a.target.value&&function(a){i("buffmarket","interceptBuy"),a.stopPropagation()
const s=p(/id=(?<id>\d+)/,a.target.getAttribute("onclick"))
s&&g(a,s)}(a)}function v(){const a=t("#buff-results")
a&&(!function(a){const s=document.forms[0]
c(s,"submit",f(b,a.parentNode))}(a),e(n(),h,!0))}export{v as default}
//# sourceMappingURL=injectBuffmarket-BsyM_s3S.js.map
