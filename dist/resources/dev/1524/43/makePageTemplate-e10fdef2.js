function t(t,s,d,n){let a=""
""!==s&&(a=`&nbsp;(${s})`)
let i=""
return d&&(i=`[<span class="fshLink" id="${d}">${n}</span>]`),`<table width=100%><tbody><tr class="fshHeader"><td width="90%"><b>&nbsp;${t}</b>${a}<td width="10%" class="fshBtnBox">${i}</td></tr><tbody></table>`}function s(s){return`${t(s.title,s.comment,s.spanId,s.button)}<div class="fshSmall" id="${s.divId}"></div>`}export{t as a,s as m}
//# sourceMappingURL=makePageTemplate-e10fdef2.js.map
