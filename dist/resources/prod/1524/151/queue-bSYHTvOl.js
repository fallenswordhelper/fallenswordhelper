import{a as t,e as r,u as n}from"./useItem-D6H9bhUw.js"
import{dC as a,$ as e,ag as i}from"./calfSystem-C1X5YxJZ.js"
import{h as s}from"./htmlResult-Btqom80J.js"
import{e as o}from"./errorDialog-B4_TjdGG.js"
import{b as u,a as c}from"./backpackOk-BjyGHPKD.js"
import{t as m}from"./takeItem-Bx0kcXjg.js"
function f(t,r,n){return a({subcmd2:"recall",id:t,player_id:r,mode:n})}async function l(t,r,n){const a=await i({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:n})
return s(a)}async function d(r,n,a){const i=await function(t,r,n){return e(f,l,t,r,n)}(r,n,a)
return t(i)}async function p(t,r,n){return await t(r),n}async function w(t,a){if(0===a.r&&"recall"!==t){!function(t,a,e){if(!c(e))return
const i=e.items[e.items.length-1].a
"wear"===t?p(r,i,a):"use"===t&&p(n,i,a)}(t,a,await u())}return a}function y(t,a){return 0===a.r&&"take"!==t?function(t,a){return"wear"===t?p(r,a.b,a):"use"===t?p(n,a.b,a):void 0}(t,a):a}let b=Promise.resolve()
function j(){return b||(b=Promise.resolve()),b}function k(t,r){return b=async function(t,r,n){return await n,y(r,await m(t))}(t,r,j()),b}function g(t,r,n,a){return b=async function([t,r,n,a,e]){await e
const i=await d(t,r,n)
if(o(i),i)return w(a,i)}([t,r,n,a,j()]),b}export{k as a,g as q}
//# sourceMappingURL=queue-bSYHTvOl.js.map
