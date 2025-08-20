import{d as t}from"./dialogMsg-rKdvzvMA.js"
import{dF as e,a2 as s,p as o,az as n,d as a,ay as r,bl as i,g as c,co as l,dG as u,c as d,au as f}from"./calfSystem-CT1aM4VG.js"
function g(t,e){f(e,t[e])}function p(){const e=i(c("HelperfshSettings").value)
if(l(e)){const s=e
u(s).forEach(d(g,s)),t("Settings loaded successfully!")}}function h(t,e){return t[e]=n(e),t}function y(){if(s())return
const t=function(){const t=[]
for(let s=0,o=window.localStorage.length;s<o;s++){const o=window.localStorage.key(s)
o.startsWith(e)&&t.push(o.replace(e,""))}return t}().reduce(h,{})
!function(t,e){a(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${r(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(o(),t),$("#HelperLoadSettings").on("click",p)}export{y as default}
//# sourceMappingURL=load-B5BsP0UH.js.map
