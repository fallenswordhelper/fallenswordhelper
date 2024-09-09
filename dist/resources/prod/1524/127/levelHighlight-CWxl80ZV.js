import{a as n}from"./asInt-BrY-dWp8.js"
import{ai as t,c3 as r,c4 as a}from"./calfSystem-DCvZki7i.js"
let o=0
function e(n,t){return n.find((([n])=>n(t)))?.[1](t)}function u(){return o||(o=t(r)||n(a)),o}const c=[[n=>n>4049,()=>50],[n=>n>4039,n=>n-4e3],[n=>n>3039,()=>40],[n=>n>3029,n=>n-3e3],[n=>n>2029,()=>30],[n=>n>2019,n=>n-2e3],[n=>n>1019,()=>20],[n=>n>1009,n=>n-1e3],[n=>n>209,()=>10],[n=>n>204,n=>n-200],[n=>n>5,()=>5],[n=>n>0,n=>n-1]]
function f(){return(n=u())-e(c,n)
var n}const i=[[n=>n>3999,()=>50],[n=>n>2999,()=>40],[n=>n>1999,()=>30],[n=>n>999,()=>20],[n=>n>199,()=>10],[()=>!0,()=>5]]
function s(){return(n=u())+e(i,n)
var n}function m(n){return n>700?100+25*Math.floor((n-1)/1e3):n>300?50:25}const h=[701,301,50]
function M(n){if(n<50)return 0
const t=m(n),r=function(n){return n>1e3?1e3*Math.floor((n-1)/1e3)+1:h.find((t=>n>=t))}(n)
return n-t<r?Math.max(Math.min(r,n-m(n-t)),50):Math.max(n-t,50)}function l(){return(n=u())<50?0:n+m(n)
var n}function p(){return M(u())}export{f as a,l as b,p as c,s as g}
//# sourceMappingURL=levelHighlight-CWxl80ZV.js.map
