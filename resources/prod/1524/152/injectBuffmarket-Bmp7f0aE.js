import{b as s}from"./buffmarket-Bm4aoT1r.js"
import{$ as a,a as t,q as e,o as n,p as f,b as c,c as u,s as i,e as r,h as o,j as p,r as m}from"./calfSystem-BlPuMQGT.js"
function d(a){return s({subcmd:"buy",id:a})}function l(s){return t({cmd:"buffmarket",subcmd:"buy",id:s},"Request accepted - buffs have automatically been cast.")}async function b(s,a){i("buffmarket","search"),a.preventDefault(),r('<div class="fshWaiting">Loading...</div>',s)
const t=o(new FormData(a.target)),n=await p(t)
if(!n)return
const f=e("#buff-results",n)
if(!f)return
const c=f.parentElement.innerHTML
r(c,s)}async function g(s,t){const e=s.target.parentNode
e.className="fshActionRow",r('<div class="fshSpin"><span class="fshSpinner"></span></div>',e)
const n=await function(s){return a(d,l,s)}(t)
if(n?.s)r('<span class="fshBuffSuccess">Buffs have been applied</span>',e)
else{r(`<span class="fshBuffFail">${n?.e?.message??"Failed"}</span>`,e)}}function h(s){"INPUT"===s.target.tagName&&"Buy"===s.target.value&&function(s){i("buffmarket","interceptBuy"),s.stopPropagation()
const a=m(/id=(?<id>\d+)/,s.target.getAttribute("onclick"))
a&&g(s,a)}(s)}function v(){const s=e("#buff-results")
s&&(!function(s){const a=document.forms[0]
c(a,"submit",u(b,s.parentNode))}(s),n(f(),h,!0))}export{v as default}
//# sourceMappingURL=injectBuffmarket-Bmp7f0aE.js.map
