import{W as a,$ as e,e as s,bH as f}from"./calfSystem-CIdPz3EO.js"
import{g as n,b as c}from"./buffReportParser-CXDyQ2KW.js"
function u(e,s){return a({cmd:"quickbuff",subcmd:"activate",username:e,skill:s})}function t(a){const e=n(a)
return e?e.id:-1}const r=({successBuff:a,successLevel:e})=>({id:t(a),level:Number(e)}),i=(a,e)=>a.filter(({name:a,successBuff:s})=>a===e.name&&s).map(r),o=({failBuff:a,failReason:e})=>({id:t(a),reason:e}),l=({blockBuff:a,blockReason:e})=>({id:t(a),reason:e}),m=(a,e)=>a.filter(({name:a,failBuff:s})=>a===e.name&&s).map(o).concat(((a,e)=>a.filter(({name:a,blockBuff:s})=>a===e.name&&s).map(l))(a,e))
function b(a){const[,e,s,f,n,c,u,t,r,i]=a
return{name:f||u||t,successBuff:e,successLevel:s,failBuff:n,failReason:c,blockReason:r,blockBuff:i}}async function d(a,e){return(n=await s({cmd:"quickbuff",subcmd:"activate",targetPlayers:a.join(),skills:e}))?{r:(u=c(n).map(b),f(u,"name").map(a=>({player:{name:a.name},cast:i(u,a),failed:m(u,a)}))),s:!0}:{s:!1}
var n,u}function p(a,s){return e(u,d,a,s)}function k(a){return a.s&&1===a.r[0].casts.length}export{p as d,k as q}
//# sourceMappingURL=quickbuffSuccess-DV6-BHa1.js.map
