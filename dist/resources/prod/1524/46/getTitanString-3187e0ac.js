function n(n,s){return 0===n?0:100*s/n}function s(n,s,e){const a=Math.ceil(s/2+1)
if(n>=a)return"Secured"
const t=a-n
return t>e?'<span class="fshRed">Cannot Secure</span>':`<span class="fshRed">${t}</span> to secure`}export{s as a,n as g}
//# sourceMappingURL=getTitanString-3187e0ac.js.map
