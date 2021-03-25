import{b as e,r as t}from"./render-f6f6ed05.js"
import{I as s,z as o,c as a,o as i,f as r,m as n,h as l,i as c,p as u,B as f,_ as m}from"./calfSystem-4a40365f.js"
import{c as d}from"./createInput-7fa974b4.js"
import{i as p}from"./insertTextBeforeEnd-dd2dce67.js"
import{t as b}from"./testQuant-6e089d1c.js"
import"./roundToString-a9a284a9.js"
import"./numberIsNaN-891c59d9.js"
import"./playerName-9305cfda.js"
import"./toLowerCase-fa335220.js"
import"./testRange-7cadf27e.js"
let h,g,w,B
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],j=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function v(e,t){return e.replace(t[0],t[1])}function y(e,t){return t.reduce(v,e)}function k(){const e=b(B.value)
e&&(h=e,m("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=y(e,N)
return"guild"===a.cmd&&(t=y(t,j)),t}(g.value),s=t(e)
f(s||e,w)}function I(){h=s("bioEditLines"),g=o("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===a.cmd&&(e="hall"===a.subcmd?"fshBioHall":"fshBioGuild")
const t=n({className:`fshBioContainer ${e}`}),s=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
l(t,s),w=n({className:"fshBioPreview fshBioInner"}),l(t,w),l(g.parentNode,t)}(),"profile"===a.cmd&&c(u,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
B=d({min:1,max:99,type:"number",value:h}),l(e,B),p(e," Lines ")
const t=d({className:"custombutton",value:"Update Rows To Show",type:"button"})
i(t,k),l(e,t),l(u,e)}(),g.rows=h,"profile"===a.cmd&&i(g.parentNode,e),r(g,"keyup",T),T())}export default I
//# sourceMappingURL=bioWidgets-775f3da3.js.map
