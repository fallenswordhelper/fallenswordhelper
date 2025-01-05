import{ao as e,g as t,am as s,o,b as i,m as a,i as n,w as r,p as l,ar as u,d as c,aj as f}from"./calfSystem-fMW-YMyF.js"
import{c as m}from"./createInput-CBvBhRjz.js"
import{t as p}from"./testQuant-D1-JWu0C.js"
import{b,r as d}from"./render-Be05Mg1k.js"
import"./roundToString-DdzxdzsF.js"
let h=0,g=0,w=0,y=0
const B=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],v=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]]
function k(e,t){return e.replace(t[0],t[1])}function N(e,t){return t.reduce(k,e)}function T(){const e=p(y.value)
e&&(h=e,f("bioEditLines",e),g.rows=h)}function S(){const e=function(e){let t=N(e,B)
return"guild"===s.cmd&&(t=N(t,v)),t}(g.value),t=d(e)
c(t||e,w)}function j(){h=e("bioEditLines"),g=t("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===s.cmd&&(e="hall"===s.subcmd?"fshBioHall":"fshBioGuild")
const t=a({className:`fshBioContainer ${e}`}),o=a({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
n(t,o),w=a({className:"fshBioPreview fshBioInner"}),n(t,w),n(g.parentNode,t)}(),"profile"===s.cmd&&r(l(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=a({innerHTML:"<br>Display "})
y=m({min:1,max:99,type:"number",value:h}),n(e,y),u(e," Lines ")
const t=m({className:"custombutton",value:"Update Rows To Show",type:"button"})
o(t,T),n(e,t),n(l(),e)}(),g.rows=h,"profile"===s.cmd&&o(g.parentNode,b),i(g,"keyup",S),S())}export{j as default}
//# sourceMappingURL=bioWidgets-xZNIQTI2.js.map
