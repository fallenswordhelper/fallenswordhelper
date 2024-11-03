import{g as s,o as n,i as t,q as o,l as a,s as e,dJ as f,n as i,az as c,a8 as r,aQ as x,b1 as u,aS as l}from"./calfSystem-B_VkFJhM.js"
import{c as m}from"./createButton-BRLkkjaw.js"
import{c as b}from"./createSpan-s_SpXH45.js"
import{i as g}from"./insertTextBeforeEnd-CpBA09Gi.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const o=b({className:`fsh-fsbox ${s}`,textContent:"[ "})
return t(o,n),g(o," ]"),o}function h(s){const f=o(a,s)
f&&(function(s,o){const a=i({href:`${c}${r(o)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),t(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await x("fsh_fsboxcontent")??"",t=u(o(".message",s).innerHTML)
if(n.includes(t))return
l("fsh_fsboxcontent",`<br>${t}${n}`.slice(0,9999))}(s))}function $(s){s.classList.add("fshRelative"),function(s){const o=m({textContent:"Log"})
n(o,p),t(s,d("fs-box-log",o))}(s),h(s)}function j(){const n=s("minibox-fsbox")
n&&$(n)}export{j as default}
//# sourceMappingURL=fsbox-CoLJAuMb.js.map
