import{c as e}from"./collapse-b9de820a.js"
import{I as s,a6 as a,b as t,p as r,d as o,aA as c,C as i,_ as d}from"./calfSystem-60c20ae9.js"
import{i as n}from"./insertHtmlAfterEnd-ccf5624b.js"
import{p as m}from"./parseDateAsTimestamp-dd780cb6.js"
import{s as l}from"./simpleCheckbox-14129290.js"
import"./hideElement-4575b6b4.js"
import"./toggleForce-465fdd4f.js"
import"./isChecked-7bdba1ab.js"
let p,f
function b(e){if(f&&c("PvP Ladder",e.children[1].children[0])){const s=m(i(e.children[1].children[2]).replace("Posted: ",""))
s>p&&(d(a,s),p=s)}}function h(e){return e>1}function j(){p=s(a),f=s("trackLadderReset")
const c="collapseNewsArchive",i=t(o,r)
i.length>2&&(!function(e,s){n(s,l(e))}(c,i[0].rows[2]),e({prefName:c,theTable:i[2],headInd:7,articleTest:h,extraFn:b}))}export default j
//# sourceMappingURL=viewArchive-867c03f3.js.map
