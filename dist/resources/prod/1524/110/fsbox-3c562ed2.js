import{g as s,o as n,i as t,q as o,k as a,n as e,dn as f,m as i,at as c,a4 as r,aV as m}from"./calfSystem-929ac228.js"
import{c as x}from"./createButton-5ae9113e.js"
import{c as u}from"./createSpan-6761e587.js"
import{i as b}from"./insertTextBeforeEnd-0452315b.js"
import{g as l,s as g}from"./idb-8fd6b5d1.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const o=u({className:`fsh-fsbox ${s}`,textContent:"[ "})
return t(o,n),b(o," ]"),o}function $(s){const f=o(a,s)
f&&(function(s,o){const a=i({href:`${c}${r(o)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),t(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await l("fsh_fsboxcontent")??"",t=m(o(".message",s).innerHTML)
if(n.includes(t))return
g("fsh_fsboxcontent",`<br>${t}${n}`.slice(0,9999))}(s))}function h(s){s.classList.add("fshRelative"),function(s){const o=x({textContent:"Log"})
n(o,p),t(s,d("fs-box-log",o))}(s),$(s)}function j(){const n=s("minibox-fsbox")
n&&h(n)}export{j as default}
//# sourceMappingURL=fsbox-3c562ed2.js.map
