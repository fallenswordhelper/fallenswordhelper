import{ai as e,g as t,ag as s,k as o,i,v as n,p as a,e as r,ad as l,o as u,c}from"./calfSystem-Blt4DbaE.js"
import{c as f}from"./createInput-CZBTxG_u.js"
import{i as m}from"./insertTextBeforeEnd-C2DfAAnt.js"
import{t as p}from"./testQuant-CUL735o8.js"
import{b as d,r as b}from"./render-DbnMrk7n.js"
import"./numberIsNaN-CGkd1jiA.js"
import"./roundToString-Hif1MLyB.js"
import"./keys-CFr_h3Bx.js"
let h=0,g=0,w=0,y=0
const B=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],k=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]]
function v(e,t){return e.replace(t[0],t[1])}function N(e,t){return t.reduce(v,e)}function T(){const e=p(y.value)
e&&(h=e,l("bioEditLines",e),g.rows=h)}function j(){const e=function(e){let t=N(e,B)
return"guild"===s.cmd&&(t=N(t,k)),t}(g.value),t=b(e)
c(t||e,w)}function S(){h=e("bioEditLines"),g=t("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===s.cmd&&(e="hall"===s.subcmd?"fshBioHall":"fshBioGuild")
const t=o({className:`fshBioContainer ${e}`}),n=o({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
i(t,n),w=o({className:"fshBioPreview fshBioInner"}),i(t,w),i(g.parentNode,t)}(),"profile"===s.cmd&&n(a(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=o({innerHTML:"<br>Display "})
y=f({min:1,max:99,type:"number",value:h}),i(e,y),m(e," Lines ")
const t=f({className:"custombutton",value:"Update Rows To Show",type:"button"})
r(t,T),i(e,t),i(a(),e)}(),g.rows=h,"profile"===s.cmd&&r(g.parentNode,d),u(g,"keyup",j),j())}export{S as default}
//# sourceMappingURL=bioWidgets-CUMkHgXE.js.map
