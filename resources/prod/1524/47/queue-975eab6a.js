import{t,u as n,$ as r}from"./calfSystem-a2fd9017.js"
import{i as e}from"./indexAjaxJson-9619f1ba.js"
import{a as u,e as o,u as i}from"./useItem-4eadd293.js"
import{e as s}from"./errorDialog-1238d963.js"
import{h as a}from"./htmlResult-84c3f534.js"
import{g as c,t as f}from"./takeItem-56f1b22c.js"
function m(t){return t}function d(n,r,e){return n(r).then(t(m,e))}function l(t,r,e){return n({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:r,mode:e}).then(a)}function h(t,n,r){return c({subcmd2:"recall",id:t,player_id:n,mode:r})}function p(t,n,e){return function(t,n,e){return r(h,l,t,n,e)}(t,n,e).then(u)}function b(t,n,r){const e=r.items[r.items.length-1].a
return"wear"===t?d(o,e,n):"use"===t?d(i,e,n):void 0}function j(n,r){return 0===r.r&&"recall"!==n?e({cmd:"profile",subcmd:"fetchinv"}).then(t(b,n,r)):r}function v(n,r,e,u){return p(n,r,e).then(s).then(t(j,u))}function g(t,n){return 0===n.r&&"take"!==t?function(t,n){return"wear"===t?d(o,n.b,n):"use"===t?d(i,n.b,n):void 0}(t,n):n}function y(n,r){return f(n).then(t(g,r))}let x
function k(){return x||(x=Promise.resolve()),x}function w(n,r){return x=k().then(t(y,n,r)),x}function I(n,r,e,u){return x=k().then(t(v,n,r,e,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-975eab6a.js.map