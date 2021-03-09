import{t as n}from"./calfSystem-793da633.js"
import{i as t}from"./indexAjaxJson-bfa28533.js"
import{a as r,e,u as o}from"./useItem-617271d2.js"
import{e as u}from"./errorDialog-da819f92.js"
import{g as i}from"./guildInventory-25f5730d.js"
import{d as s}from"./dialog-a123f46e.js"
function a(n){return n}function f(t,r,e){return t(r).then(n(a,e))}function c(n,t,r){return function(n,t,r){return i({subcmd2:"recall",id:n,player_id:t,mode:r})}(n,t,r)}function m(n,t,r){const u=r.items[r.items.length-1].a
return"wear"===n?f(e,u,t):"use"===n?f(o,u,t):void 0}function d(r,e){return 0===e.r&&"recall"!==r?t({cmd:"profile",subcmd:"fetchinv"}).then(n(m,r,e)):e}function l(t,e,o,i){return function(n,t,e){return c(n,t,e).then(r)}(t,e,o).then(u).then(n(d,i))}function h(n,t){return 0===t.r&&"take"!==n?function(n,t){return"wear"===n?f(e,t.b,t):"use"===n?f(o,t.b,t):void 0}(n,t):t}function p(r,e){return function(n){return t({cmd:"guild",subcmd:"inventory",subcmd2:"takeitem",guildstore_id:n,ajax:1}).then(s)}(r).then(n(h,e))}let j
function b(){return j||(j=Promise.resolve()),j}function g(t,r){return j=b().then(n(p,t,r)),j}function v(t,r,e,o){return j=b().then(n(l,t,r,e,o)),j}export{v as a,g as q}
//# sourceMappingURL=queue-cfe548c3.js.map
