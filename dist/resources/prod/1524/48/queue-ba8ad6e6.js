import{t as e,u as t,$ as n}from"./calfSystem-85fa6364.js"
import{i as r}from"./indexAjaxJson-4fb780dc.js"
import{a as u,e as o,u as i}from"./useItem-2e0259e8.js"
import{e as s}from"./errorDialog-f5ff5027.js"
import{h as a}from"./htmlResult-1ba139ea.js"
import{g as c,t as f}from"./takeItem-c1ee7cf4.js"
function m(e){return e}function d(t,n,r){return t(n).then(e(m,r))}function l(e,n,r){return t({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:e,player_id:n,mode:r}).then(a)}function h(e,t,n){return c({subcmd2:"recall",id:e,player_id:t,mode:n})}function p(e,t,r){return function(e,t,r){return n(h,l,e,t,r)}(e,t,r).then(u)}function b(e,t,n){const r=n.items[n.items.length-1].a
return"wear"===e?d(o,r,t):"use"===e?d(i,r,t):void 0}function j(t,n){return 0===n.r&&"recall"!==t?r({cmd:"profile",subcmd:"fetchinv"}).then(e(b,t,n)):n}function v(t,n,r,u){return p(t,n,r).then(s).then(e(j,u))}function g(e,t){return 0===t.r&&"take"!==e?function(e,t){return"wear"===e?d(o,t.b,t):"use"===e?d(i,t.b,t):void 0}(e,t):t}function y(t,n){return f(t).then(e(g,n))}let x
function k(){return x||(x=Promise.resolve()),x}function w(t,n){return x=k().then(e(y,t,n)),x}function I(t,n,r,u){return x=k().then(e(v,t,n,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-ba8ad6e6.js.map
