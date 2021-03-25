import{I as t,J as n,K as r,L as s}from"./calfSystem-4a40365f.js"
import{i as a}from"./intValue-ca51a3c0.js"
import{v as o}from"./valueText-1577f4a8.js"
let c
function e(){return c||(c=t(n)||a(o(r(s)))),c}function u(){const t=e()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function f(){const t=e()
let n=10
return t<200&&(n=5),t+n}const i=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=e()
return t-function(t){return i.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=e()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{u as a,m as b,l as c,f as g}
//# sourceMappingURL=levelHighlight-d16d2f68.js.map
