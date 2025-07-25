import{s as e,c as s}from"./setupPref-Bu1y2zVh.js"
import{aB as a,b6 as t,p as r,cw as c,dg as o,n as i,aw as l,aM as p}from"./calfSystem-C1X5YxJZ.js"
import{p as d}from"./parseDateAsTimestamp-D6JycNAq.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-nwywzlgZ.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-BAc__vAC.js"
let m=0,n=0
function f(e){if(n&&o("PvP Ladder",e.children[1].children[0])){const s=d(i(e.children[1].children[2]).replace("Posted: ",""))
s>m&&(l(p,s),m=s)}}const h=e=>e>1
function j(){m=a(p),n=a("trackLadderReset")
const o="collapseNewsArchive",i=t(c,r())
i.length>2&&(e(o,i[0].rows[1].cells[0]),s({prefName:o,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-Dw8dOcpE.js.map
