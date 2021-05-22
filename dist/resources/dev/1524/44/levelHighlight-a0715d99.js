import{a as t}from"./asInt-1c5cca46.js"
import{I as n,J as c,K as r}from"./calfSystem-f7cf24f6.js"
let s
function o(){return s||(s=n(c)||t(r)),s}function a(){const t=o()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function f(){const t=o()
let n=10
return t<200&&(n=5),t+n}const e=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function u(){const t=o()
return t-function(t){return e.find((([n])=>n(t)))[1](t)}(t)}function i(){const t=o()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{a,i as b,u as c,f as g}
//# sourceMappingURL=levelHighlight-a0715d99.js.map
