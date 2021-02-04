import{t as n}from"./calfSystem-37f70deb.js"
import{i as t}from"./indexAjaxJson-82f32240.js"
import{a as r,e,u as o}from"./useItem-9bbc3b4b.js"
import{e as u}from"./errorDialog-998604da.js"
import{g as i}from"./guildInventory-9b295930.js"
import{d as s}from"./dialog-fd1181f5.js"
function f(n){return n}function a(t,r,e){return t(r).then(n(f,e))}function c(n,t,r){return function(n,t,r){return i({subcmd2:"recall",id:n,player_id:t,mode:r})}(n,t,r)}function m(n,t,r){const u=r.items[r.items.length-1].a
return"wear"===n?a(e,u,t):"use"===n?a(o,u,t):void 0}function d(r,e){return 0===e.r&&"recall"!==r?t({cmd:"profile",subcmd:"fetchinv"}).then(n(m,r,e)):e}function l(t,e,o,i){return function(n,t,e){return c(n,t,e).then(r)}(t,e,o).then(u).then(n(d,i))}function b(n,t){return 0===t.r&&"take"!==n?function(n,t){return"wear"===n?a(e,t.b,t):"use"===n?a(o,t.b,t):void 0}(n,t):t}function h(r,e){return function(n){return t({cmd:"guild",subcmd:"inventory",subcmd2:"takeitem",guildstore_id:n,ajax:1}).then(s)}(r).then(n(b,e))}let p
function j(){return p||(p=Promise.resolve()),p}function g(t,r){return p=j().then(n(h,t,r)),p}function v(t,r,e,o){return p=j().then(n(l,t,r,e,o)),p}export{v as a,g as q}
//# sourceMappingURL=queue-c786c4f0.js.map
