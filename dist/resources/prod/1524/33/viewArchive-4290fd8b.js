import{c as e}from"./collapse-86dfd70b.js"
import{H as s,a4 as t,b as r,p as a,d as o,az as i,B as c,Z as d}from"./calfSystem-0708a9bb.js"
import{i as n}from"./insertHtmlAfterEnd-409ee96b.js"
import{p as m}from"./parseDateAsTimestamp-5250bd8e.js"
import{s as l}from"./simpleCheckbox-57c00d72.js"
import"./hideElement-eb117e0e.js"
import"./toggleForce-6831dfcc.js"
import"./isChecked-622b73bf.js"
let p,f
function b(e){if(f&&i("PvP Ladder",e.children[1].children[0])){const s=m(c(e.children[1].children[2]).replace("Posted: ",""))
s>p&&(d(t,s),p=s)}}function h(e){return e>1}function j(){p=s(t),f=s("trackLadderReset")
const i="collapseNewsArchive",c=r(o,a)
c.length>2&&(!function(e,s){n(s,l(e))}(i,c[0].rows[2]),e({prefName:i,theTable:c[2],headInd:7,articleTest:h,extraFn:b}))}export default j
//# sourceMappingURL=viewArchive-4290fd8b.js.map
