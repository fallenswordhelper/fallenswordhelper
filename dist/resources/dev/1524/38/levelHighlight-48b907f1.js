import{I as t,J as n,K as r,L as s}from"./calfSystem-d56087e1.js"
import{i as o}from"./intValue-ba9b9e5a.js"
import{v as e}from"./valueText-72f14761.js"
let a
function u(){return a||(a=t(n)||o(e(r(s)))),a}function c(){const t=u()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function f(){const t=u()
let n=10
return t<200&&(n=5),t+n}const i=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=u()
return t-function(t){return i.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=u()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{c as a,m as b,l as c,f as g}
//# sourceMappingURL=levelHighlight-48b907f1.js.map