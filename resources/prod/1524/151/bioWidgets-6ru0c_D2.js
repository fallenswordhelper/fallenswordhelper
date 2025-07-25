import{aB as e,g as t,az as s,o,b as a,w as i,i as n,a3 as r,p as l,aE as u,e as c,aw as f}from"./calfSystem-C1X5YxJZ.js"
import{c as m}from"./createInput-LMpmIneO.js"
import{t as p}from"./testQuant-rnpapNyZ.js"
import{b,r as d}from"./render-CddaVG6W.js"
import"./roundToString-BGDlzdGc.js"
let h=0,g=0,w=0,B=0
const y=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(?<type>\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],v=[[/\[(?<type>\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](?<line>[^[]*)/g,"<li>$1</li>"]]
function k(e,t){return e.replace(t[0],t[1])}function N(e,t){return t.reduce(k,e)}function T(){const e=p(B.value)
e&&(h=e,f("bioEditLines",e),g.rows=h)}function S(){const e=function(e){let t=N(e,y)
return"guild"===s.cmd&&(t=N(t,v)),t}(g.value),t=d(e)
c(t||e,w)}function j(){h=e("bioEditLines"),g=t("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===s.cmd&&(e="hall"===s.subcmd?"fshBioHall":"fshBioGuild")
const t=i({className:`fshBioContainer ${e}`}),o=i({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
n(t,o),w=i({className:"fshBioPreview fshBioInner"}),n(t,w),n(g.parentNode,t)}(),"profile"===s.cmd&&r(l(),'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=i({innerHTML:"<br>Display "})
B=m({min:1,max:99,type:"number",value:h}),n(e,B),u(e," Lines ")
const t=m({className:"custombutton",value:"Update Rows To Show",type:"button"})
o(t,T),n(e,t),n(l(),e)}(),g.rows=h,"profile"===s.cmd&&o(g.parentNode,b),a(g,"keyup",S),S())}export{j as default}
//# sourceMappingURL=bioWidgets-6ru0c_D2.js.map
