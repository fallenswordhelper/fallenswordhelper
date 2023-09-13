import{s as e,c as s}from"./setupPref-dc747bdf.js"
import{af as a,ak as t,aw as r,p as o,bK as c,cu as i,a5 as l,ab as p}from"./calfSystem-2f15e074.js"
import{p as m}from"./parseDateAsTimestamp-bee9779f.js"
import"./hideElement-baffa60f.js"
import"./toggleForce-6124e333.js"
import"./simpleCheckbox-45958795.js"
import"./isChecked-3968d2ec.js"
import"./dateUtc-02159818.js"
let d=0,n=0
function f(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(p(t,s),d=s)}}const h=e=>e>1
function j(){d=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(c,o())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-31cb7700.js.map
