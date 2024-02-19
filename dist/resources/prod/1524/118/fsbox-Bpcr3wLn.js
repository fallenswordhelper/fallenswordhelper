import{g as s,o as n,i as o,q as t,l as a,s as e,dz as f,n as i,ax as c,a8 as r,aO as x,a$ as u,aQ as m}from"./calfSystem-hszmVKJw.js"
import{c as l}from"./createButton-DqqWSsC_.js"
import{c as b}from"./createSpan-CnsAZiOU.js"
import{i as g}from"./insertTextBeforeEnd-DcqXfvBD.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const t=b({className:`fsh-fsbox ${s}`,textContent:"[ "})
return o(t,n),g(t," ]"),t}function $(s){const f=t(a,s)
f&&(function(s,t){const a=i({href:`${c}${r(t)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),o(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await x("fsh_fsboxcontent")??"",o=u(t(".message",s).innerHTML)
if(n.includes(o))return
m("fsh_fsboxcontent",`<br>${o}${n}`.slice(0,9999))}(s))}function h(s){s.classList.add("fshRelative"),function(s){const t=l({textContent:"Log"})
n(t,p),o(s,d("fs-box-log",t))}(s),$(s)}function j(){const n=s("minibox-fsbox")
n&&h(n)}export{j as default}
//# sourceMappingURL=fsbox-Bpcr3wLn.js.map
