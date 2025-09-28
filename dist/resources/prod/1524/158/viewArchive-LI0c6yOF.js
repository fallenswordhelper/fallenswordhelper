import{s as e,c as s}from"./setupPref-BLmrlJSG.js"
import{az as a,b5 as t,p as r,cx as c,d9 as o,l as i,au as l,aL as p}from"./calfSystem-CIuUjh4H.js"
import{p as d}from"./parseDateAsTimestamp-hdeGukFZ.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-D1e9ej5E.js"
import"./isChecked-D_0do7nT.js"
let m=0,n=0
function f(e){if(n&&o("PvP Ladder",e.children[1].children[0])){const s=d(i(e.children[1].children[2]).replace("Posted: ",""))
s>m&&(l(p,s),m=s)}}const h=e=>e>1
function j(){m=a(p),n=a("trackLadderReset")
const o="collapseNewsArchive",i=t(c,r())
i.length>2&&(e(o,i[0].rows[1].cells[0]),s({prefName:o,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-LI0c6yOF.js.map
