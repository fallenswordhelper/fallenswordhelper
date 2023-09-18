import{ae as e,g as t,ac as s,o,b as i,l as a,i as n,v as r,p as l,s as u,aa as c}from"./calfSystem-abb16b0d.js"
import{c as f}from"./createInput-c5f39cca.js"
import{i as m}from"./insertTextBeforeEnd-8257e7ec.js"
import{t as p}from"./testQuant-69a26f83.js"
import{b,r as d}from"./render-c3cfbb55.js"
import"./numberIsNaN-a40c3bbb.js"
import"./roundToString-b56b87fd.js"
import"./keys-ae03eaa2.js"
let h=0,g=0,w=0,y=0
const B=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],v=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]]
function N(e,t){return e.replace(t[0],t[1])}function k(e,t){return t.reduce(N,e)}function T(){const e=p(y.value)
e&&(h=e,c("bioEditLines",e),g.rows=h)}function j(){const e=function(e){let t=k(e,B)
return"guild"===s.cmd&&(t=k(t,v)),t}(g.value),t=d(e)
u(t||e,w)}function S(){h=e("bioEditLines"),g=t("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===s.cmd&&(e="hall"===s.subcmd?"fshBioHall":"fshBioGuild")
const t=a({className:`fshBioContainer ${e}`}),o=a({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
n(t,o),w=a({className:"fshBioPreview fshBioInner"}),n(t,w),n(g.parentNode,t)}(),"profile"===s.cmd&&r(l(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=a({innerHTML:"<br>Display "})
y=f({min:1,max:99,type:"number",value:h}),n(e,y),m(e," Lines ")
const t=f({className:"custombutton",value:"Update Rows To Show",type:"button"})
o(t,T),n(e,t),n(l(),e)}(),g.rows=h,"profile"===s.cmd&&o(g.parentNode,b),i(g,"keyup",j),j())}export{S as default}
//# sourceMappingURL=bioWidgets-202ba98a.js.map
