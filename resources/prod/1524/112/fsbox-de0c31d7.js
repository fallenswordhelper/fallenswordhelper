import{g as s,o as n,i as o,q as t,k as a,n as e,dn as f,m as i,as as c,a3 as r,aU as m}from"./calfSystem-4830a18d.js"
import{c as x}from"./createButton-30c5ecee.js"
import{c as u}from"./createSpan-0da7a190.js"
import{i as b}from"./insertTextBeforeEnd-1af4f779.js"
import{g as l,s as g}from"./idb-7e56faaa.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const t=u({className:`fsh-fsbox ${s}`,textContent:"[ "})
return o(t,n),b(t," ]"),t}function h(s){const f=t(a,s)
f&&(function(s,t){const a=i({href:`${c}${r(t)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),o(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await l("fsh_fsboxcontent")??"",o=m(t(".message",s).innerHTML)
if(n.includes(o))return
g("fsh_fsboxcontent",`<br>${o}${n}`.slice(0,9999))}(s))}function j(s){s.classList.add("fshRelative"),function(s){const t=x({textContent:"Log"})
n(t,p),o(s,d("fs-box-log",t))}(s),h(s)}function $(){const n=s("minibox-fsbox")
n&&j(n)}export{$ as default}
//# sourceMappingURL=fsbox-de0c31d7.js.map
