import{d as t}from"./dialogMsg-7c5fba89.js"
import{cH as e,w as s,p as o,s as n,ac as a,aL as r,g as i,bF as c,c as l,ad as u,a9 as f}from"./calfSystem-4830a18d.js"
import{k as d}from"./keys-ae03eaa2.js"
function g(t,e){f(e,t[e])}function p(){const e=r(i("HelperfshSettings").value)
if(c(e)){const s=e
d(s).forEach(l(g,s)),t("Settings loaded successfully!")}}function h(t,e){return t[e]=u(e),t}function m(){if(s())return
const t=function(){const t=[]
for(let s=0,o=window.localStorage.length;s<o;s++){const o=window.localStorage.key(s)
o.startsWith(e)&&t.push(o.replace(e,""))}return t}().reduce(h,{})
!function(t,e){n(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${a(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}(o(),t),$("#HelperLoadSettings").on("click",p)}export{m as default}
//# sourceMappingURL=load-6cb298eb.js.map
