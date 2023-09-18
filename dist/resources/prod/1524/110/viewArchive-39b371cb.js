import{s as e,c as s}from"./setupPref-416f0ad2.js"
import{ae as a,aj as t,av as r,p as o,bI as c,cr as i,a4 as l,aa as p}from"./calfSystem-929ac228.js"
import{p as m}from"./parseDateAsTimestamp-c49e9bdc.js"
import"./hideElement-baffa60f.js"
import"./toggleForce-6124e333.js"
import"./simpleCheckbox-9dbdc695.js"
import"./isChecked-3968d2ec.js"
import"./dateUtc-0fede27f.js"
let d=0,n=0
function f(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(p(t,s),d=s)}}const h=e=>e>1
function j(){d=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(c,o())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-39b371cb.js.map
