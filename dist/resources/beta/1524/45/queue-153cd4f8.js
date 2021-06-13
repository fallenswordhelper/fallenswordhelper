import{t,u as e,$ as n}from"./calfSystem-ae2e69af.js"
import{i as r}from"./indexAjaxJson-6eadb7fa.js"
import{a as u,e as o,u as i}from"./useItem-5f9a4fce.js"
import{e as a}from"./errorDialog-0a862506.js"
import{h as s}from"./htmlResult-a2f95549.js"
import{g as f,t as c}from"./takeItem-8929613f.js"
function m(t){return t}function d(e,n,r){return e(n).then(t(m,r))}function l(t,n,r){return e({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:n,mode:r}).then(s)}function h(t,e,n){return f({subcmd2:"recall",id:t,player_id:e,mode:n})}function p(t,e,r){return function(t,e,r){return n(h,l,t,e,r)}(t,e,r).then(u)}function b(t,e,n){const r=n.items[n.items.length-1].a
return"wear"===t?d(o,r,e):"use"===t?d(i,r,e):void 0}function j(e,n){return 0===n.r&&"recall"!==e?r({cmd:"profile",subcmd:"fetchinv"}).then(t(b,e,n)):n}function v(e,n,r,u){return p(e,n,r).then(a).then(t(j,u))}function g(t,e){return 0===e.r&&"take"!==t?function(t,e){return"wear"===t?d(o,e.b,e):"use"===t?d(i,e.b,e):void 0}(t,e):e}function y(e,n){return c(e).then(t(g,n))}let x
function k(){return x||(x=Promise.resolve()),x}function w(e,n){return x=k().then(t(y,e,n)),x}function I(e,n,r,u){return x=k().then(t(v,e,n,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-153cd4f8.js.map
