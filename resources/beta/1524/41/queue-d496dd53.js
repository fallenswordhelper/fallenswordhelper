import{t,u as n,$ as e}from"./calfSystem-587dd8d3.js"
import{i as r}from"./indexAjaxJson-a5185e0b.js"
import{a as u,e as o,u as i}from"./useItem-a2e891d1.js"
import{e as s}from"./errorDialog-864e4ba8.js"
import{h as a}from"./htmlResult-81323754.js"
import{g as c,t as m}from"./takeItem-807b3913.js"
function f(t){return t}function d(n,e,r){return n(e).then(t(f,r))}function l(t,e,r){return n({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:e,mode:r}).then(a)}function h(t,n,e){return c({subcmd2:"recall",id:t,player_id:n,mode:e})}function p(t,n,r){return function(t,n,r){return e(h,l,t,n,r)}(t,n,r).then(u)}function b(t,n,e){const r=e.items[e.items.length-1].a
return"wear"===t?d(o,r,n):"use"===t?d(i,r,n):void 0}function j(n,e){return 0===e.r&&"recall"!==n?r({cmd:"profile",subcmd:"fetchinv"}).then(t(b,n,e)):e}function v(n,e,r,u){return p(n,e,r).then(s).then(t(j,u))}function g(t,n){return 0===n.r&&"take"!==t?function(t,n){return"wear"===t?d(o,n.b,n):"use"===t?d(i,n.b,n):void 0}(t,n):n}function y(n,e){return m(n).then(t(g,e))}let x
function k(){return x||(x=Promise.resolve()),x}function w(n,e){return x=k().then(t(y,n,e)),x}function I(n,e,r,u){return x=k().then(t(v,n,e,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-d496dd53.js.map
