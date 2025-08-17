import{s as e,c as s}from"./setupPref-BWXtDAzI.js"
import{az as a,b4 as t,p as r,cq as c,db as o,l as i,au as l,aK as p}from"./calfSystem-CT1aM4VG.js"
import{p as d}from"./parseDateAsTimestamp-B5Csql9l.js"
import"./toggleForce-br4z9gGd.js"
import"./simpleCheckbox-DX3v3qR1.js"
import"./isChecked-D_0do7nT.js"
import"./dateUtc-Bgvvwji4.js"
let m=0,n=0
function f(e){if(n&&o("PvP Ladder",e.children[1].children[0])){const s=d(i(e.children[1].children[2]).replace("Posted: ",""))
s>m&&(l(p,s),m=s)}}const h=e=>e>1
function j(){m=a(p),n=a("trackLadderReset")
const o="collapseNewsArchive",i=t(c,r())
i.length>2&&(e(o,i[0].rows[1].cells[0]),s({prefName:o,theTable:i[2],headInd:7,articleTest:h,extraFn:f}))}export{j as default}
//# sourceMappingURL=viewArchive-CkN8LEhp.js.map
