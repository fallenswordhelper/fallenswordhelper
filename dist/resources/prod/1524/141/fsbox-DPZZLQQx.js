import{g as s,e as t,s as n,dJ as o,i as a,q as e,t as f,l as i,az as c,a8 as r,aQ as x,b1 as u,aS as l}from"./calfSystem-Blt4DbaE.js"
import{c as m}from"./createButton-BLPmyJcZ.js"
import{c as b}from"./createSpan-qOSQqjTl.js"
import{i as g}from"./insertTextBeforeEnd-C2DfAAnt.js"
function p(){n("fsbox","open log"),o()}function d(s,t){const n=b({className:`fsh-fsbox ${s}`,textContent:"[ "})
return a(n,t),g(n," ]"),n}function h(s){const o=e(f,s)
o&&(function(s,o){const e=i({href:`${c}${r(o)}`,textContent:"Ignore"})
t(e,(()=>n("fsbox","ignore link"))),a(s,d("fs-box-ignore",e))}(s,o),async function(s){const t=await x("fsh_fsboxcontent")??"",n=u(e(".message",s).innerHTML)
if(t.includes(n))return
l("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(s))}function $(s){s.classList.add("fshRelative"),function(s){const n=m({textContent:"Log"})
t(n,p),a(s,d("fs-box-log",n))}(s),h(s)}function j(){const t=s("minibox-fsbox")
t&&$(t)}export{j as default}
//# sourceMappingURL=fsbox-DPZZLQQx.js.map
