import{s as e,c as s}from"./setupPref-6H3fXvGI.js"
import{ai as a,an as t,az as r,p as c,bO as o,cw as i,a8 as l,ae as p}from"./calfSystem-G1dN925O.js"
import{p as m}from"./parseDateAsTimestamp-XLvjzemG.js"
import"./hideElement-RABq1RME.js"
import"./toggleForce-4Mg38a6N.js"
import"./simpleCheckbox-8V_A9jhn.js"
import"./isChecked-k2ijSL8v.js"
import"./dateUtc-7iQbgp_T.js"
let d=0,n=0
function h(e){if(n&&i("PvP Ladder",e.children[1].children[0])){const s=m(l(e.children[1].children[2]).replace("Posted: ",""))
s>d&&(p(t,s),d=s)}}const f=e=>e>1
function j(){d=a(t),n=a("trackLadderReset")
const i="collapseNewsArchive",l=r(o,c())
l.length>2&&(e(i,l[0].rows[1].cells[0]),s({prefName:i,theTable:l[2],headInd:7,articleTest:f,extraFn:h}))}export{j as default}
//# sourceMappingURL=viewArchive-qREAK-2x.js.map
