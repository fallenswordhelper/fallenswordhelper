import{d as t}from"./dialogMsg-rKdvzvMA.js"
import{dm as e,x as s,p as o,d as n,an as a,ba as r,g as i,cj as c,dn as l,c as u,ao as d,aj as f}from"./calfSystem-CvwhhJv4.js"
function g(t,e){f(e,t[e])}function p(){const e=r(i("HelperfshSettings").value)
if(c(e)){const s=e
l(s).forEach(u(g,s)),t("Settings loaded successfully!")}}function h(t,e){return t[e]=d(e),t}function b(){if(s())return
const t=function(){const t=[]
for(let s=0,o=window.localStorage.length;s<o;s++){const o=window.localStorage.key(s)
o.startsWith(e)&&t.push(o.replace(e,""))}return t}().reduce(h,{})
!function(t,e){n(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${a(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(o(),t),$("#HelperLoadSettings").on("click",p)}export{b as default}
//# sourceMappingURL=load-CLuubxXu.js.map
