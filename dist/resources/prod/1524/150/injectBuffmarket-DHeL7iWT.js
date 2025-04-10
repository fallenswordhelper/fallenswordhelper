import{a,$ as s,b as t,q as e,o as n,p as c,c as f,e as u,s as i,h as r,j as o,k as d,r as p}from"./calfSystem-BGOTz8de.js"
function l(s){return t={subcmd:"buy",id:s},a({cmd:"buffmarket",...t})
var t}function m(a){return t({cmd:"buffmarket",subcmd:"buy",id:a},"Request accepted - buffs have automatically been cast.")}async function b(a,s){i("buffmarket","search"),s.preventDefault(),r('<div class="fshWaiting">Loading...</div>',a)
const t=o(new FormData(s.target)),n=await d(t)
if(!n)return
const c=e("#buff-results",n)
if(!c)return
const f=c.parentElement.innerHTML
r(f,a)}async function g(a,t){const e=a.target.parentNode
e.className="fshActionRow",r('<div class="fshSpin"><span class="fshSpinner"></span></div>',e)
const n=await function(a){return s(l,m,a)}(t)
if(n?.s)r('<span class="fshBuffSuccess">Buffs have been applied</span>',e)
else{r(`<span class="fshBuffFail">${n?.e?.message??"Failed"}</span>`,e)}}function h(a){"INPUT"===a.target.tagName&&"Buy"===a.target.value&&function(a){i("buffmarket","interceptBuy"),a.stopPropagation()
const s=p(/id=(?<id>\d+)/,a.target.getAttribute("onclick"))
s&&g(a,s)}(a)}function v(){const a=e("#buff-results")
a&&(!function(a){const s=document.forms[0]
f(s,"submit",u(b,a.parentNode))}(a),n(c(),h,!0))}export{v as default}
//# sourceMappingURL=injectBuffmarket-DHeL7iWT.js.map
