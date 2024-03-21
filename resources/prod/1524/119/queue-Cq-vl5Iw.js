import{a as t,e as r,u as n}from"./useItem--pGdotIX.js"
import{g as a}from"./guildInventory-CwU2PRRU.js"
import{G as e,$ as i}from"./calfSystem-Bit7wh4p.js"
import{h as o}from"./htmlResult-cFuEh6cZ.js"
import{e as s}from"./errorDialog-B4_TjdGG.js"
import{b as u}from"./backpack-DUbuWAA8.js"
import{b as c}from"./backpackOk-CagcATOI.js"
import{t as m}from"./takeItem-CFR-Px_O.js"
function f(t,r,n){return a({subcmd2:"recall",id:t,player_id:r,mode:n})}async function l(t,r,n){const a=await e({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:n})
return o(a)}async function d(r,n,a){const e=await function(t,r,n){return i(f,l,t,r,n)}(r,n,a)
return t(e)}async function p(t,r,n){return await t(r),n}async function y(t,a){if(0===a.r&&"recall"!==t){!function(t,a,e){if(!c(e))return
const i=e.items[e.items.length-1].a
"wear"===t?p(r,i,a):"use"===t&&p(n,i,a)}(t,a,await u())}return a}function w(t,a){return 0===a.r&&"take"!==t?function(t,a){return"wear"===t?p(r,a.b,a):"use"===t?p(n,a.b,a):void 0}(t,a):a}let b
function j(){return b||(b=Promise.resolve()),b}function k(t,r){return b=async function(t,r,n){return await n,w(r,await m(t))}(t,r,j()),b}function g(t,r,n,a){return b=async function([t,r,n,a,e]){await e
const i=await d(t,r,n)
if(s(i),i)return y(a,i)}([t,r,n,a,j()]),b}export{g as a,k as q}
//# sourceMappingURL=queue-Cq-vl5Iw.js.map
