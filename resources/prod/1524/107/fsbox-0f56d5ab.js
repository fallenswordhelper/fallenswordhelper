import{g as s,o as n,i as o,q as t,k as a,n as e,dp as f,m as i,au as c,a5 as r,aX as m}from"./calfSystem-2fff342b.js"
import{c as u}from"./createButton-485879f7.js"
import{c as x}from"./createSpan-6e19e4f0.js"
import{i as b}from"./insertTextBeforeEnd-0b4000aa.js"
import{g as l,s as g}from"./idb-0ebea50c.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const t=x({className:`fsh-fsbox ${s}`,textContent:"[ "})
return o(t,n),b(t," ]"),t}function h(s){const f=t(a,s)
f&&(function(s,t){const a=i({href:`${c}${r(t)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),o(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await l("fsh_fsboxcontent")??"",o=m(t(".message",s).innerHTML)
if(n.includes(o))return
g("fsh_fsboxcontent",`<br>${o}${n}`.slice(0,9999))}(s))}function j(s){s.classList.add("fshRelative"),function(s){const t=u({textContent:"Log"})
n(t,p),o(s,d("fs-box-log",t))}(s),h(s)}function $(){const n=s("minibox-fsbox")
n&&j(n)}export{$ as default}
//# sourceMappingURL=fsbox-0f56d5ab.js.map
