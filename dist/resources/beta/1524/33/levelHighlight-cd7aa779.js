import{H as t,I as n,J as r,K as s}from"./calfSystem-c91a5c89.js"
import{i as o}from"./intValue-55d66e09.js"
import{v as e}from"./valueText-4040d1ec.js"
let c
function a(){return c||(c=t(n)||o(e(r(s)))),c}function u(){const t=a()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function i(){const t=a()
let n=10
return t<200&&(n=5),t+n}const f=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=a()
return t-function(t){return f.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=a()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{u as a,m as b,l as c,i as g}
//# sourceMappingURL=levelHighlight-cd7aa779.js.map
