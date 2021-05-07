import{t,u as n,$ as e}from"./calfSystem-9942149b.js"
import{i as r}from"./indexAjaxJson-21b8f9a5.js"
import{a as u,e as o,u as i}from"./useItem-850b93fa.js"
import{e as s}from"./errorDialog-0f2ff56e.js"
import{h as a}from"./htmlResult-667ec4a3.js"
import{g as f,t as c}from"./takeItem-f882e262.js"
function m(t){return t}function l(n,e,r){return n(e).then(t(m,r))}function d(t,e,r){return n({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:e,mode:r}).then(a)}function h(t,n,e){return f({subcmd2:"recall",id:t,player_id:n,mode:e})}function p(t,n,r){return function(t,n,r){return e(h,d,t,n,r)}(t,n,r).then(u)}function b(t,n,e){const r=e.items[e.items.length-1].a
return"wear"===t?l(o,r,n):"use"===t?l(i,r,n):void 0}function j(n,e){return 0===e.r&&"recall"!==n?r({cmd:"profile",subcmd:"fetchinv"}).then(t(b,n,e)):e}function v(n,e,r,u){return p(n,e,r).then(s).then(t(j,u))}function g(t,n){return 0===n.r&&"take"!==t?function(t,n){return"wear"===t?l(o,n.b,n):"use"===t?l(i,n.b,n):void 0}(t,n):n}function y(n,e){return c(n).then(t(g,e))}let x
function k(){return x||(x=Promise.resolve()),x}function w(n,e){return x=k().then(t(y,n,e)),x}function I(n,e,r,u){return x=k().then(t(v,n,e,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-ea2a593b.js.map
