import{s as e,c as s}from"./setupPref-BUz771gj.js"
import{aA as a,b5 as t,p as r,ct as c,d6 as o,l as i,av as l,aL as p}from"./calfSystem-79LsojAC.js"
import{p as d}from"./parseDateAsTimestamp-CfPUfnnR.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-GIXRLUIF.js"
import"./isChecked-D_0do7nT.js"
let m=0,n=0
function f(e){if(n&&o("PvP Ladder",e.children[1].children[0])){const s=d(i(e.children[1].children[2]).replace("Posted: ",""))
s>m&&(l(p,s),m=s)}}const h=e=>e>1
function j(){m=a(p),n=a("trackLadderReset")
const o="collapseNewsArchive",i=t(c,r())
i.length>2&&(e(o,i[0].rows[1].cells[0]),s({prefName:o,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-sd7eQRuP.js.map
