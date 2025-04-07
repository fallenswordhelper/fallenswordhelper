import{a,$ as e,k as s,bu as f}from"./calfSystem-BGW9cdWN.js"
import{g as n,b as c}from"./buffReportParser-K8tSoQ5D.js"
function u(e,s){return a({cmd:"quickbuff",subcmd:"activate",username:e,skill:s})}function t(a){const e=n(a)
return e?e.id:-1}const r=({successBuff:a,successLevel:e})=>({id:t(a),level:Number(e)}),i=(a,e)=>a.filter((({name:a,successBuff:s})=>a===e.name&&s)).map(r),o=({failBuff:a,failReason:e})=>({id:t(a),reason:e}),l=({blockBuff:a,blockReason:e})=>({id:t(a),reason:e}),m=(a,e)=>a.filter((({name:a,failBuff:s})=>a===e.name&&s)).map(o).concat(((a,e)=>a.filter((({name:a,blockBuff:s})=>a===e.name&&s)).map(l))(a,e)),b=a=>f(a,"name").map((e=>({player:{name:e.name},cast:i(a,e),failed:m(a,e)})))
function d(a){const[,e,s,f,n,c,u,t,r,i]=a
return{name:f||u||t,successBuff:e,successLevel:s,failBuff:n,failReason:c,blockReason:r,blockBuff:i}}async function k(a,e){return(f=await s({cmd:"quickbuff",subcmd:"activate",targetPlayers:a.join(),skills:e}))?{r:b(c(f).map(d)),s:!0}:{s:!1}
var f}function p(a,s){return e(u,k,a,s)}function B(a){return a.s&&1===a.r[0].casts.length}export{p as d,B as q}
//# sourceMappingURL=quickbuffSuccess-Dn3tmPiO.js.map
