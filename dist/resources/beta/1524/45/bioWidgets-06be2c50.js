import{b as e,r as t}from"./render-9c7d3f72.js"
import{I as s,z as o,c as i,o as a,f as r,m as n,h as l,i as u,p as c,B as f,Z as m}from"./calfSystem-ae2e69af.js"
import{c as p}from"./createInput-90835289.js"
import{i as b}from"./insertTextBeforeEnd-df0ee8f9.js"
import{t as d}from"./testQuant-0b8e71aa.js"
import"./roundToString-0b0f4906.js"
import"./numberIsNaN-c7db67d0.js"
import"./playerName-1b929217.js"
import"./testRange-e39d7991.js"
let h,g,B,w
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],v=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function y(e,t){return e.replace(t[0],t[1])}function j(e,t){return t.reduce(y,e)}function k(){const e=d(w.value)
e&&(h=e,m("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=j(e,N)
return"guild"===i.cmd&&(t=j(t,v)),t}(g.value),s=t(e)
f(s||e,B)}function I(){h=s("bioEditLines"),g=o("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===i.cmd&&(e="hall"===i.subcmd?"fshBioHall":"fshBioGuild")
const t=n({className:`fshBioContainer ${e}`}),s=n({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
l(t,s),B=n({className:"fshBioPreview fshBioInner"}),l(t,B),l(g.parentNode,t)}(),"profile"===i.cmd&&u(c,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=n({innerHTML:"<br>Display "})
w=p({min:1,max:99,type:"number",value:h}),l(e,w),b(e," Lines ")
const t=p({className:"custombutton",value:"Update Rows To Show",type:"button"})
a(t,k),l(e,t),l(c,e)}(),g.rows=h,"profile"===i.cmd&&a(g.parentNode,e),r(g,"keyup",T),T())}export default I
//# sourceMappingURL=bioWidgets-06be2c50.js.map
