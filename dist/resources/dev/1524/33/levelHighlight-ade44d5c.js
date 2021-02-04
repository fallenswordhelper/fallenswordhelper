import{H as t,I as n,J as r,K as s}from"./calfSystem-37f70deb.js"
import{i as o}from"./intValue-55d66e09.js"
import{v as e}from"./valueText-6fb91f3a.js"
let a
function f(){return a||(a=t(n)||o(e(r(s)))),a}function u(){const t=f()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function c(){const t=f()
let n=10
return t<200&&(n=5),t+n}const i=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=f()
return t-function(t){return i.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=f()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{u as a,m as b,l as c,c as g}
//# sourceMappingURL=levelHighlight-ade44d5c.js.map
