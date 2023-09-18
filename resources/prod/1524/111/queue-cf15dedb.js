import{a as t,e as r,u as n}from"./useItem-1d2f7d6d.js"
import{g as a}from"./guildInventory-285cf47e.js"
import{F as e,$ as i}from"./calfSystem-abb16b0d.js"
import{h as o}from"./htmlResult-6b7c7e7e.js"
import{e as s}from"./errorDialog-9e633a62.js"
import{b as u,a as c}from"./backpackOk-c0c72b73.js"
import{t as m}from"./takeItem-08215f5b.js"
function f(t,r,n){return a({subcmd2:"recall",id:t,player_id:r,mode:n})}async function l(t,r,n){const a=await e({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:n})
return o(a)}async function d(r,n,a){const e=await function(t,r,n){return i(f,l,t,r,n)}(r,n,a)
return t(e)}async function p(t,r,n){return await t(r),n}async function y(t,a){if(0===a.r&&"recall"!==t){!function(t,a,e){if(!c(e))return
const i=e.items[e.items.length-1].a
"wear"===t?p(r,i,a):"use"===t&&p(n,i,a)}(t,a,await u())}return a}function w(t,a){return 0===a.r&&"take"!==t?function(t,a){return"wear"===t?p(r,a.b,a):"use"===t?p(n,a.b,a):void 0}(t,a):a}let b
function j(){return b||(b=Promise.resolve()),b}function g(t,r){return b=async function(t,r,n){return await n,w(r,await m(t))}(t,r,j()),b}function k(t,r,n,a){return b=async function([t,r,n,a,e]){await e
const i=await d(t,r,n)
if(s(i),i)return y(a,i)}([t,r,n,a,j()]),b}export{k as a,g as q}
//# sourceMappingURL=queue-cf15dedb.js.map
