import{s as e,c as s}from"./setupPref-B9t5mdio.js"
import{aq as a,aV as t,p as r,co as o,d6 as c,ad as i,al as l,aB as p}from"./calfSystem-BAeDn21M.js"
import{p as d}from"./parseDateAsTimestamp-CGAhktCc.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-BPGp9fPI.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-D0IGtXy8.js"
let m=0,n=0
function f(e){if(n&&c("PvP Ladder",e.children[1].children[0])){const s=d(i(e.children[1].children[2]).replace("Posted: ",""))
s>m&&(l(p,s),m=s)}}const h=e=>e>1
function j(){m=a(p),n=a("trackLadderReset")
const c="collapseNewsArchive",i=t(o,r())
i.length>2&&(e(c,i[0].rows[1].cells[0]),s({prefName:c,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-1LMPnAKx.js.map
