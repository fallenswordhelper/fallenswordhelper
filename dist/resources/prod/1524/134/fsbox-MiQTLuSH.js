import{g as s,o as n,i as o,q as t,l as a,s as e,dJ as f,n as i,az as c,a8 as r,aQ as x,b1 as u,aS as m}from"./calfSystem-CyLCrHqa.js"
import{c as b}from"./createButton-CJVDkk6b.js"
import{c as l}from"./createSpan-BwBXwdpR.js"
import{i as g}from"./insertTextBeforeEnd-CNcPRAAo.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const t=l({className:`fsh-fsbox ${s}`,textContent:"[ "})
return o(t,n),g(t," ]"),t}function h(s){const f=t(a,s)
f&&(function(s,t){const a=i({href:`${c}${r(t)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),o(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await x("fsh_fsboxcontent")??"",o=u(t(".message",s).innerHTML)
if(n.includes(o))return
m("fsh_fsboxcontent",`<br>${o}${n}`.slice(0,9999))}(s))}function $(s){s.classList.add("fshRelative"),function(s){const t=b({textContent:"Log"})
n(t,p),o(s,d("fs-box-log",t))}(s),h(s)}function j(){const n=s("minibox-fsbox")
n&&$(n)}export{j as default}
//# sourceMappingURL=fsbox-MiQTLuSH.js.map
