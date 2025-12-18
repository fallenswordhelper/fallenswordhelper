import{s as e,c as s}from"./setupPref-D2pS9EN5.js"
import{aA as a,b6 as t,p as r,cx as c,da as o,m as i,av as l,aM as p}from"./calfSystem-Cs6CSxoU.js"
import{p as m}from"./parseDateAsTimestamp-DIsrnFMo.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-C-dxZ6vG.js"
import"./isChecked-D_0do7nT.js"
let d=0,n=0
function f(e){if(n&&o("PvP Ladder",e.children[1].children[0])){const s=m(i(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(l(p,s),d=s)}}const h=e=>e>1
function j(){d=a(p),n=a("trackLadderReset")
const o="collapseNewsArchive",i=t(c,r())
i.length>2&&(e(o,i[0].rows[1].cells[0]),s({prefName:o,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-DxDc2arp.js.map
