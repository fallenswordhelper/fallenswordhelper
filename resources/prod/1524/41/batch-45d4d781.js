import{a as n,aG as o}from"./calfSystem-030d7057.js"
function t(n,o,t){return t&&performance.now()<n&&o<t.length}function e([r,a,f,c,s,m]){const i=performance.now()+r
let l=c
for(;t(i,l,f);)s(f[l],l,f),l+=1
l<f.length?n(a,e,[[r,a,f,l,s,m]]):function(t,e){o(e)&&n(t,e)}(a,m)}export{e as b}
//# sourceMappingURL=batch-45d4d781.js.map
