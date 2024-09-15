import{s as e,c as s}from"./setupPref-DXW4DLjZ.js"
import{ai as a,an as t,aB as r,p as c,bV as o,cE as i,a8 as l,ae as p}from"./calfSystem-DKih1pr1.js"
import{p as d}from"./parseDateAsTimestamp-CvrJ93ZQ.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-Cd5715L9.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-do2u8WBX.js"
let m=0,n=0
function f(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=d(l(e.children[1].children[2]).replace("Posted: ",""))
s>m&&(p(t,s),m=s)}}const h=e=>e>1
function j(){m=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(o,c())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-DGpgmxbv.js.map
