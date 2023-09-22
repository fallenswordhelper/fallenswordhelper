import{ad as e,g as t,ab as s,o,b as i,l as n,i as a,v as r,p as l,s as u,a9 as c}from"./calfSystem-4830a18d.js"
import{c as f}from"./createInput-08b5e815.js"
import{i as m}from"./insertTextBeforeEnd-1af4f779.js"
import{t as p}from"./testQuant-69a26f83.js"
import{b,r as d}from"./render-5caa9350.js"
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
const t=n({className:`fshBioContainer ${e}`}),o=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
a(t,o),w=n({className:"fshBioPreview fshBioInner"}),a(t,w),a(g.parentNode,t)}(),"profile"===s.cmd&&r(l(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
y=f({min:1,max:99,type:"number",value:h}),a(e,y),m(e," Lines ")
const t=f({className:"custombutton",value:"Update Rows To Show",type:"button"})
o(t,T),a(e,t),a(l(),e)}(),g.rows=h,"profile"===s.cmd&&o(g.parentNode,b),i(g,"keyup",j),j())}export{S as default}
//# sourceMappingURL=bioWidgets-0489a1b2.js.map
