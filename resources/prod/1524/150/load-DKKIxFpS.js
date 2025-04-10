import{d as t}from"./dialogMsg-rKdvzvMA.js"
import{dD as e,A as s,p as o,ao as n,h as a,an as r,bb as i,g as c,ck as l,dE as u,e as d,aj as f}from"./calfSystem-BGOTz8de.js"
function g(t,e){f(e,t[e])}function p(){const e=i(c("HelperfshSettings").value)
if(l(e)){const s=e
u(s).forEach(d(g,s)),t("Settings loaded successfully!")}}function h(t,e){return t[e]=n(e),t}function b(){if(s())return
const t=function(){const t=[]
for(let s=0,o=window.localStorage.length;s<o;s++){const o=window.localStorage.key(s)
o.startsWith(e)&&t.push(o.replace(e,""))}return t}().reduce(h,{})
!function(t,e){a(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${r(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(o(),t),$("#HelperLoadSettings").on("click",p)}export{b as default}
//# sourceMappingURL=load-DKKIxFpS.js.map
