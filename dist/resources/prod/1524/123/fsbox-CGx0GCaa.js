import{g as s,o as n,i as t,q as o,l as a,s as e,dC as f,n as i,ax as c,a8 as r,aO as x,a$ as u,aQ as m}from"./calfSystem-wTzwei3t.js"
import{c as l}from"./createButton-BsFpPtX8.js"
import{c as b}from"./createSpan-D9J62kLX.js"
import{i as g}from"./insertTextBeforeEnd-BgotZSpp.js"
function p(){e("fsbox","open log"),f()}function d(s,n){const o=b({className:`fsh-fsbox ${s}`,textContent:"[ "})
return t(o,n),g(o," ]"),o}function $(s){const f=o(a,s)
f&&(function(s,o){const a=i({href:`${c}${r(o)}`,textContent:"Ignore"})
n(a,(()=>e("fsbox","ignore link"))),t(s,d("fs-box-ignore",a))}(s,f),async function(s){const n=await x("fsh_fsboxcontent")??"",t=u(o(".message",s).innerHTML)
if(n.includes(t))return
m("fsh_fsboxcontent",`<br>${t}${n}`.slice(0,9999))}(s))}function h(s){s.classList.add("fshRelative"),function(s){const o=l({textContent:"Log"})
n(o,p),t(s,d("fs-box-log",o))}(s),$(s)}function j(){const n=s("minibox-fsbox")
n&&h(n)}export{j as default}
//# sourceMappingURL=fsbox-CGx0GCaa.js.map
