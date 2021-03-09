import{t as n}from"./calfSystem-c07e3259.js"
import{i as t}from"./indexAjaxJson-18a12ea8.js"
import{a as e,e as r,u as o}from"./useItem-e85cb376.js"
import{e as u}from"./errorDialog-da819f92.js"
import{g as i}from"./guildInventory-02cbb8a9.js"
import{d as a}from"./dialog-a123f46e.js"
function s(n){return n}function c(t,e,r){return t(e).then(n(s,r))}function f(n,t,e){return function(n,t,e){return i({subcmd2:"recall",id:n,player_id:t,mode:e})}(n,t,e)}function m(n,t,e){const u=e.items[e.items.length-1].a
return"wear"===n?c(r,u,t):"use"===n?c(o,u,t):void 0}function d(e,r){return 0===r.r&&"recall"!==e?t({cmd:"profile",subcmd:"fetchinv"}).then(n(m,e,r)):r}function l(t,r,o,i){return function(n,t,r){return f(n,t,r).then(e)}(t,r,o).then(u).then(n(d,i))}function h(n,t){return 0===t.r&&"take"!==n?function(n,t){return"wear"===n?c(r,t.b,t):"use"===n?c(o,t.b,t):void 0}(n,t):t}function b(e,r){return function(n){return t({cmd:"guild",subcmd:"inventory",subcmd2:"takeitem",guildstore_id:n,ajax:1}).then(a)}(e).then(n(h,r))}let p
function j(){return p||(p=Promise.resolve()),p}function g(t,e){return p=j().then(n(b,t,e)),p}function v(t,e,r,o){return p=j().then(n(l,t,e,r,o)),p}export{v as a,g as q}
//# sourceMappingURL=queue-42106541.js.map
