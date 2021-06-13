import{b as e,r as t}from"./render-b3d016b8.js"
import{I as s,z as o,c as a,o as i,f as r,m as n,h as l,i as c,p as u,B as f,Z as m}from"./calfSystem-cbf77dd7.js"
import{c as b}from"./createInput-64e90ab9.js"
import{i as p}from"./insertTextBeforeEnd-2a7d91d5.js"
import{t as d}from"./testQuant-95fb5e76.js"
import"./roundToString-34b7c935.js"
import"./numberIsNaN-c0e87dea.js"
import"./playerName-448aa7ca.js"
import"./testRange-e7fa6436.js"
let h,g,B,w
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],v=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function y(e,t){return e.replace(t[0],t[1])}function j(e,t){return t.reduce(y,e)}function k(){const e=d(w.value)
e&&(h=e,m("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=j(e,N)
return"guild"===a.cmd&&(t=j(t,v)),t}(g.value),s=t(e)
f(s||e,B)}function I(){h=s("bioEditLines"),g=o("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===a.cmd&&(e="hall"===a.subcmd?"fshBioHall":"fshBioGuild")
const t=n({className:`fshBioContainer ${e}`}),s=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
l(t,s),B=n({className:"fshBioPreview fshBioInner"}),l(t,B),l(g.parentNode,t)}(),"profile"===a.cmd&&c(u,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
w=b({min:1,max:99,type:"number",value:h}),l(e,w),p(e," Lines ")
const t=b({className:"custombutton",value:"Update Rows To Show",type:"button"})
i(t,k),l(e,t),l(u,e)}(),g.rows=h,"profile"===a.cmd&&i(g.parentNode,e),r(g,"keyup",T),T())}export default I
//# sourceMappingURL=bioWidgets-fe3e72f7.js.map
