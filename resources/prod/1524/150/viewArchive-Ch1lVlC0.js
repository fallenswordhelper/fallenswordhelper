import{s as e,c as s}from"./setupPref-mko5mks5.js"
import{ao as a,aW as t,p as r,cm as o,d8 as c,aa as i,aj as l,aA as p}from"./calfSystem-BGOTz8de.js"
import{p as m}from"./parseDateAsTimestamp-DRgS21SE.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-BSi4KRpL.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-DrUNGodL.js"
let d=0,n=0
function f(e){if(n&&c("PvP Ladder",e.children[1].children[0])){const s=m(i(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(l(p,s),d=s)}}const h=e=>e>1
function j(){d=a(p),n=a("trackLadderReset")
const c="collapseNewsArchive",i=t(o,r())
i.length>2&&(e(c,i[0].rows[1].cells[0]),s({prefName:c,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-Ch1lVlC0.js.map
