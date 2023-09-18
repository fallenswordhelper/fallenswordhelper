import{g as s,o as n,i as t,q as o,k as a,n as e,dn as f,m as i,at as c,a4 as r,aV as m}from"./calfSystem-abb16b0d.js"
import{c as x}from"./createButton-f5aa29a3.js"
import{c as u}from"./createSpan-b6e6b8c0.js"
import{i as b}from"./insertTextBeforeEnd-8257e7ec.js"
import{g as l,s as g}from"./idb-e719862a.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const o=u({className:`fsh-fsbox ${s}`,textContent:"[ "})
return t(o,n),b(o," ]"),o}function $(s){const f=o(a,s)
f&&(function(s,o){const a=i({href:`${c}${r(o)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),t(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await l("fsh_fsboxcontent")??"",t=m(o(".message",s).innerHTML)
if(n.includes(t))return
g("fsh_fsboxcontent",`<br>${t}${n}`.slice(0,9999))}(s))}function h(s){s.classList.add("fshRelative"),function(s){const o=x({textContent:"Log"})
n(o,p),t(s,d("fs-box-log",o))}(s),$(s)}function j(){const n=s("minibox-fsbox")
n&&h(n)}export{j as default}
//# sourceMappingURL=fsbox-9b3ac84b.js.map
