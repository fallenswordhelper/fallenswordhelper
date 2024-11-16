import{a,d as s,$ as e}from"./calfSystem-Blt4DbaE.js"
import{g as f,b as n}from"./buffReportParser-Bu4iNjH3.js"
import{u as c}from"./uniq-D422dDMJ.js"
function u(s,e){return a({cmd:"quickbuff",subcmd:"activate",username:s,skill:e})}function r(a){const s=f(a)
return s?s.id:-1}const t=({successBuff:a,successLevel:s})=>({id:r(a),level:Number(s)}),i=(a,s)=>a.filter((({name:a,successBuff:e})=>a===s.name&&e)).map(t),o=({failBuff:a,failReason:s})=>({id:r(a),reason:s}),m=({blockBuff:a,blockReason:s})=>({id:r(a),reason:s}),l=(a,s)=>a.filter((({name:a,failBuff:e})=>a===s.name&&e)).map(o).concat(((a,s)=>a.filter((({name:a,blockBuff:e})=>a===s.name&&e)).map(m))(a,s)),b=a=>c(a,"name").map((s=>({player:{name:s.name},cast:i(a,s),failed:l(a,s)})))
function d(a){const[,s,e,f,n,c,u,r,t,i]=a
return{name:f||u||r,successBuff:s,successLevel:e,failBuff:n,failReason:c,blockReason:t,blockBuff:i}}async function p(a,e){return(f=await s({cmd:"quickbuff",subcmd:"activate",targetPlayers:a.join(),skills:e}))?{r:b(n(f).map(d)),s:!0}:{s:!1}
var f}function k(a,s){return e(u,p,a,s)}function B(a){return a.s&&1===a.r[0].casts.length}export{k as d,B as q}
//# sourceMappingURL=quickbuffSuccess-CFdIM7Kh.js.map
