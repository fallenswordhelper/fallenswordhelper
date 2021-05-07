import{a as n,aJ as o}from"./calfSystem-3cb2f93e.js"
function e(n,o,e){return e&&performance.now()<n&&o<e.length}function t([r,f,a,c,s,m]){const i=performance.now()+r
let l=c
for(;e(i,l,a);)s(a[l],l,a),l+=1
l<a.length?n(f,t,[[r,f,a,l,s,m]]):function(e,t){o(t)&&n(e,t)}(f,m)}export{t as b}
//# sourceMappingURL=batch-60e4331a.js.map
