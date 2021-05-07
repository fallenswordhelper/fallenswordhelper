import{c as e}from"./collapse-0cece9c3.js"
import{I as a,a6 as s,b as t,p as r,d as o,aH as c,C as i,_ as n}from"./calfSystem-9942149b.js"
import{i as m}from"./insertHtmlAfterEnd-e5fb7af4.js"
import{p as l}from"./parseDateAsTimestamp-214240ae.js"
import{s as d}from"./simpleCheckbox-b43d710c.js"
import"./hideElement-0d0f9065.js"
import"./toggleForce-aa6abab1.js"
import"./isChecked-987a8a1c.js"
let p,f
function h(e){if(f&&c("PvP Ladder",e.children[1].children[0])){const a=l(i(e.children[1].children[2]).replace("Posted: ",""))
a>p&&(n(s,a),p=a)}}function b(e){return e>1}function j(){p=a(s),f=a("trackLadderReset")
const c="collapseNewsArchive",i=t(o,r)
i.length>2&&(!function(e,a){m(a,d(e))}(c,i[0].rows[2]),e({prefName:c,theTable:i[2],headInd:7,articleTest:b,extraFn:h}))}export default j
//# sourceMappingURL=viewArchive-69231b65.js.map
