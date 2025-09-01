import{a as t,e as r,u as n}from"./useItem-BwQBRpxm.js"
import{ds as a,$ as e,af as s}from"./calfSystem-CQOGdqPv.js"
import{h as i}from"./htmlResult-BYIVInNx.js"
import{e as o}from"./errorDialog-B4_TjdGG.js"
import{b as u,a as c}from"./backpackOk-C1H4HF1d.js"
import{t as m}from"./takeItem-DudDU78F.js"
function f(t,r,n){return a({subcmd2:"recall",id:t,player_id:r,mode:n})}async function l(t,r,n){const a=await s({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:n})
return i(a)}async function d(r,n,a){const s=await function(t,r,n){return e(f,l,t,r,n)}(r,n,a)
return t(s)}async function p(t,r,n){return await t(r),n}async function w(t,a){if(0===a.r&&"recall"!==t){!function(t,a,e){if(!c(e))return
const s=e.items[e.items.length-1].a
"wear"===t?p(r,s,a):"use"===t&&p(n,s,a)}(t,a,await u())}return a}function y(t,a){return 0===a.r&&"take"!==t?function(t,a){return"wear"===t?p(r,a.b,a):"use"===t?p(n,a.b,a):void 0}(t,a):a}let b=Promise.resolve()
function j(){return b||(b=Promise.resolve()),b}function k(t,r){return b=async function(t,r,n){return await n,y(r,await m(t))}(t,r,j()),b}function v(t,r,n,a){return b=async function([t,r,n,a,e]){await e
const s=await d(t,r,n)
if(o(s),s)return w(a,s)}([t,r,n,a,j()]),b}export{k as a,v as q}
//# sourceMappingURL=queue-BVw6sdIh.js.map
