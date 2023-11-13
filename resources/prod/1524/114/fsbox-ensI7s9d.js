import{g as s,o as n,i as o,q as t,l as a,s as e,dp as f,n as i,as as c,a3 as r,aT as m}from"./calfSystem-rn9Rc_nF.js"
import{c as x}from"./createButton-5RuoZ2dv.js"
import{c as u}from"./createSpan-Q4CQr4i_.js"
import{i as l}from"./insertTextBeforeEnd-sZGsYbVQ.js"
import{g as b,s as g}from"./idb-1b6_RJN1.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const t=u({className:`fsh-fsbox ${s}`,textContent:"[ "})
return o(t,n),l(t," ]"),t}function h(s){const f=t(a,s)
f&&(function(s,t){const a=i({href:`${c}${r(t)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),o(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await b("fsh_fsboxcontent")??"",o=m(t(".message",s).innerHTML)
if(n.includes(o))return
g("fsh_fsboxcontent",`<br>${o}${n}`.slice(0,9999))}(s))}function j(s){s.classList.add("fshRelative"),function(s){const t=x({textContent:"Log"})
n(t,p),o(s,d("fs-box-log",t))}(s),h(s)}function $(){const n=s("minibox-fsbox")
n&&j(n)}export{$ as default}
//# sourceMappingURL=fsbox-ensI7s9d.js.map
