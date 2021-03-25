import{b as e,r as t}from"./render-b84a8255.js"
import{I as s,z as o,c as i,o as a,f as r,m as n,h as l,i as c,p as u,B as m,a0 as f}from"./calfSystem-5d0c721b.js"
import{c as b}from"./createInput-73c334d2.js"
import{i as p}from"./insertTextBeforeEnd-74c6d79b.js"
import{t as d}from"./testQuant-fb4cc4a6.js"
import"./roundToString-17a19d90.js"
import"./numberIsNaN-a6723163.js"
import"./playerName-6d380f14.js"
import"./toLowerCase-9d38da0b.js"
import"./testRange-4b09bc47.js"
let h,g,w,B
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],j=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function v(e,t){return e.replace(t[0],t[1])}function y(e,t){return t.reduce(v,e)}function k(){const e=d(B.value)
e&&(h=e,f("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=y(e,N)
return"guild"===i.cmd&&(t=y(t,j)),t}(g.value),s=t(e)
m(s||e,w)}function I(){h=s("bioEditLines"),g=o("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===i.cmd&&(e="hall"===i.subcmd?"fshBioHall":"fshBioGuild")
const t=n({className:`fshBioContainer ${e}`}),s=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
l(t,s),w=n({className:"fshBioPreview fshBioInner"}),l(t,w),l(g.parentNode,t)}(),"profile"===i.cmd&&c(u,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
B=b({min:1,max:99,type:"number",value:h}),l(e,B),p(e," Lines ")
const t=b({className:"custombutton",value:"Update Rows To Show",type:"button"})
a(t,k),l(e,t),l(u,e)}(),g.rows=h,"profile"===i.cmd&&a(g.parentNode,e),r(g,"keyup",T),T())}export default I
//# sourceMappingURL=bioWidgets-ec1aee87.js.map
