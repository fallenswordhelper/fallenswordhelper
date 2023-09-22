import{s as e,c as s}from"./setupPref-14de56b2.js"
import{ad as a,ai as t,au as r,p as o,bH as c,cr as i,a3 as l,a9 as p}from"./calfSystem-4830a18d.js"
import{p as m}from"./parseDateAsTimestamp-2956e520.js"
import"./hideElement-85f33001.js"
import"./toggleForce-6124e333.js"
import"./simpleCheckbox-ed7e63fb.js"
import"./isChecked-3968d2ec.js"
import"./dateUtc-36fb94b9.js"
let d=0,n=0
function f(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(p(t,s),d=s)}}const h=e=>e>1
function j(){d=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(c,o())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-dece4fce.js.map
