import{s as e,c as s}from"./setupPref-DKO_HP1j.js"
import{ao as a,aw as t,aS as r,p as c,cl as o,c$ as i,ac as l,aj as p}from"./calfSystem-CvwhhJv4.js"
import{p as m}from"./parseDateAsTimestamp-BbFrd8v4.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-n2TKkJvn.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-BV5e7HIy.js"
let d=0,n=0
function f(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(p(t,s),d=s)}}const h=e=>e>1
function j(){d=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(o,c())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-Z-Pk1mxB.js.map
