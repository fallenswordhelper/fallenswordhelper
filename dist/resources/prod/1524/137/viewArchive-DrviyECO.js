import{s as e,c as s}from"./setupPref-CfpBuvL_.js"
import{ai as a,an as t,aB as r,p as c,bV as o,cE as i,a8 as l,ae as p}from"./calfSystem-DZGU7L1H.js"
import{p as m}from"./parseDateAsTimestamp-CSNJMBXT.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-BbjKGwmy.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-BkaqgLBt.js"
let n=0,d=0
function f(e){if(d&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>n&&(p(t,s),n=s)}}const h=e=>e>1
function j(){n=a(t),d=a("trackLadderReset")
const i="collapseNewsArchive",l=r(o,c())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-DrviyECO.js.map
