import{t as e,u as t,$ as n}from"./calfSystem-7991d843.js"
import{i as r}from"./indexAjaxJson-2cb21664.js"
import{a as u,e as o,u as i}from"./useItem-d17d0e54.js"
import{e as s}from"./errorDialog-2e0e2853.js"
import{h as a}from"./htmlResult-691831e7.js"
import{g as c,t as m}from"./takeItem-185d1fe3.js"
function f(e){return e}function d(t,n,r){return t(n).then(e(f,r))}function l(e,n,r){return t({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:e,player_id:n,mode:r}).then(a)}function h(e,t,n){return c({subcmd2:"recall",id:e,player_id:t,mode:n})}function p(e,t,r){return function(e,t,r){return n(h,l,e,t,r)}(e,t,r).then(u)}function b(e,t,n){const r=n.items[n.items.length-1].a
return"wear"===e?d(o,r,t):"use"===e?d(i,r,t):void 0}function j(t,n){return 0===n.r&&"recall"!==t?r({cmd:"profile",subcmd:"fetchinv"}).then(e(b,t,n)):n}function v(t,n,r,u){return p(t,n,r).then(s).then(e(j,u))}function g(e,t){return 0===t.r&&"take"!==e?function(e,t){return"wear"===e?d(o,t.b,t):"use"===e?d(i,t.b,t):void 0}(e,t):t}function y(t,n){return m(t).then(e(g,n))}let x
function k(){return x||(x=Promise.resolve()),x}function w(t,n){return x=k().then(e(y,t,n)),x}function I(t,n,r,u){return x=k().then(e(v,t,n,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-81db23d9.js.map
