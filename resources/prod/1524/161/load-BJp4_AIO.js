import{d as t}from"./dialogMsg-rKdvzvMA.js"
import{dv as e,a4 as s,p as o,aA as n,d as a,az as r,bq as i,g as c,cv as l,c as u,av as f}from"./calfSystem-Cs6CSxoU.js"
import{k as d}from"./keys-CFr_h3Bx.js"
function g(t,e){f(e,t[e])}function p(){const e=i(c("HelperfshSettings").value)
if(l(e)){const s=e
d(s).forEach(u(g,s)),t("Settings loaded successfully!")}}function h(t,e){return t[e]=n(e),t}function m(){if(s())return
const t=function(){const t=[]
for(let s=0,o=window.localStorage.length;s<o;s++){const o=window.localStorage.key(s)
o.startsWith(e)&&t.push(o.replace(e,""))}return t}().reduce(h,{})
!function(t,e){a(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${r(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(o(),t),$("#HelperLoadSettings").on("click",p)}export{m as default}
//# sourceMappingURL=load-BJp4_AIO.js.map
